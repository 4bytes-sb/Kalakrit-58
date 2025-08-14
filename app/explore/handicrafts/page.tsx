import { ArrowLeft, Heart, Share2, Eye, MapPin, Award, Scissors, ShoppingBag } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HandicraftsPage() {
  const handicrafts = [
    {
      id: 1,
      title: "Pashmina Shawls",
      origin: "Kashmir",
      artisan: "Kashmiri Weavers",
      image: "/art-4.png",
      likes: 1450,
      views: 5200,
      description: "Luxurious hand-woven shawls made from finest Pashmina wool",
      price: "₹15,000 - ₹50,000",
      category: "Textiles",
      technique: "Hand Weaving",
      giTag: true,
    },
    {
      id: 2,
      title: "Blue Pottery",
      origin: "Jaipur, Rajasthan",
      artisan: "Rajasthani Potters",
      image: "/tanjore-ganesha.png",
      likes: 890,
      views: 3400,
      description: "Distinctive blue and white pottery with Persian influence",
      price: "₹500 - ₹5,000",
      category: "Pottery",
      technique: "Hand Painting",
      giTag: true,
    },
    {
      id: 3,
      title: "Channapatna Toys",
      origin: "Karnataka",
      artisan: "Traditional Toy Makers",
      image: "/madhubani-fish.png",
      likes: 670,
      views: 2800,
      description: "Colorful wooden toys made using traditional lacquer work",
      price: "₹100 - ₹2,000",
      category: "Woodwork",
      technique: "Lacquer Work",
      giTag: true,
    },
    {
      id: 4,
      title: "Kanchipuram Silk",
      origin: "Tamil Nadu",
      artisan: "Silk Weavers",
      image: "/warli-village.png",
      likes: 1200,
      views: 4600,
      description: "Premium silk sarees with intricate gold thread work",
      price: "₹8,000 - ₹1,00,000",
      category: "Textiles",
      technique: "Silk Weaving",
      giTag: true,
    },
    {
      id: 5,
      title: "Dhokra Metal Craft",
      origin: "West Bengal",
      artisan: "Tribal Artisans",
      image: "/art-1.png",
      likes: 540,
      views: 2200,
      description: "Ancient lost-wax casting technique creating bronze figurines",
      price: "₹800 - ₹8,000",
      category: "Metalwork",
      technique: "Lost Wax Casting",
      giTag: true,
    },
    {
      id: 6,
      title: "Chikankari Embroidery",
      origin: "Lucknow, Uttar Pradesh",
      artisan: "Chikan Artisans",
      image: "/art-2.png",
      likes: 980,
      views: 3800,
      description: "Delicate white thread embroidery on fine cotton fabric",
      price: "₹1,500 - ₹15,000",
      category: "Embroidery",
      technique: "Hand Embroidery",
      giTag: true,
    },
  ]

  const craftCategories = [
    { name: "Textiles", count: 245, icon: "🧵" },
    { name: "Pottery", count: 189, icon: "🏺" },
    { name: "Metalwork", count: 156, icon: "⚒️" },
    { name: "Woodwork", count: 134, icon: "🪵" },
    { name: "Jewelry", count: 198, icon: "💎" },
    { name: "Embroidery", count: 167, icon: "🪡" },
  ]

  return (
    <div className="container mx-auto px-4 md:px-6 py-6 md:py-8">
      {/* Header with Back Button */}
      <div className="flex items-center gap-4 mb-6 md:mb-8">
        <Link href="/explore" className="glass-card p-3 btn-hover">
          <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </Link>
        <div>
          <h1 className="text-white text-2xl md:text-3xl font-bold">Handicrafts</h1>
          <p className="text-white/80 text-sm md:text-base">
            Discover India's rich tradition of handmade artisanal crafts
          </p>
        </div>
      </div>

      {/* Craft Categories Overview */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6 md:mb-8">
        {craftCategories.map((category, index) => (
          <div key={index} className="glass-card p-4 text-center btn-hover">
            <div className="text-2xl mb-2">{category.icon}</div>
            <div className="text-white font-semibold text-sm md:text-base">{category.name}</div>
            <div className="text-white/60 text-xs">{category.count} items</div>
          </div>
        ))}
      </div>

      {/* GI Tag Info Banner */}
      <div className="glass-card p-4 md:p-6 mb-6 md:mb-8 border border-yellow-500/30">
        <div className="flex items-center gap-3">
          <Award className="w-6 h-6 text-yellow-400" />
          <div>
            <h3 className="text-white font-semibold">Geographical Indication (GI) Tagged Products</h3>
            <p className="text-white/70 text-sm">
              Authentic handicrafts with protected geographical origin and traditional methods
            </p>
          </div>
        </div>
      </div>

      {/* Filter Tags */}
      <div className="flex gap-3 mb-6 md:mb-8 overflow-x-auto pb-2">
        {["All", "GI Tagged", "Textiles", "Pottery", "Metalwork", "Woodwork", "Jewelry", "Embroidery"].map((tag) => (
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

      {/* Handicrafts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {handicrafts.map((craft) => (
          <div key={craft.id} className="glass-card overflow-hidden btn-hover group">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={craft.image || "/placeholder.svg"}
                alt={craft.title}
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
                <button className="p-2 bg-black/50 rounded-full backdrop-blur-sm btn-hover">
                  <ShoppingBag className="w-4 h-4 text-white" />
                </button>
              </div>
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-2 py-1 bg-blue-500/80 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                  {craft.category}
                </span>
                {craft.giTag && (
                  <span className="px-2 py-1 bg-yellow-500/80 backdrop-blur-sm rounded-full text-white text-xs font-medium flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    GI
                  </span>
                )}
              </div>
            </div>

            <div className="p-4 md:p-6">
              <h3 className="text-white text-lg md:text-xl font-semibold mb-2">{craft.title}</h3>

              <div className="flex items-center gap-1 mb-2 text-sm text-purple-300">
                <MapPin className="w-4 h-4" />
                <span>{craft.origin}</span>
              </div>

              <div className="flex items-center gap-1 mb-3 text-sm text-white/70">
                <Scissors className="w-4 h-4" />
                <span>{craft.technique}</span>
              </div>

              <p className="text-white/70 text-sm mb-3 line-clamp-2">{craft.description}</p>

              <div className="mb-4">
                <div className="text-green-400 font-semibold text-sm">{craft.price}</div>
                <div className="text-white/60 text-xs">by {craft.artisan}</div>
              </div>

              <div className="flex items-center justify-between text-white/60 text-sm">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    <span>{craft.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{craft.views}</span>
                  </div>
                </div>
                <button className="text-purple-400 hover:text-purple-300 transition-colors font-medium">
                  View Craft
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Artisan Support CTA */}
      <div className="glass-card p-6 md:p-8 mt-8 md:mt-12 text-center">
        <h3 className="text-white text-xl md:text-2xl font-semibold mb-4">Support Local Artisans</h3>
        <p className="text-white/80 mb-6">
          Every purchase directly supports traditional craftspeople and helps preserve India's rich handicraft heritage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-medium btn-hover">
            Shop Handicrafts
          </button>
          <button className="glass-card px-8 py-3 text-white font-medium btn-hover">Meet the Artisans</button>
        </div>
      </div>
    </div>
  )
}
