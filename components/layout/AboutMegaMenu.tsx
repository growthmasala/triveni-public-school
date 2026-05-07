'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { LEADERS } from '@/lib/leaders'

type Props = {
  active: boolean
  textCol: string
}

export default function AboutMegaMenu({ active, textCol }: Props) {
  const [open, setOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Hover-with-forgiveness: open instantly, delay close so user can move
  // diagonally from trigger to panel without it disappearing.
  const handleEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpen(true)
  }
  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 180)
  }

  useEffect(() => () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }, [])

  return (
    <li
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Link
        href="/about"
        aria-haspopup="true"
        aria-expanded={open}
        className={`font-urbanist font-semibold text-[14px] xl:text-[15px] relative pb-0.5 transition-colors duration-300 inline-flex items-center gap-1
          after:absolute after:bottom-0 after:left-0 after:h-0.5 after:rounded-full after:bg-accent
          after:transition-all after:duration-300
          ${active ? 'after:w-full text-accent' : `after:w-0 hover:text-accent ${textCol}`}`}
      >
        About <i className="ri-arrow-down-s-line text-sm" aria-hidden />
      </Link>

      {/* Dropdown panel — vertical list, conventional dropdown pattern */}
      <div
        className={`absolute top-full left-0 pt-3 transition-all duration-200 z-50
          ${open ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1 pointer-events-none'}`}
      >
        <div className="bg-white border border-border rounded-lg shadow-[0_12px_40px_rgba(39,45,102,0.16)] p-2 w-90">
          <p className="px-3 pt-2 pb-2 text-[11px] font-urbanist font-bold tracking-[0.12em] uppercase text-muted">
            Our Leadership
          </p>
          {LEADERS.map((leader) => (
            <Link
              key={leader.id}
              href={`/about#${leader.id}`}
              className="rounded-md px-3 py-2.5 hover:bg-surface transition-colors duration-200 group flex items-center gap-3"
            >
              <div className="relative w-11 h-11 shrink-0 rounded-full overflow-hidden bg-primary/10 ring-2 ring-transparent group-hover:ring-accent transition-all duration-200">
                {/* Decorative — name + title sit right next to it */}
                <Image
                  src={leader.photo}
                  alt=""
                  fill
                  sizes="44px"
                  className="object-cover object-top"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-urbanist font-bold text-[14px] text-[#1A1A2A] leading-tight mb-0.5 group-hover:text-primary transition-colors">
                  {leader.name}
                </p>
                <p className="text-muted text-[12px] leading-tight truncate">{leader.title}</p>
              </div>
              <i className="ri-arrow-right-s-line text-muted text-lg shrink-0 group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
            </Link>
          ))}
          <div className="border-t border-border mt-2 pt-2">
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-[13px] font-urbanist font-semibold text-primary hover:bg-surface transition-colors"
            >
              Visit About page <i className="ri-arrow-right-line text-sm align-middle" />
            </Link>
          </div>
        </div>
      </div>
    </li>
  )
}
