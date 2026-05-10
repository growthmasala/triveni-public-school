import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import CTABanner from '@/components/sections/CTABanner'
import SplitSection from '@/components/sections/SplitSection'
import SectionLabel from '@/components/ui/SectionLabel'
import FadeIn from '@/components/ui/FadeIn'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Academics | ICSE Curriculum & Pedagogy – Triveni Balavikas Central School',
  description: 'Explore ICSE academic programs at Triveni Balavikas Central School — Grades I to VIII, 5E Science pedagogy, Remedial Support, Ethics education, NIE with Times of India and The Hindu.',
  alternates: { canonical: 'https://www.trivenibalavikas.in/academics' },
}

const pedagogy = [
  { icon: 'ri-microscope-line', title: '5E Inquiry-Based Science', desc: 'Our science program is rooted in the globally recognised 5E instructional model — Engage, Explore, Explain, Elaborate and Evaluate. Through hands-on investigations and guided inquiry, students actively construct understanding, connect concepts to real-world contexts and develop a lasting curiosity and appreciation for science.' },
  { icon: 'ri-bar-chart-grouped-line', title: 'Remedial Support Programme', desc: 'A structured, data-informed remedial programme designed to identify and address individual learning gaps. Special support classes are conducted from 3:15 p.m. to 4:00 p.m., offering targeted guidance and personalised attention to help every student strengthen their understanding and progress with confidence.' },
  { icon: 'ri-scales-line', title: 'Ethics as a Core Subject', desc: 'Ethics is not merely displayed on posters but taught as a formal subject within our curriculum. Through dedicated resource materials and well-structured sessions, we intentionally nurture moral character, integrity and empathy in every student.' },
  { icon: 'ri-newspaper-line', title: 'Newspaper in Education (NIE)', desc: 'Through our collaboration with The Times of India and The Hindu, we bring the real world into the classroom. The NIE programme enhances students\' awareness, critical thinking and communication skills through active participation in events such as Play Fest, Fun Fest, seminars, workshops and quiz competitions.' },
  { icon: 'ri-trophy-line', title: 'Competitive Exam Preparation', desc: 'Our structured current affairs sessions equip students for national and international competitive examinations. By engaging with real-world developments, students sharpen their analytical thinking, enhance reasoning abilities and develop the agility to respond with clarity and confidence while staying consistently informed about global events.' },
  { icon: 'ri-recycle-line', title: 'Sustainability in Action', desc: 'Students of our school lead our Waste-Paper Recycling Project — a live sustainability initiative. Through this hands-on effort, they take ownership of a real environmental challenge within the school community, fostering responsibility, collaboration and a deep commitment to sustainable practices.' },
]

