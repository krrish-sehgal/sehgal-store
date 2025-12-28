import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, Phone, MapPin, Mail } from "lucide-react"

export const metadata = {
  title: "Contact Us | Sehgal Store",
  description: "Contact Sehgal Store for inquiries, support, and assistance",
}

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <header className="border-b border-border bg-card/50 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-4">
            <ChevronLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-primary">Contact Us</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Sehgal Store - Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-primary mb-4">Get in Touch</h2>
              <p className="text-foreground mb-6">
                We're here to help! If you have any questions, concerns, or need assistance with your order, please don't hesitate to contact us.
              </p>
            </section>

            <section>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Store Address</h3>
                    <p className="text-foreground">
                      Sehgal Store
                      <br />
                      23/26 East Patel Nagar
                      <br />
                      New Delhi - 110008
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone Number</h3>
                    <p className="text-foreground">
                      <a href="tel:9810675566" className="text-primary hover:underline">
                        9810675566
                      </a>
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Available for calls and WhatsApp
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-foreground">
                      <a href="mailto:info@sehgalstore.com" className="text-primary hover:underline">
                        info@sehgalstore.com
                      </a>
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">Business Hours</h2>
              <div className="space-y-2 text-foreground">
                <p><strong>Monday - Saturday:</strong> 9:00 AM - 8:00 PM</p>
                <p><strong>Sunday:</strong> 10:00 AM - 6:00 PM</p>
                <p className="text-sm text-muted-foreground mt-2">
                  *Hours may vary on holidays. Please call ahead to confirm.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">How Can We Help?</h2>
              <ul className="list-disc list-inside text-foreground space-y-2">
                <li>Order inquiries and tracking</li>
                <li>Product information and availability</li>
                <li>Payment and billing questions</li>
                <li>Returns and refunds</li>
                <li>Delivery and shipping</li>
                <li>General customer support</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">Visit Our Store</h2>
              <p className="text-foreground mb-4">
                We welcome you to visit our physical store location. Our friendly staff is always ready to assist you with your shopping needs.
              </p>
              <p className="text-sm text-muted-foreground">
                Free delivery available on qualifying orders. Contact us for more details.
              </p>
            </section>

            <section className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                For urgent matters, please call us directly at{" "}
                <a href="tel:9810675566" className="text-primary hover:underline">
                  9810675566
                </a>
                .
              </p>
            </section>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

