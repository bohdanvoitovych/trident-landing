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

export const CLIENT_LOGOS: Logo[] = CLIENTS.map((f) => ({ src: `/images/clients/${f}`, alt: name(f) }))

export const PARTNER_LOGOS: Logo[] = [
  { src: '/images/partners/aws.png', alt: 'Amazon Web Services' },
  { src: '/images/partners/azure.png', alt: 'Microsoft Azure' },
  { src: '/images/partners/google-cloud.png', alt: 'Google Cloud' },
  { src: '/images/partners/hostpoint.png', alt: 'Hostpoint' },
  { src: '/images/partners/cimark.png', alt: 'Cimark' },
  { src: '/images/partners/go-valais.png', alt: 'GO-Valais' },
  { src: '/images/partners/holidu.png', alt: 'Holidu' },
  { src: '/images/partners/valais-chamber.png', alt: 'Valais Chamber of Commerce and Industry' },
]
