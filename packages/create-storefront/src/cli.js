#!/usr/bin/env node

import { mkdir, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const [targetArg] = process.argv.slice(2);

if (!targetArg) {
  console.error("Usage: create-storefront <tenant-directory>");
  process.exit(1);
}

const cwd = process.cwd();
const targetDir = path.resolve(cwd, targetArg);

async function exists(dir) {
  try {
    await stat(dir);
    return true;
  } catch {
    return false;
  }
}

async function write(filePath, content) {
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, content, "utf8");
}

async function ensureEmptyOrCreate(dirPath) {
  if (!(await exists(dirPath))) {
    await mkdir(dirPath, { recursive: true });
    return;
  }

  const entries = await readdir(dirPath);
  if (entries.length === 0) {
    return;
  }

  console.error(`Target directory already exists and is not empty: ${dirPath}`);
  process.exit(1);
}

const tenantName = path.basename(targetDir).toLowerCase();

const packageJson = {
  name: `@alphasquad/${tenantName}`,
  version: "0.1.0",
  private: true,
  scripts: {
    dev: "next dev",
    build: "next build",
    start: "next start"
  },
  dependencies: {
    "@alphasquad/storefront-base": "^0.2.0",
    "@alphasquad/storefront-config": "^0.2.0",
    next: "15.4.10",
    react: "19.1.0",
    "react-dom": "19.1.0"
  },
  devDependencies: {
    typescript: "^5.9.2",
    "@types/react": "^19.1.13",
    "@types/node": "^24.3.0"
  }
};

const configTs = `import type { TenantStorefrontConfig } from "@alphasquad/storefront-config";

export const storefrontConfig: TenantStorefrontConfig = {
  branding: {
    tenantName: "${tenantName}",
    storeName: "${tenantName.replace(/-/g, " ")} Store",
  },
  theme: {
    palette: "base-template",
  },
  integrations: {
    apiUrl: process.env.NEXT_PUBLIC_API_URL || "",
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  },
};
`;

const layoutTsx = `import type { Metadata, Viewport } from "next";
import { buildBaseMetadata, buildBaseViewport } from "@alphasquad/storefront-base";
import { storefrontConfig } from "../storefront.config";

export const metadata: Metadata = buildBaseMetadata(storefrontConfig);
export const viewport: Viewport = buildBaseViewport();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
`;

const pageTsx = `export default function Page() {
  return <main>Storefront tenant is ready.</main>;
}
`;

const envExample = `NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_SITE_URL=http://localhost:3000
`;

const tsconfig = `{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }]
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
`;

const nextConfig = `import { createBaseNextConfig } from "@alphasquad/storefront-base/runtime/next-config";

const nextConfig = createBaseNextConfig();
nextConfig.transpilePackages = ["@alphasquad/storefront-base", "@alphasquad/storefront-config"];

export default nextConfig;
`;

try {
  await ensureEmptyOrCreate(targetDir);

  await write(path.join(targetDir, "package.json"), `${JSON.stringify(packageJson, null, 2)}\n`);
  await write(path.join(targetDir, "storefront.config.ts"), configTs);
  await write(path.join(targetDir, "app/layout.tsx"), layoutTsx);
  await write(path.join(targetDir, "app/page.tsx"), pageTsx);
  await write(path.join(targetDir, "next.config.ts"), nextConfig);
  await write(path.join(targetDir, "tsconfig.json"), tsconfig);
  await write(path.join(targetDir, ".env.example"), envExample);

  console.log(`Storefront scaffold created at ${targetDir}`);
  console.log("Run: npm install && npm run dev");
} catch (error) {
  console.error("Failed to create storefront:", error);
  process.exit(1);
}
