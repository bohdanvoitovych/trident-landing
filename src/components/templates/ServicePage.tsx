import { useTranslations } from 'next-intl'
import { ButtonLink } from '@/components/atoms/controls'
import { PageHero } from '@/components/molecules/PageHero'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { CaseCard } from '@/components/molecules/CaseCard'
import { cases } from '@/data/cases'
import type { ServiceData } from '@/data/services'

type Props = {
  service: ServiceData
}

const WHY = [
  { title: 'Fixed-price engagements', desc: 'Statement of Work before we start. No scope creep surprises. You know the cost upfront.' },
  { title: 'Swiss data compliance', desc: 'nFADP and GDPR-ready by default. Data residency in Switzerland available for all projects.' },
  { title: '24h response guaranteed', desc: 'Send us a brief. We respond with a concrete proposal within one business day.' },
]

export function ServicePage({ service }: Props) {
  const t = useTranslations('services')
  const relatedCases = cases.filter((c) => service.relatedCases.includes(c.slug))

  return (
    <>
      <PageHero
        crumbs={[
          { name: 'Services', href: '/services' },
          { name: service.title, href: `/services/${service.slug}` },
        ]}
        label="Service"
        title={service.title}
        lead={service.description}
        actions={
          <>
            <ButtonLink href="/contact" arrow>
              Get a free quote
            </ButtonLink>
            <ButtonLink href="/cases" variant="outline">
              See our projects
            </ButtonLink>
          </>
        }
        aside={
          <div className="panel stack" style={{ gap: 20 }}>
            <p className="h4 text-blue-d">{service.tagline}</p>
            <ul className="ticks">
              {service.features.slice(0, 3).map((f) => (
                <li key={f.title}>{f.title}</li>
              ))}
            </ul>
          </div>
        }
      />

      {/* What's included */}
      <section className="section section--alt" aria-labelledby="scope-h">
        <div className="container">
          <SectionHeader
            id="scope-h"
            label="Scope of work"
            title={t('features')}
            lead={`Everything included in our ${service.title} engagements — no hidden extras.`}
          />
          <div className="grid-2 stagger">
            {service.features.map((feature, i) => (
              <div key={feature.title} className="card card--flat feature-card">
                <span className="mono text-[13px] font-semibold text-blue-d" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="section section--band" aria-labelledby="why-h">
        <div className="container">
          <h2 id="why-h" className="sr-only">
            Why us
          </h2>
          <ul className="grid-3 stagger" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {WHY.map((item) => (
              <li key={item.title} className="flex flex-col gap-2 border-t-2 border-blue pt-5">
                <h3 className="h4">{item.title}</h3>
                <p className="body">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tech stack */}
      <section className="section section--alt" aria-labelledby="stack-h">
        <div className="container">
          <SectionHeader id="stack-h" label={t('techStack')} title="Technologies we use" />
          <ul className="reveal flex flex-wrap gap-2" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {service.techStack.map((tech) => (
              <li key={tech} className="rounded-sm border border-line bg-white px-3 py-1.5 text-[14px] font-medium text-ink">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related cases */}
      {relatedCases.length > 0 && (
        <section className="section" aria-labelledby="related-h">
          <div className="container">
            <SectionHeader
              id="related-h"
              label="Portfolio"
              title={t('relatedCases')}
              lead={`Real projects we delivered using ${service.title}.`}
            />
            <div className="grid-3 stagger wipe">
              {relatedCases.map((c) => (
                <CaseCard
                  key={c.slug}
                  href={`/cases/${c.slug}`}
                  image={c.hero.image}
                  imageAlt={c.hero.title}
                  sector={c.industry}
                  title={c.hero.title}
                  description={c.hero.tagline}
                  results={c.results}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className={relatedCases.length > 0 ? 'section section--alt' : 'section'} aria-labelledby="svc-cta-h">
        <div className="container">
          <div className="cta-band reveal">
            <div className="stack">
              <h2 id="svc-cta-h" className="h2">
                Ready to get started with {service.title}?
              </h2>
              <p className="lead" style={{ maxWidth: 640 }}>
                Describe your project in 2 sentences. We send back a concrete proposal within 24 hours — scope, timeline, and fixed price.
              </p>
            </div>
            <ButtonLink href="/contact" arrow>
              Request a Proposal
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
