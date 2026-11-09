'use client'

import { useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'

type Status = 'idle' | 'submitting' | 'success' | 'error' | 'duplicate' | 'rate_limit'

export default function NewsletterSignup() {
  const locale = useLocale()
  const t = useTranslations('molecules.newsletterSignup')
  const [email, setEmail] = useState('')
  const [website, setWebsite] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setStatus('submitting')
    try {
      const res = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), locale, website }),
      })
      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else if (res.status === 409) setStatus('duplicate')
      else if (res.status === 429) setStatus('rate_limit')
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return <p className="text-sm text-emerald-400 font-medium py-2">{t('success')}</p>
  }

  const feedback =
    status === 'duplicate'
      ? t('duplicate')
      : status === 'rate_limit'
        ? t('rateLimit')
        : status === 'error'
          ? t('error')
          : null

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-2">
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        tabIndex={-1}
        aria-hidden="true"
        style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', height: 0 }}
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t('placeholder')}
        autoComplete="email"
        className="w-full rounded-[2px] border border-white/10 bg-white/5 px-3 py-2.5 text-[13px] text-white placeholder:text-white/30 outline-none transition-colors focus:border-white/25 min-h-[40px]"
      />
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full rounded-[2px] bg-[#2772E0] hover:bg-[#1d5fc4] disabled:opacity-50 px-3 py-2.5 text-[13px] font-medium text-white transition-colors min-h-[40px]"
      >
        {status === 'submitting' ? '...' : t('submit')}
      </button>
      {feedback && <p className="text-xs text-white/50 mt-1">{feedback}</p>}
    </form>
  )
}
