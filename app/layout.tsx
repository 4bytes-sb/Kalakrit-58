import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

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
    <html lang="en" className={`${inter.variable} ${playfair.variable} antialiased dark`}>
      <body className="min-h-screen overflow-x-hidden">
        <div className="fixed inset-0 z-0">
          {/* Primary dark gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-black"></div>

          {/* Secondary gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-800/30 via-transparent to-teal-800/20"></div>

          {/* Floating 3D elements */}
          <div className="floating-element absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-xl"></div>
          <div
            className="floating-element absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-teal-600/20 to-blue-600/20 rounded-full blur-lg"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="floating-element absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-indigo-600/15 to-purple-600/15 rounded-full blur-2xl"
            style={{ animationDelay: "4s" }}
          ></div>
          <div
            className="floating-element absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-br from-pink-600/20 to-orange-600/20 rounded-full blur-xl"
            style={{ animationDelay: "1s" }}
          ></div>

          {/* Geometric shapes for 3D depth */}
          <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-white/10 rotate-45 animate-pulse"></div>
          <div
            className="absolute top-3/4 left-1/4 w-1 h-1 bg-white/20 rotate-12 animate-pulse"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-white/15 rotate-45 animate-pulse"
            style={{ animationDelay: "3s" }}
          ></div>
        </div>

        <div className="relative z-10 min-h-screen">
          <Navigation />
          <main className="relative z-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
