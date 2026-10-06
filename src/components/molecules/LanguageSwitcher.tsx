'use client'

import { useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronDown } from 'lucide-react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

const LOCALES = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'de', label: 'Deutsch', short: 'DE' },
  { code: 'fr', label: 'Français', short: 'FR' },
  { code: 'it', label: 'Italiano', short: 'IT' },
]

type Props = {
  currentLocale: string
  /** 'light' for the white header, 'dark' for the deep-navy footer. */
  tone?: 'light' | 'dark'
}

export function LanguageSwitcher({ currentLocale, tone = 'dark' }: Props) {
  const router = useRouter()
  const [, startTransition] = useTransition()

  function setLocale(locale: string) {
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`
    startTransition(() => {
      router.refresh()
    })
  }

  const current = LOCALES.find((l) => l.code === currentLocale) ?? LOCALES[0]

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          aria-label="Change language"
          className={`inline-flex items-center gap-1 font-mono text-[12px] uppercase tracking-[0.1em] transition-colors outline-none ${
            tone === 'light'
              ? 'text-[#6B7078] hover:text-[#111318]'
              : 'text-white/60 hover:text-white'
          }`}
        >
          {current.short}
          <ChevronDown size={10} className="shrink-0 opacity-60" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={6}
          className={`z-50 min-w-[128px] rounded-[2px] py-1 ${
            tone === 'light'
              ? 'border border-[#E3E5E8] bg-white shadow-[0_6px_24px_rgba(17,19,24,0.10)]'
              : 'border border-white/10 bg-[#0F1216] shadow-xl shadow-black/30'
          }`}
        >
          {LOCALES.map((l) => (
            <DropdownMenu.Item
              key={l.code}
              onSelect={() => setLocale(l.code)}
              className={`flex items-center gap-2 px-3 py-2 text-sm cursor-pointer outline-none transition-colors ${
                tone === 'light'
                  ? l.code === currentLocale
                    ? 'text-[#111318] font-medium bg-[#F6F7F8]'
                    : 'text-[#4A4F57] hover:text-[#111318] hover:bg-[#F6F7F8]'
                  : l.code === currentLocale
                    ? 'text-white font-medium'
                    : 'text-white/50 hover:text-white hover:bg-white/5'
              }`}
            >
              <span
                className={`w-6 text-[11px] font-mono ${
                  tone === 'light' ? 'text-[#6B7078]' : 'text-white/30'
                }`}
              >
                {l.short}
              </span>
              {l.label}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
