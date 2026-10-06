'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useLocale } from 'next-intl'
import { LanguageSwitcher } from '@/components/molecules/LanguageSwitcher'

// Section anchors live on the home page; the rest are real routes.
const LINKS = [
  { href: '/services', label: 'Services' },
  { href: '/cases', label: 'Cases' },
  { href: '/#usecases', label: 'Use cases' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/#products', label: 'Products' },
  { href: '/#swiss', label: 'Swiss' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const locale = useLocale()
  const [open, setOpen] = useState(false)

  return (
    <div className="tds">
      <nav className="site">
      <div className="wrap nav-in">
        <Link href="/" className="nav-logo" aria-label="Trident Software — home">
          <Image
            src="/images/trident-logo-black.png"
            alt="Trident Software"
            width={132}
            height={28}
            priority
          />
        </Link>

        <div className="nav-links">
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        <span className="nav-lang">
          <LanguageSwitcher currentLocale={locale} tone="light" />
        </span>

        <Link href="/contact" className="btn btn-primary btn-sm">
          Free audit
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="navPanel"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <i />
        </button>
      </div>

      <div className="nav-panel" id="navPanel" data-open={String(open)}>
        <div className="wrap">
          <ul>
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </nav>
    </div>
  )
}
