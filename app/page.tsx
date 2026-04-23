import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Hero from '@/components/sections/Hero'
import CTABanner from '@/components/sections/CTABanner'
import FAQAccordion from '@/components/sections/FAQAccordion'
import SectionLabel from '@/components/ui/SectionLabel'
import FadeIn from '@/components/ui/FadeIn'
import Button from '@/components/ui/Button'
import Image from 'next/image'
import Link from 'next/link'

// Below-fold heavy components — lazy loaded after LCP
const FourPanelFeatures   = dynamic(() => import('@/components/sections/FourPanelFeatures'))
const TestimonialsMarquee = dynamic(() => import('@/components/sections/TestimonialsMarquee'))

export const metadata: Metadata = {
  title: 'Triveni Public School | Best ICSE School in Bagalagunte, Bengaluru',
  description: 'Triveni Public School is a co-educational ICSE school in Bagalagunte, Hessarghatta Road, Bengaluru. CISCE affiliated (KA-214). Admissions open for 2026–27.',
  alternates: { canonical: 'https://www.trivenipublicschool.in/' },
}


const programs = [
  { tag: 'Nursery – KG', title: 'Pre-Primary', desc: 'A vibrant, play-based learning environment that builds curiosity, confidence and foundational skills through exploration and creativity.', img: '/images/classroom-preprimary-colourful-animal-mural.jpg', href: '/academics#preprimary' },
  { tag: 'Grades I – V', title: 'Primary School', desc: 'Building strong literacy, numeracy and science foundations through the ICSE framework, hands-on activities and club engagements.', img: '/images/library-boy-browsing-books.jpg', href: '/academics#primary' },
  { tag: 'Grades VI – VIII', title: 'Middle School', desc: 'Critical thinking, NIE partnerships, ethics education and competitive exam prep — turning curious learners into confident thinkers.', img: '/images/classroom-nie-newspaper-times-of-india.jpg', href: '/academics#middle' },
  { tag: 'Grades IX – X', title: 'Senior School', desc: 'Rigorous ICSE board preparation with personalised remediation analytics, project-based learning and strong examination guidance.', img: '/images/library-girls-studying.jpg', href: '/academics#senior' },
]


const faqs = [
  { question: 'Which board does Triveni Public School follow?', answer: 'Triveni Public School is affiliated with the Council for Indian School Certificate Examination (CISCE), New Delhi. Our school code is KA-214. We offer the ICSE curriculum from Grade I through Grade X.' },
  { question: 'What grades does the school offer?', answer: 'We offer classes from Pre-Primary (Nursery and KG) through Grade X — covering Pre-Primary, Primary (I–V), Middle (VI–VIII) and Senior School (IX–X).' },
  { question: 'Is the school located near Hessarghatta Road / Bagalagunte?', answer: 'Yes. We are at No. 28/29, Nagasandra Post, Hessarghatta Main Road, Bagalagunte, Mallasandra, T. Dasarahalli, Bengaluru – 560073.' },
  { question: 'How do I apply for admission?', answer: 'Visit our <a href="/admissions" class="text-accent underline">Admissions page</a> or fill in the enquiry form. Our team will contact you within 24 hours.' },
  { question: 'Does the school have a transport / bus facility?', answer: 'Yes, Triveni Public School provides transport across several routes in North Bengaluru. Please contact the school office to confirm coverage for your area.' },
]

