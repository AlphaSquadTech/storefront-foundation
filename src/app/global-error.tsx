"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("[Global Error Boundary]", error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          }}
        >
          <div style={{ textAlign: "center", maxWidth: "500px" }}>
            <h1
              style={{
                fontSize: "4rem",
                fontWeight: "bold",
                color: "#dc2626",
                margin: "0 0 1rem 0",
              }}
            >
              500
            </h1>
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                color: "#1f2937",
                margin: "0 0 1rem 0",
              }}
            >
              Server Error
            </h2>
            <p
              style={{
                color: "#6b7280",
                marginBottom: "2rem",
              }}
            >
              An unexpected error occurred. Our team has been notified and we
              are working to fix the issue.
            </p>

            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={reset}
                style={{
                  padding: "0.75rem 1.5rem",
                  backgroundColor: "#2563eb",
                  color: "white",
                  border: "none",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
              >
                Try Again
              </button>
              <a
                href="/"
                style={{
                  padding: "0.75rem 1.5rem",
                  border: "1px solid #d1d5db",
                  color: "#374151",
                  textDecoration: "none",
                  fontWeight: "500",
                }}
              >
                Go to Home
              </a>
            </div>

            {process.env.NODE_ENV === "development" && error.message && (
              <div
                style={{
                  marginTop: "2rem",
                  padding: "1rem",
                  backgroundColor: "#fef2f2",
                  border: "1px solid #fecaca",
                  borderRadius: "0.25rem",
                  textAlign: "left",
                }}
              >
                <p
                  style={{
                    fontSize: "0.875rem",
                    fontFamily: "monospace",
                    color: "#b91c1c",
                    wordBreak: "break-all",
                    margin: 0,
                  }}
                >
                  {error.message}
                </p>
                {error.digest && (
                  <p
                    style={{
                      fontSize: "0.75rem",
                      color: "#ef4444",
                      marginTop: "0.5rem",
                      marginBottom: 0,
                    }}
                  >
                    Error ID: {error.digest}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </body>
    </html>
  );
}
