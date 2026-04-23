import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import CTABanner from '@/components/sections/CTABanner'
import SplitSection from '@/components/sections/SplitSection'
import SectionLabel from '@/components/ui/SectionLabel'
import FadeIn from '@/components/ui/FadeIn'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Life at Triveni | Events, Gallery & Activities – Triveni Public School Bengaluru',
  description: 'Explore life at Triveni Public School — Independence Day, Janmashtami, Sports Day, NCC, Scouts, marching bands, kindergarten graduation and more.',
  alternates: { canonical: 'https://www.trivenipublicschool.in/life' },
}

const events = [
  { img: '/images/event-independence-day-aerial-view.jpg', alt: 'Independence Day celebration aerial view', badge: 'National Events', title: 'Independence Day & Republic Day', desc: 'Spectacular patriotic celebrations with aerial formations, flag hoisting and management salutes — a proud display of national spirit.' },
  { img: '/images/event-janmashtami-kids-costumes-steps.jpg', alt: 'Janmashtami celebration with students in costumes', badge: 'Cultural Festivals', title: 'Janmashtami & Cultural Fests', desc: 'Students celebrate India\'s cultural diversity through traditional costumes, performances and festivities — building pride in heritage.' },
  { img: '/images/event-sports-day-yuva-kreedotsava-2025.jpg', alt: 'Yuva Kreedotsava Sports Day 2025', badge: 'Sports', title: 'Yuva Kreedotsava 2025', desc: 'Our annual Sports Day celebrates physical fitness, team spirit and the joy of competition across track, field and team sports.' },
]

const galleryImages = [
  { src: '/images/event-republic-day-salute-management.jpg', alt: 'Republic Day management salute', wide: true },
  { src: '/images/event-janmashtami-students-costumes-crowd.jpg', alt: 'Janmashtami crowd of students in costumes', wide: false },
  { src: '/images/event-ncc-khaki-tricolor-balloon-arch.jpg', alt: 'NCC students with tricolour balloon arch', wide: false },
  { src: '/images/campus-exterior-evening-buses.jpg', alt: 'Triveni school campus with buses at evening', wide: true },
  { src: '/images/event-independence-day-aerial-view.jpg', alt: 'Independence Day aerial view', wide: true },
  { src: '/images/library-girls-studying.jpg', alt: 'Girls studying in school library', wide: false },
]

const campus = [
  { icon: 'ri-building-line', title: 'Modern Classrooms', desc: 'Bright, well-ventilated classrooms equipped for interactive learning — from colourful pre-primary rooms to focused senior school halls.' },
  { icon: 'ri-book-2-line', title: 'Library', desc: 'A well-stocked library where students browse, read, research and develop a love of learning that goes beyond any syllabus.' },
  { icon: 'ri-computer-line', title: 'Computer Lab', desc: 'Technology skills built from primary school onwards — preparing students for a digital-first world with hands-on computer education.' },
  { icon: 'ri-football-line', title: 'Sports Facilities', desc: 'Space for sports and physical education — because healthy bodies and healthy minds go together, and every child deserves to play.' },
  { icon: 'ri-bus-line', title: 'Transport', desc: 'Safe, reliable bus services covering major routes across North Bengaluru — making Triveni accessible for families across the catchment area.' },
  { icon: 'ri-shield-check-line', title: 'Safety & Security', desc: 'A secure, monitored campus environment where parents can feel confident their child is in safe hands every single day.' },
]

