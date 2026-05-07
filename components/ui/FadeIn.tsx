'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
  className?: string
}

const dirClass: Record<string, string> = {
  up:    'fi-up',
  left:  'fi-left',
  right: 'fi-right',
  none:  'fi-none',
}

export default function FadeIn({ children, delay = 0, direction = 'up', className = '' }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.animationDelay = delay > 0 ? `${delay}s` : ''
          el.classList.remove('fi-hidden')
          el.classList.add(dirClass[direction] ?? 'fi-up')
          observer.disconnect()
        }
      },
      { threshold: 0.08 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, direction])

  return (
    <div ref={ref} className={`fi-hidden ${className}`}>
      {children}
    </div>
  )
}
