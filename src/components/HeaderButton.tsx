"use client"

import { Menu } from "lucide-react"
import useNavigationStatus from "@/hooks/use-navigation-status"

function HeaderButton() {
  const { toggleNavigation } = useNavigationStatus()

  return (
    <button
      onClick={toggleNavigation}
      className="rounded-md p-2 transition hover:bg-button active:scale-95 lg:invisible hover:cursor-pointer"
      type="button"
    >
      <Menu strokeWidth={1} />
    </button>
  )
}

export default HeaderButton
