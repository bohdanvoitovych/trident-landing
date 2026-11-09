// Industries and services removed when the site moved to the PDF structure (owner decisions D1, D2).
export const REMOVED_INDUSTRY_SLUGS = [
  'agriculture',
  'energy',
  'insurance',
  'legaltech',
  'media-entertainment',
  'public-sector',
]

export const REMOVED_SERVICE_SLUGS = ['team-extension', 'cloud-consulting', 'devops-and-sre', 'ui-ux-design']

// English has no prefix (localePrefix: 'as-needed').
const LOCALE_PREFIXES = ['', '/de', '/fr', '/it']

/** Permanent redirects for next.config.mjs: each removed page goes to its listing, in the same locale. */
export function buildRemovedSlugRedirects() {
  const groups = [
    ['industries', REMOVED_INDUSTRY_SLUGS],
    ['services', REMOVED_SERVICE_SLUGS],
  ]
  return groups.flatMap(([kind, slugs]) =>
    slugs.flatMap((slug) =>
      LOCALE_PREFIXES.flatMap((prefix) => [
        { source: `${prefix}/${kind}/${slug}`, destination: `${prefix}/${kind}`, permanent: true },
        { source: `${prefix}/${kind}/${slug}/`, destination: `${prefix}/${kind}`, permanent: true },
      ]),
    ),
  )
}
