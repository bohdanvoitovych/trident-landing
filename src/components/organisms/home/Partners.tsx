import Image from 'next/image'

// Carried over from the old site, where these sat as a partner strip.
const PARTNERS: { file: string; name: string; href?: string }[] = [
  { file: 'aws', name: 'Amazon Web Services' },
  { file: 'azure', href: 'https://azure.microsoft.com/', name: 'Microsoft Azure' },
  { file: 'google-cloud', href: 'https://cloud.google.com/', name: 'Google Cloud' },
  { file: 'hostpoint', href: 'https://www.hostpoint.ch/', name: 'Hostpoint' },
  { file: 'cimark', href: 'https://www.cimark.ch/', name: 'Cimark' },
  { file: 'go-valais', name: 'GO-Valais' },
  { file: 'holidu', href: 'https://www.holidu.com/', name: 'Holidu' },
  { file: 'valais-chamber', name: 'Valais Chamber of Commerce and Industry' },
]

export function Partners() {
  return (
    <section className="sec" id="partners" data-screen-label="Partners">
      <div className="wrap">
        <div className="sec-head">
          <span className="label">Partners and platforms</span>
          <h2 className="h2">Who we build and host with</h2>
          <p className="lede">
            Cloud platforms we deploy on, and the Valais institutions we work alongside.
          </p>
        </div>

        <div className="partner-grid">
          {PARTNERS.map((p) => (
            <div className="partner" key={p.file}>
              {(() => {
                const logo = (
                  <Image
                    src={`/images/partners/${p.file}.png`}
                    alt={p.name}
                    width={160}
                    height={56}
                    sizes="160px"
                  />
                )
                return p.href ? (
                  <a href={p.href} target="_blank" rel="noopener noreferrer" aria-label={p.name}>
                    {logo}
                  </a>
                ) : (
                  logo
                )
              })()}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
