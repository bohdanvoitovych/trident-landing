import createIntlMiddleware from 'next-intl/middleware'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { routing } from './i18n/routing'

const intlMiddleware = createIntlMiddleware(routing)

// On Workers, OpenNext applies next-intl's `/:locale/:path*` → `/:path*` rewrite
// but drops the bare `/:locale` → `/` one, so the home page 404s while every
// other page resolves. Collapse that rewrite ourselves. Node builds are
// untouched — there the rewrite resolves on its own.
const IS_WORKERS = process.env.NEXT_PUBLIC_CF_WORKERS === '1'
const BARE_LOCALE = new RegExp(`^/(${routing.locales.join('|')})/?$`)

function collapseBareLocaleRewrite(request: NextRequest, response: NextResponse): NextResponse {
  if (!IS_WORKERS) return response
  const rewrite = response.headers.get('x-middleware-rewrite')
  if (!rewrite) return response
  const target = new URL(rewrite, request.url)
  if (!BARE_LOCALE.test(target.pathname)) return response
  target.pathname = '/'
  response.headers.set('x-middleware-rewrite', target.toString())
  return response
}

function checkBasicAuth(request: NextRequest): NextResponse | null {
  const credentials = process.env.BASIC_AUTH_CREDENTIALS
  if (!credentials) return null
  const [expectedUser, expectedPass] = credentials.split(':')
  const authHeader = request.headers.get('authorization')
  if (authHeader?.startsWith('Basic ')) {
    const decoded = atob(authHeader.slice(6))
    const [user, pass] = decoded.split(':')
    if (user === expectedUser && pass === expectedPass) return null
  }
  return new NextResponse('Authentication required', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Trident Preview"' },
  })
}

