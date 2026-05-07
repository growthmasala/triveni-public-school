import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import CTABanner from '@/components/sections/CTABanner'
import SplitSection from '@/components/sections/SplitSection'
import SectionLabel from '@/components/ui/SectionLabel'
import FadeIn from '@/components/ui/FadeIn'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Life at Triveni | Events, Gallery & Activities – Triveni Balavikas Central School',
  description: 'Explore life at Triveni Balavikas Central School — Independence Day, Janmashtami, Yuva Kreedotsava sports day, marching band, sustainability initiatives and more.',
  alternates: { canonical: 'https://www.trivenibalavikas.in/life' },
}

const events = [
  { img: '/images/event-independence-day-aerial-view.jpg', alt: 'Independence Day celebration aerial view', badge: 'National Events', title: 'Independence Day & Republic Day', desc: 'Spectacular patriotic celebrations with aerial formations, flag hoisting and management salutes — a proud display of national spirit.' },
  { img: '/images/event-janmashtami-kids-costumes-steps.jpg', alt: 'Janmashtami celebration with students in costumes', badge: 'Cultural Festivals', title: 'Janmashtami & Cultural Fests', desc: 'Students celebrate India\'s cultural diversity through traditional costumes, performances and festivities — building pride in heritage.' },
  { img: '/images/event-sports-day-yuva-kreedotsava-2025.jpg', alt: 'Yuva Kreedotsava Sports Day 2025', badge: 'Sports', title: 'Yuva Kreedotsava 2025', desc: 'Our annual Sports Day celebrates physical fitness, team spirit and the joy of competition across track, field and team sports.' },
]

const galleryImages = [
  { src: '/images/event-independence-day-aerial-view.jpg', alt: 'Independence Day flag hoisting in the school courtyard', wide: true },
  { src: '/images/event-janmashtami-students-costumes-crowd.jpg', alt: 'Janmashtami students in costumes', wide: false },
  { src: '/images/event-bharatnatyam-dance.jpg', alt: 'Classical Bharatnatyam dance performance', wide: false },
  { src: '/images/event-annual-day-stage.jpg', alt: 'Annual Day stage performance with full lighting', wide: true },
  { src: '/images/library-girls-studying.jpg', alt: 'Students concentrating during chess club', wide: false },
  { src: '/images/event-marching-band-girls-red.jpg', alt: 'Marching band performance in red blazers', wide: false },
  { src: '/images/event-yoga-aerial.jpg', alt: 'School-wide yoga session — aerial view', wide: true },
  { src: '/images/event-field-trip-jatayu.jpg', alt: 'Educational field trip to Jatayu', wide: false },
  { src: '/images/event-republic-day-salute-management.jpg', alt: 'Republic Day salute by senior students', wide: false },
]

const campus = [
  { icon: 'ri-building-line', title: 'Modern Classrooms', desc: 'Bright, spacious and well-ventilated learning environments designed to inspire focus and engagement — thoughtfully structured to support interactive teaching.' },
  { icon: 'ri-book-2-line', title: 'Library', desc: 'A thoughtfully curated, well-stocked library that invites students to explore, read and research in a calm, inspiring environment — nurturing curiosity and a lifelong love of learning.' },
  { icon: 'ri-computer-line', title: 'Computer Lab', desc: 'A modern, well-equipped space where students build essential digital skills through hands-on learning — preparing them to thrive in a digital-first world.' },
  { icon: 'ri-football-line', title: 'Sports Facilities', desc: 'Expansive, well-planned spaces for sports and physical education that promote fitness, discipline and teamwork — because a healthy body fuels a healthy mind.' },
  { icon: 'ri-bus-line', title: 'Transport', desc: 'A well-organised network covering key routes across North Bengaluru, with GPS tracking, onboard CCTV, trained caretakers and experienced drivers.' },
  { icon: 'ri-shield-check-line', title: 'Safety & Security', desc: 'A secure, well-monitored campus designed to ensure every child\'s safety and well-being — giving parents complete peace of mind, every single day.' },
]

