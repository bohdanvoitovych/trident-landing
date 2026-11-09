import { Link } from '@/i18n/navigation'
import { useTranslations, useLocale } from 'next-intl'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { ListDetail } from '@/components/molecules/ListDetail'
import { getHomeFaq } from '@/data/faq'

export function Faq() {
  const locale = useLocale()
  const homeFaq = getHomeFaq(locale)
  const t = useTranslations('ui')
  const tf = useTranslations('sections.faq')
  return (
    <section className="section section--alt" id="faq" aria-labelledby="faq-h">
      <div className="container">
        <SectionHeader
          id="faq-h"
          label={tf('label')}
          title={tf('title')}
          action={{ href: '/faq', label: t('actions.allQuestions') }}
        />
        <ListDetail
          label={t('faq.questions')}
          items={homeFaq.map((f) => ({ title: f.question, body: f.answer }))}
          footer={
            <>
              <span>{t('faq.didntFind')}</span>
              <Link
                href="/contact"
                className="btn btn--primary btn--sm"
                data-umami-event="contact_click"
                data-umami-event-location="faq"
              >
                <span>
                  {t('actions.askDirectly')}
                  <i className="arr" aria-hidden="true">
                    →
                  </i>
                </span>
              </Link>
            </>
          }
        />
      </div>
    </section>
  )
}
