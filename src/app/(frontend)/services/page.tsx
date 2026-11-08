import { useLocale } from 'next-intl'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { getLocale } from 'next-intl/server'
import { ServiceCard } from '@/components/molecules/ServiceCard'
import { PageHero } from '@/components/molecules/PageHero'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { ButtonLink } from '@/components/atoms/controls'
import { Integrations } from '@/components/organisms/home/Integrations'
import { getServices } from '@/data/services'
import { getTechnologies } from '@/data/technologies'
import { buildMetadata } from '@/lib/metadata'

export const revalidate = 3600

export async function generateMetadata() {
  const locale = await getLocale()
  return buildMetadata({
    title: 'Software Development Services Switzerland | AI, Cloud, DevOps & More | Trident Software',
    description: 'Custom software development services in Switzerland — AI integration, web & mobile apps, embedded systems, cloud consulting, DevOps, CTO-as-a-Service. Fixed budgets, Swiss compliance, 27+ projects delivered since 2009.',
    path: '/services',
    locale,
  })
}

const STEPS = [
  {
    title: 'Scope & quote',
    description: 'Send us a brief. We reply within 24 hours with a concrete proposal — scope, timeline, and fixed price. No surprises.',
    number: '01',
  },
  {
    title: 'Build & ship',
    description: 'Our senior engineers start within 1–2 weeks. Weekly demos, async updates, and staging environment from day one.',
    number: '02',
  },
  {
    title: 'Maintain & grow',
    description: 'Post-launch SLA, performance monitoring, and feature iterations. We stay with you after go-live.',
    number: '03',
  },
]

const TRUST_POINTS = [
  {
    title: 'Fixed-price contracts',
    description: 'Statement of Work signed before we start. The price you see is the price you pay.',
  },
  {
    title: 'Swiss data compliance',
    description: 'nFADP and GDPR-ready by default. Data residency in Switzerland available for all projects.',
  },
  {
    title: '24h response guaranteed',
    description: 'Send us a brief. We respond with a concrete proposal within one business day.',
  },
  {
    title: '15+ years in production',
    description: 'Founded in 2009. 27+ Swiss and European clients. We have seen what breaks in production.',
  },
  {
    title: 'No vendor lock-in',
    description: 'You own the code, the repository, and the infrastructure. We hand over everything.',
  },
  {
    title: 'CH + IL + UA talent pool',
    description: 'Senior engineers across CET timezones. Near-seamless overlap with European teams.',
  },
]

export default function ServicesPage() {
  const locale = useLocale()
  const technologies = getTechnologies(locale)
  const services = getServices(useLocale())
  return (
    <>
      <PageHero
        crumbs={[{ name: 'Services', href: '/services' }]}
        label="What we build"
        title="Software Development Services for Swiss & European Businesses"
        lead="From AI integration and custom web platforms to embedded systems and cloud infrastructure — end-to-end engineering with fixed budgets and Swiss compliance built in."
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
      />

      {/* Service cards */}
      <section className="section section--alt" aria-labelledby="svc-h">
        <div className="container">
          <SectionHeader id="svc-h" label="Services" title="What we deliver" />
          <div className="grid-4 stagger">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* How we engage */}
      <section className="section section--ink" aria-labelledby="engage-h">
        <div className="container">
          <SectionHeader
            id="engage-h"
            label="Process"
            title="How we engage"
            lead="Three steps from brief to shipped product. No black boxes, no scope surprises."
          />
          <ol className="grid-3 stagger" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {STEPS.map(({ title, description, number }) => (
              <li key={number} className="flex flex-col gap-3 border-t border-white/15 pt-6">
                <span className="mono text-[13px] text-blue-l">{number}</span>
                <h3 className="h4">{title}</h3>
                <p className="body">{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Technologies */}
      <section className="section" aria-labelledby="tech-h">
        <div className="container">
          <SectionHeader
            id="tech-h"
            label="Stack"
            title="Technologies we use"
            action={{ href: '/technologies', label: 'Full stack details' }}
          />
          <ul className="grid-4 keep-2 stagger lg:!grid-cols-5" style={{ listStyle: 'none', margin: 0, padding: 0, gap: 14 }}>
            {technologies.map((tech) => (
              <li key={tech.slug} className="grid">
                <Link
                  href={`/technologies/${tech.slug}`}
                  className="card flex flex-col items-center gap-3 px-4 py-6 text-center"
                >
                  <Image
                    src={`/images/tech/${tech.iconSlug}.svg`}
                    alt=""
                    width={30}
                    height={30}
                    unoptimized
                    className="shrink-0"
                    style={{ width: 30, height: 30 }}
                  />
                  <span className="small text-ink">{tech.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section section--alt" aria-labelledby="why-h">
        <div className="container">
          <div className="split split--top">
            <SectionHeader id="why-h" label="Why us" title="What you get with Trident" className="!mb-0" />
            <ul className="reveal border-t-2 border-ink" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {TRUST_POINTS.map(({ title, description }) => (
                <li key={title} className="flex flex-col gap-2 border-b border-line py-6">
                  <h3 className="h4">{title}</h3>
                  <p className="body">{description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Integrations />

      {/* CTA */}
      <section className="section section--alt" aria-labelledby="svc-cta-h">
        <div className="container">
          <div className="cta-band reveal">
            <div className="stack">
              <span className="label">Ready to start?</span>
              <h2 id="svc-cta-h" className="h2">
                Describe your project in 2 sentences
              </h2>
              <p className="lead" style={{ maxWidth: 640 }}>
                We send back a concrete proposal within 24 hours — scope, timeline, and fixed price.
              </p>
            </div>
            <div className="hero-ctas">
              <ButtonLink href="/contact" arrow>
                Request a Proposal
              </ButtonLink>
              <ButtonLink href="/cases" variant="outline">
                View case studies
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
