import type { ReactNode } from 'react'
import { useTranslations } from 'next-intl'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { ProcessGantt } from './ProcessGantt'

const STAGES = [
  { k: 'audit', a: 1, b: 4 },
  { k: 'knowledge', a: 3, b: 11 },
  { k: 'channels', a: 8, b: 16 },
  { k: 'testing', a: 15, b: 21 },
  { k: 'launch', a: 20, b: 26 },
  { k: 'operation', a: 26, b: 31 },
] as const

export type ProcessStage = { title: string; days: string; text: ReactNode }

type Props = {
  /** Full PDF wording for a page that needs it (e.g. /services/ai-services); six stages in STAGES order. */
  title?: string
  lead?: string
  note?: string
  stages?: ProcessStage[]
}

export function Process({ title, lead, note, stages: texts }: Props = {}) {
  const t = useTranslations('sections.process')
  const stages = STAGES.map(({ k, a, b }, i) => ({
    t: texts?.[i]?.title ?? t(`stages.${k}.title`),
    d: texts?.[i]?.text ?? t(`stages.${k}.text`),
    days: texts?.[i]?.days ?? t(`stages.${k}.days`),
    a,
    b,
  }))
  return (
    <section className="section section--alt" aria-labelledby="proc-h">
      <div className="container">
        <SectionHeader
          id="proc-h"
          label={t('label')}
          title={title ?? t('title')}
          lead={lead ?? t('lead')}
        />
        <div className="panel reveal">
          <ProcessGantt stages={stages} />
          <p className="small" style={{ marginTop: 22 }}>
            {note ?? t('note')}
          </p>
        </div>
      </div>
    </section>
  )
}
