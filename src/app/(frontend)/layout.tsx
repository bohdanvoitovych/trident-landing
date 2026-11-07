import type { Metadata, Viewport } from 'next'
import { Instrument_Sans, IBM_Plex_Mono } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages, getTranslations } from 'next-intl/server'
import { Navbar } from '@/components/organisms/Navbar'
import { Footer } from '@/components/organisms/Footer'
import { CookieBanner } from '@/components/molecules/CookieBanner'
import { Reveal } from '@/components/molecules/Reveal'
import './styles.css'
import './trident.css'

// Variable font: one file per subset covers exactly the 400–700 range we use,
// instead of four static files per subset.
const instrumentSans = Instrument_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-instrument-sans',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
  // Mono is only used for small labels; don't let it compete with the
  // headline font for early bandwidth.
  preload: false,
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  title: {
    template: '%s | Trident Software',
    default: 'Trident Software — Swiss Quality Software Engineering',
  },
  description:
    'Custom software development, AI integration, and embedded systems for SMEs. Swiss compliance, fixed budgets, 27+ projects delivered.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://trident-software.ch'),
}

export default async function FrontendLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale()
  const messages = await getMessages()
  const t = await getTranslations('ui')

  return (
    <html lang={locale} className={`${instrumentSans.variable} ${ibmPlexMono.variable}`}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <a href="#main-content" className="skip">
            {t('skip')}
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <CookieBanner />
          <Reveal />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
