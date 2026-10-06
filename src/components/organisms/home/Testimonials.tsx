import { testimonials } from '@/data/testimonials'

// Driven by src/data/testimonials.ts — adding one there is enough, the grid
// reflows on its own. The prototype had these five written into the markup.
export function Testimonials() {
  return (
    <section className="sec" data-screen-label="Testimonials">
      <div className="wrap">
        <div className="sec-head">
          <span className="label">Clients</span>
          <h2 className="h2">What clients say</h2>
        </div>
        <div className="quotes">
          {testimonials.map((t) => (
            <div className="quote rv" key={t.author + t.company}>
              <p>{t.quote}</p>
              <footer>
                <b>{t.author}</b>
                {t.role ? `${t.role}, ${t.company}` : t.company}
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
