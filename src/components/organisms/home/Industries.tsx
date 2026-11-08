import type { CSSProperties } from 'react'
import { useTranslations } from 'next-intl'
import { SectionHeader } from '@/components/molecules/SectionHeader'

const INDUSTRIES = ['trade', 'realEstate', 'clinics', 'ecommerce', 'hospitality', 'professional', 'education', 'startups'] as const

export function Industries() {
  const t = useTranslations('sections.industries')
  return (
    <section className="section" aria-labelledby="ind-h">
      <div className="container">
        <SectionHeader
          id="ind-h"
          label={t('label')}
          title={t('title')}
          lead={t('lead')}
        />
        <ol className="rank stagger">
          {INDUSTRIES.map((k, i) => (
            <li key={k} className="rank-card">
              <span className="top">
                <span className="n">#{i + 1}</span>
                <span className="bar" aria-hidden="true" style={{ '--v': (100 - i * 11) / 100 } as CSSProperties} />
              </span>
              <h3>{t(`items.${k}.title`)}</h3>
              <p>{t(`items.${k}.text`)}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
