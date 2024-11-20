'use client'

import Script from 'next/script'
import { useEffect } from 'react'

declare global {
  interface Window {
    adsbygoogle?: any | any[]
  }
}

function Ad() {
  useEffect(() => {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.error(err)
    }
  }, [])

  return (
    <div>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5882787766829258"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <ins
        className="adsbygoogle block max-h-44"
        // style={{ display: 'block' }}
        data-ad-client={process.env.ADSENSE_ID}
        data-ad-slot="7654068621"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}

export default Ad
