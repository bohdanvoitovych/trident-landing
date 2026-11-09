import { useLocale, useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { getLocale, getTranslations } from 'next-intl/server'
import { getLocations } from '@/data/locations'
import { buildMetadata } from '@/lib/metadata'
import { pageName } from '@/lib/schema'
import PageJsonLd from '@/components/seo/PageJsonLd'
import { PageHero } from '@/components/molecules/PageHero'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { CtaBand, TagList } from '@/components/molecules/CatalogBlocks'

export const revalidate = 86400

export async function generateMetadata() {
  const locale = await getLocale()
  const t = await getTranslations({ locale, namespace: 'pages.locations' })
  return buildMetadata({
    title: t('metaTitle'),
    description: t('metaDescription'),
    path: '/locations',
    locale,
  })
}

export default function LocationsPage() {
  const locale = useLocale()
  const locations = getLocations(locale)
  const t = useTranslations('pages.locations')
  return (
    <>
      <PageJsonLd type="CollectionPage" path="/locations" name={pageName(t('metaTitle'))} description={t('metaDescription')} />
      <PageHero
        crumbs={[{ name: t('crumb'), href: '/locations' }]}
        label={t('label')}
        title={t('title')}
        lead={t('lead')}
      />

      <section className="section section--alt" aria-labelledby="loc-list-h">
        <div className="container">
          <SectionHeader
            id="loc-list-h"
            label={t('crumb')}
            title={t('listTitle')}
            lead={t('listLead')}
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
        title={t('ctaTitle')}
        text={t('ctaText')}
        button={t('ctaButton')}
      />
    </>
  )
}
