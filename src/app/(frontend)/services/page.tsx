import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { getLocale } from 'next-intl/server'
import { ServiceCard } from '@/components/molecules/ServiceCard'
import { services } from '@/data/services'
import { buildMetadata } from '@/lib/metadata'
import { Button } from '@/components/atoms/button'
import PageJsonLd from '@/components/seo/PageJsonLd'

export const revalidate = 3600

export async function generateMetadata() {
  const locale = await getLocale()
  return buildMetadata({
    title: 'Services | Trident Software',
    description: 'We build the systems companies run their daily work on — and the AI layer that removes the repetitive part of it.',
    path: '/services',
    locale,
  })
}

// Text below is taken verbatim from the source-of-truth PDF (pp. 1, 2 and 4).
const HOW_WE_WORK = [
  { title: 'We start with the audit, not the build.', description: 'A session on your actual volumes, response times, channel mix and systems — and a straight answer on whether automation pays back, including the answer "not yet". We publish the model we use to reach it.' },
  { title: 'Fixed scope, phased delivery.', description: 'One channel, one scenario, one month before anything is extended. Evidence decides what comes next, not the roadmap.' },
  { title: 'Integration is priced separately and honestly.', description: 'Connecting to an existing ERP, accounting system or legacy database is where projects overrun. We quote it as its own line rather than burying it in a monthly figure.' },
  { title: 'You own your data, knowledge base and scenario definitions.', description: 'We own the platform code. Stated in the contract, not discovered at termination.' },
  { title: 'Swiss data handling by default.', description: 'Hosting in Switzerland or the EU, processing under revFADP and GDPR, and a documented answer on which model provider sees what.' },
  { title: 'A named engineer, not a ticket queue.', description: 'The same person from audit to operation.' },
]

const WHY_US = [
  { title: 'We have shipped the boring parts.', description: 'Anyone can demonstrate a language model answering a question. Very few have wired one into a dispatch system a driver depends on at six in the morning — with the escalation path, the audit trail and the failure behaviour worked out.' },
  { title: 'We say no.', description: 'Our own material tells clients when automation is not worth doing yet: below a certain volume, without a knowledge base, where the data cannot support the decision. That costs us deals and earns us the ones that matter.' },
  { title: 'We separate what we measured from what we modelled.', description: 'Every figure we publish says which it is. A buyer who cannot tell them apart cannot trust either.' },
  { title: 'Senior engineering at rates that work.', description: 'Swiss accountability, distributed delivery, and no pretending juniors are seniors.' },
  { title: 'A product company that consults, not an agency that sells hours.', description: 'It shows in the architecture: we build what we would be willing to maintain for five years — because with 8Move we actually do.' },
]


export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <PageJsonLd path="/services" />
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="dark-section py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow mb-4">Swiss software engineering</p>
          <h1 className="text-display text-white mb-5">Trident Software Sàrl</h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed mb-10">
            We build the systems companies run their daily work on — and the AI layer that removes the repetitive part of it.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="gradient" size="lg" asChild>
              <Link href="/contact">
                Book a free audit <ArrowRight size={18} />
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
            <h2 className="text-heading text-[#111318]">What we do</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <p className="text-[#4A4F57] leading-relaxed mt-8 max-w-3xl">Stack: Python and Django, PostgreSQL, React, Flutter, AWS. LLM work sits on top of that, not beside it.</p>
        </div>
      </section>

      {/* ── How we work ───────────────────────────────────── */}
      <section className="section-alt py-16 md:py-24 border-t border-[#E3E5E8]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading text-[#111318] mb-10">How we work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {HOW_WE_WORK.map(({ title, description }) => (
              <div key={title} className="flex gap-4">
                <CheckCircle size={18} className="text-[#2772E0] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-[#111318] mb-1 text-[14px]">{title}</h3>
                  <p className="text-[13px] text-[#4A4F57] leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why us ────────────────────────────────────────── */}
      <section className="py-16 md:py-24 border-t border-[#E3E5E8]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading text-[#111318] mb-10">Why us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_US.map(({ title, description }) => (
              <div key={title} className="flex gap-4">
                <CheckCircle size={18} className="text-[#2772E0] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-[#111318] mb-1 text-[14px]">{title}</h3>
                  <p className="text-[13px] text-[#4A4F57] leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Next step ─────────────────────────────────────── */}
      <section className="dark-section py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Next step: a 45-minute audit, free of charge</h2>
          <p className="text-white/60 mb-8 text-lg max-w-xl mx-auto">
            Bring your volumes, your response times and your systems. You leave with your own numbers and a straight answer — whether or not you work with us.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="gradient" size="lg" asChild>
              <Link href="/contact">
                Book a free audit <ArrowRight size={18} />
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
