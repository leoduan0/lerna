'use client'

import Head from './Head'
import Pages from './Pages'
import Ad from '@/components/Ad'
import useNavigationStatus from '@/hooks/useNavigationStatus'
import TPage from '@/types/TPage'

interface NavigationProps {
  pages: TPage[]
}

function Navigation({ pages }: NavigationProps) {
  const { navigationStatus, toggleNavigation } = useNavigationStatus()

  return (
    <>
      <nav
        className={`${navigationStatus ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 lg:opacity-100'} absolute z-20 flex h-full w-2/3 flex-col overflow-y-auto rounded-r-md border-r border-neutral-300 bg-neutral-100 backdrop-blur-lg transition md:w-1/3 lg:static lg:w-96 lg:translate-x-0 lg:rounded-none lg:bg-neutral-100 lg:backdrop-blur-none dark:border-neutral-700 dark:bg-neutral-900/50 lg:dark:bg-neutral-900`}
      >
        <Head toggleFunction={toggleNavigation} />
        <Pages pages={pages} />
        <div className="max-h-44">
          {/* Fix so that it always shows at the very bottom */}
          <Ad />
        </div>
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
