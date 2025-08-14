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
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % artImages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full max-w-sm md:max-w-2xl mx-auto perspective-container">
      {/* Main rotating display */}
      <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden">
        {/* Primary image display */}
        <div className="glass-card p-3 md:p-6 h-full depth-card">
          <div className="relative h-full w-full overflow-hidden rounded-xl md:rounded-2xl">
            <Image
              src={artImages[currentIndex].src || "/placeholder.svg"}
              alt={artImages[currentIndex].alt}
              fill
              className="object-cover transition-all duration-1000 ease-in-out"
              sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, 50vw"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 md:p-4">
              <h3 className="text-white font-serif text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
                {artImages[currentIndex].title}
              </h3>
            </div>
          </div>
        </div>

        {/* Floating background elements - hidden on mobile for performance */}
        <div className="hidden sm:block absolute -top-6 md:-top-10 -left-6 md:-left-10 w-20 md:w-32 h-20 md:h-32 opacity-30">
          <Image
            src={artImages[(currentIndex + 1) % artImages.length].src || "/placeholder.svg"}
            alt="Background art"
            fill
            className="object-cover rounded-full blur-sm floating-element"
            sizes="(max-width: 768px) 80px, 128px"
          />
        </div>

        <div className="hidden sm:block absolute -bottom-6 md:-bottom-10 -right-6 md:-right-10 w-16 md:w-24 h-16 md:h-24 opacity-20">
          <Image
            src={artImages[(currentIndex + 2) % artImages.length].src || "/placeholder.svg"}
            alt="Background art"
            fill
            className="object-cover rounded-full blur-md floating-element"
            sizes="(max-width: 768px) 64px, 96px"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="hidden lg:block absolute top-1/2 -right-16 w-20 h-20 opacity-25">
          <Image
            src={artImages[(currentIndex + 3) % artImages.length].src || "/placeholder.svg"}
            alt="Background art"
            fill
            className="object-cover rounded-full blur-sm floating-element"
            sizes="80px"
            style={{ animationDelay: "4s" }}
          />
        </div>
      </div>

      {/* Side preview images - only on large screens */}
      <div className="hidden xl:flex absolute top-1/2 -translate-y-1/2 -left-20 flex-col gap-4">
        {[1, 2].map((offset) => {
          const index = (currentIndex + offset) % artImages.length
          return (
            <button
              key={index}
              className="w-16 h-16 glass-card p-1 opacity-60 hover:opacity-100 transition-all duration-300 active:scale-95"
              onClick={() => setCurrentIndex(index)}
            >
              <Image
                src={artImages[index].src || "/placeholder.svg"}
                alt={artImages[index].alt}
                fill
                className="object-cover rounded-xl"
                sizes="64px"
              />
            </button>
          )
        })}
      </div>

      <div className="hidden xl:flex absolute top-1/2 -translate-y-1/2 -right-20 flex-col gap-4">
        {[4, 5].map((offset) => {
          const index = (currentIndex + offset) % artImages.length
          return (
            <button
              key={index}
              className="w-16 h-16 glass-card p-1 opacity-60 hover:opacity-100 transition-all duration-300 active:scale-95"
              onClick={() => setCurrentIndex(index)}
            >
              <Image
                src={artImages[index].src || "/placeholder.svg"}
                alt={artImages[index].alt}
                fill
                className="object-cover rounded-xl"
                sizes="64px"
              />
            </button>
          )
        })}
      </div>

      {/* Progress indicators - touch-friendly on mobile */}
      <div className="flex justify-center mt-4 md:mt-6 gap-2">
        {artImages.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all duration-300 active:scale-95 ${
              index === currentIndex ? "bg-white w-6 md:w-8" : "bg-white/30 hover:bg-white/50 w-2"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`View image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
