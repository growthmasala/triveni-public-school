import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import CTABanner from '@/components/sections/CTABanner'
import FAQAccordion from '@/components/sections/FAQAccordion'
import SectionLabel from '@/components/ui/SectionLabel'
import FadeIn from '@/components/ui/FadeIn'
import AdmissionsForm from '@/components/sections/AdmissionsForm'

export const metadata: Metadata = {
  title: 'Admissions 2025–26 | Triveni Public School – ICSE School Bagalagunte Bengaluru',
  description: 'Apply for admission to Triveni Public School (ICSE, KA-214) in Bagalagunte, Bengaluru. Step-by-step process, age criteria, documents required. Admissions open for 2025–26.',
  alternates: { canonical: 'https://www.trivenipublicschool.in/admissions' },
}

const steps = [
  { n: '1', title: 'Enquire', desc: 'Fill in our enquiry form or call / WhatsApp our admissions office. Tell us your child\'s name, age and preferred grade.' },
  { n: '2', title: 'Visit the School', desc: 'Schedule a visit to our campus on Hessarghatta Main Road. Meet our team, see the classrooms, and get all your questions answered.' },
  { n: '3', title: 'Submit Documents', desc: 'Submit the required documents with the completed application form. Our team will verify and confirm receipt promptly.' },
  { n: '4', title: 'Confirmation & Fees', desc: 'Once documents are verified, confirm your child\'s seat by paying the admission fee. Welcome to the Triveni family!' },
]

const ageCriteria = [
  { cls: 'Nursery', age: '2.5 – 3.5 years' },
  { cls: 'LKG',    age: '3.5 – 4.5 years' },
  { cls: 'UKG',    age: '4.5 – 5.5 years' },
  { cls: 'Grade I', age: '5.5 – 6.5 years' },
  { cls: 'Grade II+', age: 'As per CISCE norms' },
]

const documents = [
  'Birth Certificate (original + photocopy)',
  'Aadhaar Card — child and parent',
  '4 recent passport-size photographs',
  'Transfer Certificate from previous school (Grade II+)',
  'Latest Report Card / Progress Report',
  'Proof of residence (utility bill / rental agreement)',
  'Caste / category certificate (if applicable)',
]

