import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { useTranslations, useLocale } from 'next-intl'
import { ButtonLink, Tag } from '@/components/atoms/controls'
import { CaseCard } from '@/components/molecules/CaseCard'
import { PageHero } from '@/components/molecules/PageHero'
import { caseHref, caseImage, getRelatedCases, isCaseStudy } from '@/data/cases'
import { getCaseIndustry } from '@/data/industries'
import { getServiceBySlug } from '@/data/services'
import type { CaseData, CaseSection } from '@/data/cases'

type Props = {
  caseStudy: CaseData
}

/** Paragraphs, bullet list and closing paragraphs of one long-form section. */
function SectionText({ sec }: { sec: CaseSection }) {
  return (
    <div className="prose">
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
  )
}

type Group =
  | { kind: 'section'; id: string; sec: CaseSection }
  | { kind: 'steps'; id: string; steps: { n: string; title: string; sec: CaseSection }[] }

/** Sections titled "1. …", "2. …" in a row become one numbered list of steps. */
function groupSections(sections: CaseSection[] = []): Group[] {
  const out: Group[] = []
  sections.forEach((sec, i) => {
    const m = sec.title.match(/^(\d+)\.\s+(.*)$/)
    const last = out[out.length - 1]
    if (!m) return out.push({ kind: 'section', id: `sec-${i}`, sec })
    const step = { n: m[1], title: m[2], sec }
    if (last?.kind === 'steps') last.steps.push(step)
    else out.push({ kind: 'steps', id: `steps-${i}`, steps: [step] })
  })
  return out
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
  const groups = groupSections(sections)
  const toc = [
    ...blocks.map((b) => ({ id: b.id, title: b.title })),
    ...groups.flatMap((g) => (g.kind === 'section' ? [{ id: g.id, title: g.sec.title }] : [])),
    ...(table ? [{ id: 'results', title: table.title }] : []),
    ...(next?.length ? [{ id: 'next', title: t('next') }] : []),
    ...(elsewhere?.length ? [{ id: 'elsewhere', title: t('elsewhere') }] : []),
  ]

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
        <div className="container case-article">
          {toc.length > 2 && (
            <nav className="case-toc" aria-label={tp('contents')}>
              <p className="meta">{tp('contents')}</p>
              <ol>
                {toc.map((x) => (
                  <li key={x.id}>
                    <a href={`#${x.id}`}>{x.title}</a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <div className="case-body">
            {note && <p className="case-note">{note}</p>}

            {blocks.map((b) => (
              <section key={b.id} id={b.id} aria-labelledby={`${b.id}-h`}>
                <h2 id={`${b.id}-h`} className="case-h">
                  {b.title}
                </h2>
                <div className="prose">
                  <p>{b.text}</p>
                </div>
              </section>
            ))}

            {groups.map((g) =>
              g.kind === 'section' ? (
                <section key={g.id} id={g.id} aria-labelledby={`${g.id}-h`}>
                  <h2 id={`${g.id}-h`} className="case-h">
                    {g.sec.title}
                  </h2>
                  <SectionText sec={g.sec} />
                </section>
              ) : (
                <ol key={g.id} className="case-steps">
                  {g.steps.map(({ n, title, sec }) => (
                    <li key={title}>
                      <span className="n" aria-hidden="true">
                        {n}
                      </span>
                      <div>
                        <h3>{title}</h3>
                        <SectionText sec={sec} />
                      </div>
                    </li>
                  ))}
                </ol>
              ),
            )}

            {table && (
              <section id="results" aria-labelledby="table-h">
                <h2 id="table-h" className="case-h">
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
                  <div className="prose" style={{ marginTop: 24 }}>
                    {afterTable.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                )}
              </section>
            )}

            {next && next.length > 0 && (
              <section id="next" aria-labelledby="next-h">
                <h2 id="next-h" className="case-h">
                  {t('next')}
                </h2>
                <div className="prose">{nextIntro && <p>{nextIntro}</p>}</div>
                <ol className="num-list">
                  {next.map((item) => (
                    <li key={item}>
                      <p>{item}</p>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {elsewhere && elsewhere.length > 0 && (
              <section id="elsewhere" aria-labelledby="elsewhere-h">
                <h2 id="elsewhere-h" className="case-h">
                  {t('elsewhere')}
                </h2>
                <div className="prose">
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
              <section id="stack" aria-labelledby="stack-h">
                <h2 id="stack-h" className="case-h">
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
              <figure className="m-0 rounded-md bg-wash border-l-2 border-blue" style={{ padding: 'clamp(24px,3vw,40px)' }}>
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
