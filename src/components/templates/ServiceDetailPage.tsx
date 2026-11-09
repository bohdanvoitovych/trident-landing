import type { ReactNode } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { ButtonLink } from '@/components/atoms/controls'
import { PageHero } from '@/components/molecules/PageHero'
import { CaseCard } from '@/components/molecules/CaseCard'
import { ListDetail } from '@/components/molecules/ListDetail'
import { AgentVsHire } from '@/components/organisms/home/AgentVsHire'
import { Integrations } from '@/components/organisms/home/Integrations'
import { WhereWeSayNo } from '@/components/organisms/home/WhereWeSayNo'
import { Process } from '@/components/organisms/home/Process'
import { caseImage, getCases } from '@/data/cases'
import type { ServiceData } from '@/data/services'
import type { Point, ServiceDetail } from '@/data/ai-services'

type Props = {
  service: ServiceData & { detail: ServiceDetail }
}

/** Anchor of the "Where we say no" section; the copy links to it as "#limits". */
const LIMITS_ID = 'limits'

/** Turns "[label](href)" in the copy into links: in-page anchors stay plain, routes get the locale prefix. */
function withLinks(text: string): ReactNode {
  return text.split(/(\[[^\]]+\]\([^)]+\))/g).map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (!m) return part
    return m[2].startsWith('#') ? (
      <a key={i} href={m[2]}>
        {m[1]}
      </a>
    ) : (
      <Link key={i} href={m[2]}>
        {m[1]}
      </Link>
    )
  })
}

function Head({ id, title, lead }: { id: string; title: string; lead?: string }) {
  return (
    <div className="section-head reveal">
      <div>
        <h2 id={id} className="h2">
          {title}
        </h2>
        {lead && <p className="lead">{lead}</p>}
      </div>
    </div>
  )
}

