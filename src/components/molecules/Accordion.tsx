'use client'

import { useState } from 'react'

type Item = { question: string; answer: string }

/**
 * Question/answer accordion. Every answer is in the HTML; closed panels are
 * `hidden`. Each question is an h3 wrapping a real button with aria-expanded.
 */
export function Accordion({ items, idPrefix }: { items: Item[]; idPrefix: string }) {
  const [open, setOpen] = useState<Set<string>>(() => new Set())

  const toggle = (q: string) =>
    setOpen((prev) => {
      const next = new Set(prev)
      if (next.has(q)) next.delete(q)
      else next.add(q)
      return next
    })

  return (
    <div className="acc">
      {items.map((item, i) => {
        const isOpen = open.has(item.question)
        const btnId = `${idPrefix}-q${i}`
        const panelId = `${idPrefix}-a${i}`
        return (
          <div key={item.question} className="acc-item">
            <h3 className="m-0">
              <button
                type="button"
                id={btnId}
                className="acc-btn"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.question)}
              >
                <span>{item.question}</span>
                <span className="pm" aria-hidden="true">
                  +
                </span>
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={btnId} className="acc-panel" hidden={!isOpen}>
              {item.answer}
            </div>
          </div>
        )
      })}
    </div>
  )
}
