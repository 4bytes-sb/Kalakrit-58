import { ArrowLeft, Heart, Share2, Eye, Calendar, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ArtifactsPage() {
  const artifacts = [
    {
      id: 1,
      title: "Bronze Nataraja Sculpture",
      period: "Chola Dynasty (10th Century)",
      location: "Tamil Nadu",
      image: "/tanjore-ganesha.png",
      likes: 456,
      views: 2100,
      description: "Exquisite bronze sculpture of Lord Shiva in cosmic dance form",
      category: "Sculpture",
    },
    {
      id: 2,
      title: "Terracotta Horse",
      period: "Gupta Period (5th Century)",
      location: "Uttar Pradesh",
      image: "/madhubani-fish.png",
      likes: 298,
      views: 1400,
      description: "Beautifully crafted terracotta horse with intricate detailing",
      category: "Pottery",
    },
    {
      id: 3,
      title: "Mughal Jade Dagger",
      period: "Mughal Era (17th Century)",
      location: "Delhi",
      image: "/warli-village.png",
      likes: 367,
      views: 1800,
      description: "Ornate jade-handled dagger with gold inlay work",
      category: "Weapons",
    },
    {
      id: 4,
      title: "Kundan Jewelry Set",
      period: "Rajput Period (16th Century)",
      location: "Rajasthan",
      image: "/art-1.png",
      likes: 523,
      views: 2500,
      description: "Traditional Kundan jewelry with precious stones and gold",
      category: "Jewelry",
    },
    {
      id: 5,
      title: "Bidriware Hookah Base",
      period: "Deccan Sultanate (15th Century)",
      location: "Karnataka",
      image: "/art-2.png",
      likes: 189,
      views: 950,
      description: "Black metal hookah base with silver inlay patterns",
      category: "Metalwork",
    },
    {
      id: 6,
      title: "Wooden Temple Chariot",
      period: "Vijayanagara Empire (14th Century)",
      location: "Karnataka",
      image: "/art-3.png",
      likes: 412,
      views: 1900,
      description: "Intricately carved wooden temple chariot with divine motifs",
      category: "Woodwork",
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
          <h1 className="text-white text-2xl md:text-3xl font-bold">Artifacts</h1>
          <p className="text-white/80 text-sm md:text-base">Discover ancient Indian treasures and historical objects</p>
        </div>
      </div>

      {/* Filter Tags */}
      <div className="flex gap-3 mb-6 md:mb-8 overflow-x-auto pb-2">
        {["All", "Sculpture", "Pottery", "Jewelry", "Weapons", "Metalwork", "Woodwork"].map((tag) => (
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

      {/* Artifacts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {artifacts.map((artifact) => (
          <div key={artifact.id} className="glass-card overflow-hidden btn-hover group">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={artifact.image || "/placeholder.svg"}
                alt={artifact.title}
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
                <span className="px-2 py-1 bg-purple-500/80 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                  {artifact.category}
                </span>
              </div>
            </div>

            <div className="p-4 md:p-6">
              <h3 className="text-white text-lg md:text-xl font-semibold mb-2">{artifact.title}</h3>

              <div className="flex items-center gap-4 mb-3 text-sm text-white/70">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{artifact.period}</span>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-3 text-sm text-purple-300">
                <MapPin className="w-4 h-4" />
                <span>{artifact.location}</span>
              </div>

              <p className="text-white/70 text-sm mb-4 line-clamp-2">{artifact.description}</p>

              <div className="flex items-center justify-between text-white/60 text-sm">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    <span>{artifact.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{artifact.views}</span>
                  </div>
                </div>
                <button className="text-purple-400 hover:text-purple-300 transition-colors font-medium">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-8 md:mt-12">
        <button className="glass-card px-8 py-3 text-white font-medium btn-hover">Load More Artifacts</button>
      </div>
    </div>
  )
}
