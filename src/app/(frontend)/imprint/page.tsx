import { getLocale } from 'next-intl/server'
import { buildMetadata } from '@/lib/metadata'

export async function generateMetadata() {
  const locale = await getLocale()
  return buildMetadata({
    title: 'Imprint | Trident Software',
    description: 'Legal information about Trident Software GmbH.',
    path: '/imprint',
    locale,
  })
}

export default function ImprintPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-10">Imprint</h1>

        <section className="space-y-6 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-2">Company</h2>
            <p>Trident Software GmbH</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground mb-2">Registered address</h2>
            <p>
              Rue de l&apos;Industrie 12<br />
              1950 Sion<br />
              Valais, Switzerland
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground mb-2">Contact</h2>
            <p>
              Email: <a href="mailto:hello@trident-software.ch" className="text-primary hover:underline">hello@trident-software.ch</a>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground mb-2">Commercial register</h2>
            <p>Canton of Valais, Switzerland</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground mb-2">VAT number</h2>
            <p>CHE-XXX.XXX.XXX MWST</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground mb-2">Responsible for content</h2>
            <p>Trident Software GmbH, Sion</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground mb-2">Disclaimer</h2>
            <p>
              The information on this website is provided for general informational purposes only.
              While we strive to keep information accurate and up to date, we make no warranties
              of any kind, express or implied, about the completeness, accuracy, reliability, or
              availability of the website or the information contained on it.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground mb-2">External links</h2>
            <p>
              This website may contain links to external sites. We are not responsible for the
              content of those sites and do not endorse them.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
