import { useTranslations } from 'next-intl'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { LogoMarquee } from '@/components/molecules/Logos'
import { CLIENT_LOGOS } from '@/data/logos'

// Country, company name (null: unnamed, described in messages), message key.
const REFERENCES = [
  ['CH', 'Interhome Group', 'interhome'],
  ['ES', 'Ruralidays', 'ruralidays'],
  ['CH', 'Le Glaçon Suisse', 'glacon'],
  ['CH', 'Aida Medical', 'aida'],
  ['UK', null, 'london'],
] as const

/** Clients: named references on request, then the two-row logo marquee. */
export function Logos() {
  const t = useTranslations('ui.clients')
  const tl = useTranslations('sections.logos')
  return (
    <section className="section section--line" aria-labelledby="clients-h">
      <div className="container">
        <SectionHeader id="clients-h" label={t('label')} title={t('title')} />
        <div className="refs reveal">
          <h3 className="refs-k" style={{ margin: 0 }}>
            {t('namedReferences')}
          </h3>
          <ul>
            {REFERENCES.map(([c, n, k]) => (
              <li key={k} className="ref-chip">
                <span className="tag tag--ink">{c}</span>
                <b>{n ?? tl(`refs.${k}Name`)}</b>
                <span>{tl(`refs.${k}`)}</span>
              </li>
            ))}
          </ul>
        </div>
        <LogoMarquee logos={CLIENT_LOGOS} />
      </div>
    </section>
  )
}
