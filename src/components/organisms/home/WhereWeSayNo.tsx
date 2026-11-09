import { useTranslations } from 'next-intl'
import { SectionHeader } from '@/components/molecules/SectionHeader'

const NOS = ['volume', 'knowledgeBase', 'regulated', 'voice', 'headcount'] as const

export type NoItem = { title: string; text: string }

type Props = {
  /** Anchor for in-page links (e.g. "#limits" on /services/ai-services). */
  id?: string
  /** Full PDF wording for a page that needs it; defaults to the short version. */
  lead?: string
  items?: NoItem[]
}

/** Moved from the home page to /use-cases ("Where we would not start"). */
export function WhereWeSayNo({ id, lead, items }: Props = {}) {
  const t = useTranslations('sections.whereWeSayNo')
  const list: NoItem[] = items ?? NOS.map((k) => ({ title: t(`items.${k}.title`), text: t(`items.${k}.text`) }))
  return (
    <section id={id} className="section section--alt" aria-labelledby="nos-h">
      <div className="container">
        <SectionHeader
          id="nos-h"
          label={t('label')}
          title={t('title')}
          lead={lead ?? t('lead')}
        />
        <ul className="nos stagger" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {list.map((item) => (
            <li key={item.title} className="card no-card card--flat">
              <span className="x" aria-hidden="true">
                ✕
              </span>
              <h3 className="h4">{item.title}</h3>
              <p className="body">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
