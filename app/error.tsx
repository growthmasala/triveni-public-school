'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log to error monitoring service in production
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface px-6">
      <div className="text-center max-w-lg">
        <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center text-accent text-4xl mx-auto mb-6">
          <i className="ri-error-warning-line" />
        </div>
        <h1 className="font-urbanist font-extrabold text-[clamp(28px,4vw,36px)] text-[#1A1A2A] mb-4">
          Something Went Wrong
        </h1>
        <p className="text-muted text-[17px] leading-[1.75] mb-8">
          We encountered an unexpected error. Please try again or contact us if the problem persists.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-urbanist font-semibold px-8 py-3.5 rounded-pill transition-colors duration-300"
          >
            <i className="ri-refresh-line" /> Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-urbanist font-semibold px-8 py-3.5 rounded-pill transition-all duration-300"
          >
            <i className="ri-home-line" /> Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}
