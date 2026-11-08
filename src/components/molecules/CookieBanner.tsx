'use client'

import { useEffect, useState } from 'react'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'

const STORAGE_KEY = 'trident-cookie-consent'

/**
 * Consent notice for the non-essential cookies the Cookie Policy describes.
 * The choice is kept in localStorage; nothing is loaded on the strength of it
 * yet, so declining simply records the decision rather than pretending to
 * switch something off. Rendered after hydration, fixed-position: it never
 * blocks first paint or shifts layout.
 */
export function CookieBanner() {
  const t = useTranslations('ui.cookie')
  const tb = useTranslations('molecules.cookieBanner')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true)
    } catch {
      // private mode or blocked storage — stay silent rather than nag
    }
  }, [])

  function decide(choice: 'accepted' | 'declined') {
    try {
      localStorage.setItem(STORAGE_KEY, choice)
    } catch {
      /* ignore */
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div role="region" aria-label={t('label')} className="cookie">
      <p>
        {tb('text')} <Link href="/cookies">{tb('policy')}</Link>
      </p>
      <div className="row">
        <button type="button" className="btn btn--outline btn--sm" onClick={() => decide('declined')}>
          <span>{tb('decline')}</span>
        </button>
        <button type="button" className="btn btn--primary btn--sm" onClick={() => decide('accepted')}>
          <span>{tb('accept')}</span>
        </button>
      </div>
    </div>
  )
}
