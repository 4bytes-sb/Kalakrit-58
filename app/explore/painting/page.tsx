"use client"

export default function PaintingPage() {
  const paintings = [
    {
      id: 1,
      title: "Madhubani Fish",
      artist: "Mithila Artists",
      region: "Bihar",
      style: "Madhubani",
      description: "Traditional folk art depicting fish with intricate patterns and natural pigments",
      image: "/madhubani-fish.png",
      price: "₹8,500",
      year: "Contemporary",
    },
    {
      id: 2,
      title: "Pattachitra Krishna",
      artist: "Odisha Painters",
      region: "Odisha",
      style: "Pattachitra",
      description: "Sacred cloth painting of Lord Krishna with traditional motifs and colors",
      image: "/pattachitra-krishna.png",
      price: "₹12,000",
      year: "Contemporary",
    },
    {
      id: 3,
      title: "Warli Village Scene",
      artist: "Warli Tribe",
      region: "Maharashtra",
      style: "Warli",
      description: "Tribal art depicting village life with geometric patterns in white on brown",
      image: "/warli-village.png",
      price: "₹6,500",
      year: "Contemporary",
    },
    {
      id: 4,
      title: "Tanjore Ganesha",
      artist: "Tamil Artists",
      region: "Tamil Nadu",
      style: "Tanjore",
      description: "Classical painting of Lord Ganesha with gold foil and precious stones",
      image: "/tanjore-ganesha.png",
      price: "₹25,000",
      year: "Contemporary",
    },
    {
      id: 5,
      title: "Mysore Palace Art",
      artist: "Karnataka Painters",
      region: "Karnataka",
      style: "Mysore",
      description: "Royal court painting with intricate details and vibrant colors",
      image: "/mysore-palace-traditional-painting.png",
      price: "₹18,000",
      year: "Contemporary",
    },
    {
      id: 6,
      title: "Kalamkari Peacock",
      artist: "Andhra Artists",
      region: "Andhra Pradesh",
      style: "Kalamkari",
      description: "Hand-painted textile art featuring peacock with natural dyes",
      image: "/kalamkari-peacock.png",
      price: "₹15,000",
      year: "Contemporary",
    },
  ]

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Traditional Paintings</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the rich tradition of Indian painting, from ancient folk art to classical court paintings, each
            telling stories of culture, mythology, and daily life.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-gray-300">Art Forms</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">1000+</div>
            <div className="text-gray-300">Artists</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-teal-400 mb-2">2000+</div>
            <div className="text-gray-300">Years Old</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">28</div>
            <div className="text-gray-300">States</div>
          </div>
        </div>

        {/* Paintings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paintings.map((painting) => (
            <div key={painting.id} className="glass-card group hover:scale-105 transition-all duration-300">
              <div className="aspect-square bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-t-2xl mb-4 flex items-center justify-center">
                <div className="text-6xl opacity-50">🎨</div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{painting.title}</h3>
                <p className="text-purple-300 text-sm mb-1">{painting.artist}</p>
                <p className="text-blue-300 text-sm mb-2">{painting.region}</p>
                <p className="text-teal-300 text-xs mb-3 px-2 py-1 bg-teal-900/30 rounded-full inline-block">
                  {painting.style}
                </p>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{painting.description}</p>

                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-pink-400">{painting.price}</span>
                  <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                    View Art
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
