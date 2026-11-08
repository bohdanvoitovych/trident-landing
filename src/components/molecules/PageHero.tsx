import { Link } from '@/i18n/navigation'
import type { ReactNode } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import JsonLd from '@/components/seo/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'
import { localizedUrl } from '@/lib/metadata'
import { Label } from '@/components/atoms/controls'

export type Crumb = { name: string; href: string }

/** Visible breadcrumb trail + BreadcrumbList JSON-LD. Last crumb is the current page. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const t = useTranslations('ui')
  const locale = useLocale()
  const all = [{ name: t('crumbHome'), href: '/' }, ...items]
  return (
    <>
      <JsonLd data={[breadcrumbSchema(all.map((c) => ({ name: c.name, url: localizedUrl(c.href, locale) })))]} />
      <nav aria-label={t('breadcrumb')}>
        <ol className="crumbs">
          {all.map((c, i) =>
            i === all.length - 1 ? (
              <li key={c.href} aria-current="page">
                {c.name}
              </li>
            ) : (
              <li key={c.href}>
                <Link href={c.href}>{c.name}</Link>
              </li>
            ),
          )}
        </ol>
      </nav>
    </>
  )
}

type Props = {
  label: ReactNode
  title: ReactNode
  lead?: ReactNode
  crumbs?: Crumb[]
  /** Optional right column (image, facts, actions). Hero becomes a split. */
  aside?: ReactNode
  /** Buttons under the lead. */
  actions?: ReactNode
  alt?: boolean
}

/** Inner-page hero: breadcrumbs, label, the page's only <h1>, lead, optional actions/aside. */
export function PageHero({ label, title, lead, crumbs, aside, actions, alt }: Props) {
  const copy = (
    <div className="stack" style={{ gap: 22 }}>
      {crumbs && <Breadcrumbs items={crumbs} />}
      <Label>{label}</Label>
      <h1 className="h1">{title}</h1>
      {lead && <p className="lead" style={{ maxWidth: 720 }}>{lead}</p>}
      {actions && <div className="hero-ctas">{actions}</div>}
    </div>
  )
  return (
    <section className={alt ? 'page-hero section--alt' : 'page-hero'}>
      <div className="container">
        {aside ? (
          <div className="split">
            {copy}
            <div className="reveal" style={{ minWidth: 0 }}>{aside}</div>
          </div>
        ) : (
          copy
        )}
      </div>
    </section>
  )
}
