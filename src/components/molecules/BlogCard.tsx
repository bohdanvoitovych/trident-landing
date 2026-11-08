import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Author } from './Author'

type Props = {
  href: string
  image?: string
  date: string
  title: string
  excerpt?: string
  category?: string
  author?: { name: string; role?: string }
  headingLevel?: 'h2' | 'h3'
}

/** Image wipe, date, title, author. */
export function BlogCard({ href, image, date, title, excerpt, category, author, headingLevel = 'h3' }: Props) {
  const t = useTranslations('ui.actions')
  const H = headingLevel
  return (
    <Link href={href} className="card post-card">
      <div className="media">
        {image && <Image src={image} alt="" fill sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 400px" />}
      </div>
      <div className="card-body">
        <span className="meta" style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
          {category && <span className="tag tag--wash">{category}</span>}
          <time dateTime={date}>{formatShort(date)}</time>
        </span>
        <H className="t">{title}</H>
        {excerpt && <p className="ex">{excerpt}</p>}
        {author ? (
          <div className="post-meta-row">
            <Author name={author.name} role={author.role} />
            <span className="go" aria-hidden="true">
              →
            </span>
          </div>
        ) : (
          <span className="card-more">
            {t('read')} <span className="go">→</span>
          </span>
        )}
      </div>
    </Link>
  )
}

export function formatShort(iso: string) {
  return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(iso))
}
