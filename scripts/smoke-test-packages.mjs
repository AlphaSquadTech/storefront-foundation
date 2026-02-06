import { execSync } from "node:child_process";
import { mkdtemp, mkdir, readFile, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

function run(command, cwd, env = {}) {
  execSync(command, {
    cwd,
    env: { ...process.env, ...env },
    stdio: "inherit",
  });
}

function runCapture(command, cwd) {
  return execSync(command, {
    cwd,
    env: process.env,
    stdio: ["ignore", "pipe", "inherit"],
    encoding: "utf8",
  });
}

async function packWorkspacePackage(packageName, packageDir, destinationDir) {
  const output = runCapture(
    `npm pack --json --pack-destination \"${destinationDir}\"`,
    packageDir,
  );
  const packed = JSON.parse(output);
  const filename = packed[0]?.filename;

  if (!filename) {
    throw new Error(`Failed to pack ${packageName}`);
  }

  return path.join(destinationDir, filename);
}

async function main() {
  const scratchDir = await mkdtemp(path.join(tmpdir(), "storefront-smoke-"));
  const packsDir = path.join(scratchDir, "packs");
  await mkdir(packsDir, { recursive: true });

  const configTarball = await packWorkspacePackage(
    "@alphasquad/storefront-config",
    path.join(repoRoot, "packages/storefront-config"),
    packsDir,
  );

  const baseTarball = await packWorkspacePackage(
    "@alphasquad/storefront-base",
    path.join(repoRoot, "packages/storefront-base"),
    packsDir,
  );

  const tenantDir = path.join(scratchDir, "tenant-smoke");
  run(`node \"${path.join(repoRoot, "packages/create-storefront/src/cli.js")}\" \"${tenantDir}\"`, repoRoot);

  const packageJsonPath = path.join(tenantDir, "package.json");
  const packageJson = JSON.parse(await readFile(packageJsonPath, "utf8"));
  packageJson.dependencies["@alphasquad/storefront-config"] = `file:${configTarball}`;
  packageJson.dependencies["@alphasquad/storefront-base"] = `file:${baseTarball}`;
  await writeFile(packageJsonPath, `${JSON.stringify(packageJson, null, 2)}\n`, "utf8");

  run("npm install", tenantDir);
  run("npm run build", tenantDir);

  process.stdout.write(`Smoke test passed in ${tenantDir}\n`);
}

main().catch((error) => {
  console.error("Smoke test failed", error);
  process.exit(1);
});
