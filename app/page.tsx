import Link from "next/link"
import { ArrowRight } from "lucide-react"
import AnimatedImageChain from "@/components/animated-image-chain"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
      <div className="flex flex-col lg:flex-row items-center justify-between min-h-[70vh] lg:min-h-[80vh] gap-8 lg:gap-12">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 font-serif leading-tight">
            Kalakrit:
            <br />
            India's Heritage
            <br />
            in Motion
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-6 md:mb-8 font-serif italic">
            Where Indian Art finds Voice
          </p>

          <Link
            href="/explore"
            className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full btn-hover text-sm md:text-base"
          >
            Get started
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </Link>
        </div>

        {/* Right Content - Animated Art Chain */}
        <div className="flex-1 flex justify-center w-full lg:w-auto">
          <AnimatedImageChain />
        </div>
      </div>
    </div>
  )
}
