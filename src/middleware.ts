import createIntlMiddleware from 'next-intl/middleware'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { routing } from './i18n/routing'

const intlMiddleware = createIntlMiddleware(routing)

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

export function middleware(request: NextRequest) {
  const authResponse = checkBasicAuth(request)
  if (authResponse) return authResponse

  const path = request.nextUrl.pathname
  const redirect = REDIRECTS[path]
  if (redirect) {
    return NextResponse.redirect(new URL(redirect, request.url), 301)
  }
  return intlMiddleware(request)
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*|admin).*)'],
}
