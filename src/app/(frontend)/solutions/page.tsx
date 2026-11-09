import { useLocale, useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { getLocale, getTranslations } from 'next-intl/server'
import { ButtonLink } from '@/components/atoms/controls'
import { PageHero } from '@/components/molecules/PageHero'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { ServiceCard } from '@/components/molecules/ServiceCard'
import { getSolutions } from '@/data/solutions'
import { getServices } from '@/data/services'
import { buildMetadata } from '@/lib/metadata'
import { pageName } from '@/lib/schema'
import PageJsonLd from '@/components/seo/PageJsonLd'

export const revalidate = 3600

export async function generateMetadata() {
  const locale = await getLocale()
  const t = await getTranslations({ locale, namespace: 'pages.solutions' })
  return buildMetadata({
    title: t('metaTitle'),
    description: t('metaDescription'),
    path: '/solutions',
    locale,
  })
}

export default function SolutionsPage() {
  const t = useTranslations('pages.solutions')
  const locale = useLocale()
  const solutions = getSolutions(locale)
  const services = getServices(useLocale())
  return (
    <>
      <PageJsonLd type="CollectionPage" path="/solutions" name={pageName(t('metaTitle'))} description={t('metaDescription')} />
      <PageHero
        crumbs={[{ name: t('crumb'), href: '/solutions' }]}
        label={t('label')}
        title={t('heroTitle')}
        lead={t('heroLead')}
      />

      {/* Solutions grid */}
      <section className="section section--alt" aria-labelledby="sol-h">
        <div className="container">
          <SectionHeader
            id="sol-h"
            label={t('packagedLabel')}
            title={t('packagedTitle')}
            lead={t('packagedLead')}
          />
          <div className="grid-3 stagger">
            {solutions.map((sol) => (
              <Link key={sol.slug} href={`/solutions/${sol.slug}`} className="card feature-card">
                <h3>{sol.title}</h3>
                <span className="meta text-blue-d">{sol.tagline}</span>
                <p style={{ flex: 1 }}>{sol.description}</p>
                <span className="card-more">
                  {t('explore')} <span className="go" aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section" aria-labelledby="eng-h">
        <div className="container">
          <SectionHeader
            id="eng-h"
            label={t('servicesLabel')}
            title={t('servicesTitle')}
            lead={t('servicesLead')}
          />
          <div className="grid-4 stagger">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--alt" aria-labelledby="sol-cta-h">
        <div className="container">
          <div className="cta-band reveal">
            <div className="stack">
              <h2 id="sol-cta-h" className="h2">
                {t('ctaTitle')}
              </h2>
              <p className="lead" style={{ maxWidth: 640 }}>
                {t('ctaLead')}
              </p>
            </div>
            <div className="hero-ctas">
              <ButtonLink href="/contact" arrow>
                {t('ctaPrimary')}
              </ButtonLink>
              <ButtonLink href="/solutions/websites" variant="outline">
                {t('ctaSecondary')}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
