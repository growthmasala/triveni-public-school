import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import CTABanner from '@/components/sections/CTABanner'
import SplitSection from '@/components/sections/SplitSection'
import SectionLabel from '@/components/ui/SectionLabel'
import FadeIn from '@/components/ui/FadeIn'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Academics | ICSE Curriculum & Pedagogy – Triveni Public School Bengaluru',
  description: 'Explore ICSE academic programs at Triveni — Pre-Primary to Grade X, 5E Science pedagogy, Remediation Analytics, Ethics education, NIE with Times of India.',
  alternates: { canonical: 'https://www.trivenipublicschool.in/academics' },
}

const pedagogy = [
  { icon: 'ri-microscope-line', title: '5E Inquiry-Based Science', desc: 'Our science teaching uses the globally proven 5E model: Engage, Explore, Explain, Elaborate, Evaluate. Students discover principles through hands-on experimentation, building genuine understanding and a love of science.' },
  { icon: 'ri-bar-chart-grouped-line', title: 'Remediation Analytics Platform', desc: 'An interactive, data-driven self-learning tool that identifies individual learning gaps. Rather than generic revision, this platform delivers targeted, personalised remediation — ensuring no child is left behind.' },
  { icon: 'ri-scales-line', title: 'Ethics as a Primary Subject', desc: 'We treat ethics as a formal subject — not a values poster on the wall. With dedicated resource materials and structured sessions, we systematically build moral character and empathy in every student.' },
  { icon: 'ri-newspaper-line', title: 'Newspaper in Education (NIE)', desc: 'Our partnership with The Times of India brings the real world into the classroom. Students participate in NIE Play Fest, Fun Fest, seminars, workshops and quiz competitions.' },
  { icon: 'ri-trophy-line', title: 'Competitive Exam Preparation', desc: 'Structured current affairs sessions prepare students for national and international competitive examinations. Students learn to think quickly, reason broadly and stay abreast of global events.' },
  { icon: 'ri-recycle-line', title: 'Sustainability in Action', desc: 'Grades IX and X lead our Waste-Paper Recycling Project — a live sustainability initiative. Students take ownership of a real environmental challenge within the school community.' },
]

