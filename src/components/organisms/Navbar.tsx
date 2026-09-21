'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'
import { Button } from '@/components/atoms/button'
import { cn } from '@/lib/utils'
import { services } from '@/data/services'
import { LanguageSwitcher } from '@/components/molecules/LanguageSwitcher'

const serviceLinks = services.slice(0, 6).map((s) => ({
  href: `/services/${s.slug}`,
  label: s.title,
}))

export function Navbar() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [companyOpen, setCompanyOpen] = useState(false)

  const navLinks = [
    { href: '/solutions', label: 'Solutions' },
    { href: '/cases', label: t('cases') },
    { href: '/industries', label: t('industries') },
    { href: '/blog', label: t('blog') },
    { href: '/contact', label: t('contact') },
  ]

  const companyLinks = [
    { href: '/about', label: t('about') },
    { href: '/team', label: t('team') },
    { href: '/pricing', label: 'Pricing' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-[#09090B] border-b border-white/[0.07]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image
              src="/images/trident-icon-white.svg"
              alt="Trident"
              width={28}
              height={12}
              className="h-6 w-auto"
            />
            <span className="font-semibold text-[15px] text-white tracking-[-0.01em]">
              Trident
              <span className="text-white/40 font-normal ml-1 hidden sm:inline">Software</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {/* Services dropdown */}
            <div className="relative">
              <button
                className={cn(
                  'flex items-center gap-1 px-3 py-1.5 text-[13px] rounded-md text-white/60 hover:text-white hover:bg-white/[0.06] transition-colors',
                  pathname?.includes('/services') && 'text-white',
                )}
                onClick={() => setServicesOpen(!servicesOpen)}
                onBlur={() => setTimeout(() => setServicesOpen(false), 150)}
              >
                {t('services')}
                <ChevronDown size={12} className={cn('transition-transform', servicesOpen && 'rotate-180')} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1.5 w-64 bg-[#111113] rounded-xl border border-white/[0.08] shadow-2xl shadow-black/40 p-1.5">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-3 py-2 text-[13px] text-white/60 hover:text-white hover:bg-white/[0.06] rounded-lg transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="border-t border-white/[0.07] mt-1.5 pt-1.5">
                    <Link
                      href="/services"
                      className="block px-3 py-2 text-[13px] text-[#2772E0] font-medium hover:bg-white/[0.06] rounded-lg transition-colors"
                    >
                      All services →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-3 py-1.5 text-[13px] rounded-md text-white/60 hover:text-white hover:bg-white/[0.06] transition-colors',
                  pathname === link.href && 'text-white',
                )}
              >
                {link.label}
              </Link>
            ))}

            {/* Company dropdown */}
            <div className="relative">
              <button
                className={cn(
                  'flex items-center gap-1 px-3 py-1.5 text-[13px] rounded-md text-white/60 hover:text-white hover:bg-white/[0.06] transition-colors',
                  (pathname?.includes('/about') || pathname?.includes('/team')) && 'text-white',
                )}
                onClick={() => setCompanyOpen(!companyOpen)}
                onBlur={() => setTimeout(() => setCompanyOpen(false), 150)}
              >
                Company
                <ChevronDown size={12} className={cn('transition-transform', companyOpen && 'rotate-180')} />
              </button>
              {companyOpen && (
                <div className="absolute top-full right-0 mt-1.5 w-44 bg-[#111113] rounded-xl border border-white/[0.08] shadow-2xl shadow-black/40 p-1.5">
                  {companyLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-3 py-2 text-[13px] text-white/60 hover:text-white hover:bg-white/[0.06] rounded-lg transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Language switcher + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher currentLocale={locale} />
            <Button variant="gradient" size="sm" asChild>
              <Link href="/contact">{t('getQuote')}</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/[0.07] bg-[#09090B]">
          <div className="px-4 py-3 flex flex-col gap-0.5">
            <Link
              href="/services"
              className="px-3 py-2 text-[13px] text-white/60 hover:text-white hover:bg-white/[0.06] rounded-lg transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {t('services')}
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-[13px] text-white/60 hover:text-white hover:bg-white/[0.06] rounded-lg transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <div className="flex justify-center">
                <LanguageSwitcher currentLocale={locale} />
              </div>
              <Button variant="gradient" size="sm" className="w-full" asChild>
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  {t('getQuote')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
