'use client'

import Script from 'next/script'
import { useEffect } from 'react'

declare global {
  interface Window {
    adsbygoogle?: { [key: string]: unknown }[]
  }
}

function Ad() {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      }
    } catch (e) {
      console.error(e)
    }
  }, [])

  return (
    <div>
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.ADSENSE_ID}`}
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={process.env.ADSENSE_ID}
        data-ad-slot={process.env.ADSENSE_AD_ID}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}

export default Ad
