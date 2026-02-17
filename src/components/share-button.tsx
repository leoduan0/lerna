"use client"

import { Share2 } from "lucide-react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { APP_URL } from "@/lib/constants"

export function ShareButton() {
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
    <Button
      onClick={() => shareLink()}
      className="hover:bg-accent"
      type="button"
      variant="outline"
      size="icon"
    >
      <Share2 />
    </Button>
  )
}
