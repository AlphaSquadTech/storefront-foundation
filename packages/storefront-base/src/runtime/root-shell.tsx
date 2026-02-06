import type React from "react";

interface StorefrontRootShellProps {
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
}

export function StorefrontRootShell({
  children,
  header,
  footer,
}: StorefrontRootShellProps) {
  return (
    <div className="min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded focus:shadow-lg"
      >
        Skip to main content
      </a>

      <div className="sticky top-0 z-20">{header}</div>

      <main id="main-content" className="min-h-screen">
        {children}
      </main>

      {footer}
    </div>
  );
}