const clubs = [
  { icon: 'ri-book-mark-line', title: 'Literary Club', desc: 'Building the four language skills — Reading, Writing, Listening and Speaking — through debates, storytelling and creative writing.' },
  { icon: 'ri-drama-line', title: 'Theatre in Education', desc: 'Professional theatre staff guide students in dramatic expression, communication skills and confident self-presentation.' },
  { icon: 'ri-music-2-line', title: 'Music', desc: 'Students with aptitude for conventional and contemporary music receive specialised training across instruments and voice.' },
  { icon: 'ri-dance-line', title: 'Dance', desc: 'Classical and contemporary dance as a CISCE optional subject. Students perform at school events and develop poise and artistic expression.' },
]

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        title="Academics at Triveni"
        description="ICSE curriculum from Pre-Primary to Grade X — combining rigorous academics with innovative pedagogy, co-curricular depth and character development."
      />

      {/* ICSE Overview */}
      <section className="py-22">
        <div className="container-main">
          <SplitSection
            imageSrc="/images/library-girls-studying.jpg"
            imageAlt="Senior school students studying in the library"
            reverse
          >
            <FadeIn direction="left">
              <SectionLabel>ICSE Board</SectionLabel>
              <h2 className="font-urbanist font-extrabold text-[clamp(28px,4vw,42px)] text-[#1A1A2A] mb-4">Why ICSE? A Curriculum Built for the Modern World</h2>
              <p className="text-muted leading-[1.8] mb-4">The ICSE curriculum is one of India&apos;s most comprehensive school boards — with a strong emphasis on English, analytical thinking, project work and a balanced multi-subject approach.</p>
              <div className="bg-surface rounded-md p-6 mb-6 grid grid-cols-2 gap-4">
                {['CISCE Affiliated', 'School Code: KA-214', 'English Medium', 'Pre-Primary to Grade X', 'Scholastic + Co-Curricular', 'Computer Applications'].map(item => (
                  <div key={item} className="flex items-start gap-2.5 text-[15px] text-body">
                    <i className="ri-check-double-line text-accent text-lg mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Button href="/admissions" variant="accent">
                <i className="ri-user-add-line" /> Enquire for Admission
              </Button>
            </FadeIn>
          </SplitSection>
        </div>
      </section>

      {/* Grade Wings */}
      <section className="py-22 bg-surface">
        <div className="container-main">
          <div className="text-center mb-14">
            <SectionLabel>Grade Structure</SectionLabel>
            <h2 className="font-urbanist font-extrabold text-[clamp(28px,4vw,42px)] text-[#1A1A2A] mb-4">Four Wings of Learning</h2>
            <p className="text-muted text-[17px] max-w-[560px] mx-auto leading-[1.75]">Each wing is tailored to the developmental needs of students at that stage — nurturing the right skills at the right time.</p>
          </div>

          {[
            { id: 'preprimary', tag: 'Stage 1', title: 'Pre-Primary School', badge: 'Nursery – KG', badgeIcon: 'ri-emotion-happy-line', img: '/images/classroom-preprimary-colourful-animal-mural.jpg', alt: 'Pre-primary classroom with colourful murals', desc: 'Our Pre-Primary wing is a colourful, warm and stimulating environment designed for the youngest learners. We believe the early years are foundational — and we make them joyful.', checks: ['Play-based and activity-driven learning approach', 'Language development — listening, speaking, reading foundations', 'Number sense, shapes, colours and creative arts', 'Socialisation, sharing, teamwork and emotional skills', 'Vibrant classroom environments with nature-inspired murals'], reverse: false },
            { id: 'primary', tag: 'Stage 2', title: 'Primary School', badge: 'Grades I – V', badgeIcon: 'ri-book-2-line', img: '/images/library-boy-browsing-books.jpg', alt: 'Primary school student reading in the library', desc: 'Primary school at Triveni builds essential academic foundations while keeping learning engaging and meaningful. Students move from learning to read to reading to learn.', checks: ['English, Mathematics, Science and Social Studies per ICSE framework', 'Second language: Kannada / Hindi', 'Computer literacy from Grade III', 'Literary Club: Reading, Writing, Listening and Speaking', 'Worksheets, projects and extended activities'], reverse: true },
            { id: 'middle', tag: 'Stage 3', title: 'Middle School', badge: 'Grades VI – VIII', badgeIcon: 'ri-newspaper-line', img: '/images/classroom-nie-newspaper-times-of-india.jpg', alt: 'Middle school NIE activity with Times of India', desc: 'The middle years are when curiosity turns into critical thinking. Our program introduces deeper subject engagement, real-world connections and competitive preparation.', checks: ['English, Mathematics, Science, History, Geography, Civics', 'NIE partnership with Times of India', 'Ethics as a primary subject', 'Current affairs sessions for competitive exam prep', 'Theatre, Music, Dance and Sports'], reverse: false },
            { id: 'senior', tag: 'Stage 4', title: 'Senior School', badge: 'Grades IX – X', badgeIcon: 'ri-medal-line', img: '/images/library-girls-studying.jpg', alt: 'Senior school students studying for ICSE board exams', desc: 'Senior school is where Triveni students prepare for their ICSE board examination. We combine rigorous academic preparation with our Remediation Analytics platform.', checks: ['Full ICSE curriculum: English, Mathematics, Physics, Chemistry, Biology, Social Studies', 'Remediation Analytics: personalised learning-gap identification', 'Waste-paper recycling project (sustainability)', 'Optional subjects: Dance, Computer Applications', 'Regular mock tests and board preparation sessions'], reverse: true },
          ].map((wing) => (
            <div key={wing.id} id={wing.id} className="mb-18 last:mb-0">
              <SplitSection
                imageSrc={wing.img}
                imageAlt={wing.alt}
                imageBadge={wing.badge}
                imageBadgeIcon={wing.badgeIcon}
                reverse={wing.reverse}
              >
                <FadeIn direction={wing.reverse ? 'left' : 'right'}>
                  <SectionLabel>{wing.tag}</SectionLabel>
                  <h2 className="font-urbanist font-extrabold text-[clamp(26px,3.5vw,38px)] text-[#1A1A2A] mb-4">{wing.title}</h2>
                  <p className="text-muted leading-[1.8] mb-5">{wing.desc}</p>
                  <div className="flex flex-col gap-3">
                    {wing.checks.map(c => (
                      <div key={c} className="flex items-start gap-3 text-[15px] text-body">
                        <i className="ri-check-double-line text-accent text-lg mt-0.5 shrink-0" />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              </SplitSection>
            </div>
          ))}
        </div>
      </section>

      {/* Pedagogy */}
      <section className="py-22" id="pedagogy">
        <div className="container-main">
          <div className="text-center mb-14">
            <SectionLabel>Our Pedagogy</SectionLabel>
            <h2 className="font-urbanist font-extrabold text-[clamp(28px,4vw,42px)] text-[#1A1A2A] mb-4">Teaching That Goes Beyond the Textbook</h2>
            <p className="text-muted text-[17px] max-w-[560px] mx-auto leading-[1.75]">Triveni&apos;s pedagogical approach is built around how children actually learn — with active engagement, real-world connections and data-driven personal growth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pedagogy.map((p, i) => (
              <FadeIn key={p.title} delay={(i % 2) * 0.1}>
                <div className="bg-white rounded-md p-8 border border-border shadow-sm flex gap-5 items-start hover:-translate-y-1 hover:shadow-md hover:border-primary-light transition-all duration-300 group h-full">
                  <div className="w-14 h-14 bg-primary/[0.08] rounded-md flex items-center justify-center text-primary text-2xl shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <i className={p.icon} />
                  </div>
                  <div>
                    <h4 className="font-urbanist font-bold text-[18px] text-[#1A1A2A] mb-2">{p.title}</h4>
                    <p className="text-muted text-sm leading-[1.7]">{p.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs */}
      <section className="py-22 bg-surface" id="clubs">
        <div className="container-main">
          <div className="text-center mb-14">
            <SectionLabel>Beyond the Classroom</SectionLabel>
            <h2 className="font-urbanist font-extrabold text-[clamp(28px,4vw,42px)] text-[#1A1A2A] mb-4">Clubs, Arts &amp; Activities</h2>
            <p className="text-muted text-[17px] max-w-[560px] mx-auto leading-[1.75]">We strike the right balance between academic rigour and co-curricular enrichment — because the whole child matters.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {clubs.map((c, i) => (
              <FadeIn key={c.title} delay={i * 0.1}>
                <div className="bg-white rounded-md p-9 shadow-sm border border-border hover:-translate-y-1.5 hover:shadow-lg hover:border-accent transition-all duration-300 group h-full">
                  <div className="w-15 h-15 bg-accent/10 rounded-md flex items-center justify-center text-accent text-2xl mb-5 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <i className={c.icon} />
                  </div>
                  <h4 className="font-urbanist font-bold text-[18px] text-[#1A1A2A] mb-2.5">{c.title}</h4>
                  <p className="text-muted text-sm leading-[1.7]">{c.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="bg-primary rounded-lg p-12 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-center">
              <div>
                <i className="ri-map-pin-line text-5xl text-accent block mb-4" />
                <h3 className="font-urbanist font-extrabold text-2xl text-white mb-3">Field Trips &amp; Educational Visits</h3>
                <p className="text-white/70 leading-[1.7] text-sm">Real-world exposure for every student.</p>
              </div>
              <p className="text-white/85 leading-[1.8] text-base">Educational visits and trips to <strong className="text-white">multinational companies</strong>, <strong className="text-white">renowned establishments</strong>, cultural sites and industry hubs are organised at different levels throughout the academic year — bringing subjects to life and giving students a tangible understanding of the professional world they will one day enter.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTABanner heading="Admissions Open for 2026–27" subtext="Give your child the advantage of a modern ICSE education. Seats are limited — enquire today." />
    </>
  )
}
