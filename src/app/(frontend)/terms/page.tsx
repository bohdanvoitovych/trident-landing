import { getLocale } from 'next-intl/server'
import { buildMetadata } from '@/lib/metadata'

export async function generateMetadata() {
  const locale = await getLocale()
  return buildMetadata({
    title: 'Terms & Conditions | Trident Software',
    description: 'General Terms and Conditions of Trident Software GmbH.',
    path: '/terms',
    locale,
  })
}

export default function TermsPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-2">Terms &amp; Conditions</h1>
        <p className="text-muted-foreground mb-10">Last updated: January 2025</p>

        <div className="space-y-10 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Scope</h2>
            <p>
              These General Terms and Conditions (&ldquo;GTC&rdquo;) govern the relationship between
              Trident Software GmbH (&ldquo;Trident&rdquo;) and clients engaging our software
              engineering, AI integration, and consulting services. Individual project agreements
              (Statements of Work) take precedence over these GTC where they conflict.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Services</h2>
            <p>
              Trident provides custom software development, AI integration, embedded systems
              engineering, and related consulting services as defined in a Statement of Work (SOW)
              agreed between the parties. Each SOW constitutes a separate agreement governed by
              these GTC.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Pricing and payment</h2>
            <p>
              Project pricing is fixed as defined in the SOW. Invoices are payable within 30 days
              of issue unless otherwise agreed. Late payments accrue interest at 5% per annum.
              Prices are in CHF and exclusive of VAT unless stated otherwise.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Intellectual property</h2>
            <p>
              Upon full payment, the client owns all custom code and deliverables created
              specifically for the project. Pre-existing components, libraries, and tools remain
              the property of Trident or their respective owners. Open-source components are
              governed by their respective licenses.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Confidentiality</h2>
            <p>
              Both parties agree to maintain confidentiality of the other party&apos;s proprietary
              information. Confidentiality obligations survive project completion for 5 years. A
              separate NDA may be executed where required.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Warranties</h2>
            <p>
              Trident warrants that deliverables will conform to the specifications in the SOW for
              90 days following acceptance. This warranty does not cover issues arising from
              client modifications, third-party integrations, or infrastructure outside Trident&apos;s
              control.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Limitation of liability</h2>
            <p>
              Trident&apos;s total liability under any SOW is limited to the total fees paid by the
              client for that project. Trident is not liable for indirect, consequential, or
              incidental damages.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">8. Governing law</h2>
            <p>
              These GTC and all project agreements are governed by Swiss law. Any disputes shall
              be subject to the exclusive jurisdiction of the courts of the Canton of Valais,
              Switzerland.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">9. Changes</h2>
            <p>
              Trident may update these GTC. The current version is always available at this URL.
              Ongoing projects are governed by the GTC version in effect at SOW signing.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
