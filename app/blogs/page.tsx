export default function BlogsPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Madhubani Painting",
      excerpt: "Discover the intricate patterns and vibrant colors of this traditional Bihar art form",
      category: "Traditional Art",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Festivals of India: A Cultural Journey",
      excerpt: "Explore the rich tapestry of Indian festivals and their cultural significance",
      category: "Culture",
      readTime: "8 min read",
    },
    {
      id: 3,
      title: "Ancient Indian Sculptures",
      excerpt: "Journey through time with India's most magnificent sculptural heritage",
      category: "Heritage",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "The Evolution of Indian Textiles",
      excerpt: "From handloom to modern designs, trace the journey of Indian textile art",
      category: "Handicrafts",
      readTime: "7 min read",
    },
    {
      id: 5,
      title: "Temple Architecture of South India",
      excerpt: "Marvel at the architectural wonders that define South Indian temple design",
      category: "Architecture",
      readTime: "10 min read",
    },
    {
      id: 6,
      title: "Folk Dances Across India",
      excerpt: "Experience the rhythm and grace of India's diverse folk dance traditions",
      category: "Performing Arts",
      readTime: "4 min read",
    },
  ]

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4 font-serif">Blogs & Stories</h1>
        <p className="text-white/80 text-lg">
          Dive deep into India's rich cultural heritage through our curated articles
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <article key={post.id} className="glass-card p-6 cursor-pointer group">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-pink-500/20 to-purple-600/20 text-pink-300 text-sm font-medium rounded-full border border-pink-500/30">
                {post.category}
              </span>
            </div>

            <h2 className="text-xl font-bold text-white mb-3 group-hover:text-pink-300 transition-colors duration-300">
              {post.title}
            </h2>

            <p className="text-white/70 mb-4 line-clamp-3">{post.excerpt}</p>

            <div className="flex items-center justify-between text-sm text-white/60">
              <span>{post.readTime}</span>
              <button className="text-pink-300 hover:text-pink-200 font-medium btn-hover">Read More →</button>
            </div>
          </article>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-12">
        <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full btn-hover">
          Load More Articles
        </button>
      </div>
    </div>
  )
}
