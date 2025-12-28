import { type NextRequest, NextResponse } from "next/server"
import Razorpay from "razorpay"

export async function POST(request: NextRequest) {
  try {
    const { amount } = await request.json()

    // Validate amount
    if (!amount || amount <= 0) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 })
    }

    // Ensure we have Razorpay credentials
    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      return NextResponse.json({ error: "Razorpay credentials not configured" }, { status: 500 })
    }

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    })

    // Amount should already be in paise (smallest currency unit) from frontend
    // If frontend sends in rupees, multiply by 100
    const amountInPaise = typeof amount === "number" && amount < 1000 ? amount * 100 : amount

    const order = await razorpay.orders.create({
      amount: amountInPaise, // amount in the smallest currency unit (paise)
      currency: "INR",
      payment_capture: 1, // auto capture the payment
    })

    return NextResponse.json({
      orderId: order.id,
      amount: amountInPaise,
      message: "Order created successfully",
    })
  } catch (error: any) {
    console.error("Razorpay order creation error:", error)
    return NextResponse.json(
      { error: error?.error?.description || "Failed to create order" },
      { status: 500 }
    )
  }
}
