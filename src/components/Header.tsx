import HeaderButton from "./HeaderButton"
import Path from "./Path"
import ShareButton from "./ShareButton"

function Header() {
  return (
    <header className="flex h-12 w-full items-center justify-between space-x-2 border-layout-border border-b p-2 dark:bg-layout">
      <HeaderButton />
      <Path />
      <ShareButton />
    </header>
  )
}

export default Header
