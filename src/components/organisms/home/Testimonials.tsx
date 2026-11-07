import { testimonials } from '@/data/testimonials'
import { TestimonialsCarousel } from './TestimonialsCarousel'

export function Testimonials() {
  return (
    <section className="section section--dark" aria-labelledby="quotes-h">
      <TestimonialsCarousel items={testimonials} />
    </section>
  )
}
