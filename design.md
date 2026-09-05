# FERCHX — Press Kit / Design Direction

Bilingual (ES/EN) one-page electronic press kit for **FerchX**, DJ & producer from Saltillo, México.
Tech house · melodic house. Reference vibe: dark, minimal, typographic (like the Payän press kit),
with an **emerald green** accent instead of red.

## Principles

- The photos are dark, red-lit club shots. The UI stays near-black so the images are the only warm
  light on the page. Emerald is the interface color; red only exists inside the photography.
- Editorial, not "web page": numbered section labels, hairline rules, huge type, lots of black space.
- Nothing decorative. Every accent means something (active state, link, CTA).

## Color

| Token | Value | Use |
|---|---|---|
| `--bg` | `#07080A` | page background |
| `--bg-elev` | `#0D0F12` | cards, rider block, embeds |
| `--fg` | `#F2F3F0` | primary text |
| `--fg-dim` | `#8A8F8B` | secondary text, labels |
| `--line` | `rgba(242,243,240,0.10)` | hairline rules and borders |
| `--accent` | `#00E58C` | emerald — links, active nav, CTA, numerals |
| `--accent-deep` | `#04B36F` | hover / gradients |

Accent is used at ~3% of surface area. Glow: soft emerald radial at 6–10% opacity behind the hero
and section transitions. A fine grain overlay (SVG turbulence, 3% opacity) sits over the whole page
so black never looks flat.

## Typography

- **Display** — `Archivo`, weight 900, uppercase, tracking `-0.04em`. Hero wordmark clamps up to
  `clamp(4rem, 19vw, 17rem)` and bleeds edge to edge.
- **Body** — `Archivo`, weight 400, `1.7` line height, max width `62ch`.
- **Micro/labels** — `JetBrains Mono`, weight 500, uppercase, tracking `0.22em`, `11–12px`. Used for
  nav, section numbers (`01 — ESCUCHA`), rider specs, captions.
- Never mix more than these three roles.

## Layout

- Single scroll page, sections separated by a 1px `--line` rule, not by cards.
- Sticky top bar: wordmark left, anchor nav center-right, `ES / EN` toggle far right.
- Section header pattern: mono kicker (left) + display title (below), asymmetric — content column
  starts at the 3rd of 12 columns on desktop, full width on mobile.
- Gallery: asymmetric grid (one tall + two stacked), click opens a full-bleed lightbox.
- Rider: two-column mono spec list, `label — value`, hairline between rows.

## Motion

One orchestrated page load: hero wordmark letters/blocks stagger up (60ms apart, 700ms,
`cubic-bezier(.16,1,.3,1)`). Everything below reveals on scroll via IntersectionObserver — 24px
translate + opacity, once only. Marquee of genres/venues scrolls infinitely at low speed.
`prefers-reduced-motion` disables all of it.

## Language

`ES` is default. All copy lives in one dictionary (`lib/copy.ts`) with `es` / `en` keys — the toggle
swaps the object, no routing. `<html lang>` updates with the choice.

## Anti-patterns for this project

No rounded cards, no drop shadows, no purple, no gradient-on-white, no stock icon rows, no
centered-everything hero.
