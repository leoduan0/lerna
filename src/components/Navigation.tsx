"use client"

import { X } from "lucide-react"
import NextImage from "next/image"
import { Ad } from "@/components/ad"
import useNavigationStatus from "@/hooks/use-navigation-status"
import type { TPage } from "@/lib/pages"
import Pages from "./Pages"

interface NavigationProps {
  pages: TPage[]
}

function Navigation({ pages }: NavigationProps) {
  const { navigationStatus, toggleNavigation } = useNavigationStatus()

  return (
    <>
      <nav
        className={`${navigationStatus ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 lg:opacity-100"} absolute z-20 flex h-full w-2/3 flex-col overflow-y-auto rounded-r-md border-layout-border border-r backdrop-blur-lg transition md:w-1/3 lg:static lg:w-96 lg:translate-x-0 lg:rounded-none lg:backdrop-blur-none bg-layout/50`}
      >
        <div className="flex h-12 w-full items-center justify-center space-x-2 border-layout-border border-b">
          {/* TODO make logo adapt to different themes */}
          <NextImage src="/lerna_logo.svg" alt="Logo" width={64} height={64} />
          <button
            onClick={() => toggleNavigation()}
            className="rounded-md p-2 transition hover:bg-button active:scale-95 lg:hidden hover:cursor-pointer"
            type="button"
          >
            <X strokeWidth={1} size={20} />
          </button>
        </div>
        <Pages pages={pages} />
        <Ad />
      </nav>
      <button
        onClick={() => toggleNavigation()}
        className={`${
          navigationStatus
            ? "z-10 translate-x-0 opacity-50 lg:hidden"
            : "translate-x-full opacity-0"
        } absolute right-0 left-2/3 h-full bg-black transition md:left-1/3`}
        type="button"
      />
    </>
  )
}

export default Navigation
