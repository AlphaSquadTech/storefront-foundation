import React from "react";
import { StorefrontRootShell } from "@alphasquad/storefront-base/runtime/root-shell";
import Footer from "./footer";
import { Header } from "./header/header";

interface LayoutProps {
  children: React.ReactNode;
}

export default  function RootLayout({ children }: LayoutProps) {
  return (
    <StorefrontRootShell header={<Header />} footer={<Footer />}>
      {children}
    </StorefrontRootShell>
  );
}
