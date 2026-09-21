import { getLocale } from 'next-intl/server'
import { buildMetadata } from '@/lib/metadata'

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
    <div className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-2">Cookie Policy</h1>
        <p className="text-muted-foreground mb-10">Last updated: January 2025</p>

        <div className="space-y-10 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">What are cookies?</h2>
            <p>
              Cookies are small text files stored on your device by your browser when you visit a
              website. They help the site remember your preferences and understand how you use it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Cookies we use</h2>

            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-foreground">
                    <th className="text-left pb-3 pr-4">Cookie</th>
                    <th className="text-left pb-3 pr-4">Type</th>
                    <th className="text-left pb-3 pr-4">Purpose</th>
                    <th className="text-left pb-3">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
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
                      <td className="py-3 pr-4 font-mono text-xs text-primary">{row.name}</td>
                      <td className="py-3 pr-4">{row.type}</td>
                      <td className="py-3 pr-4">{row.purpose}</td>
                      <td className="py-3">{row.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Analytics</h2>
            <p>
              This website does not use third-party analytics services (Google Analytics, etc.).
              We use server-side access logs for basic traffic analysis. No cookies are set for
              analytics purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Managing cookies</h2>
            <p>
              You can control and delete cookies through your browser settings. Disabling essential
              cookies may affect the functionality of the site. For more information on managing
              cookies, visit{' '}
              <a href="https://www.aboutcookies.org" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                aboutcookies.org
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Contact</h2>
            <p>
              Questions about our cookie use? Email{' '}
              <a href="mailto:privacy@trident-software.ch" className="text-primary hover:underline">
                privacy@trident-software.ch
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
