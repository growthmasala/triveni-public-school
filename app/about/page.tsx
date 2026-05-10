import type { Metadata } from 'next'
import Image from 'next/image'
import PageHero from '@/components/sections/PageHero'
import CTABanner from '@/components/sections/CTABanner'
import SplitSection from '@/components/sections/SplitSection'
import VisionMissionTabs from '@/components/sections/VisionMissionTabs'
import SectionLabel from '@/components/ui/SectionLabel'
import FadeIn from '@/components/ui/FadeIn'
import { LEADERS, PRINCIPAL_MESSAGE_PLACEHOLDER } from '@/lib/leaders'

export const metadata: Metadata = {
  title: 'About Us | Triveni Balavikas Central School – ICSE School in Bagalagunte, Bengaluru',
  description: 'Learn about Triveni Balavikas Central School — managed by the Triveni Educational Trust (TET), an ICSE school in Bagalagunte, Bengaluru. Meet our leadership.',
  alternates: { canonical: 'https://www.trivenibalavikas.in/about' },
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
        title="About Triveni Balavikas Central School"
        description="Over 25 years under the umbrella of the Triveni Group of Institutions — shaping confident, compassionate and capable learners in North Bengaluru. Education for life, not just for a living."
      />

      {/* School Overview */}
      <section className="py-22">
        <div className="container-main">
          <SplitSection
            imageSrc="/images/students-girls-library.jpg"
            imageAlt=""
            imageBadge="25+ Years · Triveni Group of Institutions"
            imageBadgeIcon="ri-award-line"
          >
            <FadeIn direction="right">
              <SectionLabel>Who We Are</SectionLabel>
              <h2 className="font-urbanist font-extrabold text-[clamp(28px,4vw,42px)] text-[#1A1A2A] mb-4">A School Built on Values and Vision</h2>
              <p className="text-muted leading-[1.8] mb-4">
                Triveni Balavikas Central School is a co-educational, English-medium institution managed by the <strong className="text-body">Triveni Educational Trust (TET)</strong>, which also operates the Triveni Group of Institutions — recognised for delivering education in alignment with ICSE curriculum standards and fostering academic excellence and holistic development.
              </p>
              <blockquote className="border-l-4 border-accent pl-5 italic text-body text-[17px] leading-[1.7] mb-6">
                "Education should be for life, not just for a living."
              </blockquote>
              <div className="flex flex-col gap-3 mt-2">
                {['ICSE Curriculum', 'Co-educational · English medium', 'Grades I to VIII (Primary I–V · Middle VI–VIII)', 'SchoolCanvas parent app on Google Play'].map(item => (
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

      {/* Vision & Mission — tabbed */}
      <section className="py-22 bg-surface">
        <div className="container-main">
          <div className="text-center mb-12">
            <SectionLabel>Our Foundation</SectionLabel>
            <h2 className="font-urbanist font-extrabold text-[clamp(28px,4vw,42px)] text-[#1A1A2A]">Vision &amp; Mission</h2>
          </div>
          <VisionMissionTabs />

          {/* Core values */}
          <FadeIn>
            <div className="bg-primary rounded-xl mt-12 p-12 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
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

      {/* Founders & Trustees — leaders without published messages */}
      <section className="py-22" id="leadership">
        <div className="container-main">
          <div className="text-center mb-14">
            <SectionLabel>Founders &amp; Trustees</SectionLabel>
            <h2 className="font-urbanist font-extrabold text-[clamp(28px,4vw,42px)] text-[#1A1A2A] mb-4">The Vision Behind Triveni</h2>
            <p className="text-muted text-[17px] max-w-140 mx-auto leading-[1.75]">Twenty-five years and counting — the founding family and trust that built the Triveni Group of Institutions.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {LEADERS.filter(l => !l.message).map((leader, i) => (
              <FadeIn key={leader.id} delay={i * 0.08}>
                <article
                  id={leader.id}
                  className="scroll-mt-32 bg-white rounded-lg overflow-hidden shadow-sm border border-border hover:shadow-md hover:-translate-y-1 hover:border-accent/40 transition-all duration-300 h-full"
                >
                  <div className="relative aspect-square w-full bg-primary/5">
                    {/* Decorative — name + title appear directly below */}
                    <Image
                      src={leader.photo}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <p className="text-accent font-urbanist font-bold text-[12px] uppercase tracking-widest mb-1.5">{leader.title}</p>
                    <h3 className="font-urbanist font-extrabold text-xl text-[#1A1A2A]">{leader.name}</h3>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* A Message from Our Leadership Team — full SplitSection messages */}
      <section className="py-22 bg-surface" id="leadership-messages">
        <div className="container-main">
          <div className="text-center mb-16">
            <SectionLabel>Leadership Voices</SectionLabel>
            <h2 className="font-urbanist font-extrabold text-[clamp(28px,4vw,42px)] text-[#1A1A2A] mb-4">A Message from Our Leadership Team</h2>
            <p className="text-muted text-[17px] max-w-140 mx-auto leading-[1.75]">Words from the people guiding our school&apos;s direction — on character, curiosity, and what an education at Triveni truly stands for.</p>
          </div>

          <div className="flex flex-col gap-20">
            {/* Messages from leaders we have photos for, in source-doc order: Secretary, Consultant, Director */}
            {(['secretary-manjunath', 'consultant-nagaraja', 'director-arundathi'] as const).map((leaderId, i) => {
              const leader = LEADERS.find(l => l.id === leaderId)!
              if (!leader.message) return null
              const reverse = i % 2 === 1
              return (
                <article key={leader.id} id={leader.id} className="scroll-mt-32">
                  <SplitSection
                    imageSrc={leader.photo}
                    imageAlt=""
                    imageBadge={`${leader.name} · ${leader.title}`}
                    imageBadgeIcon="ri-user-star-line"
                    imageObjectPosition="top"
                    reverse={reverse}
                  >
                    <FadeIn direction={reverse ? 'left' : 'right'}>
                      <SectionLabel>From the {leader.title}&apos;s Desk</SectionLabel>
                      <h3 className="font-urbanist font-extrabold text-[clamp(24px,3vw,36px)] text-[#1A1A2A] mb-4">{leader.message.title}</h3>
                      {leader.message.quote && (
                        <blockquote className="border-l-4 border-accent pl-5 italic text-body text-[16px] leading-[1.75] mb-5">
                          &ldquo;{leader.message.quote}&rdquo;
                        </blockquote>
                      )}
                      {leader.message.paragraphs.map((p, idx) => (
                        <p key={idx} className="text-muted leading-[1.85] mb-4 last:mb-0">{p}</p>
                      ))}
                      <p className="font-urbanist font-extrabold text-lg text-primary mt-6">— {leader.name}</p>
                      <p className="text-muted text-sm">{leader.title}, Triveni Group of Institutions</p>
                    </FadeIn>
                  </SplitSection>
                </article>
              )
            })}

            {/* Principal — has a published message but no portrait yet */}
            <article id={`message-${PRINCIPAL_MESSAGE_PLACEHOLDER.id}`} className="scroll-mt-32">
              <SplitSection
                imageSrc={PRINCIPAL_MESSAGE_PLACEHOLDER.fallbackPhoto}
                imageAlt="A learning environment at Triveni Balavikas Central School"
                imageBadge={`${PRINCIPAL_MESSAGE_PLACEHOLDER.name} · Triveni Balavikas Central School`}
                imageBadgeIcon="ri-user-star-line"
                reverse
              >
                <FadeIn direction="left">
                  <SectionLabel>From the Principal&apos;s Desk</SectionLabel>
                  <h3 className="font-urbanist font-extrabold text-[clamp(24px,3vw,36px)] text-[#1A1A2A] mb-4">{PRINCIPAL_MESSAGE_PLACEHOLDER.message.title}</h3>
                  {PRINCIPAL_MESSAGE_PLACEHOLDER.message.quote && (
                    <blockquote className="border-l-4 border-accent pl-5 italic text-body text-[16px] leading-[1.75] mb-5">
                      &ldquo;{PRINCIPAL_MESSAGE_PLACEHOLDER.message.quote}&rdquo;
                    </blockquote>
                  )}
                  {PRINCIPAL_MESSAGE_PLACEHOLDER.message.paragraphs.map((p, idx) => (
                    <p key={idx} className="text-muted leading-[1.85] mb-4 last:mb-0">{p}</p>
                  ))}
                  <p className="font-urbanist font-extrabold text-lg text-primary mt-6">— {PRINCIPAL_MESSAGE_PLACEHOLDER.name}</p>
                  <p className="text-muted text-sm">Triveni Balavikas Central School, Bagalagunte</p>
                </FadeIn>
              </SplitSection>
            </article>
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section className="py-22 bg-surface">
        <div className="container-main">
          <div className="text-center mb-14">
            <SectionLabel>Trust &amp; Recognition</SectionLabel>
            <h2 className="font-urbanist font-extrabold text-[clamp(28px,4vw,42px)] text-[#1A1A2A]">Backed by 25+ Years of the Triveni Group</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'ri-award-line', title: 'ICSE Curriculum', desc: 'Recognised for delivering education in alignment with ICSE curriculum standards, fostering academic excellence and holistic development.' },
              { icon: 'ri-building-2-line', title: 'Triveni Educational Trust', desc: 'Founded and governed by the Triveni Educational Trust (TET), which also operates the Triveni Group of Institutions.' },
              { icon: 'ri-smartphone-line', title: 'Parent Communication Portal', desc: 'A dedicated platform that enables seamless communication between the school and parents, providing real-time updates on announcements, assignments and student attendance.', cta: { label: 'Get on Google Play', href: 'https://play.google.com/store/apps/details?id=schoolcanvas.triveni.publicschool.bangalore' } },
              { icon: 'ri-book-open-line', title: 'School Diary System', desc: 'Each student maintains a School Diary that serves as a structured, daily channel of communication between teachers and parents, ensuring consistent updates, shared accountability and regular acknowledgement from both sides.' },
            ].map((card, i) => (
              <FadeIn key={card.title} delay={i * 0.1}>
                <div className="bg-white rounded-md p-9 shadow-sm border border-border hover:-translate-y-1.5 hover:shadow-lg hover:border-accent transition-all duration-300 group h-full">
                  <div className="w-15 h-15 bg-accent/10 rounded-md flex items-center justify-center text-accent text-2xl mb-5 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <i className={card.icon} />
                  </div>
                  <h4 className="font-urbanist font-bold text-[18px] text-[#1A1A2A] mb-2.5">{card.title}</h4>
                  <p className="text-muted text-sm leading-[1.7]">{card.desc}</p>
                  {card.cta && (
                    <a
                      href={card.cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 text-accent font-urbanist font-semibold text-[13px] hover:underline"
                    >
                      <i className="ri-google-play-line" /> {card.cta.label} <i className="ri-arrow-right-line" />
                    </a>
                  )}
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
