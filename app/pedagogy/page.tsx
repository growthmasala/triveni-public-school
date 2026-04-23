import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import CTABanner from '@/components/sections/CTABanner'
import SplitSection from '@/components/sections/SplitSection'
import SectionLabel from '@/components/ui/SectionLabel'
import FadeIn from '@/components/ui/FadeIn'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Our Pedagogy | How We Teach – Triveni Public School Bengaluru',
  description: 'Discover how Triveni Public School teaches — 5E Inquiry Science, Remediation Analytics, Ethics as a subject, NIE Times of India partnership, and more. ICSE school Bagalagunte.',
  alternates: { canonical: 'https://www.trivenipublicschool.in/pedagogy' },
}

const programs = [
  {
    icon: 'ri-microscope-line',
    tag: '01',
    title: '5E Inquiry-Based Science',
    summary: 'From rote to real understanding — science the way scientists actually think.',
    detail: 'Our science teaching is built on the globally proven 5E model: Engage, Explore, Explain, Elaborate and Evaluate. Students do not memorise facts — they discover principles through hands-on experimentation and guided inquiry. This builds genuine conceptual understanding, problem-solving ability and a lasting love of science.',
    points: [
      'Students Engage with a real question or phenomenon first',
      'They Explore through hands-on activity and experimentation',
      'Then Explain their findings using scientific vocabulary',
      'Elaborate by connecting to new contexts and applications',
      'Finally Evaluate their own understanding and progress',
    ],
  },
  {
    icon: 'ri-bar-chart-grouped-line',
    tag: '02',
    title: 'Remediation Analytics Platform',
    summary: 'Data-driven learning that finds every gap — and closes it.',
    detail: 'Our Remediation Analytics platform is an interactive, data-driven self-learning tool designed to identify the specific learning gaps of individual students. Rather than one-size-fits-all revision, this system delivers targeted, personalised remediation — so every child progresses at their own pace without being left behind.',
    points: [
      'Identifies individual learning gaps, not class-wide assumptions',
      'Delivers personalised study paths for each student',
      'Bridges the gap between classroom teaching and board exam readiness',
      'Used intensively in Grades IX and X for ICSE preparation',
    ],
  },
  {
    icon: 'ri-scales-line',
    tag: '03',
    title: 'Ethics as a Primary Subject',
    summary: 'Character formation is not an afterthought — it is on the timetable.',
    detail: 'At Triveni, Ethics is taught as a formal subject with dedicated resource materials — not a values poster on the wall or a line in the school brochure. We believe the right code of conduct and essential values are vital for developing eminent personality traits. Structured sessions systematically build moral character, empathy and civic responsibility in every student.',
    points: [
      'Dedicated resource materials — not informal or incidental',
      'Systematic moral development, not one-off assemblies',
      'Builds empathy, integrity and civic responsibility',
      'Integrated with the school\'s broader character-first philosophy',
    ],
  },
  {
    icon: 'ri-newspaper-line',
    tag: '04',
    title: 'Newspaper in Education (NIE)',
    summary: 'The real world enters the classroom through The Times of India.',
    detail: 'Triveni is an official partner of the Times of India Newspaper in Education (NIE) programme. Students are actively involved in real-world journalism exposure — participating in NIE Play Fest, NIE Fun Fest, seminars, workshops and quiz competitions. This builds critical reading, current awareness, analytical thinking and communication skills that no textbook can replicate.',
    points: [
      'Official partnership with Times of India NIE',
      'NIE Play Fest and Fun Fest participation',
      'Seminars, workshops and journalism-skills sessions',
      'Quiz competitions and inter-school events',
    ],
  },
  {
    icon: 'ri-trophy-line',
    tag: '05',
    title: 'Competitive Exam Preparation',
    summary: 'Beyond the syllabus — preparing students for the world.',
    detail: 'A series of structured classroom sessions keeps students abreast of current affairs and prepares them for national and international-level competitive examinations. Students learn to think quickly, reason broadly and engage with topics that go well beyond the ICSE syllabus — building the kind of awareness that sets them apart at the next stage.',
    points: [
      'Regular current affairs sessions integrated into the timetable',
      'Preparation for national and international competitive exams',
      'Develops reasoning, analytical speed and general awareness',
      'Particularly focused in Middle and Senior School years',
    ],
  },
  {
    icon: 'ri-recycle-line',
    tag: '06',
    title: 'Sustainability in Action',
    summary: 'Senior students take real ownership of a real environmental challenge.',
    detail: 'Students of Grades IX and X lead our Waste-Paper Recycling Project — a live, ongoing sustainability initiative where they collect, process and recycle waste paper generated on campus. This is not a classroom simulation. Students engage with a real environmental problem and take responsibility for solving it, developing ownership, accountability and environmental empathy.',
    points: [
      'Led entirely by Grade IX and X students',
      'Live initiative — not a theoretical project',
      'Addresses real environmental impact of paper waste',
      'Builds leadership, accountability and environmental responsibility',
    ],
  },
]

