'use client'

import { useId, useState, type ReactNode } from 'react'

export type Cap = { title: string; text: string; points: ReactNode[] }

/** Three capabilities; one open at a time. Closed panels stay in the HTML (hidden). */
export function AgentCaps({ caps }: { caps: Cap[] }) {
  const [open, setOpen] = useState(0)
  const id = useId()
  return (
    <div className="cap-list">
      {caps.map((c, i) => (
        <div className="cap" key={c.title}>
          <h3 style={{ margin: 0 }}>
            <button
              type="button"
              className="cap-btn"
              aria-expanded={open === i}
              aria-controls={`${id}-${i}`}
              onClick={() => setOpen(i)}
            >
              {c.title}
              <span className="sign" aria-hidden="true">
                {open === i ? '−' : '+'}
              </span>
            </button>
          </h3>
          <div id={`${id}-${i}`} className="cap-panel" hidden={open !== i}>
            <p className="body">{c.text}</p>
            <ul>
              {c.points.map((p, k) => (
                <li key={k}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}
