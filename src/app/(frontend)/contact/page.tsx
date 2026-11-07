import { PageHero } from '@/components/molecules/PageHero'
import { AuditForm } from '@/components/molecules/AuditForm'
import OfficeMap from '@/components/molecules/OfficeMap'
import { Label } from '@/components/atoms/controls'

const MAP_HREF = 'https://www.google.com/maps?cid=178522290307983294'

const contactInfo = [
  {
    label: 'Office',
    value: "Rue de l'Industrie 23, 1950 Sion, Valais",
    href: MAP_HREF,
  },
  {
    label: 'Email',
    value: 'info@trident-software.ch',
    href: 'mailto:info@trident-software.ch',
  },
  {
    label: 'Phone',
    value: '+41 79 745 44 29',
    href: 'tel:+41797454429',
  },
  {
    label: 'Response time',
    value: 'Within 24 business hours',
  },
]

const steps = ['We review your inquiry', 'Discovery call (30 min)', 'Scope + SOW in 3–5 days', 'Kickoff']

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Let's talk about your project"
        lead="Tell us what you're building. We'll respond within 24 hours with honest feedback and a rough scope estimate."
        crumbs={[{ name: 'Contact', href: '/contact' }]}
      />

      <section className="section" aria-labelledby="contact-h" style={{ paddingTop: 0 }}>
        <div className="container split split--top">
          <div className="reveal" style={{ minWidth: 0 }}>
            <AuditForm tone="light" />
          </div>

          <div className="stack stack--lg reveal">
            <div className="stack">
              <Label>Get in touch</Label>
              <h2 id="contact-h" className="h3">
                We respond fast
              </h2>
              <p className="body">
                Senior engineers read every inquiry. No sales scripts, no account managers in between.
              </p>
            </div>

            <ul className="contact-list">
              {contactInfo.map((item) => (
                <li key={item.label}>
                  <span className="k">{item.label}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="font-medium hover:text-blue-d"
                      style={{ overflowWrap: 'anywhere' }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="font-medium">{item.value}</span>
                  )}
                </li>
              ))}
            </ul>

            <div className="panel stack" style={{ background: 'var(--alt)' }}>
              <h3 className="h4">Typical next steps</h3>
              <ol className="m-0 flex list-none flex-col gap-3 p-0">
                {steps.map((step, i) => (
                  <li key={step} className="grid grid-cols-[36px_minmax(0,1fr)] items-center gap-3 text-[15px]">
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-sm font-mono text-[12px] font-semibold ${
                        i === 0 ? 'bg-blue text-white' : 'bg-white text-ink'
                      }`}
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Where we are */}
      <section className="section section--alt" aria-labelledby="where-h">
        <div className="container split">
          <div className="stack reveal">
            <Label>Where we are</Label>
            <h2 id="where-h" className="h2">
              Sion, Valais
            </h2>
            <p className="body" style={{ maxWidth: 440 }}>
              Rue de l&apos;Industrie 23, 1950 Sion — ten minutes from the station, in the HES-SO Valais-Wallis
              district.
            </p>
          </div>
          <div className="reveal" style={{ minWidth: 0 }}>
            <OfficeMap className="h-[420px]" />
          </div>
        </div>
      </section>
    </>
  )
}
