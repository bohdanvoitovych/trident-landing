import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import { getLocale } from 'next-intl/server'
import { locations } from '@/data/locations'
import { buildMetadata } from '@/lib/metadata'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { Button } from '@/components/atoms/button'

export const revalidate = 86400

export async function generateMetadata() {
  const locale = await getLocale()
  return buildMetadata({
    title: 'Software Development Across Switzerland | Trident Software',
    description:
      'Custom software development for companies in Zurich, Geneva, Bern, Lausanne, Zug, Basel, and beyond. Swiss-based team, all cantons served.',
    path: '/locations',
    locale,
  })
}

export default function LocationsPage() {
  return (
    <div className="flex flex-col">
      <section className="dark-section relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 glow-hero pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="eyebrow mb-5">Switzerland-wide</p>
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl mb-6 leading-[1.1] text-white mx-auto max-w-4xl">
            Software development <span className="gradient-text">across Switzerland</span>
          </h1>
          <p className="text-xl text-white/60 leading-relaxed mb-8 max-w-2xl mx-auto">
            Based in Sion, Valais. Serving every Swiss canton. Remote-first by design.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Locations"
            title="Cities we serve"
            subtitle="Local market expertise. National reach."
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="light-card light-card-interactive rounded-[3px] p-6 group transition-all flex flex-col gap-3"
              >
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-primary shrink-0" />
                  <span className="text-xs text-muted-foreground">{loc.region}</span>
                </div>
                <h2 className="text-lg font-semibold group-hover:text-primary transition-colors flex items-center justify-between">
                  {loc.name}
                  <ArrowRight
                    size={16}
                    className="text-muted-foreground/40 group-hover:text-primary transition-colors"
                  />
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {loc.tagline}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                  {loc.keyIndustries.slice(0, 3).map((ind) => (
                    <span
                      key={ind}
                      className="text-[11px] text-muted-foreground border border-border rounded-full px-2 py-0.5"
                    >
                      {ind}
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
            Your city not listed?
          </h2>
          <p className="text-white/60 mb-8 text-lg">
            We serve all of Switzerland and neighbouring countries. Get in touch.
          </p>
          <Button variant="gradient" size="lg" asChild>
            <Link href="/contact">
              Contact us <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
