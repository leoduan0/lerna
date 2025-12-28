"use client"

import Script from "next/script"

export function Ad() {
  return (
    <div>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1375539695963062"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
    </div>
  )
}
