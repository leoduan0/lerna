import './globals.css'
import { Providers } from './providers'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import pages from '@/data/pages'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'

const nunito = Nunito({
  subsets: ['latin'],
})

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
    <html className={nunito.className} lang="en">
      <body className="fixed flex h-full w-full bg-BACKGROUND-light dark:bg-BACKGROUND-dark">
        {/* "fixed" makes the iOS Safari toolbar persistent */}
        <NextTopLoader />
        <Navigation pages={pages} />
        <div className="flex h-full w-full flex-col">
          <Header />
          <main className="overflow-y-auto p-4 lg:px-48">
            <Providers>
              {/* Page horizontal overflow not reachable (see matrix determinant page) */}
              {children}
            </Providers>
          </main>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
