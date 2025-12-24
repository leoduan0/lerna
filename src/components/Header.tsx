import HeaderButton from "./HeaderButton"
import Path from "./Path"
import ShareButton from "./ShareButton"

function Header() {
  return (
    <header className="flex h-12 w-full items-center justify-between space-x-2 border-b border-LAYOUT_BORDER-light bg-LAYOUT-light p-2 dark:border-LAYOUT_BORDER-dark dark:bg-LAYOUT-dark">
      <HeaderButton />
      <Path />
      <ShareButton />
    </header>
  )
}

export default Header
