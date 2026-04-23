import type { Metadata } from 'next'
import { Inter, Urbanist } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/ui/WhatsAppFloat'

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

export const metadata: Metadata = {
  title: 'Triveni Public School | Best ICSE School in Bagalagunte, Bengaluru',
  description: 'Triveni Public School is a co-educational ICSE school in Bagalagunte, Hessarghatta Road, Bengaluru. CISCE affiliated (KA-214). Admissions open for 2025–26.',
  metadataBase: new URL('https://www.trivenipublicschool.in'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${urbanist.variable}`} data-scroll-behavior="smooth">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/remixicon@3.7.0/fonts/remixicon.css" rel="stylesheet" />
      </head>
      <body className="font-inter">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
