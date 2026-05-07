'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import AboutMegaMenu from '@/components/layout/AboutMegaMenu'
import { LEADERS } from '@/lib/leaders'

const links = [
  { href: '/',           label: 'Home' },
  { href: '/about',      label: 'About' },
  { href: '/academics',  label: 'Academics' },
  { href: '/pedagogy',   label: 'Pedagogy' },
  { href: '/admissions', label: 'Admissions' },
  { href: '/life',       label: 'School Life' },
  { href: '/careers',    label: 'Careers' },
  { href: '/contact',    label: 'Contact' },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [aboutExpanded, setAboutExpanded] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false); setAboutExpanded(false) }, [pathname])

  // Mobile/tablet (<lg): always white bg + dark text regardless of scroll
  // Desktop (lg+): transparent + white text at top, white + dark text when scrolled
  const navBg   = scrolled
    ? 'bg-white shadow-[0_2px_24px_rgba(39,45,102,0.10)] py-3'
    : 'bg-white py-3 lg:bg-transparent lg:shadow-none lg:py-[18px]'

  const nameCol = scrolled
    ? 'text-primary'
    : 'text-primary lg:text-white'

  const subCol = scrolled
    ? 'text-muted'
    : 'text-muted lg:text-white/65'

  const textCol = scrolled
    ? 'text-[#1A1A2A]'
    : 'text-[#1A1A2A] lg:text-white'

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
      >
        <div className="container-main flex items-center justify-between gap-4">

          {/* Brand */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/triveni-logo.png"
              alt="Triveni Balavikas Central School"
              width={48}
              height={48}
              sizes="48px"
              priority
              style={{ width: 48, height: 48 }}
            />
            <div className="flex flex-col leading-tight">
              <span className={`font-urbanist font-extrabold text-[15px] sm:text-[16px] tracking-tight transition-colors duration-300 ${nameCol}`}>
                Triveni Balavikas Central School
              </span>
              <span className={`hidden sm:block font-inter text-[10px] font-medium tracking-wide transition-colors duration-300 ${subCol}`}>
                ICSE · Grades I to VIII
              </span>
            </div>
          </Link>

          {/* Desktop links — visible at lg (1024px) and above */}
          <ul className="hidden lg:flex items-center gap-4 xl:gap-7">
            {links.map(({ href, label }) => {
              const active = pathname === href
              if (href === '/about') {
                return <AboutMegaMenu key={href} active={active} textCol={textCol} />
              }
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`font-urbanist font-semibold text-[14px] xl:text-[15px] relative pb-0.5 transition-colors duration-300
                      after:absolute after:bottom-0 after:left-0 after:h-0.5 after:rounded-full after:bg-accent
                      after:transition-all after:duration-300
                      ${active ? 'after:w-full text-accent' : `after:w-0 hover:text-accent ${textCol}`}`}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/admissions"
              className="hidden lg:inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-urbanist font-semibold text-[14px] xl:text-[15px] px-5 xl:px-6 py-3 rounded-pill transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg whitespace-nowrap"
            >
              Enquire Now
            </Link>

            <button
              className="lg:hidden flex flex-col justify-center gap-[5px] w-10 h-10 bg-transparent border-none cursor-pointer"
              onClick={() => setMenuOpen(o => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span className={`block w-6 h-0.5 rounded-full bg-[#1A1A2A] transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block w-6 h-0.5 rounded-full bg-[#1A1A2A] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 rounded-full bg-[#1A1A2A] transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile / tablet drawer */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-border shadow-lg max-h-[80vh] overflow-y-auto">
            <div className="container-main py-2">
              {links.map(({ href, label }) => {
                const active = pathname === href

                if (href === '/about') {
                  return (
                    <div key={href} className="border-b border-border">
                      <div className="flex items-center justify-between">
                        <Link
                          href={href}
                          className={`flex-1 font-urbanist font-semibold text-[15px] py-3.5 transition-colors ${active ? 'text-accent' : 'text-[#1A1A2A] hover:text-accent'}`}
                        >
                          {label}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setAboutExpanded(v => !v)}
                          aria-label={aboutExpanded ? 'Collapse leadership menu' : 'Expand leadership menu'}
                          aria-expanded={aboutExpanded}
                          className="w-10 h-10 flex items-center justify-center text-[#1A1A2A]"
                        >
                          <i className={`ri-arrow-down-s-line text-xl transition-transform ${aboutExpanded ? 'rotate-180' : ''}`} />
                        </button>
                      </div>
                      {aboutExpanded && (
                        <ul className="pb-2 -mt-1">
                          {LEADERS.map(l => (
                            <li key={l.id}>
                              <Link
                                href={`/about#${l.id}`}
                                className="flex items-center gap-3 py-2.5 pl-3 pr-2 text-[14px] text-muted hover:text-accent transition-colors"
                              >
                                <span className="relative w-9 h-9 rounded-full overflow-hidden bg-primary/10 shrink-0">
                                  {/* Decorative — name + title appear right next to it */}
                                  <Image src={l.photo} alt="" fill sizes="36px" className="object-cover object-top" />
                                </span>
                                <span className="flex-1 leading-tight">
                                  <span className="block font-semibold text-[#1A1A2A] text-[13px]">{l.name}</span>
                                  <span className="block text-[11px]">{l.title}</span>
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )
                }

                return (
                  <Link
                    key={href}
                    href={href}
                    className={`block font-urbanist font-semibold text-[15px] py-3.5 border-b border-border last:border-b-0 transition-colors ${active ? 'text-accent' : 'text-[#1A1A2A] hover:text-accent'}`}
                  >
                    {label}
                  </Link>
                )
              })}
              <Link
                href="/admissions"
                className="block mt-4 mb-2 text-center bg-accent hover:bg-accent-dark text-white font-urbanist font-semibold py-3.5 rounded-pill transition-colors"
              >
                Enquire Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
