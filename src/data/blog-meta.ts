// Images were pulled from the old WordPress site and now ship locally,
// so the pages no longer depend on trident-software.ch being up.
export const BLOG_IMAGES: Record<string, string> = {
  'la-pochette-online-shop-discover-stylish-accessories': '/images/blog/la-pochette-online-shop-discover-stylish-accessories.jpg',
  'from-order-to-delivery-optimizing-horeca-distribution-with-tms': '/images/blog/from-order-to-delivery-optimizing-horeca-distribution-with-t.jpg',
  'from-data-to-decisions-how-autonomous-ai-agents-drive-business-smarts': '/images/blog/from-data-to-decisions-how-autonomous-ai-agents-drive-busine.jpg',
  'palexpo-geneva-2025-visit-trident-software-at-booth-k127': '/images/blog/palexpo-geneva-2025-visit-trident-software-at-booth-k127.jpg',
  'highlights-from-ephj-2025-tech-talk-and-transformation': '/images/blog/highlights-from-ephj-2025-tech-talk-and-transformation.jpg',
  'automation-reshapes-business-resilience-in-the-age-of-global-instability': '/images/blog/automation-reshapes-business-resilience-in-the-age-of-global.jpg',
  'digital-done-right-custom-auto-parts-ecommerce': '/images/blog/digital-done-right-custom-auto-parts-ecommerce.jpg',
  'click-scan-done-how-digital-invoice-scanner-cuts-costs': '/images/blog/click-scan-done-how-digital-invoice-scanner-cuts-costs.jpg',
  'practical-ai-for-smes-where-it-really-works': '/images/blog/practical-ai-for-smes-where-it-really-works.jpg',
  'automechanika-dubai-2025-meet-us-at-booth-8-f18': '/images/blog/automechanika-dubai-2025-meet-us-at-booth-8-f18.jpg',
  'from-traditional-to-flexible-wms-mobile-app': '/images/blog/from-traditional-to-flexible-wms-mobile-app.jpg',
  'nft-in-game-trading-platforms': '/images/blog/nft-in-game-trading-platforms.jpg',
  'arenawave-digital-court-system': '/images/blog/arenawave-digital-court-system.jpg',
  'iot-blockchain-can-it-truly-deliver': '/images/blog/iot-blockchain-can-it-truly-deliver.jpg',
  'secure-your-cloud-on-a-budget-a-guide-for-smbs': '/images/blog/secure-your-cloud-on-a-budget-a-guide-for-smbs.jpg',
  'presenting-zenit-auto-our-new-b2b-auto-parts-platform': '/images/blog/presenting-zenit-auto-our-new-b2b-auto-parts-platform.jpg',
  'free-advertising-for-restaurants-through-customer-feedback': '/images/blog/free-advertising-for-restaurants-through-customer-feedback.jpg',
  'simplifying-your-search-how-iam-trade-makes-finding-products-easy': '/images/blog/simplifying-your-search-how-iam-trade-makes-finding-products.jpg',
  'driving-growth-essential-tactics-for-your-ecommerce-business': '/images/blog/driving-growth-essential-tactics-for-your-ecommerce-business.jpg',
  'the-power-of-outsourcing-unlocking-efficiency-and-innovation-in-short-term-projects': '/images/blog/the-power-of-outsourcing-unlocking-efficiency-and-innovation.jpg',
  'trident-softwares-venture-evolution-it-package-empowers-startups-insights-from-foire-du-valais-2024': '/images/blog/trident-softwares-venture-evolution-it-package-empowers-star.jpg',
  'introducing-our-new-b2b-client-management-panel': '/images/blog/introducing-our-new-b2b-client-management-panel.jpg',
  'strengthening-small-and-medium-sized-businesses-through-advanced-security-solutions': '/images/blog/strengthening-small-and-medium-sized-businesses-through-adva.jpg',
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
