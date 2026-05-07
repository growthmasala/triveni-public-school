import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // NOTE: Update when final domain is locked. See app/layout.tsx SITE_URL note.
  const base = 'https://www.trivenibalavikas.in'
  const now = new Date()

  return [
    { url: base,              lastModified: now, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/about`,      lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/academics`,  lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/pedagogy`,   lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/admissions`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/life`,       lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/careers`,    lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/contact`,    lastModified: now, changeFrequency: 'yearly',  priority: 0.6 },
  ]
}
