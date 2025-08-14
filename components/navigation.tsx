"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingCart, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Explore", href: "/explore" },
    { name: "Blogs", href: "/blogs" },
    { name: "Profile", href: "/profile" },
  ]

  return (
    <nav className="flex items-center justify-between p-4 md:p-6 relative z-50">
      {/* Logo */}
      <div className="flex items-center gap-2 md:gap-3">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center overflow-hidden">
          <img src="/placeholder-872pf.png" alt="DK Logo" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-white text-xl md:text-2xl font-bold font-serif">Kalakrit</h1>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`px-6 py-2 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg ${
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
          <ShoppingCart className="w-6 h-6" />
        </Link>
      </div>

      <div className="flex md:hidden items-center gap-4">
        <Link
          href="/cart"
          className="p-2 rounded-full text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
        >
          <ShoppingCart className="w-5 h-5" />
        </Link>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-full text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/80 backdrop-blur-md border-t border-white/20 md:hidden">
          <div className="flex flex-col p-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-white font-medium transition-all duration-300 ${
                  pathname === item.href ? "bg-gradient-to-r from-pink-500 to-purple-600" : "hover:bg-white/10"
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
