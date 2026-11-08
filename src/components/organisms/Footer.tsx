import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { Linkedin, Facebook, Instagram, MapPin } from 'lucide-react'
import { AuditForm } from '@/components/molecules/AuditForm'
import NewsletterSignup from '@/components/molecules/NewsletterSignup'

// Same set the old site carried in its footer.
const SOCIALS = [
  { href: 'https://www.linkedin.com/company/tridentsoftware/', label: 'LinkedIn', Icon: Linkedin },
  { href: 'https://www.facebook.com/profile.php?id=100092674509471', label: 'Facebook', Icon: Facebook },
  { href: 'https://www.instagram.com/trident_software_official/', label: 'Instagram', Icon: Instagram },
  { href: 'https://maps.app.goo.gl/aX4gfcf1taSKohnp7', label: null, Icon: MapPin },
]

const COLUMNS = [
  {
    key: 'services',
    links: [
      { href: '/services/ai-services', key: 'aiAgents' },
      { href: '/products', key: 'logistics' },
      { href: '/services/software-engineering', key: 'businessSystems' },
      { href: '/services/embedded-and-iot', key: 'iot' },
      { href: '/services/cto-as-a-service', key: 'cto' },
    ],
  },
  {
    key: 'company',
    links: [
      { href: '/about', key: 'about' },
      { href: '/team', key: 'team' },
      { href: '/cases', key: 'projects' },
      { href: '/blog', key: 'blog' },
      { href: '/contact', key: 'contact' },
    ],
  },
  {
    key: 'explore',
    links: [
      { href: '/use-cases', key: 'useCases' },
      { href: '/industries', key: 'industries' },
      { href: '/solutions', key: 'solutions' },
      { href: '/products', key: 'products' },
      { href: '/pricing', key: 'pricing' },
      { href: '/technologies', key: 'technologies' },
      { href: '/locations', key: 'locations' },
      { href: '/faq', key: 'faq' },
    ],
  },
] as const

export function Footer() {
  const t = useTranslations('ui')
  const tc = useTranslations('chrome.footer')
  const year = new Date().getFullYear()
  const steps = ['1', '2', '3', '4'] as const

  return (
    <footer className="site-footer section--dark" id="contact">
      <div className="container" style={{ paddingTop: 'clamp(72px,8vw,112px)' }}>
        <span className="label">{t('audit.label')}</span>
      </div>
      <div className="container split split--stretch audit">
        <div className="audit-left reveal">
          <div className="stack" style={{ gap: 22 }}>
            <h2 className="audit-h">{tc.rich('auditTitle', { em: (c) => <em>{c}</em> })}</h2>
            <p className="lead">{tc('auditLead')}</p>
          </div>
          <div className="next-steps">
            <p className="k">{t('audit.whatHappensNext')}</p>
            <ol>
              {steps.map((s) => (
                <li key={s}>
                  <span className="n">{s}</span>
                  <span>{t(`audit.steps.${s}`)}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="reveal">
          <AuditForm tone="dark" />
        </div>
      </div>

      <div className="container">
        <div className="fgrid">
          <div className="fcol fbrand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/trident-logo-white.svg" alt="Trident Software" width={173} height={20} loading="lazy" />
            <p>{t('footer.brand')}</p>
            <span className="chips" style={{ gap: 6 }}>
              <span className="tag tag--dark">{t('footer.hosting')}</span>
              <span className="tag tag--dark">{tc('tagSwissLaw')}</span>
              <span className="tag tag--dark">{tc('tagGdpr')}</span>
            </span>
            <div className="foot-news">
              <NewsletterSignup />
            </div>
            <div className="socials">
              {SOCIALS.map(({ href, label, Icon }) => (
                <a key={href} href={href} aria-label={label ?? tc('mapsLabel')} target="_blank" rel="noopener noreferrer">
                  <Icon size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <nav className="fcol" key={col.key} aria-labelledby={`f-${col.key}`}>
              <h2 className="fh" id={`f-${col.key}`}>
                {t(`footer.${col.key}`)}
              </h2>
              <ul>
                {col.links.map((l) => (
                  <li key={l.href + l.key}>
                    <Link className="link" href={l.href}>
                      {tc(`links.${l.key}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="fcol">
            <h2 className="fh">{t('footer.contact')}</h2>
            <a className="link" href="mailto:info@trident-software.ch">
              info@trident-software.ch
            </a>
            <a className="link" href="tel:+41797454429">
              +41 79 745 44 29
            </a>
            <address className="faddr">
              Rue de l&apos;Industrie 23
              <br />
              1950 Sion, Valais
            </address>
          </div>
        </div>

        <div className="fbottom">
          <span>{tc('bottomLine', { year })}</span>
          <nav aria-label={t('footer.legal')}>
            <Link className="link" href="/privacy">
              {tc('legal.privacy')}
            </Link>
            <Link className="link" href="/terms">
              {tc('legal.terms')}
            </Link>
            <Link className="link" href="/imprint">
              {tc('legal.imprint')}
            </Link>
            <Link className="link" href="/cookies">
              {tc('legal.cookies')}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
