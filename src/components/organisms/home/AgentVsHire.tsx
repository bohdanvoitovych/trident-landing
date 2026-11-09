import { useTranslations } from 'next-intl'
import { SectionHeader } from '@/components/molecules/SectionHeader'

const ROWS = ['firstResponse', 'runningCost', 'rampUp', 'parallel', 'languages'] as const

export type VsRow = { label: string; agent: string; hire: string }

type Props = {
  /** Longer comparison for a page that needs it (e.g. /services/ai-services); defaults to the short one. */
  title?: string
  lead?: string
  rows?: VsRow[]
  note?: string
}

/** Moved from the home page to /pricing; /services/ai-services passes the PDF's full FTE table. */
export function AgentVsHire({ title, lead, rows, note }: Props = {}) {
  const t = useTranslations('sections.agentVsHire')
  const list: VsRow[] =
    rows ?? ROWS.map((r) => ({ label: t(`rows.${r}.label`), agent: t(`rows.${r}.agent`), hire: t(`rows.${r}.hire`) }))
  return (
    <section className="section section--alt" aria-labelledby="vs-h">
      <div className="container">
        <SectionHeader id="vs-h" label={t('label')} title={title ?? t('title')} lead={lead} />
        <div className="grid-2 stagger">
          <div className="card vs-card vs-card--us card--flat">
            <span className="label">{t('agentLabel')}</span>
            <h3 className="h3">{t('agentTitle')}</h3>
            <dl className="dl">
              {list.map((r) => (
                <div key={r.label}>
                  <dt>{r.label}</dt>
                  <dd>{r.agent}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="card vs-card card--flat">
            <span className="label">{t('hireLabel')}</span>
            <h3 className="h3">{t('hireTitle')}</h3>
            <dl className="dl">
              {list.map((r) => (
                <div key={r.label}>
                  <dt>{r.label}</dt>
                  <dd>{r.hire}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <p className="small" style={{ marginTop: 20, maxWidth: 760 }}>
          {note ?? t('note')}
        </p>
      </div>
    </section>
  )
}
