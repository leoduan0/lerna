'use client'

import { Align } from '../Align'
import { useState } from 'react'

export default function Pagination(props: {
  pages: Array<{ name: string; content: React.ReactNode }>
}): React.ReactNode {
  const [selected, setSelected] = useState<number>(0)

  return (
    <Align type={'center'}>
      <div>
        <div className="space-x-2 rounded-md dark:bg-neutral-800">
          {props.pages.map((page, index) => {
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
        <div className="bg-purple-500">{props.pages[selected].content}</div>
      </div>
    </Align>
  )
}
