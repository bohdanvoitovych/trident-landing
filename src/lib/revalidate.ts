const LOCALES = ['en', 'de', 'fr', 'it'] as const

const COLLECTION_PATHS: Record<string, (slug: string) => string[]> = {
  pages: (slug) => [`/${slug}`],
}

export async function revalidateCollection(collectionSlug: string, slug: string): Promise<void> {
  let revalidatePath: (path: string) => void
  try {
    const mod = await import('next/cache')
    revalidatePath = mod.revalidatePath
  } catch {
    return
  }

  const getPathsFn = COLLECTION_PATHS[collectionSlug]
  if (!getPathsFn) return

  const paths = getPathsFn(slug)
  try {
    for (const locale of LOCALES) {
      for (const p of paths) {
        revalidatePath(`/${locale}${p}`)
      }
    }
    revalidatePath('/sitemap.xml')
  } catch {
    // outside Next.js request context
  }
}
