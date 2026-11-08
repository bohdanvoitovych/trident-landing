import { useTranslations } from 'next-intl'
import { SectionHeader } from '@/components/molecules/SectionHeader'

const WHY = [
  ['✕', 'sayNo'],
  ['≈', 'measured'],
  ['◆', 'senior'],
  ['▲', 'product'],
  ['●', 'engineer'],
  ['↗', 'lockIn'],
] as const

export function WhyUs() {
  const t = useTranslations('sections.whyUs')
  return (
    <section className="section" aria-labelledby="why-h">
      <div className="container">
        <SectionHeader
          id="why-h"
          label={t('label')}
          title={t('title')}
          lead={t('lead')}
        />
        <ul className="grid-3 stagger" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {WHY.map(([g, k]) => (
            <li key={k} className="card why-card card--flat">
              <span className="glyph" aria-hidden="true">
                {g}
              </span>
              <h3 className="card-title">{t(`items.${k}.title`)}</h3>
              <p className="body">{t(`items.${k}.text`)}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
