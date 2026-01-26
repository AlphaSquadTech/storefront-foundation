import { permanentRedirect } from "next/navigation";

/**
 * Redirects /contact to the canonical /contact-us URL
 * This prevents duplicate content issues for SEO
 */
export default function ContactRedirect() {
  permanentRedirect("/contact-us");
}
