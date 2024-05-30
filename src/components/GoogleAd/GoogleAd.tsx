'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

declare global {
  interface Window {
    adsbygoogle?: any | any[]
  }
}

function Ad(): React.ReactNode {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  useEffect(() => {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.error(err)
    }
  }, [pathname, searchParams])
  return (
    <div>
      {process.env.NODE_ENV == 'production' && (
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client={process.env.ADSENSE_ID}
          data-ad-slot="7654068621"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      )}
    </div>
  )
}

export default function GoogleAd(): React.ReactNode {
  return <Ad />
}
