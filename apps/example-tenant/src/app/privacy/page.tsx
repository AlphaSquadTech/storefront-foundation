import { permanentRedirect } from "next/navigation";

/**
 * Redirects /privacy to the canonical /privacy-policy URL
 * This prevents duplicate content issues for SEO
 */
export default function PrivacyRedirect() {
  permanentRedirect("/privacy-policy");
}
