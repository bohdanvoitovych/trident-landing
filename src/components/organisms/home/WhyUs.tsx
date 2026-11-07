import { SectionHeader } from '@/components/molecules/SectionHeader'

const WHY = [
  ['✕', 'We say no', "Our own material tells you when automation isn't worth it yet."],
  ['≈', 'Measured vs modelled', 'Every figure we publish says which it is.'],
  ['◆', 'Senior at rates that work', 'Swiss accountability, distributed delivery, no juniors sold as seniors.'],
  ['▲', 'Product company', "We build what we'd maintain for five years, because with 8Move we do."],
  ['●', 'A named engineer', 'Not a ticket queue. Same person from audit to operation.'],
  ['↗', 'No lock-in', 'Knowledge base, transcripts and scenarios are exported to you.'],
]

export function WhyUs() {
  return (
    <section className="section" aria-labelledby="why-h">
      <div className="container">
        <SectionHeader
          id="why-h"
          label="Why us"
          title="We've shipped the boring parts"
          lead="Anyone can demo a language model answering a question. Few have wired one into a dispatch system a driver depends on at six in the morning."
        />
        <ul className="grid-3 stagger" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {WHY.map(([g, title, text]) => (
            <li key={title} className="card why-card card--flat">
              <span className="glyph" aria-hidden="true">
                {g}
              </span>
              <h3 className="card-title">{title}</h3>
              <p className="body">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
