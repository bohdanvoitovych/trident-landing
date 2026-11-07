import type { ReactNode } from 'react'
import { useTranslations } from 'next-intl'
import { PageHero } from '@/components/molecules/PageHero'

type Props = {
  title: string
  path: string
  /** "Last updated: …" line, when the page has one. */
  updated?: string
  children: ReactNode
}

/** Legal page: hero with breadcrumbs, then the text as `prose` in a 760px column. */
export function LegalPage({ title, path, updated, children }: Props) {
  const t = useTranslations('ui.legal')
  return (
    <>
      <PageHero crumbs={[{ name: title, href: path }]} label={t('label')} title={title} lead={updated} />
      <div className="section--line">
        <div className="container py-[clamp(48px,6vw,88px)]">
          <div className="prose" style={{ maxWidth: 760 }}>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
