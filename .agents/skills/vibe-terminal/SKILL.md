---
name: vibe-terminal
description: Applies the Terminal visual style (colors, fonts, spacing, layout, motion) to the portfolio site. Use ONLY when the student names the vibe-terminal skill or asks for the Terminal vibe. Never changes the content.
---

# Vibe: Terminal

## Feel
A crisp, monochrome command-line aesthetic: black surfaces, green signals and rigorous monospace alignment. Best for technical portfolios that should feel like a terminal without becoming difficult to read.

## Design tokens
```css
:root {
  /* Colors (mode: dark) */
  --color-bg: #07110B;
  --color-text: #F0F8F0;
  --color-muted: #B2CFB8;
  --color-accent: #8FED9B;
  --color-border: #3B6B47;

  /* Fonts */
  --font-heading: "JetBrains Mono", monospace;
  --font-body: "JetBrains Mono", monospace;

  /* Shape and spacing (density: normal) */
  --radius: 2px;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 16px;
  --space-4: 32px;
  --space-5: 64px;
  --max-width: 980px;
}
```
Google Fonts link: `<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">`

## Layout rules
Layout: single column
- Hero: Frame the real name and existing introduction as the output of a decorative `whoami` prompt. Make `whoami` a fixed interface label, never a fabricated biographical command result; reveal existing text on deliberate user action if animation is used.
- About: Use one readable terminal-output column and a thin prompt-colored divider. Keep real paragraphs intact instead of turning them into invented system logs.
- Projects: List projects as terminal-style command results with bordered rows and concise real metadata; preserve the exact links and summaries from SPEC.md.
- Contact: Display supplied contact methods as high-contrast, keyboard-operable terminal links. Do not invent a shell username, host, directory or email.

## Components
- Hero: Plain terminal frame with a prompt marker and real intro text; a decorative `whoami` command label only.
- Project card: Hard-edged black panel, green rule, left-aligned title and source-backed details.
- Skill tags: Thin outlined monospace tags with enough horizontal padding for readability.
- Contact block: Stacked terminal-style links with visible underlines and focus outlines.

## Motion
Motion: subtle. On an explicit click or keyboard activation only, reveal the real `whoami` output one short span at a time using 180ms opacity transitions; show it immediately without JavaScript or with reduced motion. Any motion must use only `transform` and `opacity` over 150–300ms; never use `transition: all`, move elements merely because the page loads, or use more than two scroll reveals. Respect `prefers-reduced-motion`: turn off all movement and reveals.

## Do / Don't
Do:
1. Use JetBrains Mono for headings and body.
2. Keep green on almost-black and use bright text for long copy.
3. Use authentic existing text as command output.
4. Prefer simple borders and sharp corners.
5. Make every command-like link a real accessible link or plain text.

Don't:
1. Fake an OS log, identity, prompt location or system status.
2. Animate width for a typewriter effect or blink forever.
3. Use illegibly dim phosphor-green text.
4. Show a typing effect before any user action.
5. Turn static labels into nonfunctional pretend buttons.

## Content rule
All text and projects come from SPEC.md. Never invent content.
