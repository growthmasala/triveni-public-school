import type { Metadata } from 'next'
import Image from 'next/image'
import PageHero from '@/components/sections/PageHero'
import CTABanner from '@/components/sections/CTABanner'
import SectionLabel from '@/components/ui/SectionLabel'
import FadeIn from '@/components/ui/FadeIn'
import ContactForm from '@/components/sections/ContactForm'
import { TESTIMONIALS } from '@/lib/testimonials'

export const metadata: Metadata = {
  title: 'Contact Us | Triveni Balavikas Central School – Hesaraghatta Road, Bagalagunte',
  description: 'Contact Triveni Balavikas Central School. Located at No. 39/1, Hesaraghatta Main Road, Bagalagunte, Nagasandra Post, Bengaluru 560073. Call, WhatsApp or email us.',
  alternates: { canonical: 'https://www.trivenibalavikas.in/contact' },
}

const areas = ['Bagalagunte', 'Nagasandra', 'Hesaraghatta Road', 'Peenya', 'Yeshwanthpur', 'Mallasandra', 'T. Dasarahalli', 'Your Area?']

const featuredTestimonials = TESTIMONIALS.slice(0, 3).map(t => ({
  initial: t.name[0],
  name: t.name,
  role: t.role,
  photo: t.photo,
  rating: 5,
  quote: t.quote,
}))

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': ['School', 'LocalBusiness'],
  name: 'Triveni Balavikas Central School',
  telephone: '+918028397648',
  email: 'trivenitrust@gmail.com',
  address: { '@type': 'PostalAddress', streetAddress: 'No. 39/1, Hesaraghatta Main Road, Bagalagunte, Nagasandra Post', addressLocality: 'Bengaluru', addressRegion: 'Karnataka', postalCode: '560073', addressCountry: 'IN' },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '09:00', closes: '15:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '09:00', closes: '14:00' },
  ],
  parentOrganization: { '@type': 'EducationalOrganization', name: 'Triveni Educational Trust' },
}

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      <PageHero
        title="Get in Touch"
        description="We'd love to hear from you. Whether you have a question about admissions, curriculum or want to visit — reach out and we'll respond promptly."
      />

      {/* Quick contact cards */}
      <section className="py-14 bg-surface">
        <div className="container-main">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: 'ri-phone-fill', title: 'Call Us', desc: '080 2839 7648', sub: 'Mon – Fri 9 AM – 3 PM · Sat 9 AM – 2 PM', href: 'tel:+918028397648' },
              { icon: 'ri-whatsapp-line', title: 'WhatsApp', desc: '+91 97407 01861', sub: 'Quick responses', href: 'https://wa.me/919740701861', iconColor: 'text-[#25D366]', iconBg: 'bg-[#25D366]/10' },
              { icon: 'ri-mail-fill', title: 'Email Us', desc: 'trivenitrust@gmail.com', sub: 'Response within 24 hours', href: 'mailto:trivenitrust@gmail.com' },
              { icon: 'ri-map-pin-fill', title: 'Visit Us', desc: 'Hesaraghatta Main Road', sub: 'Bagalagunte, Bengaluru 560073', href: 'https://maps.google.com/maps?q=No.+39%2F1+Hesaraghatta+Main+Road+Bagalagunte+Bengaluru+560073' },
            ].map((c, i) => (
              <FadeIn key={c.title} delay={i * 0.1}>
                <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="bg-white rounded-md p-6 shadow-sm border border-border flex gap-4 items-start hover:shadow-md hover:border-accent transition-all duration-300 block no-underline">
                  <div className={`w-[52px] h-[52px] rounded-md flex items-center justify-center text-xl shrink-0 ${c.iconBg ?? 'bg-accent/10'} ${c.iconColor ?? 'text-accent'}`}>
                    <i className={c.icon} />
                  </div>
                  <div>
                    <h4 className="font-urbanist font-bold text-base text-[#1A1A2A] mb-1">{c.title}</h4>
                    <p className="text-muted text-sm leading-[1.5]">{c.desc}</p>
                    <p className="text-muted text-[12px]">{c.sub}</p>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-22">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionLabel>Send a Message</SectionLabel>
              <h2 className="font-urbanist font-extrabold text-[clamp(28px,4vw,42px)] text-[#1A1A2A] mb-2">We&apos;d Love to Hear from You</h2>
              <p className="text-muted mb-8">Fill in the form below and our team will get back to you within 24 hours.</p>
              <ContactForm />
            </div>
            <FadeIn direction="right">
              <SectionLabel>Find Us</SectionLabel>
              <h2 className="font-urbanist font-extrabold text-[clamp(24px,3vw,36px)] text-[#1A1A2A] mb-6">We&apos;re on Hesaraghatta Main Road</h2>
              <div className="rounded-lg overflow-hidden shadow-md h-[380px] mb-8">
                <iframe
                  src="https://maps.google.com/maps?q=No.+39%2F1+Hesaraghatta+Main+Road+Bagalagunte+Nagasandra+Post+Bengaluru+560073&output=embed&hl=en"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  title="Triveni Balavikas Central School on Google Maps"
                />
              </div>
              <div className="bg-surface rounded-md p-7 flex flex-col gap-4">
                {[
                  { icon: 'ri-map-pin-2-line', label: 'Address', value: 'No. 39/1, Hesaraghatta Main Road, Bagalagunte, Nagasandra Post, Bengaluru – 560073' },
                  { icon: 'ri-phone-line', label: 'Phone', value: '080 2839 7648', href: 'tel:+918028397648' },
                  { icon: 'ri-whatsapp-line', label: 'WhatsApp', value: '+91 97407 01861', href: 'https://wa.me/919740701861' },
                  { icon: 'ri-mail-line', label: 'Email', value: 'trivenitrust@gmail.com', href: 'mailto:trivenitrust@gmail.com' },
                  { icon: 'ri-time-line', label: 'Hours', value: 'Mon – Fri: 9:00 AM – 3:00 PM · Sat: 9:00 AM – 2:00 PM' },
                ].map(({ icon, label, value, href }) => (
                  <div key={label} className="flex gap-3 items-start">
                    <div className="w-10 h-10 bg-accent/10 rounded-sm flex items-center justify-center text-accent text-[18px] shrink-0">
                      <i className={icon} />
                    </div>
                    <div>
                      <p className="font-urbanist font-bold text-[15px] text-[#1A1A2A] mb-0.5">{label}</p>
                      {href ? <a href={href} className="text-sm text-accent font-semibold hover:underline">{value}</a> : <p className="text-sm text-muted leading-[1.6]">{value}</p>}
                    </div>
                  </div>
                ))}
                <div className="flex gap-3 mt-2">
                  <a href="https://maps.google.com/maps?q=No.+39%2F1+Hesaraghatta+Main+Road+Bagalagunte+Bengaluru+560073" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-urbanist font-semibold text-sm py-3 rounded-pill transition-colors">
                    <i className="ri-navigation-line" /> Get Directions
                  </a>
                  <a href="https://wa.me/919740701861" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-urbanist font-semibold text-sm py-3 rounded-pill transition-all">
                    <i className="ri-whatsapp-line" /> WhatsApp
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Transport & Areas served */}
      <section className="py-22 bg-surface">
        <div className="container-main">
          <div className="text-center mb-10">
            <SectionLabel>Transport &amp; Areas Served</SectionLabel>
            <h2 className="font-urbanist font-extrabold text-[clamp(28px,4vw,42px)] text-[#1A1A2A] mb-4">Safe, Reliable Transport Across North Bengaluru</h2>
            <p className="text-muted text-[17px] max-w-140 mx-auto leading-[1.75]">Triveni Balavikas Central School offers a well-planned transport network covering key localities across North-West Bengaluru. Contact us to confirm availability for your area.</p>
          </div>

          {/* Transport highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
            {[
              { icon: 'ri-bus-line', title: 'School Bus Service', desc: 'Each bus has GPS tracking, onboard CCTV, trained caretakers and experienced drivers — safe, punctual and reassuring.' },
              { icon: 'ri-shield-check-line', title: 'Safe & Supervised', desc: 'Every route is carefully monitored and supported by trained staff. Student safety during transit is a daily commitment at Triveni.' },
              { icon: 'ri-phone-line', title: 'Confirm Your Route', desc: 'Share your locality with us via call or WhatsApp and our team will promptly confirm route availability and timings.' },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="bg-white rounded-md p-7 shadow-sm border border-border flex gap-4 items-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-md flex items-center justify-center text-accent text-xl shrink-0">
                    <i className={item.icon} />
                  </div>
                  <div>
                    <h4 className="font-urbanist font-bold text-base text-[#1A1A2A] mb-1">{item.title}</h4>
                    <p className="text-muted text-sm leading-[1.6]">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Areas grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {areas.map((area, i) => (
              <FadeIn key={area} delay={(i % 4) * 0.1}>
                <div className="bg-white rounded-md p-5 text-center shadow-sm border border-border">
                  <i className={`${area === 'Your Area?' ? 'ri-bus-line text-primary' : 'ri-map-pin-line text-accent'} text-3xl block mb-2.5`} />
                  <h4 className="font-urbanist font-bold text-[15px] text-[#1A1A2A] mb-1">{area}</h4>
                  <p className="text-muted text-[13px]">{area === 'Your Area?' ? <a href="tel:+918028397648" className="text-accent">Call us</a> : i < 4 ? 'Primary area' : 'Route available'}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-22">
        <div className="container-main">
          <div className="text-center mb-10">
            <SectionLabel>What Parents Say</SectionLabel>
            <h2 className="font-urbanist font-extrabold text-[clamp(28px,4vw,42px)] text-[#1A1A2A] mb-4">Trusted by Families Across North Bengaluru</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTestimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.1}>
                <div className="bg-white rounded-md p-8 shadow-md border border-border h-full">
                  <div className="flex gap-1 text-accent mb-4">{Array.from({length: t.rating}).map((_, j) => <i key={j} className="ri-star-fill" />)}</div>
                  <p className="text-body text-base leading-[1.75] italic mb-6">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3.5">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-surface shrink-0">
                      <Image src={t.photo} alt={t.name} fill sizes="48px" className="object-cover object-top" />
                    </div>
                    <div>
                      <p className="font-urbanist font-bold text-[#1A1A2A] text-base">{t.name}</p>
                      <p className="text-muted text-[13px]">{t.role}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="/admissions#enquiry-form" className="inline-flex items-center gap-2 font-urbanist font-semibold text-[15px] text-primary border-2 border-primary rounded-pill px-7 py-3.5 hover:bg-primary hover:text-white transition-all duration-300">
              <i className="ri-user-add-line" /> Enquire for Admission
            </a>
          </div>
        </div>
      </section>

      <CTABanner heading="Ready to Experience Triveni Balavikas Central School?" subtext="Schedule a campus visit and discover firsthand why families across North Bengaluru choose us for a meaningful and enriching educational journey." primaryLabel="Enquire for Admission" secondaryLabel="Get Directions" secondaryHref="https://maps.google.com/maps?q=No.+39%2F1+Hesaraghatta+Main+Road+Bagalagunte+Bengaluru+560073" />
    </>
  )
}
