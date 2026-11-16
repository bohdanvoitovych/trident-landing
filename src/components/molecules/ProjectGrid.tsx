'use client'

import { useMemo, useState } from 'react'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Chip } from '@/components/atoms/controls'
import type { Project } from '@/data/projects'

type Props = {
  projects: Project[]
  sectors: string[]
}

const ALL = 'All'

function ProjectCardBody({ p }: { p: Project }) {
  const t = useTranslations('molecules.projectGrid')
  return (
    <>
      <div className="media">
        <Image src={p.image} alt={p.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 300px" />
      </div>
      <div className="card-body">
        <span className="meta">{p.sector}</span>
        <h3 className="card-title card-title--sm">{p.title}</h3>
        <p className="small" style={{ fontSize: 14, lineHeight: 1.55 }}>
          {p.summary}
        </p>
        {p.caseSlug ? (
          <span className="card-more text-blue-d">
            {t('readCase')}
            <span className="go" aria-hidden="true">
              →
            </span>
          </span>
        ) : (
          <details className="proj-more">
            <summary>{t('more')}</summary>
            {p.details.map((d) => (
              <p key={d}>{d}</p>
            ))}
            <ul className="chips" aria-label={t('tags')}>
              {p.tags.map((x) => (
                <li key={x} className="tag tag--line">
                  {x}
                </li>
              ))}
            </ul>
          </details>
        )}
      </div>
    </>
  )
}

/** Everything delivered, filtered by sector. A card with a case study links to it; the rest expand in place. */
export function ProjectGrid({ projects, sectors }: Props) {
  const t = useTranslations('ui')
  const [sector, setSector] = useState<string>(ALL)

  const filtered = useMemo(
    () => (sector === ALL ? projects : projects.filter((p) => p.sector === sector)),
    [projects, sector],
  )

  const counts = useMemo(() => {
    const c: Record<string, number> = {}
    for (const p of projects) c[p.sector] = (c[p.sector] ?? 0) + 1
    return c
  }, [projects])

  return (
    <div className="stack stack--lg">
      <div className="chips reveal" role="group" aria-label={t('portfolio.filter')}>
        {[ALL, ...sectors].map((s) => (
          <Chip key={s} aria-pressed={sector === s} onClick={() => setSector(s)}>
            {s === ALL ? t('blog.all') : s}
            <span className="count">{s === ALL ? projects.length : counts[s]}</span>
          </Chip>
        ))}
      </div>

      <div className="grid-4 stagger wipe">
        {filtered.map((p) =>
          p.caseSlug ? (
            <Link key={p.slug} href={`/cases/${p.caseSlug}`} className="card svc-card">
              <ProjectCardBody p={p} />
            </Link>
          ) : (
            <article key={p.slug} className="card svc-card card--flat">
              <ProjectCardBody p={p} />
            </article>
          ),
        )}
      </div>
    </div>
  )
}
