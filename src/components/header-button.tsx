"use client"

import { Menu } from "lucide-react"
import { useNavigationContext } from "@/components/navigation-provider"
import { Button } from "@/components/ui/button"

export function HeaderButton() {
  const { setNavigationStatus } = useNavigationContext()

  return (
    <Button
      onClick={() => setNavigationStatus((current) => !current)}
      className="hover:bg-accent lg:invisible"
      size="icon"
      type="button"
      variant="outline"
    >
      <Menu />
    </Button>
  )
}
