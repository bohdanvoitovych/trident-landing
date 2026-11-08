import { useTranslations } from 'next-intl'
import { SectionHeader } from '@/components/molecules/SectionHeader'

const GROUPS = ['channels', 'crm', 'erp', 'payment', 'healthcare', 'calendar'] as const

/** Moved from the home page to /services. */
export function Integrations() {
  const t = useTranslations('sections.integrations')
  return (
    <section className="section" id="integrations" aria-labelledby="int-h">
      <div className="container">
        <SectionHeader
          id="int-h"
          label={t('label')}
          title={t('title')}
          lead={t('lead')}
        />
        <div className="ints stagger">
          {GROUPS.map((g) => (
            <div key={g} className="card int-card card--flat">
              <h3>{t(`groups.${g}.title`)}</h3>
              <ul>
                {(t.raw(`groups.${g}.items`) as string[]).map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
