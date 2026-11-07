import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { ButtonLink, Tag } from '@/components/atoms/controls'
import { CaseCard } from '@/components/molecules/CaseCard'
import { PageHero } from '@/components/molecules/PageHero'
import { getRelatedCases } from '@/data/cases'
import type { CaseData } from '@/data/cases'

type Props = {
  caseStudy: CaseData
}

/** Two cases have no screenshot; their cards get a secondary stock photo. */
const FALLBACK_IMAGE: Record<string, string> = {
  'iam-trade': '/images/stock/b2b-portal.jpg',
  arenawave: '/images/stock/iot-device.jpg',
}

export function caseImage(c: CaseData) {
  return c.hero.image ?? FALLBACK_IMAGE[c.slug]
}

export function CasePage({ caseStudy }: Props) {
  const t = useTranslations('cases')
  const tu = useTranslations('ui')
  const related = getRelatedCases(caseStudy.relatedCases)

  const blocks = [
    { id: 'challenge', title: t('challenge'), text: caseStudy.challenge },
    { id: 'approach', title: t('approach'), text: caseStudy.approach },
    { id: 'solution', title: t('solution'), text: caseStudy.solution },
  ]

  return (
    <>
      <PageHero
        crumbs={[
          { name: tu('nav.projects'), href: '/cases' },
          { name: caseStudy.client, href: `/cases/${caseStudy.slug}` },
        ]}
        label={caseStudy.industry}
        title={caseStudy.hero.title}
        lead={caseStudy.hero.tagline}
        actions={
          <div className="stack" style={{ gap: 14 }}>
            <p className="meta" style={{ margin: 0 }}>
              Client: <span className="text-ink">{caseStudy.client}</span>
            </p>
            <div className="chips" style={{ gap: 6 }}>
              {caseStudy.services.slice(0, 2).map((s) => (
                <Tag key={s} tone="wash">
                  {s.replace(/-/g, ' ')}
                </Tag>
              ))}
            </div>
            <Link href="/cases" className="text-link">
              <span aria-hidden="true">←</span>
              All cases
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
          {blocks.map((b) => (
            <section key={b.id} className="split split--top reveal border-t border-line pt-8" aria-labelledby={`${b.id}-h`}>
              <h2 id={`${b.id}-h`} className="h3">
                {b.title}
              </h2>
              <p className="lead">{b.text}</p>
            </section>
          ))}

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
            <p className="lead">Let&apos;s discuss your project. We respond within 24 hours.</p>
          </div>
          <ButtonLink href="/contact" arrow>
            Get a Quote
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
                    href={`/cases/${c.slug}`}
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
