import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const keyId = process.env.RAZORPAY_KEY_ID

    if (!keyId) {
      return NextResponse.json({ error: "Razorpay key not configured" }, { status: 500 })
    }

    return NextResponse.json({ keyId })
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch configuration" }, { status: 500 })
  }
}