const clubs = [
  { icon: 'ri-book-mark-line', title: 'Literary Club', desc: 'We cultivate the four essential language skills — reading, writing, listening and speaking — through engaging activities such as debates, storytelling and creative writing, fostering confident communication and a lasting appreciation for language.' },
  { icon: 'ri-mic-line', title: 'Theatre in Education', desc: 'Under the guidance of trained theatre professionals, students explore dramatic expression while developing communication skills, creativity and confident self-presentation.' },
  { icon: 'ri-music-2-line', title: 'Music', desc: 'Students with a passion and aptitude for both classical and contemporary music receive specialised training in vocal and instrumental performance, nurturing creativity, discipline and artistic expression.' },
  { icon: 'ri-rhythm-line', title: 'Dance', desc: 'Dance is offered as an optional subject, encompassing both classical and contemporary forms. Students receive structured training, perform at school events and develop grace, confidence and expressive artistry.' },
]

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        title="Academics at Triveni"
        description="A thoughtfully designed academic program from Grade I to Grade VIII, blending the ICSE curriculum with strong foundational learning, innovative teaching practices, co-curricular enrichment and holistic character development."
      />

      {/* ICSE Overview */}
      <section className="py-22">
        <div className="container-main">
          <SplitSection
            imageSrc="/images/classroom-nie-students-newspapers.jpg"
            imageAlt=""
            reverse
          >
            <FadeIn direction="left">
              <SectionLabel>ICSE Curriculum</SectionLabel>
              <h2 className="font-urbanist font-extrabold text-[clamp(28px,4vw,42px)] text-[#1A1A2A] mb-4">Why ICSE? A Curriculum for the Modern Learner</h2>
              <p className="text-muted leading-[1.8] mb-4">The ICSE curriculum is among India&apos;s most comprehensive and balanced academic frameworks — with a strong focus on language proficiency, analytical thinking, application-based learning and project work, preparing students with the skills and mindset needed for an evolving, global world.</p>
              <div className="bg-surface rounded-md p-6 mb-6 grid grid-cols-2 gap-4">
                {['ICSE Curriculum', 'English Medium', 'Grades I to VIII', 'Scholastic + Co-Curricular', 'Computer Applications', '25+ Years of Excellence'].map(item => (
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
            <h2 className="font-urbanist font-extrabold text-[clamp(28px,4vw,42px)] text-[#1A1A2A] mb-4">Two Wings of Learning</h2>
            <p className="text-muted text-[17px] max-w-160 mx-auto leading-[1.75]">Our academic structure is thoughtfully divided into two stages, each designed to align with the developmental needs of learners — building strong foundations in the early years and advancing skills, independence and critical thinking in the middle years.</p>
          </div>

          {[
            {
              id: 'primary',
              tag: 'Stage 1',
              title: 'Primary School',
              badge: 'Grades I – V',
              badgeIcon: 'ri-book-2-line',
              img: '/images/student-boy-classroom-writing.jpg',
              alt: '',
              paragraphs: [
                'The Primary School at Triveni lays a strong academic foundation while fostering curiosity and a love for learning. Students progress from learning to read to reading to learn, building confidence and independence along the way.',
                'The curriculum integrates English, Mathematics, Science, and Social Studies within the ICSE framework, along with a second language option of Kannada or Hindi. Early exposure to computer literacy begins from Grade I, equipping students with essential digital skills.',
                'Learning is further enriched through the Literary Club, which nurtures reading, writing, listening, and speaking abilities. A blend of worksheets, projects, and extended activities ensures that learning remains engaging, experiential, and meaningful.',
              ],
              reverse: false,
            },
            {
              id: 'middle',
              tag: 'Stage 2',
              title: 'Middle School',
              badge: 'Grades VI – VIII',
              badgeIcon: 'ri-newspaper-line',
              img: '/images/student-girl-middle-study.jpg',
              alt: '',
              paragraphs: [
                'The Middle School years at Triveni mark a transition from curiosity to critical thinking, with a strong focus on deeper subject understanding, real-world application, and academic readiness.',
                'The curriculum offers a comprehensive blend of subjects including English Language and Literature, Kannada, Hindi, Mathematics, Physics, Chemistry, Biology, History & Civics, Geography, and Computer Applications. Learning is further enriched through the NIE (Newspaper in Education) programme in collaboration with leading publications such as The Times of India and The Hindu, fostering awareness and analytical thinking.',
                'Students engage in Ethics as a core subject, along with regular current affairs sessions that build a strong foundation for competitive examinations. Co-curricular opportunities in Theatre, Music, Dance, and Sports ensure holistic development, encouraging creativity, expression, and physical well-being.',
              ],
              reverse: true,
            },
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
                  {wing.paragraphs.map((para, i) => (
                    <p key={i} className="text-muted leading-[1.8] mb-4 last:mb-0">{para}</p>
                  ))}
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
            <h2 className="font-urbanist font-extrabold text-[clamp(28px,4vw,42px)] text-[#1A1A2A] mb-4">Teaching That Transforms Learning</h2>
            <p className="text-muted text-[17px] max-w-180 mx-auto leading-[1.75]">At Triveni, our pedagogy goes beyond textbooks — designed around how children truly learn. Through active engagement, real-world connections and continuous, data-informed progress, we nurture confident, curious learners who think independently and grow with purpose.</p>
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
            <SectionLabel>Clubs &amp; Creative Arts</SectionLabel>
            <h2 className="font-urbanist font-extrabold text-[clamp(28px,4vw,42px)] text-[#1A1A2A] mb-4">Holistic Development through Clubs &amp; Creative Arts</h2>
            <p className="text-muted text-[17px] max-w-160 mx-auto leading-[1.75]">We strike a meaningful balance between academic rigour and co-curricular engagement, nurturing each student&apos;s intellectual, creative and personal growth — because true education is about shaping the whole child.</p>
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
                <h3 className="font-urbanist font-extrabold text-2xl text-white mb-3">Experiential Learning through Field Trips &amp; Educational Visits</h3>
                <p className="text-white/70 leading-[1.7] text-sm">Real-world exposure for every student.</p>
              </div>
              <p className="text-white/85 leading-[1.8] text-base">We provide meaningful real-world exposure for every student through carefully planned educational visits and field trips. Excursions to <strong className="text-white">multinational companies</strong>, <strong className="text-white">leading institutions</strong>, cultural landmarks and industry hubs are integrated across grade levels — bringing classroom learning to life and offering students valuable insight into the professional world they will one day enter.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTABanner heading="Admissions Open for 2026–2027" subtext="Give your child the advantage of a modern ICSE education. Seats are limited — enquire today." />
    </>
  )
}
