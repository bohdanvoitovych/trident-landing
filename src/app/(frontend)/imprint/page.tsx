import { getLocale } from 'next-intl/server'
import { buildMetadata } from '@/lib/metadata'
import { LegalPage } from '@/components/templates/LegalPage'

export async function generateMetadata() {
  const locale = await getLocale()
  return buildMetadata({
    title: 'Imprint | Trident Software',
    description: 'Legal information about Trident Software Sàrl.',
    path: '/imprint',
    locale,
  })
}

export default function ImprintPage() {
  return (
    <LegalPage title="Imprint" path="/imprint">
      <div>
        <h2>Company</h2>
        <p>Trident Software Sàrl</p>
      </div>

      <div>
        <h2>Registered address</h2>
        <p>
          Rue de l&apos;Industrie 23<br />
          1950 Sion<br />
          Valais, Switzerland
        </p>
      </div>

      <div>
        <h2>Contact</h2>
        <p>
          Email: <a href="mailto:hello@trident-software.ch">hello@trident-software.ch</a>
        </p>
      </div>

      <div>
        <h2>Commercial register</h2>
        <p>Canton of Valais, Switzerland</p>
      </div>

      <div>
        <h2>VAT number</h2>
        <p>CHE-XXX.XXX.XXX MWST</p>
      </div>

      <div>
        <h2>Responsible for content</h2>
        <p>Trident Software Sàrl, Sion</p>
      </div>

      <div>
        <h2>Disclaimer</h2>
        <p>
          The information on this website is provided for general informational purposes only.
          While we strive to keep information accurate and up to date, we make no warranties
          of any kind, express or implied, about the completeness, accuracy, reliability, or
          availability of the website or the information contained on it.
        </p>
      </div>

      <div>
        <h2>External links</h2>
        <p>
          This website may contain links to external sites. We are not responsible for the
          content of those sites and do not endorse them.
        </p>
      </div>
    </LegalPage>
  )
}
