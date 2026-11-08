import { useLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { getLocale } from 'next-intl/server'
import { ButtonLink, Tag } from '@/components/atoms/controls'
import { PageHero } from '@/components/molecules/PageHero'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { cn } from '@/lib/utils'
import { getSolutionBySlug } from '@/data/solutions'
import { buildMetadata } from '@/lib/metadata'

export async function generateMetadata() {
  const locale = await getLocale()
  const solution = getSolutionBySlug('websites', locale)
  if (!solution) return {}
  return buildMetadata({
    title: solution.meta.title,
    description: solution.meta.description,
    path: '/solutions/websites',
    locale,
  })
}

export default function WebsitesSolutionPage() {
  const solution = getSolutionBySlug('websites', useLocale())
  if (!solution) notFound()
  const packages = solution.packages ?? []

  return (
    <>
      <PageHero
        crumbs={[
          { name: 'Solutions', href: '/solutions' },
          { name: 'Websites', href: '/solutions/websites' },
        ]}
        label="Websites"
        title={solution.title}
        lead={solution.description}
        actions={
          <>
            <ButtonLink href="/contact" arrow>
              Start your project
            </ButtonLink>
            <ButtonLink href="/pricing" variant="outline">
              See all pricing
            </ButtonLink>
          </>
        }
      />

      {/* Pricing packages */}
      <section className="section section--alt" aria-labelledby="pkg-h">
        <div className="container">
          <SectionHeader
            id="pkg-h"
            label="Packages"
            title="Four website packages"
            lead="Fixed price, fixed timeline. Each package can be combined with optional add-ons."
          />
          <div className="grid-4 stagger">
            {packages.map((pkg) => (
              <div key={pkg.name} className={cn('card card--flat price-card', pkg.highlighted && 'price-card--hi')}>
                <h3 className="h4">{pkg.name}</h3>
                <span className="amt">{pkg.price}</span>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="meta">Delivered in {pkg.timeline}</span>
                  {pkg.highlighted && <Tag tone="blue">Most Popular</Tag>}
                </div>
                <div className="flex flex-1 flex-col gap-2.5 border-t border-line pt-4">
                  <span className="meta">Includes</span>
                  <ul className="ticks">
                    {pkg.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <ButtonLink href="/contact" variant={pkg.highlighted ? 'primary' : 'outline'} className="w-full">
                  Get started
                </ButtonLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section" aria-labelledby="feat-h">
        <div className="container">
          <SectionHeader
            id="feat-h"
            label="Why us"
            title="Built for Swiss SMEs"
            lead="Every website we deliver is mobile-first, multilingual-ready, and SEO-optimized — at a fixed price."
          />
          <div className="grid-2 stagger">
            {solution.features.map((feature) => (
              <div key={feature.title} className="card card--flat feature-card">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="section section--alt" aria-labelledby="web-stack-h">
        <div className="container">
          <SectionHeader
            id="web-stack-h"
            label="Tech stack"
            title="Modern, maintainable tooling"
            lead="We build on the same stack we use for our own products — battle-tested in production."
          />
          <ul className="reveal flex flex-wrap gap-2" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {solution.techStack.map((tech) => (
              <li key={tech} className="rounded-sm border border-line bg-white px-3 py-1.5 text-[14px] font-medium text-ink">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--line" aria-labelledby="web-cta-h">
        <div className="container">
          <div className="cta-band reveal">
            <div className="stack">
              <h2 id="web-cta-h" className="h2">
                Ready to launch your website?
              </h2>
              <p className="lead" style={{ maxWidth: 640 }}>
                Pick a package or tell us about your project. We&apos;ll send a fixed quote within 24 hours.
              </p>
            </div>
            <div className="hero-ctas">
              <ButtonLink href="/contact" arrow>
                Get a quote
              </ButtonLink>
              <ButtonLink href="/pricing" variant="outline">
                See pricing details
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
