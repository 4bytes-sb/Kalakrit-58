import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Kalakrit - India's Heritage in Motion",
  description: "Where Indian Art finds Voice",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} antialiased`}>
      <body className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-teal-600">
        <div className="min-h-screen backdrop-blur-sm">
          <Navigation />
          <main className="relative z-10">{children}</main>
        </div>
      </body>
    </html>
  )
}
