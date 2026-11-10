import { createRequire } from "node:module";
import { readFileSync, writeFileSync } from "node:fs";

const fontkit = createRequire(import.meta.url)("fontkit");

const ELSH = 40; // matches .site-wordmark (font-pixel-grid)
const font = fontkit.create(
  readFileSync("public/fonts/GeistPixelVF.woff2"),
);
const glyphId = font.glyphForCodePoint(0x50).id;
font.variationCoords = [ELSH];
const glyph = font.getGlyph(glyphId);
const { minX, minY, maxX, maxY } = glyph.bbox;
const gw = maxX - minX;
const gh = maxY - minY;

const displaySize = 15;
const scale = displaySize / Math.max(gw, gh);
const cx = 16;
const cy = 16.5;
const tx = cx - (minX + gw / 2) * scale;
const ty = cy + (minY + gh / 2) * scale;

const d = glyph.path.toSVG();
if (d.includes("NaN") || !/^M[\d.-]/.test(d.trim())) {
  throw new Error("Invalid glyph path from Geist Pixel");
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="img" aria-label="Prime AI">
  <!-- Geist Pixel “P”, ELSH ${ELSH} — from public/fonts/GeistPixelVF.woff2 -->
  <circle cx="16" cy="16" r="16" fill="#e5e0d6" />
  <g transform="translate(${tx.toFixed(3)},${ty.toFixed(3)}) scale(${scale.toFixed(4)},${-scale.toFixed(4)})">
    <path fill="#0a0a0b" d="${d}" />
  </g>
</svg>
`;

writeFileSync("public/favicon.svg", svg);
console.log(
  `Wrote public/favicon.svg (Geist Pixel P, ELSH ${ELSH}, ${Math.round(d.length / 1024)}KB path)`,
);
