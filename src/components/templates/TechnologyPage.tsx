import { useLocale } from 'next-intl'
import type { TechnologyData } from '@/data/technologies'
import { getServices } from '@/data/services'
import { cases } from '@/data/cases'
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
  const services = getServices(useLocale())
  const relatedServices = services.filter((s) => technology.relatedServices.includes(s.slug))
  const relatedCases = cases.filter((c) => technology.relatedCases.includes(c.slug))
  const bg = sectionRhythm()

  return (
    <>
      <PageHero
        crumbs={[
          { name: 'Technologies', href: '/technologies' },
          { name: technology.name, href: `/technologies/${technology.slug}` },
        ]}
        label={technology.category}
        title={technology.tagline}
        lead={technology.description}
        actions={
          <>
            <ButtonLink href="/contact" arrow>
              Start a project
            </ButtonLink>
            <ButtonLink href="/services" variant="outline">
              See all services
            </ButtonLink>
          </>
        }
      />

      <section className={bg()} aria-labelledby="tech-uses-h">
        <div className="container">
          <SectionHeader
            id="tech-uses-h"
            label="Use cases"
            title={`What we build with ${technology.name}`}
            lead="Production use cases we've shipped for Swiss companies."
          />
          <FeatureGrid items={technology.useCases} cols={2} />
        </div>
      </section>

      <section className={bg()} aria-labelledby="tech-why-h">
        <div className="container">
          <SectionHeader
            id="tech-why-h"
            label="Why"
            title={`Why we use ${technology.name}`}
            lead="Concrete advantages for Swiss business software."
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
        title={`We use ${technology.name} alongside`}
        items={technology.complementaryStack}
      />

      {relatedServices.length > 0 && (
        <RelatedServices
          id="tech-services-h"
          className={bg()}
          label="Services"
          title={`Services using ${technology.name}`}
          lead="Our service packages that include this technology."
          services={relatedServices}
          cols={2}
        />
      )}

      {relatedCases.length > 0 && (
        <RelatedCases
          id="tech-cases-h"
          className={bg()}
          label="Portfolio"
          title={`${technology.name} in production`}
          lead="Real projects we shipped using this technology."
          cases={relatedCases}
        />
      )}

      <CtaBand
        id="tech-cta-h"
        title={`Need ${technology.name} expertise?`}
        text="Tell us what you're building. We respond within 24 hours."
        button="Start a conversation"
      />
    </>
  )
}
