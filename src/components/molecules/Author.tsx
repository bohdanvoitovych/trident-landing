import Image from 'next/image'
import { team } from '@/data/team'
import { cn } from '@/lib/utils'

/** 34px round photo, name (600), role (ink-3). Photo comes from the team list when the name matches. */
export function Author({ name, role, large }: { name: string; role?: string; large?: boolean }) {
  const member = team.find((m) => m.name === name)
  const size = large ? 56 : 34
  return (
    <span className={cn('author', large && 'author--lg')}>
      {member?.image ? (
        <Image src={member.image} alt="" width={size} height={size} sizes={`${size}px`} />
      ) : (
        <span className="ph" aria-hidden="true" />
      )}
      <span>
        <b>{name}</b>
        {role && <span>{role}</span>}
      </span>
    </span>
  )
}
