import Link from 'next/link'
import { ArrowRight, CheckCircle, Clock, FileText, Rocket } from 'lucide-react'
import { getLocale } from 'next-intl/server'
import { ServiceCard } from '@/components/molecules/ServiceCard'
import { services } from '@/data/services'
import { technologies } from '@/data/technologies'
import { buildMetadata } from '@/lib/metadata'
import { Button } from '@/components/atoms/button'

export const revalidate = 3600

export async function generateMetadata() {
  const locale = await getLocale()
  return buildMetadata({
    title: 'Software Development Services Switzerland | AI, Cloud, DevOps & More | Trident Software',
    description: 'Custom software development services in Switzerland — AI integration, web & mobile apps, embedded systems, cloud consulting, DevOps, CTO-as-a-Service. Fixed budgets, Swiss compliance, 27+ projects delivered since 2009.',
    path: '/services',
    locale,
  })
}

const STEPS = [
  {
    icon: FileText,
    title: 'Scope & quote',
    description: 'Send us a brief. We reply within 24 hours with a concrete proposal — scope, timeline, and fixed price. No surprises.',
    number: '01',
  },
  {
    icon: Rocket,
    title: 'Build & ship',
    description: 'Our senior engineers start within 1–2 weeks. Weekly demos, async updates, and staging environment from day one.',
    number: '02',
  },
  {
    icon: Clock,
    title: 'Maintain & grow',
    description: 'Post-launch SLA, performance monitoring, and feature iterations. We stay with you after go-live.',
    number: '03',
  },
]

const TRUST_POINTS = [
  {
    title: 'Fixed-price contracts',
    description: 'Statement of Work signed before we start. The price you see is the price you pay.',
  },
  {
    title: 'Swiss data compliance',
    description: 'nFADP and GDPR-ready by default. Data residency in Switzerland available for all projects.',
  },
  {
    title: '24h response guaranteed',
    description: 'Send us a brief. We respond with a concrete proposal within one business day.',
  },
  {
    title: '15+ years in production',
    description: 'Founded in 2009. 27+ Swiss and European clients. We have seen what breaks in production.',
  },
  {
    title: 'No vendor lock-in',
    description: 'You own the code, the repository, and the infrastructure. We hand over everything.',
  },
  {
    title: 'CH + IL + UA talent pool',
    description: 'Senior engineers across CET timezones. Near-seamless overlap with European teams.',
  },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="dark-section py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow mb-4">What we build</p>
          <h1 className="text-display text-white mb-5">
            Software Development Services<br />
            <span className="gradient-text">for Swiss & European Businesses</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed mb-10">
            From AI integration and custom web platforms to embedded systems and cloud infrastructure — end-to-end engineering with fixed budgets and Swiss compliance built in.
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
      </section>

      {/* ── Service cards grid ────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="eyebrow mb-2">Services</p>
            <h2 className="text-heading text-[#0F172A]">What we deliver</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* ── How we engage ────────────────────────────────── */}
      <section className="section-alt py-16 md:py-24 border-t border-[#E4E4E7]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="eyebrow mb-2">Process</p>
            <h2 className="text-heading text-[#0F172A]">How we engage</h2>
            <p className="text-[#71717A] mt-3 max-w-xl">
              Three steps from brief to shipped product. No black boxes, no scope surprises.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STEPS.map(({ icon: Icon, title, description, number }) => (
              <div key={number} className="light-card rounded-2xl p-7 flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2772E0]/10">
                    <Icon size={18} className="text-[#2772E0]" />
                  </div>
                  <span className="text-[32px] font-bold text-[#E4E4E7] leading-none select-none">
                    {number}
                  </span>
                </div>
                <h3 className="font-semibold text-[#0F172A] text-[15px]">{title}</h3>
                <p className="text-[13px] text-[#71717A] leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technologies we use ───────────────────────────── */}
      <section className="py-16 md:py-20 border-t border-[#E4E4E7]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="eyebrow mb-2">Stack</p>
              <h2 className="text-heading text-[#0F172A]">Technologies we use</h2>
            </div>
            <Link
              href="/technologies"
              className="text-[13px] font-medium text-[#2772E0] hover:underline inline-flex items-center gap-1 shrink-0"
            >
              Full stack details <ArrowRight size={13} />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3">
            {technologies.map((tech) => (
              <Link
                key={tech.slug}
                href={`/technologies/${tech.slug}`}
                className="light-card light-card-interactive rounded-[2px] px-4 py-6 flex flex-col items-center gap-3 group"
                title={tech.name}
              >
                {/* Icons ship locally: the CDN this used had no mark for
                    "openai" any more, so that tile rendered empty. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/tech/${tech.iconSlug}.svg`}
                  alt=""
                  width={30}
                  height={30}
                  loading="lazy"
                  className="shrink-0 opacity-70 group-hover:opacity-100 transition-opacity"
                />
                <span className="text-[11px] text-center text-[#71717A] group-hover:text-[#2772E0] transition-colors leading-tight">
                  {tech.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why choose us ────────────────────────────────── */}
      <section className="section-alt py-16 md:py-24 border-t border-[#E4E4E7]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="eyebrow mb-2">Why us</p>
            <h2 className="text-heading text-[#0F172A]">What you get with Trident</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TRUST_POINTS.map(({ title, description }) => (
              <div key={title} className="flex gap-4">
                <CheckCircle size={18} className="text-[#2772E0] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-[#0F172A] mb-1 text-[14px]">{title}</h3>
                  <p className="text-[13px] text-[#71717A] leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="dark-section py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="eyebrow mb-4">Ready to start?</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Describe your project in{' '}
            <span className="gradient-text">2 sentences</span>
          </h2>
          <p className="text-white/60 mb-8 text-lg max-w-xl mx-auto">
            We send back a concrete proposal within 24 hours — scope, timeline, and fixed price.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="gradient" size="lg" asChild>
              <Link href="/contact">
                Request a Proposal <ArrowRight size={18} />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/[0.12] text-white hover:bg-white/[0.06] bg-transparent"
              asChild
            >
              <Link href="/cases">View case studies</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
