import { useLocale } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { getLocale } from 'next-intl/server'
import { ButtonLink } from '@/components/atoms/controls'
import { PageHero } from '@/components/molecules/PageHero'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { ServiceCard } from '@/components/molecules/ServiceCard'
import { solutions } from '@/data/solutions'
import { getServices } from '@/data/services'
import { buildMetadata } from '@/lib/metadata'

export const revalidate = 3600

export async function generateMetadata() {
  const locale = await getLocale()
  return buildMetadata({
    title: 'Solutions | Trident Software',
    description:
      'Software solutions built for Swiss SMEs — websites, e-commerce platforms, and custom B2B systems with fixed budgets and Swiss compliance.',
    path: '/solutions',
    locale,
  })
}

export default function SolutionsPage() {
  const services = getServices(useLocale())
  return (
    <>
      <PageHero
        crumbs={[{ name: 'Solutions', href: '/solutions' }]}
        label="Solutions"
        title="Software solutions built for Swiss SMEs"
        lead="Packaged offerings with predictable timelines and fixed prices. From a simple brochure site to a custom B2B e-commerce platform handling 1M+ products."
      />

      {/* Solutions grid */}
      <section className="section section--alt" aria-labelledby="sol-h">
        <div className="container">
          <SectionHeader
            id="sol-h"
            label="Packaged solutions"
            title="Two ways to start"
            lead="Choose between fixed-price website packages or a custom e-commerce build tailored to your business."
          />
          <div className="grid-3 stagger">
            {solutions.map((sol) => (
              <Link key={sol.slug} href={`/solutions/${sol.slug}`} className="card feature-card">
                <h3>{sol.title}</h3>
                <span className="meta text-blue-d">{sol.tagline}</span>
                <p style={{ flex: 1 }}>{sol.description}</p>
                <span className="card-more">
                  Explore <span className="go" aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section" aria-labelledby="eng-h">
        <div className="container">
          <SectionHeader
            id="eng-h"
            label="Engineering services"
            title="Full-stack engineering capabilities"
            lead="Beyond packaged solutions, our team delivers end-to-end engineering services across AI, software, embedded, and cloud."
          />
          <div className="grid-4 stagger">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--alt" aria-labelledby="sol-cta-h">
        <div className="container">
          <div className="cta-band reveal">
            <div className="stack">
              <h2 id="sol-cta-h" className="h2">
                Not sure which fits?
              </h2>
              <p className="lead" style={{ maxWidth: 640 }}>
                Tell us about your project. We&apos;ll recommend the right solution and a fixed price within 24 hours.
              </p>
            </div>
            <div className="hero-ctas">
              <ButtonLink href="/contact" arrow>
                Get a recommendation
              </ButtonLink>
              <ButtonLink href="/pricing" variant="outline">
                View pricing
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
