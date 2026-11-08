import { useTranslations } from 'next-intl'
import { SectionHeader } from '@/components/molecules/SectionHeader'

// Amounts that are only numbers stay here; `null` means the amount comes from messages.
const PRICES = [
  { k: 'integration', amt: 'CHF 6–25k' },
  { k: 'run', amt: null, hi: true },
  { k: 'outcome', amt: '70 / 30' },
] as const

const WAYS = ['labour', 'revenue', 'errors'] as const

/** Moved from the home page to /site-price. */
export function Pricing({ headingLevel = 'h2' }: { headingLevel?: 'h1' | 'h2' }) {
  const t = useTranslations('sections.pricing')
  return (
    <section className="section" id="pricing" aria-labelledby="pricing-h">
      <div className="container">
        <SectionHeader
          id="pricing-h"
          as={headingLevel}
          label={t('label')}
          title={t('title')}
          lead={t('lead')}
        />
        <div className="grid-3 stagger">
          {PRICES.map((p) => (
            <div key={p.k} className={`card price-card card--flat${'hi' in p ? ' price-card--hi' : ''}`}>
              <span className="meta">{t(`plans.${p.k}.k`)}</span>
              <span className="amt">{p.amt ?? t.rich(`plans.${p.k}.amt`, { small: (c) => <small>{c}</small> })}</span>
              <ul className="ticks">
                {(t.raw(`plans.${p.k}.items`) as string[]).map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 'clamp(40px,5vw,64px)' }}>
          <h3 className="label" style={{ margin: '0 0 20px' }}>
            {t('waysTitle')}
          </h3>
          <ol className="grid-3" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {WAYS.map((w) => (
              <li key={w} className="feature-card card card--flat">
                <h4 className="h4">{t(`ways.${w}.title`)}</h4>
                <p>{t(`ways.${w}.text`)}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
