import type { Metadata } from "next";
import Link from "next/link";
import { getStoreName } from "./utils/branding";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for could not be found.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-4 py-16 md:py-24">
      <div className="text-center max-w-lg mx-auto">
        <p className="text-[var(--color-primary-600)] font-semibold text-lg mb-2">
          404
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-primary text-[var(--color-secondary-800)] mb-4">
          PAGE NOT FOUND
        </h1>
        <p className="text-[var(--color-secondary-600)] font-secondary text-base md:text-lg mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. The
          page may have been moved, deleted, or never existed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-primary-600)] text-white font-secondary font-medium hover:bg-[var(--color-primary-700)] transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/products/all"
            className="inline-flex items-center justify-center px-6 py-3 border border-[var(--color-secondary-300)] text-[var(--color-secondary-800)] font-secondary font-medium hover:bg-[var(--color-secondary-100)] transition-colors"
          >
            Browse Products
          </Link>
        </div>
        <div className="mt-12 pt-8 border-t border-[var(--color-secondary-200)]">
          <p className="text-[var(--color-secondary-500)] font-secondary text-sm mb-4">
            Looking for something specific?
          </p>
          <div className="flex flex-wrap gap-3 justify-center text-sm">
            <Link
              href="/category"
              className="text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)] hover:underline"
            >
              Categories
            </Link>
            <span className="text-[var(--color-secondary-300)]">|</span>
            <Link
              href="/brands"
              className="text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)] hover:underline"
            >
              Brands
            </Link>
            <span className="text-[var(--color-secondary-300)]">|</span>
            <Link
              href="/contact-us"
              className="text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)] hover:underline"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
