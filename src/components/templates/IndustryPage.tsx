import { useLocale, useTranslations } from 'next-intl'
import type { IndustryData } from '@/data/industries'
import { getServices } from '@/data/services'
import { getCases } from '@/data/cases'
import { ButtonLink } from '@/components/atoms/controls'
import { PageHero } from '@/components/molecules/PageHero'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import {
  CtaBand,
  FeatureGrid,
  RelatedCases,
  RelatedServices,
  StackBand,
  sectionRhythm,
} from '@/components/molecules/CatalogBlocks'

type Props = {
  industry: IndustryData
}

export function IndustryPage({ industry }: Props) {
  const locale = useLocale()
  const cases = getCases(locale)
  const services = getServices(useLocale())
  const relatedServices = services.filter((s) => industry.relatedServices.includes(s.slug))
  const relatedCases = cases.filter((c) => industry.relatedCases.includes(c.slug))
  const bg = sectionRhythm()
  const t = useTranslations('templates.industry')
  const ta = useTranslations('ui.actions')
  const name = industry.title

  return (
    <>
      <PageHero
        crumbs={[
          { name: t('crumb'), href: '/industries' },
          { name: industry.title, href: `/industries/${industry.slug}` },
        ]}
        label={t('crumb')}
        title={industry.title}
        lead={
          <>
            {industry.tagline}
            <span className="mt-4 block text-[15px] leading-[1.55]">{industry.description}</span>
          </>
        }
        actions={
          <>
            <ButtonLink href="/contact" arrow>
              {t('startProject')}
            </ButtonLink>
            <ButtonLink href="/cases" variant="outline">
              {t('viewCases')}
            </ButtonLink>
          </>
        }
      />

      <section className={bg()} aria-labelledby="ind-challenges-h">
        <div className="container">
          <SectionHeader
            id="ind-challenges-h"
            label={t('challengesLabel')}
            title={t('challengesTitle')}
            lead={t('challengesLead', { industry: name })}
          />
          <FeatureGrid items={industry.challenges} />
        </div>
      </section>

      <section className={bg()} aria-labelledby="ind-solutions-h">
        <div className="container">
          <SectionHeader
            id="ind-solutions-h"
            label={t('solutionsLabel')}
            title={t('solutionsTitle')}
            lead={t('solutionsLead', { industry: name })}
          />
          <FeatureGrid items={industry.solutions} cols={2} />
        </div>
      </section>

      <StackBand id="ind-stack-h" className={bg()} title={t('stackTitle')} items={industry.techStack} />

      {relatedServices.length > 0 && (
        <RelatedServices
          id="ind-services-h"
          className={bg()}
          label={t('servicesLabel')}
          title={t('servicesTitle')}
          lead={t('servicesLead')}
          services={relatedServices}
          more={ta('learnMore')}
        />
      )}

      {relatedCases.length > 0 && (
        <RelatedCases
          id="ind-cases-h"
          className={bg()}
          label={t('portfolioLabel')}
          title={t('portfolioTitle', { industry: name })}
          lead={t('portfolioLead')}
          cases={relatedCases}
        />
      )}

      <CtaBand
        id="ind-cta-h"
        title={t('ctaTitle', { industry: name })}
        text={t('ctaText')}
        button={t('ctaButton')}
      />
    </>
  )
}
