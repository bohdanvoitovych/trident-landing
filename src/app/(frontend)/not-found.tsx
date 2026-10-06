'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/atoms/button'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  const t = useTranslations('notFound')

  return (
    <section className="relative min-h-[90vh] bg-[#111318] flex flex-col items-center justify-center px-6 text-center overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue-600/8 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(39,114,224,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(39,114,224,0.04)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8">
          <span className="font-mono text-xs text-blue-400 uppercase tracking-widest">Error 404</span>
        </div>

        <h1
          aria-hidden="true"
          className="font-bold select-none leading-none mb-0 bg-gradient-to-r from-[#2772E0] to-[#2772E0] bg-clip-text text-transparent"
          style={{ fontSize: 'clamp(7rem, 22vw, 14rem)' }}
        >
          404
        </h1>

        <p className="sr-only">Error 404</p>

        <h2 className="text-2xl sm:text-3xl font-bold text-white -mt-4 mb-4">
          {t('title')}
        </h2>

        <p className="text-slate-400 text-lg max-w-md mx-auto mb-10">
          {t('description')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild variant="gradient" size="lg">
            <Link href="/">
              {t('goHome')}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white/15 text-white hover:bg-white/5">
            <Link href="/services">{t('viewServices')}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
