'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
  className?: string
}

export default function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: FadeInProps) {
  const initial = {
    opacity: 0,
    y: direction === 'up'    ?  28 : 0,
    x: direction === 'left'  ? -28 : direction === 'right' ? 28 : 0,
  }

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
