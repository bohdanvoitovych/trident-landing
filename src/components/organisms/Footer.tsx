import Link from 'next/link'
import Image from 'next/image'
import { useLocale } from 'next-intl'
import NewsletterSignup from '@/components/molecules/NewsletterSignup'
import { LanguageSwitcher } from '@/components/molecules/LanguageSwitcher'

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
            <NewsletterSignup />
          </div>

          <div className="foot-col">
            <h5>Services</h5>
            <ul>
              <li>
                <Link href="/#agent">AI agents</Link>
              </li>
              <li>
                <Link href="/#products">Logistics platforms</Link>
              </li>
              <li>
                <Link href="/services">IoT</Link>
              </li>
              <li>
                <Link href="/services">CTO as a Service</Link>
              </li>
            </ul>
          </div>

          <div className="foot-col">
            <h5>Company</h5>
            <ul>
              <li>
                <Link href="/cases">Cases</Link>
              </li>
              <li>
                <Link href="/#usecases">Use cases</Link>
              </li>
              <li>
                <Link href="/#pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/#faq">FAQ</Link>
              </li>
            </ul>
          </div>

          <div className="foot-col">
            <h5>Contact</h5>
            <ul>
              <li>
                <a href="mailto:max@trident.software">max@trident.software</a>
              </li>
              <li>
                <a href="tel:+41797454429">+41 79 745 44 29</a>
              </li>
              <li>
                <Link href="/contact">Rue de l&apos;Industrie 23, Sion</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <span className="made">
            Swiss made software · © {year} Trident Software Sàrl · CHE-185.076.733
          </span>
          <span>
            <LanguageSwitcher currentLocale={locale} />
          </span>
          <span>
            <Link href="/privacy">Privacy Policy</Link> · <Link href="/terms">Terms</Link>
          </span>
        </div>
      </div>
      </footer>
    </div>
  )
}
