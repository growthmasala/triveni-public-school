import type { Metadata, Viewport } from 'next'
import { Inter, Urbanist } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ChatbotLoader from '@/components/ui/ChatbotLoader'
import RemixiconLoader from '@/components/ui/RemixiconLoader'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--nf-inter',
  display: 'swap',
})

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--nf-urbanist',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#272D66',
}

// NOTE: Domain pending client decision. Using trivenibalavikas.in as a working placeholder.
// When the final domain is chosen, update this constant + sitemap.ts + every page's `alternates.canonical`.
const SITE_URL = 'https://www.trivenibalavikas.in'

export const metadata: Metadata = {
  title: {
    default: 'Triveni Balavikas Central School | ICSE School in Bagalagunte, Bengaluru',
    template: '%s | Triveni Balavikas Central School',
  },
  description: 'Triveni Balavikas Central School is a co-educational ICSE school in Bagalagunte, Bengaluru, offering Grades I to VIII. Admissions open for 2026–2027.',
  metadataBase: new URL(SITE_URL),
  keywords: ['ICSE school Bagalagunte', 'ICSE school Hesaraghatta Road', 'ICSE school North Bengaluru', 'Triveni Balavikas Central School', 'Triveni Educational Trust'],
  authors: [{ name: 'Triveni Balavikas Central School' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'Triveni Balavikas Central School',
    title: 'Triveni Balavikas Central School | ICSE School in Bagalagunte, Bengaluru',
    description: 'Quality ICSE education in Bagalagunte, Bengaluru — Grades I to VIII. Admissions open for 2026–2027.',
    images: [{ url: '/images/hero-campus.jpg', width: 1200, height: 630, alt: 'Triveni Balavikas Central School campus' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Triveni Balavikas Central School | ICSE School in Bagalagunte, Bengaluru',
    description: 'Quality ICSE education in Bagalagunte, Bengaluru — Grades I to VIII.',
    images: ['/images/hero-campus.jpg'],
  },
  icons: {
    icon: '/images/triveni-logo.png',
    apple: '/images/triveni-logo.png',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${urbanist.variable}`} data-scroll-behavior="smooth">
      <head>
        {/* Preload hero image — fetched at same priority as CSS, not after */}
        <link rel="preload" as="image" href="/images/hero-campus.jpg" fetchPriority="high" />
      </head>
      <body className="font-inter">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ChatbotLoader />
        <RemixiconLoader />
      </body>
    </html>
  )
}
