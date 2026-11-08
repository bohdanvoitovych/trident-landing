import { getLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'
import { Label } from '@/components/atoms/controls'
import { AgentCaps, type Cap } from './AgentCaps'
import { AgentChat } from './AgentChat'

const CAPS = ['answers', 'recommends', 'writes'] as const
const POINTS = ['p1', 'p2', 'p3'] as const

export async function Agent() {
  const locale = await getLocale()
  const t = await getTranslations('ui.agent')
  const ta = await getTranslations('sections.agent')
  const caps: Cap[] = CAPS.map((c) => ({
    title: ta(`caps.${c}.title`),
    text: ta(`caps.${c}.text`),
    points: POINTS.map((p) => ta.rich(`caps.${c}.${p}`, { b: (chunks) => <b>{chunks}</b> })),
  }))
  return (
    <section className="section" id="agent" aria-labelledby="agent-h">
      <div className="container split">
        <div className="stack stack--lg reveal">
          <div className="stack">
            <Label>{ta('label')}</Label>
            <h2 id="agent-h" className="h2">
              {ta('title')}
            </h2>
          </div>
          <AgentCaps caps={caps} />
        </div>
        <div className="reveal">
          <AgentChat
            initial={locale}
            labels={{
              group: t('conversationLanguage'),
              crm: t('crm'),
              product: t('product'),
              qty: t('qty'),
              slot: t('slot'),
              language: t('language'),
            }}
          />
        </div>
      </div>
    </section>
  )
}
