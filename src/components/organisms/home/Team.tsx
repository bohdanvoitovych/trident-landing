import { useTranslations, useLocale } from 'next-intl'
import { getTeam, type TeamMember } from '@/data/team'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { TeamCard } from '@/components/molecules/TeamCard'

// Leadership and management first — the people a prospect actually meets.
const ORDER = ['Leadership', 'Management']
const featured = (team: TeamMember[]) =>
  [...team]
    .sort((a, b) => {
      const ai = ORDER.indexOf(a.department)
      const bi = ORDER.indexOf(b.department)
      return (ai === -1 ? ORDER.length : ai) - (bi === -1 ? ORDER.length : bi)
    })
    .slice(0, 8)

export function Team() {
  const t = useTranslations('ui.actions')
  const FEATURED = featured(getTeam(useLocale()))
  return (
    <section className="section" id="team" aria-labelledby="team-h">
      <div className="container">
        <SectionHeader
          id="team-h"
          label="Who you work with"
          title="The same people from audit to handover"
          action={{ href: '/team', label: t('meetTeam') }}
        />
        <div className="grid-4 keep-2 team-grid stagger">
          {FEATURED.map((m) => (
            <TeamCard key={m.slug} member={m} />
          ))}
        </div>
      </div>
    </section>
  )
}
