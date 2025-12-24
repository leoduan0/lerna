"use client"

import { ChevronRight } from "lucide-react"
import { usePathname } from "next/navigation"
import { useState } from "react"
import Link from "@/components/Link"
import useNavigationStatus from "@/hooks/use-navigation-status"
import type { TPage } from "@/lib/pages"

interface NavigationPageProps {
  href: string
  page: TPage
  renderFunction: (pages: TPage[], href: string) => React.ReactNode
}

function NavigationPage({ href, page, renderFunction }: NavigationPageProps) {
  const { toggleNavigation } = useNavigationStatus()

  const pathname = usePathname()

  const [expand, setExpand] = useState<boolean>(false)

  function toggleExpand() {
    setExpand(!expand)
  }

  return (
    <>
      <div
        className={`${
          (pathname === "/" && href === "/home") || pathname === href
            ? "bg-button"
            : "hover:bg-button"
        } flex h-8 w-full items-center truncate rounded-md text-sm transition hover:cursor-pointer active:scale-[0.98]`}
      >
        <button
          onClick={() => page.children && toggleExpand()} // This toggles the navigation regardless of screen size. Could be problematic if the user minds the navigation status "spontaneously" changing
          className={`${page.children ? "" : "invisible"} flex h-full items-center justify-center rounded-l-md p-2`}
          type="button"
        >
          <ChevronRight className={expand ? "rotate-90" : ""} size={16} />
        </button>
        <Link
          href={href}
          className={`${page.children ? "rounded-r-md" : "rounded-md"} flex h-full w-full grow items-center space-x-2 pr-2`}
          onClick={() => toggleNavigation()}
        >
          {page.icon && <div>{page.icon}</div>}
          <span className="truncate text-theme">{page.title}</span>
        </Link>
      </div>
      {page.children && expand && (
        <ul className="list-none space-y-1 pl-6 lg:space-y-0.5">
          {renderFunction(page.children, href)}
        </ul>
      )}
    </>
  )
}

export default NavigationPage
