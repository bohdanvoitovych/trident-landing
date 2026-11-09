// Old WordPress posts that lived at the site root. Each now lives under /blog/ with the same slug.
export const OLD_POST_SLUGS = [
  'a-step-by-step-guide-to-selling-goods-on-google-merchant',
  'ai-in-warfare-and-the-mathematics-of-victory',
  'ai-recommender-system-in-travel-a-simple-start-with-big-results',
  'ai-voice-bots-smooth-out-customer-service',
  'ardevaz-language-school-website-launch',
  'automation-reshapes-business-resilience-in-the-age-of-global-instability',
  'automechanika-dubai-2025-meet-us-at-booth-8-f18',
  'aws-dynamic-pricing-strategythrough-a-microservice-in-an-automotive-parts-sales-project',
  'band-spotlight-transform-your-watch-store-with-captivating-descriptions',
  'boost-sales-pro-video-content-for-your-online-store',
  'boosting-sales-features-and-price-optimization-models',
  'click-scan-done-how-digital-invoice-scanner-cuts-costs',
  'cloud-technologies-aws-masterclass',
  'digital-done-right-custom-auto-parts-ecommerce',
  'exploring-online-store-payment-types-security-and-tips',
  'flutter-powered-storekepeer-app-interface',
  'from-data-to-decisions-how-autonomous-ai-agents-drive-business-smarts',
  'from-manual-to-automatic-ai-powered-description-of-product-service-for-retailers',
  'from-order-to-delivery-optimizing-horeca-distribution-with-tms',
  'go-valais-expat-club-website-launch',
  'graph-databases-connected-data-for-business-success',
  'highlights-from-ephj-2025-tech-talk-and-transformation',
  'how-to-automate-your-courier-service-with-erp-integration',
  'iam-trade-e-commerce-platform-for-online-tire-retailers',
  'introducing-our-project-online-shop-for-watches-bags-and-accessories',
  'iot-data-monetization-in-programmable-economy',
  'la-pochette-online-shop-discover-stylish-accessories',
  'less-staff-more-service-reducing-labor-costs-in-horeca',
  'mastertool-website-launch-online-tools-store-in-slovakia',
  'maximizing-efficiency-and-cost-savings-with-aws-lambda',
  'maximizing-sales-tips-for-creating-compelling-product-pages-for-your-online-tire-shop',
  'membership-in-valais-chamber-of-commerce-and-industry',
  'navigating-success-how-delivery-tracking-systems-enhance-e-commerce-sales',
  'palexpo-geneva-2025-a-fresh-look-at-cost-cutting-strategies',
  'palexpo-geneva-2025-visit-trident-software-at-booth-k127',
  'partnership-with-amazon-web-services',
  'practical-ai-for-smes-where-it-really-works',
  'practical-finops-tips-for-aws-cost-optimization',
  'revolutionizing-inventory-management',
  'selling-used-tires-online-essential-tips-for-site-owners',
  'smart-horeca-solutions-slashing-costs-and-amplifying-profits',
  'startup-journey-watertds-and-the-power-of-agile-iot-development',
  'streamlining-aws-user-permissions-a-strategy-for-growing-businesses',
  'talk-to-me-ai-conversational-ai-agents-for-business',
  'tech-shaping-2025-business-needs-and-our-plans',
  'think-act-repeat-task-oriented-ai-agents',
]

// One post kept its content under a shorter slug.
export const RENAMED_POST_SLUGS = {
  'smart-auto-parts-software-that-unifies-ecommerce-warehouse-delivery-and-ai':
    'smart-auto-parts-software-unifies-ecommerce-warehouse-delivery-ai',
}

/** Permanent redirects for next.config.mjs: root-level old post URLs, with and without trailing slash. */
export function buildOldPostRedirects() {
  const pairs = [
    ...OLD_POST_SLUGS.map((slug) => [slug, slug]),
    ...Object.entries(RENAMED_POST_SLUGS),
  ]
  return pairs.flatMap(([from, to]) => [
    { source: `/${from}`, destination: `/blog/${to}`, permanent: true },
    { source: `/${from}/`, destination: `/blog/${to}`, permanent: true },
  ])
}

/** Old WordPress tag archives. Individual tag pages no longer exist. */
export const TOPIC_REDIRECTS = [
  { source: '/topics/:tag', destination: '/blog', permanent: true },
  { source: '/topics/:tag/', destination: '/blog', permanent: true },
]
