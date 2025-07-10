import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { StarsBackground } from "@/components/stars-background"
import { AccessibilityProvider, SkipLink } from "@/components/ui/accessibility-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Inclusive - Recruiting Software that Generates Revenue",
  description:
    "Move hiring from cost centre to profit centre with Inclusive, the backed recruiting software that actually generates revenue.",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ]
  },
  manifest: '/site.webmanifest',
  themeColor: '#d946ef',
  colorScheme: 'dark',
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
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <meta name="theme-color" content="#d946ef" />
        <meta name="msapplication-TileColor" content="#d946ef" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <AccessibilityProvider>
            <StarsBackground />
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
