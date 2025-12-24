"use client"

import { Tab, Tabs } from "@heroui/react"
import Align from "./Align"

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
