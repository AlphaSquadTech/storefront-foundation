"use client";

import { useState, useEffect, useCallback } from "react";

interface AuthorizeNetResponse {
  messages: {
    resultCode: string;
    message?: Array<{ text: string }>;
  };
  opaqueData?: {
    dataValue: string;
  };
}

declare global {
  interface Window {
    Accept: {
      dispatchData: (
        secureData: Record<string, unknown>,
        callback: (response: AuthorizeNetResponse) => void
      ) => void;
    };
  }
}

interface UseAcceptJsReturn {
  isLoaded: boolean;
  isLoading: boolean;
  error: Error | null;
  loadAcceptJs: () => Promise<void>;
}

const ACCEPT_JS_URL = process.env.NEXT_PUBLIC_AUTHORIZE_NET_ENV === 'production'
  ? 'https://js.authorize.net/v1/Accept.js'
  : 'https://jstest.authorize.net/v1/Accept.js';

/**
 * Hook to load Authorize.Net Accept.js only when needed
 * This improves page performance by not loading the script globally
 */
export function useAcceptJs(): UseAcceptJsReturn {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // Check if Accept.js is already loaded
  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.Accept !== "undefined") {
      setIsLoaded(true);
    }
  }, []);

  const loadAcceptJs = useCallback(async () => {
    // Already loaded
    if (typeof window.Accept !== "undefined") {
      setIsLoaded(true);
      return;
    }

    // Already loading
    if (isLoading) {
      return;
    }

    // Check if script tag already exists
    const existingScript = document.querySelector(
      `script[src="${ACCEPT_JS_URL}"]`
    );
    if (existingScript) {
      // Wait for it to load
      return new Promise<void>((resolve, reject) => {
        existingScript.addEventListener("load", () => {
          setIsLoaded(true);
          resolve();
        });
        existingScript.addEventListener("error", () => {
          const err = new Error("Failed to load Accept.js");
          setError(err);
          reject(err);
        });
      });
    }

    setIsLoading(true);
    setError(null);

    return new Promise<void>((resolve, reject) => {
      const script = document.createElement("script");
      script.src = ACCEPT_JS_URL;
      script.async = true; // Load asynchronously to not block rendering

      script.onload = () => {
        setIsLoaded(true);
        setIsLoading(false);
        resolve();
      };

      script.onerror = () => {
        const err = new Error("Failed to load Authorize.Net Accept.js");
        setError(err);
        setIsLoading(false);
        reject(err);
      };

      document.head.appendChild(script);
    });
  }, [isLoading]);

  return {
    isLoaded,
    isLoading,
    error,
    loadAcceptJs,
  };
}

export type { AuthorizeNetResponse };
