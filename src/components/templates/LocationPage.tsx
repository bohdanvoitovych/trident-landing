import Link from 'next/link'
import { ArrowRight, MapPin, CheckCircle } from 'lucide-react'
import type { LocationData } from '@/data/locations'
import { services } from '@/data/services'
import { cases } from '@/data/cases'
import { Button } from '@/components/atoms/button'
import { Badge } from '@/components/atoms/badge'
import { SectionHeader } from '@/components/molecules/SectionHeader'

type Props = { location: LocationData }

export function LocationPage({ location }: Props) {
  const relatedServices = services.filter((s) => location.relatedServices.includes(s.slug))
  const relatedCases = cases.filter((c) => location.relatedCases.includes(c.slug))

  return (
    <div className="flex flex-col">
      {/* Hero — dark */}
      <section className="dark-section relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 glow-hero pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-5">
            <MapPin size={14} className="text-white/40" />
            <span className="eyebrow">{location.region}, Switzerland</span>
          </div>
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl mb-6 leading-[1.1] max-w-4xl text-white">
            {location.tagline}
          </h1>
          <p className="text-xl text-white/60 leading-relaxed mb-8 max-w-2xl">
            {location.description}
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {location.keyIndustries.map((ind) => (
              <span
                key={ind}
                className="text-[12px] font-medium text-white/50 border border-white/[0.1] rounded-full px-3 py-1"
              >
                {ind}
              </span>
            ))}
          </div>
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
              <Link href="/services">Our services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow={`${location.name} expertise`}
            title="What we bring to the table"
            subtitle={`Specific capabilities we've developed for ${location.name}'s market.`}
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {location.highlights.map((h) => (
              <div key={h.title} className="light-card rounded-[3px] p-6">
                <CheckCircle size={18} className="text-primary mb-3" />
                <h3 className="font-semibold mb-2">{h.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{h.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="py-20 md:py-28 section-alt">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Services"
              title={`What we build for ${location.name} companies`}
              subtitle="Our core capabilities, tuned for your market."
              className="mb-12"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="light-card light-card-interactive rounded-[3px] p-6 group flex gap-4 transition-all"
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

      {/* Related cases */}
      {relatedCases.length > 0 && (
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Portfolio"
              title="Projects we've delivered"
              subtitle={`A selection of our work relevant to ${location.name}'s industries.`}
              className="mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedCases.map((c) => (
                <Link
                  key={c.slug}
                  href={`/cases/${c.slug}`}
                  className="light-card light-card-interactive rounded-[3px] p-6 group transition-all"
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
            Based in {location.name}? Let&apos;s build something.
          </h2>
          <p className="text-white/60 mb-8 text-lg">
            Remote-friendly, Swiss-based. We work with {location.name} companies regularly.
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