const REDIRECTS: Record<string, string> = {
  '/about-us': '/about',
  '/about-us/': '/about',
  '/our-team': '/team',
  '/our-team/': '/team',
  '/contacts': '/contact',
  '/contacts/': '/contact',
  '/our-solutions': '/solutions',
  '/our-solutions/': '/solutions',
  '/our-solutions/websites': '/solutions/websites',
  '/our-solutions/websites/': '/solutions/websites',
  '/our-solutions/e-commerce': '/solutions/e-commerce',
  '/our-solutions/e-commerce/': '/solutions/e-commerce',
  '/our-solutions/websites/online-boutique': '/solutions/e-commerce',
  '/our-solutions/websites/online-boutique/': '/solutions/e-commerce',
  '/our-solutions/websites/web-brochure': '/solutions/websites',
  '/our-solutions/websites/web-brochure/': '/solutions/websites',
  '/our-solutions/websites/user-portal': '/solutions/websites',
  '/our-solutions/websites/user-portal/': '/solutions/websites',
  '/our-solutions/websites/sme-website': '/solutions/websites',
  '/our-solutions/websites/sme-website/': '/solutions/websites',
  '/site-price': '/pricing',
  '/site-price/': '/pricing',
  '/iam-trade': '/cases/iam-trade',
  '/iam-trade/': '/cases/iam-trade',
  '/8move': '/products',
  '/8move/': '/products',
  '/services/software-development': '/services/software-engineering',
  '/services/software-development/': '/services/software-engineering',
  '/services/startups-cto-service': '/services/cto-as-a-service',
  '/services/startups-cto-service/': '/services/cto-as-a-service',
  '/services/team-extension': '/services',
  '/services/team-extension/': '/services',
  '/services/cloud-consulting': '/services',
  '/services/cloud-consulting/': '/services',
  '/services/devops-and-sre': '/services',
  '/services/devops-and-sre/': '/services',
  '/services/ui-ux-design': '/services',
  '/services/ui-ux-design/': '/services',
  '/cases/aida-medicine': '/cases/post-acute-clinic-network',
  '/cases/aida-medicine/': '/cases/post-acute-clinic-network',
  '/industries/agriculture': '/industries',
  '/industries/agriculture/': '/industries',
  '/industries/energy': '/industries',
  '/industries/energy/': '/industries',
  '/industries/insurance': '/industries',
  '/industries/insurance/': '/industries',
  '/industries/legaltech': '/industries',
  '/industries/legaltech/': '/industries',
  '/industries/media-entertainment': '/industries',
  '/industries/media-entertainment/': '/industries',
  '/industries/public-sector': '/industries',
  '/industries/public-sector/': '/industries',
  '/portfolio': '/cases',
  '/portfolio/': '/cases',
  // Old WordPress blog posts at root level → /blog/[slug]
  '/presenting-zenit-auto-our-new-b2b-auto-parts-platform': '/blog/presenting-zenit-auto-our-new-b2b-auto-parts-platform',
  '/presenting-zenit-auto-our-new-b2b-auto-parts-platform/': '/blog/presenting-zenit-auto-our-new-b2b-auto-parts-platform',
  '/arenawave-digital-court-system': '/blog/arenawave-digital-court-system',
  '/arenawave-digital-court-system/': '/blog/arenawave-digital-court-system',
  '/iot-blockchain-can-it-truly-deliver': '/blog/iot-blockchain-can-it-truly-deliver',
  '/iot-blockchain-can-it-truly-deliver/': '/blog/iot-blockchain-can-it-truly-deliver',
  '/secure-your-cloud-on-a-budget-a-guide-for-smbs': '/blog/secure-your-cloud-on-a-budget-a-guide-for-smbs',
  '/secure-your-cloud-on-a-budget-a-guide-for-smbs/': '/blog/secure-your-cloud-on-a-budget-a-guide-for-smbs',
  '/from-traditional-to-flexible-wms-mobile-app': '/blog/from-traditional-to-flexible-wms-mobile-app',
  '/from-traditional-to-flexible-wms-mobile-app/': '/blog/from-traditional-to-flexible-wms-mobile-app',
  '/free-advertising-for-restaurants-through-customer-feedback': '/blog/free-advertising-for-restaurants-through-customer-feedback',
  '/free-advertising-for-restaurants-through-customer-feedback/': '/blog/free-advertising-for-restaurants-through-customer-feedback',
  '/simplifying-your-search-how-iam-trade-makes-finding-products-easy': '/blog/simplifying-your-search-how-iam-trade-makes-finding-products-easy',
  '/simplifying-your-search-how-iam-trade-makes-finding-products-easy/': '/blog/simplifying-your-search-how-iam-trade-makes-finding-products-easy',
  '/driving-growth-essential-tactics-for-your-ecommerce-business': '/blog/driving-growth-essential-tactics-for-your-ecommerce-business',
  '/driving-growth-essential-tactics-for-your-ecommerce-business/': '/blog/driving-growth-essential-tactics-for-your-ecommerce-business',
  '/the-power-of-outsourcing-unlocking-efficiency-and-innovation-in-short-term-projects': '/blog/the-power-of-outsourcing-unlocking-efficiency-and-innovation-in-short-term-projects',
  '/the-power-of-outsourcing-unlocking-efficiency-and-innovation-in-short-term-projects/': '/blog/the-power-of-outsourcing-unlocking-efficiency-and-innovation-in-short-term-projects',
  '/introducing-our-new-b2b-client-management-panel': '/blog/introducing-our-new-b2b-client-management-panel',
  '/introducing-our-new-b2b-client-management-panel/': '/blog/introducing-our-new-b2b-client-management-panel',
  '/nft-in-game-trading-platforms': '/blog/nft-in-game-trading-platforms',
  '/nft-in-game-trading-platforms/': '/blog/nft-in-game-trading-platforms',
  '/strengthening-small-and-medium-sized-businesses-through-advanced-security-solutions': '/blog/strengthening-small-and-medium-sized-businesses-through-advanced-security-solutions',
  '/strengthening-small-and-medium-sized-businesses-through-advanced-security-solutions/': '/blog/strengthening-small-and-medium-sized-businesses-through-advanced-security-solutions',
  '/trident-softwares-venture-evolution-it-package-empowers-startups-insights-from-foire-du-valais-2024': '/blog/trident-softwares-venture-evolution-it-package-empowers-startups-insights-from-foire-du-valais-2024',
  '/trident-softwares-venture-evolution-it-package-empowers-startups-insights-from-foire-du-valais-2024/': '/blog/trident-softwares-venture-evolution-it-package-empowers-startups-insights-from-foire-du-valais-2024',
  // Tag archives → blog
  '/topics': '/blog',
  '/topics/': '/blog',
}

// Old WordPress posts that live under /blog/ on the new site (same slug).
const OLD_POST_SLUGS = [
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
for (const slug of OLD_POST_SLUGS) {
  REDIRECTS[`/${slug}`] = `/blog/${slug}`
  REDIRECTS[`/${slug}/`] = `/blog/${slug}`
}
// One post kept its content under a shorter slug.
REDIRECTS['/smart-auto-parts-software-that-unifies-ecommerce-warehouse-delivery-and-ai'] =
  '/blog/smart-auto-parts-software-unifies-ecommerce-warehouse-delivery-ai'
REDIRECTS['/smart-auto-parts-software-that-unifies-ecommerce-warehouse-delivery-and-ai/'] =
  '/blog/smart-auto-parts-software-unifies-ecommerce-warehouse-delivery-ai'

export function middleware(request: NextRequest) {
  const authResponse = checkBasicAuth(request)
  if (authResponse) return authResponse

  const path = request.nextUrl.pathname
  const redirect = REDIRECTS[path]
  if (redirect) {
    return NextResponse.redirect(new URL(redirect, request.url), 301)
  }
  return collapseBareLocaleRewrite(request, intlMiddleware(request))
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*|admin).*)'],
}
