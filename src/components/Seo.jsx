import { useEffect } from 'react'
import { SITE, SITE_URL } from '../assets/site'

function upsertMeta(attr, key, content) {
  if (!content) return
  let element = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attr, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

export default function Seo({
  title,
  description = SITE.description,
  path = '/',
  noIndex = false,
}) {
  useEffect(() => {
    const fullTitle =
      title === SITE.title || title.includes('|')
        ? title
        : `${title} | ${SITE.name}`

    document.title = fullTitle

    upsertMeta('name', 'description', description)
    upsertMeta('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow')
    upsertMeta('property', 'og:title', fullTitle)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', `${SITE_URL}${path}`)
    upsertMeta('property', 'og:image', `${SITE_URL}/og-image.png`)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:site_name', SITE.name)
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', fullTitle)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', `${SITE_URL}/og-image.png`)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', `${SITE_URL}${path}`)
  }, [title, description, path, noIndex])

  return null
}
