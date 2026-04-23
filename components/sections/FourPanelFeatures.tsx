'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// Column-first order matching reference: 01 top-left, 02 bottom-left, 03 top-right, 04 bottom-right
// In a 2-col grid (row-first by default) we use CSS order to achieve column-first visually
const panels = [
  {
    n: '01.',
    title: '5E Science Pedagogy',
    desc: 'Hands-on, inquiry-based science using the globally proven 5E model — Engage, Explore, Explain, Elaborate, Evaluate. No rote learning here.',
    bg: 'bg-primary',
    numCol: 'text-accent',
    titleCol: 'text-white',
    descCol: 'text-white/65',
    order: 'lg:order-1',
    inner: false,
  },
  {
    n: '02.',
    title: 'Whole-Child Development',
    desc: "Ethics as a primary subject, literary clubs, NCC, Scouts — every dimension of a child's personality gets dedicated attention and nurturing.",
    bg: 'bg-[#E8EAF4]',
    numCol: 'text-primary/10',
    titleCol: 'text-[#1A1A2A]',
    descCol: 'text-muted',
    order: 'lg:order-3',
    inner: false,
  },
  {
    n: '03.',
    title: 'Remediation Analytics',
    desc: 'A data-driven self-learning platform that identifies individual learning gaps — personalised remediation so every child progresses at their own pace.',
    bg: 'bg-surface',
    numCol: 'text-primary/10',
    titleCol: 'text-[#1A1A2A]',
    descCol: 'text-muted',
    order: 'lg:order-2',
    inner: true,
  },
  {
    n: '04.',
    title: 'Accessible Management',
    desc: "Parents consistently praise our warm, responsive management team. We treat every family as a true partner in their child's growth.",
    bg: 'bg-accent',
    numCol: 'text-white/20',
    titleCol: 'text-white',
    descCol: 'text-white/75',
    order: 'lg:order-4',
    inner: true,
  },
]

function ArcRing({ inView }: { inView: boolean }) {
  const size = 400
  const cx = size / 2
  const cy = size / 2

  // Outer arc — clockwise, longer, slower
  const r1 = 178
  const c1 = 2 * Math.PI * r1
  const arc1 = c1 * 0.70   // 70% arc visible

  // Inner arc — counter-clockwise, shorter, faster
  const r2 = 158
  const c2 = 2 * Math.PI * r2
  const arc2 = c2 * 0.40   // 40% arc visible

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      aria-hidden="true"
    >
      {/* Outer arc — clockwise continuous rotation */}
      <motion.circle
        cx={cx} cy={cy} r={r1}
        fill="none"
        stroke="#EC7E34"
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray={`${arc1} ${c1 - arc1}`}
        initial={{ rotate: 0, opacity: 0 }}
        animate={inView ? { rotate: 360, opacity: 1 } : { rotate: 0, opacity: 0 }}
        transition={inView ? {
          rotate: { duration: 14, repeat: Infinity, ease: 'linear' },
          opacity: { duration: 0.6, delay: 0.1 },
        } : { opacity: { duration: 0.3 } }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      />
      {/* Inner arc — counter-clockwise, faster */}
      <motion.circle
        cx={cx} cy={cy} r={r2}
        fill="none"
        stroke="#EC7E34"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray={`${arc2} ${c2 - arc2}`}
        initial={{ rotate: 0, opacity: 0 }}
        animate={inView ? { rotate: -360, opacity: 1 } : { rotate: 0, opacity: 0 }}
        transition={inView ? {
          rotate: { duration: 9, repeat: Infinity, ease: 'linear' },
          opacity: { duration: 0.6, delay: 0.3 },
        } : { opacity: { duration: 0.3 } }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      />
    </svg>
  )
}

export default function FourPanelFeatures() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div ref={ref} className="relative grid grid-cols-1 lg:grid-cols-2 gap-0">

      {panels.map((p) => (
        <div
          key={p.n}
          className={[
            p.bg,
            p.order,
            'px-10 pt-12 pb-14 lg:pt-14 lg:pb-16 min-h-65 lg:min-h-95 flex flex-col',
            p.inner ? 'lg:px-14 lg:pl-44' : 'lg:px-14',
          ].join(' ')}
        >
          <p className={`font-urbanist font-black text-[72px] lg:text-[96px] leading-none mb-5 ${p.numCol}`}>{p.n}</p>
          <h3 className={`font-urbanist font-extrabold text-2xl lg:text-[26px] mb-4 leading-snug ${p.titleCol} ${!p.inner ? 'lg:max-w-[50%]' : ''}`}>
            {p.title}
          </h3>
          <p className={`text-[15px] leading-[1.8] ${p.descCol} ${!p.inner ? 'lg:max-w-[50%]' : ''}`}>
            {p.desc}
          </p>
        </div>
      ))}

      {/* Center circle + arc — desktop only */}
      <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <ArcRing inView={inView} />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72.5 h-72.5 rounded-full overflow-hidden shadow-2xl">
          <Image
            src="/images/classroom-nie-newspaper-times-of-india.jpg"
            alt="Students actively learning at Triveni Public School"
            fill
            sizes="290px"
            className="object-cover"
          />
        </div>
      </div>

    </div>
  )
}
