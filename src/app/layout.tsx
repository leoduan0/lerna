import "./globals.css"
import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import NextTopLoader from "nextjs-toploader"
import Header from "@/components/Header"
import Navigation from "@/components/Navigation"
import { APP_DESCRIPTION, APP_NAME } from "@/lib/constants"
import pages from "@/lib/pages"
import { Providers } from "./providers"

const nunito = Nunito({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
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
        <NextTopLoader color="" showSpinner={false} />
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
      </body>
    </html>
  )
}
