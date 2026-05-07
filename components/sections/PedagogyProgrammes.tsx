export type Programme = {
  icon: string
  tag: string
  title: string
  summary: string
  detail: string
  points: string[]
}

export default function PedagogyProgrammes({ programmes }: { programmes: Programme[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {programmes.map((p) => (
        <article
          key={p.tag}
          className="relative bg-white rounded-lg border border-border shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-accent/50 transition-all duration-300 p-7 flex flex-col overflow-hidden"
        >
          {/* Large translucent number watermark */}
          <span
            aria-hidden
            className="absolute top-3 right-5 font-urbanist font-black text-7xl text-accent/8 select-none pointer-events-none leading-none"
          >
            {p.tag}
          </span>

          <div className="relative flex flex-col h-full">
            <div className="w-12 h-12 bg-primary/8 rounded-md flex items-center justify-center text-primary text-2xl mb-5">
              <i className={p.icon} />
            </div>

            <h3 className="font-urbanist font-extrabold text-lg text-[#1A1A2A] leading-tight mb-2">
              {p.title}
            </h3>

            <p className="font-urbanist font-semibold text-[14px] text-primary mb-3 leading-snug">
              {p.summary}
            </p>

            <p className="text-muted text-sm leading-[1.7] mb-5">{p.detail}</p>

            <ul className="flex flex-col gap-2 mt-auto pt-4 border-t border-border">
              {p.points.map((pt) => (
                <li key={pt} className="flex items-start gap-2 text-[13px] text-body leading-snug">
                  <i className="ri-check-line text-accent text-sm shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  )
}
