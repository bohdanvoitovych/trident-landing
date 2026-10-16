import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getLocale } from 'next-intl/server'
import { Suspense } from 'react'
import { industries } from '@/data/industries'
import { buildMetadata } from '@/lib/metadata'
import { IndustriesGrid } from '@/components/molecules/IndustriesGrid'
import PageJsonLd from '@/components/seo/PageJsonLd'

export const revalidate = 3600

export async function generateMetadata() {
  const locale = await getLocale()
  return buildMetadata({
    title: 'Industries | Where the case is strongest in Switzerland | Trident Software',
    description:
      'Where AI agents and operational software pay back: clinics, real estate, e-commerce, hospitality, education, trade and building materials, professional services, startups.',
    path: '/industries',
    locale,
  })
}

export default function IndustriesPage() {
  return (
    <div className="flex flex-col">
      <PageJsonLd path="/industries" />
      {/* Hero */}
      <section className="dark-section py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Industry expertise</p>
            <h1 className="text-display text-white mb-6">
              Where the case is <span className="gradient-text">strongest in Switzerland</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-4">
              Ordered by how well the arithmetic tends to work, not by how interesting the technology is.
            </p>
            <p className="text-[15px] text-white/40 leading-relaxed mb-8">
              Operational businesses where documents, orders and dispatch decide the margin: logistics and distribution, field services, healthcare administration, and professional services drowning in other people&apos;s paperwork.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#2772E0] hover:bg-[#2060C8] text-white font-semibold px-6 py-3 rounded-[2px] transition-colors text-[15px]"
            >
              Discuss your project <ArrowRight size={16} />
            </Link>
          </div>

          {/* Stat chips */}
          <div className="flex flex-wrap gap-3 mt-12">
            {[
              { value: '45 min', label: 'Free audit' },
              { value: '3–5 weeks', label: 'Signature to live' },
              { value: 'CH / EU', label: 'Hosting' },
              { value: 'revFADP · GDPR', label: 'Data protection' },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-white/[0.04] border border-white/[0.08] rounded-[2px] px-5 py-3"
              >
                <p className="text-[18px] font-semibold text-white">{s.value}</p>
                <p className="text-[11px] text-white/40 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Suspense fallback={
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {industries.map((i) => (
                <div key={i.slug} className="rounded-[3px] bg-[#F4F4F5] h-48 animate-pulse" />
              ))}
            </div>
          }>
            <IndustriesGrid industries={industries} />
          </Suspense>
        </div>
      </section>

      {/* CTA */}
      <section className="dark-section py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Need a software partner who knows your industry?
          </h2>
          <p className="text-white/60 mb-8 text-lg">
            Tell us about your challenge. We respond within 24 hours with a concrete proposal.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#2772E0] hover:bg-[#2060C8] text-white font-semibold px-8 py-3.5 rounded-[2px] transition-colors"
          >
            Get a free consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
