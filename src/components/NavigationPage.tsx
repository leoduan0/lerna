'use client'

import Link from '@/components/Link'
import useNavigationStatus from '@/hooks/useNavigationStatus'
import TPage from '@/types/TPage'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

interface NavigationPageProps {
  href: string
  page: TPage
  renderFunction: (pages: TPage[], href: string) => React.ReactNode
}

function NavigationPage({ href, page, renderFunction }: NavigationPageProps) {
  const { navigationStatus, toggleNavigation } = useNavigationStatus()

  const pathname = usePathname()

  const [expand, setExpand] = useState<boolean>(false)

  function toggleExpand() {
    setExpand(!expand)
  }

  return (
    <>
      <div
        className={`${
          (pathname == '/' && href == '/home') || pathname == href
            ? 'bg-neutral-200 dark:bg-neutral-700'
            : 'hover:bg-neutral-200 dark:hover:bg-neutral-700'
        } flex h-8 w-full items-center truncate rounded-md text-sm transition hover:cursor-pointer active:scale-[0.98]`}
      >
        <button
          onClick={() => page.children && toggleExpand()} // This toggles the navigation regardless of screen size. Could be problematic if the user minds the navigation status "spontaneously" changing
          className={`${page.children ? '' : 'invisible'} flex h-full items-center justify-center rounded-l-md p-2`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8px"
            viewBox="0 0 384 512"
            className={`${
              expand ? 'rotate-90' : ''
            } fill-black dark:fill-white`}
          >
            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
          </svg>
        </button>
        <Link
          href={href}
          className={`${page.children ? 'rounded-r-md' : 'rounded-md'} flex h-full w-full grow items-center space-x-2 pr-2`}
          onClick={() => toggleNavigation()}
        >
          <div>{page.icon && page.icon}</div>
          <span className="text-theme truncate">{page.title}</span>
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
