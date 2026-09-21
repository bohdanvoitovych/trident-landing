import Link from 'next/link'
import { ArrowRight, Check, Clock } from 'lucide-react'
import { getLocale } from 'next-intl/server'
import { Button } from '@/components/atoms/button'
import { SectionHeader } from '@/components/molecules/SectionHeader'
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
    <div className="flex flex-col">
      {/* Hero */}
      <section className="dark-section relative overflow-hidden py-20 md:py-28">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow mb-5">Pricing</p>
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl mb-6 leading-[1.1] max-w-4xl text-white">
            Transparent, <span className="gradient-text">fixed-price</span> packages
          </h1>
          <p className="text-xl text-white/60 leading-relaxed mb-8 max-w-2xl">
            No hourly billing. No scope creep. Price agreed before work begins.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Website packages"
            title="Pick the package that fits"
            subtitle="From a simple brochure site to a full online store. Each package has a fixed price and a defined delivery date."
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={cn(
                  'light-card rounded-xl p-6 flex flex-col gap-5 relative',
                  pkg.highlighted && 'ring-2 ring-primary border-primary',
                )}
              >
                {pkg.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full bg-primary px-3 py-1 text-[11px] font-semibold text-white">
                    Most Popular
                  </span>
                )}
                <div>
                  <p className="text-sm font-medium text-[#71717A]">{pkg.name}</p>
                  <p className="text-3xl font-bold text-[#0F172A] mt-2">{pkg.price}</p>
                  <div className="flex items-center gap-1.5 text-xs text-[#71717A] mt-2">
                    <Clock size={12} className="text-primary" />
                    Delivered in {pkg.timeline}
                  </div>
                </div>

                <div>
                  <p className="text-[11px] font-medium text-[#71717A] uppercase tracking-widest mb-2">
                    For
                  </p>
                  <ul className="space-y-1">
                    {pkg.target.map((item) => (
                      <li key={item} className="text-xs text-[#71717A]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex-1">
                  <p className="text-[11px] font-medium text-[#71717A] uppercase tracking-widest mb-2">
                    Includes
                  </p>
                  <ul className="space-y-2">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-[#0F172A]">
                        <Check size={14} className="text-primary mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant={pkg.highlighted ? 'gradient' : 'outline'}
                  className="w-full"
                  asChild
                >
                  <Link href="/contact">Get started</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 md:py-28 section-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Add-ons"
            title="Optional extras"
            subtitle="Add only what you need. Every add-on is priced separately and can be turned on at any time."
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {addOns.map((addOn) => (
              <div key={addOn.name} className="light-card rounded-xl p-6 flex flex-col gap-2">
                <div className="flex items-start justify-between gap-3">
                  <p className="font-semibold text-[#0F172A]">{addOn.name}</p>
                  <span className="text-sm font-semibold text-primary whitespace-nowrap">
                    {addOn.price}
                  </span>
                </div>
                <p className="text-sm text-[#71717A] leading-relaxed">{addOn.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="dark-section py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Start with a free consultation
          </h2>
          <p className="text-white/60 mb-8 text-lg">
            Tell us about your project. We&apos;ll recommend the right package and send a fixed
            quote within 24 hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="gradient" size="lg" asChild>
              <Link href="/contact">
                Book a consultation <ArrowRight size={18} />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/[0.12] text-white hover:bg-white/[0.06] bg-transparent"
              asChild
            >
              <Link href="/solutions/websites">Explore websites</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
