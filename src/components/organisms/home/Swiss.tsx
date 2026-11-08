import { useTranslations } from 'next-intl'
import { Label } from '@/components/atoms/controls'

const FACTS = ['hosting', 'privacy', 'noTraining', 'ownership', 'modelIndependent', 'registered'] as const

export function Swiss() {
  const t = useTranslations('sections.swiss')
  return (
    <section className="section section--alt" id="swiss" aria-labelledby="swiss-h">
      <div className="container split split--top">
        <div className="stack reveal" style={{ gap: 18 }}>
          <Label flag>{t('label')}</Label>
          <h2 id="swiss-h" className="h2">
            {t('title')}
          </h2>
          <p className="lead">
            {t('lead')}
          </p>
        </div>
        <ul className="checks stagger">
          {FACTS.map((k) => (
            <li key={k}>
              <h3>{t(`facts.${k}.title`)}</h3>
              <p>{t(`facts.${k}.text`)}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
