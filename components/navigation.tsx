"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingCart, Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Explore", href: "/explore" },
    { name: "Blogs", href: "/blogs" },
    { name: "Profile", href: "/profile" },
  ]

  return (
    <nav className="nav-glass sticky top-0 z-50 mx-4 mt-4 rounded-2xl">
      <div className="flex items-center justify-between p-4 md:p-6">
        {/* Logo */}
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center overflow-hidden">
            {!logoError ? (
              <Image
                src="/kalakrit-logo.png"
                alt="Kalakrit Logo"
                width={48}
                height={48}
                className="w-full h-full object-cover"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs md:text-sm">dk</span>
              </div>
            )}
          </div>
          <h1 className="text-white text-lg md:text-2xl font-bold font-serif">Kalakrit</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`px-4 lg:px-6 py-2 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm lg:text-base ${
                pathname === item.href
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg"
                  : "hover:bg-white/10 backdrop-blur-sm"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/cart"
            className="p-2 rounded-full text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105"
          >
            <ShoppingCart className="w-5 h-5 lg:w-6 lg:h-6" />
          </Link>
        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex md:hidden items-center gap-3">
          <Link
            href="/cart"
            className="p-2 rounded-full text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 active:scale-95"
          >
            <ShoppingCart className="w-5 h-5" />
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-full text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 active:scale-95"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/20 bg-black/20 backdrop-blur-md rounded-b-2xl">
          <div className="flex flex-col p-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-white font-medium transition-all duration-300 active:scale-95 ${
                  pathname === item.href
                    ? "bg-gradient-to-r from-pink-500 to-purple-600"
                    : "hover:bg-white/10 active:bg-white/20"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
