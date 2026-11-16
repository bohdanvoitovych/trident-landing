import { notFound } from 'next/navigation'
import { getLocale } from 'next-intl/server'
import { CasePage } from '@/components/templates/CasePage'
import { caseImage, getCaseBySlug, getCaseLocales, getCaseSlugs, isCaseStudy } from '@/data/cases'
import JsonLd from '@/components/seo/JsonLd'
import { buildMetadata } from '@/lib/metadata'
import { caseStudySchemas } from '@/lib/schema'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getCaseSlugs()
    .filter((s) => !isCaseStudy(s))
    .map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const caseStudy = isCaseStudy(slug) ? undefined : getCaseBySlug(slug, await getLocale())
  if (!caseStudy) return {}
  const locale = await getLocale()
  return buildMetadata({
    title: caseStudy.meta.title,
    description: caseStudy.meta.description,
    path: `/projects/${slug}`,
    locale,
    availableLocales: getCaseLocales(slug),
  })
}

export default async function ProjectSlugPage({ params }: Props) {
  const { slug } = await params
  const locale = await getLocale()
  // Case studies live under /cases.
  const caseStudy = isCaseStudy(slug) ? undefined : getCaseBySlug(slug, locale)
  if (!caseStudy) notFound()

  return (
    <>
      <JsonLd
        // CasePage's hero already emits the BreadcrumbList, so only the Article goes here.
        data={caseStudySchemas(
          {
            slug,
            title: caseStudy.hero.title,
            description: caseStudy.meta.description,
            image: caseImage(caseStudy),
            publishedAt: caseStudy.publishedAt,
          },
          locale,
        ).slice(0, 1)}
      />
      <CasePage caseStudy={caseStudy} />
    </>
  )
}
