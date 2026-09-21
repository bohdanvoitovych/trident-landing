import { notFound } from 'next/navigation'
import { getLocale } from 'next-intl/server'
import { CasePage } from '@/components/templates/CasePage'
import { getCaseBySlug, getCaseSlugs } from '@/data/cases'
import { buildMetadata } from '@/lib/metadata'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getCaseSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const caseStudy = getCaseBySlug(slug)
  if (!caseStudy) return {}
  const locale = await getLocale()
  return buildMetadata({
    title: caseStudy.meta.title,
    description: caseStudy.meta.description,
    path: `/cases/${slug}`,
    locale,
  })
}

export default async function CaseSlugPage({ params }: Props) {
  const { slug } = await params
  const caseStudy = getCaseBySlug(slug)
  if (!caseStudy) notFound()

  return <CasePage caseStudy={caseStudy} />
}
