import { MetadataRoute } from 'next'

// Static lastModified date for sitemap entries
// Update this date when making significant content changes to static pages
const STATIC_PAGES_LAST_MODIFIED = new Date('2026-01-01')

export function generateStaticPagesSitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

  const staticPages = [
    // Main pages
    { url: '', priority: 1.0, changeFrequency: 'daily' as const },
    { url: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/contact-us', priority: 0.7, changeFrequency: 'monthly' as const },

    // Shop pages
    { url: '/products/all', priority: 0.9, changeFrequency: 'daily' as const },
    { url: '/category', priority: 0.8, changeFrequency: 'daily' as const },
    { url: '/brands', priority: 0.8, changeFrequency: 'weekly' as const },

    // Blog
    { url: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },

    // Legal pages (removed duplicates: /contact, /privacy, /terms - these redirect to canonical URLs)
    { url: '/privacy-policy', priority: 0.5, changeFrequency: 'yearly' as const },
    { url: '/terms-and-conditions', priority: 0.5, changeFrequency: 'yearly' as const },
    { url: '/warranty', priority: 0.5, changeFrequency: 'yearly' as const },
    { url: '/shipping-returns', priority: 0.5, changeFrequency: 'yearly' as const },

    // Support pages
    { url: '/frequently-asked-questions', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/locator', priority: 0.6, changeFrequency: 'monthly' as const },
  ]

  return staticPages.map(page => ({
    url: `${baseUrl}${page.url}`,
    lastModified: STATIC_PAGES_LAST_MODIFIED,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}