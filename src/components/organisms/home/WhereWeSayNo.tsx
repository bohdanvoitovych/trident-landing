import { useTranslations } from 'next-intl'
import { SectionHeader } from '@/components/molecules/SectionHeader'

const NOS = ['volume', 'knowledgeBase', 'regulated', 'voice', 'headcount'] as const

/** Moved from the home page to /use-cases ("Where we would not start"). */
export function WhereWeSayNo() {
  const t = useTranslations('sections.whereWeSayNo')
  return (
    <section className="section section--alt" aria-labelledby="nos-h">
      <div className="container">
        <SectionHeader
          id="nos-h"
          label={t('label')}
          title={t('title')}
          lead={t('lead')}
        />
        <ul className="nos stagger" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {NOS.map((k) => (
            <li key={k} className="card no-card card--flat">
              <span className="x" aria-hidden="true">
                ✕
              </span>
              <h3 className="h4">{t(`items.${k}.title`)}</h3>
              <p className="body">{t(`items.${k}.text`)}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
