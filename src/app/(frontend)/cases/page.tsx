import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { getLocale } from 'next-intl/server'
import { cases } from '@/data/cases'
import { buildMetadata } from '@/lib/metadata'
import { Badge } from '@/components/atoms/badge'

export const revalidate = 3600

export async function generateMetadata() {
  const locale = await getLocale()
  return buildMetadata({
    title: 'Software Development Projects & Case Studies | Trident Software Switzerland',
    description: '27+ software development projects delivered — automotive B2B platforms, AI healthcare systems, e-commerce, IoT, SaaS. Swiss engineering team since 2009. Real results with fixed-price contracts.',
    path: '/cases',
    locale,
  })
}

export default function CasesPage() {
  const t = useTranslations('cases')
  const [featured, ...rest] = cases

  const industries = Array.from(new Set(cases.map((c) => c.industry)))

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="dark-section py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow mb-4">Portfolio</p>
          <h1 className="text-display text-white mb-4">{t('title')}</h1>
          <p className="text-xl text-white/60 max-w-2xl">{t('subtitle')}</p>

          {/* Industry tags */}
          <div className="flex flex-wrap gap-2 mt-8">
            {industries.slice(0, 8).map((ind) => (
              <span
                key={ind}
                className="text-xs bg-white/[0.06] border border-white/[0.1] text-white/50 rounded-full px-3 py-1"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured case */}
      <section className="py-12 bg-[#FAFAFA] border-t border-[#E3E5E8]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-medium text-[#6B7078] uppercase tracking-widest mb-4">
            Featured project
          </p>
          <Link
            href={`/cases/${featured.slug}`}
            className="group block bg-white rounded-[3px] border border-[#E3E5E8] p-8 md:p-10 hover:shadow-md transition-all"
          >
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="blue">{featured.industry}</Badge>
                  {featured.services.slice(0, 2).map((s) => (
                    <Badge key={s} variant="secondary">
                      {s.replace(/-/g, ' ')}
                    </Badge>
                  ))}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#111318] mb-3 group-hover:text-[#2772E0] transition-colors">
                  {featured.hero.title}
                </h2>
                <p className="text-[#4A4F57] text-lg leading-relaxed mb-4">
                  {featured.hero.tagline}
                </p>
                <p className="text-[#4A4F57] text-sm leading-relaxed line-clamp-3">
                  {featured.challenge}
                </p>
                <div className="flex items-center gap-1 text-sm text-[#2772E0] font-medium mt-6">
                  View full case study <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              {featured.results.length > 0 && (
                <div className="flex flex-row lg:flex-col gap-6 lg:gap-8 shrink-0">
                  {featured.results.slice(0, 3).map((r) => (
                    <div key={r.metric} className="text-center lg:text-right">
                      <p className="text-2xl md:text-3xl font-bold text-[#111318]">{r.value}</p>
                      <p className="text-xs text-[#6B7078] mt-1 max-w-[120px]">{r.metric}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Link>
        </div>
      </section>

      {/* Cases grid */}
      <section className="py-16 md:py-20 bg-white border-t border-[#E3E5E8]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {rest.map((c) => (
              <Link
                key={c.slug}
                href={`/cases/${c.slug}`}
                className="group bg-[#FAFAFA] border border-[#E3E5E8] rounded-[3px] p-6 flex flex-col gap-4 hover:shadow-sm hover:border-[#2772E0]/30 transition-all"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-[11px] text-[#6B7078] font-medium uppercase tracking-wider mb-1">
                      {c.client}
                    </p>
                    <h3 className="font-semibold text-[15px] text-[#111318] group-hover:text-[#2772E0] transition-colors leading-snug">
                      {c.hero.title}
                    </h3>
                  </div>
                  <span className="shrink-0 text-[11px] font-medium bg-[#2772E0]/10 text-[#2772E0] border border-[#2772E0]/20 rounded-full px-2 py-0.5 whitespace-nowrap">
                    {c.industry.split(' / ')[0]}
                  </span>
                </div>

                <p className="text-[13px] text-[#4A4F57] leading-relaxed">{c.hero.tagline}</p>

                {c.results.length > 0 && (
                  <div className="flex flex-wrap gap-4 pt-3 border-t border-[#E3E5E8]">
                    {c.results.slice(0, 2).map((r) => (
                      <div key={r.metric}>
                        <span className="text-[18px] font-semibold text-[#111318]">{r.value}</span>
                        <span className="text-[12px] text-[#6B7078] ml-1">{r.metric}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-1 mt-auto">
                  {c.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] bg-white border border-[#E3E5E8] text-[#4A4F57] rounded px-2 py-0.5"
                    >
                      {tech}
                    </span>
                  ))}
                  {c.techStack.length > 3 && (
                    <span className="text-[11px] text-[#6B7078]">+{c.techStack.length - 3}</span>
                  )}
                </div>

                <div className="flex items-center gap-1 text-[12px] text-[#2772E0] font-medium">
                  View case study <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="dark-section py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Have a project in mind?</h2>
          <p className="text-white/60 mb-8 text-lg">
            Tell us about your challenge. We respond within 24 hours with a proposal.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#2772E0] hover:bg-[#2060C8] text-white font-semibold px-8 py-3.5 rounded-[2px] transition-colors"
          >
            Start a project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
