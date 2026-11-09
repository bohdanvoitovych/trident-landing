import { notFound } from 'next/navigation'
import { getLocale } from 'next-intl/server'
import { IndustryPage } from '@/components/templates/IndustryPage'
import { getIndustrySlugs, getIndustryBySlug, getIndustryLocales } from '@/data/industries'
import { buildMetadata } from '@/lib/metadata'
import JsonLd from '@/components/seo/JsonLd'
import { industryPageSchemas } from '@/lib/schema'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getIndustrySlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const industry = getIndustryBySlug(slug, await getLocale())
  if (!industry) return {}
  const locale = await getLocale()
  return buildMetadata({
    title: industry.meta.title,
    description: industry.meta.description,
    path: `/industries/${slug}`,
    locale,
    availableLocales: getIndustryLocales(slug),
  })
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params
  const industry = getIndustryBySlug(slug, await getLocale())
  if (!industry) notFound()
  const locale = await getLocale()
  return (
    <>
      {/* The template's PageHero already emits the BreadcrumbList. */}
      <JsonLd data={industryPageSchemas(industry, locale).slice(0, 1)} />
      <IndustryPage industry={industry} />
    </>
  )
}
