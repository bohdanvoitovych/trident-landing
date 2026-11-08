'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { TextLink } from '@/components/atoms/controls'
import { Accordion } from '@/components/molecules/Accordion'
import type { FaqItem } from '@/data/faq'

type Props = { faq: FaqItem[]; groups: Record<FaqItem['group'], string> }

/** Full FAQ: search box + grouped accordions. Server renders the unfiltered list. */
export function FaqSearch({ faq, groups }: Props) {
  const t = useTranslations('ui')
  const [query, setQuery] = useState('')
  const q = query.trim().toLowerCase()
  const matches = q ? faq.filter((f) => `${f.question} ${f.answer}`.toLowerCase().includes(q)) : faq

  return (
    <div className="stack stack--lg">
      <div className="stack" style={{ gap: 10 }}>
        <div className="search">
          <label htmlFor="faq-search" className="sr-only">
            {t('faq.searchLabel')}
          </label>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="7" cy="7" r="5.25" stroke="currentColor" strokeWidth="1.5" />
            <path d="M11 11l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            id="faq-search"
            className="input"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('faq.search')}
            autoComplete="off"
          />
        </div>
        <p className="meta" aria-live="polite" style={{ margin: 0 }}>
          {t('faq.results', { count: matches.length })}
        </p>
      </div>

      {matches.length === 0 ? (
        <div className="empty stack" style={{ alignItems: 'center' }}>
          <p style={{ margin: 0 }}>{t('faq.noResults', { q: query.trim() })}</p>
          <TextLink href="/contact">{t('actions.askDirectly')}</TextLink>
        </div>
      ) : (
        <div className="faq-groups">
          {(Object.keys(groups) as FaqItem['group'][]).map((key) => {
            const items = matches.filter((f) => f.group === key)
            if (items.length === 0) return null
            return (
              <div key={key} className="faq-group">
                <h2 id={`faq-${key}`} className="h4" style={{ overflowWrap: 'anywhere' }}>
                  {groups[key]}
                </h2>
                <Accordion items={items} idPrefix={`faq-${key}`} />
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
