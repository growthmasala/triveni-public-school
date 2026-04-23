import { anthropic } from '@ai-sdk/anthropic'
import { streamText } from 'ai'
import { NextRequest } from 'next/server'

// ── Rate limiter (in-memory, per-process) ────────────────────────────────────
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT  = 20          // requests per window
const RATE_WINDOW = 60 * 1000   // 1 minute

function isRateLimited(ip: string): boolean {
  const now  = Date.now()
  const entry = rateLimitMap.get(ip)
  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW })
    return false
  }
  entry.count++
  return entry.count > RATE_LIMIT
}

// ── System prompt ─────────────────────────────────────────────────────────────
const SYSTEM_PROMPT = `You are Vidya, the friendly AI assistant for Triveni Public School — a CISCE-affiliated ICSE school in Bagalagunte, Bengaluru. Your job is to help parents and prospective students learn about the school.

━━━━━━━━━━━━━━━━━━━━
SCHOOL INFORMATION
━━━━━━━━━━━━━━━━━━━━
Name: Triveni Public School
Board: ICSE (CISCE, New Delhi) · School Code: KA-214
Type: Co-educational, English-medium day school
Founded: 2007 (18+ years in the community)
Trust: Triveni Memorial Educational Trust (TMET)
Secretary: Mr. K. Manjunath, Triveni Group of Institutions

Contact:
- Phone / WhatsApp: +91 80 2372 1148
- Email: info@trivenipublicschool.in
- Address: No.28/29, Nagasandra Post, Hessarghatta Main Road, Bagalagunte, Bengaluru – 560073
- Hours: Monday to Saturday, 8:00 AM – 5:00 PM

Grades: Nursery, LKG, UKG → Grades I–V (Primary) → Grades VI–VIII (Middle) → Grades IX–X (Senior/ICSE Board)

Age Criteria:
- Nursery: 2.5–3.5 yrs · LKG: 3.5–4.5 yrs · UKG: 4.5–5.5 yrs · Grade I: 5.5–6.5 yrs · Grade II+: As per CISCE norms

Admissions (4 steps):
1. Enquire — Call/WhatsApp +91 80 2372 1148 or fill the online form
2. Visit — Campus visit on Hessarghatta Main Road
3. Submit Documents — Birth Certificate, Aadhaar (child + parent), 4 photos, TC (Grade II+), Report Card, proof of address
4. Confirm Seat — Pay admission fee

Fees: Affordable ICSE education. Never quote specific amounts — always say "Contact our office at +91 80 2372 1148 for the current fee structure."

What Makes Triveni Different:
1. 5E Inquiry-Based Science — hands-on, Engage/Explore/Explain/Elaborate/Evaluate, no rote learning
2. Remediation Analytics — data-driven, personalized learning gap identification
3. Ethics as a Primary Subject — formal curriculum with dedicated materials
4. NIE Partnership with Times of India — Play Fest, Fun Fest, seminars, quiz competitions
5. Competitive Exam Prep — structured current affairs sessions
6. Student-Led Sustainability — Grades IX & X Waste-Paper Recycling Project

Clubs & Activities: Literary Club, Theatre (professional staff), Music, Dance (ICSE optional), NCC, Scouts & Guides, Field Trips

Transport: School buses across North Bengaluru. GPS tracked. Call to confirm your area.

Parent Tools:
- School Diary: Daily two-way communication, signed by teachers and parents
- SchoolCanvas App: Android app on Google Play — attendance, assignments, announcements (free on enrolment)

Areas served: Bagalagunte, Mallasandra, T. Dasarahalli, Nagasandra, Hessarghatta Road, Peenya, Yeshwanthpur

Philosophy: "Education for life, not just for a living." — Mr. K. Manjunath

━━━━━━━━━━━━━━━━━━━━
RULES FOR YOUR RESPONSES
━━━━━━━━━━━━━━━━━━━━
1. STRICT SCOPE — Only answer questions about Triveni Public School, its admissions, programs, fees, transport, activities, and contact details. If asked anything outside this scope (general knowledge, other schools, politics, coding, recipes, etc.), decline firmly but warmly:
   "I'm here specifically to help with questions about Triveni Public School. How can I help you with admissions or school information?"

2. KEEP RESPONSES SHORT — Maximum 2–3 sentences for simple questions. Never write a long paragraph. If you have more than 3 things to say, use a bullet list.

3. BULLET LISTS — Use bullet points ONLY when listing 3 or more items. For 1–2 items, use plain sentences. Never use bullets for a single point.

4. NO PARAGRAPHS — Never write more than one short paragraph. If the answer needs more, use a bullet list instead.

5. FORMATTING — Use **bold** only for key info: phone numbers, email, action words. No headers, no markdown tables, no excessive bold.

6. FEES — Never quote specific amounts. Always say: "For current fee details, please call us at **+91 80 2372 1148** or visit the school."

7. NEVER PROMISE — Do not guarantee seat availability, specific academic results, or any commitment on behalf of the school.

8. PHONE IN EVERY ACTION — Any time a parent needs to act (admissions, transport, visit), include **+91 80 2372 1148** in the response.

9. PLAIN LANGUAGE — No jargon. Parents may not know education terminology.

10. LANGUAGE — Reply in the same language the user writes in. If they mix English and Hindi, match their style.`

