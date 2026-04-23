import Image from 'next/image'
import Button from '@/components/ui/Button'
import StatCounter from '@/components/sections/StatCounter'
import FadeIn from '@/components/ui/FadeIn'

type StatItem =
  | { kind: 'counter'; target: number; suffix: string; label: string }
  | { kind: 'text'; value: string; sub: string; label: string }

const stats: StatItem[] = [
  { kind: 'counter', target: 18, suffix: '+', label: 'Years of Excellence' },
  { kind: 'text', value: 'ICSE', sub: 'CISCE, New Delhi', label: 'Board Affiliated' },
  { kind: 'text', value: 'Nursery – X', sub: 'Pre-Primary to Grade X', label: 'All Grades Covered' },
  { kind: 'text', value: 'NIE Partner', sub: 'Times of India', label: 'Newspaper in Education' },
]

const trust = [
  { icon: 'ri-checkbox-circle-fill', text: 'Founded 2007' },
  { icon: 'ri-checkbox-circle-fill', text: 'ICSE Board · KA-214' },
  { icon: 'ri-checkbox-circle-fill', text: 'NIE Partner: Times of India' },
  { icon: 'ri-checkbox-circle-fill', text: 'Pre-Primary to Grade X' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">

      {/* Background — next/image with priority for LCP */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-campus.png"
          alt="Triveni Public School campus"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-right"
        />
      </div>

      {/* Dark-left gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[rgba(10,14,40,0.95)] via-[rgba(15,18,48,0.88)] via-45% to-[rgba(15,18,48,0.10)]" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="container-main w-full pt-24 pb-10 md:py-28 md:pb-16 lg:py-35 lg:pb-40">
          <FadeIn>
            <div className="w-full lg:w-[58%]">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 text-accent-light font-urbanist text-[12px] font-bold tracking-[0.08em] uppercase px-3 py-1.5 rounded-pill mb-5">
                <i className="ri-award-fill text-xs" /> CISCE Affiliated &bull; School Code: KA-214
              </div>

              {/* Headline */}
              <h1 className="font-urbanist font-black text-white text-[clamp(30px,5vw,56px)] leading-[1.15] mb-5 xl:whitespace-nowrap">
                Where Every Child <span className="text-accent">Matters &amp; Thrives</span>
              </h1>

              {/* Description */}
              <p className="text-white/80 text-base leading-[1.75] mb-8 max-w-135">
                Triveni Public School offers quality ICSE education in Bagalagunte, Bengaluru — blending modern pedagogy, strong values, and a nurturing environment from Pre-Primary to Grade X.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-10">
                <Button href="/admissions" variant="accent" size="lg" className="justify-center">
                  <i className="ri-user-add-line" /> Apply for Admission
                </Button>
                <Button href="/life" variant="outline-white" size="lg" className="justify-center">
                  <i className="ri-image-line" /> See School Life
                </Button>
              </div>

              {/* Trust items */}
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:items-center gap-2 sm:gap-5">
                {trust.map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-white/80 text-sm">
                    <i className={`${icon} text-accent text-base shrink-0`} />
                    <span>{text}</span>
                  </div>
                ))}
              </div>

            </div>
          </FadeIn>
        </div>
      </div>

      {/* Stats bar — 2×2 grid on mobile/tablet, single row on lg+ */}
      <div className="relative z-10 lg:absolute lg:bottom-0 lg:left-0 lg:right-0 bg-[rgba(15,18,48,0.82)] backdrop-blur-md border-t border-white/8">
        <div className="container-main">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={[
                  'py-6 px-4',
                  i % 2 === 0 ? 'border-r border-white/12' : '',
                  i < 2 ? 'border-b lg:border-b-0 border-white/12' : '',
                  'lg:border-r lg:last:border-r-0 lg:border-white/12',
                ].join(' ')}
              >
                {s.kind === 'counter' ? (
                  <StatCounter target={s.target} suffix={s.suffix} label={s.label} />
                ) : (
                  <div className="text-center py-7 px-4">
                    <div className="font-urbanist font-black text-accent text-[clamp(20px,2.2vw,28px)] leading-none mb-0.5">{s.value}</div>
                    <div className="text-[11px] text-white/50 mb-1.5">{s.sub}</div>
                    <div className="text-[13px] font-medium text-white/70 uppercase tracking-[0.06em]">{s.label}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
