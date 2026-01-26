"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("[Error Boundary]", error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16">
      <div className="text-center max-w-lg">
        <h1 className="text-6xl font-bold text-[var(--color-primary)] mb-4">
          Oops!
        </h1>
        <h2 className="text-2xl font-semibold text-[var(--color-secondary-800)] mb-4">
          Something went wrong
        </h2>
        <p className="text-[var(--color-secondary-600)] mb-8">
          We encountered an unexpected error. Please try again or return to the
          home page.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-[var(--color-primary)] text-white font-medium hover:bg-[var(--color-primary-600)] transition-colors duration-200"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-6 py-3 border border-[var(--color-secondary-300)] text-[var(--color-secondary-700)] font-medium hover:bg-[var(--color-secondary-100)] transition-colors duration-200"
          >
            Go to Home
          </Link>
        </div>

        {process.env.NODE_ENV === "development" && error.message && (
          <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded text-left">
            <p className="text-sm font-mono text-red-700 break-all">
              {error.message}
            </p>
            {error.digest && (
              <p className="text-xs text-red-500 mt-2">
                Error ID: {error.digest}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
