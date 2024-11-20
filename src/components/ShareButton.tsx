'use client'

import { faShare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { usePathname } from 'next/navigation'

function ShareButton() {
  const pathname = usePathname()

  async function shareLink() {
    const shareData = {
      url: 'https://lerna.app' + pathname,
    }

    if (navigator.share) {
      try {
        await navigator.share(shareData)
      } catch (error) {
        console.error(error)
      }
    } else {
      await navigator.clipboard.writeText(shareData.url)
      alert('Link to the current page copied to clipboard.')
    }
  }

  return (
    <button
      onClick={() => shareLink()}
      className="rounded-md p-2 transition hover:bg-neutral-200 active:scale-95 dark:hover:bg-neutral-700"
    >
      <FontAwesomeIcon icon={faShare} />
    </button>
  )
}

export default ShareButton
