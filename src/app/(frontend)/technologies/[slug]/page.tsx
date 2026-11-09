import { notFound } from 'next/navigation'
import { getLocale } from 'next-intl/server'
import { TechnologyPage } from '@/components/templates/TechnologyPage'
import { getTechnologySlugs, getTechnologyBySlug, getTechnologyLocales } from '@/data/technologies'
import { buildMetadata } from '@/lib/metadata'
import JsonLd from '@/components/seo/JsonLd'
import { technologyPageSchemas } from '@/lib/schema'

export const revalidate = 86400

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getTechnologySlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const technology = getTechnologyBySlug(slug, await getLocale())
  if (!technology) return {}
  const locale = await getLocale()
  return buildMetadata({
    title: technology.meta.title,
    description: technology.meta.description,
    path: `/technologies/${slug}`,
    locale,
    availableLocales: getTechnologyLocales(slug),
  })
}

export default async function TechnologyDetailPage({ params }: Props) {
  const { slug } = await params
  const technology = getTechnologyBySlug(slug, await getLocale())
  if (!technology) notFound()
  const locale = await getLocale()
  return (
    <>
      {/* The template's PageHero already emits the BreadcrumbList. */}
      <JsonLd data={technologyPageSchemas(technology, locale).slice(0, 1)} />
      <TechnologyPage technology={technology} />
    </>
  )
}
