"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const artImages = [
  {
    src: "/art-1.png",
    alt: "Mystical Portrait with Blue Hand",
    title: "Mystical Expressions",
  },
  {
    src: "/art-2.png",
    alt: "Traditional Indian Woman Portrait",
    title: "Heritage Beauty",
  },
  {
    src: "/art-3.png",
    alt: "Cubist Krishna Art",
    title: "Divine Cubism",
  },
  {
    src: "/art-4.png",
    alt: "Musical Harmony",
    title: "Melodic Serenity",
  },
  {
    src: "/madhubani-fish.png",
    alt: "Madhubani Fish Art",
    title: "Madhubani Traditions",
  },
  {
    src: "/warli-village.png",
    alt: "Warli Village Scene",
    title: "Warli Folk Art",
  },
  {
    src: "/tanjore-ganesha.png",
    alt: "Tanjore Ganesha",
    title: "Tanjore Splendor",
  },
  {
    src: "/madhubani-patterns.png",
    alt: "Madhubani Patterns",
    title: "Sacred Patterns",
  },
  {
    src: "/kalamkari-textile-art.png",
    alt: "Kalamkari Textile Art",
    title: "Textile Heritage",
  },
  {
    src: "/indian-miniature-paintings.png",
    alt: "Indian Miniature Paintings",
    title: "Miniature Masterpieces",
  },
]

export default function AnimatedImageChain() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % artImages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Main rotating display */}
      <div className="relative h-80 md:h-96 lg:h-[400px] overflow-hidden rounded-3xl">
        <div className="glass-card h-full p-6">
          <div className="relative h-full w-full overflow-hidden rounded-2xl">
            <Image
              src={artImages[activeIndex].src || "/placeholder.svg"}
              alt={artImages[activeIndex].alt}
              fill
              className="object-cover transition-all duration-1000 ease-in-out"
              sizes="(max-width: 768px) 100vw, 512px"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <h3 className="text-white font-serif text-lg font-semibold mb-1">{artImages[activeIndex].title}</h3>
              <p className="text-white/80 text-sm">{artImages[activeIndex].alt}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating background elements */}
      <div className="absolute inset-0 -z-10">
        {artImages.slice(0, 4).map((image, index) => (
          <div
            key={`floating-${index}`}
            className="floating-element absolute opacity-20"
            style={{
              top: `${20 + index * 20}%`,
              left: `${10 + index * 25}%`,
              animationDelay: `${index * 2}s`,
            }}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 glass-card p-2">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover rounded-lg blur-sm"
                sizes="(max-width: 768px) 64px, 80px"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Side preview images */}
      <div className="absolute top-1/2 -left-16 transform -translate-y-1/2 hidden lg:block">
        <div className="glass-card w-12 h-12 p-1 opacity-60">
          <Image
            src={artImages[(activeIndex - 1 + artImages.length) % artImages.length].src || "/placeholder.svg"}
            alt="Previous"
            fill
            className="object-cover rounded-lg"
            sizes="48px"
          />
        </div>
      </div>

      <div className="absolute top-1/2 -right-16 transform -translate-y-1/2 hidden lg:block">
        <div className="glass-card w-12 h-12 p-1 opacity-60">
          <Image
            src={artImages[(activeIndex + 1) % artImages.length].src || "/placeholder.svg"}
            alt="Next"
            fill
            className="object-cover rounded-lg"
            sizes="48px"
          />
        </div>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center mt-6 gap-2">
        {artImages.map((_, index) => (
          <button
            key={index}
            className={`transition-all duration-300 ${
              index === activeIndex
                ? "w-8 h-2 bg-gradient-to-r from-purple-400 to-pink-400"
                : "w-2 h-2 bg-white/30 hover:bg-white/50"
            } rounded-full`}
            onClick={() => setActiveIndex(index)}
            aria-label={`View image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
