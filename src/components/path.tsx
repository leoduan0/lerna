"use client"

import { usePathname } from "next/navigation"

export function Path() {
  const pathname = usePathname()

  return (
    <div className="overflow-x-auto whitespace-nowrap font-bold text-foreground">
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
