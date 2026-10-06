import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, Check, Clock } from 'lucide-react'
import { getLocale } from 'next-intl/server'
import { Button } from '@/components/atoms/button'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { cn } from '@/lib/utils'
import { getSolutionBySlug } from '@/data/solutions'
import { buildMetadata } from '@/lib/metadata'

const solution = getSolutionBySlug('websites')

export async function generateMetadata() {
  if (!solution) return {}
  const locale = await getLocale()
  return buildMetadata({
    title: solution.meta.title,
    description: solution.meta.description,
    path: '/solutions/websites',
    locale,
  })
}

export default function WebsitesSolutionPage() {
  if (!solution) notFound()
  const packages = solution.packages ?? []

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="dark-section relative overflow-hidden py-20 md:py-28">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow mb-5">Websites</p>
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl mb-6 leading-[1.1] max-w-4xl text-white">
            {solution.title}
          </h1>
          <p className="text-xl text-white/60 leading-relaxed mb-8 max-w-2xl">
            {solution.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="gradient" size="lg" asChild>
              <Link href="/contact">
                Start your project <ArrowRight size={18} />
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
      </section>

      {/* Pricing packages */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Packages"
            title="Four website packages"
            subtitle="Fixed price, fixed timeline. Each package can be combined with optional add-ons."
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={cn(
                  'light-card rounded-[3px] p-6 flex flex-col gap-5 relative',
                  pkg.highlighted && 'ring-2 ring-primary border-primary',
                )}
              >
                {pkg.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full bg-primary px-3 py-1 text-[11px] font-semibold text-white">
                    Most Popular
                  </span>
                )}
                <div>
                  <p className="text-sm font-medium text-[#4A4F57]">{pkg.name}</p>
                  <p className="text-3xl font-bold text-[#111318] mt-2">{pkg.price}</p>
                  <div className="flex items-center gap-1.5 text-xs text-[#4A4F57] mt-2">
                    <Clock size={12} className="text-primary" />
                    Delivered in {pkg.timeline}
                  </div>
                </div>

                <div className="flex-1">
                  <p className="text-[11px] font-medium text-[#4A4F57] uppercase tracking-widest mb-2">
                    Includes
                  </p>
                  <ul className="space-y-2">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-[#111318]">
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

      {/* Features */}
      <section className="py-20 md:py-28 section-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why us"
            title="Built for Swiss SMEs"
            subtitle="Every website we deliver is mobile-first, multilingual-ready, and SEO-optimized — at a fixed price."
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {solution.features.map((feature) => (
              <div key={feature.title} className="light-card rounded-[3px] p-6 flex flex-col gap-3">
                <h3 className="font-semibold text-[#111318]">{feature.title}</h3>
                <p className="text-sm text-[#4A4F57] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Tech stack"
            title="Modern, maintainable tooling"
            subtitle="We build on the same stack we use for our own products — battle-tested in production."
            className="mb-10"
          />
          <div className="flex flex-wrap gap-2">
            {solution.techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-[2px] bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="dark-section py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to launch your website?
          </h2>
          <p className="text-white/60 mb-8 text-lg">
            Pick a package or tell us about your project. We&apos;ll send a fixed quote within 24
            hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
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
              <Link href="/pricing">See pricing details</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
