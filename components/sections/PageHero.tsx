interface Props {
  title: string
  description: string
  badge?: string
}

export default function PageHero({ title, description, badge }: Props) {
  return (
    <section className="bg-linear-to-br from-primary-dark to-primary pt-24 pb-12 md:pt-32 md:pb-16 lg:pt-36 lg:pb-20 relative overflow-hidden">
      <div className="absolute right-[-100px] bottom-[-100px] w-96 h-96 rounded-full bg-accent/8 pointer-events-none" />
      <div className="container-main relative z-10">
        {badge && (
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 text-accent-light font-urbanist text-[13px] font-bold px-4 py-1.5 rounded-pill mb-4">
            <i className="ri-megaphone-line" /> {badge}
          </div>
        )}
        <h1 className="font-urbanist font-black text-white text-[clamp(28px,4vw,52px)] mb-3 leading-tight">{title}</h1>
        <p className="text-white/75 text-base md:text-lg max-w-135 leading-relaxed">{description}</p>
      </div>
    </section>
  )
}
