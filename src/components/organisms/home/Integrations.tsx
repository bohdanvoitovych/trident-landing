import { useTranslations } from 'next-intl'
import { SectionHeader } from '@/components/molecules/SectionHeader'

const GROUPS = ['channels', 'crm', 'erp', 'payment', 'healthcare', 'calendar'] as const

export type IntegrationGroup = { title: string; items: string[]; note?: string }

type Props = {
  /** Page-specific groups and wording (e.g. /services/ai-services); defaults to the home set. */
  title?: string
  lead?: string
  groups?: IntegrationGroup[]
  note?: string
}

/** Moved from the home page to /services. */
export function Integrations({ title, lead, groups, note }: Props = {}) {
  const t = useTranslations('sections.integrations')
  const list: IntegrationGroup[] =
    groups ?? GROUPS.map((g) => ({ title: t(`groups.${g}.title`), items: t.raw(`groups.${g}.items`) as string[] }))
  return (
    <section className="section" id="integrations" aria-labelledby="int-h">
      <div className="container">
        <SectionHeader
          id="int-h"
          label={t('label')}
          title={title ?? t('title')}
          lead={lead ?? t('lead')}
        />
        <div className="ints stagger">
          {list.map((g) => (
            <div key={g.title} className="card int-card card--flat">
              <h3>{g.title}</h3>
              <ul>
                {g.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              {g.note && <p className="small">{g.note}</p>}
            </div>
          ))}
        </div>
        {note && (
          <p className="small" style={{ marginTop: 20, maxWidth: 760 }}>
            {note}
          </p>
        )}
      </div>
    </section>
  )
}
