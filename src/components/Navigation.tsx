'use client'

import Head from './Head'
import Pages from './Pages'
// import Ad from '@/components/Ad'
import useNavigationStatus from '@/hooks/useNavigationStatus'
import TPage from '@/types/TPage'
import { ScrollShadow } from '@nextui-org/react'

interface NavigationProps {
  pages: TPage[]
}

function Navigation({ pages }: NavigationProps) {
  const { navigationStatus, toggleNavigation } = useNavigationStatus()

  return (
    <>
      <nav
        className={`${navigationStatus ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 lg:opacity-100'} absolute z-20 flex h-full w-2/3 flex-col overflow-y-auto rounded-r-md border-r border-LAYOUT_BORDER-light bg-LAYOUT-light/50 backdrop-blur-lg transition dark:border-LAYOUT_BORDER-dark dark:bg-LAYOUT-dark/50 md:w-1/3 lg:static lg:w-96 lg:translate-x-0 lg:rounded-none lg:bg-LAYOUT-light lg:backdrop-blur-none lg:dark:bg-LAYOUT-dark`}
      >
        <Head toggleFunction={toggleNavigation} />
        <ScrollShadow className="h-full w-full">
          <Pages pages={pages} />
        </ScrollShadow>
        {/* <Ad /> Fix so that it always shows at the very bottom */}
      </nav>
      <div
        onClick={() => toggleNavigation()}
        className={`${
          navigationStatus
            ? 'z-10 translate-x-0 opacity-50 lg:hidden'
            : 'translate-x-full opacity-0'
        } absolute left-2/3 right-0 h-full bg-black transition md:left-1/3`}
      />
    </>
  )
}

export default Navigation
