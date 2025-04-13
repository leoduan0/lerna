'use client'

import { HeroUIProvider } from '@heroui/react'
import { ThemeProvider } from 'next-themes'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <HeroUIProvider className="space-y-2">{children}</HeroUIProvider>
    </ThemeProvider>
  )
}
