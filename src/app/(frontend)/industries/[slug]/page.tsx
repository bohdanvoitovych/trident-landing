import { notFound } from 'next/navigation'
import { getLocale } from 'next-intl/server'
import { IndustryPage } from '@/components/templates/IndustryPage'
import { getIndustrySlugs, getIndustryBySlug } from '@/data/industries'
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
  const industry = getIndustryBySlug(slug)
  if (!industry) return {}
  const locale = await getLocale()
  return buildMetadata({
    title: industry.meta.title,
    description: industry.meta.description,
    path: `/industries/${slug}`,
    locale,
  })
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params
  const industry = getIndustryBySlug(slug)
  if (!industry) notFound()
  const locale = await getLocale()
  return (
    <>
      <JsonLd data={industryPageSchemas(industry, locale)} />
      <IndustryPage industry={industry} />
    </>
  )
}
