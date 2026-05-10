import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import CTABanner from '@/components/sections/CTABanner'
import SplitSection from '@/components/sections/SplitSection'
import PedagogyProgrammes, { type Programme } from '@/components/sections/PedagogyProgrammes'
import SectionLabel from '@/components/ui/SectionLabel'
import FadeIn from '@/components/ui/FadeIn'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Our Pedagogy | How We Teach – Triveni Balavikas Central School',
  description: 'Discover how Triveni Balavikas Central School teaches — 5E Inquiry Science, Remedial Support, Ethics as a core subject, NIE partnership with The Times of India and The Hindu, and more.',
  alternates: { canonical: 'https://www.trivenibalavikas.in/pedagogy' },
}

const programs: Programme[] = [
  {
    icon: 'ri-microscope-line',
    tag: '01',
    title: '5E Inquiry-Based Science',
    summary: 'Science the way scientists actually think.',
    detail: 'Built on the globally proven 5E model — Engage, Explore, Explain, Elaborate, Evaluate. Students discover principles through hands-on inquiry, not memorisation.',
    points: [
      'Engage, Explore, Explain — every concept, every class',
      'Hands-on experimentation builds genuine understanding',
      'Students learn how to think scientifically, not just answer questions',
    ],
  },
  {
    icon: 'ri-bar-chart-grouped-line',
    tag: '02',
    title: 'Remedial Support Programme',
    summary: 'Finds every gap — and closes it.',
    detail: 'A structured after-school programme (3:15–4:00 p.m.) that pinpoints individual learning gaps and closes them — one student at a time.',
    points: [
      'Identifies individual gaps, not class-wide assumptions',
      'Personalised guidance, not generic revision',
      'Bridges classroom instruction and exam readiness',
    ],
  },
  {
    icon: 'ri-scales-line',
    tag: '03',
    title: 'Ethics as a Core Subject',
    summary: 'Character formation is on the timetable, not a poster on the wall.',
    detail: 'A formal subject with dedicated resource materials. Structured sessions systematically build moral character, integrity and civic responsibility.',
    points: [
      'Dedicated resource materials and structured sessions',
      'Continuous development, not one-off interventions',
      'Builds empathy, integrity and civic responsibility',
    ],
  },
  {
    icon: 'ri-newspaper-line',
    tag: '04',
    title: 'Newspaper in Education (NIE)',
    summary: 'The real world enters the classroom through The Times of India and The Hindu.',
    detail: 'An official partnership with The Times of India and The Hindu. Students participate in NIE Play Fest, Fun Fest, seminars and quiz competitions — building skills no textbook can replicate.',
    points: [
      'Official partner of two leading national dailies',
      'Play Fest, Fun Fest, workshops and inter-school quizzes',
      'Builds critical reading, analytical thinking and communication',
    ],
  },
  {
    icon: 'ri-trophy-line',
    tag: '05',
    title: 'Competitive Exam Preparation',
    summary: 'Beyond the syllabus — preparing students for the world.',
    detail: 'Structured current-affairs sessions integrated into the weekly timetable, preparing students for national and international competitive examinations.',
    points: [
      'Current affairs woven into the regular schedule',
      'Preparation for national and international exams',
      'Special emphasis through Middle School',
    ],
  },
  {
    icon: 'ri-recycle-line',
    tag: '06',
    title: 'Sustainability in Action',
    summary: 'Real ownership of a real environmental challenge.',
    detail: 'Students lead our Waste-Paper Recycling Project — a live, ongoing initiative where they collect, process and recycle paper waste generated on campus. Not a simulation, a real responsibility.',
    points: [
      'Student-led, hands-on, ongoing',
      'Tackles a real environmental impact',
      'Builds leadership and accountability',
    ],
  },
]

