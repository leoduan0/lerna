import { TPage } from '@/types'
import { Href } from '@/utils'
import NavigationPage from './NavigationPage'

function renderNavigationItems(pages: TPage[], href: string): React.ReactNode {
  return pages.map((item: TPage, index) => {
    return (
      <li key={index} className="w-full space-y-1 lg:space-y-0.5">
        <NavigationPage
          page={item}
          href={
            item.title == 'Home' ? href + '/' : href + '/' + Href(item.title)
          }
          renderFunction={renderNavigationItems}
        />
      </li>
    )
  })
}

export default function Pages(props: { pages: TPage[] }): React.ReactNode {
  return (
    <ul className="w-full list-none space-y-1 p-2 lg:space-y-0.5">
      {renderNavigationItems(props.pages, '')}
    </ul>
  )
}
