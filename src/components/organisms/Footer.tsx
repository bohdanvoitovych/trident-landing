import Link from 'next/link'
import Image from 'next/image'
import { useLocale } from 'next-intl'
import { Linkedin, Facebook, Instagram, MapPin } from 'lucide-react'
import NewsletterSignup from '@/components/molecules/NewsletterSignup'
import { LanguageSwitcher } from '@/components/molecules/LanguageSwitcher'

// Same set the old site carried in its footer.
const SOCIALS = [
  { href: 'https://www.linkedin.com/company/tridentsoftware/', label: 'LinkedIn', Icon: Linkedin },
  { href: 'https://www.facebook.com/profile.php?id=100092674509471', label: 'Facebook', Icon: Facebook },
  { href: 'https://www.instagram.com/trident_software_official/', label: 'Instagram', Icon: Instagram },
  { href: 'https://maps.app.goo.gl/aX4gfcf1taSKohnp7', label: 'Find us on Google Maps', Icon: MapPin },
]

const COLUMNS = [
  {
    heading: 'Services',
    links: [
      { href: '/#agent', label: 'AI agents' },
      { href: '/#products', label: 'Logistics platforms' },
      { href: '/solutions/iot', label: 'IoT & embedded' },
      { href: '/solutions/e-commerce', label: 'E-commerce' },
      { href: '/services', label: 'All services' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { href: '/about', label: 'About' },
      { href: '/team', label: 'Team' },
      { href: '/cases', label: 'Cases' },
      { href: '/blog', label: 'Blog' },
      { href: '/technologies', label: 'Technologies' },
    ],
  },
  {
    heading: 'Explore',
    links: [
      { href: '/industries', label: 'Industries' },
      { href: '/locations', label: 'Locations' },
      { href: '/solutions', label: 'Solutions' },
      { href: '/products', label: 'Products' },
      { href: '/#pricing', label: 'Pricing' },
    ],
  },
]

export function Footer() {
  const locale = useLocale()
  const year = new Date().getFullYear()

  return (
    <div className="tds">
      <footer className="site">
        <div className="wrap">
          <div className="foot">
            <div className="foot-brand">
              <Image
                src="/images/trident-icon-white.svg"
                alt="Trident Software"
                width={120}
                height={26}
              />
              <p>Operational software and AI agents from Sion, Valais, Switzerland.</p>
              <div className="foot-news">
                <NewsletterSignup />
              </div>
              <div className="foot-socials">
                {SOCIALS.map((sn) => (
                  <a
                    key={sn.href}
                    href={sn.href}
                    className="foot-social"
                    aria-label={sn.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <sn.Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {COLUMNS.map((col) => (
              <div className="foot-col" key={col.heading}>
                <h5>{col.heading}</h5>
                <ul>
                  {col.links.map((l) => (
                    <li key={l.href + l.label}>
                      <Link href={l.href}>{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="foot-col">
              <h5>Contact</h5>
              <ul>
                <li>
                  <a href="mailto:info@trident-software.ch">info@trident-software.ch</a>
                </li>
                <li>
                  <a href="tel:+41797454429">+41 79 745 44 29</a>
                </li>
                <li>
                  <span className="foot-addr">Rue de l&apos;Industrie 23, 1950 Sion</span>
                </li>
                <li>
                  <Link href="/contact">Book a free audit</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="foot-bottom">
            <span className="made">
              Swiss made software · © {year} Trident Software Sàrl · CHE-185.076.733
            </span>
            <span className="foot-meta">
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
              <Link href="/imprint">Imprint</Link>
              <Link href="/cookies">Cookies</Link>
              <LanguageSwitcher currentLocale={locale} />
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
