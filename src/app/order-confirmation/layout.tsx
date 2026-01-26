import type { Metadata } from "next"
import { getStoreName } from "@/app/utils/branding"

export const metadata: Metadata = {
  title: `Order Confirmation - ${getStoreName()}`,
  description: "Your order has been confirmed. View order details, tracking information, and estimated delivery date.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function OrderConfirmationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}