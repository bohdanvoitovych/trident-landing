import Link from 'next/link'
import { ArrowRight, MapPin, Shield, Users, Zap, Quote } from 'lucide-react'
import { getLocale, getTranslations } from 'next-intl/server'
import { Button } from '@/components/atoms/button'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { ServiceCard } from '@/components/molecules/ServiceCard'
import { CaseCard } from '@/components/molecules/CaseCard'
import { services } from '@/data/services'
import { cases } from '@/data/cases'
import { stats } from '@/data/team'
import { testimonials } from '@/data/testimonials'
import { clients, techPartners } from '@/data/clients'
import JsonLd from '@/components/seo/JsonLd'
import { homePageSchemas } from '@/lib/schema'

export const revalidate = 3600

export default async function HomePage() {
  const locale = await getLocale()
  const t = await getTranslations('home')
  const featuredServices = services.slice(0, 6)
  const featuredCases = cases.slice(0, 3)

  return (
    <div className="flex flex-col">
      <JsonLd data={homePageSchemas(locale)} />

      {/* ── Hero (dark) ──────────────────────────────────── */}
      <section className="dark-section relative overflow-hidden">
        {/* Atmospheric glow */}
        <div className="absolute inset-0 glow-hero pointer-events-none" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '72px 72px',
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — text */}
            <div>
              <p className="eyebrow mb-5">{t('hero.badge')}</p>

              <h1 className="text-display text-white mb-6">
                {t('hero.title').split('AI-Native').map((part, i) =>
                  i === 0 ? (
                    <span key={i}>{part}</span>
                  ) : (
                    <span key={i}>
                      <span className="gradient-text">AI-Native</span>
                      {part}
                    </span>
                  ),
                )}
              </h1>

              <p className="text-[18px] text-white/60 leading-relaxed mb-8 max-w-lg">
                {t('hero.subtitle')}
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Button variant="gradient" size="lg" asChild>
                  <Link href="/contact">
                    {t('hero.cta')} <ArrowRight size={16} />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/[0.12] text-white hover:bg-white/[0.06] hover:text-white bg-transparent"
                  asChild
                >
                  <Link href="/cases">{t('hero.ctaSecondary')}</Link>
                </Button>
              </div>

              {/* Trust signals */}
              <div className="flex flex-wrap gap-5 text-[13px] text-white/40">
                <span className="flex items-center gap-1.5">
                  <MapPin size={12} className="text-[#2772E0]" />
                  Sion, Valais, Switzerland
                </span>
                <span className="flex items-center gap-1.5">
                  <Shield size={12} className="text-[#2772E0]" />
                  ISO 27000 · nFADP
                </span>
                <span className="flex items-center gap-1.5">
                  <Users size={12} className="text-[#2772E0]" />
                  26 engineers
                </span>
                <span className="flex items-center gap-1.5">
                  <Zap size={12} className="text-[#2772E0]" />
                  Since 2009
                </span>
              </div>
            </div>

            {/* Right — code window */}
            <div className="hidden lg:block">
              <div className="code-window max-w-md ml-auto animate-float">
                {/* Traffic lights bar */}
                <div className="code-window-bar">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                  <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                  <span className="ml-3 text-[12px] text-white/30 font-mono">ai_pipeline.py</span>
                </div>

                {/* Code */}
                <div className="p-5 font-mono text-[13px] leading-[1.7]">
                  <div>
                    <span className="text-[#6366F1]">from</span>
                    <span className="text-white/80"> trident_ai </span>
                    <span className="text-[#6366F1]">import</span>
                    <span className="text-[#2772E0]"> RAGPipeline</span>
                  </div>
                  <div className="mt-2 text-white/30"># Swiss data residency · nFADP compliant</div>
                  <div className="mt-1">
                    <span className="text-[#2772E0]">pipeline</span>
                    <span className="text-white/80"> = RAGPipeline(</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-white/80">model=</span>
                    <span className="text-emerald-400">&quot;llama-3.1-70b&quot;</span>
                    <span className="text-white/80">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-white/80">on_premise=</span>
                    <span className="text-amber-400">True</span>
                    <span className="text-white/80">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-white/80">compliance=</span>
                    <span className="text-emerald-400">&quot;nFADP&quot;</span>
                  </div>
                  <div><span className="text-white/80">)</span></div>
                  <div className="mt-2 text-white/30"># Process 10k documents/day</div>
                  <div>
                    <span className="text-white/80">results = pipeline.</span>
                    <span className="text-[#2772E0]">run</span>
                    <span className="text-white/80">(docs)</span>
                  </div>
                </div>

                {/* Status bar */}
                <div className="px-5 py-3 border-t border-white/[0.07] flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span className="text-[12px] text-white/40 font-mono">
                    Running on Swiss infra · 0 data leaves CH
                  </span>
                </div>
              </div>

              {/* Floating stat chips */}
              <div className="flex gap-3 mt-4 justify-end">
                {[
                  { value: '27+', label: 'Projects' },
                  { value: '26', label: 'Engineers' },
                  { value: '8', label: 'Countries' },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-2 text-center"
                  >
                    <p className="text-[18px] font-semibold text-white tracking-tight">{s.value}</p>
                    <p className="text-[11px] text-white/40">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats band (light) ───────────────────────────── */}
      <section className="border-b border-[#E4E4E7] py-10 bg-[#FAFAFA]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#E4E4E7]">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center px-6 first:pl-0 last:pr-0">
                <p className="text-[36px] font-semibold tracking-tight gradient-text">{stat.value}</p>
                <p className="text-[13px] text-[#71717A] mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services (light) ─────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <SectionHeader
              title={t('services.title')}
              subtitle={t('services.subtitle')}
              eyebrow="What we do"
            />
            <Button variant="outline" size="sm" asChild className="shrink-0 self-start md:self-auto">
              <Link href="/services">
                All services <ArrowRight size={13} />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {featuredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Partners (light-alt) ────────────────────── */}
      <section className="py-10 bg-[#FAFAFA] border-t border-[#E4E4E7] overflow-hidden">
        <p className="text-center text-[11px] font-medium text-[#A1A1AA] uppercase tracking-widest mb-8">
          Technology Partners
        </p>
        <div className="logo-marquee-track relative">
          <div className="flex items-center animate-marquee-slow" style={{ width: 'max-content' }}>
            {[...techPartners, ...techPartners].map((p, i) => (
              <div key={i} className="flex-none mx-10 flex items-center justify-center h-10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.logo}
                  alt={p.name}
                  className="h-8 w-auto object-contain opacity-50 hover:opacity-80 transition-opacity duration-200 grayscale"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cases (light-alt) ────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#FAFAFA] border-t border-[#E4E4E7]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <SectionHeader
              title={t('cases.title')}
              subtitle={t('cases.subtitle')}
              eyebrow="Portfolio"
            />
            <Button variant="outline" size="sm" asChild className="shrink-0 self-start md:self-auto">
              <Link href="/cases">
                All cases <ArrowRight size={13} />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {featuredCases.map((c) => (
              <CaseCard key={c.slug} case_={c} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials (dark) ──────────────────────────── */}
      <section className="dark-section py-20 md:py-28 border-t border-white/[0.07]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Client feedback"
            title="What clients say"
            className="mb-12 text-white [&_h2]:text-white [&_p]:text-white/60"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((t_) => (
              <div
                key={t_.author}
                className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-6 flex flex-col gap-4"
              >
                <Quote size={20} className="text-[#2772E0] shrink-0" />
                <p className="text-[15px] text-white/70 leading-relaxed flex-1 italic">
                  &ldquo;{t_.quote}&rdquo;
                </p>
                <div>
                  <p className="text-[13px] font-semibold text-white">{t_.author}</p>
                  {t_.role && (
                    <p className="text-[12px] text-white/40">{t_.role}</p>
                  )}
                  <p className="text-[12px] text-white/40">{t_.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clients ──────────────────────────────────────── */}
      <section className="py-14 bg-[#09090B] border-t border-white/5 overflow-hidden">
        <p className="text-center text-[11px] font-medium text-white/30 uppercase tracking-widest mb-8">
          Companies that trust us
        </p>
        <div className="logo-marquee-track relative">
          <div className="flex items-center animate-marquee" style={{ width: 'max-content' }}>
            {[...clients, ...clients].map((c, i) => (
              <div key={i} className="flex-none mx-10 flex items-center justify-center h-12">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.logo}
                  alt={c.name}
                  className="h-9 w-auto object-contain opacity-40 hover:opacity-80 transition-opacity duration-200"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Trident (light) ──────────────────────────── */}
      <section className="py-20 md:py-28 bg-white border-t border-[#E4E4E7]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <SectionHeader
              eyebrow="Why Trident"
              title="Swiss quality. Startup velocity."
              subtitle="The reliability of a Swiss company with the delivery speed of a modern engineering team."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: Shield, title: 'Swiss Compliance', desc: 'ISO 27000, nFADP, data residency in Switzerland. Compliance documentation included.' },
                { icon: Zap, title: 'Fixed Budgets', desc: 'Statement of Work before work begins. No hidden fees. Predictable delivery.' },
                { icon: Users, title: 'CH + IL + UA Team', desc: '26 engineers across 3 locations. CET coverage, multilingual EN/DE/FR/IT.' },
                { icon: MapPin, title: '27+ Projects', desc: 'Automotive, healthcare, fashion, logistics, SaaS. Since 2009.' },
              ].map((item) => (
                <div key={item.title} className="light-card rounded-xl p-5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2772E0]/10 mb-3">
                    <item.icon size={15} className="text-[#2772E0]" />
                  </div>
                  <h3 className="font-semibold text-[14px] text-[#0F172A] mb-1">{item.title}</h3>
                  <p className="text-[13px] text-[#71717A] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA (dark) ───────────────────────────────────── */}
      <section className="dark-section py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="eyebrow mb-4">{t('cta.title')}</p>
          <h2 className="text-heading text-white mb-4">
            Ready to build something?
          </h2>
          <p className="text-[#A1A1AA] mb-8 text-[17px] leading-relaxed max-w-xl mx-auto">
            {t('cta.subtitle')}
          </p>
          <Button variant="gradient" size="lg" asChild>
            <Link href="/contact">
              {t('cta.button')} <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </section>

    </div>
  )
}
