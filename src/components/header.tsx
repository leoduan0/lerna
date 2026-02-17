import { HeaderButton } from "./header-button"
import { Path } from "./path"
import { ShareButton } from "./share-button"
import { ThemeToggleButton } from "./theme-toggle-button"

export function Header() {
  return (
    <header className="flex h-12 w-full items-center justify-between space-x-2 border-border border-b bg-background/70 p-2 backdrop-blur-lg">
      <HeaderButton />
      <Path />
      <div className="flex gap-2">
        <ThemeToggleButton />
        <ShareButton />
      </div>
    </header>
  )
}
