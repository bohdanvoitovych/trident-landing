'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Chip } from '@/components/atoms/controls'
import { TeamCard } from '@/components/molecules/TeamCard'
import type { TeamMember } from '@/data/team'

const ALL = 'All'

/** Discipline filter over the team grid. The first render (All) is server-rendered. */
export function TeamFilter({ members, departments }: { members: TeamMember[]; departments: readonly string[] }) {
  const t = useTranslations('ui.team')
  const tp = useTranslations('pages.team.departments')
  const [dept, setDept] = useState<string>(ALL)
  const groups = departments.filter((d) => members.some((m) => m.department === d))
  const shown = dept === ALL ? members : members.filter((m) => m.department === dept)

  return (
    <div className="stack stack--lg">
      <div className="chips reveal" role="group" aria-label={t('filter')}>
        {[ALL, ...groups].map((d) => (
          <Chip key={d} aria-pressed={dept === d} onClick={() => setDept(d)}>
            {d === ALL ? t('all') : tp(d)}
            <span className="count">{d === ALL ? members.length : members.filter((m) => m.department === d).length}</span>
          </Chip>
        ))}
      </div>
      <ul className="grid-4 keep-2 team-grid stagger wipe" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {shown.map((m) => (
          <li key={m.slug} className="stack" style={{ gap: 12 }}>
            <TeamCard member={m} />
            <ul className="chips" style={{ listStyle: 'none', margin: 0, padding: 0, gap: 5, paddingLeft: 14 }}>
              {m.expertise.map((x) => (
                <li key={x} className="tag tag--line" style={{ whiteSpace: 'normal' }}>
                  {x}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}
