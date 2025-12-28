import { type NextRequest, NextResponse } from "next/server"
import crypto from "crypto"
import Razorpay from "razorpay"

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const signature = request.headers.get("x-razorpay-signature")

    if (!signature) {
      return NextResponse.json({ error: "Missing signature" }, { status: 400 })
    }

    const razorpaySecret = process.env.RAZORPAY_KEY_SECRET
    if (!razorpaySecret) {
      return NextResponse.json({ error: "Razorpay secret not configured" }, { status: 500 })
    }

    // Verify webhook signature
    const generatedSignature = crypto.createHmac("sha256", razorpaySecret).update(body).digest("hex")

    if (generatedSignature !== signature) {
      return NextResponse.json({ error: "Invalid webhook signature" }, { status: 401 })
    }

    const event = JSON.parse(body)

    // Handle different webhook events
    switch (event.event) {
      case "payment.captured":
        // Payment was successfully captured
        console.log("Payment captured:", event.payload.payment.entity)
        // TODO: Update order status in your database
        // await updateOrderStatus(event.payload.payment.entity.order_id, "paid")
        break

      case "payment.failed":
        // Payment failed
        console.log("Payment failed:", event.payload.payment.entity)
        // TODO: Update order status in your database
        // await updateOrderStatus(event.payload.payment.entity.order_id, "failed")
        break

      case "order.paid":
        // Order was paid
        console.log("Order paid:", event.payload.order.entity)
        // TODO: Update order status in your database
        // await updateOrderStatus(event.payload.order.entity.id, "paid")
        break

      default:
        console.log("Unhandled webhook event:", event.event)
    }

    return NextResponse.json({ received: true })
  } catch (error: any) {
    console.error("Webhook processing error:", error)
    return NextResponse.json(
      { error: error?.message || "Failed to process webhook" },
      { status: 500 }
    )
  }
}