const galleryImages = [
  { src: '/images/event-independence-day-aerial-view.jpg', alt: 'Independence Day celebration', wide: true },
  { src: '/images/event-janmashtami-kids-costumes-steps.jpg', alt: 'Janmashtami celebration', wide: false },
  { src: '/images/event-marching-band-girls-red.jpg', alt: 'Marching band', wide: false },
  { src: '/images/event-sports-day-yuva-kreedotsava-2025.jpg', alt: 'Sports Day 2025', wide: true },
]

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'School',
  name: 'Triveni Public School',
  description: 'Co-educational ICSE school in Bagalagunte, Bengaluru affiliated with CISCE (School Code KA-214).',
  url: 'https://www.trivenipublicschool.in',
  address: { '@type': 'PostalAddress', streetAddress: 'No.28/29, Nagasandra Post, Hessarghatta Main Road, Bagalagunte', addressLocality: 'Bengaluru', addressRegion: 'Karnataka', postalCode: '560073', addressCountry: 'IN' },
  foundingDate: '2007',
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      <Hero />

      {/* Why Choose Triveni — 4-panel layout */}
      <section className="py-22">
        <div className="container-main mb-14">
          <div className="text-center">
            <SectionLabel>Why Triveni Public School</SectionLabel>
            <h2 className="font-urbanist font-extrabold text-[clamp(28px,4vw,42px)] text-[#1A1A2A] mb-4">Premium Pedagogy at Affordable Fees</h2>
            <p className="text-muted text-[17px] leading-[1.75] max-w-140 mx-auto">Parents across Bagalagunte, Mallasandra and T. Dasarahalli choose us for a reason — quality education at fees that make sense for every family.</p>
          </div>
        </div>
        <div className="px-[clamp(20px,6%,96px)]">
          <FourPanelFeatures />
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-22 bg-surface">
        <div className="container-main">
          <div className="text-center mb-14">
            <SectionLabel>Academic Programs</SectionLabel>
            <h2 className="font-urbanist font-extrabold text-[clamp(28px,4vw,42px)] text-[#1A1A2A] mb-4">Education for Every Stage of Growth</h2>
            <p className="text-muted text-[17px] leading-[1.75] max-w-140 mx-auto">From playful early years to focused ICSE preparation — our programs are designed to bring out the best in every child at every stage.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.1}>
                <div className="bg-white rounded-md overflow-hidden shadow-sm border border-border hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 group h-full flex flex-col">
                  <div className="relative h-50 overflow-hidden shrink-0">
                    <Image src={p.img} alt={p.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-accent text-[12px] font-bold uppercase tracking-widest mb-2">{p.tag}</p>
                    <h4 className="font-urbanist font-extrabold text-xl text-[#1A1A2A] mb-2.5">{p.title}</h4>
                    <p className="text-muted text-sm leading-[1.7] mb-4 flex-1">{p.desc}</p>
                    <Link href={p.href} className="inline-flex items-center gap-1.5 text-primary font-urbanist font-semibold text-sm border-2 border-primary rounded-pill px-5 py-2 hover:bg-primary hover:text-white transition-all duration-300 self-start">
                      Explore {p.title} <i className="ri-arrow-right-line" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pedagogy — 2-image layout */}
      <section className="py-22">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-start">

            {/* Left — staggered 2-image column */}
            <FadeIn direction="left">
              <div className="flex gap-4 xl:gap-6 items-start">
                {/* Image 1 — tall, left */}
                <div className="relative w-[52%] rounded-xl overflow-hidden shadow-lg h-95 md:h-115">
                  <Image
                    src="/images/classroom-nie-newspaper-times-of-india.jpg"
                    alt="Students engaged in NIE activity with Times of India"
                    fill
                    sizes="(max-width: 1024px) 50vw, 26vw"
                    className="object-cover"
                  />
                  {/* NIE badge */}
                  <div className="absolute bottom-4 left-4 bg-accent text-white text-[11px] font-urbanist font-bold tracking-widest uppercase px-3 py-1.5 rounded-pill">
                    NIE · Times of India
                  </div>
                </div>
                {/* Image 2 — shorter, offset down */}
                <div className="relative w-[44%] rounded-xl overflow-hidden shadow-lg h-75 md:h-90 mt-16">
                  <Image
                    src="/images/library-girls-studying.jpg"
                    alt="Students studying in the Triveni library"
                    fill
                    sizes="(max-width: 1024px) 44vw, 22vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </FadeIn>

            {/* Right — content */}
            <FadeIn direction="right">
              <SectionLabel>Our Pedagogy</SectionLabel>
              <h2 className="font-urbanist font-extrabold text-[clamp(28px,4vw,42px)] text-[#1A1A2A] leading-[1.2] mb-5">
                Teaching the Way Children Actually Learn
              </h2>
              <p className="text-muted leading-[1.8] mb-8">
                We do not teach to the textbook. We teach to the child. Our programmes are built around how children genuinely engage, question and retain knowledge — not how they perform on a single exam.
              </p>

              {/* 2-column checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 mb-8">
                {[
                  '5E Inquiry-Based Science',
                  'Remediation Analytics Platform',
                  'Ethics as a Primary Subject',
                  'NIE · Times of India Partner',
                  'Competitive Exam Preparation',
                  'Student-Led Sustainability',
                ].map(item => (
                  <div key={item} className="flex items-center gap-2.5 text-[15px] text-body">
                    <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                      <i className="ri-check-line text-accent text-xs" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Button href="/pedagogy" variant="accent" size="lg">
                <i className="ri-lightbulb-line" /> Explore Our Pedagogy
              </Button>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-22 bg-dark">
        <div className="container-main">
          <div className="text-center mb-14">
            <SectionLabel>Parent Testimonials</SectionLabel>
            <h2 className="font-urbanist font-extrabold text-[clamp(28px,4vw,42px)] text-white mb-4">Trusted by Families Across North Bengaluru</h2>
            <p className="text-white/60 text-[17px] leading-[1.75] max-w-140 mx-auto">Hear directly from the parents who have entrusted their children to Triveni Public School.</p>
          </div>
          <TestimonialsMarquee />
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-22">
        <div className="container-main">
          <div className="flex items-end justify-between flex-wrap gap-5 mb-12">
            <div>
              <SectionLabel>School Life</SectionLabel>
              <h2 className="font-urbanist font-extrabold text-[clamp(28px,4vw,42px)] text-[#1A1A2A] mb-3">Beyond the Classroom</h2>
              <p className="text-muted text-[17px] max-w-125 leading-[1.75]">Sports days, NCC camps, Janmashtami celebrations, Republic Day marches — life at Triveni is rich, vibrant and memorable.</p>
            </div>
            <Link href="/life" className="inline-flex items-center gap-2 font-urbanist font-semibold text-[15px] text-primary border-2 border-primary rounded-pill px-7 py-3.5 hover:bg-primary hover:text-white transition-all duration-300">
              View All Events <i className="ri-arrow-right-line" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map(({ src, alt, wide }) => (
              <FadeIn key={src} className={wide ? 'lg:col-span-2' : ''}>
                <div className={`rounded-md overflow-hidden group cursor-pointer relative ${wide ? 'aspect-2/1' : 'aspect-4/3'}`}>
                  <Image src={src} alt={alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 66vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-3xl">
                    <i className="ri-image-line" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABanner heading="Admissions Open for 2026–27" subtext="Seats are limited. Enquire today to secure your child's place at Triveni Public School." />

      {/* FAQ */}
      <section className="py-22 bg-surface">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-18 items-start">
            <div>
              <SectionLabel>FAQs</SectionLabel>
              <h2 className="font-urbanist font-extrabold text-[clamp(28px,4vw,42px)] text-[#1A1A2A] mb-4">Questions Parents Ask</h2>
              <p className="text-muted text-[17px] leading-[1.75]">
                {"Can't find your answer? "}<Link href="/contact" className="text-accent">Contact us directly</Link> — we are happy to help.
              </p>
              <Button href="/admissions" variant="primary" className="mt-8">View Admission Guide</Button>
            </div>
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>
    </>
  )
}
