import type { ReactNode } from 'react'
import { ButtonLink, Label } from '@/components/atoms/controls'
import { cn } from '@/lib/utils'

type Props = {
  label: ReactNode
  title: ReactNode
  lead?: ReactNode
  /** At most one action, rendered as an ink button, bottom-aligned on the right. */
  action?: { href: string; label: string }
  id?: string
  className?: string
  /** h1 on inner-page heroes, h2 everywhere else. */
  as?: 'h1' | 'h2'
  flag?: boolean
}

export function SectionHeader({ label, title, lead, action, id, className, as = 'h2', flag }: Props) {
  const H = as
  return (
    <div className={cn('section-head reveal', className)}>
      <div>
        <Label flag={flag}>{label}</Label>
        <H id={id} className={as === 'h1' ? 'h1' : 'h2'}>
          {title}
        </H>
        {lead && <p className="lead">{lead}</p>}
      </div>
      {action && (
        <ButtonLink href={action.href} variant="ink" arrow>
          {action.label}
        </ButtonLink>
      )}
    </div>
  )
}
