import { useTranslations } from 'next-intl'
import { ButtonLink, Label } from '@/components/atoms/controls'

export default function NotFound() {
  const t = useTranslations('notFound')
  const tp = useTranslations('pages.notFound')

  return (
    <section className="section" aria-labelledby="nf-h">
      <div className="container">
        <div className="stack reveal" style={{ gap: 22, maxWidth: 720 }}>
          <Label>{tp('label')}</Label>
          <span
            aria-hidden="true"
            className="block select-none font-semibold text-blue"
            style={{ fontSize: 'clamp(96px, 16vw, 200px)', lineHeight: 0.9, letterSpacing: '-.05em' }}
          >
            404
          </span>
          <h1 id="nf-h" className="h1">
            {t('title')}
          </h1>
          <p className="lead">{t('description')}</p>
          <div className="hero-ctas">
            <ButtonLink href="/" arrow>
              {t('goHome')}
            </ButtonLink>
            <ButtonLink href="/services" variant="outline">
              {t('viewServices')}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
