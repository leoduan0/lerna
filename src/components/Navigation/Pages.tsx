import NavigationPage from './NavigationPage'
import { TPage } from '@/types'
import { Href } from '@/utils'

function renderPages(pages: Array<TPage>, href: string): React.ReactNode {
  return pages.map((page: TPage, index: number): React.ReactNode => {
    return (
      <li className="w-full space-y-1 lg:space-y-0.5" key={page.title}>
        <NavigationPage
          page={page}
          href={
            page.title == 'Home' ? href + '/' : href + '/' + Href(page.title)
          }
          renderFunction={renderPages}
        />
      </li>
    )
  })
}

export default function Pages(props: { pages: Array<TPage> }): React.ReactNode {
  return (
    <ul className="w-full list-none space-y-1 p-2 lg:space-y-0.5">
      {renderPages(props.pages, '')}
    </ul>
  )
}
