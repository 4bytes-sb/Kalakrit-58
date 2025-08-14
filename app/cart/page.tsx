import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"

export default function CartPage() {
  const cartItems = [
    {
      id: 1,
      title: "Madhubani Fish Painting",
      artist: "Sita Devi",
      price: 2500,
      quantity: 1,
      image: "/madhubani-fish.png",
    },
    {
      id: 2,
      title: "Tanjore Ganesha",
      artist: "Lakshmi Narayanan",
      price: 5800,
      quantity: 2,
      image: "/tanjore-ganesha.png",
    },
    {
      id: 3,
      title: "Kalamkari Peacock",
      artist: "Niranjan Reddy",
      price: 4100,
      quantity: 1,
      image: "/kalamkari-peacock.png",
    },
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 200
  const total = subtotal + shipping

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex items-center gap-3 mb-8">
        <ShoppingBag className="w-8 h-8 text-white" />
        <h1 className="text-4xl font-bold text-white font-serif">Shopping Cart</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="glass-card p-6">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 bg-white/10 rounded-2xl overflow-hidden flex-shrink-0">
                  <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
                </div>

                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-white/70 mb-2">by {item.artist}</p>
                  <p className="text-white font-semibold">₹{item.price.toLocaleString()}</p>
                </div>

                <div className="flex items-center gap-3">
                  <button className="w-8 h-8 glass-card rounded-full flex items-center justify-center btn-hover">
                    <Minus className="w-4 h-4 text-white" />
                  </button>
                  <span className="text-white font-semibold w-8 text-center">{item.quantity}</span>
                  <button className="w-8 h-8 glass-card rounded-full flex items-center justify-center btn-hover">
                    <Plus className="w-4 h-4 text-white" />
                  </button>
                </div>

                <button className="p-2 glass-card rounded-full btn-hover text-red-400 hover:text-red-300">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}

          {cartItems.length === 0 && (
            <div className="glass-card p-12 text-center">
              <ShoppingBag className="w-16 h-16 text-white/40 mx-auto mb-4" />
              <h3 className="text-white text-xl font-semibold mb-2">Your cart is empty</h3>
              <p className="text-white/70">Add some beautiful art pieces to get started</p>
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div className="glass-card p-6 h-fit">
          <h2 className="text-white text-xl font-bold mb-6">Order Summary</h2>

          <div className="space-y-4 mb-6">
            <div className="flex justify-between text-white">
              <span>Subtotal ({cartItems.length} items)</span>
              <span>₹{subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-white">
              <span>Shipping</span>
              <span>₹{shipping}</span>
            </div>
            <div className="border-t border-white/20 pt-4">
              <div className="flex justify-between text-white font-bold text-lg">
                <span>Total</span>
                <span>₹{total.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <button className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full btn-hover mb-4">
            Proceed to Checkout
          </button>

          <button className="w-full py-3 glass-card text-white font-medium btn-hover">Continue Shopping</button>
        </div>
      </div>
    </div>
  )
}
