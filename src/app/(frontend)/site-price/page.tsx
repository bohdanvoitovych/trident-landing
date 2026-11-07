import { getLocale } from 'next-intl/server'
import { ButtonLink, Tag } from '@/components/atoms/controls'
import { PageHero } from '@/components/molecules/PageHero'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { Pricing } from '@/components/organisms/home/Pricing'
import { AgentVsHire } from '@/components/organisms/home/AgentVsHire'
import { cn } from '@/lib/utils'
import { getSolutionBySlug } from '@/data/solutions'
import { buildMetadata } from '@/lib/metadata'

export const revalidate = 3600

export async function generateMetadata() {
  const locale = await getLocale()
  return buildMetadata({
    title: 'Pricing | Trident Software',
    description:
      'Transparent, fixed-price packages for Swiss SMEs. Web brochure from CHF 599. SME website CHF 1,299. User portal CHF 2,499. Online store CHF 6,999.',
    path: '/pricing',
    locale,
  })
}

const addOns = [
  { name: 'Hosting & domain', price: 'CHF 50 / yr', description: 'Managed hosting, SSL, backups, domain renewal.' },
  { name: 'Additional language', price: 'CHF 250', description: 'Per locale — translation + localized SEO.' },
  { name: 'Content creation', price: 'CHF 150 / page', description: 'Copywriting tailored to your brand and audience.' },
  { name: 'Brandbook', price: 'CHF 2,500', description: 'Logo, color palette, typography, UI tokens.' },
  { name: 'SEO support', price: 'CHF 500 / yr', description: 'Monthly audits, keyword tracking, content recommendations.' },
  { name: 'Legal policies', price: 'CHF 125', description: 'Privacy, Terms, Cookies — Swiss + EU compliant templates.' },
  { name: 'Media content', price: 'CHF 150 / page', description: 'Stock photos, illustrations, or AI imagery curated for your site.' },
  { name: 'Blog support', price: 'CHF 150 / mo', description: 'Ongoing publishing, editorial QA, SEO formatting.' },
  { name: 'Custom design', price: 'CHF 500 / page', description: 'Bespoke layouts beyond the package templates.' },
]

export default function PricingPage() {
  const websites = getSolutionBySlug('websites')
  const packages = websites?.packages ?? []

  return (
    <>
      <PageHero
        crumbs={[{ name: 'Pricing', href: '/site-price' }]}
        label="Pricing"
        title={
          <>
            Transparent, <span className="blue">fixed-price</span> packages
          </>
        }
        lead="No hourly billing. No scope creep. Price agreed before work begins."
      />

      <section className="section section--alt" aria-labelledby="packages-h">
        <div className="container">
          <SectionHeader
            id="packages-h"
            label="Website packages"
            title="Pick the package that fits"
            lead="From a simple brochure site to a full online store. Each package has a fixed price and a defined delivery date."
          />
          <div className="grid-4 stagger">
            {packages.map((pkg) => (
              <article
                key={pkg.name}
                className={cn('card price-card card--flat', pkg.highlighted && 'price-card--hi')}
                style={{ padding: 24 }}
              >
                <div className="stack" style={{ gap: 10 }}>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="h4">{pkg.name}</h3>
                    {pkg.highlighted && <Tag tone="blue">Most Popular</Tag>}
                  </div>
                  <span className="amt">{pkg.price}</span>
                  <span className="meta">Delivered in {pkg.timeline}</span>
                </div>
                <div className="stack border-t border-line pt-4" style={{ gap: 8 }}>
                  <span className="meta">For</span>
                  <p className="small">{pkg.target.join(' · ')}</p>
                </div>
                <div className="stack flex-1" style={{ gap: 10 }}>
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
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="addons-h">
        <div className="container">
          <SectionHeader
            id="addons-h"
            label="Add-ons"
            title="Optional extras"
            lead="Add only what you need. Every add-on is priced separately and can be turned on at any time."
          />
          <ul className="grid-3 stagger" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {addOns.map((addOn) => (
              <li key={addOn.name} className="card card--flat feature-card">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <h3>{addOn.name}</h3>
                  <span className="mono text-[13px] font-semibold whitespace-nowrap text-blue-d">{addOn.price}</span>
                </div>
                <p>{addOn.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="section--line">
        <Pricing headingLevel="h2" />
      </div>
      <AgentVsHire />

      <section className="section section--line" aria-labelledby="price-cta-h">
        <div className="container cta-band reveal">
          <div className="stack" style={{ maxWidth: 760 }}>
            <h2 id="price-cta-h" className="h2">
              Start with a free consultation
            </h2>
            <p className="lead">
              Tell us about your project. We&apos;ll recommend the right package and send a fixed quote within 24 hours.
            </p>
          </div>
          <div className="hero-ctas">
            <ButtonLink href="/contact" arrow>
              Book a consultation
            </ButtonLink>
            <ButtonLink href="/solutions/websites" variant="outline">
              Explore websites
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
