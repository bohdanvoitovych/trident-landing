'use client'

import { useLocale } from 'next-intl'
import { cn } from '@/lib/utils'

const PLACE_QUERY = "Trident Software Sarl, Rue de l'Industrie 23, 1950 Sion, Switzerland"

/** Google Business Profile id for Trident Software Sàrl — links straight to the listing. */
const PLACE_CID = '178522290307983294'

const ZOOM = 16

/**
 * Keyless Google Maps embed; `t=h` is satellite with street labels.
 * Querying by name pins the business itself rather
 * than a bare coordinate; the Embed API alternative would need a billing key.
 */
const embedSrc = (locale: string) =>
  `https://www.google.com/maps?q=${encodeURIComponent(PLACE_QUERY)}&t=h&z=${ZOOM}&hl=${locale}&output=embed`

const FULL_MAP_HREF = `https://www.google.com/maps?cid=${PLACE_CID}`

export default function OfficeMap({ className = '' }: { className?: string }) {
  const locale = useLocale()

  return (
    <div className={cn('card card--flat flex flex-col overflow-hidden', className)}>
      <iframe
        src={embedSrc(locale)}
        loading="lazy"
        title="Trident Software office in Sion"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        className="block min-h-[280px] w-full flex-1 border-0 bg-alt"
      />
      <a
        href={FULL_MAP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className="text-link justify-center border-t border-line bg-alt px-3 py-3 text-[14px] transition-colors hover:bg-wash"
      >
        Open in Google Maps
        <span className="go" aria-hidden="true">
          ↗
        </span>
      </a>
    </div>
  )
}
