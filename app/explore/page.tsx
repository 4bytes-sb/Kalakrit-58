import { Search } from "lucide-react"
import Link from "next/link"

export default function ExplorePage() {
  const categories = [
    { name: "Painting", href: "/explore/painting" },
    { name: "Artifacts", href: "/explore/artifacts" },
    { name: "Heritage", href: "/explore/heritage" },
    { name: "Festivals", href: "/explore/festivals" },
    { name: "Handicrafts", href: "/explore/handicrafts" },
  ]

  return (
    <div className="container mx-auto px-4 md:px-6 py-6 md:py-8">
      {/* User Profile Section */}
      <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
          <span className="text-white font-semibold text-sm md:text-lg">user</span>
        </div>
        <span className="text-white text-base md:text-lg font-medium">user name</span>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6 md:mb-8">
        <div className="glass-card p-3 md:p-4">
          <div className="flex items-center gap-3 md:gap-4">
            <Search className="w-5 h-5 md:w-6 md:h-6 text-white/60" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 bg-transparent text-white placeholder-white/60 outline-none text-base md:text-lg"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
        {/* Sidebar Categories */}
        <div className="w-full lg:w-80">
          {/* Mobile: Horizontal scroll, Desktop: Vertical stack */}
          <div className="flex lg:flex-col gap-3 md:gap-4 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="flex-shrink-0 lg:w-full glass-card p-4 md:p-6 text-left text-white text-lg md:text-xl font-semibold btn-hover whitespace-nowrap lg:whitespace-normal block"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1">
          <div className="glass-card p-6 md:p-8 h-64 md:h-96 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-white text-xl md:text-2xl font-semibold mb-3 md:mb-4">Discover Indian Heritage</h3>
              <p className="text-white/80 text-base md:text-lg">
                Select a category to explore our curated collection of Indian art and culture
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
