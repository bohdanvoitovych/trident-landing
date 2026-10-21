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
          <div className="flex flex-wrap items-center gap-2 mb-6">
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
          {caseStudy.evidence && (
            <p className="mt-4 text-sm text-white/40">
              Figures:{' '}
              <span className="text-white/70 font-medium">
                {caseStudy.evidence === 'measured' ? 'Measured' : 'Modelled'}
              </span>
              {caseStudy.evidence === 'measured'
                ? ' — counted in production'
                : ' — calculated, not counted in production'}
            </p>
          )}
        </div>
      </section>

      {/* Results bar */}
      {caseStudy.results.length > 0 && (
        <section className="section-alt border-b border-[#E3E5E8] py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-8">
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12 max-w-3xl">
            {/* Note: how the case is written up */}
            {caseStudy.note && (
              <p className="light-card rounded-[3px] p-5 text-[#4A4F57] leading-relaxed">
                {caseStudy.note}
              </p>
            )}

            {/* Challenge */}
            {caseStudy.challenge && (
              <div>
                <h2 className="text-2xl font-bold mb-4 text-[#111318]">{t('challenge')}</h2>
                <p className="text-[#4A4F57] leading-relaxed text-lg">{caseStudy.challenge}</p>
              </div>
            )}

            {/* Approach */}
            {caseStudy.approach && (
              <div>
                <h2 className="text-2xl font-bold mb-4 text-[#111318]">{t('approach')}</h2>
                <p className="text-[#4A4F57] leading-relaxed text-lg">{caseStudy.approach}</p>
              </div>
            )}

            {/* Solution */}
            {caseStudy.solution && (
              <div>
                <h2 className="text-2xl font-bold mb-4 text-[#111318]">{t('solution')}</h2>
                <p className="text-[#4A4F57] leading-relaxed text-lg">{caseStudy.solution}</p>
              </div>
            )}

            {/* Free-form sections (long case studies) */}
            {caseStudy.sections?.map((section) => (
              <div key={section.title}>
                <h2 className="text-2xl font-bold mb-4 text-[#111318]">{section.title}</h2>
                <div className="flex flex-col gap-4">
                  {section.paragraphs?.map((p) => (
                    <p key={p} className="text-[#4A4F57] leading-relaxed text-lg">
                      {p}
                    </p>
                  ))}
                  {section.items && (
                    <ul className="flex flex-col gap-2 list-disc pl-6 text-[#4A4F57] leading-relaxed text-lg">
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {section.closing?.map((p) => (
                    <p key={p} className="text-[#4A4F57] leading-relaxed text-lg">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Before / after table */}
            {caseStudy.table && (
              <div>
                <h2 className="text-2xl font-bold mb-4 text-[#111318]">{caseStudy.table.title}</h2>
                <div className="overflow-x-auto rounded-[3px] border border-[#E3E5E8]">
                  <table className="w-full text-left text-[15px]">
                    <thead className="bg-[#F6F7F8] text-[#4A4F57]">
                      <tr>
                        <th scope="col" className="px-4 py-3 font-medium" />
                        <th scope="col" className="px-4 py-3 font-medium">
                          {caseStudy.table.beforeLabel}
                        </th>
                        <th scope="col" className="px-4 py-3 font-medium">
                          {caseStudy.table.afterLabel}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {caseStudy.table.rows.map((row) => (
                        <tr key={row.label} className="border-t border-[#E3E5E8] align-top">
                          <th scope="row" className="px-4 py-3 font-medium text-[#111318]">
                            {row.label}
                          </th>
                          <td className="px-4 py-3 text-[#4A4F57]">{row.before}</td>
                          <td className="px-4 py-3 font-medium text-[#111318]">{row.after}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Explanation of the table */}
            {caseStudy.afterTable && caseStudy.afterTable.length > 0 && (
              <div className="flex flex-col gap-4">
                {caseStudy.afterTable.map((p) => (
                  <p key={p} className="text-[#4A4F57] leading-relaxed text-lg">
                    {p}
                  </p>
                ))}
              </div>
            )}

            {/* What happens next */}
            {caseStudy.next && caseStudy.next.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4 text-[#111318]">What happens next</h2>
                {caseStudy.nextIntro && (
                  <p className="mb-4 text-[#4A4F57] leading-relaxed text-lg">{caseStudy.nextIntro}</p>
                )}
                <ol className="flex flex-col gap-2 list-decimal pl-6 text-[#4A4F57] leading-relaxed text-lg">
                  {caseStudy.next.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </div>
            )}

            {/* Where else this applies */}
            {caseStudy.elsewhere && caseStudy.elsewhere.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4 text-[#111318]">Where else this applies</h2>
                {caseStudy.elsewhereIntro && (
                  <p className="mb-4 text-[#4A4F57] leading-relaxed text-lg">
                    {caseStudy.elsewhereIntro}
                  </p>
                )}
                <ul className="flex flex-col gap-2 list-disc pl-6 text-[#4A4F57] leading-relaxed text-lg">
                  {caseStudy.elsewhere.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {caseStudy.elsewhereOutro && (
                  <p className="mt-4 text-[#4A4F57] leading-relaxed text-lg">
                    {caseStudy.elsewhereOutro}
                  </p>
                )}
              </div>
            )}

            {/* Tech stack */}
            {caseStudy.techStack.length > 0 && (
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
            )}

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