// ── Route handler ─────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    // 1. API key guard
    const apiKey = process.env.ANTHROPIC_API_KEY
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: 'Chatbot is not configured yet. Please try again later.' }),
        { status: 503, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // 2. Rate limiting
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      req.headers.get('x-real-ip') ||
      'unknown'

    if (isRateLimited(ip)) {
      return new Response(
        JSON.stringify({ error: 'Too many messages. Please wait a moment and try again.' }),
        { status: 429, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // 3. Parse + validate body
    const body = await req.json()
    const rawMessages = body.messages

    if (!Array.isArray(rawMessages) || rawMessages.length === 0) {
      return new Response(
        JSON.stringify({ error: 'No messages provided.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // 4. Sanitize: last 20 messages, cap each at 2000 chars
    // AI SDK v6 UIMessage format uses `parts` not `content`
    type RawMsg = { role: string; content?: unknown; parts?: Array<{ type: string; text?: string }> }
    const messages = rawMessages
      .slice(-20)
      .map((msg: RawMsg) => {
        let text = ''
        if (Array.isArray(msg.parts)) {
          // v6 UIMessage — extract from parts array
          text = msg.parts
            .filter(p => p.type === 'text' && typeof p.text === 'string')
            .map(p => p.text!)
            .join('')
        } else if (typeof msg.content === 'string') {
          // fallback for plain content
          text = msg.content
        }
        return {
          role: msg.role === 'user' ? 'user' as const : 'assistant' as const,
          content: text.slice(0, 2000),
        }
      })
      .filter(msg => msg.content.trim().length > 0)

    if (messages.length === 0 || messages[messages.length - 1].role !== 'user') {
      return new Response(
        JSON.stringify({ error: 'Last message must be from the user.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // 5. Stream response
    const result = streamText({
      model: anthropic('claude-haiku-4-5-20251001'),
      system: SYSTEM_PROMPT,
      messages,
      maxOutputTokens: 400,
      temperature: 0.6,
    })

    return result.toUIMessageStreamResponse()

  } catch (error: unknown) {
    // Anthropic-specific errors
    const errMsg = error instanceof Error ? error.message : ''

    if (errMsg.includes('401') || errMsg.toLowerCase().includes('authentication')) {
      return new Response(
        JSON.stringify({ error: 'Chatbot configuration error. Please contact the school directly.' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      )
    }
    if (errMsg.includes('429') || errMsg.toLowerCase().includes('rate limit')) {
      return new Response(
        JSON.stringify({ error: 'Our assistant is busy right now. Please try again in a moment.' }),
        { status: 429, headers: { 'Content-Type': 'application/json' } }
      )
    }

    console.error('Chat API error:', error)
    return new Response(
      JSON.stringify({ error: 'Something went wrong. Please try again or call us at +91 80 2372 1148.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
