export type ClientLogo = {
  name: string
  logo: string
  category: 'client' | 'partner'
}

export const clients: ClientLogo[] = [
  { name: 'Proxinea',                  logo: '/images/clients/proxinea.svg',                  category: 'client' },
  { name: 'Gate Group',                logo: '/images/clients/gategroup.png',                  category: 'client' },
  { name: 'TDSbot',                    logo: '/images/clients/tdsbot.png',                     category: 'client' },
  { name: 'Qmasters',                  logo: '/images/clients/qmasters.svg',                   category: 'client' },
  { name: 'The Catapult Crown',        logo: '/images/clients/catapult-crown.svg',             category: 'client' },
  { name: 'Executive Travel Exchange', logo: '/images/clients/executive-travel-exchange.png',  category: 'client' },
  { name: 'Xtrodes',                   logo: '/images/clients/xtrodes.svg',                    category: 'client' },
  { name: 'Kleap',                     logo: '/images/clients/kleap.png',                      category: 'client' },
  { name: 'Treedis',                   logo: '/images/clients/treedis.svg',                    category: 'client' },
  { name: 'La Pochette',               logo: '/images/clients/la-pochette.svg',                category: 'client' },
  { name: 'Xelsat',                    logo: '/images/clients/xelsat.png',                     category: 'client' },
  { name: 'Ardevaz SLS',               logo: '/images/clients/ardevaz-sls.png',                category: 'client' },
  { name: 'MTechno',                   logo: '/images/clients/mtechno.svg',                    category: 'client' },
  { name: 'Mastertool',                logo: '/images/clients/mastertool.svg',                  category: 'client' },
  { name: 'DaniParts',                 logo: '/images/clients/daniparts.png',                  category: 'client' },
  { name: 'ATC',                       logo: '/images/clients/atc.svg',                        category: 'client' },
  { name: 'Samange',                   logo: '/images/clients/samange.svg',                    category: 'client' },
  { name: 'VBauto',                    logo: '/images/clients/vbauto.png',                     category: 'client' },
]

export type TechPartner = {
  name: string
  logo: string
}

export const techPartners: TechPartner[] = [
  { name: 'AWS',                              logo: '/images/partners/aws.png' },
  { name: 'Microsoft Azure',                  logo: '/images/partners/ms-azure.png' },
  { name: 'Google Cloud',                     logo: '/images/partners/google-cloud.png' },
  { name: 'Hostpoint',                        logo: '/images/partners/hostpoint.png' },
  { name: 'CimArk',                           logo: '/images/partners/cimark.png' },
  { name: 'GoValais',                         logo: '/images/partners/go-valais.png' },
  { name: 'Holidu',                           logo: '/images/partners/holidu.png' },
  { name: 'Chambre Valaisanne de Commerce',   logo: '/images/partners/valais-chamber.png' },
]
