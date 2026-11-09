import { useTranslations } from 'next-intl'
import { getLocale, getTranslations } from 'next-intl/server'
import { buildMetadata } from '@/lib/metadata'
import { LegalPage } from '@/components/templates/LegalPage'

export async function generateMetadata() {
  const locale = await getLocale()
  const t = await getTranslations({ locale, namespace: 'legal.imprint' })
  return buildMetadata({
    title: t('metaTitle'),
    description: t('metaDescription'),
    path: '/imprint',
    locale,
  })
}

export default function ImprintPage() {
  const t = useTranslations('legal.imprint')
  return (
    <LegalPage title={t('title')} path="/imprint">
      <div>
        <h2>{t('company')}</h2>
        <p>Trident Software Sàrl</p>
      </div>

      <div>
        <h2>{t('address')}</h2>
        <p>
          Rue de l&apos;Industrie 23<br />
          1950 Sion<br />
          {t('region')}
        </p>
      </div>

      <div>
        <h2>{t('contact')}</h2>
        <p>
          {t.rich('email', {
            mail: (c) => <a href="mailto:info@trident-software.ch">{c}</a>,
          })}
        </p>
      </div>

      <div>
        <h2>{t('register')}</h2>
        <p>{t('registerValue')}</p>
      </div>

      <div>
        <h2>{t('vat')}</h2>
        <p>{t('vatValue')}</p>
      </div>

      <div>
        <h2>{t('responsible')}</h2>
        <p>Trident Software Sàrl, Sion</p>
      </div>

      <div>
        <h2>{t('disclaimer.title')}</h2>
        <p>{t('disclaimer.body')}</p>
      </div>

      <div>
        <h2>{t('external.title')}</h2>
        <p>{t('external.body')}</p>
      </div>
    </LegalPage>
  )
}