/** Same layout as the trust list on /services: heading left, ruled list right. */
function PointList({ id, title, items, alt }: { id: string; title: string; items: Point[]; alt?: boolean }) {
  return (
    <section className={alt ? 'section section--alt' : 'section'} aria-labelledby={id}>
      <div className="container split split--top">
        <h2 id={id} className="h2 reveal">
          {title}
        </h2>
        <ul className="reveal border-t-2 border-ink" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {items.map((p) => (
            <li key={p.lead} className="flex flex-col gap-2 border-b border-line py-6">
              <h3 className="h4">{p.lead}</h3>
              <p className="body">{withLinks(p.text)}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/**
 * Long-form service page (the PDF's "Sales on Autopilot with AI" for /services/ai-services).
 * Reuses the home sections (agent vs hire, integrations, where we say no, process) with the
 * page's own wording; the rest is built from the same primitives as ServicePage and CasePage.
 */
export function ServiceDetailPage({ service }: Props) {
  const d = service.detail
  const locale = useLocale()
  const tp = useTranslations('templates.service')
  const ts = useTranslations('services')
  const ta = useTranslations('ui.actions')
  const tf = useTranslations('ui.faq')
  const related = getCases(locale).filter((c) => service.relatedCases.includes(c.slug))

  return (
    <>
      <PageHero
        crumbs={[
          { name: tp('crumb'), href: '/services' },
          { name: service.title, href: `/services/${service.slug}` },
        ]}
        label={d.kicker}
        title={d.title}
        lead={d.lede}
        actions={
          <>
            <ButtonLink href="/contact" arrow>
              {ta('bookAudit')}
            </ButtonLink>
            <ButtonLink href="/pricing" variant="outline">
              {d.next.economics}
            </ButtonLink>
          </>
        }
        aside={
          <div className="panel">
            <p className="h4 text-blue-d">{d.intro}</p>
          </div>
        }
      />

      {/* The gap */}
      <section className="section section--alt" aria-labelledby="gap-h">
        <div className="container">
          <Head id="gap-h" title={d.gap.title} lead={d.gap.intro} />
          <ul className="grid-3 stagger" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {d.gap.items.map((g) => (
              <li key={g.lead} className="card card--flat feature-card">
                <h3>{g.lead}</h3>
                <p>{g.text}</p>
              </li>
            ))}
          </ul>
          <p className="lead reveal" style={{ marginTop: 'clamp(28px,3.4vw,44px)', maxWidth: 760 }}>
            {d.gap.close}
          </p>
        </div>
      </section>

      {/* What the agent does */}
      <section className="section" aria-labelledby="does-h">
        <div className="container split split--top">
          <div className="stack reveal">
            <h2 id="does-h" className="h2">
              {d.does.title}
            </h2>
            <p className="body">{d.does.close}</p>
          </div>
          <ol className="num-list reveal">
            {d.does.items.map((item) => (
              <li key={item.lead}>
                <div>
                  <h3>{item.lead}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <AgentVsHire title={d.fte.title} lead={d.fte.intro} rows={d.fte.rows} note={d.fte.close} />

      {/* Channels */}
      <section className="section" aria-labelledby="channels-h">
        <div className="container split split--top">
          <div className="stack reveal">
            <h2 id="channels-h" className="h2">
              {d.channels.title}
            </h2>
            <p className="body">{d.channels.note}</p>
          </div>
          <ul className="chips reveal" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {d.channels.items.map((c) => (
              <li key={c} className="tag tag--line">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="section--line">
        <Integrations title={d.integrations.title} lead={d.integrations.lead} groups={d.integrations.groups} note={d.integrations.note} />
      </div>

      <WhereWeSayNo id={LIMITS_ID} lead={d.limits.intro} items={d.limits.items} />

      <Process
        title={d.delivery.title}
        lead={d.delivery.intro}
        note={d.delivery.close}
        stages={d.delivery.stages.map((s) => ({ ...s, text: withLinks(s.text) }))}
      />

      {/* Languages */}
      <section className="section" aria-labelledby="langs-h">
        <div className="container split split--top">
          <h2 id="langs-h" className="h2 reveal">
            {d.languages.title}
          </h2>
          <div className="prose min-w-0 reveal">
            {d.languages.paragraphs.map((p) => (
              <p key={p}>{withLinks(p)}</p>
            ))}
          </div>
        </div>
      </section>

      <PointList id="data-h" title={d.data.title} items={d.data.items} alt />
      <PointList id="guarantees-h" title={d.guarantees.title} items={d.guarantees.items} />

      <section className="section section--alt" aria-labelledby="svc-faq-h">
        <div className="container">
          <Head id="svc-faq-h" title={d.faq.title} />
          <ListDetail label={tf('questions')} items={d.faq.items.map((f) => ({ title: f.question, body: f.answer }))} />
        </div>
      </section>

      <section className="section section--ink" aria-labelledby="svc-next-h">
        <div className="container cta-band reveal">
          <div className="stack" style={{ maxWidth: 760 }}>
            <h2 id="svc-next-h" className="h2">
              {d.next.title}
            </h2>
            <p className="lead">{d.next.text}</p>
          </div>
          <div className="hero-ctas">
            <ButtonLink href="/contact" arrow>
              {ta('bookAudit')}
            </ButtonLink>
            <ButtonLink href="/pricing" variant="outline">
              {d.next.economics}
            </ButtonLink>
            <ButtonLink href="/use-cases" variant="outline">
              {ta('allUseCases')}
            </ButtonLink>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section--alt" aria-labelledby="related-h">
          <div className="container">
            <Head id="related-h" title={ts('relatedCases')} lead={tp('portfolioLead', { service: service.title })} />
            <div className="grid-3 stagger wipe">
              {related.map((c) => (
                <CaseCard
                  key={c.slug}
                  href={`/cases/${c.slug}`}
                  image={caseImage(c)}
                  imageAlt={c.hero.title}
                  sector={c.industry}
                  title={c.hero.title}
                  description={c.hero.tagline}
                  results={c.results}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
