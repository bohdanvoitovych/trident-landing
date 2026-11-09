import { getLocale } from 'next-intl/server'
import { webPageSchemas, type PageSchemaType } from '@/lib/schema'
import JsonLd from './JsonLd'

/** WebPage-family JSON-LD plus a breadcrumb for a page with no data module of its own. */
export default async function PageJsonLd(props: {
  type: PageSchemaType
  path: string
  name: string
  description: string
}) {
  const locale = await getLocale()
  const { type, path, name, description } = props
  return <JsonLd data={webPageSchemas({ type, path, name, description }, locale)} />
}
