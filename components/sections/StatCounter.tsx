'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface Props { target: number; suffix: string; label: string }

export default function StatCounter({ target, suffix, label }: Props) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  useEffect(() => {
    if (!inView) return
    const duration = 2000
    const start = performance.now()
    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, target])

  return (
    <div ref={ref} className="flex-1 text-center py-7 px-4">
      <div className="font-urbanist font-black text-accent text-[clamp(32px,3vw,42px)] leading-none mb-1.5">
        {count}{suffix}
      </div>
      <div className="text-[13px] font-medium text-white/70 uppercase tracking-[0.06em]">{label}</div>
    </div>
  )
}
