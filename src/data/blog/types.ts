/** What a translation of a post carries. A locale counts as published only once `content` is written. */
export type BlogPostTranslation = {
  title: string
  excerpt: string
  content?: string
  authorRole?: string
  faq?: { question: string; answer: string }[]
  meta: { title: string; description: string }
}

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  authorRole: string
  publishedAt: string
  readingTime: number
  tags: string[]
  relatedPosts: string[]
  category?: string
  image?: string
  faq?: { question: string; answer: string }[]
  meta: {
    title: string
    description: string
  }
}

export type BlogPostRecord = BlogPost & {
  translations?: {
    de?: BlogPostTranslation
    fr?: BlogPostTranslation
    it?: BlogPostTranslation
  }
}
