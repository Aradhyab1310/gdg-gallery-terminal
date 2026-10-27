---
name: vibe-soft-pastel
description: Applies the Soft Pastel visual style (colors, fonts, spacing, layout, motion) to the portfolio site. Use ONLY when the student names the vibe-soft-pastel skill or asks for the Soft Pastel vibe. Never changes the content.
---

# Vibe: Soft Pastel

## Feel
Warmhearted, approachable and playful, with pastel surfaces and soft, rounded forms. A welcoming choice for creative or student portfolios that still need clear reading contrast.

## Design tokens
```css
:root {
  /* Colors (mode: light) */
  --color-bg: #FFF8F7;
  --color-text: #292339;
  --color-muted: #645A6F;
  --color-accent: #71418A;
  --color-border: #DEC9E6;

  /* Fonts */
  --font-heading: "Nunito", sans-serif;
  --font-body: "Nunito", sans-serif;

  /* Shape and spacing (density: roomy) */
  --radius: 26px;
  --space-1: 6px;
  --space-2: 12px;
  --space-3: 24px;
  --space-4: 44px;
  --space-5: 80px;
  --max-width: 1100px;
}
```
Google Fonts link: `<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap" rel="stylesheet">`

## Layout rules
Layout: tiles
- Hero: Use a large, round-feeling heading on a cream-pink field, with abstract CSS blobs sitting behind—not over—the actual text.
- About: Show the bio inside a gentle lilac or blush rounded section with long line lengths avoided.
- Projects: Arrange real projects in pastel cards with plenty of padding; use an alternating selection of muted lavender, pale peach and light cream without changing actual content.
- Contact: Close with a friendly, oversized rounded area and only the real links already in SPEC.md.

## Components
- Hero: Bold Nunito heading and two or three static, decorative blob shapes made in CSS.
- Project card: Large rounded card with a soft color fill, clearly legible text and one real action.
- Skill tags: Soft outline tags with dark text; small enough not to overwhelm content.
- Contact block: Warm, pill-edged block with a prominent text link and visible keyboard focus.

## Motion
Motion: lively. Give interactive cards a gently bouncy transform scale from 1 to 1.02 over 250ms and fade decorative blobs 180ms on hover only; no movement on load. Any motion must use only `transform` and `opacity` over 150–300ms; never use `transition: all`, move elements merely because the page loads, or use more than two scroll reveals. Respect `prefers-reduced-motion`: turn off all movement and reveals.

## Do / Don't
Do:
1. Use only light pastel fills and dark readable text.
2. Keep corners and geometric blobs friendly and rounded.
3. Make the playful motion triggered by real interaction.
4. Leave generous padding inside cards.
5. Use the same Nunito family for both text levels.

Don't:
1. Set pale pastel text on pale pastel cards.
2. Animate an entire page background.
3. Use parallax, spring libraries or a long multi-step bounce.
4. Cover links or text with decorative blobs.
5. Invent cute project names, captions or emoji.

## Content rule
All text and projects come from SPEC.md. Never invent content.
