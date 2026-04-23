import type { Metadata, Viewport } from 'next'
import { Inter, Urbanist } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SchoolChatbot from '@/components/ui/SchoolChatbot'

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

export const metadata: Metadata = {
  title: {
    default: 'Triveni Public School | Best ICSE School in Bagalagunte, Bengaluru',
    template: '%s | Triveni Public School',
  },
  description: 'Triveni Public School is a co-educational ICSE school in Bagalagunte, Hessarghatta Road, Bengaluru. CISCE affiliated (KA-214). Admissions open for 2026–27.',
  metadataBase: new URL('https://www.trivenipublicschool.in'),
  keywords: ['ICSE school Bagalagunte', 'ICSE school Hessarghatta Road', 'ICSE school T. Dasarahalli', 'ICSE school Bengaluru', 'Triveni Public School', 'KA-214'],
  authors: [{ name: 'Triveni Public School' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenipublicschool.in',
    siteName: 'Triveni Public School',
    title: 'Triveni Public School | Best ICSE School in Bagalagunte, Bengaluru',
    description: 'Quality ICSE education in Bagalagunte, Bengaluru. CISCE affiliated (KA-214). Admissions open for 2026–27.',
    images: [{ url: '/images/hero-campus.png', width: 1200, height: 630, alt: 'Triveni Public School Campus' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Triveni Public School | Best ICSE School in Bagalagunte, Bengaluru',
    description: 'Quality ICSE education in Bagalagunte, Bengaluru. CISCE affiliated (KA-214).',
    images: ['/images/hero-campus.png'],
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
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/remixicon@3.7.0/fonts/remixicon.css" />
      </head>
      <body className="font-inter">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <SchoolChatbot />
      </body>
    </html>
  )
}
