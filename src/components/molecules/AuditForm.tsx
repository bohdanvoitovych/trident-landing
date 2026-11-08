'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'

// Topic options carried over from the previous enquiry form.
const TOPICS = ['aiAgents', 'logistics', 'iot', 'businessSystem', 'cto'] as const

type Values = {
  name: string
  company: string
  email: string
  phone: string
  message: string
  consent: boolean
}

type Props = {
  /** 'dark' inside the footer, 'light' on the Contact page. */
  tone?: 'dark' | 'light'
  submitLabel?: string
}

/**
 * Free-audit enquiry. Posts to the existing /api/contact route, which stores
 * the lead in Payload (and notifies via Resend there). Topic chips are optional
 * and always include "Other / not sure yet".
 */
export function AuditForm({ tone = 'dark', submitLabel }: Props) {
  const t = useTranslations('ui.audit')
  const tf = useTranslations('molecules.auditForm')
  const [topic, setTopic] = useState<number | null>(null)
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Values>({ defaultValues: { consent: false } })

  const topics = [...TOPICS.map((k) => tf(`topics.${k}`)), t('other')]

  const onSubmit = async (v: Values) => {
    setState('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: v.name,
          email: v.email,
          company: v.company,
          phone: v.phone,
          subject: topic === null ? 'general' : topics[topic],
          message: v.message,
        }),
      })
      if (!res.ok) throw new Error(String(res.status))
      setState('done')
      reset()
      setTopic(null)
    } catch {
      setState('error')
    }
  }

  const cls = tone === 'dark' ? 'audit-form' : 'light-form'

  if (state === 'done') {
    return (
      <div className={cls} aria-live="polite">
        <div className="form-done">
          <span className="ok" aria-hidden="true" style={{ color: '#fff' }}>
            ✓
          </span>
          <p>{t('done')}</p>
          <button type="button" className="btn btn--outline" style={{ alignSelf: 'flex-start' }} onClick={() => setState('idle')}>
            <span>{t('sendAnother')}</span>
          </button>
        </div>
      </div>
    )
  }

  const err = (k: keyof Values) => (errors[k] ? `${k}-err` : undefined)

  return (
    <form className={cls} onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="grid-2 audit-pair">
        <label className="field">
          {t('name')}
          <input className="input" type="text" autoComplete="name" aria-invalid={!!errors.name} aria-describedby={err('name')} {...register('name', { required: true })} />
          {errors.name && <span id="name-err" className="field-error">{t('required')}</span>}
        </label>
        <label className="field">
          {t('company')}
          <input className="input" type="text" autoComplete="organization" {...register('company')} />
        </label>
        <label className="field">
          {t('email')}
          <input
            className="input"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={err('email')}
            {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
          />
          {errors.email && <span id="email-err" className="field-error">{errors.email.type === 'pattern' ? t('invalidEmail') : t('required')}</span>}
        </label>
        <label className="field">
          {t('phone')}
          <input className="input" type="tel" autoComplete="tel" {...register('phone')} />
        </label>
      </div>
      <div className="field">
        <span id="topic-l">
          {t('topic')} <span className="opt">{t('optional')}</span>
        </span>
        <div role="group" aria-labelledby="topic-l" className="chips" style={{ gap: 6 }}>
          {topics.map((label, i) => (
            <button
              key={label}
              type="button"
              className="chip"
              aria-pressed={topic === i}
              onClick={() => setTopic(topic === i ? null : i)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <label className="field">
        {t('message')}
        <textarea
          className="input"
          rows={3}
          placeholder={t('messagePlaceholder')}
          aria-invalid={!!errors.message}
          aria-describedby={err('message')}
          {...register('message', { required: true })}
        />
        {errors.message && <span id="message-err" className="field-error">{t('required')}</span>}
      </label>
      <label className="consent">
        <input type="checkbox" aria-invalid={!!errors.consent} aria-describedby={err('consent')} {...register('consent', { required: true })} />
        <span>{tf('consent')}</span>
      </label>
      {errors.consent && <span id="consent-err" className="field-error">{t('consentRequired')}</span>}
      {state === 'error' && (
        <p className="form-err" role="alert">
          {t('error')}
        </p>
      )}
      <div>
        <button type="submit" className={cn('btn btn--primary')} disabled={state === 'sending'}>
          <span>
            {state === 'sending' ? t('sending') : (submitLabel ?? tf('submit'))}
            <i className="arr" aria-hidden="true">
              →
            </i>
          </span>
        </button>
      </div>
    </form>
  )
}
