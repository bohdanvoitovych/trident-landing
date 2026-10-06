'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useLocale } from 'next-intl'
import { LanguageSwitcher } from '@/components/molecules/LanguageSwitcher'

type Item = { href: string; label: string }
type Entry = Item & { children?: Item[] }

// Order follows the old site: About, Services, Industries, Projects, Blog,
// Contact. Groups use the design system's own nav-group / nav-menu pattern
// rather than styles written here.
const NAV: Entry[] = [
  {
    href: '/about',
    label: 'About',
    children: [
      { href: '/about', label: 'About us' },
      { href: '/team', label: 'Our team' },
      { href: '/locations', label: 'Locations' },
      { href: '/technologies', label: 'Technologies' },
    ],
  },
  {
    href: '/services',
    label: 'Services',
    children: [
      { href: '/services/ai-services', label: 'AI services' },
      { href: '/services/software-engineering', label: 'Software engineering' },
      { href: '/services/embedded-and-iot', label: 'Embedded & IoT' },
      { href: '/services/cto-as-a-service', label: 'CTO as a Service' },
      { href: '/services/cloud-consulting', label: 'Cloud consulting' },
      { href: '/services', label: 'All services' },
    ],
  },
  {
    href: '/solutions',
    label: 'Solutions',
    children: [
      { href: '/solutions/websites', label: 'Websites' },
      { href: '/solutions/e-commerce', label: 'E-commerce' },
      { href: '/solutions/mobile-apps', label: 'Mobile apps' },
      { href: '/solutions/iot', label: 'IoT platforms' },
      { href: '/solutions/cloud-services', label: 'Cloud services' },
      { href: '/solutions', label: 'All solutions' },
    ],
  },
  { href: '/industries', label: 'Industries' },
  { href: '/cases', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const locale = useLocale()
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <div className="tds">
      <nav className="site">
        <div className="wrap nav-in">
          <Link href="/" className="nav-logo" aria-label="Trident Software — home">
            <Image
              src="/images/trident-logo-black.png"
              alt="Trident Software"
              width={173}
              height={20}
              priority
            />
          </Link>

          <div className="nav-links">
            {NAV.map((entry) =>
              entry.children ? (
                <div className="nav-group" key={entry.label}>
                  <Link href={entry.href} className="nav-trigger">
                    {entry.label}
                    <span className="chev" aria-hidden="true">
                      ▾
                    </span>
                  </Link>
                  <div className="nav-menu">
                    <div className="nav-menu-in">
                      {entry.children.map((child) => (
                        <Link href={child.href} key={child.href + child.label}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link href={entry.href} key={entry.href}>
                  {entry.label}
                </Link>
              ),
            )}
          </div>

          <div className="nav-right">
            <LanguageSwitcher currentLocale={locale} tone="light" />
            <Link href="/contact" className="btn btn-primary btn-sm">
              Free audit
            </Link>
          </div>

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
              {NAV.map((entry) => (
                <li key={entry.label}>
                  <Link href={entry.href} onClick={close}>
                    {entry.label}
                  </Link>
                  {entry.children && (
                    <ul className="sub">
                      {entry.children.map((child) => (
                        <li key={child.href + child.label}>
                          <Link href={child.href} onClick={close}>
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="foot">
              <Link href="/contact" onClick={close}>
                Book a free audit
              </Link>
              <a href="mailto:info@trident-software.ch">info@trident-software.ch</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
