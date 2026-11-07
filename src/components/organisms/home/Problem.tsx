import { useTranslations } from 'next-intl'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { MiniVisual } from '@/components/molecules/StatCard'

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
  return (
    <section className="section" aria-labelledby="problem-h">
      <div className="container">
        <SectionHeader
          id="problem-h"
          label="The problem"
          title="Swiss SMEs don't lose deals to bad products. They lose them to silence."
          lead="Buyers want answers now, on their channel, in their language. Most teams can't staff that."
        />
        <div className="grid-2 reveal">
          <div className="gap-panel">
            <div className="stack" style={{ gap: 12 }}>
              <span className="gap-num">
                <span data-count="77">77</span> %
              </span>
              <span className="gap-text">of Swiss people want to find and book an SME service online</span>
            </div>
            <Dots on={77} />
          </div>
          <div className="gap-panel gap-panel--wash">
            <div className="stack" style={{ gap: 12 }}>
              <span className="gap-num">
                <span data-count="3">3</span> %
              </span>
              <span className="gap-text">
                of SMEs fully support it today. <b>{t('gap')}</b>
              </span>
            </div>
            <Dots on={3} blue />
          </div>
        </div>
        <p className="meta" style={{ margin: '14px 0 0' }}>
          localsearch × HSLU, KMU Digital Pulse 2025
        </p>

        <div className="grid-4 stagger" style={{ marginTop: 40 }}>
          <div className="card stat-card stat-card--lg">
            <span className="stat-v stat-v--xl">
              <span>
                <span data-count="21">21</span>×
              </span>
            </span>
            <span className="stat-d">lower odds of qualifying a lead after 30 minutes vs 5 minutes</span>
            <MiniVisual
              visual={{
                kind: 'rows',
                rows: [
                  { label: '5 min', value: 1 },
                  { label: '30 min', value: 0.05, tone: 'ink' },
                ],
              }}
            />
            <span className="stat-src">US study, 2007</span>
          </div>
          <div className="card stat-card stat-card--lg">
            <span className="stat-v stat-v--xl">3 channels</span>
            <span className="stat-d">used almost equally. No single one to staff</span>
            <MiniVisual
              visual={{
                kind: 'rows',
                rows: [
                  { label: 'E-mail', value: 1, text: '16 %' },
                  { label: 'Chat', value: 1, text: '16 %' },
                  { label: 'Phone', value: 0.875, text: '14 %' },
                ],
              }}
            />
            <span className="stat-src">ServiceNow, 2024</span>
          </div>
          <div className="card stat-card stat-card--lg">
            <div className="ring-wrap">
              <MiniVisual visual={{ kind: 'ring', percent: 85 }} />
              <span className="stat-v stat-v--xl">
                <span>
                  <span data-count="85">85</span> %
                </span>
              </span>
            </div>
            <span className="stat-d">of the population use WhatsApp. The channel exists; the staffing doesn&apos;t</span>
            <span className="stat-src" style={{ marginTop: 'auto' }}>
              Switzerland
            </span>
          </div>
          <div className="card stat-card stat-card--lg">
            <div className="ring-wrap">
              <MiniVisual visual={{ kind: 'ring', percent: 13 }} />
              <span className="stat-v stat-v--xl">
                <span>
                  <span data-count="13">13</span> %
                </span>
              </span>
            </div>
            <span className="stat-d">start looking for a service in an AI assistant, not a search engine</span>
            <span className="stat-src" style={{ marginTop: 'auto' }}>
              KMU Digital Pulse, 2025
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
