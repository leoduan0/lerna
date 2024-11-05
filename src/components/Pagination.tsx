'use client'

import Align from './Align'
import { Tabs, Tab } from '@nextui-org/react'

interface PaginationProps {
  pages: { name: string; content: React.ReactNode }[]
}

function Pagination({ pages }: PaginationProps) {
  return (
    <Align type="center">
      <Tabs>
        {pages.map((page) => {
          return (
            <Tab key={page.name} title={page.name}>
              {page.content}
            </Tab>
          )
        })}
      </Tabs>
    </Align>
  )
}

export default Pagination
