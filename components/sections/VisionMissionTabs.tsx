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
    <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8">

      {/* Left — white content card, side-by-side with the photo (no overlap, fixes doc point #35) */}
      <div className="relative z-10 bg-white rounded-xl shadow-xl p-8 lg:p-12 my-0 lg:my-8 flex flex-col justify-center flex-1">

        {/* Tab buttons */}
        <div className="flex gap-3 flex-wrap mb-8">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={[
                'px-6 py-2.5 rounded-pill font-urbanist font-semibold text-[14px] transition-all duration-300 cursor-pointer',
                active === tab.id
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-surface text-primary hover:bg-primary/10',
              ].join(' ')}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Animated content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <h2 className="font-urbanist font-extrabold text-[clamp(24px,3vw,36px)] text-[#1A1A2A] leading-[1.2] mb-5">
              {current.heading}
            </h2>
            <p className="text-muted leading-[1.85] mb-4">{current.para1}</p>
            <p className="text-muted leading-[1.85]">{current.para2}</p>

            {/* Accent quote */}
            <div className="mt-8 pl-5 border-l-4 border-accent">
              <p className="text-body italic text-[15px] leading-[1.7]">{current.quote}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right — Secretary photo. Slot uses the photo's natural landscape aspect (~3:2)
          so the full executive composition fills it edge-to-edge with no letterboxing. */}
      <div className="relative w-full lg:w-[44%] shrink-0 rounded-xl overflow-hidden aspect-3/2 shadow-xl mt-6 lg:mt-0">
        <Image
          src="/images/leadership/secretary-manjunath.jpg"
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 44vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-primary/85 via-primary/30 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <p className="text-white font-urbanist font-bold text-lg">Mr Manjunath K</p>
          <p className="text-white/80 text-sm">Secretary, Triveni Group of Institutions</p>
        </div>
      </div>

    </div>
  )
}
