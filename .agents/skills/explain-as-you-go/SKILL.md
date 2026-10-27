---
name: explain-as-you-go
description: After every change to the student's project, explains what changed and why in simple first-year language and names the lines that were touched. Use after every edit, new file, command or fix, and whenever the student asks what something means.
---

# Explain as you go

## Goal
The student learns while the agent builds. Never hand over changes with no explanation.

## After every change, use these three parts, in this order
**What I changed:** one or two sentences.
**Why:** one sentence on the reason.
**Where:** the file name and line numbers, and what those lines do in plain words.

Example:
> **What I changed:** I made the main heading blue.
> **Why:** You asked for a blue heading, and the heading is what visitors see first.
> **Where:** `public/styles.css`, lines 12 to 14. These lines tell the browser: "every top-level heading gets the color blue".

## Language rules
- Write for someone in their first year who has just started coding.
- Short sentences. Plain words. No jargon.
- When you must use a technical word (selector, commit, deploy), give a short meaning the first time you use it.
- At most about 120 words per explanation.
- Never say "simply", "just" or "obviously".

## Commands
- Before running a command, say what it will do.
- After it runs, say what the result means.

## Errors
When something fails, explain the error in plain language first, then say what you will do about it.

## Do not skip this
Explain every change, even small ones. After a bigger change (several files, or a new feature), end with one line: "Want me to explain any of these lines?"
