"use client"

import { usePathname } from "next/navigation"

function Path() {
  const pathname = usePathname()

  return (
    <div className="text-theme overflow-x-auto whitespace-nowrap font-bold">
      {pathname === "/"
        ? "Home"
        : decodeURIComponent(pathname)
            .replace("/", "")
            .replace(/-/g, " ")
            .replace(/\//g, " - ")
            .replace(/\b\w/g, (char) => char.toUpperCase())}
    </div>
  )
}

export default Path
