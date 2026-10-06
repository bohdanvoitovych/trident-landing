'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, HeartPulse, Car, Truck, Landmark, ShoppingCart, Cloud, Factory, Building2, Zap, Shield, Hotel, Scale, Shirt, Wheat, Tv, Map, ShoppingBag, Wrench, Utensils, Link2, Users, Gamepad2, Dumbbell, GraduationCap, Globe, type LucideIcon } from 'lucide-react'
import type { IndustryData } from '@/data/industries'

const ICON_MAP: Record<string, LucideIcon> = {
  'heart-pulse': HeartPulse,
  'car': Car,
  'truck': Truck,
  'landmark': Landmark,
  'shopping-cart': ShoppingCart,
  'cloud': Cloud,
  'factory': Factory,
  'building': Building2,
  'zap': Zap,
  'shield': Shield,
  'hotel': Hotel,
  'scale': Scale,
  'shirt': Shirt,
  'wheat': Wheat,
  'tv': Tv,
  'map': Map,
  'shopping-bag': ShoppingBag,
  'wrench': Wrench,
  'utensils': Utensils,
  'link': Link2,
  'users': Users,
  'gamepad-2': Gamepad2,
  'dumbbell': Dumbbell,
  'graduation-cap': GraduationCap,
}

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
      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              active === cat
                ? 'bg-[#2772E0] text-white'
                : 'bg-[#2772E0]/10 text-[#2772E0] border border-[#2772E0]/20 hover:bg-[#2772E0]/20'
            }`}
          >
            {cat}
            {cat !== 'All' && (
              <span className="ml-1.5 opacity-60 text-xs">
                ({industries.filter((i) => CATEGORY_MAP[i.slug] === cat).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Industry cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map((industry) => {
          const Icon = ICON_MAP[industry.icon] ?? Globe
          const category = CATEGORY_MAP[industry.slug]
          return (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group light-card light-card-interactive rounded-[3px] p-6 flex flex-col gap-4 transition-all duration-200"
            >
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-[2px] bg-[#2772E0]/10 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-[#2772E0]" />
                </div>
                <span className="text-[10px] font-medium text-[#6B7078] bg-[#F4F4F5] border border-[#E3E5E8] rounded-full px-2 py-0.5 uppercase tracking-wider">
                  {category}
                </span>
              </div>

              <div className="flex-1">
                <h2 className="font-semibold text-[#111318] group-hover:text-[#2772E0] transition-colors mb-1.5">
                  {industry.title}
                </h2>
                <p className="text-[13px] text-[#4A4F57] leading-relaxed line-clamp-2">
                  {industry.tagline}
                </p>
              </div>

              <div className="flex flex-wrap gap-1">
                {industry.techStack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] bg-white border border-[#E3E5E8] text-[#4A4F57] rounded px-1.5 py-0.5"
                  >
                    {tech}
                  </span>
                ))}
                {industry.techStack.length > 3 && (
                  <span className="text-[10px] text-[#6B7078]">+{industry.techStack.length - 3}</span>
                )}
              </div>

              <div className="flex items-center gap-1 text-[12px] text-[#2772E0] font-medium">
                Explore <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}
