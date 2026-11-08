import { useLocale, useTranslations } from 'next-intl'
import { notFound } from 'next/navigation'
import { getLocale } from 'next-intl/server'
import { ButtonLink, Tag } from '@/components/atoms/controls'
import { PageHero } from '@/components/molecules/PageHero'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { cn } from '@/lib/utils'
import { getSolutionBySlug } from '@/data/solutions'
import { buildMetadata } from '@/lib/metadata'

export async function generateMetadata() {
  const locale = await getLocale()
  const solution = getSolutionBySlug('websites', locale)
  if (!solution) return {}
  return buildMetadata({
    title: solution.meta.title,
    description: solution.meta.description,
    path: '/solutions/websites',
    locale,
  })
}

export default function WebsitesSolutionPage() {
  const t = useTranslations('pages.solutions.websites')
  const ts = useTranslations('pages.solutions')
  const solution = getSolutionBySlug('websites', useLocale())
  if (!solution) notFound()
  const packages = solution.packages ?? []

  return (
    <>
      <PageHero
        crumbs={[
          { name: ts('crumb'), href: '/solutions' },
          { name: t('label'), href: '/solutions/websites' },
        ]}
        label={t('label')}
        title={solution.title}
        lead={solution.description}
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
      />

      {/* Pricing packages */}
      <section className="section section--alt" aria-labelledby="pkg-h">
        <div className="container">
          <SectionHeader
            id="pkg-h"
            label={t('packagesLabel')}
            title={t('packagesTitle')}
            lead={t('packagesLead')}
          />
          <div className="grid-4 stagger">
            {packages.map((pkg) => (
              <div key={pkg.name} className={cn('card card--flat price-card', pkg.highlighted && 'price-card--hi')}>
                <h3 className="h4">{pkg.name}</h3>
                <span className="amt">{pkg.price}</span>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="meta">{t('deliveredIn', { timeline: pkg.timeline })}</span>
                  {pkg.highlighted && <Tag tone="blue">{t('mostPopular')}</Tag>}
                </div>
                <div className="flex flex-1 flex-col gap-2.5 border-t border-line pt-4">
                  <span className="meta">{t('includes')}</span>
                  <ul className="ticks">
                    {pkg.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <ButtonLink href="/contact" variant={pkg.highlighted ? 'primary' : 'outline'} className="w-full">
                  {t('getStarted')}
                </ButtonLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section" aria-labelledby="feat-h">
        <div className="container">
          <SectionHeader
            id="feat-h"
            label={t('whyLabel')}
            title={t('whyTitle')}
            lead={t('whyLead')}
          />
          <div className="grid-2 stagger">
            {solution.features.map((feature) => (
              <div key={feature.title} className="card card--flat feature-card">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="section section--alt" aria-labelledby="web-stack-h">
        <div className="container">
          <SectionHeader
            id="web-stack-h"
            label={t('stackLabel')}
            title={t('stackTitle')}
            lead={t('stackLead')}
          />
          <ul className="reveal flex flex-wrap gap-2" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {solution.techStack.map((tech) => (
              <li key={tech} className="rounded-sm border border-line bg-white px-3 py-1.5 text-[14px] font-medium text-ink">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--line" aria-labelledby="web-cta-h">
        <div className="container">
          <div className="cta-band reveal">
            <div className="stack">
              <h2 id="web-cta-h" className="h2">
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
              <ButtonLink href="/pricing" variant="outline">
                {t('ctaSecondary')}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
