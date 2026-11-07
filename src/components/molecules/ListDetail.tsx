'use client'

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from 'react'

export type ListDetailItem = { title: string; body: ReactNode; extra?: ReactNode }

type Props = {
  items: ListDetailItem[]
  label: string
  /** Shown at the bottom of the dark panel (e.g. "Didn't find your question?" + action). */
  footer?: ReactNode
}

const pad = (n: number) => String(n).padStart(2, '0')

/**
 * Numbered list on the left, dark detail panel on the right. Every panel is
 * server-rendered (inactive ones carry `hidden`), so crawlers see all answers;
 * the client only switches which one is visible.
 */
export function ListDetail({ items, label, footer }: Props) {
  const [active, setActive] = useState(0)
  const id = useId()
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  const panels = useRef<(HTMLDivElement | null)[]>([])

  const select = (i: number, focus = false) => {
    setActive(i)
    if (focus) tabs.current[i]?.focus()
    if (!focus && window.matchMedia('(max-width: 1100px)').matches) {
      requestAnimationFrame(() => panels.current[i]?.scrollIntoView({ block: 'nearest', behavior: 'smooth' }))
    }
  }

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const last = items.length - 1
    const to =
      e.key === 'ArrowDown' || e.key === 'ArrowRight'
        ? (i === last ? 0 : i + 1)
        : e.key === 'ArrowUp' || e.key === 'ArrowLeft'
          ? (i === 0 ? last : i - 1)
          : e.key === 'Home'
            ? 0
            : e.key === 'End'
              ? last
              : -1
    if (to < 0) return
    e.preventDefault()
    select(to, true)
  }

  return (
    <div className="ld reveal">
      <div role="tablist" aria-label={label} aria-orientation="vertical" className="ld-list">
        {items.map((it, i) => (
          <button
            key={it.title}
            ref={(el) => {
              tabs.current[i] = el
            }}
            type="button"
            role="tab"
            id={`${id}-t${i}`}
            aria-selected={active === i}
            aria-controls={`${id}-p${i}`}
            tabIndex={active === i ? 0 : -1}
            className="ld-tab"
            onClick={() => select(i)}
            onKeyDown={(e) => onKey(e, i)}
          >
            <span className="n">{pad(i + 1)}</span>
            <span>{it.title}</span>
            <span className="go" aria-hidden="true">
              →
            </span>
          </button>
        ))}
      </div>
      <>
        {items.map((it, i) => (
          <div
            key={it.title}
            ref={(el) => {
              panels.current[i] = el
            }}
            role="tabpanel"
            id={`${id}-p${i}`}
            aria-labelledby={`${id}-t${i}`}
            className="ld-panel"
            hidden={active !== i}
            tabIndex={0}
          >
            <span className="n">
              {pad(i + 1)} / {pad(items.length)}
            </span>
            <h3>{it.title}</h3>
            {typeof it.body === 'string' ? <p>{it.body}</p> : it.body}
            {it.extra}
            {footer && <div className="ld-foot">{footer}</div>}
          </div>
        ))}
      </>
    </div>
  )
}
