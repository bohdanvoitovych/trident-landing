// Images were pulled from the old WordPress site and now ship locally,
// so the pages no longer depend on trident-software.ch being up.
export const BLOG_IMAGES: Record<string, string> = {
  'from-traditional-to-flexible-wms-mobile-app': '/images/blog/from-traditional-to-flexible-wms-mobile-app.png',
  'nft-in-game-trading-platforms': '/images/blog/nft-in-game-trading-platforms.jpg',
  'arenawave-digital-court-system': '/images/blog/arenawave-digital-court-system.jpg',
  'iot-blockchain-can-it-truly-deliver': '/images/blog/iot-blockchain-can-it-truly-deliver.jpg',
  'secure-your-cloud-on-a-budget-a-guide-for-smbs': '/images/blog/secure-your-cloud-on-a-budget-a-guide-for-smbs.png',
  'presenting-zenit-auto-our-new-b2b-auto-parts-platform': '/images/blog/presenting-zenit-auto-our-new-b2b-auto-parts-platform.png',
  'free-advertising-for-restaurants-through-customer-feedback': '/images/blog/free-advertising-for-restaurants-through-customer-feedback.png',
  'simplifying-your-search-how-iam-trade-makes-finding-products-easy': '/images/blog/simplifying-your-search-how-iam-trade-makes-finding-products.png',
  'driving-growth-essential-tactics-for-your-ecommerce-business': '/images/blog/driving-growth-essential-tactics-for-your-ecommerce-business.png',
  'the-power-of-outsourcing-unlocking-efficiency-and-innovation-in-short-term-projects': '/images/blog/the-power-of-outsourcing-unlocking-efficiency-and-innovation.png',
  'trident-softwares-venture-evolution-it-package-empowers-startups-insights-from-foire-du-valais-2024': '/images/blog/trident-softwares-venture-evolution-it-package-empowers-star.jpg',
  'introducing-our-new-b2b-client-management-panel': '/images/blog/introducing-our-new-b2b-client-management-panel.png',
  'strengthening-small-and-medium-sized-businesses-through-advanced-security-solutions': '/images/blog/secure-your-cloud-on-a-budget-a-guide-for-smbs.png',
}

export type BlogCategory = 'All' | 'Industry' | 'Solution' | 'Company'

const INDUSTRY_TAGS = new Set([
  'Auto Parts', 'HoReCa', 'Restaurants', 'HORECA', 'E-commerce', 'B2B',
  'Logistics', 'IoT', 'Mobile App', 'WMS', 'ERP Integration', 'Admin Panel',
  'Search Features', 'Online Shop', 'Restaurant Industry',
])

const SOLUTION_TAGS = new Set([
  'AI', 'AI Agents', 'LLM', 'Machine Learning', 'Business Intelligence',
  'Cloud', 'AWS', 'Security', 'Blockchain', 'NFT', 'Smart Contracts',
  'Automation', 'Accounting', 'Invoice Management', 'Embedded', 'Firmware',
  'Flutter', 'Next.js', 'Payload CMS', 'TypeScript', 'Mobile App',
])

const COMPANY_TAGS = new Set([
  'Events', 'EPHJ', 'Palexpo', 'Switzerland', 'Startups', 'Venture Evolution',
  'Web Development',
])

export function getBlogCategory(tags: string[]): Exclude<BlogCategory, 'All'> {
  for (const tag of tags) {
    if (COMPANY_TAGS.has(tag)) return 'Company'
  }
  for (const tag of tags) {
    if (INDUSTRY_TAGS.has(tag)) return 'Industry'
  }
  for (const tag of tags) {
    if (SOLUTION_TAGS.has(tag)) return 'Solution'
  }
  return 'Solution'
}
