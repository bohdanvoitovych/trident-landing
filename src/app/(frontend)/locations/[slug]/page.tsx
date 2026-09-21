import { notFound } from 'next/navigation'
import { getLocale } from 'next-intl/server'
import { LocationPage } from '@/components/templates/LocationPage'
import { getLocationSlugs, getLocationBySlug } from '@/data/locations'
import { buildMetadata } from '@/lib/metadata'
import JsonLd from '@/components/seo/JsonLd'
import { locationPageSchemas } from '@/lib/schema'

export const revalidate = 86400

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getLocationSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const location = getLocationBySlug(slug)
  if (!location) return {}
  const locale = await getLocale()
  return buildMetadata({
    title: location.meta.title,
    description: location.meta.description,
    path: `/locations/${slug}`,
    locale,
  })
}

export default async function LocationDetailPage({ params }: Props) {
  const { slug } = await params
  const location = getLocationBySlug(slug)
  if (!location) notFound()
  const locale = await getLocale()
  return (
    <>
      <JsonLd data={locationPageSchemas(location, locale)} />
      <LocationPage location={location} />
    </>
  )
}
