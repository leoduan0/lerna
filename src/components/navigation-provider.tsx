"use client"

import type { Dispatch, SetStateAction } from "react"
import { createContext, useContext, useState } from "react"

export const NavigationContext = createContext<{
  navigationStatus: boolean
  setNavigationStatus: Dispatch<SetStateAction<boolean>>
} | null>(null)

export function NavigationProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [navigationStatus, setNavigationStatus] = useState(true)

  return (
    <NavigationContext.Provider
      value={{ navigationStatus, setNavigationStatus }}
    >
      {children}
    </NavigationContext.Provider>
  )
}

export function useNavigationContext() {
  const context = useContext(NavigationContext)

  if (!context) {
    throw new Error(
      "useNavigationContext must be used within NavigationProvider",
    )
  }

  return context
}
