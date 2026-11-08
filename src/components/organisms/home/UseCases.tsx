import { Link } from '@/i18n/navigation'
import { useTranslations, useLocale } from 'next-intl'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { getUseCases } from '@/data/use-cases'

export function UseCaseCard({ n, glyph, title, text, needs, href }: { n: number; glyph: string; title: string; text: string; needs: string; href?: string }) {
  const inner = (
    <>
      <div className="uc-num" aria-hidden="true">
        <b>{String(n).padStart(2, '0')}</b>
        <span>{glyph}</span>
      </div>
      <div className="uc-body">
        <h3 className="uc-title">
          {title}
          {href && (
            <span className="go" aria-hidden="true">
              →
            </span>
          )}
        </h3>
        <p className="body">{text}</p>
        <p className="needs">
          <b>NEEDS</b>
          {needs}
        </p>
      </div>
    </>
  )
  return href ? (
    <Link href={href} className="card uc-card">
      {inner}
    </Link>
  ) : (
    <div className="card uc-card card--flat">{inner}</div>
  )
}

export function UseCases() {
  const locale = useLocale()
  const useCases = getUseCases(locale)
  const t = useTranslations('ui.actions')
  return (
    <section className="section" id="usecases" aria-labelledby="uc-h">
      <div className="container">
        <SectionHeader
          id="uc-h"
          label="Use cases"
          title="Eight patterns where an agent pays for itself"
          lead="Each comes with a precondition. Most failed AI projects fail there, not in the model."
          action={{ href: '/use-cases', label: t('allUseCases') }}
        />
        <div className="grid-2 stagger" style={{ gap: 16 }}>
          {useCases.map((u, i) => (
            <UseCaseCard key={u.title} n={i + 1} {...u} href={`/use-cases#uc-${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
