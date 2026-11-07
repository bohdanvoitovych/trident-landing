import { useTranslations } from 'next-intl'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { LogoMarquee } from '@/components/molecules/Logos'
import { CLIENT_LOGOS } from '@/data/logos'

const REFERENCES = [
  ['CH', 'Interhome Group', 'vacation rental'],
  ['ES', 'Ruralidays', 'travel platform, incl. Holidu integration'],
  ['CH', 'Le Glaçon Suisse', 'ice production & nationwide distribution'],
  ['CH', 'Aida Medical', 'digital health (our CTO is co-founder)'],
  ['UK', 'London waste-management operator', '(under NDA)'],
]

/** Clients: named references on request, then the two-row logo marquee. */
export function Logos() {
  const t = useTranslations('ui.clients')
  return (
    <section className="section section--line" aria-labelledby="clients-h">
      <div className="container">
        <SectionHeader id="clients-h" label={t('label')} title={t('title')} />
        <div className="refs reveal">
          <h3 className="refs-k" style={{ margin: 0 }}>
            {t('namedReferences')}
          </h3>
          <ul>
            {REFERENCES.map(([c, n, d]) => (
              <li key={n} className="ref-chip">
                <span className="tag tag--ink">{c}</span>
                <b>{n}</b>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
        <LogoMarquee logos={CLIENT_LOGOS} />
      </div>
    </section>
  )
}
