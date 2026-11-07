import Link from 'next/link'
import { getLocale } from 'next-intl/server'
import { locations } from '@/data/locations'
import { buildMetadata } from '@/lib/metadata'
import { PageHero } from '@/components/molecules/PageHero'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { CtaBand, TagList } from '@/components/molecules/CatalogBlocks'

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
    <>
      <PageHero
        crumbs={[{ name: 'Locations', href: '/locations' }]}
        label="Switzerland-wide"
        title="Software development across Switzerland"
        lead="Based in Sion, Valais. Serving every Swiss canton. Remote-first by design."
      />

      <section className="section section--alt" aria-labelledby="loc-list-h">
        <div className="container">
          <SectionHeader
            id="loc-list-h"
            label="Locations"
            title="Cities we serve"
            lead="Local market expertise. National reach."
          />
          <div className="grid-3 stagger">
            {locations.map((loc) => (
              <Link key={loc.slug} href={`/locations/${loc.slug}`} className="card flex">
                <div className="card-body">
                  <span className="meta">{loc.region}</span>
                  <h3 className="card-title card-title--sm">
                    {loc.name}{' '}
                    <span className="go" aria-hidden="true">
                      →
                    </span>
                  </h3>
                  <p className="small line-clamp-2">{loc.tagline}</p>
                  <div className="mt-auto pt-2">
                    <TagList items={loc.keyIndustries.slice(0, 3)} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        id="loc-cta-h"
        title="Your city not listed?"
        text="We serve all of Switzerland and neighbouring countries. Get in touch."
        button="Contact us"
      />
    </>
  )
}
