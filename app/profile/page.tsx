import { Settings, Heart, Share2 } from "lucide-react"

export default function ProfilePage() {
  const userCollections = [
    { id: 1, title: "Madhubani Collection", items: 12 },
    { id: 2, title: "Temple Art", items: 8 },
    { id: 3, title: "Folk Paintings", items: 15 },
    { id: 4, title: "Sculptures", items: 6 },
    { id: 5, title: "Textiles", items: 20 },
  ]

  return (
    <div className="container mx-auto px-4 md:px-6 py-6 md:py-8">
      {/* Profile Header */}
      <div className="glass-card p-4 md:p-8 mb-6 md:mb-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
          {/* Profile Avatar */}
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-2xl md:text-3xl">user</span>
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center md:text-left w-full">
            <div className="flex flex-col md:flex-row items-center md:items-center justify-between mb-4 gap-4 md:gap-0">
              <h1 className="text-2xl md:text-3xl font-bold text-white">user name</h1>
              <button className="p-2 glass-card rounded-full btn-hover">
                <Settings className="w-5 h-5 text-white" />
              </button>
            </div>

            <div className="mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">BIO</h2>
              <p className="text-white/80 text-base md:text-lg leading-relaxed">
                Passionate collector and enthusiast of Indian art and heritage. Dedicated to preserving and sharing the
                rich cultural traditions that define our beautiful country. Join me on this journey through India's
                artistic legacy.
              </p>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-6 md:gap-6 text-white/70">
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-white">127</div>
                <div className="text-xs md:text-sm">Collections</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-white">2.4k</div>
                <div className="text-xs md:text-sm">Followers</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-white">892</div>
                <div className="text-xs md:text-sm">Following</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Collections Grid */}
      <div className="mb-6 md:mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">My Collections</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {userCollections.map((collection) => (
            <div key={collection.id} className="glass-card p-4 md:p-6 cursor-pointer group">
              <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl mb-3 md:mb-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">{collection.items}</div>
                  <div className="text-white/60 text-xs md:text-sm">Items</div>
                </div>
              </div>
              <h3 className="text-white font-semibold group-hover:text-pink-300 transition-colors duration-300 text-sm md:text-base">
                {collection.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Recent Activity</h2>
        <div className="space-y-3 md:space-y-4">
          {[
            { action: "Added to collection", item: "Warli Art Painting", time: "2 hours ago" },
            { action: "Liked", item: "Temple Architecture Blog", time: "5 hours ago" },
            { action: "Shared", item: "Madhubani Collection", time: "1 day ago" },
            { action: "Commented on", item: "Folk Dance Article", time: "2 days ago" },
          ].map((activity, index) => (
            <div key={index} className="glass-card p-3 md:p-4 flex items-center justify-between">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center flex-shrink-0">
                  {activity.action === "Liked" && <Heart className="w-4 h-4 md:w-5 md:h-5 text-pink-300" />}
                  {activity.action === "Shared" && <Share2 className="w-4 h-4 md:w-5 md:h-5 text-blue-300" />}
                  {(activity.action === "Added to collection" || activity.action === "Commented on") && (
                    <div className="w-2 h-2 bg-white rounded-full" />
                  )}
                </div>
                <div>
                  <p className="text-white text-sm md:text-base">
                    <span className="font-medium">{activity.action}</span> {activity.item}
                  </p>
                  <p className="text-white/60 text-xs md:text-sm">{activity.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
