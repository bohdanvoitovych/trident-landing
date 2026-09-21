import { notFound } from 'next/navigation'
import { getLocale } from 'next-intl/server'
import { ServicePage } from '@/components/templates/ServicePage'
import { getServiceBySlug, getServiceSlugs } from '@/data/services'
import { buildMetadata } from '@/lib/metadata'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}
  const locale = await getLocale()
  return buildMetadata({
    title: service.meta.title,
    description: service.meta.description,
    path: `/services/${slug}`,
    locale,
  })
}

export default async function ServiceSlugPage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  return <ServicePage service={service} />
}
