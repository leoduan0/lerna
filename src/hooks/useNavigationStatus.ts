'use client'

import { useState, useEffect } from 'react'

let navigationStatus = true

export default function useNavigationStatus() {
  const [localStatus, setLocalStatus] = useState<boolean>(navigationStatus)

  useEffect(() => {
    const updateLocalStatus = () => setLocalStatus(navigationStatus)
    window.addEventListener('navigationStatusChange', updateLocalStatus)

    return () =>
      window.removeEventListener('navigationStatusChange', updateLocalStatus)
  }, [])

  function toggleNavigation(): void {
    navigationStatus = !navigationStatus
    window.dispatchEvent(new Event('navigationStatusChange'))
  }

  return { navigationStatus: localStatus, toggleNavigation }
}
