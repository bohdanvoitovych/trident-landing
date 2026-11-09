import { notFound } from 'next/navigation'
import { getLocale } from 'next-intl/server'
import { ServicePage } from '@/components/templates/ServicePage'
import { ServiceDetailPage } from '@/components/templates/ServiceDetailPage'
import { getServiceBySlug, getServiceLocales, getServiceSlugs } from '@/data/services'
import JsonLd from '@/components/seo/JsonLd'
import { buildMetadata } from '@/lib/metadata'
import { servicePageSchema } from '@/lib/schema'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const locale = await getLocale()
  const service = getServiceBySlug(slug, locale)
  if (!service) return {}
  return buildMetadata({
    title: service.meta.title,
    description: service.meta.description,
    path: `/services/${slug}`,
    locale,
    availableLocales: getServiceLocales(slug),
  })
}

export default async function ServiceSlugPage({ params }: Props) {
  const { slug } = await params
  const locale = await getLocale()
  const service = getServiceBySlug(slug, locale)
  if (!service) notFound()

  const { detail } = service
  return (
    <>
      <JsonLd data={servicePageSchema({ slug, title: service.title, description: service.description }, locale)} />
      {detail ? <ServiceDetailPage service={{ ...service, detail }} /> : <ServicePage service={service} />}
    </>
  )
}
