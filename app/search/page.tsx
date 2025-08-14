import { Search, Filter } from "lucide-react"

export default function SearchPage() {
  const searchResults = [
    {
      id: 1,
      title: "Madhubani Fish Painting",
      artist: "Sita Devi",
      price: "₹2,500",
      category: "Traditional Art",
      image: "/madhubani-fish.png",
    },
    {
      id: 2,
      title: "Warli Village Scene",
      artist: "Ramesh Hengadi",
      price: "₹3,200",
      category: "Folk Art",
      image: "/warli-village.png",
    },
    {
      id: 3,
      title: "Tanjore Ganesha",
      artist: "Lakshmi Narayanan",
      price: "₹5,800",
      category: "Temple Art",
      image: "/tanjore-ganesha.png",
    },
    {
      id: 4,
      title: "Kalamkari Peacock",
      artist: "Niranjan Reddy",
      price: "₹4,100",
      category: "Textile Art",
      image: "/kalamkari-peacock.png",
    },
  ]

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-6 font-serif">Search & Discover</h1>

        {/* Search Bar */}
        <div className="flex gap-4 mb-6">
          <div className="flex-1 glass-card p-4">
            <div className="flex items-center gap-4">
              <Search className="w-6 h-6 text-white/60" />
              <input
                type="text"
                placeholder="Search for art, artists, or categories..."
                className="flex-1 bg-transparent text-white placeholder-white/60 outline-none text-lg"
              />
            </div>
          </div>
          <button className="glass-card p-4 btn-hover">
            <Filter className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-3">
          {["All", "Paintings", "Sculptures", "Textiles", "Handicrafts", "Modern Art"].map((filter) => (
            <button key={filter} className="px-4 py-2 glass-card text-white font-medium btn-hover">
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Search Results */}
      <div className="mb-6">
        <p className="text-white/80 text-lg">Found {searchResults.length} results</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {searchResults.map((item) => (
          <div key={item.id} className="glass-card p-4 cursor-pointer group">
            <div className="aspect-square bg-white/10 rounded-2xl mb-4 overflow-hidden">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="space-y-2">
              <span className="inline-block px-2 py-1 bg-gradient-to-r from-pink-500/20 to-purple-600/20 text-pink-300 text-xs font-medium rounded-full border border-pink-500/30">
                {item.category}
              </span>

              <h3 className="text-white font-bold group-hover:text-pink-300 transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-white/70 text-sm">by {item.artist}</p>

              <div className="flex items-center justify-between pt-2">
                <span className="text-white font-bold text-lg">{item.price}</span>
                <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-medium rounded-full btn-hover">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
