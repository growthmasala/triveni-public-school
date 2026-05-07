'use client'

import { useEffect } from 'react'

// Injects Remixicon AFTER hydration — completely off the critical CSS path.
// Icons are decorative; a brief flash of no icons on first load is acceptable.
export default function RemixiconLoader() {
  useEffect(() => {
    if (document.getElementById('ri-css')) return
    const link = document.createElement('link')
    link.id   = 'ri-css'
    link.rel  = 'stylesheet'
    link.href = 'https://cdn.jsdelivr.net/npm/remixicon@3.7.0/fonts/remixicon.css'
    document.head.appendChild(link)
  }, [])
  return null
}
