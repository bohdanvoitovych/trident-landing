import { useLocale, useTranslations } from 'next-intl'
import { getLocale, getTranslations } from 'next-intl/server'
import { getIndustries } from '@/data/industries'
import { buildMetadata } from '@/lib/metadata'
import { ButtonLink } from '@/components/atoms/controls'
import { PageHero } from '@/components/molecules/PageHero'
import { IndustriesGrid } from '@/components/molecules/IndustriesGrid'
import { CtaBand } from '@/components/molecules/CatalogBlocks'

export const revalidate = 3600

export async function generateMetadata() {
  const locale = await getLocale()
  const t = await getTranslations({ locale, namespace: 'pages.industries' })
  return buildMetadata({
    title: t('metaTitle'),
    description: t('metaDescription'),
    path: '/industries',
    locale,
  })
}

const FACTS = ['industries', 'projects', 'since', 'pricing'] as const

export default function IndustriesPage() {
  const locale = useLocale()
  const industries = getIndustries(locale)
  const t = useTranslations('pages.industries')
  return (
    <>
      <PageHero
        crumbs={[{ name: t('crumb'), href: '/industries' }]}
        label={t('label')}
        title={t.rich('title', { br: () => <br /> })}
        lead={
          <>
            {t('lead')}
            <span className="mt-4 block text-[15px] leading-[1.55]">
              {t('leadNote')}
            </span>
          </>
        }
        actions={
          <ButtonLink href="/contact" arrow>
            {t('discuss')}
          </ButtonLink>
        }
      />

      <div className="container -mt-2 pb-[clamp(40px,5vw,72px)]">
        <dl className="facts stagger m-0">
          {FACTS.map((k) => (
            <div key={k} className="card card--flat fact" style={{ flexDirection: 'column-reverse', justifyContent: 'flex-end' }}>
              <dt className="fact-k">{t(`facts.${k}.label`)}</dt>
              <dd className="fact-v m-0">{t(`facts.${k}.value`)}</dd>
            </div>
          ))}
        </dl>
      </div>

      <section className="section section--alt" aria-label={t('crumb')}>
        <div className="container">
          <IndustriesGrid industries={industries} />
        </div>
      </section>

      <CtaBand
        id="industries-cta-h"
        title={t('ctaTitle')}
        text={t('ctaText')}
        button={t('ctaButton')}
      />
    </>
  )
}
