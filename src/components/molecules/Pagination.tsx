'use client'

import { useTranslations } from 'next-intl'

type Props = {
  page: number
  pageSize: number
  total: number
  onPage: (page: number) => void
}

/** "Articles 1–6 of 11 · page 1 of 2", ← Prev, numbered squares (active in ink), Next →. */
export function Pagination({ page, pageSize, total, onPage }: Props) {
  const t = useTranslations('ui.blog')
  const pages = Math.max(1, Math.ceil(total / pageSize))
  const from = total === 0 ? 0 : (page - 1) * pageSize + 1
  const to = Math.min(total, page * pageSize)

  return (
    <nav className="pager" aria-label={t('pages')}>
      <p className="pager-info" aria-live="polite">
        {t('pagination', { from, to, total, page, pages })}
      </p>
      {pages > 1 && (
        <div className="pager-ctl">
          <button type="button" className="btn btn--outline btn--sm" disabled={page <= 1} onClick={() => onPage(page - 1)}>
            <span>{t('prev')}</span>
          </button>
          {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
            <button
              type="button"
              key={n}
              className="seg"
              aria-current={n === page ? 'page' : undefined}
              aria-label={t('page', { n })}
              onClick={() => onPage(n)}
            >
              {n}
            </button>
          ))}
          <button type="button" className="btn btn--outline btn--sm" disabled={page >= pages} onClick={() => onPage(page + 1)}>
            <span>{t('next')}</span>
          </button>
        </div>
      )}
    </nav>
  )
}
