'use client'

import { TestimonialCard, type TestimonialCardProps } from '@/components/ui/testimonial'

const testimonials: TestimonialCardProps[] = [
  {
    quote: 'The best school in the industry for quality education at affordable cost. The teachers are very dedicated and committed towards their work.',
    name: 'Raghavan S.',
    role: 'Parent of Grade VII student',
    imageSrc: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100',
    imageAlt: 'Raghavan S.',
  },
  {
    quote: 'Management is too supportive — with the teaching team and with parents alike. The school truly cares about every child, not just the toppers.',
    name: 'Priya M.',
    role: 'Parent of Grade IV student',
    imageSrc: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop',
    imageAlt: 'Priya M.',
  },
  {
    quote: 'Thankful to the teachers and staff for bringing my son to a good shape — both academically and in personality. The ethics focus is unlike any other school.',
    name: 'Karthik N.',
    role: 'Parent of Grade IX student',
    imageSrc: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100',
    imageAlt: 'Karthik N.',
  },
  {
    quote: 'The Science activities and the NIE programme have made my child genuinely love learning. She comes home excited — which is rare at this age.',
    name: 'Anitha V.',
    role: 'Parent of Grade V student',
    imageSrc: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100',
    imageAlt: 'Anitha V.',
  },
  {
    quote: 'Great level of confidence in my son — improvement in personality, discipline and academic skills. The school treats every family as a true partner.',
    name: 'Meena R.',
    role: 'Parent of Grade II student',
    imageSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100',
    imageAlt: 'Meena R.',
  },
]

export default function TestimonialsMarquee() {
  const doubled = [...testimonials, ...testimonials]

  return (
    <div className="overflow-hidden">
      <div className="flex gap-5 animate-marquee">
        {doubled.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>
    </div>
  )
}
