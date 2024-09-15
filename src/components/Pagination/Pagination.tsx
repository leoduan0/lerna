'use client'

import { Align } from '../Align'
import { Heading } from '../Heading'
import { useState } from 'react'

interface PaginationProps {
  pages: Array<{ name: string; content: React.ReactNode }>
}

export default function Pagination({ pages }: PaginationProps) {
  const [selected, setSelected] = useState<number>(0)

  return (
    <Align type={'center'}>
      <div>
        <div className="space-x-2 rounded-md dark:bg-neutral-800">
          {pages.map((page, index) => {
            return (
              <button
                key={index}
                id={index.toString()}
                onClick={() => setSelected(index)}
                className={`${selected == index ? 'bg-neutral-300 font-bold dark:bg-neutral-700' : 'hover:bg-neutral-300 dark:hover:bg-neutral-700'} text-theme rounded-md px-2 py-1 transition active:scale-95`}
              >
                {page.name}
              </button>
            )
          })}
        </div>
        <div>{pages[selected].content}</div>
      </div>
    </Align>
  )
}
