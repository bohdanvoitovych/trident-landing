import { getLocale, getTranslations } from 'next-intl/server'
import { buildMetadata } from '@/lib/metadata'

// The page itself is a client component (the form holds state), so it cannot
// export metadata. This server layout supplies the canonical, hreflang and
// Open Graph tags the rest of the site already has.
export async function generateMetadata() {
  const locale = await getLocale()
  const t = await getTranslations({ locale, namespace: 'pages.contact.meta' })
  return buildMetadata({
    title: t('title'),
    description: t('description'),
    path: '/contact',
    locale,
  })
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
