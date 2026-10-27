---
name: vibe-notebook
description: Applies the Notebook visual style (colors, fonts, spacing, layout, motion) to the portfolio site. Use ONLY when the student names the vibe-notebook skill or asks for the Notebook vibe. Never changes the content.
---

# Vibe: Notebook

## Feel
A personal paper notebook with handwritten accents, margin doodles and lightly layered notes. Best for reflective or creative portfolios, while the body remains easy to read.

## Design tokens
```css
:root {
  /* Colors (mode: light) */
  --color-bg: #FCF7EB;
  --color-text: #26241F;
  --color-muted: #5C564C;
  --color-accent: #77542D;
  --color-border: #CFC3AD;

  /* Fonts */
  --font-heading: "Caveat", cursive;
  --font-body: "Nunito", sans-serif;

  /* Shape and spacing (density: normal) */
  --radius: 6px;
  --space-1: 5px;
  --space-2: 11px;
  --space-3: 21px;
  --space-4: 38px;
  --space-5: 72px;
  --max-width: 980px;
}
```
Google Fonts link: `<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&family=Nunito:wght@400;500;600;700&display=swap" rel="stylesheet">`

## Layout rules
Layout: editorial
- Hero: Render the actual name in generous Caveat lettering over a subtle ruled-paper background and a static hand-drawn underline.
- About: Use real bio paragraphs as a notebook entry in readable Nunito; handwritten marginal flourishes must be decorative only.
- Projects: Use sticky-note-style blocks to display the true project titles and summaries, with soft paper colors and restrained offsets.
- Contact: Place real contact links at the bottom as a tidy notebook signature area; never fabricate a signed note.

## Components
- Hero: Caveat headline over understated paper rules; no invented handwritten quote.
- Project card: Off-white or pale-yellow sticky note with fine border, slight static rotation and readable Nunito body.
- Skill tags: Small ink-outlined handwritten-style tags, with Nunito fallback for long labels.
- Contact block: Simple lined footer note with authentic links and adequate target size.

## Motion
Motion: subtle. Lift a sticky note 3px and straighten its static 1deg rotation over 220ms on hover/focus using transform; no page-load doodling. Any motion must use only `transform` and `opacity` over 150–300ms; never use `transition: all`, move elements merely because the page loads, or use more than two scroll reveals. Respect `prefers-reduced-motion`: turn off all movement and reveals.

## Do / Don't
Do:
1. Use Caveat for short headings only and Nunito for body copy.
2. Keep ruled-paper lines subtle and beneath text.
3. Let sticky-note cards have slight, controlled offset.
4. Make doodles decorative CSS marks, not new content.
5. Preserve genuine project and contact copy verbatim.

Don't:
1. Write fake diary entries, dates or handwritten quotes.
2. Use handwriting for dense paragraph text.
3. Scatter notes until their reading order breaks.
4. Rotate text so much that reading suffers.
5. Use permanent moving pencil or drawing animations.

## Content rule
All text and projects come from SPEC.md. Never invent content.
