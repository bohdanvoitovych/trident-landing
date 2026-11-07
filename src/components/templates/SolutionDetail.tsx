import { ButtonLink } from '@/components/atoms/controls'
import { PageHero } from '@/components/molecules/PageHero'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import type { SolutionData } from '@/data/solutions'

type Head = { label: string; title: string; lead: string }

type Props = {
  solution: SolutionData
  /** Hero label, also the last breadcrumb. */
  label: string
  primary: string
  secondary: { href: string; label: string }
  features: { lead: string }
  /** The second block: a list of platforms, industries, certifications… */
  list: Head & { items: string[] }
  stack: Omit<Head, 'label'>
  cta: { title: string; text: string; primary: string; secondary: { href: string; label: string } }
}

/** Shared layout of the /solutions/{slug} detail pages. Copy comes from each page. */
export function SolutionDetail({ solution, label, primary, secondary, features, list, stack, cta }: Props) {
  return (
    <>
      <PageHero
        crumbs={[
          { name: 'Solutions', href: '/solutions' },
          { name: label, href: `/solutions/${solution.slug}` },
        ]}
        label={label}
        title={solution.title}
        lead={solution.description}
        actions={
          <>
            <ButtonLink href="/contact" arrow>
              {primary}
            </ButtonLink>
            <ButtonLink href={secondary.href} variant="outline">
              {secondary.label}
            </ButtonLink>
          </>
        }
      />

      <section className="section section--alt" aria-labelledby="sol-features-h">
        <div className="container">
          <SectionHeader id="sol-features-h" label="Capabilities" title="What we deliver" lead={features.lead} />
          <div className="grid-3 stagger">
            {solution.features.map((feature) => (
              <div key={feature.title} className="card card--flat feature-card">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="sol-list-h">
        <div className="container">
          <div className="split split--top">
            <SectionHeader id="sol-list-h" label={list.label} title={list.title} lead={list.lead} className="!mb-0" />
            <ul className="reveal grid gap-x-6 border-t border-line sm:grid-cols-2" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {list.items.map((item) => (
                <li
                  key={item}
                  className="grid grid-cols-[16px_minmax(0,1fr)] gap-2.5 border-b border-line py-4 text-[16px] font-medium text-ink before:font-bold before:text-blue before:content-['✓']"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="sol-stack-h">
        <div className="container">
          <SectionHeader id="sol-stack-h" label="Tech stack" title={stack.title} lead={stack.lead} />
          <ul className="reveal flex flex-wrap gap-2" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {solution.techStack.map((tech) => (
              <li key={tech} className="rounded-sm border border-line bg-white px-3 py-1.5 text-[14px] font-medium text-ink">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--line" aria-labelledby="sol-cta-h">
        <div className="container">
          <div className="cta-band reveal">
            <div className="stack">
              <h2 id="sol-cta-h" className="h2">
                {cta.title}
              </h2>
              <p className="lead" style={{ maxWidth: 640 }}>
                {cta.text}
              </p>
            </div>
            <div className="hero-ctas">
              <ButtonLink href="/contact" arrow>
                {cta.primary}
              </ButtonLink>
              <ButtonLink href={cta.secondary.href} variant="outline">
                {cta.secondary.label}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