export default function PedagogyPage() {
  return (
    <>
      <PageHero
        title="How We Teach"
        description="Triveni's pedagogy goes far beyond the textbook. Every programme listed here is running in our classrooms today — not aspirational, but actual."
        badge="Our Pedagogy"
      />

      {/* Intro */}
      <section className="py-22">
        <div className="container-main">
          <SplitSection
            imageSrc="/images/classroom-nie-newspaper-times-of-india.jpg"
            imageAlt="Students engaged in NIE activity with Times of India newspapers"
            imageBadge="NIE Partner: Times of India"
            imageBadgeIcon="ri-newspaper-line"
          >
            <FadeIn direction="right">
              <SectionLabel>The Triveni Difference</SectionLabel>
              <h2 className="font-urbanist font-extrabold text-[clamp(28px,4vw,42px)] text-[#1A1A2A] mb-4">We Don&apos;t Teach to the Textbook. We Teach to the Child.</h2>
              <blockquote className="border-l-4 border-accent pl-5 italic text-body text-[16px] leading-[1.75] mb-5">
                &ldquo;Intelligence plus character — that is the goal of true education.&rdquo;
              </blockquote>
              <p className="text-muted leading-[1.8] mb-4">
                Every school in our area claims quality education. What separates Triveni is <strong className="text-body">how</strong> we deliver it. Our programmes are built around how children genuinely engage, question, retain and grow — not how they perform on a single exam.
              </p>
              <p className="text-muted leading-[1.8] mb-6">
                The six programmes below are not marketing language. They are running in our classrooms, visible in our students, and confirmed in every parent review we receive.
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
            <p className="text-muted text-[17px] max-w-[560px] mx-auto leading-[1.75]">Each programme below is confirmed, running and specific to Triveni Public School — not generic claims found on every school website.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((p, i) => (
              <FadeIn key={p.tag} delay={(i % 2) * 0.1}>
                <div className="bg-white rounded-lg p-9 shadow-sm border border-border hover:shadow-md hover:border-accent transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-14 h-14 bg-accent/10 rounded-md flex items-center justify-center text-accent text-2xl shrink-0">
                      <i className={p.icon} />
                    </div>
                    <div>
                      <p className="text-accent text-[12px] font-bold uppercase tracking-[0.1em] mb-1">{p.tag}</p>
                      <h3 className="font-urbanist font-extrabold text-xl text-[#1A1A2A] leading-tight">{p.title}</h3>
                    </div>
                  </div>
                  <p className="font-urbanist font-semibold text-[15px] text-primary mb-3">{p.summary}</p>
                  <p className="text-muted text-sm leading-[1.75] mb-5">{p.detail}</p>
                  <ul className="flex flex-col gap-2.5 mt-auto">
                    {p.points.map(pt => (
                      <li key={pt} className="flex items-start gap-2.5 text-sm text-body">
                        <i className="ri-check-double-line text-accent text-base shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
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
                Every Triveni student carries a <strong className="text-body">School Diary</strong> — a structured, two-way communication channel between teachers and parents. It is signed by both sides, creating a daily record of what was taught, what was assigned and how each child is progressing.
              </p>
              <p className="text-muted leading-[1.8] mb-6">
                This is not a homework planner. It is a formal accountability system that keeps parents genuinely informed and teachers genuinely responsive — every school day.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  'Daily entries by the teacher — not periodic reports',
                  'Parent signature confirms homework and progress are reviewed',
                  'Creates a formal record trail through the academic year',
                  'Bridges the gap between school performance and home awareness',
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
        heading="See Our Pedagogy in Person"
        subtext="Schedule a campus visit and see how Triveni's programmes work in real classrooms — not just on a webpage."
        primaryLabel="Enquire for Admission"
        primaryHref="/admissions#enquiry-form"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  )
}
