import Image from 'next/image'
import Link from 'next/link'
import { team } from '@/data/team'

// Leadership and management first — the people a prospect actually meets.
const ORDER = ['Leadership', 'Management']
const FEATURED = [...team]
  .sort((a, b) => {
    const ai = ORDER.indexOf(a.department)
    const bi = ORDER.indexOf(b.department)
    return (ai === -1 ? ORDER.length : ai) - (bi === -1 ? ORDER.length : bi)
  })
  .slice(0, 8)

export function Team() {
  return (
    <section className="sec" id="team" data-screen-label="Team">
      <div className="wrap">
        <div className="sec-head-row">
          <div className="t">
            <span className="label">Who you work with</span>
            <h2 className="h2">The same people from audit to handover</h2>
          </div>
          <Link href="/team" className="btn btn-outline">
            Meet the team <span className="ar">→</span>
          </Link>
        </div>

        <div className="team-grid">
          {FEATURED.map((member) => (
            <article key={member.slug} className="team-card rv">
              <div className="team-shot">
                {member.image && (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 620px) 50vw, (max-width: 1000px) 33vw, 25vw"
                    className="slot-img"
                  />
                )}
              </div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-loc">{member.location}</p>
            </article>
          ))}
        </div>

        <p className="team-note">
          {team.length} engineers, project managers and QA across Switzerland and Ukraine.
        </p>
      </div>
    </section>
  )
}
