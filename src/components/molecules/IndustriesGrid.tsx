'use client'

import { Link } from '@/i18n/navigation'
import { useState } from 'react'
import type { IndustryData } from '@/data/industries'
import { Chip, Tag } from '@/components/atoms/controls'

type Category = 'All' | 'Technology' | 'Commerce' | 'Industry' | 'Services' | 'Society'

const CATEGORY_MAP: Record<string, Category> = {
  healthcare: 'Services',
  automotive: 'Industry',
  logistics: 'Industry',
  fintech: 'Technology',
  'retail-ecommerce': 'Commerce',
  saas: 'Technology',
  manufacturing: 'Industry',
  proptech: 'Services',
  energy: 'Industry',
  insurance: 'Services',
  hospitality: 'Services',
  legaltech: 'Services',
  'fashion-lifestyle': 'Commerce',
  agriculture: 'Industry',
  'public-sector': 'Society',
  'media-entertainment': 'Society',
  tourism: 'Commerce',
  fmcg: 'Commerce',
  'diy-tools': 'Commerce',
  catering: 'Commerce',
  blockchain: 'Technology',
  'social-media': 'Technology',
  games: 'Technology',
  'sport-activities': 'Society',
  education: 'Society',
}

const CATEGORIES: Category[] = ['All', 'Technology', 'Commerce', 'Industry', 'Services', 'Society']

type Props = {
  industries: IndustryData[]
}

export function IndustriesGrid({ industries }: Props) {
  const [active, setActive] = useState<Category>('All')

  const filtered = active === 'All'
    ? industries
    : industries.filter((i) => CATEGORY_MAP[i.slug] === active)

  return (
    <>
      <div className="chips reveal mb-10">
        {CATEGORIES.map((cat) => (
          <Chip key={cat} aria-pressed={active === cat} onClick={() => setActive(cat)}>
            {cat}
            {cat !== 'All' && (
              <span className="count">{industries.filter((i) => CATEGORY_MAP[i.slug] === cat).length}</span>
            )}
          </Chip>
        ))}
      </div>

      <div className="grid-4 stagger">
        {filtered.map((industry) => (
          <Link key={industry.slug} href={`/industries/${industry.slug}`} className="card flex">
            <div className="card-body">
              <span className="meta">{CATEGORY_MAP[industry.slug]}</span>
              <h2 className="card-title card-title--sm">{industry.title}</h2>
              <p className="small line-clamp-2">{industry.tagline}</p>
              <ul className="flex flex-wrap gap-1.5" role="list">
                {industry.techStack.slice(0, 3).map((tech) => (
                  <li key={tech}>
                    <Tag tone="line">{tech}</Tag>
                  </li>
                ))}
                {industry.techStack.length > 3 && (
                  <li className="meta self-center">+{industry.techStack.length - 3}</li>
                )}
              </ul>
              <span className="card-more">
                Explore <span className="go" aria-hidden="true">→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
