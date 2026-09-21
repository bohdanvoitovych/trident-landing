const WP = 'https://trident-software.ch/wp-content/uploads'

export const BLOG_IMAGES: Record<string, string> = {
  'from-traditional-to-flexible-wms-mobile-app': `${WP}/2024/02/wms-flutter-mobile-app-vs-data-collection-terminal.png`,
  'nft-in-game-trading-platforms': `${WP}/2024/11/trader-doing-nft-payment-on-metaverse-market-using-1024x688.jpg`,
  'arenawave-digital-court-system': `${WP}/2024/10/sports-equipment-in-locker-room-2023-11-27-05-02-13-utc-1024x688.jpg`,
  'iot-blockchain-can-it-truly-deliver': `${WP}/2024/12/iot-and-blockchain-1024x688.jpg`,
  'secure-your-cloud-on-a-budget-a-guide-for-smbs': `${WP}/2024/03/secure-your-cloud-on-a-budget-a-guide-for-smbs-1-1024x688.png`,
  'presenting-zenit-auto-our-new-b2b-auto-parts-platform': `${WP}/2024/05/ZenitAuto.png`,
  'free-advertising-for-restaurants-through-customer-feedback': `${WP}/2024/03/free-advertising-for-restaurants-through-customer-feedback-1024x688.png`,
  'simplifying-your-search-how-iam-trade-makes-finding-products-easy': `${WP}/2024/04/shopping-cart-with-magnifying-icon-block-and-laptop.png`,
  'driving-growth-essential-tactics-for-your-ecommerce-business': `${WP}/2024/04/freelancer-ceo-making-mistake-error-being-fired-1.png`,
  'the-power-of-outsourcing-unlocking-efficiency-and-innovation-in-short-term-projects': `${WP}/2024/03/the-power-of-outsourcing-unlocking-efficiency-and-innovation-in-short-term-projects.png`,
  'trident-softwares-venture-evolution-it-package-empowers-startups-insights-from-foire-du-valais-2024': `${WP}/2024/10/Venture-Evolution-IT-Package-1024x688.jpg`,
  'introducing-our-new-b2b-client-management-panel': `${WP}/2024/05/our-new-b2b-client-management-panel.png`,
  'strengthening-small-and-medium-sized-businesses-through-advanced-security-solutions': `${WP}/2024/03/secure-your-cloud-on-a-budget-a-guide-for-smbs-1-1024x688.png`,
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
