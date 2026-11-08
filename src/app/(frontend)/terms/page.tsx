import { useTranslations } from 'next-intl'
import { getLocale, getTranslations } from 'next-intl/server'
import { buildMetadata } from '@/lib/metadata'
import { LegalPage } from '@/components/templates/LegalPage'

export async function generateMetadata() {
  const locale = await getLocale()
  const t = await getTranslations({ locale, namespace: 'legal.terms' })
  return buildMetadata({
    title: t('metaTitle'),
    description: t('metaDescription'),
    path: '/terms',
    locale,
  })
}

const SECTIONS = ['scope', 'services', 'payment', 'ip', 'confidentiality', 'warranties', 'liability', 'law', 'changes'] as const

export default function TermsPage() {
  const t = useTranslations('legal.terms')
  return (
    <LegalPage title={t('title')} path="/terms" updated={t('updated')}>
      {SECTIONS.map((key) => (
        <section key={key}>
          <h2>{t(`${key}.title`)}</h2>
          <p>{t(`${key}.body`)}</p>
        </section>
      ))}
    </LegalPage>
  )
}