export default function LifePage() {
  return (
    <>
      <PageHero
        title="Life at Triveni"
        description="School is more than academics. At Triveni, every day is filled with curiosity, celebration, sportsmanship and community — because the whole child matters."
      />

      {/* Intro */}
      <section className="py-22">
        <div className="container-main">
          <SplitSection
            imageSrc="/images/event-marching-band-girls-red.jpg"
            imageAlt="Triveni marching band performing in red uniforms"
            imageBadge="Performing Arts · Marching Band"
            imageBadgeIcon="ri-music-2-line"
          >
            <FadeIn direction="right">
              <SectionLabel>A Day at Triveni</SectionLabel>
              <h2 className="font-urbanist font-extrabold text-[clamp(28px,4vw,42px)] text-[#1A1A2A] mb-4">More Than a School — A Community</h2>
              <p className="text-muted leading-[1.8] mb-4">From morning assembly to the final bell, life at Triveni is energetic, purposeful and joyful. Our students are not just academic achievers — they are confident performers, team players and critical thinkers.</p>
              <p className="text-muted leading-[1.8] mb-6">We deliberately balance classroom rigour with rich co-curricular experiences — because the memories children carry from school are not always about chapters learned, but about friendships made and challenges overcome.</p>
              <div className="grid grid-cols-2 gap-4">
                {[['CCA', 'Holistic Development'], ['5+', 'Active Clubs'], ['Sports', 'Indoor & Outdoor'], ['NIE', 'TOI & The Hindu']].map(([val, label]) => (
                  <div key={label} className="bg-surface rounded-md p-5 text-center">
                    <div className="font-urbanist font-black text-accent text-3xl">{val}</div>
                    <div className="text-muted text-[13px] font-medium uppercase tracking-[0.06em] mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </SplitSection>
        </div>
      </section>

      {/* Events */}
      <section className="py-22 bg-surface">
        <div className="container-main">
          <div className="text-center mb-14">
            <SectionLabel>School Events</SectionLabel>
            <h2 className="font-urbanist font-extrabold text-[clamp(28px,4vw,42px)] text-[#1A1A2A] mb-2">Celebrations That Build Community</h2>
            <p className="text-accent font-urbanist font-semibold text-[15px] tracking-wide mb-4">Where every moment becomes a milestone</p>
            <p className="text-muted text-[17px] max-w-160 mx-auto leading-[1.75]">At Triveni, every celebration is a meaningful experience — designed to nurture confidence, strengthen character, and deepen each student&apos;s sense of belonging within a vibrant school community.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {events.map((e, i) => (
              <FadeIn key={e.title} delay={i * 0.1}>
                <div className="bg-white rounded-md overflow-hidden shadow-sm border border-border h-full">
                  <div className="relative h-[220px] overflow-hidden">
                    <Image src={e.img} alt={e.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <span className="inline-block text-[12px] font-bold text-accent bg-accent/10 px-3 py-1 rounded-pill mb-3">{e.badge}</span>
                    <h4 className="font-urbanist font-bold text-[18px] text-[#1A1A2A] mb-2">{e.title}</h4>
                    <p className="text-muted text-sm leading-[1.6]">{e.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { img: '/images/event-marching-band-girls-red.jpg', alt: 'Marching band in red uniforms', badge: 'Performing Arts', title: 'Marching Band & Performing Arts', desc: 'A proud and vibrant tradition at Triveni — our marching band and performing arts programmes showcase precision, rhythm and coordinated excellence. Guided by a dedicated band instructor, students receive structured training that builds discipline, teamwork and confidence.' },
              { img: '/images/event-republic-day-salute-management.jpg', alt: 'Republic Day salute and ceremony', badge: 'Patriotic Celebrations', title: 'National Days & Ceremonies', desc: 'Spectacular patriotic celebrations bring the spirit of the nation to life — disciplined formations, ceremonial flag hoisting and inspiring salutes that foster pride, unity and a deep sense of national identity.' },
            ].map((e, i) => (
              <FadeIn key={e.title} delay={i * 0.1}>
                <div className="bg-white rounded-md overflow-hidden shadow-sm border border-border h-full">
                  <div className="relative h-50 overflow-hidden">
                    <Image src={e.img} alt={e.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <span className="inline-block text-[12px] font-bold text-accent bg-accent/10 px-3 py-1 rounded-pill mb-3">{e.badge}</span>
                    <h4 className="font-urbanist font-bold text-[18px] text-[#1A1A2A] mb-2">{e.title}</h4>
                    <p className="text-muted text-sm leading-[1.6]">{e.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability — Waste-Paper Recycling */}
      <section className="py-22 bg-surface">
        <div className="container-main">
          <SplitSection
            imageSrc="/images/sustainability-recycling-hands.jpg"
            imageAlt=""
            imageBadge="Student-Led Initiative"
            imageBadgeIcon="ri-recycle-line"
            reverse
          >
            <FadeIn direction="left">
              <SectionLabel>Sustainability in Action</SectionLabel>
              <h2 className="font-urbanist font-extrabold text-[clamp(28px,4vw,42px)] text-[#1A1A2A] mb-4">Recycling as a Practice, Not Just a Project</h2>
              <blockquote className="border-l-4 border-accent pl-5 italic text-body text-[16px] leading-[1.75] mb-5">
                &ldquo;Recycling is essential, as waste has a profound impact on our environment.&rdquo;
              </blockquote>
              <p className="text-muted leading-[1.8] mb-4">
                At Triveni, sustainability is lived — not just taught. Our <strong className="text-body">Waste-Paper Recycling Project</strong> is a continuous, student-led effort where learners take meaningful ownership of an environmental responsibility within the school campus.
              </p>
              <p className="text-muted leading-[1.8] mb-6">
                This is far more than a classroom activity. Students actively collect, process and recycle paper waste — gaining firsthand insight into environmental impact and the importance of responsible action in everyday life.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  'Led by students, fostering ownership and initiative',
                  'Addresses the real environmental impact of paper waste',
                  'Builds accountability, awareness and environmental empathy',
                  'Reflects our commitment to education that extends beyond the classroom',
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

      {/* Gallery */}
      <section className="py-22">
        <div className="container-main">
          <div className="text-center mb-14">
            <SectionLabel>Photo Gallery</SectionLabel>
            <h2 className="font-urbanist font-extrabold text-[clamp(28px,4vw,42px)] text-[#1A1A2A] mb-4">See Triveni in Action</h2>
            <p className="text-muted text-[17px] max-w-[500px] mx-auto leading-[1.75]">Step into real moments from our campus — captured as they happen. No stock images, just authentic glimpses of Triveni life.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map(({ src, alt, wide }) => (
              <FadeIn key={src} className={wide ? 'lg:col-span-2' : ''}>
                <div className={`rounded-md overflow-hidden group cursor-pointer relative ${wide ? 'aspect-2/1' : 'aspect-4/3'}`}>
                  <Image src={src} alt={alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 66vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-3xl">
                    <i className="ri-zoom-in-line" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Campus */}
      <section className="py-22">
        <div className="container-main">
          <div className="text-center mb-14">
            <SectionLabel>Our Campus</SectionLabel>
            <h2 className="font-urbanist font-extrabold text-[clamp(28px,4vw,42px)] text-[#1A1A2A]">Our Campus — Designed for Learning. Built for Growth.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {campus.map((c, i) => (
              <FadeIn key={c.title} delay={(i % 3) * 0.1}>
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
        </div>
      </section>

      <CTABanner heading="Want Your Child to Be Part of This?" subtext="Enquire for admission today — and let your child experience the Triveni difference." />
    </>
  )
}
