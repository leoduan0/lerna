import { Page } from '@/types'
import { Href } from '@/utils'
import NavigationPage from './NavigationPage'

function renderNavigationItems(pages: Page[], href: string): React.ReactNode {
  return pages.map((item: Page, index) => {
    return (
      <li key={index}>
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

export default function Pages(props: { pages: Page[] }): React.ReactNode {
  return (
    <ul className="list-none space-y-0.5 p-2">
      {renderNavigationItems(props.pages, '')}
    </ul>
  )
}
