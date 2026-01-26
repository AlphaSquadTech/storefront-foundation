import type { Metadata } from "next"
import { getStoreName } from "@/app/utils/branding"
import AccountLayoutClient from "./AccountLayoutClient"

export const metadata: Metadata = {
  title: `My Account - ${getStoreName()}`,
  description: "Manage your account settings, view order history, and update your address book.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AccountLayoutClient>{children}</AccountLayoutClient>
}
