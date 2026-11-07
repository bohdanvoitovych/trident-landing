import { SectionHeader } from '@/components/molecules/SectionHeader'

const PRICES = [
  {
    k: 'Integration · one-off',
    amt: 'CHF 6–25k',
    items: ['Discovery and scenario design', 'Knowledge base build', 'ERP / CRM integration', 'Staff training, 2 weeks supervised live', 'First month of tuning'],
  },
  {
    k: 'Run · monthly',
    amt: (
      <>
        from CHF 450 <small>/ mo</small>
      </>
    ),
    items: ['Typical: CHF 900 / mo', 'Full automation: CHF 1,800 / mo', 'Platform, hosting, monitoring, support', 'Model usage at cost, no margin on tokens'],
    hi: true,
  },
  {
    k: 'Outcome share · optional',
    amt: '70 / 30',
    items: ['70 % fixed fee', '30 % tied to a KPI agreed in writing', 'Leads, bookings, or response time', 'Only where measurement is honest'],
  },
]

const WAYS = [
  ['1. Direct labour', 'Hours on repetitive enquiries × loaded cost. One inside-sales FTE spends 4–6 hours a day on them.'],
  ['2. Lost revenue', 'After-hours enquiries × close rate × deal value. Usually the largest, and never measured.'],
  ['3. Cost of errors', 'Wrong quotes, missed bookings, no-shows nobody confirmed, priced at lost margin.'],
]

/** Moved from the home page to /site-price. */
export function Pricing({ headingLevel = 'h2' }: { headingLevel?: 'h1' | 'h2' }) {
  return (
    <section className="section" id="pricing" aria-labelledby="pricing-h">
      <div className="container">
        <SectionHeader
          id="pricing-h"
          as={headingLevel}
          label="Pricing"
          title="Published, not hidden"
          lead="Integration is its own line, because that's where projects overrun."
        />
        <div className="grid-3 stagger">
          {PRICES.map((p) => (
            <div key={p.k} className={`card price-card card--flat${p.hi ? ' price-card--hi' : ''}`}>
              <span className="meta">{p.k}</span>
              <span className="amt">{p.amt}</span>
              <ul className="ticks">
                {p.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 'clamp(40px,5vw,64px)' }}>
          <h3 className="label" style={{ margin: '0 0 20px' }}>
            We price from your number
          </h3>
          <ol className="grid-3" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {WAYS.map(([title, text]) => (
              <li key={title} className="feature-card card card--flat">
                <h4 className="h4">{title}</h4>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
