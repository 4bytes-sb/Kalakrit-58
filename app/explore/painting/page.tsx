import { ArrowLeft, Heart, Share2, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PaintingPage() {
  const paintings = [
    {
      id: 1,
      title: "Madhubani Folk Art",
      artist: "Traditional Bihar Style",
      image: "/art-1.png",
      likes: 234,
      views: 1200,
      description: "Traditional Madhubani painting featuring intricate patterns and vibrant colors",
    },
    {
      id: 2,
      title: "Warli Tribal Art",
      artist: "Maharashtra Heritage",
      image: "/art-2.png",
      likes: 189,
      views: 890,
      description: "Ancient Warli art depicting daily life and nature in geometric forms",
    },
    {
      id: 3,
      title: "Tanjore Painting",
      artist: "Tamil Nadu Classic",
      image: "/art-3.png",
      likes: 312,
      views: 1500,
      description: "Rich Tanjore painting with gold foil work and precious stones",
    },
    {
      id: 4,
      title: "Kalamkari Art",
      artist: "Andhra Pradesh Style",
      image: "/art-4.png",
      likes: 267,
      views: 1100,
      description: "Hand-painted Kalamkari featuring mythological stories and natural dyes",
    },
    {
      id: 5,
      title: "Pattachitra Scroll",
      artist: "Odisha Traditional",
      image: "/madhubani-fish.png",
      likes: 198,
      views: 750,
      description: "Traditional Pattachitra scroll painting with religious themes",
    },
    {
      id: 6,
      title: "Miniature Painting",
      artist: "Rajasthani School",
      image: "/warli-village.png",
      likes: 345,
      views: 1800,
      description: "Exquisite miniature painting showcasing royal court scenes",
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
          <h1 className="text-white text-2xl md:text-3xl font-bold">Paintings</h1>
          <p className="text-white/80 text-sm md:text-base">Explore traditional Indian painting styles</p>
        </div>
      </div>

      {/* Filter Tags */}
      <div className="flex gap-3 mb-6 md:mb-8 overflow-x-auto pb-2">
        {["All", "Madhubani", "Warli", "Tanjore", "Kalamkari", "Pattachitra", "Miniature"].map((tag) => (
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

      {/* Paintings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {paintings.map((painting) => (
          <div key={painting.id} className="glass-card overflow-hidden btn-hover group">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={painting.image || "/placeholder.svg"}
                alt={painting.title}
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
            </div>

            <div className="p-4 md:p-6">
              <h3 className="text-white text-lg md:text-xl font-semibold mb-2">{painting.title}</h3>
              <p className="text-purple-300 text-sm md:text-base mb-3">{painting.artist}</p>
              <p className="text-white/70 text-sm mb-4 line-clamp-2">{painting.description}</p>

              <div className="flex items-center justify-between text-white/60 text-sm">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    <span>{painting.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{painting.views}</span>
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
        <button className="glass-card px-8 py-3 text-white font-medium btn-hover">Load More Paintings</button>
      </div>
    </div>
  )
}
