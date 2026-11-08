import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { SectionHeader } from '@/components/molecules/SectionHeader'

const SERVICES = [
  { key: 'ai', href: '/services/ai-services', img: '/images/stock/ai-agent.jpg', wide: true },
  { key: 'logistics', href: '/products', img: '/images/stock/logistics.jpg', tall: true },
  { key: 'iot', href: '/services/embedded-and-iot', img: '/images/stock/iot-device.jpg' },
  { key: 'custom', href: '/services/software-engineering', img: '/images/stock/b2b-portal.jpg' },
  { key: 'cto', href: '/services/cto-as-a-service', img: '/images/stock/workspace.jpg' },
] as const

export function Services() {
  const t = useTranslations('ui.actions')
  const ts = useTranslations('sections.services')
  return (
    <section className="section section--alt" id="services" aria-labelledby="services-h">
      <div className="container">
        <SectionHeader
          id="services-h"
          label={ts('label')}
          title={ts('title')}
          action={{ href: '/services', label: t('allServices') }}
        />
        <div className="grid-3 stagger">
          {SERVICES.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className={`card svc-card${'wide' in s ? ' svc-card--wide svc-card--tall' : ''}${'tall' in s ? ' svc-card--tall' : ''}`}
            >
              <div className="media">
                <Image
                  src={s.img}
                  alt={ts(`items.${s.key}.alt`)}
                  fill
                  sizes={'wide' in s ? '(max-width: 1100px) 100vw, 840px' : '(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 400px'}
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">{ts(`items.${s.key}.title`)}</h3>
                <p className="body" style={{ flex: 1 }}>
                  {ts(`items.${s.key}.text`)}
                </p>
                <span className="card-more">
                  {t('learnMore')} <span className="go">→</span>
                </span>
              </div>
            </Link>
          ))}
          <div className="card stack-band card--flat">
            <span className="k">{ts('stackLabel')}</span>
            <p>{ts('stackText')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
