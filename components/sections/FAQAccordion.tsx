'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface FAQItem { question: string; answer: string }

interface Props { items: FAQItem[] }

export default function FAQAccordion({ items }: Props) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => (
        <div
          key={i}
          className={`border rounded-md bg-white overflow-hidden transition-shadow duration-300 ${open === i ? 'border-accent/30 shadow-sm' : 'border-border'}`}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 font-urbanist font-bold text-base text-[#1A1A2A] text-left hover:text-accent transition-colors duration-300 gap-4"
          >
            {item.question}
            <i className={`ri-arrow-down-s-line text-accent text-lg shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <p className="px-6 pb-5 text-[15px] text-muted leading-[1.75]"
                   dangerouslySetInnerHTML={{ __html: item.answer }} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
