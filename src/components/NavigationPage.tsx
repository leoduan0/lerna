'use client'

import Link from '@/components/Link'
import useNavigationStatus from '@/hooks/useNavigationStatus'
import TPage from '@/types/TPage'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
          <FontAwesomeIcon
            className={`${
              expand ? 'rotate-90' : ''
            } fill-black dark:fill-white`}
            icon={faCaretRight}
          />
        </button>
        <Link
          href={href}
          className={`${page.children ? 'rounded-r-md' : 'rounded-md'} flex h-full w-full grow items-center space-x-2 pr-2`}
          onClick={() => toggleNavigation()}
        >
          {page.icon && <div>{page.icon}</div>}
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
