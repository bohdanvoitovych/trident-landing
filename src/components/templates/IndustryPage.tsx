import type { IndustryData } from '@/data/industries'
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
  StackBand,
  sectionRhythm,
} from '@/components/molecules/CatalogBlocks'

type Props = {
  industry: IndustryData
}

export function IndustryPage({ industry }: Props) {
  const relatedServices = services.filter((s) => industry.relatedServices.includes(s.slug))
  const relatedCases = cases.filter((c) => industry.relatedCases.includes(c.slug))
  const bg = sectionRhythm()

  return (
    <>
      <PageHero
        crumbs={[
          { name: 'Industries', href: '/industries' },
          { name: industry.title, href: `/industries/${industry.slug}` },
        ]}
        label="Industries"
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
              Start a project
            </ButtonLink>
            <ButtonLink href="/cases" variant="outline">
              View case studies
            </ButtonLink>
          </>
        }
      />

      <section className={bg()} aria-labelledby="ind-challenges-h">
        <div className="container">
          <SectionHeader
            id="ind-challenges-h"
            label="Industry Challenges"
            title="What we solve"
            lead={`Common technical and regulatory hurdles in ${industry.title} that we help clients overcome.`}
          />
          <FeatureGrid items={industry.challenges} />
        </div>
      </section>

      <section className={bg()} aria-labelledby="ind-solutions-h">
        <div className="container">
          <SectionHeader
            id="ind-solutions-h"
            label="What we build"
            title="Solutions we deliver"
            lead={`Production-ready software systems for ${industry.title} companies.`}
          />
          <FeatureGrid items={industry.solutions} cols={2} />
        </div>
      </section>

      <StackBand id="ind-stack-h" className={bg()} title="Technology stack" items={industry.techStack} />

      {relatedServices.length > 0 && (
        <RelatedServices
          id="ind-services-h"
          className={bg()}
          label="Services"
          title="Relevant capabilities"
          lead="Our service practices that typically apply to this industry."
          services={relatedServices}
          more="Learn more"
        />
      )}

      {relatedCases.length > 0 && (
        <RelatedCases
          id="ind-cases-h"
          className={bg()}
          label="Portfolio"
          title={`${industry.title} projects`}
          lead="Real projects we delivered in this industry."
          cases={relatedCases}
        />
      )}

      <CtaBand
        id="ind-cta-h"
        title={`Building something in ${industry.title}?`}
        text="Tell us about your project. We respond within 24 hours."
        button="Start a conversation"
      />
    </>
  )
}
