'use client';

import type React from 'react';

interface RecaptchaProviderProps {
  children: React.ReactNode;
}

// Provider for future reCAPTCHA script injection
// Currently a pass-through; will inject scripts based on dynamic config
export default function RecaptchaProvider({ children }: RecaptchaProviderProps) {
  return <>{children}</>;
}