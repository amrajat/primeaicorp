/**
 * Deploy the Astro Cloudflare Worker (dist/server), merging CI/build env into wrangler vars
 * so RESEND_* from Dashboard → Builds → Variables are available at request time.
 */
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const serverDir = join(root, "dist/server");
const wranglerPath = join(serverDir, "wrangler.json");
const entryPath = join(serverDir, "entry.mjs");

if (!existsSync(entryPath)) {
  console.error(
    "deploy-cloudflare: missing dist/server/entry.mjs — run npm run build first.",
  );
  process.exit(1);
}

const config = JSON.parse(readFileSync(wranglerPath, "utf8"));

const VAR_KEYS = ["FORM_NOTIFY_EMAIL", "RESEND_FROM", "RESEND_API_KEY"];
const vars = { ...(config.vars ?? {}) };

for (const key of VAR_KEYS) {
  const value = process.env[key]?.trim();
  if (value) vars[key] = value;
}

config.vars = vars;
writeFileSync(wranglerPath, JSON.stringify(config, null, 2));

if (!vars.RESEND_API_KEY) {
  console.warn(
    "deploy-cloudflare: RESEND_API_KEY is not set in the build environment. " +
      "Add it under Workers → Settings → Builds → Variables and secrets, then redeploy.",
  );
}

const result = spawnSync(
  "npx",
  ["wrangler", "deploy", "--config", "wrangler.json"],
  { cwd: serverDir, stdio: "inherit", env: process.env },
);

process.exit(result.status === null ? 1 : result.status);
