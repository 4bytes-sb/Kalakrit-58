import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/10">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">dk</span>
              </div>
              <h3 className="text-xl font-playfair font-bold text-white">Kalakrit</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Where Indian Art finds Voice. Discover, explore, and celebrate the rich heritage of India through our
              digital archive.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/explore"
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm"
                >
                  Explore
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/search"
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm"
                >
                  Search
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/explore/painting"
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm"
                >
                  Paintings
                </Link>
              </li>
              <li>
                <Link
                  href="/explore/artifacts"
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm"
                >
                  Artifacts
                </Link>
              </li>
              <li>
                <Link
                  href="/explore/heritage"
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm"
                >
                  Heritage Sites
                </Link>
              </li>
              <li>
                <Link
                  href="/explore/festivals"
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm"
                >
                  Festivals
                </Link>
              </li>
              <li>
                <Link
                  href="/explore/handicrafts"
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm"
                >
                  Handicrafts
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail size={16} className="text-purple-400" />
                <span className="text-sm">info@kalakrit.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone size={16} className="text-purple-400" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin size={16} className="text-purple-400" />
                <span className="text-sm">New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Kalakrit. All rights reserved. Preserving India's cultural heritage digitally.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
