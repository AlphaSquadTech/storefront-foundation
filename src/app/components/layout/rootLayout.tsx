import React from "react";
import Footer from "./footer";
import { Header } from "./header/header";

interface LayoutProps {
  children: React.ReactNode;
}

export default  function RootLayout({ children }: LayoutProps) {

  return (
    <div className="min-h-screen">
      {/* Skip to main content — accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* Sticky Header */}
      <div className="sticky top-0 z-20">
        <Header />
      </div>

      {/* Main Content */}
      <main id="main-content" className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
