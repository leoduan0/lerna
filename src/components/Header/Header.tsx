import Account from './Account'
import HeaderButton from './HeaderButton'
import Path from './Path'
import ShareButton from './ShareButton'

export default function Header(): React.ReactNode {
  return (
    <header className="flex h-12 w-full items-center justify-between space-x-2 border-b border-neutral-300 bg-neutral-100 p-2 dark:border-neutral-700 dark:bg-neutral-950">
      <HeaderButton />
      <Path />
      <div className="flex space-x-2">
        <ShareButton />
        <Account />
      </div>
    </header>
  )
}
