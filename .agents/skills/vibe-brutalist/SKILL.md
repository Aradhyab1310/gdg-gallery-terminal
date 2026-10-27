---
name: vibe-brutalist
description: Applies the Brutalist visual style (colors, fonts, spacing, layout, motion) to the portfolio site. Use ONLY when the student names the vibe-brutalist skill or asks for the Brutalist vibe. Never changes the content.
---

# Vibe: Brutalist

## Feel
Raw, confrontational and visually direct, with thick borders, oversized typography and deliberate collisions of scale. Suits punchy creative work without relying on polished interface conventions.

## Design tokens
```css
:root {
  /* Colors (mode: light) */
  --color-bg: #FFF4CF;
  --color-text: #171717;
  --color-muted: #4F4C44;
  --color-accent: #9F2124;
  --color-border: #171717;

  /* Fonts */
  --font-heading: "Archivo Black", sans-serif;
  --font-body: "Space Mono", monospace;

  /* Shape and spacing (density: normal) */
  --radius: 0px;
  --space-1: 4px;
  --space-2: 10px;
  --space-3: 20px;
  --space-4: 36px;
  --space-5: 68px;
  --max-width: 1220px;
}
```
Google Fonts link: `<link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">`

## Layout rules
Layout: tiles
- Hero: Make the real portfolio title giant, blocky and deliberately line-broken; cap the scale so it wraps without horizontal overflow.
- About: Set provided bio inside a stark, ruled rectangular band with heavy black edges and straightforward body typography.
- Projects: Lay out actual projects in loud, asymmetric hard-edged tiles with thick dark borders; content is never replaced by slogans.
- Contact: End with an oversize, hard-bordered contact block showing only genuine links.

## Components
- Hero: Oversized Archivo Black display text, zero corner rounding and an angular rule.
- Project card: Cream or light panel with thick black border, hard offset shadow and strong project name.
- Skill tags: Boxy outlined all-caps tags in Space Mono; real skill labels only.
- Contact block: Tall rectangular closer, oversized actual link text and sharply defined focus ring.

## Motion
Motion: none. No motion; cards and links may change color instantly on focus/hover. Any motion must use only `transform` and `opacity` over 150–300ms; never use `transition: all`, move elements merely because the page loads, or use more than two scroll reveals. Respect `prefers-reduced-motion`: turn off all movement and reveals.

## Do / Don't
Do:
1. Set corners to exactly zero radius.
2. Use very thick borders, strong black ink and intentional scale.
3. Keep the accent red limited to major actions.
4. Make the display type loud but legible on phones.
5. Use hard-edged shapes instead of gradients.

Don't:
1. Round a single project card.
2. Use soft shadows, glass blur or subtle pastel fills.
3. Invent aggressive taglines or stickers.
4. Let type overlap actual links or summaries.
5. Animate elements just to appear more edgy.

## Content rule
All text and projects come from SPEC.md. Never invent content.
