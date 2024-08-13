'use client'

import { useState } from 'react'
import { TQA } from './CommonQuestion'

export default function Item(props: { qa: TQA }): React.ReactNode {
  const [expand, setExpand] = useState<boolean>(false)

  function toggleExpand(): void {
    setExpand(!expand)
  }

  return (
    <>
      <button
        onClick={() => toggleExpand()}
        className="flex h-8 w-full items-center space-x-2 truncate pl-2 hover:cursor-pointer" // Truncate doesn't work properly
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8px"
          viewBox="0 0 384 512"
          className={`${expand ? 'rotate-90' : ''} fill-black dark:fill-white`}
        >
          <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
        </svg>
        {props.qa.question}
      </button>
      {expand && <div className="px-2 pb-2">{props.qa.answer}</div>}
    </>
  )
}
