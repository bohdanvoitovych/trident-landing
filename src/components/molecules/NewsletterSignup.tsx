'use client'

import { useState } from 'react'
import { useLocale } from 'next-intl'

type Status = 'idle' | 'submitting' | 'success' | 'error' | 'duplicate' | 'rate_limit'

const LABELS = {
  en: {
    placeholder: 'Your email address',
    submit: 'Subscribe',
    success: "You're subscribed!",
    error: 'Something went wrong. Try again.',
    duplicate: 'Already subscribed.',
    rate_limit: 'Too many requests. Try later.',
  },
  de: {
    placeholder: 'Ihre E-Mail-Adresse',
    submit: 'Abonnieren',
    success: 'Erfolgreich abonniert!',
    error: 'Fehler aufgetreten. Versuchen Sie es erneut.',
    duplicate: 'Bereits abonniert.',
    rate_limit: 'Zu viele Anfragen. Versuchen Sie es später.',
  },
  fr: {
    placeholder: 'Votre adresse e-mail',
    submit: "S'abonner",
    success: 'Abonnement confirmé !',
    error: 'Une erreur est survenue. Réessayez.',
    duplicate: 'Déjà abonné.',
    rate_limit: 'Trop de requêtes. Réessayez plus tard.',
  },
  it: {
    placeholder: 'Il tuo indirizzo e-mail',
    submit: 'Iscriviti',
    success: 'Iscritto con successo!',
    error: 'Qualcosa è andato storto. Riprova.',
    duplicate: 'Già iscritto.',
    rate_limit: 'Troppe richieste. Riprova più tardi.',
  },
}

export default function NewsletterSignup() {
  const locale = useLocale() as keyof typeof LABELS
  const l = LABELS[locale] ?? LABELS.en
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
    return <p className="text-sm text-emerald-400 font-medium py-2">{l.success}</p>
  }

  const feedback =
    status === 'duplicate'
      ? l.duplicate
      : status === 'rate_limit'
        ? l.rate_limit
        : status === 'error'
          ? l.error
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
        placeholder={l.placeholder}
        autoComplete="email"
        className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-[13px] text-white placeholder:text-white/30 outline-none transition-colors focus:border-white/25 min-h-[40px]"
      />
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full rounded-lg bg-[#2772E0] hover:bg-[#1d5fc4] disabled:opacity-50 px-3 py-2.5 text-[13px] font-medium text-white transition-colors min-h-[40px]"
      >
        {status === 'submitting' ? '...' : l.submit}
      </button>
      {feedback && <p className="text-xs text-white/50 mt-1">{feedback}</p>}
    </form>
  )
}
