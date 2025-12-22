import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeBackground } from "@/components/theme-background"
import { AccessibilityProvider, SkipLink } from "@/components/ui/accessibility-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Inclusive - Recruiting Software that Generates Revenue",
  description:
    "Move hiring from cost centre to profit centre with Inclusive, the backed recruiting software that actually generates revenue.",
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <AccessibilityProvider>
            <ThemeBackground />
            <SkipLink href="#main-content">Skip to main content</SkipLink>
            <main id="main-content" className="min-h-screen flex flex-col">
              {children}
            </main>
          </AccessibilityProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}






