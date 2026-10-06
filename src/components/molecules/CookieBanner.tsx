'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'trident-cookie-consent'

/**
 * Consent notice for the non-essential cookies the Cookie Policy describes.
 * The choice is kept in localStorage; nothing is loaded on the strength of it
 * yet, so declining simply records the decision rather than pretending to
 * switch something off.
 */
export function CookieBanner() {
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
    <div
      role="dialog"
      aria-label="Cookie notice"
      className="fixed inset-x-0 bottom-0 z-[70] border-t border-[#E3E5E8] bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[14px] leading-relaxed text-[#4A4F57]">
          We use essential cookies to run this site, and analytics cookies to see which pages
          are read.{' '}
          <Link href="/cookies" className="text-[#2772E0] underline underline-offset-2">
            Cookie Policy
          </Link>
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => decide('declined')}
            className="h-9 rounded-[2px] border border-[#E3E5E8] px-4 text-[14px] font-medium text-[#4A4F57] transition-colors hover:border-[#111318] hover:text-[#111318]"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => decide('accepted')}
            className="h-9 rounded-[2px] bg-[#2772E0] px-4 text-[14px] font-medium text-white transition-colors hover:bg-[#1B57B8]"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
