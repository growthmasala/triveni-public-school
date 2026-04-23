import Button from '@/components/ui/Button'

interface Props {
  heading: string
  subtext: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

export default function CTABanner({
  heading, subtext,
  primaryLabel = 'Enquire for Admission', primaryHref = '/admissions',
  secondaryLabel = 'Contact Us', secondaryHref = '/contact',
}: Props) {
  return (
    <section className="bg-linear-to-br from-primary to-primary-light py-16 md:py-20 relative overflow-hidden">
      <div className="absolute right-[-80px] top-[-80px] w-96 h-96 rounded-full bg-accent/12 pointer-events-none" />
      <div className="absolute left-[-40px] bottom-[-100px] w-72 h-72 rounded-full bg-white/5 pointer-events-none" />
      <div className="container-main relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 flex-wrap text-center md:text-left">
        <div>
          <h2 className="font-urbanist font-extrabold text-white text-[clamp(22px,3vw,38px)] mb-2">{heading}</h2>
          <p className="text-white/75 text-base">{subtext}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <Button href={primaryHref} variant="accent" size="lg" className="justify-center">
            <i className="ri-user-add-line" /> {primaryLabel}
          </Button>
          <Button href={secondaryHref} variant="outline-white" size="lg" className="justify-center">
            <i className="ri-phone-line" /> {secondaryLabel}
          </Button>
        </div>
      </div>
    </section>
  )
}
