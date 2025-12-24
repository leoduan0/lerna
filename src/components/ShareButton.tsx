"use client"

import { faShare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
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
      className="rounded-md p-2 transition hover:bg-BUTTON-light active:scale-95 dark:hover:bg-BUTTON-dark"
      type="button"
    >
      <FontAwesomeIcon icon={faShare} />
    </button>
  )
}

export default ShareButton
