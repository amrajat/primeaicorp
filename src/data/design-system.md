# Prime AI design system

## Typography — Geist Serif + Geist Pixel

Self-hosted `GeistSerifVF.woff2` (body, headings, UI) and `GeistPixelVF.woff2` (kickers, stats, ruler, step indices).

Geist Pixel uses a separate **ELSH** axis: Square `1`, Grid `40`, Line `80` (see `.font-pixel-*` in `global.css`).

### Glyphs / stylistic sets — what they are (not icons)

These are **still text in your font**, not SVG or emoji icons. The browser draws letters differently when you change OpenType settings.

| Term | Meaning on this site |
|------|----------------------|
| **Glyphs** | The actual letter shapes (e.g. the curve of **g**, the dot on **i**). Geist Serif’s **ELSH** axis morphs those shapes. |
| **Stylistic sets (`ss01`, `ss02`, …)** | Optional alternate glyphs in some fonts. Geist Serif’s docs focus on **ELSH**, not `ss0x`; we use ELSH via CSS classes below. |
| **`liga` / `calt`** | Standard features: ligatures and contextual alternates (e.g. nicer **fi** pairs). Enabled on `body` in `global.css`. |

Shape variants use the **ELSH** variation axis (not separate font files):

| Class | ELSH | Use |
|-------|------|-----|
| `.font-elsh-regular` | 0 | Body, buttons, forms |
| `.font-elsh-square` | 25 | Display headings, logo wordmark |
| `.font-elsh-triangle` | 50 | Optional serif accent (rare) |
| `.section-kicker` / `.section-label` | Pixel Grid (40) | Page section kickers |
| `.stat-value` / `.step-index` | Pixel Square (1) | Hero stats, process `01`–`05` |
| `.type-eyebrow` | Pixel Grid (40) | Footer column labels |
| `.text-instrument` | Pixel Square (1) | Inline terms inside serif **p** / **lead** |
| `.copy-bridge` | Pixel Grid (40) | One-line supporting **p** under headings |
| `.p-instrument` | Pixel Grid (40) | Short 2–3 line **p** blocks (sidebars, cards) |
| `.copy-caption` | Pixel Grid (40) | Stat labels, durations, license hints |
| `.chip-instrument` | Pixel Square (1) | Technique / tag chips |
| `.font-elsh-heart` | 100 | Hero emphasis word(s) — e.g. **weights** (heart-style **g**) |

**How to confirm in the browser**

1. Open the homepage and compare the hero word **weights** to the same word in a normal text field (ELSH 0): the **g** should look different (heart variant).
2. DevTools → select the **weights** span → **Computed** → check `font-variation-settings` is `"ELSH" 100` and `font-family` is Geist Serif.
3. Toggle the class in Elements: remove `font-elsh-heart` and the letter shapes revert — proof it’s the font, not an image.

OpenType: `kern`, `liga`, `calt` on body; `tnum` on stats.

## Color — cream monochrome only

No blue or green. All emphasis uses **primary** cream:

| Token | Hex / value |
|-------|----------------|
| primary | `#e5e0d6` |
| primary-hover | `#f2ede5` |
| primary-muted | `rgb(229 224 214 / 0.14)` |

`accent` / `secondary` utilities alias **primary**.
