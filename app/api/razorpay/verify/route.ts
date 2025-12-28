import { type NextRequest, NextResponse } from "next/server"
import crypto from "crypto"

export async function POST(request: NextRequest) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await request.json()

    // Validate required fields
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json({ error: "Missing payment details" }, { status: 400 })
    }

    // Get Razorpay secret from environment
    const razorpaySecret = process.env.RAZORPAY_KEY_SECRET
    if (!razorpaySecret) {
      return NextResponse.json({ error: "Razorpay secret not configured" }, { status: 500 })
    }

    // Create signature
    const text = `${razorpay_order_id}|${razorpay_payment_id}`
    const generatedSignature = crypto
      .createHmac("sha256", razorpaySecret)
      .update(text)
      .digest("hex")

    // Verify signature
    const isSignatureValid = generatedSignature === razorpay_signature

    if (!isSignatureValid) {
      return NextResponse.json(
        {
          verified: false,
          error: "Invalid payment signature",
        },
        { status: 400 }
      )
    }

    // Payment is verified
    return NextResponse.json({
      verified: true,
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
      message: "Payment verified successfully",
    })
  } catch (error: any) {
    console.error("Payment verification error:", error)
    return NextResponse.json(
      {
        verified: false,
        error: error?.message || "Failed to verify payment",
      },
      { status: 500 }
    )
  }
}

