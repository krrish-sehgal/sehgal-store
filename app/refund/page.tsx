import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft } from "lucide-react"

export const metadata = {
  title: "Refund Policy | Sehgal Store",
  description: "Refund & Return Policy for Sehgal Store",
}

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <header className="border-b border-border bg-card/50 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-4">
            <ChevronLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-primary">Refund & Return Policy</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Sehgal Store - Refund & Return Policy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">1. Return Period</h2>
              <p className="text-foreground mb-4">
                We offer a 7-day return period from the date of purchase for eligible products. Items must be in
                original condition with all packaging and documentation intact.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">2. Eligible Products</h2>
              <p className="text-foreground mb-2">Products are eligible for return if they are:</p>
              <ul className="list-disc list-inside text-foreground space-y-2">
                <li>Unused and in original packaging</li>
                <li>Not damaged by customer misuse</li>
                <li>Accompanied by proof of purchase</li>
                <li>Non-perishable items only</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">3. Non-Returnable Items</h2>
              <p className="text-foreground mb-2">The following items cannot be returned:</p>
              <ul className="list-disc list-inside text-foreground space-y-2">
                <li>Perishable items (food, beverages)</li>
                <li>Items used or consumed</li>
                <li>Products without original packaging</li>
                <li>Custom or personalized items</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">4. Refund Process</h2>
              <p className="text-foreground mb-4">
                Once we receive and inspect your returned item, we will process your refund within 5-7 business days.
                Refunds will be issued to the original payment method used for the purchase.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">5. Damaged or Defective Items</h2>
              <p className="text-foreground mb-4">
                If you receive a damaged or defective product, please contact us within 48 hours of delivery with photos
                as proof. We will offer a replacement or full refund at no additional cost.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">6. Return Shipping</h2>
              <p className="text-foreground mb-4">
                Customers are responsible for return shipping costs unless the return is due to a defect or our error.
                Please ensure items are packaged securely to prevent damage during transit.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">7. Partial Refunds</h2>
              <p className="text-foreground mb-4">
                If an item is returned in used or damaged condition, we may deduct a reasonable depreciation amount from
                the refund. Items returned with missing parts or components will not be refunded at full value.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">8. Return Authorization</h2>
              <p className="text-foreground mb-4">
                Please contact us for a return authorization (RA) number before shipping your return. Items received
                without an RA number may not be processed.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">9. Exceptions</h2>
              <p className="text-foreground mb-4">
                We reserve the right to refuse refunds or returns that clearly violate this policy or show signs of
                abuse, neglect, or misuse beyond normal wear and tear.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">10. Contact Information</h2>
              <p className="text-foreground">
                For returns or refund inquiries, please contact us at:
                <br />
                <strong>Sehgal Store</strong>
                <br />
                23/26 East Patel Nagar
                <br />
                Phone: 9810675566
              </p>
            </section>

            <p className="text-sm text-muted-foreground pt-6 border-t border-border">Last Updated: December 28, 2025</p>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
