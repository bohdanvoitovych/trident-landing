import Image from 'next/image'
import { Linkedin, Facebook } from 'lucide-react'
import type { TeamMember } from '@/data/team'

/** 4:5 cut-out on a wash→line gradient, name and role under a blue rule. No country. */
export function TeamCard({ member, headingLevel = 3 }: { member: TeamMember; headingLevel?: 3 | 4 }) {
  const H = headingLevel === 3 ? 'h3' : 'h4'
  return (
    <figure className="team-card">
      <div className="media">
        {member.image && (
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1100px) 50vw, 300px"
          />
        )}
      </div>
      <figcaption className="team-meta">
        <H style={{ margin: 0, font: 'inherit' }}>
          <b>{member.name}</b>
        </H>
        <span>{member.role}</span>
        {(member.linkedin || member.facebook) && (
          <span className="team-links">
            {member.linkedin && (
              <a href={member.linkedin} aria-label={`${member.name} on LinkedIn`} target="_blank" rel="noopener noreferrer">
                <Linkedin size={16} aria-hidden="true" />
              </a>
            )}
            {member.facebook && (
              <a href={member.facebook} aria-label={`${member.name} on Facebook`} target="_blank" rel="noopener noreferrer">
                <Facebook size={16} aria-hidden="true" />
              </a>
            )}
          </span>
        )}
      </figcaption>
    </figure>
  )
}
