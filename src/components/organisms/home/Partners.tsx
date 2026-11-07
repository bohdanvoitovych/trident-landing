import { useTranslations } from 'next-intl'
import { Label } from '@/components/atoms/controls'
import { LogoTile } from '@/components/molecules/Logos'
import { PARTNER_LOGOS } from '@/data/logos'

export function Partners() {
  const t = useTranslations('ui.partners')
  return (
    <section className="section--band section--line" id="partners" aria-labelledby="partners-h">
      <div className="container">
        <div className="split" style={{ gap: 40 }}>
          <div className="stack reveal" style={{ gap: 12 }}>
            <Label>Partners and platforms</Label>
            <h2 id="partners-h" className="h2">
              Who we build and host with
            </h2>
            <p className="lead" style={{ fontSize: 15 }}>
              Cloud platforms we deploy on, and the Valais institutions we work alongside.
            </p>
          </div>
          <ul className="grid-4 keep-2 partner-grid stagger" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {PARTNER_LOGOS.map((p) => (
              <li key={p.src}>
                <LogoTile logo={p} small />
              </li>
            ))}
          </ul>
        </div>
        <div className="looking reveal">
          <div className="stack" style={{ gap: 10 }}>
            <Label>{t('lookingLabel')}</Label>
            <h3>What we&apos;re looking for</h3>
            <p className="small" style={{ fontSize: 14, lineHeight: 1.55 }}>
              {t('lookingIntro')}
            </p>
          </div>
          <div>
            <ul>
              <li>Portfolio companies that need an engineering team, to build a product or take one over</li>
              <li>AI automation in logistics, field services, distribution, healthcare admin</li>
              <li>Technical due diligence before an investment, interim CTO after it</li>
              <li>Co-development where our platform gives a head start</li>
            </ul>
            <p className="note">Not staff augmentation by the hour.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
