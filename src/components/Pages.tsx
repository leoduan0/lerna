import { formatHref } from "@/lib/format-href"
import type { TPage } from "@/lib/pages"
import NavigationPage from "./NavigationPage"

function renderPages(pages: TPage[], href: string) {
  return pages.map((page) => {
    return (
      <li className="w-full space-y-1 lg:space-y-0.5" key={page.title}>
        <NavigationPage
          page={page}
          href={
            page.title === "Home"
              ? `${href}/`
              : `${href}/${formatHref(page.title)}`
          }
          renderFunction={renderPages}
        />
      </li>
    )
  })
}

interface PagesProps {
  pages: TPage[]
}

function Pages({ pages }: PagesProps) {
  return (
    <ul className="w-full list-none space-y-1 p-2 lg:space-y-0.5">
      {renderPages(pages, "")}
    </ul>
  )
}

export default Pages
