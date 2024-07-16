import type { Metadata } from 'next'
import { Header, Navigation } from '@/components'
import pages from '@/data/pages'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lerna',
  description: 'A learning platform.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="fixed flex h-full w-full bg-white dark:bg-black">
        {/* "fixed" makes the iOS Safari toolbar persistent */}
        <Navigation pages={pages} />
        <div className="flex h-full w-full flex-col">
          <Header />
          <main className="space-y-2 overflow-y-auto p-4 lg:px-48">
            {/* Page horizontal overflow not reachable (see matrix determinant page) */}
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
