import { useLocale } from 'next-intl'
import { getTestimonials } from '@/data/testimonials'
import { TestimonialsCarousel } from './TestimonialsCarousel'

export function Testimonials() {
  const locale = useLocale()
  const testimonials = getTestimonials(locale)
  return (
    <section className="section section--dark" aria-labelledby="quotes-h">
      <TestimonialsCarousel items={testimonials} />
    </section>
  )
}
