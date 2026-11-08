'use client'

import { useTransition } from 'react'
import { usePathname, useRouter } from '@/i18n/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { routing } from '@/i18n/routing'
import { cn } from '@/lib/utils'

/**
 * Segmented EN·DE·FR·IT. Navigates to the same page under the other locale's
 * prefix (/de/…, English unprefixed). next-intl stores the choice in its cookie.
 */
export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale()
  const t = useTranslations('ui')
  const router = useRouter()
  const pathname = usePathname()
  const [pending, startTransition] = useTransition()

  const setLocale = (next: string) => {
    if (next === locale) return
    startTransition(() => {
      // Pathnames are not localized, so the unprefixed pathname is the route itself.
      router.replace(`${pathname}${window.location.search}`, { locale: next })
    })
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
