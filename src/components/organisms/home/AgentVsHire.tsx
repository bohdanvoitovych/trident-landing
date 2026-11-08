import { useTranslations } from 'next-intl'
import { SectionHeader } from '@/components/molecules/SectionHeader'

const ROWS = ['firstResponse', 'runningCost', 'rampUp', 'parallel', 'languages'] as const

/** Moved from the home page to /site-price. */
export function AgentVsHire() {
  const t = useTranslations('sections.agentVsHire')
  return (
    <section className="section section--alt" aria-labelledby="vs-h">
      <div className="container">
        <SectionHeader id="vs-h" label={t('label')} title={t('title')} />
        <div className="grid-2 stagger">
          <div className="card vs-card vs-card--us card--flat">
            <span className="label">{t('agentLabel')}</span>
            <h3 className="h3">{t('agentTitle')}</h3>
            <dl className="dl">
              {ROWS.map((r) => (
                <div key={r}>
                  <dt>{t(`rows.${r}.label`)}</dt>
                  <dd>{t(`rows.${r}.agent`)}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="card vs-card card--flat">
            <span className="label">{t('hireLabel')}</span>
            <h3 className="h3">{t('hireTitle')}</h3>
            <dl className="dl">
              {ROWS.map((r) => (
                <div key={r}>
                  <dt>{t(`rows.${r}.label`)}</dt>
                  <dd>{t(`rows.${r}.hire`)}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <p className="small" style={{ marginTop: 20 }}>
          {t('note')}
        </p>
      </div>
    </section>
  )
}
