import { useTranslations } from 'next-intl'
import { PageHero } from '@/components/molecules/PageHero'
import { AuditForm } from '@/components/molecules/AuditForm'
import OfficeMap from '@/components/molecules/OfficeMap'
import { Label } from '@/components/atoms/controls'

const MAP_HREF = 'https://www.google.com/maps?cid=178522290307983294'

const contactInfo = [
  {
    key: 'office',
    value: "Rue de l'Industrie 23, 1950 Sion, Valais",
    href: MAP_HREF,
  },
  {
    key: 'email',
    value: 'info@trident-software.ch',
    href: 'mailto:info@trident-software.ch',
  },
  {
    key: 'phone',
    value: '+41 79 745 44 29',
    href: 'tel:+41797454429',
  },
  {
    key: 'responseTime',
  },
] as const

const STEPS = ['review', 'discovery', 'prototype', 'scope', 'kickoff'] as const

export default function ContactPage() {
  const t = useTranslations('pages.contact')

  return (
    <>
      <PageHero
        label={t('heroLabel')}
        title={t('heroTitle')}
        lead={t('heroLead')}
        crumbs={[{ name: t('crumb'), href: '/contact' }]}
      />

      <section className="section" aria-labelledby="contact-h" style={{ paddingTop: 0 }}>
        <div className="container split split--top split--form">
          <div className="reveal" style={{ minWidth: 0 }}>
            <AuditForm tone="light" />
          </div>

          <div className="stack stack--lg reveal">
            <div className="stack">
              <Label>{t('touchLabel')}</Label>
              <h2 id="contact-h" className="h3">
                {t('touchTitle')}
              </h2>
              <p className="body">{t('touchLead')}</p>
            </div>

            <ul className="contact-list">
              {contactInfo.map((item) => (
                <li key={item.key}>
                  <span className="k">{t(`info.${item.key}`)}</span>
                  {'href' in item ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="font-medium hover:text-blue-d"
                      style={{ overflowWrap: 'anywhere' }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="font-medium">{t('responseTimeValue')}</span>
                  )}
                </li>
              ))}
            </ul>

            <div className="panel stack" style={{ background: 'var(--alt)' }}>
              <h3 className="h4">{t('stepsTitle')}</h3>
              <ol className="m-0 flex list-none flex-col gap-3 p-0">
                {STEPS.map((step, i) => (
                  <li key={step} className="grid grid-cols-[36px_minmax(0,1fr)] items-center gap-3 text-[15px]">
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-sm font-mono text-[12px] font-semibold ${
                        i === 0 ? 'bg-blue text-white' : 'bg-white text-ink'
                      }`}
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    {t(`steps.${step}`)}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Where we are */}
      <section className="section section--alt" aria-labelledby="where-h">
        <div className="container split">
          <div className="stack reveal">
            <Label>{t('whereLabel')}</Label>
            <h2 id="where-h" className="h2">
              {t('whereTitle')}
            </h2>
            <p className="body" style={{ maxWidth: 440 }}>
              {t('whereText')}
            </p>
          </div>
          <div className="reveal" style={{ minWidth: 0 }}>
            <OfficeMap className="h-[420px]" />
          </div>
        </div>
      </section>
    </>
  )
}
