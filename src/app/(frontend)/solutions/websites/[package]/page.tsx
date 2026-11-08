import { Link } from '@/i18n/navigation'
import { notFound } from 'next/navigation'
import { getLocale, getTranslations } from 'next-intl/server'
import { ButtonLink, Tag } from '@/components/atoms/controls'
import { PageHero } from '@/components/molecules/PageHero'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { cn } from '@/lib/utils'
import { getSolutionBySlug } from '@/data/solutions'
import { buildMetadata } from '@/lib/metadata'

type Props = { params: Promise<{ package: string }> }

export async function generateStaticParams() {
  return (getSolutionBySlug('websites', 'en')?.packages ?? []).map((pkg) => ({ package: pkg.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { package: packageSlug } = await params
  const locale = await getLocale()
  const pkg = getSolutionBySlug('websites', locale)?.packages?.find((p) => p.slug === packageSlug)
  if (!pkg) return {}
  const t = await getTranslations({ locale, namespace: 'pages.solutions.websitePackage' })
  return buildMetadata({
    title: t('metaTitle', { name: pkg.name }),
    description: pkg.description,
    path: `/solutions/websites/${packageSlug}`,
    locale,
  })
}

export default async function WebsitePackagePage({ params }: Props) {
  const { package: packageSlug } = await params
  const locale = await getLocale()
  const t = await getTranslations({ locale, namespace: 'pages.solutions.websitePackage' })
  const ts = await getTranslations({ locale, namespace: 'pages.solutions' })
  const websitesSolution = getSolutionBySlug('websites', locale)
  const pkg = websitesSolution?.packages?.find((p) => p.slug === packageSlug)
  if (!pkg || !websitesSolution) notFound()

  const otherPackages = websitesSolution.packages?.filter((p) => p.slug !== packageSlug) ?? []

  return (
    <>
      <PageHero
        crumbs={[
          { name: ts('crumb'), href: '/solutions' },
          { name: ts('websites.label'), href: '/solutions/websites' },
          { name: pkg.name, href: `/solutions/websites/${pkg.slug}` },
        ]}
        label={t('label')}
        title={pkg.name}
        lead={pkg.description}
        actions={
          <>
            <ButtonLink href="/contact" arrow>
              {t('heroPrimary')}
            </ButtonLink>
            <ButtonLink href="/pricing" variant="outline">
              {t('heroSecondary')}
            </ButtonLink>
          </>
        }
        aside={
          <div className={cn('card card--flat price-card', pkg.highlighted && 'price-card--hi')} style={{ maxWidth: 420 }}>
            {pkg.highlighted && (
              <span>
                <Tag tone="blue">{t('mostPopular')}</Tag>
              </span>
            )}
            <span className="meta">{t('fixedPrice')}</span>
            <span className="amt">{pkg.price}</span>
            <span className="meta">{t('deliveredIn', { timeline: pkg.timeline })}</span>
          </div>
        }
      />

      {/* Features */}
      <section className="section section--alt" aria-labelledby="inc-h">
        <div className="container">
          <div className="split split--top">
            <SectionHeader
              id="inc-h"
              label={t('includesLabel')}
              title={t('includesTitle')}
              lead={t('includesLead')}
              className="!mb-0"
            />
            <ul className="ticks reveal" style={{ fontSize: 17, color: 'var(--ink)', gap: 0, borderTop: '1px solid var(--line)' }}>
              {pkg.features.map((feature) => (
                <li key={feature} className="border-b border-line py-4">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Target audience */}
      <section className="section" aria-labelledby="best-h">
        <div className="container">
          <SectionHeader
            id="best-h"
            label={t('bestForLabel')}
            title={t('bestForTitle')}
            lead={t('bestForLead')}
          />
          <ul className="reveal flex flex-wrap gap-2" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {pkg.target.map((audience) => (
              <li key={audience} className="rounded-sm border border-line bg-alt px-3.5 py-2 text-[15px] font-medium text-ink">
                {audience}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Guarantees */}
      <section className="section section--alt" aria-labelledby="promise-h">
        <div className="container">
          <SectionHeader
            id="promise-h"
            label={t('guaranteesLabel')}
            title={t('guaranteesTitle')}
            lead={t('guaranteesLead')}
          />
          <div className="grid-2 stagger">
            {websitesSolution.features.map((feature) => (
              <div key={feature.title} className="card card--flat feature-card">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other packages */}
      {otherPackages.length > 0 && (
        <section className="section" aria-labelledby="other-h">
          <div className="container">
            <SectionHeader
              id="other-h"
              label={t('otherLabel')}
              title={t('otherTitle')}
              lead={t('otherLead')}
            />
            <div className="grid-3 stagger">
              {otherPackages.map((other) => (
                <Link
                  key={other.slug}
                  href={`/solutions/websites/${other.slug}`}
                  className={cn('card price-card', other.highlighted && 'price-card--hi')}
                >
                  <h3 className="h4">{other.name}</h3>
                  <span className="amt">{other.price}</span>
                  <span className="meta">{other.timeline}</span>
                  <p className="body line-clamp-2" style={{ flex: 1 }}>
                    {other.description}
                  </p>
                  <span className="card-more">
                    {t('viewPackage')} <span className="go" aria-hidden="true">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section section--alt" aria-labelledby="pkg-cta-h">
        <div className="container">
          <div className="cta-band reveal">
            <div className="stack">
              <h2 id="pkg-cta-h" className="h2">
                {t('ctaTitle', { name: pkg.name })}
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
