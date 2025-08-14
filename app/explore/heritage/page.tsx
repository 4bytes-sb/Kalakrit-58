import { ArrowLeft, Heart, Share2, Eye, MapPin, Clock, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HeritagePage() {
  const heritageSites = [
    {
      id: 1,
      title: "Taj Mahal",
      location: "Agra, Uttar Pradesh",
      year: "1653 CE",
      type: "UNESCO World Heritage Site",
      image: "/art-4.png",
      likes: 1250,
      views: 5600,
      description: "Iconic ivory-white marble mausoleum, symbol of eternal love",
      rating: 4.9,
      category: "Mausoleum",
    },
    {
      id: 2,
      title: "Red Fort",
      location: "Delhi",
      year: "1648 CE",
      type: "UNESCO World Heritage Site",
      image: "/tanjore-ganesha.png",
      likes: 890,
      views: 3200,
      description: "Magnificent Mughal fortress with red sandstone walls",
      rating: 4.7,
      category: "Fort",
    },
    {
      id: 3,
      title: "Ajanta Caves",
      location: "Maharashtra",
      year: "2nd Century BCE",
      type: "UNESCO World Heritage Site",
      image: "/madhubani-fish.png",
      likes: 567,
      views: 2100,
      description: "Ancient Buddhist cave monuments with exquisite paintings",
      rating: 4.8,
      category: "Caves",
    },
    {
      id: 4,
      title: "Hampi Ruins",
      location: "Karnataka",
      year: "14th Century CE",
      type: "UNESCO World Heritage Site",
      image: "/warli-village.png",
      likes: 723,
      views: 2800,
      description: "Ruins of the magnificent Vijayanagara Empire capital",
      rating: 4.6,
      category: "Archaeological Site",
    },
    {
      id: 5,
      title: "Khajuraho Temples",
      location: "Madhya Pradesh",
      year: "950-1050 CE",
      type: "UNESCO World Heritage Site",
      image: "/art-1.png",
      likes: 634,
      views: 2400,
      description: "Stunning temples known for intricate sculptures and architecture",
      rating: 4.5,
      category: "Temple Complex",
    },
    {
      id: 6,
      title: "Konark Sun Temple",
      location: "Odisha",
      year: "1250 CE",
      type: "UNESCO World Heritage Site",
      image: "/art-2.png",
      likes: 445,
      views: 1900,
      description: "Magnificent temple designed as a colossal chariot of the Sun God",
      rating: 4.7,
      category: "Temple",
    },
  ]

  return (
    <div className="container mx-auto px-4 md:px-6 py-6 md:py-8">
      {/* Header with Back Button */}
      <div className="flex items-center gap-4 mb-6 md:mb-8">
        <Link href="/explore" className="glass-card p-3 btn-hover">
          <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </Link>
        <div>
          <h1 className="text-white text-2xl md:text-3xl font-bold">Heritage Sites</h1>
          <p className="text-white/80 text-sm md:text-base">
            Explore India's magnificent historical monuments and UNESCO sites
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 md:mb-8">
        <div className="glass-card p-4 text-center">
          <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-1">40</div>
          <div className="text-white/70 text-sm">UNESCO Sites</div>
        </div>
        <div className="glass-card p-4 text-center">
          <div className="text-2xl md:text-3xl font-bold text-pink-400 mb-1">3000+</div>
          <div className="text-white/70 text-sm">Monuments</div>
        </div>
        <div className="glass-card p-4 text-center">
          <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">5000</div>
          <div className="text-white/70 text-sm">Years History</div>
        </div>
        <div className="glass-card p-4 text-center">
          <div className="text-2xl md:text-3xl font-bold text-green-400 mb-1">28</div>
          <div className="text-white/70 text-sm">States</div>
        </div>
      </div>

      {/* Filter Tags */}
      <div className="flex gap-3 mb-6 md:mb-8 overflow-x-auto pb-2">
        {["All", "UNESCO Sites", "Temples", "Forts", "Palaces", "Caves", "Archaeological"].map((tag) => (
          <button
            key={tag}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              tag === "All"
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                : "glass-card text-white/80 hover:text-white btn-hover"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Heritage Sites Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {heritageSites.map((site) => (
          <div key={site.id} className="glass-card overflow-hidden btn-hover group">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={site.image || "/placeholder.svg"}
                alt={site.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="p-2 bg-black/50 rounded-full backdrop-blur-sm btn-hover">
                  <Heart className="w-4 h-4 text-white" />
                </button>
                <button className="p-2 bg-black/50 rounded-full backdrop-blur-sm btn-hover">
                  <Share2 className="w-4 h-4 text-white" />
                </button>
              </div>
              <div className="absolute top-4 left-4">
                <span className="px-2 py-1 bg-green-500/80 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                  {site.category}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
                <Star className="w-3 h-3 text-yellow-400 fill-current" />
                <span className="text-white text-xs font-medium">{site.rating}</span>
              </div>
            </div>

            <div className="p-4 md:p-6">
              <h3 className="text-white text-lg md:text-xl font-semibold mb-2">{site.title}</h3>

              <div className="flex items-center gap-1 mb-2 text-sm text-purple-300">
                <MapPin className="w-4 h-4" />
                <span>{site.location}</span>
              </div>

              <div className="flex items-center gap-1 mb-3 text-sm text-white/70">
                <Clock className="w-4 h-4" />
                <span>{site.year}</span>
              </div>

              <div className="mb-3">
                <span className="inline-block px-2 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 text-xs font-medium">
                  {site.type}
                </span>
              </div>

              <p className="text-white/70 text-sm mb-4 line-clamp-2">{site.description}</p>

              <div className="flex items-center justify-between text-white/60 text-sm">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    <span>{site.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{site.views}</span>
                  </div>
                </div>
                <button className="text-purple-400 hover:text-purple-300 transition-colors font-medium">
                  Explore Site
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-8 md:mt-12">
        <button className="glass-card px-8 py-3 text-white font-medium btn-hover">Discover More Heritage Sites</button>
      </div>
    </div>
  )
}
