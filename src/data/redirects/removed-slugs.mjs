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

// Case studies merged into another (owner decision D3): old slug → the case that now tells the story.
export const MERGED_CASES = { 'aida-medicine': 'post-acute-clinic-network' }

/** Permanent redirects for next.config.mjs: each merged case goes to its successor, in the same locale. */
export function buildMergedCaseRedirects() {
  return Object.entries(MERGED_CASES).flatMap(([from, to]) =>
    LOCALE_PREFIXES.flatMap((prefix) => [
      { source: `${prefix}/cases/${from}`, destination: `${prefix}/cases/${to}`, permanent: true },
      { source: `${prefix}/cases/${from}/`, destination: `${prefix}/cases/${to}`, permanent: true },
    ]),
  )
}
