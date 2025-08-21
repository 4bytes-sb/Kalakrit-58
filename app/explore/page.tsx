import { Search } from "lucide-react"
import Image from "next/image"
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
                className="flex-shrink-0 lg:w-full glass-card p-4 md:p-6 text-left text-white text-lg md:text-xl font-semibold whitespace-nowrap lg:whitespace-normal cursor-pointer hover:scale-105 hover:bg-white/10 transition-all duration-300"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1">
          <div className="glass-card overflow-hidden">
            {/* Heritage Image Section */}
            <div className="relative h-64 md:h-80">
              <Image src="/taj-mahal-sunset.png" alt="Indian Heritage - Taj Mahal" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="text-white text-2xl md:text-3xl font-playfair font-bold mb-2 md:mb-3">
                  Discover Indian Heritage
                </h3>
                <p className="text-white/90 text-base md:text-lg leading-relaxed">
                  Explore thousands of years of rich cultural heritage, from ancient temples to magnificent palaces
                </p>
              </div>
            </div>

            {/* Additional Info Section */}
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-1">5000+</div>
                  <div className="text-white/80 text-sm md:text-base">Artifacts</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-teal-400 mb-1">40+</div>
                  <div className="text-white/80 text-sm md:text-base">Heritage Sites</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-pink-400 mb-1">100+</div>
                  <div className="text-white/80 text-sm md:text-base">Art Forms</div>
                </div>
              </div>

              <div className="mt-6 md:mt-8 text-center">
                <p className="text-white/70 text-sm md:text-base">
                  Explore each category to discover detailed collections of Indian art, heritage, and cultural
                  treasures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
