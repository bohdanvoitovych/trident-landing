import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { CaseCard } from '@/components/molecules/CaseCard'

const FEATURED = {
  clinic: { slug: 'post-acute-clinic-network' },
  practice: { slug: 'clinic-voice-documentation' },
  water: { slug: 'warranty-control-component-maker' },
} as const

const MORE = [
  { k: 'fiduciary', v: '−89 %', slug: 'fiduciary-mail-and-receipts', label: 'modelled' },
  { k: 'materials', v: '65 %', slug: 'building-materials-order-to-load', label: 'scenario' },
  { k: 'letting', v: '<15 s', slug: 'letting-agency-enquiry-to-viewing', label: 'scenario' },
] as const

export function Cases() {
  const t = useTranslations('ui')
  const tc = useTranslations('sections.cases')
  return (
    <section className="section section--alt" id="results" aria-labelledby="results-h">
      <div className="container">
        <SectionHeader
          id="results-h"
          label={tc('label')}
          title={tc('title')}
          lead={tc.rich('lead', { b: (chunks) => <b style={{ color: 'var(--ink)' }}>{chunks}</b> })}
          action={{ href: '/cases', label: t('actions.allCases') }}
        />
        <div className="grid-3 stagger wipe">
          <CaseCard
            href={`/cases/${FEATURED.clinic.slug}`}
            image="/images/stock/clinic.jpg"
            imageAlt={tc('clinic.imageAlt')}
            sector={tc('clinic.sector')}
            title={tc('clinic.title')}
            description={tc('clinic.description')}
            metric={{ value: '1 h → ~5 min', label: tc('clinic.metric') }}
            label="modelled"
            bars={[
              { label: tc('clinic.bar1'), value: '−78 %', before: 100, after: 22 },
              { label: tc('clinic.bar2'), value: tc('clinic.bar2Value'), before: 100, after: 16 },
            ]}
          />
          <CaseCard
            href={`/cases/${FEATURED.practice.slug}`}
            image="/images/stock/clinic-2.jpg"
            imageAlt={tc('practice.imageAlt')}
            sector={tc('practice.sector')}
            title={tc('practice.title')}
            description={tc('practice.description')}
            metric={{ value: '30.8 %', label: tc('practice.metric') }}
            label="measured"
            bars={[
              { label: tc('practice.bar1'), value: '−84 %', before: 100, after: 16 },
              { label: tc('practice.bar2'), value: '3.5×', before: 100, after: 29 },
            ]}
          />
          <CaseCard
            href={`/cases/${FEATURED.water.slug}`}
            image="/images/stock/water-telemetry.jpg"
            imageAlt={tc('water.imageAlt')}
            sector={tc('water.sector')}
            title={tc('water.title')}
            description={tc('water.description')}
            metric={{ value: '−63 %', label: tc('water.metric') }}
            label="measured"
            bars={[
              { label: tc('water.bar1'), value: '0.51 %', before: 100, after: 37 },
              { label: tc('water.bar2'), value: '+2', before: 0, after: 100 },
            ]}
          />
        </div>
        <h3 className="sr-only">{t('cases.moreCases')}</h3>
        <div className="grid-3 stagger" style={{ marginTop: 20 }}>
          {MORE.map(({ k, v, slug, label }) => (
            <Link key={k} href={`/cases/${slug}`} className="card more-card">
              <span className="top">
                <span>{tc(`more.${k}.sector`)}</span>
                <span className="tag tag--wash">{t(`cases.${label}`)}</span>
              </span>
              <span className="t">{tc(`more.${k}.title`)}</span>
              <span className="bottom">
                <b>{v}</b>
                <span>{tc(`more.${k}.metric`)}</span>
                <span className="go" aria-hidden="true">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
