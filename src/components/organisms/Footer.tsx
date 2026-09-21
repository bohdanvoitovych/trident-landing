import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Github, Twitter } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'
import { services } from '@/data/services'
import NewsletterSignup from '@/components/molecules/NewsletterSignup'
import { LanguageSwitcher } from '@/components/molecules/LanguageSwitcher'

export function Footer() {
  const t = useTranslations('footer')
  const locale = useLocale()
  const year = new Date().getFullYear()

  const companyLinks = [
    { href: '/about', label: t('about') },
    { href: '/team', label: t('team') },
    { href: '/industries', label: t('industries') },
    { href: '/solutions', label: 'Solutions' },
    { href: '/products', label: t('products') },
    { href: '/cases', label: t('cases') },
    { href: '/contact', label: t('contact') },
  ]

  const legalLinks = [
    { href: '/privacy', label: t('privacyPolicy') },
    { href: '/terms', label: t('terms') },
    { href: '/cookies', label: t('cookiePolicy') },
    { href: '/imprint', label: t('imprint') },
  ]

  return (
    <footer className="bg-[#09090B] border-t border-white/[0.07]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">

        {/* Main grid: Brand | Services | Company | Newsletter */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-8">

          {/* Brand */}
          <div className="lg:max-w-[220px] flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/images/trident-icon-white.svg"
                alt="Trident"
                width={24}
                height={10}
                className="h-5 w-auto"
              />
              <span className="font-semibold text-[15px] text-white tracking-[-0.01em]">
                Trident <span className="text-white/40 font-normal">Software</span>
              </span>
            </Link>
            <p className="text-[13px] text-white/40 leading-relaxed">
              {t('tagline')}
            </p>
            <div className="text-[12px] text-white/30 space-y-0.5">
              <p>Rue de l&apos;Industrie 23</p>
              <p>1950 Sion, Valais · Switzerland</p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/trident-software-sarl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://github.com/trident-software"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href="https://twitter.com/trident_sw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-white transition-colors"
                aria-label="Twitter / X"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Nav columns */}
          <div className="flex flex-wrap gap-10 sm:gap-14">
            {/* Services */}
            <div>
              <p className="text-[11px] font-medium text-white/30 uppercase tracking-widest mb-4">
                {t('services')}
              </p>
              <ul className="space-y-2.5">
                {services.slice(0, 6).map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="text-[13px] text-white/50 hover:text-white transition-colors"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="text-[11px] font-medium text-white/30 uppercase tracking-widest mb-4">
                {t('company')}
              </p>
              <ul className="space-y-2.5">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-white/50 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Projects */}
            <div>
              <p className="text-[11px] font-medium text-white/30 uppercase tracking-widest mb-4">
                Projects
              </p>
              <ul className="space-y-2.5">
                {[
                  { href: '/cases', label: 'Case Studies' },
                  { href: '/solutions', label: 'Solutions' },
                  { href: '/solutions/websites', label: 'Website Packages' },
                  { href: '/products', label: t('products') },
                  { href: '/products/iam-trade', label: 'iAM-Trade' },
                  { href: '/industries', label: t('industries') },
                  { href: '/blog', label: t('blog') },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-white/50 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:w-64 lg:shrink-0">
            <p className="text-[11px] font-medium text-white/30 uppercase tracking-widest mb-3">
              Newsletter
            </p>
            <p className="text-[13px] text-white/40 leading-relaxed mb-3">
              {t('newsletterTagline')}
            </p>
            <NewsletterSignup />
          </div>
        </div>

        {/* Bottom bar: legal inline + language switcher */}
        <div className="border-t border-white/[0.07] mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <p className="text-[12px] text-white/30">{t('copyright', { year })}</p>
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[12px] text-white/20 hover:text-white/50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <LanguageSwitcher currentLocale={locale} />
        </div>
      </div>
    </footer>
  )
}
