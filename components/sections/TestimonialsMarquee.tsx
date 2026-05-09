'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'

import { TestimonialCard } from '@/components/ui/testimonial'
import { TESTIMONIALS } from '@/lib/testimonials'

/**
 * Continuous marquee that's also swipeable.
 *
 * Why: Pure CSS marquee doesn't let users swipe on mobile. Swiper does, but its
 * Autoplay module sometimes refuses to start when delay=1 + loop + slidesPerView:auto.
 * Workaround: explicitly call autoplay.start() once Swiper is initialised.
 */
export default function TestimonialsMarquee() {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView="auto"
      spaceBetween={20}
      loop
      grabCursor
      speed={6000}
      autoplay={{
        delay: 1,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loopAdditionalSlides={3}
      onSwiper={(swiper: SwiperType) => {
        // Belt-and-braces: ensure autoplay is running after init
        swiper.autoplay?.start()
      }}
      onTouchEnd={(swiper: SwiperType) => {
        // Resume autoplay if user finished swiping
        swiper.autoplay?.start()
      }}
      className="testimonials-marquee px-2!"
    >
      {TESTIMONIALS.map((t, i) => (
        <SwiperSlide key={i} className="w-80! h-auto py-2">
          <TestimonialCard
            quote={t.quote}
            name={t.name}
            role={t.role}
            imageSrc={t.photo}
            imageAlt={t.name}
            className="h-full"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
