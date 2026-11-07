import type { LocationData } from '@/data/locations'
import { services } from '@/data/services'
import { cases } from '@/data/cases'
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
  const relatedServices = services.filter((s) => location.relatedServices.includes(s.slug))
  const relatedCases = cases.filter((c) => location.relatedCases.includes(c.slug))
  const bg = sectionRhythm()

  return (
    <>
      <PageHero
        crumbs={[
          { name: 'Locations', href: '/locations' },
          { name: location.name, href: `/locations/${location.slug}` },
        ]}
        label={`${location.region}, Switzerland`}
        title={location.tagline}
        lead={location.description}
        actions={
          <>
            <div className="mb-2 w-full">
              <TagList items={location.keyIndustries} />
            </div>
            <ButtonLink href="/contact" arrow>
              Start a project
            </ButtonLink>
            <ButtonLink href="/services" variant="outline">
              Our services
            </ButtonLink>
          </>
        }
      />

      <section className={bg()} aria-labelledby="loc-highlights-h">
        <div className="container">
          <SectionHeader
            id="loc-highlights-h"
            label={`${location.name} expertise`}
            title="What we bring to the table"
            lead={`Specific capabilities we've developed for ${location.name}'s market.`}
          />
          <FeatureGrid items={location.highlights} />
        </div>
      </section>

      {relatedServices.length > 0 && (
        <RelatedServices
          id="loc-services-h"
          className={bg()}
          label="Services"
          title={`What we build for ${location.name} companies`}
          lead="Our core capabilities, tuned for your market."
          services={relatedServices}
          cols={2}
        />
      )}

      {relatedCases.length > 0 && (
        <RelatedCases
          id="loc-cases-h"
          className={bg()}
          label="Portfolio"
          title="Projects we've delivered"
          lead={`A selection of our work relevant to ${location.name}'s industries.`}
          cases={relatedCases}
        />
      )}

      <CtaBand
        id="loc-cta-h"
        title={`Based in ${location.name}? Let's build something.`}
        text={`Remote-friendly, Swiss-based. We work with ${location.name} companies regularly.`}
        button="Start a conversation"
      />
    </>
  )
}
