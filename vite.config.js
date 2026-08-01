import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { SITE_URL } from './src/assets/site.js'

const PAGES = ['/', '/privacy', '/terms', '/delete-account', '/contact']

function buildRobots() {
  return `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`
}

function buildSitemap() {
  const urls = PAGES.map((path) => {
    const loc = path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`
    const priority = path === '/' ? '1.0' : path === '/privacy' || path === '/terms' ? '0.8' : '0.7'
    const changefreq = path === '/' ? 'weekly' : 'monthly'
    return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`
  }).join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
}

function siteUrlPlugin() {
  return {
    name: 'falahpro-site-url',
    transformIndexHtml(html) {
      return html.replaceAll('%SITE_URL%', SITE_URL)
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/robots.txt') {
          res.setHeader('Content-Type', 'text/plain; charset=utf-8')
          res.end(buildRobots())
          return
        }
        if (req.url === '/sitemap.xml') {
          res.setHeader('Content-Type', 'application/xml; charset=utf-8')
          res.end(buildSitemap())
          return
        }
        next()
      })
    },
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: buildRobots(),
      })
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: buildSitemap(),
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), siteUrlPlugin()],
})
