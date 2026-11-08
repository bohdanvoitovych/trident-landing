'use client'

import { Link } from '@/i18n/navigation'
import { usePathname } from '@/i18n/navigation'
import { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import { LanguageSwitcher } from '@/components/molecules/LanguageSwitcher'

const NAV = [
  { href: '/services', key: 'services' },
  { href: '/use-cases', key: 'useCases' },
  { href: '/cases', key: 'projects' },
  { href: '/about', key: 'about' },
  { href: '/blog', key: 'blog' },
  { href: '/contact', key: 'contact' },
] as const

const isActive = (pathname: string, href: string) => pathname === href || pathname.startsWith(href + '/')

export function Navbar() {
  const t = useTranslations('ui')
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const dialog = useRef<HTMLDivElement>(null)
  const burger = useRef<HTMLButtonElement>(null)

  // Close on navigation.
  useEffect(() => setOpen(false), [pathname])

  // Focus trap, Esc to close, scroll lock.
  useEffect(() => {
    if (!open) return
    const el = dialog.current
    if (!el) return
    document.body.classList.add('menu-open')
    const focusables = () =>
      Array.from(el.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')).filter((n) => n.offsetParent !== null)
    focusables()[0]?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        return
      }
      if (e.key !== 'Tab') return
      const f = focusables()
      if (!f.length) return
      const first = f[0]
      const last = f[f.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    const btn = burger.current
    return () => {
      document.body.classList.remove('menu-open')
      document.removeEventListener('keydown', onKey)
      btn?.focus()
    }
  }, [open])

  // Close the dialog if the viewport grows past the burger breakpoint.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 861px)')
    const onChange = () => mq.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const logo = (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/images/trident-logo.svg" alt="Trident Software" width={173} height={20} />
  )

  // The dialog sits outside <header>: the header's backdrop-filter would
  // otherwise become the containing block of the fixed-position menu.
  return (
    <>
    <header className="site-header">
      <div className="container">
        <Link href="/" className="brand" aria-label={t('home')}>
          {logo}
        </Link>
        <nav className="nav-links" aria-label={t('mainNav')}>
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} aria-current={isActive(pathname, n.href) ? 'page' : undefined}>
              <span>{t(`nav.${n.key}`)}</span>
            </Link>
          ))}
        </nav>
        <div className="nav-right">
          <LanguageSwitcher />
          <Link href="/contact" className="btn btn--primary btn--sm">
            <span>
              {t('nav.freeAudit')}
              <i className="arr" aria-hidden="true">
                →
              </i>
            </span>
          </Link>
          <button
            ref={burger}
            type="button"
            className="burger"
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={t('menuOpen')}
            onClick={() => setOpen(true)}
          >
            <span aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>

      <div
        ref={dialog}
        id="site-menu"
        className="menu-dialog"
        role="dialog"
        aria-modal="true"
        aria-label={t('mainNav')}
        hidden={!open}
      >
        <div className="container">
          <div className="menu-top">
            <Link href="/" className="brand" aria-label={t('home')} onClick={() => setOpen(false)}>
              {logo}
            </Link>
            <button type="button" className="menu-close" aria-label={t('menuClose')} onClick={() => setOpen(false)}>
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <nav aria-label={t('mainNav')}>
            <ul className="menu-list">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    aria-current={isActive(pathname, n.href) ? 'page' : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {t(`nav.${n.key}`)}
                    <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="menu-foot">
            <LanguageSwitcher className="menu-langs" />
            <Link href="/contact" className="btn btn--primary" onClick={() => setOpen(false)}>
              <span>
                {t('nav.freeAudit')}
                <i className="arr" aria-hidden="true">
                  →
                </i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
