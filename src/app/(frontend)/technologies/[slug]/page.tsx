import { notFound } from 'next/navigation'
import { getLocale } from 'next-intl/server'
import { TechnologyPage } from '@/components/templates/TechnologyPage'
import { getTechnologySlugs, getTechnologyBySlug } from '@/data/technologies'
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
  const technology = getTechnologyBySlug(slug)
  if (!technology) return {}
  const locale = await getLocale()
  return buildMetadata({
    title: technology.meta.title,
    description: technology.meta.description,
    path: `/technologies/${slug}`,
    locale,
  })
}

export default async function TechnologyDetailPage({ params }: Props) {
  const { slug } = await params
  const technology = getTechnologyBySlug(slug)
  if (!technology) notFound()
  const locale = await getLocale()
  return (
    <>
      <JsonLd data={technologyPageSchemas(technology, locale)} />
      <TechnologyPage technology={technology} />
    </>
  )
}
