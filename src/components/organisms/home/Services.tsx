import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { SectionHeader } from '@/components/molecules/SectionHeader'

const SERVICES = [
  {
    href: '/services/ai-services',
    title: 'AI agents & LLM automation',
    text: 'Enquiry handling, document processing, recommendations, search over company knowledge. Agents wired into your real systems, not chat widgets.',
    img: '/images/stock/ai-agent.jpg',
    alt: 'Server infrastructure the agents run on',
    wide: true,
  },
  {
    href: '/products',
    title: 'Logistics & operations platforms',
    text: 'Order intake, dispatch, driver apps, tracking, automated billing.',
    img: '/images/stock/logistics.jpg',
    alt: 'Warehouse racking',
    tall: true,
  },
  {
    href: '/services/embedded-and-iot',
    title: 'IoT & connected products',
    text: 'Firmware, cloud platform, rules engines, dealer and consumer apps.',
    img: '/images/stock/iot-device.jpg',
    alt: 'Circuit board of a connected device',
  },
  {
    href: '/services/software-engineering',
    title: 'Custom business systems',
    text: 'B2B portals, ERP and accounting integrations, legacy migrations.',
    img: '/images/stock/b2b-portal.jpg',
    alt: 'Office where the portal is used',
  },
  {
    href: '/services/cto-as-a-service',
    title: 'CTO as a Service',
    text: "Fractional or interim technical leadership when you've outgrown your first developers.",
    img: '/images/stock/workspace.jpg',
    alt: 'Engineering workspace',
  },
]

export function Services() {
  const t = useTranslations('ui.actions')
  return (
    <section className="section section--alt" id="services" aria-labelledby="services-h">
      <div className="container">
        <SectionHeader
          id="services-h"
          label="What we do"
          title="Five lines of work, one accountable team"
          action={{ href: '/services', label: t('allServices') }}
        />
        <div className="grid-3 stagger">
          {SERVICES.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className={`card svc-card${s.wide ? ' svc-card--wide svc-card--tall' : ''}${s.tall ? ' svc-card--tall' : ''}`}
            >
              <div className="media">
                <Image
                  src={s.img}
                  alt={s.alt}
                  fill
                  sizes={s.wide ? '(max-width: 1100px) 100vw, 840px' : '(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 400px'}
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">{s.title}</h3>
                <p className="body" style={{ flex: 1 }}>
                  {s.text}
                </p>
                <span className="card-more">
                  {t('learnMore')} <span className="go">→</span>
                </span>
              </div>
            </Link>
          ))}
          <div className="card stack-band card--flat">
            <span className="k">Stack</span>
            <p>Python and Django, PostgreSQL, React, Flutter, AWS. LLM work sits on top of that, not beside it.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
