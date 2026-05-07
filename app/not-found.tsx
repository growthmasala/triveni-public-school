import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found | Triveni Balavikas Central School',
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface px-6">
      <div className="text-center max-w-lg">
        <p className="font-urbanist font-black text-[120px] leading-none text-primary/10 select-none">404</p>
        <h1 className="font-urbanist font-extrabold text-[clamp(28px,4vw,42px)] text-[#1A1A2A] -mt-6 mb-4">
          Page Not Found
        </h1>
        <p className="text-muted text-[17px] leading-[1.75] mb-8">
          The page you&apos;re looking for doesn&apos;t exist. It may have been moved or the URL may be incorrect.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-urbanist font-semibold px-8 py-3.5 rounded-pill transition-colors duration-300"
          >
            <i className="ri-home-line" /> Go to Homepage
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-urbanist font-semibold px-8 py-3.5 rounded-pill transition-all duration-300"
          >
            <i className="ri-phone-line" /> Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
