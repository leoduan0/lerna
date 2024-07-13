'use client'
import React, { useState } from 'react'
import { Page } from '@/types'

export default function NavigationSection(props: {
  page: Page
  href: string
  renderFunction: (pages: Page[], href: string) => React.ReactNode
}): React.ReactNode {
  const [expand, setExpand] = useState<boolean>(true)

  function toggleExpand(): void {
    setExpand(!expand)
  }

  return (
    <div className="w-fit min-w-full space-y-0.5">
      <div className="flex items-center">
        <button
          onClick={() => props.page.children && toggleExpand()}
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
        <div className="flex h-8 items-center text-sm">
          <span>{props.page.title}</span>
        </div>
      </div>
      {props.page.children && expand && (
        <ul className="list-none space-y-0.5 pl-6">
          {props.renderFunction(props.page.children, props.href)}
        </ul>
      )}
    </div>
  )
}
