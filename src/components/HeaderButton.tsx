'use client'

import useNavigationStatus from '@/hooks/useNavigationStatus'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function HeaderButton() {
  const { navigationStatus, toggleNavigation } = useNavigationStatus()

  return (
    <button
      onClick={toggleNavigation}
      className="rounded-md p-2 transition hover:bg-neutral-200 active:scale-95 dark:hover:bg-neutral-700 lg:invisible"
    >
      <FontAwesomeIcon icon={faBars} />
    </button>
  )
}

export default HeaderButton
