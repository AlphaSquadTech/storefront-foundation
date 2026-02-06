import bundleAnalyzer from "@next/bundle-analyzer";
import { createBaseNextConfig } from "@alphasquad/storefront-base/runtime/next-config";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = createBaseNextConfig();

export default withBundleAnalyzer(nextConfig);
