import Link from 'next/link'
import { ArrowRight, CheckCircle, Code2 } from 'lucide-react'
import type { TechnologyData } from '@/data/technologies'
import { services } from '@/data/services'
import { cases } from '@/data/cases'
import { Button } from '@/components/atoms/button'
import { Badge } from '@/components/atoms/badge'
import { SectionHeader } from '@/components/molecules/SectionHeader'

type Props = { technology: TechnologyData }

export function TechnologyPage({ technology }: Props) {
  const relatedServices = services.filter((s) => technology.relatedServices.includes(s.slug))
  const relatedCases = cases.filter((c) => technology.relatedCases.includes(c.slug))

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="dark-section relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 glow-hero pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-5">
            <Code2 size={14} className="text-white/40" />
            <span className="eyebrow">{technology.category}</span>
          </div>
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl mb-6 leading-[1.1] max-w-4xl text-white">
            {technology.tagline}
          </h1>
          <p className="text-xl text-white/60 leading-relaxed mb-8 max-w-2xl">
            {technology.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="gradient" size="lg" asChild>
              <Link href="/contact">
                Start a project <ArrowRight size={18} />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/[0.12] text-white hover:bg-white/[0.06] bg-transparent"
              asChild
            >
              <Link href="/services">See all services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Use cases"
            title={`What we build with ${technology.name}`}
            subtitle="Production use cases we've shipped for Swiss companies."
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {technology.useCases.map((uc) => (
              <div key={uc.title} className="light-card rounded-xl p-6 flex gap-4">
                <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">{uc.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{uc.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28 section-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why"
            title={`Why we use ${technology.name}`}
            subtitle="Concrete advantages for Swiss business software."
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {technology.benefits.map((b) => (
              <div key={b} className="light-card rounded-xl p-5 flex gap-3 items-start">
                <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                <p className="text-sm leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="py-16 border-y border-[#E4E4E7]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-muted-foreground mb-4">
            We use {technology.name} alongside
          </p>
          <div className="flex flex-wrap gap-2">
            {technology.complementaryStack.map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full border border-[#E4E4E7] bg-white px-3 py-1 text-sm font-medium text-[#3F3F46]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Services"
              title={`Services using ${technology.name}`}
              subtitle="Our service packages that include this technology."
              className="mb-12"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="light-card light-card-interactive rounded-xl p-6 group flex gap-4 transition-all"
                >
                  <div>
                    <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {s.tagline}
                    </p>
                  </div>
                  <ArrowRight
                    size={16}
                    className="shrink-0 mt-1 text-muted-foreground/40 group-hover:text-primary transition-colors"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Cases */}
      {relatedCases.length > 0 && (
        <section className="py-20 md:py-28 section-alt">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Portfolio"
              title={`${technology.name} in production`}
              subtitle="Real projects we shipped using this technology."
              className="mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedCases.map((c) => (
                <Link
                  key={c.slug}
                  href={`/cases/${c.slug}`}
                  className="light-card light-card-interactive rounded-xl p-6 group transition-all"
                >
                  <Badge variant="blue" className="mb-3 text-xs">
                    {c.industry}
                  </Badge>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {c.hero.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {c.hero.tagline}
                  </p>
                  {c.results.slice(0, 2).map((r) => (
                    <div key={r.metric} className="mt-3">
                      <span className="text-lg font-bold gradient-text">{r.value}</span>{' '}
                      <span className="text-xs text-muted-foreground">{r.metric}</span>
                    </div>
                  ))}
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
            Need {technology.name} expertise?
          </h2>
          <p className="text-white/60 mb-8 text-lg">
            Tell us what you&apos;re building. We respond within 24 hours.
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
