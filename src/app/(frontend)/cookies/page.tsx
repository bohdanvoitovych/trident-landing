import { getLocale } from 'next-intl/server'
import { buildMetadata } from '@/lib/metadata'
import { LegalPage } from '@/components/templates/LegalPage'

export async function generateMetadata() {
  const locale = await getLocale()
  return buildMetadata({
    title: 'Cookie Policy | Trident Software',
    description: 'Cookie Policy for trident-software.ch — what cookies we use and why.',
    path: '/cookies',
    locale,
  })
}

export default function CookiesPage() {
  return (
    <LegalPage title="Cookie Policy" path="/cookies" updated="Last updated: January 2025">
      <section>
        <h2>What are cookies?</h2>
        <p>
          Cookies are small text files stored on your device by your browser when you visit a
          website. They help the site remember your preferences and understand how you use it.
        </p>
      </section>

      <section>
        <h2>Cookies we use</h2>

        <div className="not-prose table-wrap mt-6">
          <table className="table">
            <thead>
              <tr>
                <th>Cookie</th>
                <th>Type</th>
                <th>Purpose</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: 'payload-token',
                  type: 'Essential',
                  purpose: 'Authentication token for Payload CMS admin users',
                  duration: 'Session',
                },
                {
                  name: '__next_locale',
                  type: 'Functional',
                  purpose: 'Remembers your preferred language',
                  duration: '1 year',
                },
              ].map((row) => (
                <tr key={row.name}>
                  <td className="font-mono text-[13px] text-blue-d">{row.name}</td>
                  <td>{row.type}</td>
                  <td>{row.purpose}</td>
                  <td>{row.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Analytics</h2>
        <p>
          This website does not use third-party analytics services (Google Analytics, etc.).
          We use server-side access logs for basic traffic analysis. No cookies are set for
          analytics purposes.
        </p>
      </section>

      <section>
        <h2>Managing cookies</h2>
        <p>
          You can control and delete cookies through your browser settings. Disabling essential
          cookies may affect the functionality of the site. For more information on managing
          cookies, visit{' '}
          <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer">
            aboutcookies.org
          </a>
          .
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Questions about our cookie use? Email{' '}
          <a href="mailto:privacy@trident-software.ch">
            privacy@trident-software.ch
          </a>
          .
        </p>
      </section>
    </LegalPage>
  )
}
