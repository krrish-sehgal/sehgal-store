import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft } from "lucide-react"

export const metadata = {
  title: "Terms & Conditions | Sehgal Store",
  description: "Terms & Conditions for Sehgal Store",
}

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <header className="border-b border-border bg-card/50 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-4">
            <ChevronLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-primary">Terms & Conditions</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Sehgal Store - Terms & Conditions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">1. Acceptance of Terms</h2>
              <p className="text-foreground mb-4">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this
                agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">2. License</h2>
              <p className="text-foreground mb-4">
                Sehgal Store grants you a limited, revocable, non-exclusive license to access and use our website for
                personal, non-commercial purposes only.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">3. User Responsibilities</h2>
              <p className="text-foreground mb-2">You agree that you are responsible for:</p>
              <ul className="list-disc list-inside text-foreground space-y-2">
                <li>Providing accurate and complete information</li>
                <li>Maintaining the confidentiality of your account</li>
                <li>Not using the site for illegal purposes</li>
                <li>Not attempting to gain unauthorized access</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">4. Payment Terms</h2>
              <p className="text-foreground mb-4">
                All payments are processed through Razorpay. By making a payment, you agree to Razorpay's terms and
                conditions. Payment is due at the time of transaction. We accept payments via Razorpay and UPI.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">5. Product Information</h2>
              <p className="text-foreground mb-4">
                We make every effort to provide accurate product information and pricing. However, we do not warrant
                that product descriptions, pricing, or availability are accurate, complete, or error-free.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">6. Limitation of Liability</h2>
              <p className="text-foreground mb-4">
                In no event shall Sehgal Store or its suppliers be liable for any direct, indirect, incidental, special,
                consequential, or punitive damages arising from your use of or inability to use the website or services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">7. Intellectual Property Rights</h2>
              <p className="text-foreground mb-4">
                All content on this website, including text, graphics, logos, images, and software, is the property of
                Sehgal Store or its content suppliers and protected by international copyright laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">8. Governing Law</h2>
              <p className="text-foreground mb-4">
                These terms and conditions are governed by and construed in accordance with the laws of India, and you
                irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">9. Contact Information</h2>
              <p className="text-foreground">
                If you have any questions about these Terms & Conditions, please contact us at:
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