const faqs = [
  { question: 'Is there an entrance test for admission?', answer: 'For most grades, admission is based on document verification and an informal interaction. For higher grades (VI+), there may be an informal assessment. Please contact the school to confirm for the specific grade.' },
  { question: 'Do you offer mid-year admissions?', answer: 'Mid-year admissions are considered on a case-by-case basis depending on seat availability. Please contact our admissions office for the current seat status.' },
  { question: 'What is the fee structure at Triveni Public School?', answer: 'Triveni is known for offering quality ICSE education at fees significantly more affordable than premium competitors. For the current fee structure, please contact our admissions office directly.' },
  { question: 'Is transport available from my area?', answer: 'Triveni Public School operates transport routes across several areas in North Bengaluru. Call or WhatsApp us with your locality and we will confirm availability.' },
  { question: 'Does the school have CCTV and safety measures?', answer: 'Yes, student safety is a priority at Triveni. Please visit the school during your campus tour to get a full overview of our safety infrastructure.' },
  { question: 'Does Triveni have a parent communication app?', answer: 'Yes. Triveni uses the SchoolCanvas platform — an Android parent app on Google Play — for real-time school-parent communication. You\'ll receive access upon enrolment.' },
]

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        title="Join the Triveni Family"
        description="Begin your child's journey at Triveni Public School — quality ICSE education, a nurturing environment, and a community that genuinely cares. Seats are filling fast."
        badge="Admissions Open for 2025–26"
      />

      {/* Trust mini-cards */}
      <section className="py-14 bg-surface">
        <div className="container-main">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: 'ri-award-line', title: 'CISCE Affiliated', desc: 'School Code KA-214 — officially recognised by CISCE, New Delhi' },
              { icon: 'ri-wallet-line', title: 'Affordable Fees', desc: 'Premium ICSE education at fees that make sense for every family' },
              { icon: 'ri-bus-line', title: 'Transport Available', desc: 'Bus routes across North Bengaluru for safe and convenient travel' },
              { icon: 'ri-star-line', title: '4.2★ Rated', desc: '138 parent reviews on JustDial — consistently praised for quality & care' },
            ].map((c, i) => (
              <FadeIn key={c.title} delay={i * 0.1}>
                <div className="bg-white rounded-md p-6 text-center shadow-sm border border-border">
                  <i className={`${c.icon} text-accent text-4xl block mb-3`} />
                  <h4 className="font-urbanist font-bold text-base text-[#1A1A2A] mb-1.5">{c.title}</h4>
                  <p className="text-muted text-[13px] leading-[1.6]">{c.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-[88px]">
        <div className="container-main">
          <div className="text-center mb-14">
            <SectionLabel>Step-by-Step Guide</SectionLabel>
            <h2 className="font-urbanist font-extrabold text-[clamp(28px,4vw,42px)] text-[#1A1A2A] mb-4">How to Apply — It&apos;s Simple</h2>
            <p className="text-muted text-[17px] max-w-[560px] mx-auto leading-[1.75]">Our admissions process is transparent and straightforward. Here&apos;s what to expect from start to finish.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="hidden lg:block absolute top-8 left-[calc(12.5%+16px)] right-[calc(12.5%+16px)] h-[2px] bg-border z-0" />
            {steps.map((s, i) => (
              <FadeIn key={s.n} delay={i * 0.1} className="relative z-10">
                <div className="text-center px-4">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center font-urbanist font-black text-2xl text-white mx-auto mb-5 shadow-[0_4px_16px_rgba(236,126,52,0.35)]">
                    {s.n}
                  </div>
                  <h4 className="font-urbanist font-bold text-[17px] text-[#1A1A2A] mb-2.5">{s.title}</h4>
                  <p className="text-muted text-sm leading-[1.7]">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-[88px] bg-surface" id="enquiry-form">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
            <div>
              <SectionLabel>Admission Enquiry</SectionLabel>
              <h2 className="font-urbanist font-extrabold text-[clamp(28px,4vw,42px)] text-[#1A1A2A] mb-2">Send Us an Enquiry</h2>
              <p className="text-muted mb-8">Fill in this form and our admissions team will call you back within 24 hours.</p>
              <AdmissionsForm />
            </div>
            <div className="flex flex-col gap-6">
              {/* Age Criteria */}
              <div className="bg-white rounded-md p-8 shadow-sm border border-border">
                <h3 className="font-urbanist font-extrabold text-xl text-[#1A1A2A] mb-5 flex items-center gap-2">
                  <i className="ri-calendar-check-line text-accent" /> Age Criteria
                </h3>
                <table className="w-full text-sm">
                  <thead>
                    <tr>
                      <th className="bg-primary text-white text-left px-5 py-3 font-urbanist font-bold uppercase tracking-[0.06em] text-[13px] rounded-tl-sm">Class</th>
                      <th className="bg-primary text-white text-left px-5 py-3 font-urbanist font-bold uppercase tracking-[0.06em] text-[13px] rounded-tr-sm">Min. Age (by June 1)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ageCriteria.map((row, i) => (
                      <tr key={row.cls} className={i % 2 === 1 ? 'bg-surface' : ''}>
                        <td className="px-5 py-3.5 text-body border-b border-border last:border-b-0">{row.cls}</td>
                        <td className="px-5 py-3.5 text-body border-b border-border last:border-b-0">{row.age}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-muted text-xs mt-3">* Please confirm exact age cut-offs with the school office for the current academic year.</p>
              </div>
              {/* Documents */}
              <div className="bg-white rounded-md p-8 shadow-sm border border-border">
                <h3 className="font-urbanist font-extrabold text-xl text-[#1A1A2A] mb-5 flex items-center gap-2">
                  <i className="ri-file-list-line text-accent" /> Documents Required
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {documents.map(doc => (
                    <li key={doc} className="flex items-start gap-2.5 text-sm text-body">
                      <i className="ri-checkbox-circle-fill text-accent flex-shrink-0 mt-0.5" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Quick contact */}
              <div className="bg-primary rounded-md p-8">
                <h3 className="font-urbanist font-extrabold text-lg text-white mb-4">Prefer to Talk?</h3>
                <p className="text-white/75 text-sm mb-5">Our admissions team is available Monday to Saturday, 9 AM – 4 PM.</p>
                <a href="tel:+918023721148" className="flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-urbanist font-semibold py-3.5 rounded-pill transition-colors duration-300 mb-3 text-[15px]">
                  <i className="ri-phone-line" /> Call Us Now
                </a>
                <a href="https://wa.me/918023721148" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 border-2 border-white/60 hover:bg-white/12 hover:border-white text-white font-urbanist font-semibold py-3.5 rounded-pill transition-all duration-300 text-[15px]">
                  <i className="ri-whatsapp-line" /> WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-[88px]">
        <div className="container-main max-w-[800px]">
          <div className="text-center mb-14">
            <SectionLabel>Admission FAQs</SectionLabel>
            <h2 className="font-urbanist font-extrabold text-[clamp(28px,4vw,42px)] text-[#1A1A2A]">Common Questions from Parents</h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner heading="Don't Miss the 2025–26 Admissions Window" subtext="Seats are limited. Fill in the enquiry form above or call us today to secure your child's place." primaryLabel="Enquire Now" primaryHref="/admissions#enquiry-form" secondaryLabel="Find Us" secondaryHref="/contact" />
    </>
  )
}
