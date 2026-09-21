import Link from 'next/link'
import { ArrowRight, Globe, ShoppingCart, Smartphone, Cloud, Users, Cpu } from 'lucide-react'
import { getLocale } from 'next-intl/server'
import { Button } from '@/components/atoms/button'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { solutions } from '@/data/solutions'
import { services } from '@/data/services'
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

const solutionIcons: Record<string, typeof Globe> = {
  websites: Globe,
  'e-commerce': ShoppingCart,
  'mobile-apps': Smartphone,
  'cloud-services': Cloud,
  'social-networks': Users,
  iot: Cpu,
}

export default function SolutionsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="dark-section relative overflow-hidden py-20 md:py-28">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow mb-5">Solutions</p>
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl mb-6 leading-[1.1] max-w-4xl text-white">
            Software solutions built for <span className="gradient-text">Swiss SMEs</span>
          </h1>
          <p className="text-xl text-white/60 leading-relaxed mb-8 max-w-2xl">
            Packaged offerings with predictable timelines and fixed prices. From a simple brochure
            site to a custom B2B e-commerce platform handling 1M+ products.
          </p>
        </div>
      </section>

      {/* Solutions grid */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Packaged solutions"
            title="Two ways to start"
            subtitle="Choose between fixed-price website packages or a custom e-commerce build tailored to your business."
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {solutions.map((sol) => {
              const Icon = solutionIcons[sol.slug] ?? Globe
              return (
                <Link
                  key={sol.slug}
                  href={`/solutions/${sol.slug}`}
                  className="light-card light-card-interactive rounded-xl p-8 flex flex-col gap-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#0F172A]">{sol.title}</h3>
                    <p className="text-sm text-primary mt-1">{sol.tagline}</p>
                  </div>
                  <p className="text-sm text-[#71717A] leading-relaxed">{sol.description}</p>
                  <div className="flex items-center gap-2 text-sm font-medium text-primary mt-2">
                    Explore <ArrowRight size={14} />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 md:py-28 section-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Engineering services"
            title="Full-stack engineering capabilities"
            subtitle="Beyond packaged solutions, our team delivers end-to-end engineering services across AI, software, embedded, and cloud."
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="light-card light-card-interactive rounded-xl p-5 flex flex-col gap-2"
              >
                <p className="font-semibold text-[#0F172A]">{service.title}</p>
                <p className="text-sm text-[#71717A] leading-relaxed">{service.tagline}</p>
                <div className="flex items-center gap-1.5 text-sm font-medium text-primary mt-1">
                  Learn more <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="dark-section py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Not sure which fits?
          </h2>
          <p className="text-white/60 mb-8 text-lg">
            Tell us about your project. We&apos;ll recommend the right solution and a fixed price
            within 24 hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="gradient" size="lg" asChild>
              <Link href="/contact">
                Get a recommendation <ArrowRight size={18} />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/[0.12] text-white hover:bg-white/[0.06] bg-transparent"
              asChild
            >
              <Link href="/pricing">View pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
