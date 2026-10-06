import { getLocale } from 'next-intl/server'
import { buildMetadata } from '@/lib/metadata'

// The page itself is a client component (the form holds state), so it cannot
// export metadata. This server layout supplies the canonical, hreflang and
// Open Graph tags the rest of the site already has.
export async function generateMetadata() {
  const locale = await getLocale()
  return buildMetadata({
    title: 'Contact | Trident Software',
    description:
      'Talk to Trident Software in Sion, Valais. Book a free 45-minute audit of your operations and the systems behind them.',
    path: '/contact',
    locale,
  })
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
