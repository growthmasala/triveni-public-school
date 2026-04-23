import { cn } from '@/lib/utils'

export interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  imageSrc: string
  imageAlt: string
  className?: string
}

export function TestimonialCard({ quote, name, role, imageSrc, imageAlt, className }: TestimonialCardProps) {
  return (
    <div className={cn(
      'w-80 shrink-0 flex flex-col items-start border border-border p-6 rounded-2xl bg-white shadow-sm',
      className
    )}>
      {/* Quote icon */}
      <svg width="44" height="40" viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M33.172 5.469q2.555 0 4.547 1.547a7.4 7.4 0 0 1 2.695 4.007q.47 1.711.469 3.61 0 2.883-1.125 5.86a22.8 22.8 0 0 1-3.094 5.577 33 33 0 0 1-4.57 4.922A35 35 0 0 1 26.539 35l-3.398-3.398q5.296-4.243 7.218-6.563 1.946-2.32 2.016-4.617-2.86-.329-4.781-2.461-1.923-2.133-1.922-4.992 0-3.117 2.18-5.297 2.202-2.203 5.32-2.203m-20.625 0q2.555 0 4.547 1.547a7.4 7.4 0 0 1 2.695 4.007q.47 1.711.469 3.61 0 2.883-1.125 5.86a22.8 22.8 0 0 1-3.094 5.577 33 33 0 0 1-4.57 4.922A35 35 0 0 1 5.914 35l-3.398-3.398q5.296-4.243 7.218-6.563 1.946-2.32 2.016-4.617-2.86-.329-4.781-2.461-1.922-2.133-1.922-4.992 0-3.117 2.18-5.297 2.202-2.203 5.32-2.203" fill="#272D66"/>
      </svg>

      {/* Stars */}
      <div className="flex items-center gap-1 mt-3">
        {[1, 2, 3, 4, 5].map((s) => (
          <i key={s} className="ri-star-fill text-accent text-base" />
        ))}
      </div>

      {/* Quote text */}
      <p className="text-sm mt-4 text-muted leading-[1.75] flex-1">{quote}</p>

      {/* Avatar + name */}
      <div className="flex items-center gap-3 mt-5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-12 w-12 rounded-full object-cover shrink-0"
        />
        <div>
          <h3 className="font-urbanist font-semibold text-[15px] text-[#1A1A2A]">{name}</h3>
          <p className="text-sm text-muted">{role}</p>
        </div>
      </div>
    </div>
  )
}
