import { useLocale, useTranslations } from 'next-intl'
import { getLocale, getTranslations } from 'next-intl/server'
import { ButtonLink, Tag } from '@/components/atoms/controls'
import { PageHero } from '@/components/molecules/PageHero'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { Pricing } from '@/components/organisms/home/Pricing'
import { AgentVsHire } from '@/components/organisms/home/AgentVsHire'
import { cn } from '@/lib/utils'
import { getSolutionBySlug } from '@/data/solutions'
import { buildMetadata } from '@/lib/metadata'

export const revalidate = 3600

export async function generateMetadata() {
  const locale = await getLocale()
  const t = await getTranslations({ locale, namespace: 'pages.pricing' })
  return buildMetadata({
    title: t('metaTitle'),
    description: t('metaDescription'),
    path: '/pricing',
    locale,
  })
}

const ADD_ONS = [
  'hosting',
  'language',
  'content',
  'brandbook',
  'seo',
  'legal',
  'media',
  'blog',
  'design',
] as const

export default function PricingPage() {
  const t = useTranslations('pages.pricing')
  const websites = getSolutionBySlug('websites', useLocale())
  const packages = websites?.packages ?? []

  return (
    <>
      <PageHero
        crumbs={[{ name: t('crumb'), href: '/site-price' }]}
        label={t('label')}
        title={t.rich('heroTitle', { blue: (c) => <span className="blue">{c}</span> })}
        lead={t('heroLead')}
      />

      <section className="section section--alt" aria-labelledby="packages-h">
        <div className="container">
          <SectionHeader
            id="packages-h"
            label={t('packagesLabel')}
            title={t('packagesTitle')}
            lead={t('packagesLead')}
          />
          <div className="grid-4 stagger">
            {packages.map((pkg) => (
              <article
                key={pkg.name}
                className={cn('card price-card card--flat', pkg.highlighted && 'price-card--hi')}
                style={{ padding: 24 }}
              >
                <div className="stack" style={{ gap: 10 }}>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="h4">{pkg.name}</h3>
                    {pkg.highlighted && <Tag tone="blue">{t('mostPopular')}</Tag>}
                  </div>
                  <span className="amt">{pkg.price}</span>
                  <span className="meta">{t('deliveredIn', { timeline: pkg.timeline })}</span>
                </div>
                <div className="stack border-t border-line pt-4" style={{ gap: 8 }}>
                  <span className="meta">{t('for')}</span>
                  <p className="small">{pkg.target.join(' · ')}</p>
                </div>
                <div className="stack flex-1" style={{ gap: 10 }}>
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
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="addons-h">
        <div className="container">
          <SectionHeader
            id="addons-h"
            label={t('addOnsLabel')}
            title={t('addOnsTitle')}
            lead={t('addOnsLead')}
          />
          <ul className="grid-3 stagger" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {ADD_ONS.map((key) => (
              <li key={key} className="card card--flat feature-card">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <h3>{t(`addOns.${key}.name`)}</h3>
                  <span className="mono text-[13px] font-semibold whitespace-nowrap text-blue-d">{t(`addOns.${key}.price`)}</span>
                </div>
                <p>{t(`addOns.${key}.desc`)}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="section--line">
        <Pricing headingLevel="h2" />
      </div>
      <AgentVsHire />

      <section className="section section--line" aria-labelledby="price-cta-h">
        <div className="container cta-band reveal">
          <div className="stack" style={{ maxWidth: 760 }}>
            <h2 id="price-cta-h" className="h2">
              {t('ctaTitle')}
            </h2>
            <p className="lead">
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
      </section>
    </>
  )
}
