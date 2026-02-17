"use client"

import { ChevronRight } from "lucide-react"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Link } from "@/components/link"
import { useNavigationContext } from "@/components/navigation-provider"
import { Button } from "@/components/ui/button"
import type { TPage } from "@/lib/pages"
import { cn } from "@/lib/utils"

interface NavigationPageProps {
  href: string
  page: TPage
  renderFunction: (pages: TPage[], href: string) => React.ReactNode
}

export function NavigationPage({
  href,
  page,
  renderFunction,
}: NavigationPageProps) {
  const { setNavigationStatus } = useNavigationContext()

  const pathname = usePathname()

  const [expand, setExpand] = useState<boolean>(false)

  function toggleExpand() {
    setExpand(!expand)
  }

  return (
    <>
      <div
        className={cn(
          "flex h-8 w-full items-center truncate rounded-md text-sm transition hover:cursor-pointer active:scale-[0.98]",
          (pathname === "/" && href === "/home") || pathname === href
            ? "bg-accent"
            : "hover:bg-accent",
        )}
      >
        <Button
          onClick={() => page.children && toggleExpand()} // This toggles the navigation regardless of screen size. Could be problematic if the user minds the navigation status "spontaneously" changing
          className={cn(
            "h-full rounded-l-md px-2",
            !page.children && "invisible",
          )}
          size="icon"
          type="button"
          variant="ghost"
        >
          <ChevronRight className={expand ? "rotate-90" : ""} size={16} />
        </Button>
        <Link
          href={href}
          className={`${page.children ? "rounded-r-md" : "rounded-md"} flex h-full w-full grow items-center space-x-2 pr-2`}
          onClick={() => setNavigationStatus(false)}
        >
          {page.icon && <div>{page.icon}</div>}
          <span className="truncate text-foreground">{page.title}</span>
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
