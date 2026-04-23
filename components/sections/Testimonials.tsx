'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

interface Testimonial {
  name: string
  role: string
  quote: string
  rating: number
  initial: string
}

interface Props { items: Testimonial[] }

export default function Testimonials({ items }: Props) {
  return (
    <div className="pb-12">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={24}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{ 768: { slidesPerView: 2 } }}
      >
        {items.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white rounded-md p-8 shadow-md border border-border h-full">
              <div className="flex gap-1 text-accent mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <i key={j} className={j < t.rating ? 'ri-star-fill' : 'ri-star-line'} />
                ))}
              </div>
              <p className="text-body text-base leading-[1.75] italic mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center font-urbanist font-extrabold text-xl text-primary flex-shrink-0">
                  {t.initial}
                </div>
                <div>
                  <p className="font-urbanist font-bold text-[#1A1A2A] text-base">{t.name}</p>
                  <p className="text-muted text-[13px]">{t.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
