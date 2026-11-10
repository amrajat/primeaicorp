import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const from = (rel) => join(root, "node_modules/geist/dist/fonts", rel);
const to = (name) => join(root, "public/fonts", name);

const pairs = [
  ["geist-serif/GeistSerifVF.woff2", "GeistSerifVF.woff2"],
  ["geist-pixel/GeistPixelVF.woff2", "GeistPixelVF.woff2"],
];

mkdirSync(join(root, "public/fonts"), { recursive: true });
for (const [src, dest] of pairs) {
  copyFileSync(from(src), to(dest));
  console.log(`copied ${dest}`);
}
