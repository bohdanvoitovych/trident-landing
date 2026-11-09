'use client'

import { useState } from 'react'
import { getPathname, usePathname } from '@/i18n/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { routing } from '@/i18n/routing'
import { cn } from '@/lib/utils'

/**
 * Segmented EN·DE·FR·IT. Loads the same page under the other locale's prefix
 * (/de/…, English unprefixed).
 *
 * This is a full page load on purpose. The app has no [locale] segment: the
 * prefix is stripped by a rewrite in next.config.mjs, so /about and /de/about
 * are the same route to the client router. A soft navigation keeps the
 * already-rendered layout and page, and only the URL changes. The cookie is
 * set first so the middleware does not send an unprefixed (English) URL back
 * to the previous locale.
 */
export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale()
  const t = useTranslations('ui')
  const pathname = usePathname()
  const [pending, setPending] = useState(false)

  const setLocale = (next: string) => {
    if (next === locale) return
    setPending(true)
    document.cookie = `NEXT_LOCALE=${next}; path=/; SameSite=Lax`
    const href = getPathname({ href: pathname, locale: next })
    window.location.assign(`${href}${window.location.search}${window.location.hash}`)
  }

  return (
    <div role="group" aria-label={t('siteLanguage')} aria-busy={pending || undefined} className={cn('seg-group lang-switch', className)}>
      {routing.locales.map((code) => (
        <button
          key={code}
          type="button"
          lang={code}
          className="seg"
          aria-pressed={code === locale}
          onClick={() => setLocale(code)}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
