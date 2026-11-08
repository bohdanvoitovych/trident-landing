import { useTranslations } from 'next-intl'
import { Label } from '@/components/atoms/controls'
import { LogoTile } from '@/components/molecules/Logos'
import { PARTNER_LOGOS } from '@/data/logos'

const LOOKING = ['portfolio', 'automation', 'diligence', 'codev'] as const

export function Partners() {
  const t = useTranslations('ui.partners')
  const tp = useTranslations('sections.partners')
  return (
    <section className="section--band section--line" id="partners" aria-labelledby="partners-h">
      <div className="container">
        <div className="split" style={{ gap: 40 }}>
          <div className="stack reveal" style={{ gap: 12 }}>
            <Label>{tp('label')}</Label>
            <h2 id="partners-h" className="h2">
              {tp('title')}
            </h2>
            <p className="lead" style={{ fontSize: 15 }}>
              {tp('lead')}
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
            <h3>{tp('lookingTitle')}</h3>
            <p className="small" style={{ fontSize: 14, lineHeight: 1.55 }}>
              {t('lookingIntro')}
            </p>
          </div>
          <div>
            <ul>
              {LOOKING.map((k) => (
                <li key={k}>{tp(`looking.${k}`)}</li>
              ))}
            </ul>
            <p className="note">{tp('note')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
