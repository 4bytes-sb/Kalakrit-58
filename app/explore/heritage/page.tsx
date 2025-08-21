"use client"

export default function HeritagePage() {
  const heritageSites = [
    {
      id: 1,
      title: "Taj Mahal",
      location: "Agra, Uttar Pradesh",
      year: "1653",
      type: "UNESCO World Heritage Site",
      description: "An ivory-white marble mausoleum, symbol of eternal love and architectural masterpiece",
      image: "/taj-mahal.png",
      rating: "4.9",
      visitors: "6M+ annually",
    },
    {
      id: 2,
      title: "Red Fort",
      location: "Delhi",
      year: "1648",
      type: "UNESCO World Heritage Site",
      description: "Magnificent Mughal fortress with red sandstone walls and rich history",
      image: "/red-fort.png",
      rating: "4.7",
      visitors: "3M+ annually",
    },
    {
      id: 3,
      title: "Ajanta Caves",
      location: "Maharashtra",
      year: "2nd Century BCE",
      type: "UNESCO World Heritage Site",
      description: "Ancient Buddhist cave monuments with exquisite paintings and sculptures",
      image: "/ajanta-caves.png",
      rating: "4.8",
      visitors: "500K+ annually",
    },
    {
      id: 4,
      title: "Hampi",
      location: "Karnataka",
      year: "14th Century",
      type: "UNESCO World Heritage Site",
      description: "Ruins of the Vijayanagara Empire with stunning temple architecture",
      image: "/hampi-ruins.png",
      rating: "4.6",
      visitors: "800K+ annually",
    },
    {
      id: 5,
      title: "Khajuraho Temples",
      location: "Madhya Pradesh",
      year: "950-1050 CE",
      type: "UNESCO World Heritage Site",
      description: "Medieval Hindu and Jain temples famous for intricate sculptures",
      image: "/khajuraho-temple.png",
      rating: "4.5",
      visitors: "1M+ annually",
    },
    {
      id: 6,
      title: "Konark Sun Temple",
      location: "Odisha",
      year: "13th Century",
      type: "UNESCO World Heritage Site",
      description: "Architectural marvel dedicated to the Sun God with chariot design",
      image: "/konark-temple.png",
      rating: "4.7",
      visitors: "1.2M+ annually",
    },
  ]

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Heritage Sites</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore India's magnificent heritage sites that showcase thousands of years of architectural brilliance,
            cultural richness, and historical significance.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">40+</div>
            <div className="text-gray-300">UNESCO Sites</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">3000+</div>
            <div className="text-gray-300">Monuments</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-teal-400 mb-2">5000+</div>
            <div className="text-gray-300">Years History</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">28</div>
            <div className="text-gray-300">States</div>
          </div>
        </div>

        {/* Heritage Sites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {heritageSites.map((site) => (
            <div key={site.id} className="glass-card group hover:scale-105 transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-t-2xl mb-4 flex items-center justify-center">
                <div className="text-6xl opacity-50">🏛️</div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{site.title}</h3>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-sm text-gray-300">{site.rating}</span>
                  </div>
                </div>

                <p className="text-purple-300 text-sm mb-1">{site.location}</p>
                <p className="text-blue-300 text-sm mb-2">{site.year}</p>
                <p className="text-teal-300 text-xs mb-3 px-2 py-1 bg-teal-900/30 rounded-full inline-block">
                  {site.type}
                </p>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{site.description}</p>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">{site.visitors}</span>
                  <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                    Explore
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
