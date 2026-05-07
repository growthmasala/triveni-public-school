import Link from 'next/link'
import Image from 'next/image'

const quickLinks = [
  { href: '/',           label: 'Home' },
  { href: '/about',      label: 'About Us' },
  { href: '/academics',  label: 'Academics' },
  { href: '/pedagogy',   label: 'Our Pedagogy' },
  { href: '/admissions', label: 'Admissions' },
  { href: '/life',       label: 'School Life' },
  { href: '/careers',    label: 'Careers' },
  { href: '/contact',    label: 'Contact' },
]

const academicLinks = [
  { href: '/academics#primary', label: 'Primary School (I–V)' },
  { href: '/academics#middle',  label: 'Middle School (VI–VIII)' },
  { href: '/pedagogy',          label: 'Our Pedagogy' },
  { href: '/academics#clubs',   label: 'Clubs & Activities' },
  { href: '/life',              label: 'School Life' },
  { href: '/contact',           label: 'Transport & Areas' },
]

const socials = [
  { icon: 'ri-facebook-fill',  href: '#', label: 'Facebook' },
  { icon: 'ri-instagram-line', href: '#', label: 'Instagram' },
  { icon: 'ri-youtube-line',   href: '#', label: 'YouTube' },
  { icon: 'ri-whatsapp-line',  href: 'https://wa.me/919740701861', label: 'WhatsApp' },
]

export default function Footer() {
  return (
    <footer className="bg-dark text-white/75">
      <div className="container-main pt-[72px] pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div>
            <Image
              src="/images/triveni-logo.png"
              alt="Triveni Balavikas Central School"
              width={64}
              height={64}
              sizes="64px"
              style={{ width: 64, height: 64 }}
              className="mb-5"
            />
            <p className="text-sm leading-7 text-white/60 mb-6 max-w-[300px]">
              A co-educational ICSE school in Bagalagunte, Bengaluru, committed to nurturing young minds through quality education, strong values and a culture of holistic development.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[38px] h-[38px] rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:bg-accent hover:border-accent hover:text-white transition-all duration-300"
                >
                  <i className={`${icon} text-base`} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-urbanist font-bold text-white text-base mb-5">Quick Links</p>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/60 hover:text-accent transition-colors duration-300">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <p className="font-urbanist font-bold text-white text-base mb-5">Academics</p>
            <ul className="flex flex-col gap-2.5">
              {academicLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/60 hover:text-accent transition-colors duration-300">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-urbanist font-bold text-white text-base mb-5">Contact Us</p>
            <div className="flex flex-col gap-3">
              {[
                { icon: 'ri-map-pin-2-line', content: 'No. 39/1, Hesaraghatta Main Road, Bagalagunte, Nagasandra Post, Bengaluru – 560073' },
                { icon: 'ri-phone-line',     content: '080 2839 7648',  href: 'tel:+918028397648' },
                { icon: 'ri-whatsapp-line',  content: '+91 97407 01861', href: 'https://wa.me/919740701861' },
                { icon: 'ri-mail-line',      content: 'trivenitrust@gmail.com', href: 'mailto:trivenitrust@gmail.com' },
                { icon: 'ri-time-line',      content: 'Mon – Fri: 9:00 AM – 3:00 PM · Sat: 9:00 AM – 2:00 PM' },
              ].map(({ icon, content, href }) => (
                <div key={icon} className="flex gap-2.5 items-start">
                  <i className={`${icon} text-accent mt-0.5 shrink-0`} />
                  {href ? (
                    <a href={href} className="text-sm text-white/60 hover:text-accent transition-colors leading-relaxed">{content}</a>
                  ) : (
                    <span className="text-sm text-white/60 leading-relaxed">{content}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.08] py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-white/45 text-center md:text-left">
            © 2026 Triveni Balavikas Central School, Bengaluru. All rights reserved.
          </p>
          <p className="text-sm text-white/45">
            Built by <a href="https://growthmasala.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Growth Masala</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
