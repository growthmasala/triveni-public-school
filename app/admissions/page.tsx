import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import CTABanner from '@/components/sections/CTABanner'
import FAQAccordion from '@/components/sections/FAQAccordion'
import SectionLabel from '@/components/ui/SectionLabel'
import FadeIn from '@/components/ui/FadeIn'
import AdmissionsForm from '@/components/sections/AdmissionsForm'

export const metadata: Metadata = {
  title: 'Admissions 2026–2027 | Triveni Balavikas Central School – ICSE Bagalagunte',
  description: 'Apply for admission to Triveni Balavikas Central School in Bagalagunte, Bengaluru. ICSE curriculum, Grades I to VIII. Step-by-step process, age criteria, documents required.',
  alternates: { canonical: 'https://www.trivenibalavikas.in/admissions' },
}

const steps = [
  { n: '1', title: 'Enquire', desc: 'Fill in our enquiry form or call / WhatsApp our admissions office. Share your child\'s name, age and preferred grade.' },
  { n: '2', title: 'Visit the School', desc: 'Schedule a campus visit on Hesaraghatta Main Road. Meet our team, see classrooms in action and get personalised answers to all your questions.' },
  { n: '3', title: 'Submit Documents', desc: 'Submit the required documents with the completed application form. Our team will promptly review, verify and acknowledge your submission.' },
  { n: '4', title: 'Confirmation & Fees', desc: 'Once documents are verified, secure your child\'s admission by completing the fee payment. Welcome to the Triveni family!' },
]

const ageCriteria = [
  { cls: 'Grade I',  age: '6 years' },
  { cls: 'Grade II – VIII', age: 'As per ICSE curriculum norms' },
]

const documents = [
  'Birth Certificate (original + photocopy)',
  'Aadhaar Card — child and both parents',
  '4 recent passport-size photographs of the student',
  'Transfer Certificate from previous school (Grade I+)',
  'Latest Report Card / Progress Report',
  'Proof of residence (utility bill / rental agreement)',
  'Caste / category certificate (if applicable)',
]

