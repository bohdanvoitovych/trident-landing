'use client'

import { useLocale } from 'next-intl'
import { MapPin } from 'lucide-react'

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
    <div
      className={`overflow-hidden rounded-[2px] border border-[#E3E5E8] flex flex-col ${className}`}
    >
      <iframe
        src={embedSrc(locale)}
        loading="lazy"
        title="Trident Software office in Sion"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        className="block w-full flex-1 min-h-[280px]"
      />
      <a
        href={FULL_MAP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-1.5 border-t border-[#E3E5E8] bg-[#F6F7F8] px-3 py-2.5 text-sm font-medium text-[#2772E0] transition-colors hover:bg-[#EEF3FD]"
      >
        <MapPin className="h-4 w-4" aria-hidden="true" />
        Open in Google Maps
      </a>
    </div>
  )
}
