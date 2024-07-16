'use client'

import Script from 'next/script'
import { useEffect } from 'react'

declare global {
  interface Window {
    adsbygoogle?: any | any[]
  }
}

export default function GoogleAd(): React.ReactNode {
  useEffect(() => {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.error(err)
    }
  }, [])
  return (
    <>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5882787766829258"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={process.env.ADSENSE_ID}
        data-ad-slot="7654068621"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </>
  )
}
