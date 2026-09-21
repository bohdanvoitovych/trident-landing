import Link from 'next/link'
import { ArrowRight, CheckCircle, Zap } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/atoms/button'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { CaseCard } from '@/components/molecules/CaseCard'
import { cases } from '@/data/cases'
import type { ServiceData } from '@/data/services'

type Props = {
  service: ServiceData
}

export function ServicePage({ service }: Props) {
  const t = useTranslations('services')
  const relatedCases = cases.filter((c) => service.relatedCases.includes(c.slug))

  return (
    <div className="flex flex-col">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="dark-section relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 glow-hero pointer-events-none opacity-60" />
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow mb-5">Service</p>
            <h1 className="text-5xl font-bold tracking-tight md:text-6xl mb-5 leading-[1.1] text-white">
              {service.title}
            </h1>
            <p className="text-xl text-[#2772E0] font-medium mb-5">{service.tagline}</p>
            <p className="text-[18px] text-white/60 leading-relaxed mb-8 max-w-2xl">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="gradient" size="lg" asChild>
                <Link href="/contact">
                  Get a free quote <ArrowRight size={18} />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/[0.12] text-white hover:bg-white/[0.06] bg-transparent"
                asChild
              >
                <Link href="/cases">See our projects</Link>
              </Button>
            </div>
          </div>

          {/* Feature bullet preview */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-2xl">
            {service.features.slice(0, 3).map((f) => (
              <div
                key={f.title}
                className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.07] rounded-lg px-4 py-2.5"
              >
                <Zap size={12} className="text-[#2772E0] shrink-0" />
                <span className="text-[12px] text-white/70 font-medium">{f.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What's included ──────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Scope of work"
            title={t('features')}
            subtitle={`Everything included in our ${service.title} engagements — no hidden extras.`}
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {service.features.map((feature, i) => (
              <div
                key={feature.title}
                className="group relative rounded-2xl border border-[#E4E4E7] bg-[#FAFAFA] p-7 hover:border-[#2772E0]/30 hover:shadow-sm transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#2772E0]/10 text-[#2772E0] font-bold text-[13px]">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0F172A] mb-2 group-hover:text-[#2772E0] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-[14px] text-[#71717A] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why us ───────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-[#FAFAFA] border-t border-[#E4E4E7]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Fixed-price engagements', desc: 'Statement of Work before we start. No scope creep surprises. You know the cost upfront.' },
              { title: 'Swiss data compliance', desc: 'nFADP and GDPR-ready by default. Data residency in Switzerland available for all projects.' },
              { title: '24h response guaranteed', desc: 'Send us a brief. We respond with a concrete proposal within one business day.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <CheckCircle size={20} className="text-[#2772E0] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-[#0F172A] mb-1">{item.title}</h3>
                  <p className="text-[13px] text-[#71717A] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ───────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-white border-t border-[#E4E4E7]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="shrink-0">
              <p className="text-[11px] font-medium text-[#A1A1AA] uppercase tracking-widest mb-1">
                {t('techStack')}
              </p>
              <p className="text-[13px] text-[#71717A]">Technologies we use</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {service.techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-[#F4F4F5] text-[#3F3F46] border border-[#E4E4E7] text-sm px-3 py-1.5 rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Cases ────────────────────────────────── */}
      {relatedCases.length > 0 && (
        <section className="py-20 md:py-28 bg-[#FAFAFA] border-t border-[#E4E4E7]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Portfolio"
              title={t('relatedCases')}
              subtitle={`Real projects we delivered using ${service.title}.`}
              className="mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedCases.map((c) => (
                <CaseCard key={c.slug} case_={c} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="dark-section py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-3 text-white">
                Ready to get started with{' '}
                <span className="gradient-text">{service.title}</span>?
              </h2>
              <p className="text-white/60 text-lg max-w-xl">
                Describe your project in 2 sentences. We send back a concrete proposal within 24 hours — scope, timeline, and fixed price.
              </p>
            </div>
            <div className="shrink-0">
              <Button variant="gradient" size="lg" asChild>
                <Link href="/contact">
                  Request a Proposal <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
