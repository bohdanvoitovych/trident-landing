import { useLocale, useTranslations } from 'next-intl'
import type { TechnologyData } from '@/data/technologies'
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

type Props = { technology: TechnologyData }

export function TechnologyPage({ technology }: Props) {
  const locale = useLocale()
  const cases = getCases(locale)
  const services = getServices(useLocale())
  const relatedServices = services.filter((s) => technology.relatedServices.includes(s.slug))
  const relatedCases = cases.filter((c) => technology.relatedCases.includes(c.slug))
  const bg = sectionRhythm()
  const t = useTranslations('templates.technology')
  const tech = technology.name

  return (
    <>
      <PageHero
        crumbs={[
          { name: t('crumb'), href: '/technologies' },
          { name: technology.name, href: `/technologies/${technology.slug}` },
        ]}
        label={technology.category}
        title={technology.tagline}
        lead={technology.description}
        actions={
          <>
            <ButtonLink href="/contact" arrow>
              {t('startProject')}
            </ButtonLink>
            <ButtonLink href="/services" variant="outline">
              {t('allServices')}
            </ButtonLink>
          </>
        }
      />

      <section className={bg()} aria-labelledby="tech-uses-h">
        <div className="container">
          <SectionHeader
            id="tech-uses-h"
            label={t('usesLabel')}
            title={t('usesTitle', { tech })}
            lead={t('usesLead')}
          />
          <FeatureGrid items={technology.useCases} cols={2} />
        </div>
      </section>

      <section className={bg()} aria-labelledby="tech-why-h">
        <div className="container">
          <SectionHeader
            id="tech-why-h"
            label={t('whyLabel')}
            title={t('whyTitle', { tech })}
            lead={t('whyLead')}
          />
          <ul className="grid-3 gap-tight stagger" role="list" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {technology.benefits.map((b) => (
              <li key={b} className="card card--flat card-pad">
                <p className="body">{b}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <StackBand
        id="tech-stack-h"
        className={bg()}
        title={t('stackTitle', { tech })}
        items={technology.complementaryStack}
      />

      {relatedServices.length > 0 && (
        <RelatedServices
          id="tech-services-h"
          className={bg()}
          label={t('servicesLabel')}
          title={t('servicesTitle', { tech })}
          lead={t('servicesLead')}
          services={relatedServices}
          cols={2}
        />
      )}

      {relatedCases.length > 0 && (
        <RelatedCases
          id="tech-cases-h"
          className={bg()}
          label={t('portfolioLabel')}
          title={t('portfolioTitle', { tech })}
          lead={t('portfolioLead')}
          cases={relatedCases}
        />
      )}

      <CtaBand
        id="tech-cta-h"
        title={t('ctaTitle', { tech })}
        text={t('ctaText')}
        button={t('ctaButton')}
      />
    </>
  )
}
