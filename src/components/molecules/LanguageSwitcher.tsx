'use client'

import { useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronDown, Check } from 'lucide-react'
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
          className={`inline-flex items-center gap-1 text-[14.5px] font-medium leading-none transition-colors outline-none ${
            tone === 'light'
              ? 'text-[#4A4F57] hover:text-[#111318]'
              : 'text-white/60 hover:text-white'
          }`}
        >
          {current.short}
          <ChevronDown size={13} className="shrink-0 opacity-55" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={6}
          className={`z-50 min-w-[150px] rounded-[2px] py-1 ${
            tone === 'light'
              ? 'border border-[#E3E5E8] bg-white shadow-[0_6px_24px_rgba(17,19,24,0.10)]'
              : 'border border-white/10 bg-[#0F1216] shadow-xl shadow-black/30'
          }`}
        >
          {LOCALES.map((l) => (
            <DropdownMenu.Item
              key={l.code}
              onSelect={() => setLocale(l.code)}
              className={`flex items-center justify-between gap-6 px-3.5 py-2 text-[14px] cursor-pointer outline-none transition-colors ${
                tone === 'light'
                  ? l.code === currentLocale
                    ? 'text-[#111318] font-medium'
                    : 'text-[#4A4F57] hover:text-[#111318] hover:bg-[#F6F7F8]'
                  : l.code === currentLocale
                    ? 'text-white font-medium'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              {l.label}
              {l.code === currentLocale && <Check size={13} className="shrink-0 text-[#2772E0]" />}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
