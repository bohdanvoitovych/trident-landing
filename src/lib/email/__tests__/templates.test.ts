import { describe, it, expect, beforeEach, vi } from 'vitest'
import { renderDemoConfirmation } from '../templates/demo-confirmation'
import { renderDemoNotification } from '../templates/demo-notification'
import { renderNewsletterWelcome } from '../templates/newsletter-welcome'
import type { ContactFormData } from '../types'

const mockContact: ContactFormData = {
  name: 'Jean Dupont',
  email: 'jean@example.com',
  company: 'HealthCorp SA',
  phone: '+41 79 123 45 67',
  subject: 'aiAgents',
  message: 'We need an audit of our scheduling process.',
  locale: 'fr',
}

beforeEach(() => {
  vi.stubEnv('NEXT_PUBLIC_SITE_URL', 'https://trident-software.ch')
})

describe('renderDemoConfirmation', () => {
  it('is localized with en fallback', () => {
    expect(renderDemoConfirmation({ ...mockContact, locale: 'en' }).subject).toBe(
      'We received your workshop request - Trident Software',
    )
    expect(renderDemoConfirmation({ ...mockContact, locale: 'de' }).html).toContain('lang="de"')
    expect(renderDemoConfirmation({ ...mockContact, locale: 'it' }).text).toContain('un giorno lavorativo')
    expect(renderDemoConfirmation({ ...mockContact, locale: 'xx' }).subject).toContain('We received')
    expect(renderDemoConfirmation({ ...mockContact, locale: undefined }).subject).toContain('We received')
  })

  it('html contains name, fields and Trident branding', () => {
    const { html, text } = renderDemoConfirmation(mockContact)
    expect(html).toContain('Jean Dupont')
    expect(html).toContain('jean@example.com')
    expect(html).toContain('HealthCorp SA')
    expect(html).toContain('+41 79 123 45 67')
    expect(html).toContain('scheduling process')
    expect(html).toContain('trident-software.ch')
    expect(html).toContain('Trident Software')
    expect(html).not.toMatch(/8Move|8move/)
    expect(text).toContain('Jean Dupont')
    expect(text).not.toMatch(/8Move|8move/)
  })

  it('shows the topic label in the client locale, not the key', () => {
    const { html } = renderDemoConfirmation({ ...mockContact, locale: 'fr' })
    expect(html).not.toContain('aiAgents')
  })

  it('escapes user input', () => {
    const { html } = renderDemoConfirmation({ ...mockContact, name: '<b>x</b>' })
    expect(html).not.toContain('<b>x</b>')
  })
})

describe('renderDemoNotification', () => {
  it('subject has name and company', () => {
    expect(renderDemoNotification(mockContact).subject).toBe('New workshop request from Jean Dupont - HealthCorp SA')
  })

  it('subject without company', () => {
    expect(renderDemoNotification({ ...mockContact, company: undefined }).subject).toBe(
      'New workshop request from Jean Dupont',
    )
  })

  it('shows English topic label', () => {
    const { html, text } = renderDemoNotification(mockContact)
    expect(html).toContain('AI agents &amp; automation')
    expect(text).toContain('Topic: AI agents & automation')
    expect(renderDemoNotification({ ...mockContact, subject: 'other' }).text).toContain('Other / not sure yet')
  })

  it('contains fields, phone, locale, timestamp', () => {
    const { html } = renderDemoNotification(mockContact)
    expect(html).toContain('jean@example.com')
    expect(html).toContain('HealthCorp SA')
    expect(html).toContain('+41 79 123 45 67')
    expect(html).toContain('Submitted at')
    expect(html).toContain('fr')
    expect(html).not.toMatch(/Payload|8Move|8move/)
  })

  it('adminSaveFailed prefixes subject and text', () => {
    const r = renderDemoNotification(mockContact, { adminSaveFailed: true })
    expect(r.subject.startsWith('⚠ ')).toBe(true)
    expect(r.text.split('\n')[0]).toBe('⚠ Not saved to admin — add this lead manually.')
    expect(r.html).toContain('Not saved to admin')
  })

  it('no warning by default', () => {
    const r = renderDemoNotification(mockContact)
    expect(r.subject.startsWith('⚠')).toBe(false)
    expect(r.text).not.toContain('Not saved to admin')
  })

  it('renders traffic source with clickable URLs', () => {
    const { html, text } = renderDemoNotification({
      ...mockContact,
      landingPage: 'https://trident-software.ch/fr/solutions?utm_source=linkedin',
      referrer: 'https://www.linkedin.com/feed/',
      utmSource: 'linkedin',
      utmCampaign: 'q3',
    })
    expect(html).toContain('Traffic source')
    expect(html).toContain('href="https://www.linkedin.com/feed/"')
    expect(html).toContain('UTM campaign')
    expect(text).toContain('UTM source: linkedin')
  })

  it('omits traffic source and empty phone', () => {
    const { html, text } = renderDemoNotification({ ...mockContact, phone: '' })
    expect(html).not.toContain('Traffic source')
    expect(text).not.toContain('Traffic source')
    expect(html).not.toContain('Phone')
  })
})

describe('renderNewsletterWelcome', () => {
  const unsubscribeUrl = 'https://trident-software.ch/api/newsletter/unsubscribe?token=abc'

  it('renders per locale with unsubscribe link', () => {
    for (const locale of ['en', 'de', 'fr', 'it']) {
      const r = renderNewsletterWelcome({ email: 'a@b.ch', locale, unsubscribeUrl })
      expect(r.html).toContain(`lang="${locale}"`)
      expect(r.html).toContain(unsubscribeUrl)
      expect(r.text).toContain(unsubscribeUrl)
      expect(r.subject + r.text).not.toMatch(/8Move/)
    }
  })

  it('falls back to en', () => {
    const r = renderNewsletterWelcome({ email: 'a@b.ch', locale: 'es', unsubscribeUrl })
    expect(r.subject).toContain('Trident')
    expect(r.html).toContain('lang="en"')
  })
})
