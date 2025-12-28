"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MapPin, ShoppingCart, Trash2, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  category: string
}

const PRODUCTS = [
  // Beverages
  { id: "1", name: "Fresh Orange Juice (1L)", price: 120, category: "Beverages", image: "🧃" },
  { id: "2", name: "Mineral Water (20L Jerry)", price: 250, category: "Beverages", image: "💧" },
  { id: "3", name: "Tea Powder (500g)", price: 180, category: "Beverages", image: "☕" },
  { id: "4", name: "Coffee Beans (250g)", price: 220, category: "Beverages", image: "☕" },

  // Oils & Condiments
  { id: "5", name: "Mustard Oil (1L)", price: 280, category: "Oils & Condiments", image: "🫙" },
  { id: "6", name: "Tomato Sauce (500ml)", price: 85, category: "Oils & Condiments", image: "🫙" },
  { id: "7", name: "Cooking Oil (5L)", price: 650, category: "Oils & Condiments", image: "🫙" },
  { id: "8", name: "Pickle Bundle (Pack)", price: 150, category: "Oils & Condiments", image: "🥒" },

  // Snacks & Food
  { id: "9", name: "Potato Chips (200g)", price: 65, category: "Snacks", image: "🥔" },
  { id: "10", name: "Biscuits Bundle (500g)", price: 120, category: "Snacks", image: "🍪" },
  { id: "11", name: "Rice (10kg bag)", price: 580, category: "Staples", image: "🍚" },
  { id: "12", name: "Flour (5kg bag)", price: 320, category: "Staples", image: "🌾" },

  // Household Items
  { id: "13", name: "Dish Wash Liquid (500ml)", price: 95, category: "Household", image: "🧼" },
  { id: "14", name: "Detergent Powder (2kg)", size: "2kg", price: 280, category: "Household", image: "🧺" },
  { id: "15", name: "Cleaning Spray (500ml)", price: 120, category: "Household", image: "🧹" },
  { id: "16", name: "Tissue Roll Pack (6)", price: 180, category: "Household", image: "🧻" },

  // Personal Care
  { id: "17", name: "Hand Sanitizer (500ml)", price: 110, category: "Personal Care", image: "🧴" },
  { id: "18", name: "Soap Bar (Pack of 4)", price: 140, category: "Personal Care", image: "🧼" },
  { id: "19", name: "Toothpaste (200g)", price: 85, category: "Personal Care", image: "🪥" },
  { id: "20", name: "Shampoo (400ml)", price: 165, category: "Personal Care", image: "🧴" },
]

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [showCart, setShowCart] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)

  const addToCart = (product: (typeof PRODUCTS)[0]) => {
    const existingItem = cart.find((item) => item.id === product.id)
    if (existingItem) {
      setCart(cart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const removeFromCart = (productId: string) => {
    setCart(cart.filter((item) => item.id !== productId))
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
    } else {
      setCart(cart.map((item) => (item.id === productId ? { ...item, quantity } : item)))
    }
  }

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  const handleCheckout = async () => {
    if (cart.length === 0) {
      alert("Your cart is empty!")
      return
    }

    setIsProcessing(true)
    try {
      // Amount in rupees - will be converted to paise in backend
      const amount = cartTotal

      const response = await fetch("/api/razorpay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to create order")
      }

      const data = await response.json()

      if (!data.orderId) {
        throw new Error("Invalid order response")
      }

      const configResponse = await fetch("/api/razorpay/config")
      if (!configResponse.ok) {
        throw new Error("Failed to fetch Razorpay configuration")
      }

      const configData = await configResponse.json()

      // Load Razorpay script if not already loaded
      const loadRazorpayScript = (): Promise<void> => {
        return new Promise((resolve, reject) => {
          if ((window as any).Razorpay) {
            resolve()
            return
          }

          const script = document.createElement("script")
          script.src = "https://checkout.razorpay.com/v1/checkout.js"
          script.async = true
          script.onload = () => resolve()
          script.onerror = () => reject(new Error("Failed to load Razorpay script"))
          document.body.appendChild(script)
        })
      }

      await loadRazorpayScript()

      const options = {
        key: configData.keyId,
        amount: data.amount, // Use amount from backend (already in paise)
        currency: "INR",
        name: "Sehgal Store",
        description: `Order with ${cartCount} items`,
        order_id: data.orderId,
        handler: async (response: any) => {
          try {
            // Verify payment on server-side
            const verifyResponse = await fetch("/api/razorpay/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            })

            const verifyData = await verifyResponse.json()

            if (verifyData.verified) {
              setOrderPlaced(true)
              setCart([])
              setTimeout(() => setShowCart(false), 2000)
            } else {
              alert("Payment verification failed. Please contact support.")
              console.error("Payment verification failed:", verifyData)
            }
          } catch (error) {
            console.error("Payment verification error:", error)
            alert("Payment verification failed. Please contact support with payment ID: " + response.razorpay_payment_id)
          }
        },
        prefill: {
          contact: "9810675566",
        },
        theme: { color: "#1a3a3a" },
        modal: {
          ondismiss: () => {
            setIsProcessing(false)
          },
        },
      }

      const rzp1 = new (window as any).Razorpay(options)
      rzp1.on("payment.failed", (response: any) => {
        alert(`Payment failed: ${response.error.description || "Unknown error"}`)
        setIsProcessing(false)
      })
      rzp1.open()
    } catch (error: any) {
      console.error("Checkout error:", error)
      alert(error?.message || "Payment failed. Please try again.")
      setIsProcessing(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-primary">Sehgal Store</h1>
              <p className="text-xs text-muted-foreground">All Types of Kiryana Items</p>
            </div>
            <button onClick={() => setShowCart(true)} className="relative p-2 rounded-lg hover:bg-muted transition">
              <ShoppingCart className="w-6 h-6 text-primary" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Business Info Card */}
        <Card className="mb-8 border-primary/20 bg-primary/5">
          <CardContent className="pt-6">
            <div className="mb-6 rounded-lg overflow-hidden">
              <Image
                src="/images/screenshot-202025-12-28-20at-202.png"
                alt="Sehgal Store Signboard - All Types of Kiryana Items"
                width={800}
                height={400}
                className="w-full h-auto object-cover rounded"
                priority
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-muted-foreground font-semibold">ADDRESS</p>
                  <p className="text-foreground">23/26 East Patel Nagar, New Delhi-110008</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-muted-foreground font-semibold">CONTACT</p>
                  <p className="text-foreground">9810675566</p>
                  <a href="tel:9810675566" className="text-primary text-sm hover:underline">
                    Call us
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-muted-foreground font-semibold">FREE DELIVERY</p>
                  <p className="text-foreground">Available on qualifying orders</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Store Products Display Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">Visit Our Store</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-lg overflow-hidden border border-border">
              <Image
                src="/images/screenshot-202025-12-28-20at-202.png"
                alt="Sehgal Store Interior - Product Display"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden border border-border">
              <Image
                src="/images/screenshot-202025-12-28-20at-202.png"
                alt="Sehgal Store Products - Oils, Condiments, and Household Items"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <Card className="border-primary/20 bg-muted/50">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-foreground mb-3">About Our Store</h3>
              <p className="text-muted-foreground mb-4">
                Sehgal Store is your trusted local Kiryana retailer with a wide range of products including beverages,
                oils, snacks, household items, and personal care essentials. Visit us at our store or order online for
                free home delivery.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Location:</strong> 23/26 East Patel Nagar, New Delhi-110008 |
                <strong className="ml-2">Phone:</strong> 9810675566
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Products Grid */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-6">Shop Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PRODUCTS.map((product) => (
              <Card key={product.id} className="border-border hover:shadow-lg transition flex flex-col">
                <CardContent className="pt-6 pb-3 flex-grow">
                  <div className="text-4xl mb-3">{product.image}</div>
                  <h3 className="font-semibold text-foreground mb-1 line-clamp-2">{product.name}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{product.category}</p>
                  <p className="text-lg font-bold text-primary mb-4">₹{product.price}</p>
                </CardContent>
                <CardContent className="pt-0 pb-6">
                  <Button
                    onClick={() => addToCart(product)}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm"
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* Cart Modal */}
      {showCart && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end md:items-center justify-center p-4">
          <Card className="w-full md:max-w-md max-h-[90vh] flex flex-col rounded-t-lg md:rounded-lg">
            <CardHeader className="border-b border-border sticky top-0 bg-card">
              <div className="flex justify-between items-center">
                <CardTitle>Shopping Cart</CardTitle>
                <button onClick={() => setShowCart(false)} className="text-2xl hover:text-primary">
                  ×
                </button>
              </div>
            </CardHeader>

            {orderPlaced ? (
              <CardContent className="flex-grow flex flex-col items-center justify-center py-12">
                <div className="text-green-600 mb-4">
                  <CheckCircle className="w-16 h-16" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Order Placed!</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Thank you for your purchase. Your order has been confirmed.
                </p>
              </CardContent>
            ) : cart.length === 0 ? (
              <CardContent className="flex-grow flex items-center justify-center py-12">
                <p className="text-muted-foreground text-center">Your cart is empty</p>
              </CardContent>
            ) : (
              <>
                <CardContent className="flex-grow overflow-y-auto py-6 space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-start gap-4 p-3 bg-muted rounded-lg">
                      <div className="flex-grow">
                        <p className="font-medium text-foreground text-sm">{item.name}</p>
                        <p className="text-xs text-muted-foreground">₹{item.price} each</p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-2 py-1 rounded border border-border hover:bg-background text-xs"
                          >
                            −
                          </button>
                          <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-1 rounded border border-border hover:bg-background text-xs"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-primary">₹{item.price * item.quantity}</p>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-destructive hover:text-destructive/80 mt-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </CardContent>

                <div className="border-t border-border p-6 space-y-4 sticky bottom-0 bg-card">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-primary">₹{cartTotal}</span>
                  </div>
                  <Button
                    onClick={handleCheckout}
                    disabled={isProcessing}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-base font-semibold h-10"
                  >
                    {isProcessing ? "Processing..." : `Pay ₹${cartTotal}`}
                  </Button>
                  <Button
                    onClick={() => setShowCart(false)}
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary/10"
                  >
                    Continue Shopping
                  </Button>
                </div>
              </>
            )}
          </Card>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-border mt-16 bg-card/50">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-foreground mb-3">Sehgal Store</h3>
              <p className="text-muted-foreground text-sm">
                All Types of Kiryana Items - Your trusted local business partner.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Contact</h4>
              <p className="text-muted-foreground text-sm mb-1">Phone: 9810675566</p>
              <p className="text-muted-foreground text-sm">23/26 East Patel Nagar, New Delhi</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Payment Methods</h4>
              <ul className="text-muted-foreground text-sm space-y-1">
                <li>• Razorpay (All Cards)</li>
                <li>• UPI & Wallets</li>
                <li>• Net Banking</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-6 mb-4 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition">
              Terms & Conditions
            </Link>
            <Link href="/refund" className="hover:text-primary transition">
              Refund Policy
            </Link>
          </div>
          <div className="text-center text-muted-foreground text-sm">
            <p>&copy; 2025 Sehgal Store. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
