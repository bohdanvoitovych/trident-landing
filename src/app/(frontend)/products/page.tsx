import { useTranslations } from 'next-intl'
import { getLocale, getTranslations } from 'next-intl/server'
import { ButtonLink, Tag } from '@/components/atoms/controls'
import { PageHero } from '@/components/molecules/PageHero'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { Products } from '@/components/organisms/home/Products'
import { buildMetadata } from '@/lib/metadata'

export async function generateMetadata() {
  const locale = await getLocale()
  const t = await getTranslations({ locale, namespace: 'pages.products' })
  return buildMetadata({
    title: t('metaTitle'),
    description: t('metaDescription'),
    path: '/products',
    locale,
  })
}

const FEATURES = ['driverApp', 'fleet', 'payroll', 'portal', 'routes', 'analytics'] as const

export default function ProductsPage() {
  const t = useTranslations('pages.products')
  return (
    <>
      <PageHero
        crumbs={[{ name: t('crumb'), href: '/products' }]}
        label={t('label')}
        title={t.rich('heroTitle', { blue: (c) => <span className="blue">{c}</span> })}
        lead={t('heroLead')}
        actions={
          <div className="stack" style={{ gap: 20 }}>
            <div className="hero-ctas">
              <ButtonLink href="https://8move.app" target="_blank" rel="noopener noreferrer" arrow>
                {t('visit')}
              </ButtonLink>
              <ButtonLink href="/cases/8move-driver" variant="outline" arrow>
                {t('readCase')}
              </ButtonLink>
            </div>
            <ul className="chips" style={{ listStyle: 'none', margin: 0, padding: 0, gap: 6 }}>
              {(t.raw('chips') as string[]).map((f) => (
                <li key={f}>
                  <Tag tone="line">{f}</Tag>
                </li>
              ))}
            </ul>
          </div>
        }
      />

      <Products headingLevel="h2" />

      <section className="section" aria-labelledby="platform-h">
        <div className="container">
          <SectionHeader
            id="platform-h"
            label={t('platformLabel')}
            title={t('platformTitle')}
            lead={t('platformLead')}
          />
          <ul className="grid-3 stagger" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {FEATURES.map((key) => (
              <li key={key} className="card card--flat feature-card">
                <h3>{t(`features.${key}.title`)}</h3>
                <p>{t(`features.${key}.desc`)}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="products-cta-h">
        <div className="container cta-band reveal">
          <div className="stack" style={{ maxWidth: 760 }}>
            <h2 id="products-cta-h" className="h2">
              {t('ctaTitle')}
            </h2>
            <p className="lead">{t('ctaLead')}</p>
          </div>
          <div className="hero-ctas">
            <ButtonLink href="/contact" arrow>
              {t('ctaPrimary')}
            </ButtonLink>
            <ButtonLink href="/services/software-engineering" variant="outline">
              {t('ctaSecondary')}
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
