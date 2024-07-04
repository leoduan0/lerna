'use client'
import useNavigationStatus from '@/hooks/useNavigationStatus'
import { GoogleAd } from '@/components'
import { Page } from '@/types'
import Head from './Head'
import Pages from './Page'

export default function Navigation(props: { pages: Page[] }) {
  const { navigationStatus, toggleNavigation } = useNavigationStatus()

  return (
    <>
      <nav
        className={`${navigationStatus ? 'translate-x-0' : '-translate-x-full'} absolute z-10 flex h-full w-2/3 flex-col rounded-r-md border-r border-neutral-300 bg-neutral-100 backdrop-blur-xl transition-transform ease-in-out md:w-1/3 lg:static lg:w-72 lg:translate-x-0 lg:rounded-none lg:bg-neutral-100 lg:backdrop-blur-none dark:border-neutral-700 dark:bg-neutral-900/50 lg:dark:bg-neutral-900`}
      >
        <div className="min-h-[75%] overflow-y-auto">
          <Head toggleFunction={toggleNavigation} />
          <Pages pages={props.pages} />
        </div>
        <GoogleAd />
      </nav>
      <div
        onClick={toggleNavigation}
        className={`${
          navigationStatus ? 'z-10 opacity-50 lg:hidden' : '-z-50 opacity-0'
        } absolute left-2/3 right-0 h-full bg-black transition md:left-1/3`}
      />
    </>
  )
}
