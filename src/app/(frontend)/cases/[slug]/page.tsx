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
    .filter(isCaseStudy)
    .map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const caseStudy = isCaseStudy(slug) ? getCaseBySlug(slug, await getLocale()) : undefined
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
  // Project write-ups live under /projects; next.config redirects their old /cases URLs.
  const caseStudy = isCaseStudy(slug) ? getCaseBySlug(slug, locale) : undefined
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
