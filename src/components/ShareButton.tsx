"use client"

import { Share2 } from "lucide-react"
import { usePathname } from "next/navigation"
import { APP_URL } from "@/lib/constants"

function ShareButton() {
  const pathname = usePathname()

  async function shareLink() {
    const shareData = {
      url: `https://${APP_URL}${pathname}`,
    }

    if (navigator.share) {
      try {
        await navigator.share(shareData)
      } catch (error) {
        console.error(error)
      }
    } else {
      await navigator.clipboard.writeText(shareData.url)
      alert("Link to the current page copied to clipboard.")
    }
  }

  return (
    <button
      onClick={() => shareLink()}
      className="rounded-md p-2 transition hover:bg-button hover:cursor-pointer active:scale-95"
      type="button"
    >
      <Share2 strokeWidth={1} />
    </button>
  )
}

export default ShareButton
