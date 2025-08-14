import { ArrowLeft, Heart, Share2, Eye, Calendar, MapPin, Users, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function FestivalsPage() {
  const festivals = [
    {
      id: 1,
      title: "Diwali",
      subtitle: "Festival of Lights",
      date: "October/November",
      region: "Pan-India",
      image: "/art-3.png",
      likes: 2100,
      views: 8500,
      description: "The most celebrated Hindu festival symbolizing victory of light over darkness",
      participants: "1 Billion+",
      category: "Religious",
      duration: "5 Days",
    },
    {
      id: 2,
      title: "Holi",
      subtitle: "Festival of Colors",
      date: "March",
      region: "North India",
      image: "/art-1.png",
      likes: 1800,
      views: 7200,
      description: "Vibrant spring festival celebrating love, joy, and the triumph of good over evil",
      participants: "500 Million+",
      category: "Cultural",
      duration: "2 Days",
    },
    {
      id: 3,
      title: "Durga Puja",
      subtitle: "Goddess Festival",
      date: "September/October",
      region: "West Bengal",
      image: "/art-2.png",
      likes: 1200,
      views: 4800,
      description: "Grand celebration honoring Goddess Durga with elaborate pandals and cultural programs",
      participants: "100 Million+",
      category: "Religious",
      duration: "10 Days",
    },
    {
      id: 4,
      title: "Onam",
      subtitle: "Harvest Festival",
      date: "August/September",
      region: "Kerala",
      image: "/madhubani-fish.png",
      likes: 890,
      views: 3600,
      description: "Kerala's state festival celebrating King Mahabali's return with flower carpets",
      participants: "35 Million+",
      category: "Harvest",
      duration: "10 Days",
    },
    {
      id: 5,
      title: "Ganesh Chaturthi",
      subtitle: "Elephant God Festival",
      date: "August/September",
      region: "Maharashtra",
      image: "/tanjore-ganesha.png",
      likes: 1500,
      views: 6000,
      description: "Celebration of Lord Ganesha with grand processions and immersion ceremonies",
      participants: "200 Million+",
      category: "Religious",
      duration: "11 Days",
    },
    {
      id: 6,
      title: "Pushkar Camel Fair",
      subtitle: "Desert Festival",
      date: "November",
      region: "Rajasthan",
      image: "/warli-village.png",
      likes: 650,
      views: 2800,
      description: "World's largest camel fair with cultural performances and trading",
      participants: "400,000+",
      category: "Cultural",
      duration: "7 Days",
    },
  ]

  const upcomingFestivals = [
    { name: "Karva Chauth", date: "Nov 1", region: "North India" },
    { name: "Diwali", date: "Nov 12", region: "Pan-India" },
    { name: "Guru Nanak Jayanti", date: "Nov 15", region: "Punjab" },
    { name: "Christmas", date: "Dec 25", region: "Pan-India" },
  ]

  return (
    <div className="container mx-auto px-4 md:px-6 py-6 md:py-8">
      {/* Header with Back Button */}
      <div className="flex items-center gap-4 mb-6 md:mb-8">
        <Link href="/explore" className="glass-card p-3 btn-hover">
          <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </Link>
        <div>
          <h1 className="text-white text-2xl md:text-3xl font-bold">Festivals</h1>
          <p className="text-white/80 text-sm md:text-base">
            Celebrate India's vibrant festivals and cultural traditions
          </p>
        </div>
      </div>

      {/* Upcoming Festivals Banner */}
      <div className="glass-card p-4 md:p-6 mb-6 md:mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-yellow-400" />
          <h2 className="text-white text-lg md:text-xl font-semibold">Upcoming Festivals</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {upcomingFestivals.map((festival, index) => (
            <div key={index} className="text-center">
              <div className="text-purple-400 font-semibold text-sm md:text-base">{festival.name}</div>
              <div className="text-white/70 text-xs md:text-sm">{festival.date}</div>
              <div className="text-white/50 text-xs">{festival.region}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Filter Tags */}
      <div className="flex gap-3 mb-6 md:mb-8 overflow-x-auto pb-2">
        {["All", "Religious", "Cultural", "Harvest", "Regional", "National", "Seasonal"].map((tag) => (
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

      {/* Festivals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {festivals.map((festival) => (
          <div key={festival.id} className="glass-card overflow-hidden btn-hover group">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={festival.image || "/placeholder.svg"}
                alt={festival.title}
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
                <span className="px-2 py-1 bg-orange-500/80 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                  {festival.category}
                </span>
              </div>
            </div>

            <div className="p-4 md:p-6">
              <div className="mb-3">
                <h3 className="text-white text-lg md:text-xl font-semibold">{festival.title}</h3>
                <p className="text-purple-300 text-sm font-medium">{festival.subtitle}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                <div className="flex items-center gap-1 text-white/70">
                  <Calendar className="w-4 h-4" />
                  <span>{festival.date}</span>
                </div>
                <div className="flex items-center gap-1 text-white/70">
                  <MapPin className="w-4 h-4" />
                  <span>{festival.region}</span>
                </div>
                <div className="flex items-center gap-1 text-white/70">
                  <Users className="w-4 h-4" />
                  <span>{festival.participants}</span>
                </div>
                <div className="flex items-center gap-1 text-white/70">
                  <Sparkles className="w-4 h-4" />
                  <span>{festival.duration}</span>
                </div>
              </div>

              <p className="text-white/70 text-sm mb-4 line-clamp-2">{festival.description}</p>

              <div className="flex items-center justify-between text-white/60 text-sm">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    <span>{festival.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{festival.views}</span>
                  </div>
                </div>
                <button className="text-purple-400 hover:text-purple-300 transition-colors font-medium">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Festival Calendar CTA */}
      <div className="glass-card p-6 md:p-8 mt-8 md:mt-12 text-center">
        <h3 className="text-white text-xl md:text-2xl font-semibold mb-4">Festival Calendar 2024</h3>
        <p className="text-white/80 mb-6">
          Never miss a celebration! Get the complete Indian festival calendar with dates and regional variations.
        </p>
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-medium btn-hover">
          Download Calendar
        </button>
      </div>
    </div>
  )
}
