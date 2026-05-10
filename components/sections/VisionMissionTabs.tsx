'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const tabs = [
  {
    id: 'vision',
    label: 'Our Vision',
    heading: 'Excellence, Holistic Growth & Lifelong Learning',
    para1: 'To be a premier, professionally managed institution that provides an environment fostering excellence and holistic growth — preparing students for a knowledge society and the global economy.',
    para2: 'We develop lifelong learning skills in every child, building confident, capable individuals equipped not just for examinations, but for the challenges and opportunities of tomorrow\'s world.',
    quote: '"Education for life, not just for a living."',
  },
  {
    id: 'mission',
    label: 'Our Mission',
    heading: 'Drawing Out the Best in Every Student',
    para1: 'To be a professionally managed institution with a well-designed quality management system that empowers all stakeholders — teachers, students and parents — as equal partners in the learning journey.',
    para2: 'We create a student-friendly learning environment with innovative practices, remediation analytics and ethical foundations that draw out the very best in every student, every single day.',
    quote: '"Intelligence plus character — that is the goal of true education."',
  },
]

export default function VisionMissionTabs() {
  const [active, setActive] = useState('vision')
  const current = tabs.find(t => t.id === active)!

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[40%_1fr] gap-6 lg:gap-8 items-stretch">

      {/* LEFT — Founder portrait, full height of right column (auto-sizes to match text card) */}
      <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-3/4 lg:aspect-auto">
        <Image
          src="/images/leadership/founder-kariyappa.jpg"
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="object-cover object-center"
        />
        {/* Bottom caption strip */}
        <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-primary/95 via-primary/55 to-transparent pt-14 pb-6 px-6">
          <p className="text-white font-urbanist font-bold text-lg leading-tight">Sri H Kariyappa</p>
          <p className="text-white/80 text-sm">Founder, Triveni Group of Institutions</p>
        </div>
      </div>

      {/* RIGHT — Tab strip + content card (Kingster-style: active tab visually merges into the card) */}
      <div className="flex flex-col">

        {/* Tab strip */}
        <div className="flex gap-1 ml-2">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={[
                'px-6 lg:px-8 py-3.5 font-urbanist font-bold text-[14px] lg:text-[15px] tracking-wide transition-colors duration-200 cursor-pointer rounded-t-xl',
                active === tab.id
                  ? 'bg-white text-primary shadow-[0_-6px_16px_rgba(39,45,102,0.06)] -mb-px relative z-10'
                  : 'bg-surface text-muted hover:text-primary',
              ].join(' ')}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content card — flush with active tab */}
        <div className="relative bg-white rounded-xl rounded-tl-none shadow-xl flex-1 overflow-hidden">
          {/* Decorative corner emblem watermark */}
          <div aria-hidden className="absolute top-6 right-6 w-32 h-32 opacity-[0.05] pointer-events-none">
            <i className="ri-medal-2-fill text-primary text-[128px] leading-none" />
          </div>

          <div className="relative p-8 lg:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <h2 className="font-urbanist font-extrabold text-[clamp(24px,3vw,36px)] text-[#1A1A2A] leading-[1.2] mb-5">
                  {current.heading}
                </h2>
                <p className="text-muted leading-[1.85] mb-4">{current.para1}</p>
                <p className="text-muted leading-[1.85]">{current.para2}</p>

                <div className="mt-8 pl-5 border-l-4 border-accent">
                  <p className="text-body italic text-[15px] leading-[1.7]">{current.quote}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

    </div>
  )
}
