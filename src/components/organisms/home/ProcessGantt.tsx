import type { CSSProperties, ReactNode } from 'react'

type Stage = { t: string; d: ReactNode; days: string; a: number; b: number }

/** Static Gantt: one row per stage, its bar placed on a 30-day grid. */
export function ProcessGantt({ stages }: { stages: Stage[] }) {
  return (
    <div className="gantt">
      <ol className="gantt-rows">
        {stages.map((s) => (
          <li key={s.t} className="g-row is-past">
            <div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
            <div>
              <span className="g-days">{s.days}</span>
              <div className="g-track" aria-hidden="true">
                <span className="g-seg" style={{ gridColumn: `${s.a} / ${s.b}` }}>
                  <span className="g-fill" style={{ '--f': 1 } as CSSProperties} />
                </span>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
