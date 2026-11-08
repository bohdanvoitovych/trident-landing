import type { ReactNode } from 'react'
import { useTranslations } from 'next-intl'
import { getLocale, getTranslations } from 'next-intl/server'
import { buildMetadata } from '@/lib/metadata'
import { LegalPage } from '@/components/templates/LegalPage'

export async function generateMetadata() {
  const locale = await getLocale()
  const t = await getTranslations({ locale, namespace: 'legal.privacy' })
  return buildMetadata({
    title: t('metaTitle'),
    description: t('metaDescription'),
    path: '/privacy',
    locale,
  })
}

const DATA_ITEMS = ['contact', 'newsletter', 'usage', 'cookies'] as const

const mail = (c: ReactNode) => <a href="mailto:privacy@trident-software.ch">{c}</a>
const strong = (c: ReactNode) => <strong>{c}</strong>

export default function PrivacyPage() {
  const t = useTranslations('legal.privacy')
  return (
    <LegalPage title={t('title')} path="/privacy" updated={t('updated')}>
      <section>
        <h2>{t('controller.title')}</h2>
        <p>{t('controller.body')}</p>
        <p>{t.rich('controller.contact', { mail })}</p>
      </section>

      <section>
        <h2>{t('data.title')}</h2>
        <p>{t('data.intro')}</p>
        <ul>
          {DATA_ITEMS.map((key) => (
            <li key={key}>{t.rich(`data.items.${key}`, { strong })}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>{t('basis.title')}</h2>
        <ul>
          {(t.raw('basis.items') as string[]).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>{t('storage.title')}</h2>
        <p>{t('storage.body')}</p>
      </section>

      <section>
        <h2>{t('retention.title')}</h2>
        <p>{t('retention.body')}</p>
      </section>

      <section>
        <h2>{t('rights.title')}</h2>
        <p>{t('rights.intro')}</p>
        <ul>
          {(t.raw('rights.items') as string[]).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>{t.rich('rights.outro', { mail })}</p>
      </section>

      <section>
        <h2>{t('processors.title')}</h2>
        <p>{t('processors.intro')}</p>
        <ul>
          {(t.raw('processors.items') as string[]).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>{t('security.title')}</h2>
        <p>{t('security.body')}</p>
      </section>

      <section>
        <h2>{t('complaints.title')}</h2>
        <p>
          {t.rich('complaints.body', {
            link: (c) => (
              <a href="https://www.edoeb.admin.ch" target="_blank" rel="noopener noreferrer">
                {c}
              </a>
            ),
          })}
        </p>
      </section>

      <section>
        <h2>{t('changes.title')}</h2>
        <p>{t('changes.body')}</p>
      </section>
    </LegalPage>
  )
}
