---
name: vibe-pixel
description: Applies the Pixel visual style (colors, fonts, spacing, layout, motion) to the portfolio site. Use ONLY when the student names the vibe-pixel skill or asks for the Pixel vibe. Never changes the content.
---

# Vibe: Pixel

## Feel
An energetic 8-bit game menu built from chunky typography, sharp pixels and simple states. Suits playful technical portfolios that want an arcade feeling without disrupting navigation.

## Design tokens
```css
:root {
  /* Colors (mode: dark) */
  --color-bg: #141324;
  --color-text: #FAF9EE;
  --color-muted: #C7C3D8;
  --color-accent: #FFD26A;
  --color-border: #61577E;

  /* Fonts */
  --font-heading: "Press Start 2P", monospace;
  --font-body: "VT323", monospace;

  /* Shape and spacing (density: compact) */
  --radius: 0px;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 16px;
  --space-4: 28px;
  --space-5: 56px;
  --max-width: 1060px;
}
```
Google Fonts link: `<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap" rel="stylesheet">`

## Layout rules
Layout: tiles
- Hero: Make the real name an 8-bit title with a visible `PRESS START` interface control that jumps to actual projects or the first existing section; this is action text, not invented personal content.
- About: Present actual bio text inside a rectangular dialog/menu panel using VT323 at 18px or larger.
- Projects: Show real projects as selectable, keyboard-accessible game-menu entries, not fake levels or unlocked achievements.
- Contact: Put the true contact methods under a clearly delineated final menu panel; never invent player stats or a high-score board.

## Components
- Hero: Pixel heading in Press Start 2P, an actionable `PRESS START` anchor, and no fake storyline.
- Project card: Hard-edged pixel-border card with a visible focus state, project title and real summary.
- Skill tags: Rectangular 8-bit item tags, readable at body size.
- Contact block: Arcade menu box with actual links in an accessible list; no faux game score.

## Motion
Motion: none. No animation; instant focus and hover states emulate a classic menu selector, and reduced motion is inherently satisfied. Any motion must use only `transform` and `opacity` over 150–300ms; never use `transition: all`, move elements merely because the page loads, or use more than two scroll reveals. Respect `prefers-reduced-motion`: turn off all movement and reveals.

## Do / Don't
Do:
1. Use Press Start 2P for short headlines and VT323 for paragraphs, with all VT323 body text at 18px or larger; it renders much smaller than other fonts at 16px.
2. Make PRESS START a functioning anchor to an existing section.
3. Use chunky 90-degree borders and high-contrast color.
4. Keep all navigation usable by keyboard and on touch screens.
5. Scale headings to avoid 320px overflow.

Don't:
1. Invent achievements, scores, levels or character classes.
2. Make faux menu items that cannot be activated.
3. Use blinking text or flashing backgrounds.
4. Set long summaries in tiny bitmap display type.
5. Use pixel art assets unless provided in SPEC.md.

## Content rule
All text and projects come from SPEC.md. Never invent content.
