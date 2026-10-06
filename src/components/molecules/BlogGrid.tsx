'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Clock, Calendar, ArrowRight } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { formatDate } from '@/lib/utils'
import { BLOG_IMAGES, getBlogCategory, type BlogCategory } from '@/data/blog-meta'
import type { BlogPost } from '@/data/blog'

type PostSlim = Pick<
  BlogPost,
  'slug' | 'title' | 'excerpt' | 'publishedAt' | 'readingTime' | 'tags' | 'image'
>

type Props = {
  posts: PostSlim[]
  readMore: string
}

const CATEGORY_COLORS: Record<Exclude<BlogCategory, 'All'>, string> = {
  Industry: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
  Solution: 'bg-[#2772E0]/10 text-[#2772E0] border-[#2772E0]/20',
  Company: 'bg-violet-500/10 text-violet-600 border-violet-500/20',
}

export function BlogGrid({ posts, readMore }: Props) {
  const searchParams = useSearchParams()
  const activeCategory = (searchParams.get('cat') ?? 'All') as BlogCategory

  const filtered = activeCategory === 'All'
    ? posts
    : posts.filter((p) => getBlogCategory(p.tags) === activeCategory)

  if (filtered.length === 0) {
    return (
      <p className="text-center text-muted-foreground py-16">No posts in this category.</p>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filtered.map((post) => {
        // BLOG_IMAGES holds the originals carried over from the old site;
        // post.image covers the rest, so no card falls back to a bare letter.
        const image = BLOG_IMAGES[post.slug] ?? post.image
        const category = getBlogCategory(post.tags)
        return (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group bg-white border border-[#E3E5E8] rounded-[3px] overflow-hidden flex flex-col hover:shadow-md hover:border-[#2772E0]/30 transition-all duration-200"
          >
            {/* Image */}
            <div className="relative h-44 bg-[#F4F4F5] overflow-hidden shrink-0">
              {image ? (
                <Image
                  src={image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-[#2772E0]/20 to-[#2772E0]/20 flex items-center justify-center">
                  <span className="text-[#2772E0]/40 text-4xl font-bold">{post.title[0]}</span>
                </div>
              )}
              {/* Category badge on image */}
              <span className={`absolute top-3 left-3 text-[10px] font-semibold border rounded-[2px] px-2.5 py-1 ${CATEGORY_COLORS[category]} bg-white/90 backdrop-blur-sm`}>
                {category}
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-3 p-5 flex-1">
              <h2 className="font-semibold text-[15px] text-[#111318] group-hover:text-[#2772E0] transition-colors leading-snug line-clamp-2">
                {post.title}
              </h2>
              <p className="text-[13px] text-[#4A4F57] leading-relaxed line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-3 text-[11px] text-[#6B7078] mt-auto">
                <div className="flex items-center gap-1">
                  <Calendar size={11} />
                  {formatDate(post.publishedAt)}
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={11} />
                  {post.readingTime} min
                </div>
              </div>
              <div className="flex items-center gap-1 text-[12px] text-[#2772E0] font-medium">
                {readMore} <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
