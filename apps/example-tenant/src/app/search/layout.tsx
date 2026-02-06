import type { Metadata } from "next"
import { getStoreName } from "@/app/utils/branding"

export const metadata: Metadata = {
  title: `Search Results - ${getStoreName()}`,
  description: "Search results for products. Find what you're looking for in our catalog.",
  robots: {
    index: false,
    follow: true,
  },
}

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
