'use client'

import { useEffect, useState } from 'react'
import { getConsent } from '@/components/molecules/CookieBanner'

/**
 * Loads the Umami tracking script, gated on the existing cookie-consent
 * mechanism (same `cookie-consent-update` event CookieConsentBanner already
 * dispatches). Config comes from /api/umami-config, not env vars baked into
 * the bundle — see that route for why. Renders nothing; injects a real
 * <script> tag into <head> once consent + config are both present.
 */
export default function UmamiScript() {
  const [allowed, setAllowed] = useState(() => getConsent()?.analytics === true)

  useEffect(() => {
    const onConsentUpdate = (e: Event) => {
      const detail = (e as CustomEvent<{ analytics: boolean }>).detail
      setAllowed(detail?.analytics === true)
    }
    window.addEventListener('cookie-consent-update', onConsentUpdate)
    return () => window.removeEventListener('cookie-consent-update', onConsentUpdate)
  }, [])

  useEffect(() => {
    if (!allowed) return
    if (document.querySelector('script[data-umami-src]')) {
      // Script already injected by an earlier mount — if it's already loaded,
      // late consumers of 'umami-ready' (mounted after that) would otherwise
      // never see the event.
      if (window.umami) window.dispatchEvent(new Event('umami-ready'))
      return
    }

    let cancelled = false

    fetch('/api/umami-config')
      .then((res) => (res.ok ? res.json() : null))
      .then((config: { websiteId: string; scriptUrl: string } | null) => {
        if (cancelled || !config) return
        const script = document.createElement('script')
        script.defer = true
        script.src = config.scriptUrl
        script.dataset.websiteId = config.websiteId
        script.dataset.umamiSrc = 'true'
        script.onload = () => window.dispatchEvent(new Event('umami-ready'))
        document.head.appendChild(script)
      })
      .catch(() => {}) // analytics is best-effort, never surface a failure to the visitor

    return () => {
      cancelled = true
    }
  }, [allowed])

  return null
}
