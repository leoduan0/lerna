'use client'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import useNavigationStatus from '@/hooks/useNavigationStatus'
import { Page } from '@/types'

export default function NavigationPage(props: {
  page: Page
  href: string
  renderFunction: (pages: Page[], href: string) => React.ReactNode
}): React.ReactNode {
  const { navigationStatus, toggleNavigation } = useNavigationStatus()

  const pathname = usePathname()

  const [expand, setExpand] = useState<boolean>(false)

  function toggleExpand(): void {
    setExpand(!expand)
  }

  return (
    <div className="w-full space-y-0.5">
      <div
        className={`${
          (pathname == '/' && props.href == '/home') || pathname == props.href
            ? 'bg-neutral-200 dark:bg-neutral-700'
            : 'hover:bg-neutral-200 dark:hover:bg-neutral-700'
        } flex h-8 w-fit min-w-full items-center rounded-md text-sm transition hover:cursor-pointer active:scale-[0.98]`}
      >
        <button
          onClick={() => props.page.children && toggleExpand()} // This toggles the navigation regardless of screen size. Could be problematic if the user minds the navigation status "spontaneously" changing
          className={`${props.page.children ? '' : 'invisible'} flex h-full items-center justify-center rounded-l-md p-2`}
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
        <NextLink
          href={props.href}
          className={`${props.page.children ? 'rounded-r-md' : 'rounded-md'} flex h-full grow items-center space-x-2`}
          onClick={() => toggleNavigation()}
        >
          <div className="grow-0">{props.page.icon && props.page.icon}</div>
          <div className="text-theme grow truncate pr-2">
            {props.page.title}
          </div>
        </NextLink>
      </div>
      {props.page.children && expand && (
        <ul className="list-none space-y-0.5 pl-6">
          {props.renderFunction(props.page.children, props.href)}
        </ul>
      )}
    </div>
  )
}
