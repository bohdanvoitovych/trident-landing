import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, ArrowLeft, Check, Clock, Users } from 'lucide-react'
import { getLocale } from 'next-intl/server'
import { Button } from '@/components/atoms/button'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { cn } from '@/lib/utils'
import { getSolutionBySlug } from '@/data/solutions'
import { buildMetadata } from '@/lib/metadata'

type Props = { params: Promise<{ package: string }> }

const websitesSolution = getSolutionBySlug('websites')

export async function generateStaticParams() {
  return (websitesSolution?.packages ?? []).map((pkg) => ({ package: pkg.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { package: packageSlug } = await params
  const pkg = websitesSolution?.packages?.find((p) => p.slug === packageSlug)
  if (!pkg) return {}
  const locale = await getLocale()
  return buildMetadata({
    title: `${pkg.name} — Website Package | Trident Software`,
    description: pkg.description,
    path: `/solutions/websites/${packageSlug}`,
    locale,
  })
}

export default async function WebsitePackagePage({ params }: Props) {
  const { package: packageSlug } = await params
  const pkg = websitesSolution?.packages?.find((p) => p.slug === packageSlug)
  if (!pkg || !websitesSolution) notFound()

  const otherPackages = websitesSolution.packages?.filter((p) => p.slug !== packageSlug) ?? []

  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <div className="bg-[#09090B] border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-white/40">
            <Link href="/solutions" className="hover:text-white/70 transition-colors">
              Solutions
            </Link>
            <span>/</span>
            <Link href="/solutions/websites" className="hover:text-white/70 transition-colors">
              Websites
            </Link>
            <span>/</span>
            <span className="text-white/70">{pkg.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="dark-section relative overflow-hidden py-20 md:py-28">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/solutions/websites"
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white/80 transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Back to Website Packages
          </Link>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div className="max-w-2xl">
              <p className="eyebrow mb-5">Website Package</p>
              <h1 className="text-5xl font-bold tracking-tight md:text-6xl mb-6 leading-[1.1] text-white">
                <span className="gradient-text">{pkg.name}</span>
              </h1>
              <p className="text-xl text-white/60 leading-relaxed mb-8">
                {pkg.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="gradient" size="lg" asChild>
                  <Link href="/contact">
                    Get a quote <ArrowRight size={18} />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/[0.12] text-white hover:bg-white/[0.06] bg-transparent"
                  asChild
                >
                  <Link href="/pricing">See all pricing</Link>
                </Button>
              </div>
            </div>

            {/* Price card */}
            <div
              className={cn(
                'rounded-2xl border p-8 min-w-[240px] shrink-0',
                pkg.highlighted
                  ? 'border-primary/50 bg-primary/10'
                  : 'border-white/[0.08] bg-white/[0.04]',
              )}
            >
              {pkg.highlighted && (
                <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-[11px] font-semibold text-white mb-4">
                  Most Popular
                </span>
              )}
              <p className="text-white/50 text-sm mb-2">Fixed price</p>
              <p className="text-4xl font-bold text-white mb-1">{pkg.price}</p>
              <div className="flex items-center gap-1.5 text-sm text-white/50 mt-3">
                <Clock size={14} className="text-primary" />
                Delivered in {pkg.timeline}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Includes"
            title="What you get"
            subtitle="Everything in this package is delivered at the fixed price. No hidden extras."
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
            {pkg.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check size={12} className="text-primary" />
                </div>
                <span className="text-[#0F172A] font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target audience */}
      <section className="py-20 md:py-28 section-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Best for"
            title="Who this package is built for"
            subtitle="Each package is designed with specific customer types in mind."
            className="mb-12"
          />
          <div className="flex flex-wrap gap-3">
            {pkg.target.map((audience) => (
              <span
                key={audience}
                className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-4 py-2 text-sm font-medium text-[#0F172A]"
              >
                <Users size={14} className="text-primary" />
                {audience}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Guarantees"
            title="What we promise"
            subtitle="Every project comes with the same core commitments."
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {websitesSolution.features.map((feature) => (
              <div key={feature.title} className="light-card rounded-xl p-6 flex flex-col gap-3">
                <h3 className="font-semibold text-[#0F172A]">{feature.title}</h3>
                <p className="text-sm text-[#71717A] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other packages */}
      {otherPackages.length > 0 && (
        <section className="py-20 md:py-28 section-alt">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Other options"
              title="Compare packages"
              subtitle="Not sure this is the right fit? See what else we offer."
              className="mb-12"
            />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {otherPackages.map((other) => (
                <Link
                  key={other.slug}
                  href={`/solutions/websites/${other.slug}`}
                  className={cn(
                    'light-card rounded-xl p-6 flex flex-col gap-4 hover:border-primary/40 transition-colors group',
                    other.highlighted && 'ring-1 ring-primary/30',
                  )}
                >
                  <div>
                    <p className="text-sm font-medium text-[#71717A]">{other.name}</p>
                    <p className="text-2xl font-bold text-[#0F172A] mt-1">{other.price}</p>
                    <div className="flex items-center gap-1.5 text-xs text-[#71717A] mt-1.5">
                      <Clock size={11} className="text-primary" />
                      {other.timeline}
                    </div>
                  </div>
                  <p className="text-sm text-[#71717A] leading-relaxed line-clamp-2">
                    {other.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                    View package <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="dark-section py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to get started with {pkg.name}?
          </h2>
          <p className="text-white/60 mb-8 text-lg">
            Fixed price, fixed timeline. We&apos;ll send a quote within 24 hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="gradient" size="lg" asChild>
              <Link href="/contact">
                Request a quote <ArrowRight size={18} />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/[0.12] text-white hover:bg-white/[0.06] bg-transparent"
              asChild
            >
              <Link href="/solutions/websites">All packages</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
