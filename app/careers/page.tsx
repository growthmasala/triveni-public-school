import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import CTABanner from '@/components/sections/CTABanner'
import SectionLabel from '@/components/ui/SectionLabel'
import FadeIn from '@/components/ui/FadeIn'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Careers | Triveni Balavikas Central School – Bagalagunte, Bengaluru',
  description: 'Join the team at Triveni Balavikas Central School — a co-educational ICSE school in Bagalagunte, Bengaluru. Get in touch with our trust to enquire about teaching and support roles.',
  alternates: { canonical: 'https://www.trivenibalavikas.in/careers' },
}

const why = [
  {
    icon: 'ri-award-line',
    title: '25+ Years of Heritage',
    desc: 'Be part of the Triveni Group of Institutions — a trusted name in North Bengaluru education for over two decades.',
  },
  {
    icon: 'ri-team-line',
    title: 'A Genuine Team Culture',
    desc: 'Work alongside dedicated educators in an environment that values collaboration, mutual respect and personal growth.',
  },
  {
    icon: 'ri-lightbulb-flash-line',
    title: 'Modern, Purposeful Pedagogy',
    desc: 'Teach within structured programmes — 5E Science, NIE, Ethics as a core subject, Remedial Support — that go far beyond the textbook.',
  },
  {
    icon: 'ri-heart-line',
    title: 'Education for Life',
    desc: 'Join a school where teaching is a calling, not just a job — and where the goal is to shape character alongside knowledge.',
  },
]

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Careers at Triveni"
        description="Education is a calling, not a profession. If you share that belief, we would love to hear from you."
        badge="Join Our Team"
      />

      {/* Intro */}
      <section className="py-22">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <SectionLabel>We&apos;re Always Listening</SectionLabel>
              <h2 className="font-urbanist font-extrabold text-[clamp(28px,4vw,42px)] text-[#1A1A2A] mb-5">
                Passionate Educators, We&apos;d Love to Meet You
              </h2>
              <p className="text-muted text-[17px] leading-[1.85] mb-4">
                Triveni Balavikas Central School is part of the Triveni Group of Institutions — a 25-year-old educational community that takes its responsibility to children, families and teachers seriously.
              </p>
              <p className="text-muted text-[17px] leading-[1.85] mb-8">
                We do not always have open positions advertised — but we are always interested in hearing from teachers, coordinators and support staff who are committed to meaningful, child-centred education.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button href="mailto:trivenitrust@gmail.com?subject=Career%20Enquiry%20%E2%80%94%20Triveni%20Balavikas%20Central%20School" variant="accent" size="lg">
                  <i className="ri-mail-send-line" /> Email Us Your CV
                </Button>
                <Button href="https://wa.me/919740701861?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20opportunities%20at%20Triveni%20Balavikas%20Central%20School" variant="outline" size="lg">
                  <i className="ri-whatsapp-line" /> WhatsApp Us
                </Button>
              </div>
              <p className="text-muted text-sm mt-6">
                <strong className="text-body">trivenitrust@gmail.com</strong>  ·  <strong className="text-body">080 2839 7648</strong>
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why work with us */}
      <section className="py-22 bg-surface">
        <div className="container-main">
          <div className="text-center mb-14">
            <SectionLabel>Why Triveni</SectionLabel>
            <h2 className="font-urbanist font-extrabold text-[clamp(28px,4vw,42px)] text-[#1A1A2A] mb-4">A School Worth Building a Career At</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {why.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="bg-white rounded-md p-7 shadow-sm border border-border h-full hover:shadow-md hover:border-accent transition-all duration-300">
                  <div className="w-13 h-13 bg-accent/10 rounded-md flex items-center justify-center text-accent text-2xl mb-4">
                    <i className={item.icon} />
                  </div>
                  <h4 className="font-urbanist font-bold text-base text-[#1A1A2A] mb-2">{item.title}</h4>
                  <p className="text-muted text-sm leading-[1.7]">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* What to share */}
      <section className="py-22">
        <div className="container-main max-w-3xl">
          <FadeIn>
            <SectionLabel>If You&apos;re Writing to Us</SectionLabel>
            <h2 className="font-urbanist font-extrabold text-[clamp(28px,4vw,42px)] text-[#1A1A2A] mb-6">A Few Things That Help Us Help You</h2>
            <p className="text-muted leading-[1.85] mb-6">
              When you reach out, please include the following so our team can get back to you with the right context:
            </p>
            <ul className="flex flex-col gap-4">
              {[
                'Your CV or a short professional summary',
                'The role you\'re interested in (Primary Teacher, Subject Specialist, Coordinator, Support Staff, etc.)',
                'Your subject expertise and teaching experience',
                'Your preferred location and availability',
                'A short note on why Triveni interests you specifically',
              ].map(item => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-body">
                  <i className="ri-check-double-line text-accent text-lg mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted text-sm leading-[1.7] mt-8 italic">
              We aim to respond to every enquiry — though it may take a few working days during busy admission periods.
            </p>
          </FadeIn>
        </div>
      </section>

      <CTABanner
        heading="Help Us Shape the Next Generation"
        subtext="If teaching is your calling and Triveni&apos;s ethos resonates with you, we&apos;d genuinely love to hear from you."
        primaryLabel="Email Us Your CV"
        primaryHref="mailto:trivenitrust@gmail.com?subject=Career%20Enquiry%20%E2%80%94%20Triveni%20Balavikas%20Central%20School"
        secondaryLabel="Visit Us"
        secondaryHref="/contact"
      />
    </>
  )
}
