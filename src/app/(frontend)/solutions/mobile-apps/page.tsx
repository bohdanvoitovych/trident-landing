import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { getLocale } from 'next-intl/server'
import { Button } from '@/components/atoms/button'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { getSolutionBySlug } from '@/data/solutions'
import { buildMetadata } from '@/lib/metadata'

const solution = getSolutionBySlug('mobile-apps')

export async function generateMetadata() {
  if (!solution) return {}
  const locale = await getLocale()
  return buildMetadata({
    title: solution.meta.title,
    description: solution.meta.description,
    path: '/solutions/mobile-apps',
    locale,
  })
}

const platforms = ['iOS', 'Android', 'React Native', 'Flutter', 'Expo']

export default function MobileAppsSolutionPage() {
  if (!solution) notFound()

  return (
    <div className="flex flex-col">
      <section className="dark-section relative overflow-hidden py-20 md:py-28">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow mb-5">Mobile Apps</p>
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl mb-6 leading-[1.1] max-w-4xl text-white">
            {solution.title}
          </h1>
          <p className="text-xl text-white/60 leading-relaxed mb-8 max-w-2xl">
            {solution.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="gradient" size="lg" asChild>
              <Link href="/contact">
                Discuss your app <ArrowRight size={18} />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/[0.12] text-white hover:bg-white/[0.06] bg-transparent"
              asChild
            >
              <Link href="/cases">See case studies</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Capabilities"
            title="What we deliver"
            subtitle="Full-cycle mobile development — from discovery and design to App Store delivery and ongoing maintenance."
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {solution.features.map((feature) => (
              <div key={feature.title} className="light-card rounded-[3px] p-6 flex flex-col gap-3">
                <h3 className="font-semibold text-[#111318]">{feature.title}</h3>
                <p className="text-sm text-[#4A4F57] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 section-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Platforms & frameworks"
            title="One build, two stores"
            subtitle="We use React Native and Flutter to ship to iOS and Android from a single codebase — with native-grade performance."
            className="mb-14"
          />
          <div className="flex flex-wrap gap-2">
            {platforms.map((p) => (
              <span
                key={p}
                className="inline-flex items-center rounded-[2px] bg-white border border-[#E3E5E8] px-4 py-2 text-sm font-medium text-[#111318]"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Tech stack"
            title="Production-grade tooling"
            subtitle="The same stack we use for our own products — battle-tested and maintainable."
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

      <section className="dark-section py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to build your mobile app?
          </h2>
          <p className="text-white/60 mb-8 text-lg">
            Tell us about your idea. We&apos;ll scope it, design it, and ship it to both stores.
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
              <Link href="/cases">View case studies</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
