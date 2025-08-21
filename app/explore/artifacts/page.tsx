"use client"

export default function ArtifactsPage() {
  const artifacts = [
    {
      id: 1,
      title: "Bronze Dancing Shiva",
      period: "Chola Dynasty (11th Century)",
      location: "Tamil Nadu",
      description: "Exquisite bronze sculpture depicting Lord Shiva in his cosmic dance form",
      image: "/bronze-shiva.png",
      price: "₹2,50,000",
    },
    {
      id: 2,
      title: "Mughal Jade Dagger",
      period: "17th Century",
      location: "Delhi",
      description: "Ornate ceremonial dagger with intricate jade handle and gold inlay",
      image: "/mughal-dagger.png",
      price: "₹1,80,000",
    },
    {
      id: 3,
      title: "Terracotta Horse",
      period: "Gupta Period (5th Century)",
      location: "Uttar Pradesh",
      description: "Ancient terracotta sculpture of a horse with detailed craftsmanship",
      image: "/terracotta-horse.png",
      price: "₹95,000",
    },
    {
      id: 4,
      title: "Copper Water Vessel",
      period: "Medieval Period",
      location: "Rajasthan",
      description: "Traditional copper vessel with engraved patterns used for water storage",
      image: "/copper-vessel.png",
      price: "₹45,000",
    },
    {
      id: 5,
      title: "Stone Ganesha Sculpture",
      period: "Hoysala Dynasty (12th Century)",
      location: "Karnataka",
      description: "Intricately carved stone sculpture of Lord Ganesha",
      image: "/stone-ganesha.png",
      price: "₹3,20,000",
    },
    {
      id: 6,
      title: "Silver Ritual Bowl",
      period: "18th Century",
      location: "Kerala",
      description: "Ornate silver bowl used in temple rituals with detailed engravings",
      image: "/silver-bowl.png",
      price: "₹1,25,000",
    },
  ]

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Ancient Artifacts</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover timeless treasures from India's rich archaeological heritage. Each artifact tells a story of
            ancient civilizations and masterful craftsmanship.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
            <div className="text-gray-300">Artifacts</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">25+</div>
            <div className="text-gray-300">Dynasties</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-teal-400 mb-2">3000+</div>
            <div className="text-gray-300">Years Old</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">15+</div>
            <div className="text-gray-300">States</div>
          </div>
        </div>

        {/* Artifacts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artifacts.map((artifact) => (
            <div key={artifact.id} className="glass-card group hover:scale-105 transition-all duration-300">
              <div className="aspect-square bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-t-2xl mb-4 flex items-center justify-center">
                <div className="text-6xl opacity-50">🏺</div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{artifact.title}</h3>
                <p className="text-purple-300 text-sm mb-2">{artifact.period}</p>
                <p className="text-blue-300 text-sm mb-3">{artifact.location}</p>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{artifact.description}</p>

                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-teal-400">{artifact.price}</span>
                  <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                    View Details
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
