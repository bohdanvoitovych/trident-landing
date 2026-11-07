import { SectionHeader } from '@/components/molecules/SectionHeader'

const GROUPS: [string, string[]][] = [
  ['Channels', ['WhatsApp Business', 'Website widget', 'E-mail', 'Telegram', 'Instagram / Facebook', 'SMS', 'Microsoft Teams', 'Voice']],
  ['CRM', ['HubSpot', 'Salesforce', 'Pipedrive', 'MS Dynamics', 'Zoho']],
  ['ERP & accounting', ['bexio', 'Abacus', 'SAP Business One', 'Odoo', 'Sage']],
  ['Payment', ['Swiss QR-bill', 'TWINT', 'Stripe', 'PostFinance', 'Datatrans']],
  ['Healthcare', ['vitomed', 'amétiq siMed', 'KISIM', 'Epic', 'HL7 / FHIR', 'HIN mail']],
  ['Calendar & logistics', ['Outlook', 'Google Calendar', '8Move Fleet Planner', 'Driver Pro']],
]

/** Moved from the home page to /services. */
export function Integrations() {
  return (
    <section className="section" id="integrations" aria-labelledby="int-h">
      <div className="container">
        <SectionHeader
          id="int-h"
          label="Integrations"
          title="Works with what you already run"
          lead="Anything with an API, plus a documented fallback for systems that only export CSV at night."
        />
        <div className="ints stagger">
          {GROUPS.map(([title, items]) => (
            <div key={title} className="card int-card card--flat">
              <h3>{title}</h3>
              <ul>
                {items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
