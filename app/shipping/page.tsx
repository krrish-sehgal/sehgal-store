import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft } from "lucide-react"

export const metadata = {
  title: "Shipping Policy | Sehgal Store",
  description: "Shipping and delivery policy for Sehgal Store",
}

export default function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <header className="border-b border-border bg-card/50 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-4">
            <ChevronLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-primary">Shipping & Delivery Policy</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Sehgal Store - Shipping & Delivery Policy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">1. Delivery Areas</h2>
              <p className="text-foreground mb-4">
                We currently offer delivery services in New Delhi and surrounding areas. Free delivery is available on qualifying orders within our service area.
              </p>
              <p className="text-foreground mb-4">
                <strong>Primary Service Area:</strong> East Patel Nagar and nearby localities in New Delhi
              </p>
              <p className="text-foreground">
                For delivery outside our primary service area, additional charges may apply. Please contact us at{" "}
                <a href="tel:9810675566" className="text-primary hover:underline">
                  9810675566
                </a>{" "}
                to confirm delivery availability and charges.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">2. Delivery Timeframes</h2>
              <p className="text-foreground mb-2">Standard delivery timeframes:</p>
              <ul className="list-disc list-inside text-foreground space-y-2">
                <li><strong>Same-day delivery:</strong> Available for orders placed before 2:00 PM (subject to availability)</li>
                <li><strong>Next-day delivery:</strong> For orders placed after 2:00 PM or for items requiring preparation</li>
                <li><strong>Standard delivery:</strong> 2-3 business days for regular orders</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-3">
                Delivery times may vary during peak seasons, holidays, or due to unforeseen circumstances.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">3. Free Delivery</h2>
              <p className="text-foreground mb-4">
                Free delivery is available on orders meeting the following criteria:
              </p>
              <ul className="list-disc list-inside text-foreground space-y-2">
                <li>Minimum order value of ₹500</li>
                <li>Delivery within our primary service area</li>
                <li>Standard delivery timeframe (not express delivery)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">4. Delivery Charges</h2>
              <p className="text-foreground mb-4">
                For orders below the free delivery threshold or outside our primary service area, delivery charges will be calculated based on:
              </p>
              <ul className="list-disc list-inside text-foreground space-y-2">
                <li>Distance from our store location</li>
                <li>Order weight and size</li>
                <li>Delivery urgency (standard vs. express)</li>
              </ul>
              <p className="text-foreground mt-4">
                Delivery charges, if applicable, will be clearly displayed at checkout before payment confirmation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">5. Order Processing</h2>
              <p className="text-foreground mb-4">
                Once your order is confirmed and payment is verified, we will:
              </p>
              <ol className="list-decimal list-inside text-foreground space-y-2">
                <li>Process your order within 24 hours</li>
                <li>Prepare items for delivery</li>
                <li>Contact you to confirm delivery address and preferred time</li>
                <li>Dispatch your order for delivery</li>
                <li>Send you tracking information (if available)</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">6. Delivery Process</h2>
              <p className="text-foreground mb-4">
                Our delivery team will:
              </p>
              <ul className="list-disc list-inside text-foreground space-y-2">
                <li>Contact you before delivery to confirm availability</li>
                <li>Deliver items to the address provided during checkout</li>
                <li>Request verification (OTP or signature) upon delivery</li>
                <li>Provide assistance with unloading if needed</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">7. Delivery Address</h2>
              <p className="text-foreground mb-4">
                Please ensure you provide accurate and complete delivery address including:
              </p>
              <ul className="list-disc list-inside text-foreground space-y-2">
                <li>Complete street address</li>
                <li>Landmark or building name</li>
                <li>Floor and apartment/unit number (if applicable)</li>
                <li>Contact phone number for delivery coordination</li>
              </ul>
              <p className="text-foreground mt-4">
                We are not responsible for delivery delays or failures due to incorrect or incomplete address information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">8. Failed Deliveries</h2>
              <p className="text-foreground mb-4">
                If delivery cannot be completed due to:
              </p>
              <ul className="list-disc list-inside text-foreground space-y-2">
                <li>Incorrect or inaccessible address</li>
                <li>Recipient unavailable after multiple attempts</li>
                <li>Refusal to accept delivery</li>
              </ul>
              <p className="text-foreground mt-4">
                We will contact you to reschedule delivery. Additional delivery charges may apply for rescheduled deliveries.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">9. Order Tracking</h2>
              <p className="text-foreground mb-4">
                Once your order is dispatched, you will receive:
              </p>
              <ul className="list-disc list-inside text-foreground space-y-2">
                <li>Order confirmation via SMS or phone call</li>
                <li>Estimated delivery time</li>
                <li>Delivery team contact information</li>
              </ul>
              <p className="text-foreground mt-4">
                For order status updates, please contact us at{" "}
                <a href="tel:9810675566" className="text-primary hover:underline">
                  9810675566
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">10. Special Handling</h2>
              <p className="text-foreground mb-4">
                Certain items may require special handling:
              </p>
              <ul className="list-disc list-inside text-foreground space-y-2">
                <li>Fragile items are carefully packaged</li>
                <li>Perishable items are delivered with priority</li>
                <li>Heavy items may require additional delivery time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">11. Contact for Delivery Issues</h2>
              <p className="text-foreground">
                If you experience any issues with delivery, please contact us immediately:
              </p>
              <p className="text-foreground mt-3">
                <strong>Phone:</strong>{" "}
                <a href="tel:9810675566" className="text-primary hover:underline">
                  9810675566
                </a>
                <br />
                <strong>Address:</strong> 23/26 East Patel Nagar, New Delhi - 110008
              </p>
            </section>

            <p className="text-sm text-muted-foreground pt-6 border-t border-border">Last Updated: December 28, 2025</p>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

