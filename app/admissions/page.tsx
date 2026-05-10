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
  { n: '1', title: 'Enquire', desc: 'Start your journey by filling out our enquiry form or connecting with our admissions office via call or WhatsApp. Share your child\'s name, age and preferred grade, and our team will guide you through the next steps.' },
  { n: '2', title: 'Visit the School', desc: 'Schedule a campus visit to our location on Hesaraghatta Main Road. Meet our team, experience our classrooms in action and gain clear, personalised answers to all your questions.' },
  { n: '3', title: 'Submit Documents', desc: 'Complete your application by submitting the required documents along with the form. Our admissions team will promptly review, verify and acknowledge your submission, ensuring a smooth and hassle-free process.' },
  { n: '4', title: 'Confirmation & Fee Payment', desc: 'Once your documents are successfully verified, secure your child\'s admission by completing the fee payment. With this final step, you officially become a part of the Triveni family — welcome aboard!' },
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
  { question: 'Do you offer mid-year admissions?', answer: 'Yes — mid-year admissions are considered based on seat availability. Each request is reviewed individually to ensure the best fit for the student. We recommend contacting our admissions office for the latest seat status and personalised guidance.' },
  { question: 'What is the fee structure at Triveni Balavikas Central School?', answer: 'At Triveni Balavikas Central School, we are committed to making high-quality education accessible, offering excellent academic standards at a fee structure that is both fair and thoughtfully designed for families. For detailed and up-to-date information on our fees, we invite you to connect with our admissions office — our team will be happy to guide you.' },
  { question: 'Is transport available from my area?', answer: 'Triveni Balavikas Central School offers a well-planned transport network covering key locations across North Bengaluru. Simply call or WhatsApp our admissions team with your locality, and we\'ll promptly confirm route availability and assist you with the details.' },
  { question: 'Does the school have CCTV and safety measures?', answer: 'Student safety is a top priority at Triveni Balavikas Central School. Our campus is equipped with comprehensive safety measures, including CCTV surveillance and well-monitored systems to ensure a secure environment for every child. We invite you to visit the campus to experience our safety infrastructure firsthand and gain a complete understanding of the measures in place.' },
  { question: 'Does Triveni have a parent communication app?', answer: 'Yes. Triveni Balavikas Central School offers a dedicated parent communication app through SchoolCanvas, available on Google Play. Designed for real-time updates and seamless connectivity, the app keeps you informed about your child\'s attendance, assignments, announcements and more — right at your fingertips. Access is provided upon enrolment, ensuring you stay connected from day one.' },
]

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        title="Join the Triveni Family"
        description="Begin your child's journey at Triveni Balavikas Central School — where quality education meets a nurturing environment and a community that truly cares. With limited seats available, we invite you to be part of a school that prioritises both excellence and character."
        badge="Admissions Open for 2026–2027"
      />

      {/* Trust mini-cards */}
      <section className="py-14 bg-surface">
        <div className="container-main">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: 'ri-award-line', title: 'CISCE Curriculum', desc: 'Triveni Balavikas Central School follows the curriculum prescribed by the Council for the Indian School Certificate Examinations (CISCE), New Delhi — ensuring a structured, balanced and nationally recognised academic framework.' },
              { icon: 'ri-wallet-line', title: 'Accessible Excellence', desc: 'High-quality education delivered with care and rigour — at a fee structure designed to be fair, transparent and within reach for families.' },
              { icon: 'ri-bus-line', title: 'Safe & Reliable Transport', desc: 'Our well-organised network covers key routes across North Bengaluru — equipped with GPS tracking, onboard CCTV and supported by trained caretakers and experienced drivers, providing a secure and reassuring commute every day.' },
              { icon: 'ri-smartphone-line', title: 'School Canvas', desc: 'A portal for communication between school and parents — an Android parent app available on Google Play for real-time updates and attendance.' },
            ].map((c, i) => (
              <FadeIn key={c.title} delay={i * 0.1}>
                <div className="bg-white rounded-md p-6 text-center shadow-sm border border-border h-full flex flex-col">
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
            <p className="text-muted text-[17px] max-w-[560px] mx-auto leading-[1.75]">Our admissions process is clear, transparent and designed for ease — guiding you smoothly through every step from enquiry to enrolment.</p>
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
                <h3 className="font-urbanist font-extrabold text-lg text-white mb-4">Prefer to Speak with Us?</h3>
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
            <p className="text-muted text-[17px] max-w-160 mx-auto leading-[1.75]">From the moment your child joins Triveni, you stay informed, involved and connected — every single school day — through simple, reliable systems designed to keep you closely engaged with your child&apos;s learning journey.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* SchoolCanvas App */}
            <FadeIn direction="left">
              <div className="bg-primary rounded-lg p-10 h-full flex flex-col">
                <div className="w-14 h-14 bg-white/10 rounded-md flex items-center justify-center text-white text-2xl mb-6">
                  <i className="ri-smartphone-line" />
                </div>
                <h3 className="font-urbanist font-extrabold text-2xl text-white mb-3">SchoolCanvas Parent App</h3>
                <p className="text-white/70 leading-[1.8] mb-6">Stay seamlessly connected to your child&apos;s school life — anytime, anywhere — through our official Android parent app, designed for real-time updates and effortless communication. Access is provided upon enrolment, and the app is free to download on Google Play.</p>
                <ul className="flex flex-col gap-2.5 mb-8">
                  {['Real-time updates on attendance and academic progress', 'Instant notifications for assignments and homework', 'Timely access to school announcements and circulars', 'A direct, reliable communication channel between school and home'].map(item => (
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
                <p className="text-muted leading-[1.8] mb-3">A simple book with a powerful purpose — the School Diary is a structured, daily bridge between school and home. Maintained and signed by both teachers and parents, it ensures consistent communication, shared responsibility and complete transparency in your child&apos;s learning journey.</p>
                <p className="text-muted leading-[1.8] mb-6">More than a homework planner, it is a dependable system that keeps parents informed and teachers accountable — every single school day.</p>
                <ul className="flex flex-col gap-2.5 mt-auto">
                  {[
                    'Daily entries by teachers on classwork and homework',
                    'Parent signatures confirming regular review at home',
                    'Maintains a continuous, year-long academic record',
                    'Creates a clear and reliable home–school communication trail',
                    'Issued to every student at the start of the academic year',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-body">
                      <i className="ri-check-double-line text-accent text-base shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
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

      <CTABanner heading="Secure Your Child's Place for 2026–2027" subtext="Admissions are now open, with limited seats available. Complete the enquiry form above or connect with us today to ensure your child's place at Triveni Balavikas Central School." primaryLabel="Enquire Now" primaryHref="/admissions#enquiry-form" secondaryLabel="Find Us" secondaryHref="/contact" />
    </>
  )
}
