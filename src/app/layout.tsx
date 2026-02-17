import "./globals.css"
import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import NextTopLoader from "nextjs-toploader"
import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { NavigationProvider } from "@/components/navigation-provider"
import { APP_DESCRIPTION, APP_NAME } from "@/lib/constants"
import { pages } from "@/lib/pages"
import { ThemeProvider } from "../components/theme-provider"

const nunito = Nunito({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
  keywords: ["mathematics", "physics", "notes"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={nunito.className} lang="en" suppressHydrationWarning>
      <body className="fixed flex h-screen w-screen bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* "fixed" makes the iOS Safari toolbar persistent */}
          <NextTopLoader color="" showSpinner={false} />
          <NavigationProvider>
            <Navigation pages={pages} />
            <div className="h-full w-full overflow-auto">
              <Header />
              <main className="p-4 lg:px-48 flex flex-col gap-2">
                {/* Page horizontal overflow not reachable (see matrix determinant page) */}
                {children}
              </main>
            </div>
          </NavigationProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