export default function LifePage() {
  return (
    <>
      <PageHero
        title="Life at Triveni"
        description="School is more than academics. At Triveni, every day is filled with curiosity, celebration, sportsmanship and community — because the whole child matters."
      />

      {/* Intro */}
      <section className="py-[88px]">
        <div className="container-main">
          <SplitSection
            imageSrc="/images/event-kindergarten-graduation-blue-gowns.jpg"
            imageAlt="Kindergarten graduation ceremony — students in blue gowns"
            imageBadge="Kindergarten Graduation 2024"
            imageBadgeIcon="ri-graduation-cap-line"
          >
            <FadeIn direction="right">
              <SectionLabel>A Day at Triveni</SectionLabel>
              <h2 className="font-urbanist font-extrabold text-[clamp(28px,4vw,42px)] text-[#1A1A2A] mb-4">More Than a School — A Community</h2>
              <p className="text-muted leading-[1.8] mb-4">From morning assembly to the final bell, life at Triveni is energetic, purposeful and joyful. Our students are not just academic achievers — they are confident performers, team players and critical thinkers.</p>
              <p className="text-muted leading-[1.8] mb-6">We deliberately balance classroom rigour with rich co-curricular experiences — because the memories children carry from school are not always about chapters learned, but about friendships made and challenges overcome.</p>
              <div className="grid grid-cols-2 gap-4">
                {[['15+', 'Annual Events'], ['5+', 'Active Clubs'], ['NCC', '& Scouts'], ['TOI', 'NIE Partner']].map(([val, label]) => (
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
      <section className="py-[88px] bg-surface">
        <div className="container-main">
          <div className="text-center mb-14">
            <SectionLabel>School Events</SectionLabel>
            <h2 className="font-urbanist font-extrabold text-[clamp(28px,4vw,42px)] text-[#1A1A2A] mb-4">Celebrations That Build Community</h2>
            <p className="text-muted text-[17px] max-w-[560px] mx-auto leading-[1.75]">Each event at Triveni is an opportunity for students to grow — in confidence, in character and in their sense of belonging.</p>
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
              { img: '/images/event-kindergarten-graduation-blue-gowns.jpg', alt: 'Kindergarten graduation', badge: 'Milestones', title: 'Kindergarten Graduation Ceremony', desc: 'Our youngest graduates celebrate the completion of Pre-Primary with a formal graduation — capped gowns and all. A day families cherish forever.' },
              { img: '/images/event-marching-band-girls-red.jpg', alt: 'Marching band in red uniforms', badge: 'Performing Arts', title: 'Marching Band & Performing Arts', desc: 'Our marching band performs at national events and school functions, building precision, discipline and teamwork — a proud tradition students look forward to joining.' },
            ].map((e, i) => (
              <FadeIn key={e.title} delay={i * 0.1}>
                <div className="bg-white rounded-md overflow-hidden shadow-sm border border-border h-full">
                  <div className="relative h-[200px] overflow-hidden">
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

      {/* NCC & Scouts */}
      <section className="py-[88px]">
        <div className="container-main">
          <div className="text-center mb-14">
            <SectionLabel>Discipline &amp; Service</SectionLabel>
            <h2 className="font-urbanist font-extrabold text-[clamp(28px,4vw,42px)] text-[#1A1A2A] mb-4">NCC &amp; Scouts — Building Tomorrow&apos;s Leaders</h2>
            <p className="text-muted text-[17px] max-w-[560px] mx-auto leading-[1.75]">National Cadet Corps and Scouts &amp; Guides are among the most character-building programmes a school can offer.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {[
              { img: '/images/event-ncc-flag-jai-jawan-unity-diversity.jpg', alt: 'NCC students with Jai Jawan unity flag', title: 'National Cadet Corps (NCC)', desc: 'NCC at Triveni trains students in discipline, leadership, physical fitness and service to the nation — developing responsibility, punctuality and national pride that shapes them for life.' },
              { img: '/images/event-scouts-march-colourful-flags.jpg', alt: 'Scouts marching with colourful flags', title: 'Scouts & Guides', desc: 'Our Scouts and Guides programme develops teamwork, community service, outdoor skills and the spirit of "Be Prepared." Students participate in local and regional events, building lifelong leadership skills.' },
            ].map(({ img, alt, title, desc }) => (
              <div key={title}>
                <div className="relative rounded-lg overflow-hidden mb-4 h-[300px]">
                  <Image src={img} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                </div>
                <h3 className="font-urbanist font-extrabold text-2xl text-[#1A1A2A] mb-3">{title}</h3>
                <p className="text-muted leading-[1.8]">{desc}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-4">
            {['/images/event-ncc-students-purple-balloon-arch.jpg', '/images/event-scouts-blue-tricolor-balloon-arch.jpg', '/images/event-scouts-guides-pennants-balloon-arch.jpg'].map((src, i) => (
              <FadeIn key={src} delay={i * 0.1}>
                <div className="relative rounded-md overflow-hidden h-[180px]">
                  <Image src={src} alt="NCC and Scouts activities" fill sizes="33vw" className="object-cover" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-[88px] bg-surface">
        <div className="container-main">
          <div className="text-center mb-14">
            <SectionLabel>Photo Gallery</SectionLabel>
            <h2 className="font-urbanist font-extrabold text-[clamp(28px,4vw,42px)] text-[#1A1A2A] mb-4">See Triveni in Action</h2>
            <p className="text-muted text-[17px] max-w-[500px] mx-auto leading-[1.75]">Real moments from our campus — no stock photos, just Triveni life as it is.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map(({ src, alt, wide }) => (
              <FadeIn key={src} className={wide ? 'lg:col-span-2' : ''}>
                <div className={`rounded-md overflow-hidden group cursor-pointer relative ${wide ? 'aspect-[2/1]' : 'aspect-[4/3]'}`}>
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
      <section className="py-[88px]">
        <div className="container-main">
          <div className="text-center mb-14">
            <SectionLabel>Our Campus</SectionLabel>
            <h2 className="font-urbanist font-extrabold text-[clamp(28px,4vw,42px)] text-[#1A1A2A]">A Campus Built for Learning &amp; Growth</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {campus.map((c, i) => (
              <FadeIn key={c.title} delay={(i % 3) * 0.1}>
                <div className="bg-white rounded-md p-9 shadow-sm border border-border hover:-translate-y-1.5 hover:shadow-lg hover:border-accent transition-all duration-300 group h-full">
                  <div className="w-[60px] h-[60px] bg-accent/10 rounded-md flex items-center justify-center text-accent text-2xl mb-5 group-hover:bg-accent group-hover:text-white transition-all duration-300">
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
