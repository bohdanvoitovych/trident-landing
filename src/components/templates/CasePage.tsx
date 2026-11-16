import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { useTranslations, useLocale } from 'next-intl'
import { ButtonLink, Tag } from '@/components/atoms/controls'
import { CaseCard } from '@/components/molecules/CaseCard'
import { PageHero } from '@/components/molecules/PageHero'
import { caseHref, caseImage, getRelatedCases, isCaseStudy } from '@/data/cases'
import { getCaseIndustry } from '@/data/industries'
import { getServiceBySlug } from '@/data/services'
import type { CaseData } from '@/data/cases'

type Props = {
  caseStudy: CaseData
}

export function CasePage({ caseStudy }: Props) {
  const t = useTranslations('cases')
  const tu = useTranslations('ui')
  const tp = useTranslations('templates.case')
  const locale = useLocale()
  const related = getRelatedCases(caseStudy.relatedCases, locale)
  const study = isCaseStudy(caseStudy.slug)
  const listHref = study ? '/cases' : '/projects'
  const industry = getCaseIndustry(caseStudy.slug, locale)

  const blocks = [
    { id: 'challenge', title: t('challenge'), text: caseStudy.challenge },
    { id: 'approach', title: t('approach'), text: caseStudy.approach },
    { id: 'solution', title: t('solution'), text: caseStudy.solution },
  ].filter((b) => b.text)
  const { evidence, note, sections, table, afterTable, nextIntro, next, elsewhereIntro, elsewhere, elsewhereOutro } =
    caseStudy

  return (
    <>
      <PageHero
        crumbs={[
          { name: study ? tu('nav.caseStudies') : tu('nav.projects'), href: listHref },
          { name: caseStudy.client, href: caseHref(caseStudy.slug) },
        ]}
        label={caseStudy.industry}
        title={caseStudy.hero.title}
        lead={caseStudy.hero.tagline}
        actions={
          <div className="stack" style={{ gap: 14 }}>
            <p className="meta" style={{ margin: 0 }}>
              {tp.rich('client', {
                client: caseStudy.client,
                name: (c) => <span className="text-ink">{c}</span>,
              })}
            </p>
            {evidence && (
              <p className="small" style={{ margin: 0, display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
                <Tag tone={evidence === 'measured' ? 'blue' : 'wash'}>{tu(`cases.${evidence}`)}</Tag>
                {tp(`evidence.${evidence}`)}
              </p>
            )}
            <div className="chips" style={{ gap: 6 }}>
              {caseStudy.services.slice(0, 2).map((s) => (
                <Tag key={s} tone="wash">
                  {getServiceBySlug(s, locale)?.title ?? s.replace(/-/g, ' ')}
                </Tag>
              ))}
            </div>
            {industry && (
              <p className="meta" style={{ margin: 0 }}>
                {tp('industry')}{' '}
                <Link href={`/industries/${industry.slug}`} className="text-link">
                  {industry.title}
                </Link>
              </p>
            )}
            <Link href={listHref} className="text-link">
              <span aria-hidden="true">←</span>
              {study ? tp('allCases') : tp('allProjects')}
            </Link>
          </div>
        }
        aside={
          caseStudy.hero.image ? (
            <div className="media rounded-md border border-line" style={{ aspectRatio: '32 / 25' }}>
              <Image
                src={caseStudy.hero.image}
                alt={caseStudy.hero.title}
                fill
                priority
                sizes="(max-width: 1100px) 100vw, 640px"
              />
            </div>
          ) : undefined
        }
      />

      {caseStudy.results.length > 0 && (
        <section className="section section--band section--alt" aria-labelledby="results-h">
          <div className="container">
            <h2 id="results-h" className="sr-only">
              {t('results')}
            </h2>
            <dl className={`${caseStudy.results.length > 3 ? 'grid-4' : 'grid-3'} keep-2 stagger`} style={{ margin: 0 }}>
              {caseStudy.results.map((r) => (
                <div key={r.metric} className="card card--flat fact" style={{ flexDirection: 'column-reverse', justifyContent: 'flex-end' }}>
                  <dt className="fact-k">{r.metric}</dt>
                  <dd className="fact-v" style={{ margin: 0 }}>
                    {r.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container stack stack--lg">
          {note && (
            <p className="small reveal" style={{ maxWidth: 760, fontSize: 14 }}>
              {note}
            </p>
          )}

          {blocks.map((b) => (
            <section key={b.id} className="split split--top reveal border-t border-line pt-8" aria-labelledby={`${b.id}-h`}>
              <h2 id={`${b.id}-h`} className="h3">
                {b.title}
              </h2>
              <p className="lead">{b.text}</p>
            </section>
          ))}

          {sections?.map((sec, i) => (
            <section key={sec.title} className="split split--top reveal border-t border-line pt-8" aria-labelledby={`sec-${i}-h`}>
              <h2 id={`sec-${i}-h`} className="h3">
                {sec.title}
              </h2>
              <div className="prose min-w-0">
                {sec.paragraphs?.map((p) => <p key={p}>{p}</p>)}
                {sec.items && (
                  <ul>
                    {sec.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {sec.closing?.map((p) => <p key={p}>{p}</p>)}
              </div>
            </section>
          ))}

          {table && (
            <section className="stack reveal border-t border-line pt-8" aria-labelledby="table-h">
              <h2 id="table-h" className="h3">
                {table.title}
              </h2>
              <div className="table-wrap">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">
                        <span className="sr-only">{t('results')}</span>
                      </th>
                      <th scope="col">{table.beforeLabel}</th>
                      <th scope="col">{table.afterLabel}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table.rows.map((row) => (
                      <tr key={row.label}>
                        <th scope="row" className="text-ink" style={{ font: 'inherit', fontWeight: 600, background: 'none' }}>
                          {row.label}
                        </th>
                        <td>{row.before}</td>
                        <td>{row.after}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {afterTable && afterTable.length > 0 && (
                <div className="prose" style={{ maxWidth: 760 }}>
                  {afterTable.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              )}
            </section>
          )}

          {next && next.length > 0 && (
            <section className="split split--top reveal border-t border-line pt-8" aria-labelledby="next-h">
              <h2 id="next-h" className="h3">
                {t('next')}
              </h2>
              <div className="stack min-w-0">
                {nextIntro && <p className="lead">{nextIntro}</p>}
                <ol className="num-list">
                  {next.map((item) => (
                    <li key={item}>
                      <p>{item}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </section>
          )}

          {elsewhere && elsewhere.length > 0 && (
            <section className="split split--top reveal border-t border-line pt-8" aria-labelledby="elsewhere-h">
              <h2 id="elsewhere-h" className="h3">
                {t('elsewhere')}
              </h2>
              <div className="prose min-w-0">
                {elsewhereIntro && <p>{elsewhereIntro}</p>}
                <ul>
                  {elsewhere.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {elsewhereOutro && <p>{elsewhereOutro}</p>}
              </div>
            </section>
          )}

          {caseStudy.techStack.length > 0 && (
            <section className="split split--top reveal border-t border-line pt-8" aria-labelledby="stack-h">
              <h2 id="stack-h" className="h3">
                {t('techStack')}
              </h2>
              <ul className="chips" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {caseStudy.techStack.map((tech) => (
                  <li key={tech} className="tag tag--line" style={{ fontSize: 12, padding: '6px 10px' }}>
                    {tech}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {caseStudy.testimonial && (
            <figure className="reveal m-0 rounded-md bg-wash border-l-2 border-blue" style={{ padding: 'clamp(24px,3vw,40px)' }}>
              <blockquote className="m-0 text-ink" style={{ fontSize: 'clamp(20px,2vw,26px)', lineHeight: 1.35, letterSpacing: '-.015em', fontWeight: 500 }}>
                &ldquo;{caseStudy.testimonial.text}&rdquo;
              </blockquote>
              <figcaption className="small" style={{ marginTop: 18 }}>
                <span className="text-ink" style={{ fontWeight: 600 }}>
                  {caseStudy.testimonial.author}
                </span>{' '}
                — {caseStudy.testimonial.role}
              </figcaption>
            </figure>
          )}
        </div>
      </section>

      <section className="section section--ink" aria-labelledby="case-cta-h">
        <div className="container cta-band reveal">
          <div className="stack">
            <h2 id="case-cta-h" className="h2">
              {t('startSimilar')}
            </h2>
            <p className="lead">{tp('ctaLead')}</p>
          </div>
          <ButtonLink href="/contact" arrow>
            {tp('ctaButton')}
          </ButtonLink>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section--alt" aria-labelledby="related-h">
          <div className="container">
            <h2 id="related-h" className="h2 reveal" style={{ marginBottom: 'var(--head-gap)' }}>
              {t('relatedCases')}
            </h2>
            <div className="grid-3 stagger wipe">
              {related.map((c) => {
                const [first, ...rest] = c.results
                return (
                  <CaseCard
                    key={c.slug}
                    href={caseHref(c.slug)}
                    image={caseImage(c)}
                    sector={c.industry}
                    title={c.hero.title}
                    description={c.hero.tagline}
                    metric={first ? { value: first.value, label: first.metric } : undefined}
                    results={rest}
                  />
                )
              })}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
