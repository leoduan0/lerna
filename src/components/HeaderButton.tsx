"use client"

import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useNavigationStatus from "@/hooks/useNavigationStatus"

function HeaderButton() {
  const { toggleNavigation } = useNavigationStatus()

  return (
    <button
      onClick={toggleNavigation}
      className="rounded-md p-2 transition hover:bg-button active:scale-95 lg:invisible"
      type="button"
    >
      <FontAwesomeIcon icon={faBars} />
    </button>
  )
}

export default HeaderButton
