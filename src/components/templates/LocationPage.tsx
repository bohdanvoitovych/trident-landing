import { useLocale, useTranslations } from 'next-intl'
import type { LocationData } from '@/data/locations'
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
  TagList,
  sectionRhythm,
} from '@/components/molecules/CatalogBlocks'

type Props = { location: LocationData }

export function LocationPage({ location }: Props) {
  const locale = useLocale()
  const cases = getCases(locale)
  const services = getServices(useLocale())
  const relatedServices = services.filter((s) => location.relatedServices.includes(s.slug))
  const relatedCases = cases.filter((c) => location.relatedCases.includes(c.slug))
  const bg = sectionRhythm()
  const t = useTranslations('templates.location')
  const city = location.name

  return (
    <>
      <PageHero
        crumbs={[
          { name: t('crumb'), href: '/locations' },
          { name: location.name, href: `/locations/${location.slug}` },
        ]}
        label={t('regionLabel', { region: location.region })}
        title={location.tagline}
        lead={location.description}
        actions={
          <>
            <div className="mb-2 w-full">
              <TagList items={location.keyIndustries} />
            </div>
            <ButtonLink href="/contact" arrow>
              {t('startProject')}
            </ButtonLink>
            <ButtonLink href="/services" variant="outline">
              {t('ourServices')}
            </ButtonLink>
          </>
        }
      />

      <section className={bg()} aria-labelledby="loc-highlights-h">
        <div className="container">
          <SectionHeader
            id="loc-highlights-h"
            label={t('highlightsLabel', { city })}
            title={t('highlightsTitle')}
            lead={t('highlightsLead', { city })}
          />
          <FeatureGrid items={location.highlights} />
        </div>
      </section>

      {relatedServices.length > 0 && (
        <RelatedServices
          id="loc-services-h"
          className={bg()}
          label={t('servicesLabel')}
          title={t('servicesTitle', { city })}
          lead={t('servicesLead')}
          services={relatedServices}
          cols={2}
        />
      )}

      {relatedCases.length > 0 && (
        <RelatedCases
          id="loc-cases-h"
          className={bg()}
          label={t('portfolioLabel')}
          title={t('portfolioTitle')}
          lead={t('portfolioLead', { city })}
          cases={relatedCases}
        />
      )}

      <CtaBand
        id="loc-cta-h"
        title={t('ctaTitle', { city })}
        text={t('ctaText', { city })}
        button={t('ctaButton')}
      />
    </>
  )
}
