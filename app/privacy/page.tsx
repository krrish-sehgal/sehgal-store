import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft } from "lucide-react"

export const metadata = {
  title: "Privacy Policy | Sehgal Store",
  description: "Privacy Policy for Sehgal Store",
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <header className="border-b border-border bg-card/50 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-4">
            <ChevronLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-primary">Privacy Policy</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Sehgal Store - Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">1. Introduction</h2>
              <p className="text-foreground mb-4">
                Sehgal Store (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your
                privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
                you visit our website and make payments.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">2. Information We Collect</h2>
              <p className="text-foreground mb-2">
                We may collect information about you in a variety of ways, including:
              </p>
              <ul className="list-disc list-inside text-foreground space-y-2">
                <li>Personal identification information (name, email, phone number, address)</li>
                <li>Payment information processed through Razorpay</li>
                <li>Device information and usage data</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">3. Use of Your Information</h2>
              <p className="text-foreground mb-2">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-foreground space-y-2">
                <li>Process and complete transactions</li>
                <li>Send transactional and promotional communications</li>
                <li>Improve our services and website</li>
                <li>Comply with legal obligations</li>
                <li>Prevent fraud and enhance security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">4. Payment Processing</h2>
              <p className="text-foreground mb-4">
                Payment processing is handled by Razorpay, a PCI DSS compliant payment gateway. We do not store your
                payment card information. Razorpay maintains the security of your payment details according to industry
                standards.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">5. Data Security</h2>
              <p className="text-foreground mb-4">
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. All data transmission is encrypted
                using SSL/TLS protocols.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">6. Third-Party Services</h2>
              <p className="text-foreground mb-4">
                We use third-party services including Razorpay for payment processing. These third parties have their
                own privacy policies, and we encourage you to review them.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">7. Your Rights</h2>
              <p className="text-foreground mb-4">
                You have the right to access, correct, or delete your personal information. To exercise these rights,
                please contact us using the contact information provided below.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">8. Contact Information</h2>
              <p className="text-foreground">
                For any privacy-related questions, please contact us at:
                <br />
                <strong>Sehgal Store</strong>
                <br />
                23/26 East Patel Nagar
                <br />
                Phone: 9810675566
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">9. Changes to This Policy</h2>
              <p className="text-foreground">
                We may update this Privacy Policy from time to time. We will notify you of any changes by updating the
                effective date below.
              </p>
            </section>

            <p className="text-sm text-muted-foreground pt-6 border-t border-border">Last Updated: December 28, 2025</p>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
