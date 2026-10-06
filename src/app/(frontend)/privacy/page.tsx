import { getLocale } from 'next-intl/server'
import { buildMetadata } from '@/lib/metadata'

export async function generateMetadata() {
  const locale = await getLocale()
  return buildMetadata({
    title: 'Privacy Policy | Trident Software',
    description: 'Privacy Policy for Trident Software Sàrl — how we collect, use, and protect your data.',
    path: '/privacy',
    locale,
  })
}

export default function PrivacyPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-10">Last updated: January 2025</p>

        <div className="space-y-10 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Controller</h2>
            <p>
              Trident Software Sàrl, Rue de l&apos;Industrie 23, 1950 Sion, Switzerland
              (&ldquo;Trident&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is the controller for the
              personal data processed through this website and our services.
            </p>
            <p className="mt-2">
              Contact: <a href="mailto:privacy@trident-software.ch" className="text-primary hover:underline">privacy@trident-software.ch</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Data we collect</h2>
            <p>We collect the following categories of personal data:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                <strong className="text-foreground">Contact data</strong> — name, email address, phone number, company name when you submit a contact or quote form.
              </li>
              <li>
                <strong className="text-foreground">Newsletter subscriptions</strong> — email address and locale when you subscribe.
              </li>
              <li>
                <strong className="text-foreground">Usage data</strong> — IP address, browser type, pages visited, and referrer URL collected via server logs.
              </li>
              <li>
                <strong className="text-foreground">Cookies</strong> — see our Cookie Policy for details.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Legal basis and purpose</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact forms — processing based on your consent (Art. 6(1)(a) GDPR / Art. 31 nFADP) to respond to your inquiry.</li>
              <li>Newsletter — processing based on your consent; you may withdraw at any time.</li>
              <li>Server logs — legitimate interest in operating and securing our website (Art. 6(1)(f) GDPR).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Data storage</h2>
            <p>
              All personal data is stored on servers located in Switzerland or the European Economic
              Area. We do not transfer personal data to countries outside the EEA or Switzerland
              without appropriate safeguards.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Retention</h2>
            <p>
              Contact form submissions are retained for 3 years for business records. Newsletter
              subscriptions are retained until you unsubscribe. Server logs are retained for 90 days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Your rights</h2>
            <p>Under nFADP and GDPR you have the right to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Restrict processing</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, email <a href="mailto:privacy@trident-software.ch" className="text-primary hover:underline">privacy@trident-software.ch</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Third-party processors</h2>
            <p>
              We use the following processors who may access your data only for the purposes
              described in this policy:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Hosting provider — EU/CH-based infrastructure for website and database</li>
              <li>Email service — transactional emails for form confirmations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">8. Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect personal
              data including TLS encryption, access controls, and regular security assessments.
              We operate under ISO 27000 principles.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">9. Complaints</h2>
            <p>
              If you believe we are processing your data unlawfully, you have the right to lodge a
              complaint with the Swiss Federal Data Protection and Information Commissioner (FDPIC)
              at{' '}
              <a href="https://www.edoeb.admin.ch" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                www.edoeb.admin.ch
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">10. Changes</h2>
            <p>
              We may update this policy from time to time. The &ldquo;Last updated&rdquo; date at
              the top of this page reflects the most recent revision.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
