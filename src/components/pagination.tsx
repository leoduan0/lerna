"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Align } from "./align"

interface PaginationProps {
  pages: { name: string; content: React.ReactNode }[]
}

export function Pagination({ pages }: PaginationProps) {
  return (
    <Align type="center">
      <Tabs className="w-full" defaultValue={pages[0]?.name}>
        <TabsList className="h-auto w-full flex-wrap justify-start">
          {pages.map((page) => {
            return (
              <TabsTrigger key={page.name} value={page.name}>
                {page.name}
              </TabsTrigger>
            )
          })}
        </TabsList>
        {pages.map((page) => {
          return (
            <TabsContent key={page.name} value={page.name}>
              {page.content}
            </TabsContent>
          )
        })}
      </Tabs>
    </Align>
  )
}
