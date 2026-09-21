import Link from 'next/link'
import { ArrowRight, Code2 } from 'lucide-react'
import { getLocale } from 'next-intl/server'
import { technologies } from '@/data/technologies'
import { buildMetadata } from '@/lib/metadata'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { Button } from '@/components/atoms/button'
import { Badge } from '@/components/atoms/badge'

function TechIcon({ iconSlug, name }: { iconSlug?: string; name: string }) {
  if (!iconSlug) return <Code2 size={18} className="text-primary shrink-0" />
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://cdn.simpleicons.org/${iconSlug}`}
      alt={`${name} logo`}
      width={20}
      height={20}
      loading="lazy"
      className="shrink-0"
    />
  )
}

export const revalidate = 86400

export async function generateMetadata() {
  const locale = await getLocale()
  return buildMetadata({
    title: 'Technologies We Use | Swiss Software Development | Trident Software',
    description:
      'Next.js, Flutter, TypeScript, Python, React, Node.js, PostgreSQL, Docker — our technology stack for Swiss software development.',
    path: '/technologies',
    locale,
  })
}

export default function TechnologiesPage() {
  return (
    <div className="flex flex-col">
      <section className="dark-section relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 glow-hero pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="eyebrow mb-5">Our stack</p>
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl mb-6 leading-[1.1] text-white mx-auto max-w-4xl">
            Technologies <span className="gradient-text">we build with</span>
          </h1>
          <p className="text-xl text-white/60 leading-relaxed mb-8 max-w-2xl mx-auto">
            Battle-tested tools. Modern stack. Production-grade defaults across every project.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Stack"
            title="What we use, and why"
            subtitle="Each technology earns its place by shipping reliably in production."
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {technologies.map((tech) => (
              <Link
                key={tech.slug}
                href={`/technologies/${tech.slug}`}
                className="light-card light-card-interactive rounded-xl p-6 group transition-all flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TechIcon iconSlug={tech.iconSlug} name={tech.name} />
                    <Badge variant="blue" className="text-[11px]">
                      {tech.category}
                    </Badge>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-muted-foreground/40 group-hover:text-primary transition-colors"
                  />
                </div>
                <h2 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {tech.name}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {tech.tagline}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                  {tech.complementaryStack.slice(0, 3).map((item) => (
                    <span
                      key={item}
                      className="text-[11px] text-muted-foreground border border-border rounded-full px-2 py-0.5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-section py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Building with a different stack?
          </h2>
          <p className="text-white/60 mb-8 text-lg">
            We adapt to your existing codebase. Talk to us about your project.
          </p>
          <Button variant="gradient" size="lg" asChild>
            <Link href="/contact">
              Start a conversation <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
