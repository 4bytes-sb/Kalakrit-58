"use client"

export default function FestivalsPage() {
  const festivals = [
    {
      id: 1,
      title: "Diwali",
      season: "October/November",
      region: "Pan-India",
      type: "Hindu Festival",
      description: "Festival of lights celebrating the victory of light over darkness and good over evil",
      image: "/diwali-lights.png",
      duration: "5 days",
      significance: "Victory of Light",
    },
    {
      id: 2,
      title: "Holi",
      season: "March",
      region: "North India",
      type: "Hindu Festival",
      description: "Festival of colors celebrating spring, love, and the triumph of good over evil",
      image: "/holi-colors.png",
      duration: "2 days",
      significance: "Festival of Colors",
    },
    {
      id: 3,
      title: "Durga Puja",
      season: "September/October",
      region: "West Bengal",
      type: "Hindu Festival",
      description: "Celebration of Goddess Durga's victory over the buffalo demon Mahishasura",
      image: "/durga-puja.png",
      duration: "10 days",
      significance: "Divine Feminine Power",
    },
    {
      id: 4,
      title: "Eid ul-Fitr",
      season: "Variable (Lunar)",
      region: "Pan-India",
      type: "Islamic Festival",
      description: "Celebration marking the end of Ramadan with prayers, feasts, and charity",
      image: "/eid-celebration.png",
      duration: "3 days",
      significance: "End of Ramadan",
    },
    {
      id: 5,
      title: "Onam",
      season: "August/September",
      region: "Kerala",
      type: "Regional Festival",
      description: "Harvest festival celebrating King Mahabali's annual visit to Kerala",
      image: "/onam-pookalam.png",
      duration: "10 days",
      significance: "Harvest Celebration",
    },
    {
      id: 6,
      title: "Ganesh Chaturthi",
      season: "August/September",
      region: "Maharashtra",
      type: "Hindu Festival",
      description: "Celebration of Lord Ganesha's birth with elaborate processions and immersion",
      image: "/ganesh-festival.png",
      duration: "11 days",
      significance: "Remover of Obstacles",
    },
  ]

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Indian Festivals</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the vibrant tapestry of Indian festivals that celebrate life, spirituality, seasons, and
            community bonds across diverse cultures and traditions.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">100+</div>
            <div className="text-gray-300">Major Festivals</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">365</div>
            <div className="text-gray-300">Days of Celebration</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-teal-400 mb-2">28</div>
            <div className="text-gray-300">States</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">8+</div>
            <div className="text-gray-300">Religions</div>
          </div>
        </div>

        {/* Festivals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {festivals.map((festival) => (
            <div key={festival.id} className="glass-card group hover:scale-105 transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-orange-900/20 via-pink-900/20 to-purple-900/20 rounded-t-2xl mb-4 flex items-center justify-center">
                <div className="text-6xl opacity-50">🎉</div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{festival.title}</h3>
                  <span className="text-xs px-2 py-1 bg-orange-900/30 text-orange-300 rounded-full">
                    {festival.duration}
                  </span>
                </div>

                <p className="text-purple-300 text-sm mb-1">{festival.season}</p>
                <p className="text-blue-300 text-sm mb-2">{festival.region}</p>
                <p className="text-teal-300 text-xs mb-3 px-2 py-1 bg-teal-900/30 rounded-full inline-block">
                  {festival.type}
                </p>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{festival.description}</p>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-pink-400 font-medium">{festival.significance}</span>
                  <button className="px-4 py-2 bg-gradient-to-r from-orange-600 to-pink-600 text-white rounded-lg hover:from-orange-700 hover:to-pink-700 transition-all duration-300">
                    Learn More
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
