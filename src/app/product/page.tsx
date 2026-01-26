import { redirect } from "next/navigation";

/**
 * Generic /product page redirects to /products/all
 * Individual products are accessed via /product/[id]
 */
export default function ProductPage() {
  redirect("/products/all");
}
