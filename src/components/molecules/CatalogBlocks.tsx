import { Link } from '@/i18n/navigation'
import type { ReactNode } from 'react'
import { ButtonLink, Tag } from '@/components/atoms/controls'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { CaseCard } from '@/components/molecules/CaseCard'
import { caseImage, type CaseData } from '@/data/cases'
import type { ServiceData } from '@/data/services'

/** Blocks shared by the industry, technology and location detail pages. */

/** Returns 'section section--alt', 'section', 'section section--alt', … on each call. */
export function sectionRhythm() {
  let i = 0
  return () => (i++ % 2 === 0 ? 'section section--alt' : 'section')
}

export function TagList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2" role="list">
      {items.map((t) => (
        <li key={t}>
          <Tag tone="line">{t}</Tag>
        </li>
      ))}
    </ul>
  )
}

/** Compact band: small h2 + a list of technology tags. */
export function StackBand({ id, title, items, className }: { id: string; title: ReactNode; items: string[]; className: string }) {
  return (
    <section className={`${className} section--band`} aria-labelledby={id}>
      <div className="container stack reveal">
        <h2 id={id} className="h4">
          {title}
        </h2>
        <TagList items={items} />
      </div>
    </section>
  )
}

export function FeatureGrid({
  items,
  cols = 3,
}: {
  items: { title: string; description: string }[]
  cols?: 2 | 3
}) {
  return (
    <ul className={`grid-${cols} stagger`} role="list" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
      {items.map((it) => (
        <li key={it.title} className="card card--flat feature-card">
          <h3>{it.title}</h3>
          <p>{it.description}</p>
        </li>
      ))}
    </ul>
  )
}

export function RelatedServices({
  id,
  className,
  label,
  title,
  lead,
  services,
  more,
  cols = 3,
}: {
  id: string
  className: string
  label: string
  title: string
  lead: string
  services: ServiceData[]
  /** Text of the card's "more" line, when the page had one. */
  more?: string
  cols?: 2 | 3
}) {
  return (
    <section className={className} aria-labelledby={id}>
      <div className="container">
        <SectionHeader id={id} label={label} title={title} lead={lead} />
        <div className={`grid-${cols} stagger`}>
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="card flex">
              <div className="card-body">
                <h3 className="card-title card-title--sm">
                  {s.title}
                  {!more && (
                    <>
                      {' '}
                      <span className="go" aria-hidden="true">
                        →
                      </span>
                    </>
                  )}
                </h3>
                <p className="small line-clamp-2">{s.tagline}</p>
                {more && (
                  <span className="card-more">
                    {more} <span className="go" aria-hidden="true">→</span>
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function RelatedCases({
  id,
  className,
  label,
  title,
  lead,
  cases,
}: {
  id: string
  className: string
  label: string
  title: string
  lead: string
  cases: CaseData[]
}) {
  return (
    <section className={className} aria-labelledby={id}>
      <div className="container">
        <SectionHeader id={id} label={label} title={title} lead={lead} />
        <div className="grid-3 stagger wipe">
          {cases.map((c) => (
            <CaseCard
              key={c.slug}
              href={`/cases/${c.slug}`}
              image={caseImage(c)}
              sector={c.industry}
              title={c.hero.title}
              description={c.hero.tagline}
              results={c.results}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/** Closing dark band: h2 + one line + one primary button to /contact. */
export function CtaBand({ id, title, text, button }: { id: string; title: ReactNode; text: ReactNode; button: string }) {
  return (
    <section className="section section--dark" aria-labelledby={id}>
      <div className="container cta-band reveal">
        <div className="stack" style={{ maxWidth: 760 }}>
          <h2 id={id} className="h2">
            {title}
          </h2>
          <p className="lead">{text}</p>
        </div>
        <ButtonLink href="/contact" arrow>
          {button}
        </ButtonLink>
      </div>
    </section>
  )
}
