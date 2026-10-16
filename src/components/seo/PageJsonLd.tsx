import { getLocale } from 'next-intl/server'
import JsonLd from '@/components/seo/JsonLd'
import { pageSchemas } from '@/data/page-schema'
import { webPageSchemas } from '@/lib/schema'

// JSON-LD for a page listed in src/data/page-schema.ts. The breadcrumb takes every
// parent path that is listed there too (/solutions/websites/x -> Solutions, Website Development).
export default async function PageJsonLd({ path }: { path: string }) {
  const page = pageSchemas[path]
  if (!page) return null
  const locale = await getLocale()
  const parts = path.split('/').filter(Boolean)
  const trail = parts
    .slice(0, -1)
    .map((_, i) => `/${parts.slice(0, i + 1).join('/')}`)
    .filter((p) => pageSchemas[p])
    .map((p) => ({ name: pageSchemas[p].name, path: p }))
  return <JsonLd data={webPageSchemas({ ...page, path }, trail, locale)} />
}
