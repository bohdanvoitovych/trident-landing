import Link from 'next/link'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/atoms/button'
import { Badge } from '@/components/atoms/badge'
import { CaseCard } from '@/components/molecules/CaseCard'
import { getRelatedCases } from '@/data/cases'
import type { CaseData } from '@/data/cases'

type Props = {
  caseStudy: CaseData
}

export function CasePage({ caseStudy }: Props) {
  const t = useTranslations('cases')
  const related = getRelatedCases(caseStudy.relatedCases)

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="dark-section relative overflow-hidden py-20 md:py-28">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/cases"
            className="inline-flex items-center gap-1 text-sm text-white/40 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={14} /> All cases
          </Link>
          <div className="flex flex-wrap gap-2 mb-6">
            <p className="eyebrow mb-0">{caseStudy.industry}</p>
            {caseStudy.services.slice(0, 2).map((s) => (
              <Badge key={s} variant="secondary">
                {s.replace(/-/g, ' ')}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-4 text-white">
            {caseStudy.hero.title}
          </h1>
          <p className="text-xl text-[var(--primary)] font-medium mb-6 text-white/60">{caseStudy.hero.tagline}</p>
          <p className="text-white/40 font-medium">
            Client: <span className="text-white/60">{caseStudy.client}</span>
          </p>
        </div>
      </section>

      {/* Results bar */}
      {caseStudy.results.length > 0 && (
        <section className="section-alt border-b border-[#E3E5E8] py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-8 justify-center">
              {caseStudy.results.map((r) => (
                <div key={r.metric} className="text-center">
                  <p className="text-3xl font-bold text-[#111318]">{r.value}</p>
                  <p className="text-sm text-[#4A4F57] mt-1">{r.metric}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12">
            {/* Challenge */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#111318]">{t('challenge')}</h2>
              <p className="text-[#4A4F57] leading-relaxed text-lg">{caseStudy.challenge}</p>
            </div>

            {/* Approach */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#111318]">{t('approach')}</h2>
              <p className="text-[#4A4F57] leading-relaxed text-lg">{caseStudy.approach}</p>
            </div>

            {/* Solution */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#111318]">{t('solution')}</h2>
              <p className="text-[#4A4F57] leading-relaxed text-lg">{caseStudy.solution}</p>
            </div>

            {/* Tech stack */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#111318]">{t('techStack')}</h2>
              <div className="flex flex-wrap gap-2">
                {caseStudy.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-[#F4F4F5] text-[#3F3F46] border border-[#E3E5E8] text-sm px-3 py-1.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            {caseStudy.testimonial && (
              <blockquote className="light-card rounded-[3px] p-6 border-l-4 border-primary">
                <p className="text-lg italic text-foreground leading-relaxed mb-4">
                  &ldquo;{caseStudy.testimonial.text}&rdquo;
                </p>
                <footer className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    {caseStudy.testimonial.author}
                  </span>{' '}
                  — {caseStudy.testimonial.role}
                </footer>
              </blockquote>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="dark-section py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">{t('startSimilar')}</h2>
          <p className="text-white/60 mb-8 text-lg">
            Let&apos;s discuss your project. We respond within 24 hours.
          </p>
          <Button variant="gradient" size="lg" asChild>
            <Link href="/contact">
              Get a Quote <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </section>

      {/* Related cases */}
      {related.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8 text-[#111318]">{t('relatedCases')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((c) => (
                <CaseCard key={c.slug} case_={c} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
