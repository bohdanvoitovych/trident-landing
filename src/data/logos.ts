import type { Logo } from '@/components/molecules/Logos'

const name = (file: string) =>
  file
    .replace(/\.[^.]+$/, '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())

const CLIENTS = [
  'gategroup.png',
  'proxinea.svg',
  'tdsbot.png',
  'qmasters.svg',
  'catapult-crown.svg',
  'executive-travel-exchange.png',
  'xtrodes.svg',
  'kleap.png',
  'treedis.svg',
  'la-pochette.svg',
  'xelsat.png',
  'ardevaz-sls.png',
  'mtechno.svg',
  'mastertool.svg',
  'daniparts.png',
  'atc.svg',
  'samange.svg',
  'vbauto.png',
]

// Sites the old homepage linked from its client quotes.
const CLIENT_LINKS: Record<string, string> = {
  'kleap.png': 'https://kleap.co/',
  'daniparts.png': 'https://daniparts.com/',
  'xelsat.png': 'http://xelsat.com/',
}

export const CLIENT_LOGOS: Logo[] = CLIENTS.map((f) => ({
  src: `/images/clients/${f}`,
  alt: name(f),
  ...(CLIENT_LINKS[f] && { href: CLIENT_LINKS[f] }),
}))

export const PARTNER_LOGOS: Logo[] = [
  { src: '/images/partners/aws.png', alt: 'Amazon Web Services' },
  { src: '/images/partners/azure.png', alt: 'Microsoft Azure', href: 'https://azure.microsoft.com/' },
  { src: '/images/partners/google-cloud.png', alt: 'Google Cloud', href: 'https://cloud.google.com/' },
  { src: '/images/partners/hostpoint.png', alt: 'Hostpoint', href: 'https://www.hostpoint.ch/' },
  { src: '/images/partners/cimark.png', alt: 'Cimark', href: 'https://www.cimark.ch/' },
  { src: '/images/partners/go-valais.png', alt: 'GO-Valais' },
  { src: '/images/partners/holidu.png', alt: 'Holidu', href: 'https://www.holidu.com/' },
  { src: '/images/partners/valais-chamber.png', alt: 'CCI Valais' },
]
