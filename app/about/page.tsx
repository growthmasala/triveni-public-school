import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import CTABanner from '@/components/sections/CTABanner'
import SplitSection from '@/components/sections/SplitSection'
import SectionLabel from '@/components/ui/SectionLabel'
import FadeIn from '@/components/ui/FadeIn'

export const metadata: Metadata = {
  title: 'About Us | Triveni Public School – ICSE School in Bagalagunte, Bengaluru',
  description: 'Learn about Triveni Public School — founded in 2007 under Triveni Memorial Educational Trust, CISCE affiliated ICSE school in Bagalagunte, Bengaluru. Meet our leadership.',
  alternates: { canonical: 'https://www.trivenipublicschool.in/about' },
}

const values = [
  { icon: 'ri-book-open-line', title: 'Excellence', desc: 'Striving for the highest standards in everything we do' },
  { icon: 'ri-heart-line', title: 'Character', desc: 'Building integrity, empathy and strong moral values' },
  { icon: 'ri-global-line', title: 'Inclusion', desc: 'Every child matters — without exception' },
  { icon: 'ri-lightbulb-line', title: 'Innovation', desc: 'Modern pedagogy that goes far beyond the textbook' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Triveni Public School"
        description="Eighteen years of shaping confident, compassionate, capable learners in North Bengaluru — education for life, not just for a living."
      />

      {/* School Overview */}
      <section className="py-[88px]">
        <div className="container-main">
          <SplitSection
            imageSrc="/images/campus-exterior-evening-angle2.jpg"
            imageAlt="Triveni Public School campus exterior evening view"
            imageBadge="Est. 2007 · 18+ Years of Excellence"
            imageBadgeIcon="ri-calendar-line"
          >
            <FadeIn direction="right">
              <SectionLabel>Who We Are</SectionLabel>
              <h2 className="font-urbanist font-extrabold text-[clamp(28px,4vw,42px)] text-[#1A1A2A] mb-4">A School Built on Values and Vision</h2>
              <p className="text-muted leading-[1.8] mb-4">
                Triveni Public School is a co-educational, English-medium ICSE school founded in 2007 under the <strong className="text-body">Triveni Memorial Educational Trust (TMET)</strong>. We are affiliated with the <strong className="text-body">Council for Indian School Certificate Examination (CISCE), New Delhi</strong>, School Code <strong className="text-body">KA-214</strong>.
              </p>
              <blockquote className="border-l-4 border-accent pl-5 italic text-body text-[17px] leading-[1.7] mb-6">
                "Education should be for life, not just for a living."
              </blockquote>
              <div className="flex flex-col gap-3 mt-2">
                {['CISCE Affiliated · School Code KA-214', 'Co-educational · English medium', 'Pre-Primary to Grade X', 'Android parent app available on Google Play'].map(item => (
                  <div key={item} className="flex items-start gap-3 text-[15px] text-body">
                    <i className="ri-check-double-line text-accent text-lg mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </SplitSection>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-[88px] bg-surface">
        <div className="container-main">
          <div className="text-center mb-14">
            <SectionLabel>Our Foundation</SectionLabel>
            <h2 className="font-urbanist font-extrabold text-[clamp(28px,4vw,42px)] text-[#1A1A2A]">Vision &amp; Mission</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <FadeIn direction="left">
              <div className="bg-white rounded-lg p-12 shadow-md border border-border relative overflow-hidden h-full">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-primary rounded-tl-lg rounded-bl-lg" />
                <div className="w-14 h-14 bg-primary/[0.08] rounded-md flex items-center justify-center text-primary text-2xl mb-6">
                  <i className="ri-eye-line" />
                </div>
                <h3 className="font-urbanist font-extrabold text-2xl text-[#1A1A2A] mb-4">Our Vision</h3>
                <p className="text-muted leading-[1.8]">To be a premier, professionally managed institution that provides an environment fostering <strong className="text-body">excellence, holistic growth</strong> and prepares students for a knowledge society and the global economy by developing <strong className="text-body">lifelong learning skills</strong>.</p>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="bg-white rounded-lg p-12 shadow-md border border-border relative overflow-hidden h-full">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-accent rounded-tl-lg rounded-bl-lg" />
                <div className="w-14 h-14 bg-accent/10 rounded-md flex items-center justify-center text-accent text-2xl mb-6">
                  <i className="ri-target-line" />
                </div>
                <h3 className="font-urbanist font-extrabold text-2xl text-[#1A1A2A] mb-4">Our Mission</h3>
                <p className="text-muted leading-[1.8]">To be a professionally managed institution with a well-designed quality management system that <strong className="text-body">empowers all stakeholders</strong> — teachers, students and parents — and creates a student-friendly learning environment with <strong className="text-body">innovative practices</strong> that draw out the best in every student.</p>
              </div>
            </FadeIn>
          </div>
          {/* Core values */}
          <FadeIn>
            <div className="bg-primary rounded-lg p-12 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {values.map(({ icon, title, desc }) => (
                <div key={title}>
                  <i className={`${icon} text-accent text-4xl block mb-3`} />
                  <h4 className="text-white font-urbanist font-bold text-base mb-1.5">{title}</h4>
                  <p className="text-white/65 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Secretary Message */}
      <section className="py-[88px]">
        <div className="container-main">
          <div className="text-center mb-14">
            <SectionLabel>Leadership</SectionLabel>
            <h2 className="font-urbanist font-extrabold text-[clamp(28px,4vw,42px)] text-[#1A1A2A]">Message from Our Leadership</h2>
          </div>
          <div className="mb-[72px]">
            <SplitSection
              imageSrc="/images/leadership-secretary-mr-manjunath.png"
              imageAlt="Mr. K. Manjunath, Secretary, Triveni Group of Institutions"
              imageBadge="Mr. K. Manjunath · Secretary"
              imageBadgeIcon="ri-user-star-line"
              imageObjectPosition="top"
            >
              <FadeIn direction="right">
                <SectionLabel>From the Secretary&apos;s Desk</SectionLabel>
                <h2 className="font-urbanist font-extrabold text-[clamp(24px,3vw,36px)] text-[#1A1A2A] mb-4">Realising the Promise of Development</h2>
                <blockquote className="border-l-4 border-accent pl-5 italic text-body text-[16px] leading-[1.75] mb-5">
                  &ldquo;Education should be for life, not just for a living.&rdquo;
                </blockquote>
                <p className="text-muted leading-[1.8] mb-4">Welcome to Triveni Public School. We firmly believe that education should help people become useful members of society — developing not just intelligence and skills, but also broadening one&apos;s outlook and making a person useful to the world at large.</p>
                <p className="text-muted leading-[1.8]">The children of today will be the managers of tomorrow&apos;s environment. At Triveni, we have worked wonders but still have miles to go — and the task ahead of us is never as great as the power behind us.</p>
                <p className="font-urbanist font-extrabold text-lg text-primary mt-5">— Mr. K. Manjunath</p>
                <p className="text-muted text-sm">Secretary, Triveni Group of Institutions</p>
              </FadeIn>
            </SplitSection>
          </div>

          {/* Principal Message */}
          <SplitSection
            imageSrc="/images/campus-exterior-evening-buses.jpg"
            imageAlt="Triveni Public School campus with school buses"
            reverse
          >
            <FadeIn direction="left">
              <SectionLabel>From the Principal&apos;s Desk</SectionLabel>
              <h2 className="font-urbanist font-extrabold text-[clamp(24px,3vw,36px)] text-[#1A1A2A] mb-4">We Don&apos;t Just Teach — We Inspire</h2>
              <blockquote className="border-l-4 border-accent pl-5 italic text-body text-[16px] leading-[1.75] mb-5">
                &ldquo;Intelligence plus character — that is the goal of true education.&rdquo;
              </blockquote>
              <p className="text-muted leading-[1.8] mb-4">Welcome to Triveni Public School — a place where learning is a journey, not a race; where every child matters, and where values and vision walk hand in hand.</p>
              <p className="text-muted leading-[1.8] mb-4">At TPS, we believe in shaping not just scholars, but strong, thoughtful individuals who are prepared to lead, serve and thrive in a global society.</p>
              <p className="text-muted leading-[1.8]">Together, with the support of parents and the commitment of our staff, we continue to uphold the legacy of Triveni Public School — an institution where every child is nurtured to become the best version of themselves.</p>
              <p className="font-urbanist font-extrabold text-lg text-primary mt-5">— The Principal</p>
              <p className="text-muted text-sm">Triveni Public School, Bagalagunte</p>
            </FadeIn>
          </SplitSection>
        </div>
      </section>

      {/* Affiliations */}
      <section className="py-[88px] bg-surface">
        <div className="container-main">
          <div className="text-center mb-14">
            <SectionLabel>Affiliations &amp; Recognition</SectionLabel>
            <h2 className="font-urbanist font-extrabold text-[clamp(28px,4vw,42px)] text-[#1A1A2A]">Backed by Trust &amp; Official Recognition</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'ri-government-line', title: 'CISCE Affiliation', desc: 'Affiliated with the Council for Indian School Certificate Examination (CISCE), New Delhi. Official School Code: KA-214.' },
              { icon: 'ri-building-2-line', title: 'Triveni Memorial Educational Trust', desc: 'Founded and governed by TMET, also operating the Triveni Group of Institutions including a CBSE campus.' },
              { icon: 'ri-smartphone-line', title: 'Parent Mobile App', desc: 'Stay connected via our official SchoolCanvas parent app on Google Play. Real-time updates, assignments and attendance.' },
            ].map((card, i) => (
              <FadeIn key={card.title} delay={i * 0.1}>
                <div className="bg-white rounded-md p-7 shadow-sm border border-border flex gap-4 items-start hover:shadow-md hover:border-accent transition-all duration-300">
                  <div className="w-[52px] h-[52px] bg-accent/10 rounded-md flex items-center justify-center text-accent text-xl flex-shrink-0">
                    <i className={card.icon} />
                  </div>
                  <div>
                    <h4 className="font-urbanist font-bold text-base text-[#1A1A2A] mb-1">{card.title}</h4>
                    <p className="text-muted text-sm leading-[1.6]">{card.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABanner heading="Ready to Join the Triveni Family?" subtext="Enquire today — our admissions team will walk you through every step." />
    </>
  )
}
