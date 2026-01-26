import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  
  const robotsTxt = `User-agent: *
Allow: /

# Block API routes
Disallow: /api/

# Block transactional pages
Disallow: /cart
Disallow: /checkout
Disallow: /order-confirmation

# Block account pages
Disallow: /account

# Block auth pages
Disallow: /account/login
Disallow: /account/register
Disallow: /account/forgot-password
Disallow: /account/reset-password

# Block search with parameters
Disallow: /search?*

# Block preview/staging content
Disallow: /*?preview=
Disallow: /*?draft=

# Block internal utility pages
Disallow: /authorize-net-success
Disallow: /site-map

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml`

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}