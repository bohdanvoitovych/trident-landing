import Link from 'next/link'
import Image from 'next/image'
import { getLocale } from 'next-intl/server'
import { technologies } from '@/data/technologies'
import { buildMetadata } from '@/lib/metadata'
import { Tag } from '@/components/atoms/controls'
import { PageHero } from '@/components/molecules/PageHero'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { CtaBand, TagList } from '@/components/molecules/CatalogBlocks'

export const revalidate = 86400

export async function generateMetadata() {
  const locale = await getLocale()
  return buildMetadata({
    title: 'Technologies We Use | Swiss Software Development | Trident Software',
    description:
      'Next.js, Flutter, TypeScript, Python, React, Node.js, PostgreSQL, Docker — our technology stack for Swiss software development.',
    path: '/technologies',
    locale,
  })
}

export default function TechnologiesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: 'Technologies', href: '/technologies' }]}
        label="Our stack"
        title="Technologies we build with"
        lead="Battle-tested tools. Modern stack. Production-grade defaults across every project."
      />

      <section className="section section--alt" aria-labelledby="tech-list-h">
        <div className="container">
          <SectionHeader
            id="tech-list-h"
            label="Stack"
            title="What we use, and why"
            lead="Each technology earns its place by shipping reliably in production."
          />
          <div className="grid-3 stagger">
            {technologies.map((tech) => (
              <Link key={tech.slug} href={`/technologies/${tech.slug}`} className="card flex">
                <div className="card-body">
                  <div className="flex items-center gap-2.5">
                    {tech.iconSlug && (
                      <Image src={`/images/tech/${tech.iconSlug}.svg`} alt={`${tech.name} logo`} width={20} height={20} className="shrink-0" />
                    )}
                    <Tag tone="wash">{tech.category}</Tag>
                  </div>
                  <h3 className="card-title card-title--sm">
                    {tech.name}{' '}
                    <span className="go" aria-hidden="true">
                      →
                    </span>
                  </h3>
                  <p className="small line-clamp-2">{tech.tagline}</p>
                  <div className="mt-auto pt-2">
                    <TagList items={tech.complementaryStack.slice(0, 3)} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        id="tech-cta-h"
        title="Building with a different stack?"
        text="We adapt to your existing codebase. Talk to us about your project."
        button="Start a conversation"
      />
    </>
  )
}
