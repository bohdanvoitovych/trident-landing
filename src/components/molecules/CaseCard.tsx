import Link from 'next/link'
import Image from 'next/image'
import type { CSSProperties, ReactNode } from 'react'
import { useTranslations } from 'next-intl'
import { Tag } from '@/components/atoms/controls'

export type BeforeAfter = { label: string; value: string; before: number; after: number }

type Props = {
  href: string
  image?: string
  imageAlt?: string
  sector: ReactNode
  title: ReactNode
  description?: ReactNode
  /** Big number in the white plate over the photo. */
  metric?: { value: string; label: string }
  /** MEASURED / MODELLED, exactly as the source states it. */
  label?: 'measured' | 'modelled'
  bars?: BeforeAfter[]
  /** Fallback when there are no bars: simple result figures. */
  results?: { value: string; metric: string }[]
  headingLevel?: 'h2' | 'h3'
}

/** Photo with wipe + overlay metric + tag, title, description, before/after bars. */
export function CaseCard({
  href,
  image,
  imageAlt = '',
  sector,
  title,
  description,
  metric,
  label,
  bars,
  results,
  headingLevel = 'h3',
}: Props) {
  const t = useTranslations('ui.cases')
  const H = headingLevel
  return (
    <Link href={href} className="card case-card">
      <div className="media">
        {image && <Image src={image} alt={imageAlt} fill sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 400px" />}
        {(metric || label) && (
          <div className="case-overlay">
            {metric ? (
              <span className="case-metric">
                <b>{metric.value}</b>
                <span>{metric.label}</span>
              </span>
            ) : (
              <span />
            )}
            {label && <Tag tone={label === 'measured' ? 'blue' : 'wash'}>{t(label)}</Tag>}
          </div>
        )}
      </div>
      <div className="card-body">
        <span className="meta">{sector}</span>
        <H className="card-title card-title--sm" style={{ fontSize: 19 }}>
          {title}
        </H>
        {description && <p className="small" style={{ fontSize: 14, lineHeight: 1.55 }}>{description}</p>}
        {bars && bars.length > 0 && (
          <div className="case-bars">
            {bars.map((b) => (
              <div className="ba" key={b.label}>
                <div className="ba-head">
                  <span>{b.label}</span>
                  <b>{b.value}</b>
                </div>
                <div className="ba-tracks" aria-hidden="true">
                  <div className="track">
                    <span className="fill fill--muted" style={{ '--v': b.before / 100 } as CSSProperties} />
                  </div>
                  <div className="track">
                    <span className="fill" style={{ '--v': b.after / 100 } as CSSProperties} />
                  </div>
                </div>
              </div>
            ))}
            <span className="legend" aria-hidden="true">
              <span>▬ {t('before')}</span>
              <span className="a">▬ {t('after')}</span>
            </span>
          </div>
        )}
        {!bars?.length && results && results.length > 0 && (
          <dl className="case-bars" style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 20, margin: 0 }}>
            {results.slice(0, 2).map((r) => (
              <div key={r.metric} style={{ display: 'flex', flexDirection: 'column-reverse', gap: 2 }}>
                <dt style={{ fontSize: 12, color: 'var(--ink-2)' }}>{r.metric}</dt>
                <dd style={{ margin: 0, fontSize: 22, fontWeight: 600, letterSpacing: '-.03em', color: 'var(--blue)' }}>{r.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </Link>
  )
}
