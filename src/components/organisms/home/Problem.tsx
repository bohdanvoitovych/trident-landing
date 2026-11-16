import { useTranslations } from 'next-intl'
import { SectionHeader } from '@/components/molecules/SectionHeader'

function Dots({ on, blue }: { on: number; blue?: boolean }) {
  return (
    <div className="dots" aria-hidden="true">
      {Array.from({ length: 100 }, (_, i) => (
        <span
          key={i}
          className={i < on ? (blue ? 'dot on b' : 'dot on') : 'dot'}
          style={i < on ? { transitionDelay: `${i * 12}ms` } : undefined}
        />
      ))}
    </div>
  )
}

export function Problem() {
  const t = useTranslations('ui.problem')
  const tp = useTranslations('sections.problem')
  return (
    <section className="section" aria-labelledby="problem-h">
      <div className="container">
        <SectionHeader
          id="problem-h"
          label={tp('label')}
          title={tp('title')}
          lead={tp('lead')}
        />
        <div className="grid-2 reveal">
          <div className="gap-panel">
            <div className="stack" style={{ gap: 12 }}>
              <span className="gap-num">
                <span data-count="77">77</span> %
              </span>
              <span className="gap-text">{tp('wantOnline')}</span>
            </div>
            <Dots on={77} />
          </div>
          <div className="gap-panel gap-panel--wash">
            <div className="stack" style={{ gap: 12 }}>
              <span className="gap-num">
                <span data-count="3">3</span> %
              </span>
              <span className="gap-text">
                {tp('supportToday')} <b>{t('gap')}</b>
              </span>
            </div>
            <Dots on={3} blue />
          </div>
        </div>
        <p className="meta" style={{ margin: '14px 0 0' }}>
          localsearch × HSLU, KMU Digital Pulse 2025
        </p>

      </div>
    </section>
  )
}
