'use client'

import { useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { routing } from '@/i18n/routing'
import { cn } from '@/lib/utils'

/**
 * Segmented EN·DE·FR·IT. Writes the next-intl locale cookie and re-renders
 * (localePrefix is 'never', so the URL does not change). Never rotates by itself.
 */
export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale()
  const t = useTranslations('ui')
  const router = useRouter()
  const [pending, startTransition] = useTransition()

  const setLocale = (next: string) => {
    if (next === locale) return
    document.cookie = `NEXT_LOCALE=${next}; path=/; max-age=31536000; SameSite=Lax`
    startTransition(() => router.refresh())
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
