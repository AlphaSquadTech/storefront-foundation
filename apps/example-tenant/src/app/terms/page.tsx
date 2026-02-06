import { permanentRedirect } from "next/navigation";

/**
 * Redirects /terms to the canonical /terms-and-conditions URL
 * This prevents duplicate content issues for SEO
 */
export default function TermsRedirect() {
  permanentRedirect("/terms-and-conditions");
}
