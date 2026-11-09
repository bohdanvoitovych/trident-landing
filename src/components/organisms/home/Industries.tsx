import type { CSSProperties } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { SectionHeader } from '@/components/molecules/SectionHeader'

// Message key → industry page slug, in PDF order.
const INDUSTRIES = [
  { key: 'trade', slug: 'trade-and-building-materials' },
  { key: 'realEstate', slug: 'proptech' },
  { key: 'clinics', slug: 'healthcare' },
  { key: 'ecommerce', slug: 'retail-ecommerce' },
  { key: 'hospitality', slug: 'hospitality' },
  { key: 'professional', slug: 'professional-services' },
  { key: 'education', slug: 'education' },
  { key: 'startups', slug: 'startups-cto' },
] as const

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
          {INDUSTRIES.map(({ key: k, slug }, i) => (
            <li key={k} className="rank-card">
              <span className="top">
                <span className="n">#{i + 1}</span>
                <span className="bar" aria-hidden="true" style={{ '--v': (100 - i * 11) / 100 } as CSSProperties} />
              </span>
              <h3>
                <Link href={`/industries/${slug}`}>{t(`items.${k}.title`)}</Link>
              </h3>
              <p>{t(`items.${k}.text`)}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
