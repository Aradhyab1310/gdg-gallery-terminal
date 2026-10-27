---
name: vibe-editorial
description: Applies the Editorial visual style (colors, fonts, spacing, layout, motion) to the portfolio site. Use ONLY when the student names the vibe-editorial skill or asks for the Editorial vibe. Never changes the content.
---

# Vibe: Editorial

## Feel
A calm, magazine-like portfolio with generous whitespace and a quietly confident reading rhythm. Suits writing, design, research, and other work that benefits from an editorial presentation.

## Design tokens
```css
:root {
  /* Colors (mode: light) */
  --color-bg: #FAF9F6;
  --color-text: #22201E;
  --color-muted: #625C56;
  --color-accent: #7D342D;
  --color-border: #D8D2C9;

  /* Fonts */
  --font-heading: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;

  /* Shape and spacing (density: roomy) */
  --radius: 2px;
  --space-1: 4px;
  --space-2: 10px;
  --space-3: 20px;
  --space-4: 40px;
  --space-5: 76px;
  --max-width: 1080px;
}
```
Google Fonts link: `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;600;700&display=swap" rel="stylesheet">`

## Layout rules
Layout: editorial
- Hero: Build a spacious masthead with an exceptionally large Playfair Display headline (clamp to fit small screens), a small existing descriptor if provided, and a fine horizontal rule; never invent a magazine issue or dateline.
- About: Treat the provided bio as a narrow text column with an optional oversized, blockquoted excerpt drawn verbatim from that same bio. Do not create a new quote or imply an endorsement.
- Projects: Arrange the real project entries as editorial stories: strong serif titles, short existing descriptions, quiet metadata and separating hairlines. Alternate image/text only when the spec provides images.
- Contact: Finish with an understated colophon-style section showing only the supplied contact information and links.

## Components
- Hero: Large serif h1, short existing supporting text, substantial whitespace, one fine rule.
- Project card: A border-top editorial row with serif project title, real summary and a clearly underlined action link.
- Skill tags: Small, flat, square-ended labels with generous inline gaps; no pill styling.
- Contact block: Thin top rule, modest section heading and low-chrome list of real contact links.

## Motion
Motion: subtle. Use a 200ms opacity change for link underlines and a 2px transform lift for project links on hover/focus; no automatic entrance motion. Any motion must use only `transform` and `opacity` over 150–300ms; never use `transition: all`, move elements merely because the page loads, or use more than two scroll reveals. Respect `prefers-reduced-motion`: turn off all movement and reveals.

## Do / Don't
Do:
1. Make the serif h1 the dominant visual landmark.
2. Use narrow paragraph measures and ample outer margins.
3. Set projects apart with fine rules rather than bulky cards.
4. Use the rust accent only on active links and small callouts.
5. Keep the pull quote an exact excerpt of the existing bio.

Don't:
1. Invent editorial captions, issue dates or pull quotes.
2. Use gradients or glass panels.
3. Round project cards into big pills.
4. Apply decorative serif display type to long body paragraphs.
5. Fill whitespace with ornamental icons or fake publications.

## Content rule
All text and projects come from SPEC.md. Never invent content.