export default function PedagogyPage() {
  return (
    <>
      <PageHero
        title="Our Approach to Teaching"
        description="At Triveni, learning extends far beyond the textbook. Every programme highlighted here is actively implemented in our classrooms — reflecting not aspirations, but everyday practice."
        badge="Our Pedagogy"
      />

      {/* Intro */}
      <section className="py-22">
        <div className="container-main">
          <SplitSection
            imageSrc="/images/pedagogy-math-spectra.jpg"
            imageAlt=""
            imageBadge="Math Spectra · Applied Learning"
            imageBadgeIcon="ri-pencil-ruler-2-line"
          >
            <FadeIn direction="right">
              <SectionLabel>The Triveni Difference</SectionLabel>
              <h2 className="font-urbanist font-extrabold text-[clamp(28px,4vw,42px)] text-[#1A1A2A] mb-4">We Don&apos;t Teach to the Textbook. We Teach to the Child.</h2>
              <blockquote className="border-l-4 border-accent pl-5 italic text-body text-[16px] leading-[1.75] mb-5">
                &ldquo;Intelligence plus character — that is the goal of true education.&rdquo;
              </blockquote>
              <p className="text-muted leading-[1.8] mb-4">
                In a landscape where many schools promise quality education, Triveni distinguishes itself through <strong className="text-body">purposeful practice</strong>. Our approach is centred on how children truly learn — how they explore, question, reflect and grow — not merely how they perform in examinations.
              </p>
              <p className="text-muted leading-[1.8] mb-6">
                Each programme we offer is thoughtfully designed to nurture curiosity, build character and strengthen understanding. These are not ideas on paper, but lived experiences within our classrooms — visible in our students&apos; confidence, thinking and values, and affirmed by the trust of our parent community.
              </p>
              <Button href="/admissions" variant="accent">
                <i className="ri-user-add-line" /> Enquire for Admission
              </Button>
            </FadeIn>
          </SplitSection>
        </div>
      </section>

      {/* Programme Cards */}
      <section className="py-22 bg-surface">
        <div className="container-main">
          <div className="text-center mb-14">
            <SectionLabel>Six Programmes</SectionLabel>
            <h2 className="font-urbanist font-extrabold text-[clamp(28px,4vw,42px)] text-[#1A1A2A] mb-4">What Makes Our Teaching Different</h2>
            <p className="text-muted text-[17px] max-w-[560px] mx-auto leading-[1.75]">Each programme below is confirmed, running and specific to Triveni Balavikas Central School — not generic claims found on every school website.</p>
          </div>
          <FadeIn>
            <PedagogyProgrammes programmes={programs} />
          </FadeIn>
        </div>
      </section>

      {/* School Diary — parent-teacher trust signal */}
      <section className="py-22">
        <div className="container-main">
          <SplitSection
            imageSrc="/images/library-boy-browsing-books.jpg"
            imageAlt="Triveni student engaged in independent reading"
            reverse
          >
            <FadeIn direction="left">
              <SectionLabel>Parent–School Partnership</SectionLabel>
              <h2 className="font-urbanist font-extrabold text-[clamp(28px,4vw,42px)] text-[#1A1A2A] mb-4">The School Diary — A Daily Bridge Between Home and School</h2>
              <p className="text-muted leading-[1.8] mb-4">
                Every Triveni student carries a <strong className="text-body">School Diary</strong> that serves as a structured, two-way communication channel between teachers and parents. More than a routine record, it provides a clear, daily snapshot of classroom learning, assignments and each child&apos;s progress — reviewed and acknowledged by both school and home.
              </p>
              <p className="text-muted leading-[1.8] mb-6">
                This is not merely a homework planner, but a system of shared accountability that keeps parents meaningfully informed and teachers consistently responsive, strengthening the partnership that supports every child&apos;s growth.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  'Maintained through daily teacher entries, ensuring consistent and reliable communication',
                  'Parent acknowledgement through signatures, reinforcing active involvement',
                  'Creates a transparent and continuous record across the academic year',
                  'Connects classroom learning with home support, enhancing student progress',
                ].map(item => (
                  <div key={item} className="flex items-start gap-3 text-[15px] text-body">
                    <i className="ri-check-double-line text-accent text-lg mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </SplitSection>
        </div>
      </section>

      <CTABanner
        heading="Experience Our Pedagogy Firsthand"
        subtext="Schedule a campus visit to see how Triveni's programmes come alive in real classrooms — authentic, engaging and far beyond what any webpage can convey."
        primaryLabel="Enquire for Admission"
        primaryHref="/admissions#enquiry-form"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  )
}
