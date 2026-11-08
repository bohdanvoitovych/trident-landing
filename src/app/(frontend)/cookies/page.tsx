import { useTranslations } from 'next-intl'
import { getLocale, getTranslations } from 'next-intl/server'
import { buildMetadata } from '@/lib/metadata'
import { LegalPage } from '@/components/templates/LegalPage'

export async function generateMetadata() {
  const locale = await getLocale()
  const t = await getTranslations({ locale, namespace: 'legal.cookies' })
  return buildMetadata({
    title: t('metaTitle'),
    description: t('metaDescription'),
    path: '/cookies',
    locale,
  })
}

const COOKIES = [
  { name: 'payload-token', key: 'payload' },
  { name: '__next_locale', key: 'locale' },
] as const

export default function CookiesPage() {
  const t = useTranslations('legal.cookies')
  return (
    <LegalPage title={t('title')} path="/cookies" updated={t('updated')}>
      <section>
        <h2>{t('what.title')}</h2>
        <p>{t('what.body')}</p>
      </section>

      <section>
        <h2>{t('used.title')}</h2>

        <div className="not-prose table-wrap mt-6">
          <table className="table">
            <thead>
              <tr>
                <th>{t('used.cols.cookie')}</th>
                <th>{t('used.cols.type')}</th>
                <th>{t('used.cols.purpose')}</th>
                <th>{t('used.cols.duration')}</th>
              </tr>
            </thead>
            <tbody>
              {COOKIES.map((row) => (
                <tr key={row.name}>
                  <td className="font-mono text-[13px] text-blue-d">{row.name}</td>
                  <td>{t(`used.rows.${row.key}.type`)}</td>
                  <td>{t(`used.rows.${row.key}.purpose`)}</td>
                  <td>{t(`used.rows.${row.key}.duration`)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>{t('analytics.title')}</h2>
        <p>{t('analytics.body')}</p>
      </section>

      <section>
        <h2>{t('managing.title')}</h2>
        <p>
          {t.rich('managing.body', {
            link: (c) => (
              <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer">
                {c}
              </a>
            ),
          })}
        </p>
      </section>

      <section>
        <h2>{t('contact.title')}</h2>
        <p>
          {t.rich('contact.body', {
            mail: (c) => <a href="mailto:privacy@trident-software.ch">{c}</a>,
          })}
        </p>
      </section>
    </LegalPage>
  )
}
