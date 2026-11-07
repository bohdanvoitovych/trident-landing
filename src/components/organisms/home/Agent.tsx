import { Fragment } from 'react'
import { getLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'
import { Label } from '@/components/atoms/controls'
import { AgentCaps, type Cap } from './AgentCaps'
import { AgentChat } from './AgentChat'

const CAPS: Cap[] = [
  {
    title: 'Answers and qualifies, at any hour',
    text: "Every channel, weekends and cantonal holidays included. Asks the questions your best rep asks, in the buyer's language.",
    points: [
      <Fragment key="1">
        <b>Seconds</b> to first response, on e-mail, chat, phone and WhatsApp
      </Fragment>,
      <Fragment key="2">
        <b>Four language regions</b> from day one
      </Fragment>,
      <Fragment key="3">
        Answers recorded as <b>structured fields</b>
      </Fragment>,
    ],
  },
  {
    title: 'Recommends and closes the small stuff',
    text: 'Works from your live catalogue, stock and price list. Handles standard objections with your approved wording.',
    points: [
      <Fragment key="1">
        Books appointments against a <b>real calendar</b>
      </Fragment>,
      <Fragment key="2">
        Issues <b>QR-bills</b> and payment links
      </Fragment>,
      <Fragment key="3">
        Escalates to a person on <b>defined conditions</b>
      </Fragment>,
    ],
  },
  {
    title: 'Writes into your systems',
    text: 'Contact, company, deal and full transcript go into your CRM, so the next person starts from a complete record.',
    points: [
      <Fragment key="1">CRM and ERP integration</Fragment>,
      <Fragment key="2">Audit trail on every dialogue</Fragment>,
      <Fragment key="3">
        Escalation path designed <b>before launch</b>
      </Fragment>,
    ],
  },
]

export async function Agent() {
  const locale = await getLocale()
  const t = await getTranslations('ui.agent')
  return (
    <section className="section" id="agent" aria-labelledby="agent-h">
      <div className="container split">
        <div className="stack stack--lg reveal">
          <div className="stack">
            <Label>The AI agent</Label>
            <h2 id="agent-h" className="h2">
              A working process with a language model inside it
            </h2>
          </div>
          <AgentCaps caps={CAPS} />
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
