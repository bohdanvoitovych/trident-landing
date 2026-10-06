import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { getLocale } from 'next-intl/server'
import { cases } from '@/data/cases'
import { projects } from '@/data/projects'
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
  const rest = cases

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


      {/* Cases grid */}
      <section className="py-16 md:py-20 bg-white border-t border-[#E3E5E8]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {rest.map((c) => (
              <Link
                key={c.slug}
                href={`/cases/${c.slug}`}
                className="group bg-white border border-[#E3E5E8] rounded-[3px] overflow-hidden flex flex-col hover:border-[#2772E0]/40 transition-colors"
              >
                {c.hero.image && (
                  <div className="relative aspect-[16/10] w-full bg-[#F6F7F8] overflow-hidden">
                    <Image
                      src={c.hero.image}
                      alt={c.hero.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col gap-4 flex-1">
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
                </div>
              </Link>
            ))}
          </div>

          {/* Everything else delivered, straight from the portfolio. */}
          <div className="mt-20 pt-16 border-t border-[#E3E5E8]">
            <p className="eyebrow mb-3">More work</p>
            <h2 className="text-heading text-[#111318] mb-3">Selected projects</h2>
            <p className="text-[#4A4F57] mb-10 max-w-2xl">
              {projects.length} products and platforms delivered across logistics, retail,
              healthcare, IoT and education.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {projects.map((pr) => {
                const card = (
                  <>
                    <div className="relative aspect-[16/10] w-full bg-[#F6F7F8] overflow-hidden">
                      <Image
                        src={pr.image}
                        alt={pr.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4 flex flex-col gap-1.5 flex-1">
                      <p className="text-[11px] text-[#6B7078] font-medium uppercase tracking-wider">
                        {pr.sector}
                      </p>
                      <h3 className="font-semibold text-[14px] text-[#111318] leading-snug">
                        {pr.title}
                      </h3>
                      <p className="text-[13px] text-[#4A4F57] leading-relaxed">{pr.summary}</p>
                    </div>
                  </>
                )
                return pr.caseSlug ? (
                  <Link
                    key={pr.slug}
                    href={`/cases/${pr.caseSlug}`}
                    className="group bg-white border border-[#E3E5E8] rounded-[3px] overflow-hidden flex flex-col hover:border-[#2772E0]/40 transition-colors"
                  >
                    {card}
                  </Link>
                ) : (
                  <div
                    key={pr.slug}
                    className="bg-white border border-[#E3E5E8] rounded-[3px] overflow-hidden flex flex-col"
                  >
                    {card}
                  </div>
                )
              })}
            </div>
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
