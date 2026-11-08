import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { CaseCard } from '@/components/molecules/CaseCard'

export function Cases() {
  const t = useTranslations('ui')
  return (
    <section className="section section--alt" id="results" aria-labelledby="results-h">
      <div className="container">
        <SectionHeader
          id="results-h"
          label="Results"
          title="Delivered, then counted"
          lead={
            <>
              Each case is labelled: <b style={{ color: 'var(--ink)' }}>measured</b> means counted in production;{' '}
              <b style={{ color: 'var(--ink)' }}>modelled</b> means calculated from real volumes.
            </>
          }
          action={{ href: '/cases', label: t('actions.allCases') }}
        />
        <div className="grid-3 stagger wipe">
          <CaseCard
            href="/cases"
            image="/images/stock/clinic.jpg"
            imageAlt="Clinic corridor"
            sector="Post-acute clinic network · CH"
            title="From a bundle of paper to a coded SwissDRG invoice"
            description="The assistant reads the admission file, drafts the discharge letter for the physician to sign, and prepares a validated invoice."
            metric={{ value: '−92 %', label: 'Admission time' }}
            label="measured"
            bars={[
              { label: 'Discharge letter', value: '−78 %', before: 100, after: 22 },
              { label: 'Invoice ready, was 10–15', value: '2 days', before: 100, after: 16 },
            ]}
          />
          <CaseCard
            href="/cases"
            image="/images/stock/clinic-2.jpg"
            imageAlt="Medical practice interior"
            sector="Multi-disciplinary practice · CH"
            title="Voice consultation to TARDOC invoice"
            description="Physicians spent 35 % of their time documenting. Now the consultation becomes the report and the coded invoice."
            metric={{ value: '+30.8 %', label: 'Consultations, same salary' }}
            label="measured"
            bars={[
              { label: 'Time per invoice', value: '−84 %', before: 100, after: 16 },
              { label: 'Faster payment', value: '3.5×', before: 100, after: 29 },
            ]}
          />
          <CaseCard
            href="/cases"
            image="/images/stock/water-telemetry.jpg"
            imageAlt="Water treatment infrastructure"
            sector="Component manufacturer · IT"
            title="Up to 85 % of failures came from water, not defects"
            description="A device, telemetry and portals turned every warranty claim into a decision based on data."
            metric={{ value: '−63 %', label: 'Warranty cost' }}
            label="measured"
            bars={[
              { label: 'Of revenue, was 1.37 %', value: '0.51 %', before: 100, after: 37 },
              { label: 'New revenue lines', value: '+2', before: 0, after: 100 },
            ]}
          />
        </div>
        <h3 className="sr-only">{t('cases.moreCases')}</h3>
        <div className="grid-3 stagger" style={{ marginTop: 20 }}>
          {[
            { s: 'Fiduciary · CH', t: 'Incoming mail and receipts without re-entry', v: '−89 %', l: 'Receipt handling' },
            { s: 'Construction materials · scenario', t: 'Order desk to delivered load, without seasonal hiring', v: '65 %', l: 'Reorders without a person' },
            { s: 'Letting agency, Romandie · scenario', t: 'Portal enquiry to booked viewing', v: '<15 s', l: 'First reply, was >15 h' },
          ].map((c) => (
            <Link key={c.t} href="/cases" className="card more-card">
              <span className="top">
                <span>{c.s}</span>
                <span className="tag tag--wash">{t('cases.modelled')}</span>
              </span>
              <span className="t">{c.t}</span>
              <span className="bottom">
                <b>{c.v}</b>
                <span>{c.l}</span>
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
