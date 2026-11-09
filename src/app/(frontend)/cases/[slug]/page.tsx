import { notFound } from 'next/navigation'
import { getLocale } from 'next-intl/server'
import { CasePage } from '@/components/templates/CasePage'
import { getCaseBySlug, getCaseLocales, getCaseSlugs } from '@/data/cases'
import JsonLd from '@/components/seo/JsonLd'
import { buildMetadata } from '@/lib/metadata'
import { caseStudySchemas } from '@/lib/schema'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getCaseSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const caseStudy = getCaseBySlug(slug, await getLocale())
  if (!caseStudy) return {}
  const locale = await getLocale()
  return buildMetadata({
    title: caseStudy.meta.title,
    description: caseStudy.meta.description,
    path: `/cases/${slug}`,
    locale,
    availableLocales: getCaseLocales(slug),
  })
}

export default async function CaseSlugPage({ params }: Props) {
  const { slug } = await params
  const locale = await getLocale()
  const caseStudy = getCaseBySlug(slug, locale)
  if (!caseStudy) notFound()

  return (
    <>
      <JsonLd
        data={caseStudySchemas(
          {
            slug,
            title: caseStudy.hero.title,
            description: caseStudy.meta.description,
            image: caseStudy.hero.image,
            publishedAt: caseStudy.publishedAt,
          },
          locale,
        )}
      />
      <CasePage caseStudy={caseStudy} />
    </>
  )
}
