import type { CSSProperties, ReactNode } from 'react'
import { Link } from '@/i18n/navigation'
import { cn } from '@/lib/utils'

type Visual =
  | { kind: 'bar'; before: number; after: number }
  | { kind: 'beforeAfter'; after: number }
  | { kind: 'months'; month: number }
  | { kind: 'ring'; percent: number; size?: number }
  | { kind: 'rows'; rows: { label: string; value: number; text?: string; tone?: 'blue' | 'ink' }[] }
  | { kind: 'tags'; tags: string[] }

type Props = {
  source?: ReactNode
  value: ReactNode
  description: ReactNode
  visual?: Visual
  size?: 'md' | 'lg'
  /** Source line placement: top (hero) or bottom (problem section). */
  sourceAt?: 'top' | 'bottom'
  className?: string
  /** Makes the whole card a link, e.g. to the case the figure comes from. */
  href?: string
}

const v = (n: number) => ({ '--v': n } as CSSProperties)

export function Ring({ percent, size = 76 }: { percent: number; size?: number }) {
  const off = Math.round(226 * (1 - percent / 100))
  return (
    <svg viewBox="0 0 90 90" width={size} height={size} aria-hidden="true">
      <circle cx="45" cy="45" r="36" fill="none" stroke="var(--line)" strokeWidth="9" />
      <circle
        className="ring-arc"
        cx="45"
        cy="45"
        r="36"
        stroke="var(--blue)"
        strokeDasharray="226"
        style={{ strokeDashoffset: off, '--off': off } as CSSProperties}
      />
    </svg>
  )
}

export function MiniVisual({ visual }: { visual: Visual }) {
  switch (visual.kind) {
    case 'bar':
      return (
        <div className="mini-bars" aria-hidden="true">
          <div className="track">
            <span className="fill fill--muted" style={v(visual.before)} />
          </div>
          <div className="track">
            <span className="fill" style={v(visual.after)} />
          </div>
        </div>
      )
    case 'beforeAfter':
      return (
        <div className="cols" aria-hidden="true">
          <span className="col" style={{ ...v(1), background: 'var(--line-2)' }} />
          <span className="col" style={{ ...v(visual.after), background: 'var(--blue)' }} />
          <span className="arrow">↓</span>
        </div>
      )
    case 'months':
      return (
        <div className="strip12" aria-hidden="true">
          {Array.from({ length: 12 }, (_, i) => (
            <span key={i} className={i + 1 === visual.month ? 'on' : i + 1 < visual.month ? 'past' : undefined} />
          ))}
        </div>
      )
    case 'ring':
      return <Ring percent={visual.percent} size={visual.size} />
    case 'rows':
      return (
        <div className="bar-rows" aria-hidden="true">
          {visual.rows.map((r) => (
            <div key={r.label} className={cn('bar-row', r.text && 'bar-row--val')}>
              <span>{r.label}</span>
              <div className="track track--10">
                <span className={cn('fill', r.tone === 'ink' && 'fill--ink')} style={v(r.value)} />
              </div>
              {r.text && <span>{r.text}</span>}
            </div>
          ))}
        </div>
      )
    case 'tags':
      return (
        <div className="chips" style={{ gap: 6 }}>
          {visual.tags.map((t) => (
            <span key={t} className="tag tag--wash">
              {t}
            </span>
          ))}
        </div>
      )
  }
}

/** Mono source line, big blue number, mini-visual, description. Never a plain black number. */
export function StatCard({ source, value, description, visual, size = 'md', sourceAt = 'top', className, href }: Props) {
  const src = source ? <span className="stat-src">{source}</span> : null
  const ring = visual?.kind === 'ring'
  const cls = cn('card stat-card', size === 'lg' && 'stat-card--lg', href && 'stat-card--link', className)
  const body = (
    <>
      {sourceAt === 'top' && src}
      {ring ? (
        <div className="ring-wrap">
          <MiniVisual visual={visual} />
          <span className={cn('stat-v', size === 'lg' && 'stat-v--xl')}>{value}</span>
        </div>
      ) : (
        <span className={cn('stat-v', size === 'lg' && 'stat-v--xl')}>{value}</span>
      )}
      {size === 'lg' && <span className="stat-d">{description}</span>}
      {visual && !ring && <MiniVisual visual={visual} />}
      {size !== 'lg' && <span className="stat-d">{description}</span>}
      {sourceAt === 'bottom' && <span className="stat-src" style={{ marginTop: ring ? 'auto' : undefined }}>{source}</span>}
    </>
  )
  return href ? (
    <Link href={href} className={cls}>
      {body}
    </Link>
  ) : (
    <div className={cls}>{body}</div>
  )
}
