"use client"

export default function HandicraftsPage() {
  const handicrafts = [
    {
      id: 1,
      title: "Pashmina Shawls",
      origin: "Kashmir",
      craft: "Textile Weaving",
      artisan: "Kashmiri Weavers",
      description: "Luxurious shawls made from fine cashmere wool with intricate embroidery",
      image: "/pashmina-shawl.png",
      price: "₹15,000 - ₹50,000",
      giTag: "Yes",
    },
    {
      id: 2,
      title: "Blue Pottery",
      origin: "Jaipur, Rajasthan",
      craft: "Ceramic Art",
      artisan: "Rajasthani Potters",
      description: "Distinctive glazed pottery with cobalt blue dye and floral patterns",
      image: "/blue-pottery.png",
      price: "₹500 - ₹5,000",
      giTag: "Yes",
    },
    {
      id: 3,
      title: "Madhubani Paintings",
      origin: "Bihar",
      craft: "Folk Art",
      artisan: "Mithila Artists",
      description: "Traditional paintings with natural pigments depicting mythology and nature",
      image: "/madhubani-art.png",
      price: "₹2,000 - ₹25,000",
      giTag: "Yes",
    },
    {
      id: 4,
      title: "Bidriware",
      origin: "Karnataka",
      craft: "Metal Inlay",
      artisan: "Bidar Craftsmen",
      description: "Metal handicraft with silver and gold inlay work on blackened alloy",
      image: "/bidriware.png",
      price: "₹3,000 - ₹20,000",
      giTag: "Yes",
    },
    {
      id: 5,
      title: "Kanchipuram Silk",
      origin: "Tamil Nadu",
      craft: "Silk Weaving",
      artisan: "Tamil Weavers",
      description: "Premium silk sarees with gold thread work and traditional motifs",
      image: "/kanchipuram-silk.png",
      price: "₹8,000 - ₹1,00,000",
      giTag: "Yes",
    },
    {
      id: 6,
      title: "Channapatna Toys",
      origin: "Karnataka",
      craft: "Wood Carving",
      artisan: "Channapatna Artisans",
      description: "Colorful wooden toys made from ivory wood with natural lacquer",
      image: "/channapatna-toys.png",
      price: "₹200 - ₹2,000",
      giTag: "Yes",
    },
  ]

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Indian Handicrafts</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the exquisite artistry of Indian handicrafts, where generations of skilled artisans have preserved
            traditional techniques and cultural heritage through their masterful creations.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">200+</div>
            <div className="text-gray-300">Craft Forms</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">7M+</div>
            <div className="text-gray-300">Artisans</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-teal-400 mb-2">370+</div>
            <div className="text-gray-300">GI Tags</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">₹26K Cr</div>
            <div className="text-gray-300">Export Value</div>
          </div>
        </div>

        {/* Handicrafts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {handicrafts.map((craft) => (
            <div key={craft.id} className="glass-card group hover:scale-105 transition-all duration-300">
              <div className="aspect-square bg-gradient-to-br from-amber-900/20 via-orange-900/20 to-red-900/20 rounded-t-2xl mb-4 flex items-center justify-center">
                <div className="text-6xl opacity-50">🎨</div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{craft.title}</h3>
                  {craft.giTag === "Yes" && (
                    <span className="text-xs px-2 py-1 bg-green-900/30 text-green-300 rounded-full">GI Tag</span>
                  )}
                </div>

                <p className="text-purple-300 text-sm mb-1">{craft.origin}</p>
                <p className="text-blue-300 text-sm mb-2">{craft.craft}</p>
                <p className="text-amber-300 text-sm mb-3">{craft.artisan}</p>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{craft.description}</p>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-teal-400 font-medium">{craft.price}</span>
                  <button className="px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-300">
                    View Craft
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => window.history.back()}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
          >
            ← Back to Explore
          </button>
        </div>
      </div>
    </div>
  )
}