const faqs = [
  { question: 'Is there an entrance test for admission?', answer: 'For most grades, admission is based on document verification and an informal interaction. For higher grades, there may be an informal assessment. Please contact the school to confirm for the specific grade.' },
  { question: 'Do you offer mid-year admissions?', answer: 'Yes — mid-year admissions are considered based on seat availability. Each request is reviewed individually to ensure the best fit for the student. Contact our admissions office for the latest seat status and personalised guidance.' },
  { question: 'What is the fee structure at Triveni Balavikas Central School?', answer: 'We are committed to making high-quality education accessible, offering excellent academic standards at a fee structure that is fair and thoughtfully designed for families. For detailed and up-to-date information, please connect with our admissions office.' },
  { question: 'Is transport available from my area?', answer: 'We offer a well-planned transport network covering key locations across North Bengaluru. Call or WhatsApp our admissions team with your locality and we will promptly confirm route availability.' },
  { question: 'Does the school have CCTV and safety measures?', answer: 'Yes — student safety is a top priority. Our campus is equipped with CCTV surveillance and well-monitored systems to ensure a secure environment for every child. We invite you to visit the campus to experience our safety infrastructure firsthand.' },
  { question: 'Does Triveni have a parent communication app?', answer: 'Yes. We offer a dedicated parent communication app through SchoolCanvas, available on Google Play — designed for real-time updates on attendance, assignments and announcements. Access is provided upon enrolment.' },
]

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        title="Join the Triveni Family"
        description="Begin your child's journey at Triveni Balavikas Central School — quality ICSE education, a nurturing environment and a community that genuinely cares. Seats are filling fast."
        badge="Admissions Open for 2026–2027"
      />

      {/* Trust mini-cards */}
      <section className="py-14 bg-surface">
        <div className="container-main">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: 'ri-award-line', title: 'ICSE Curriculum', desc: 'Comprehensive, balanced curriculum from Grade I to Grade VIII — Primary and Middle School' },
              { icon: 'ri-wallet-line', title: 'Accessible Excellence', desc: 'Quality education at a fee structure designed to be fair and within reach for families' },
              { icon: 'ri-bus-line', title: 'Transport Available', desc: 'Well-organised bus routes across North Bengaluru with GPS tracking and trained caretakers' },
              { icon: 'ri-parent-line', title: 'Parent App Available', desc: 'Stay connected via our SchoolCanvas app on Google Play — real-time updates and attendance' },
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
      <section className="py-22">
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
      <section className="py-22 bg-surface" id="enquiry-form">
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
                <p className="text-muted text-xs mt-3">* Minimum age as on 1 June. Please confirm with the school office for the current academic year.</p>
              </div>
              {/* Documents */}
              <div className="bg-white rounded-md p-8 shadow-sm border border-border">
                <h3 className="font-urbanist font-extrabold text-xl text-[#1A1A2A] mb-5 flex items-center gap-2">
                  <i className="ri-file-list-line text-accent" /> Documents Required
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {documents.map(doc => (
                    <li key={doc} className="flex items-start gap-2.5 text-sm text-body">
                      <i className="ri-checkbox-circle-fill text-accent shrink-0 mt-0.5" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Quick contact */}
              <div className="bg-primary rounded-md p-8">
                <h3 className="font-urbanist font-extrabold text-lg text-white mb-4">Prefer to Talk?</h3>
                <p className="text-white/75 text-sm mb-5">Mon – Fri: 9:00 AM – 3:00 PM<br />Sat: 9:00 AM – 2:00 PM</p>
                <a href="tel:+918028397648" className="flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-urbanist font-semibold py-3.5 rounded-pill transition-colors duration-300 mb-3 text-[15px]">
                  <i className="ri-phone-line" /> Call 080 2839 7648
                </a>
                <a href="https://wa.me/919740701861" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 border-2 border-white/60 hover:bg-white/12 hover:border-white text-white font-urbanist font-semibold py-3.5 rounded-pill transition-all duration-300 text-[15px]">
                  <i className="ri-whatsapp-line" /> WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Tools */}
      <section className="py-22">
        <div className="container-main">
          <div className="text-center mb-14">
            <SectionLabel>For Parents</SectionLabel>
            <h2 className="font-urbanist font-extrabold text-[clamp(28px,4vw,42px)] text-[#1A1A2A] mb-4">Stay Connected from Day One</h2>
            <p className="text-muted text-[17px] max-w-140 mx-auto leading-[1.75]">From the moment your child joins Triveni, two systems keep you informed and involved every single school day.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* SchoolCanvas App */}
            <FadeIn direction="left">
              <div className="bg-primary rounded-lg p-10 h-full flex flex-col">
                <div className="w-14 h-14 bg-white/10 rounded-md flex items-center justify-center text-white text-2xl mb-6">
                  <i className="ri-smartphone-line" />
                </div>
                <h3 className="font-urbanist font-extrabold text-2xl text-white mb-3">SchoolCanvas Parent App</h3>
                <p className="text-white/70 leading-[1.8] mb-3">Our official Android parent app keeps you connected to your child&apos;s school life in real time — attendance, assignments, announcements and more, right on your phone.</p>
                <p className="text-white/70 leading-[1.8] mb-6">Access is provided upon enrolment. The app is free to download on Google Play.</p>
                <ul className="flex flex-col gap-2.5 mb-8">
                  {['Real-time attendance and progress updates', 'Assignment and homework notifications', 'School announcements and circulars', 'Direct channel between school and home'].map(item => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-white/80">
                      <i className="ri-check-double-line text-accent text-base shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://play.google.com/store/apps/details?id=schoolcanvas.triveni.publicschool.bangalore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-urbanist font-semibold py-3.5 rounded-pill transition-colors duration-300 text-[15px]"
                >
                  <i className="ri-google-play-line" /> Download on Google Play
                </a>
              </div>
            </FadeIn>

            {/* School Diary */}
            <FadeIn direction="right">
              <div className="bg-white rounded-lg p-10 shadow-sm border border-border h-full flex flex-col">
                <div className="w-14 h-14 bg-accent/10 rounded-md flex items-center justify-center text-accent text-2xl mb-6">
                  <i className="ri-book-open-line" />
                </div>
                <h3 className="font-urbanist font-extrabold text-2xl text-[#1A1A2A] mb-3">School Diary</h3>
                <p className="text-muted leading-[1.8] mb-3">Every Triveni student carries a School Diary — a structured, daily two-way communication channel between teachers and parents, signed by both parties every school day.</p>
                <p className="text-muted leading-[1.8] mb-6">It is not just a homework planner. It is a formal accountability system that keeps parents genuinely informed and teachers genuinely responsive.</p>
                <ul className="flex flex-col gap-2.5 mb-8">
                  {['Daily teacher entries on classwork and homework', 'Parent signature confirms home review', 'Formal record through the full academic year', 'Creates a clear home-school communication trail'].map(item => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-body">
                      <i className="ri-check-double-line text-accent text-base shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-auto text-sm text-muted border-t border-border pt-5">
                  <i className="ri-information-line text-accent mr-1.5" />
                  The School Diary is issued to every student at the start of the academic year at no extra cost.
                </p>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-22 bg-surface">
        <div className="container-main max-w-[800px]">
          <div className="text-center mb-14">
            <SectionLabel>Admission FAQs</SectionLabel>
            <h2 className="font-urbanist font-extrabold text-[clamp(28px,4vw,42px)] text-[#1A1A2A]">Common Questions from Parents</h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner heading="Don't Miss the 2026–2027 Admissions Window" subtext="Seats are limited. Fill in the enquiry form above or call us today to secure your child's place." primaryLabel="Enquire Now" primaryHref="/admissions#enquiry-form" secondaryLabel="Find Us" secondaryHref="/contact" />
    </>
  )
}
