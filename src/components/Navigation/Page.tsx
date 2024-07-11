import { Page } from '@/types'
import { Href } from '@/utils'
import NavigationPage from './NavigationPage'
import NavigationLink from './NavigationLink'
import NavigationSection from './NavigationSection'

function renderNavigationItems(pages: Page[], href: string): React.ReactNode {
  return pages.map((item: Page, index) => {
    switch (item.type) {
      case 'link':
        return (
          <li key={index}>
            <NavigationLink page={item} />
          </li>
        )
      case 'page':
        return (
          <li key={index}>
            <NavigationPage
              page={item}
              href={
                item.title == 'Home'
                  ? href + '/'
                  : href + '/' + Href(item.title)
              }
              renderFunction={renderNavigationItems}
            />
          </li>
        )
      case 'section':
        return (
          <li key={index}>
            <NavigationSection
              page={item}
              href={href}
              renderFunction={renderNavigationItems}
            />
          </li>
        )
      default:
        return <></>
    }
  })
}

export default function Pages(props: { pages: Page[] }): React.ReactNode {
  return (
    <ul className="list-none space-y-0.5 p-2">
      {renderNavigationItems(props.pages, '')}
    </ul>
  )
}
