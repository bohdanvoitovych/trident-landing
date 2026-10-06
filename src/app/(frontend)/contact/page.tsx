'use client'

import { useState } from 'react'
import { MapPin, Mail, Phone, Clock, CheckCircle, AlertCircle } from 'lucide-react'
import OfficeMap from '@/components/molecules/OfficeMap'
import { Button } from '@/components/atoms/button'
import { SectionHeader } from '@/components/molecules/SectionHeader'

const SUBJECTS = [
  { value: 'general', label: 'General inquiry' },
  { value: 'project', label: 'Project proposal' },
  { value: 'quote', label: 'Get a quote' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'other', label: 'Other' },
]

const contactInfo = [
  {
    icon: MapPin,
    label: 'Office',
    value: "Rue de l'Industrie 23, 1950 Sion, Valais",
    href: 'https://www.google.com/maps?cid=178522290307983294',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@trident-software.ch',
    href: 'mailto:info@trident-software.ch',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+41 79 745 44 29',
    href: 'tel:+41797454429',
  },
  {
    icon: Clock,
    label: 'Response time',
    value: 'Within 24 business hours',
  },
]

// The Cloudflare demo ships without Payload, so a submission has nowhere to go.
const IS_DEMO = process.env.NEXT_PUBLIC_DEMO_MODE === '1'

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: 'general',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'demo'>(
    'idle',
  )

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (IS_DEMO) {
      setStatus('demo')
      return
    }
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', company: '', phone: '', subject: 'general', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="dark-section relative overflow-hidden py-24 md:py-32">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow mb-5">Contact</p>
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl mb-6 leading-[1.1] text-white">
            Let&apos;s talk about{' '}
            <span className="gradient-text">your project</span>
          </h1>
          <p className="text-xl text-white/60 leading-relaxed max-w-2xl">
            Tell us what you&apos;re building. We&apos;ll respond within 24 hours with honest
            feedback and a rough scope estimate.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left: contact info */}
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Get in touch"
                title="We respond fast"
                subtitle="Senior engineers read every inquiry. No sales scripts, no account managers in between."
              />
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="light-card rounded-[3px] p-5 flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[2px] bg-primary/10">
                      <item.icon size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="font-medium text-sm mt-0.5 block hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium text-sm mt-0.5">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>


              <div className="light-card rounded-[3px] p-5">
                <p className="text-sm font-semibold mb-2">Typical next steps</p>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  {[
                    'We review your inquiry',
                    'Discovery call (30 min)',
                    'Scope + SOW in 3–5 days',
                    'Kickoff',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs text-primary font-bold">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-7">
              {status === 'success' ? (
                <div className="light-card rounded-[3px] p-12 flex flex-col items-center gap-4 text-center">
                  <CheckCircle size={48} className="text-primary" />
                  <h2 className="text-2xl font-bold">Message received!</h2>
                  <p className="text-muted-foreground max-w-sm">
                    We&apos;ll get back to you within 24 business hours. Check your inbox.
                  </p>
                  <Button variant="outline" onClick={() => setStatus('idle')}>
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="light-card rounded-[3px] p-8 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name <span className="text-primary">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full rounded-[2px] border border-[#E3E5E8] bg-white px-4 py-2.5 text-sm text-[#111318] placeholder:text-[#6B7078] focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email <span className="text-primary">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full rounded-[2px] border border-[#E3E5E8] bg-white px-4 py-2.5 text-sm text-[#111318] placeholder:text-[#6B7078] focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="company" className="text-sm font-medium">
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Acme AG"
                        className="w-full rounded-[2px] border border-[#E3E5E8] bg-white px-4 py-2.5 text-sm text-[#111318] placeholder:text-[#6B7078] focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+41 79 123 45 67"
                        className="w-full rounded-[2px] border border-[#E3E5E8] bg-white px-4 py-2.5 text-sm text-[#111318] placeholder:text-[#6B7078] focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full rounded-[2px] border border-[#E3E5E8] bg-white px-4 py-2.5 text-sm text-[#111318] focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    >
                      {SUBJECTS.map((s) => (
                        <option key={s.value} value={s.value}>
                          {s.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your project, timeline, and what you need help with..."
                      className="w-full rounded-[2px] border border-[#E3E5E8] bg-white px-4 py-2.5 text-sm text-[#111318] placeholder:text-[#6B7078] focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    />
                  </div>

                  {status === 'demo' && (
                    <div className="flex items-center gap-2 rounded-[2px] border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-500">
                      <AlertCircle size={14} />
                      Demo site — the contact form is switched off.
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="flex items-center gap-2 rounded-[2px] border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                      <AlertCircle size={14} />
                      Something went wrong. Please try again or email us directly.
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    disabled={status === 'loading'}
                    className="w-full"
                  >
                    {status === 'loading' ? 'Sending...' : 'Send message'}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form you agree to our{' '}
                    <a href="/privacy" className="underline hover:text-foreground">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Where we are — full width, so the map is actually legible. */}
      <section className="section-alt border-t border-[#E3E5E8]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <p className="eyebrow mb-3">Where we are</p>
              <h2 className="text-heading text-[#111318]">Sion, Valais</h2>
            </div>
            <p className="text-[#4A4F57] max-w-sm">
              Rue de l&apos;Industrie 23, 1950 Sion — ten minutes from the station, in the
              HES-SO Valais-Wallis district.
            </p>
          </div>
          <OfficeMap className="h-[420px]" />
        </div>
      </section>
    </div>
  )
}
