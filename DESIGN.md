---
name: Iván Márquez García
description: Single-column bilingual portfolio of a senior frontend developer; near-black, one lavender voice, everything in one scroll.
colors:
  page: "#0a0a0a"
  fg: "#ededed"
  muted: "#a3a3a3"
  surface: "#161616"
  card: "#111111"
  line: "#222222"
  line-strong: "#3a3a3a"
  pill: "#ededed"
  on-pill: "#0a0a0a"
  accent: "#a29bfe"
  on-accent: "#0a0a0a"
  page-light: "#fafafa"
  fg-light: "#171717"
  muted-light: "#525252"
  surface-light: "#f0f0f0"
  card-light: "#ffffff"
  line-light: "#e5e5e5"
  line-strong-light: "#cfcfcf"
  pill-light: "#171717"
  on-pill-light: "#fafafa"
  accent-light: "#5b4cdb"
  on-accent-light: "#ffffff"
  status-awake: "#22c55e"
  status-asleep: "#ef4444"
typography:
  headline:
    fontFamily: "Roboto, system-ui, sans-serif"
    fontSize: "26px"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Roboto, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1.5
  body-lead:
    fontFamily: "Roboto, system-ui, sans-serif"
    fontSize: "15.5px"
    fontWeight: 400
    lineHeight: 1.75
  body:
    fontFamily: "Roboto, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Roboto, system-ui, sans-serif"
    fontSize: "13.5px"
    fontWeight: 500
    lineHeight: 1
  caption:
    fontFamily: "Roboto, system-ui, sans-serif"
    fontSize: "12.5px"
    fontWeight: 400
    lineHeight: 1.5
  mono-label:
    fontFamily: "Roboto Mono, ui-monospace, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  md: "8px"
  lg: "12px"
  full: "9999px"
spacing:
  gutter: "24px"
  page-block: "120px"
  section: "64px"
  section-first: "72px"
  block: "28px"
  row-pad: "12px"
components:
  button-pill-primary:
    backgroundColor: "{colors.pill}"
    textColor: "{colors.on-pill}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    height: "34px"
    padding: "0 16px 0 14px"
  button-pill-primary-hover:
    backgroundColor: "{colors.pill} at 85% opacity"
    textColor: "{colors.on-pill}"
  button-pill-disabled:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    height: "34px"
    padding: "0 14px"
  icon-link:
    textColor: "{colors.muted}"
    rounded: "{rounded.full}"
    size: "34px"
  icon-link-hover:
    textColor: "{colors.fg}"
  status-pill:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.fg}"
    rounded: "{rounded.full}"
    height: "30px"
    padding: "0 12px"
  project-row:
    rounded: "{rounded.lg}"
    padding: "12px"
  project-row-hover:
    backgroundColor: "{colors.card}"
---

# Design System: Iván Márquez García

## Overview

**Creative North Star: "The Quiet Column"**

One 600px column of facts on a near-black ground, read top to bottom in a single scroll. The page is a CV that happens to be a website: avatar, name, role, a short bio, two pill actions, then numbered lists of projects and jobs. Nothing is decorated. Hierarchy comes from weight (500 vs 400) and from the two-step text contrast of foreground versus muted grey, not from size jumps, colour blocks or ornament.

The page is monochrome. Hovers are neutral grey shifts (fg, or the pill at 85%), never colour. The lavender accent is kept for the keyboard focus ring and text selection only; the only other colour on the page lives inside the project banners, which carry each product's own brand and sit outside this palette. The theme follows the system: dark by default, a neutral light theme under `prefers-color-scheme: light` with a deeper violet accent tuned for contrast on white.

Depth is flat. Surfaces separate by a one-step tonal shift and a hairline border, never by shadow. Motion is a single 200ms colour transition, removed entirely under reduced motion.

**Key Characteristics:**
- One centred column, max 600px, 24px side gutter, 120px top and bottom air.
- Two text tones (fg, muted) do almost all the hierarchy work.
- Accent only for the focus ring and text selection; hovers are neutral grey.
- Fully rounded pills at 34px with a 44px invisible hit area.
- Mono appears in exactly two places: section counters and the en/es switcher.
- Flat: hairline borders and tonal surfaces, no shadows.

## Colors

A neutral grey ladder with a single violet voice reserved for keyboard focus and selection.

### Primary
- **Focus Lavender** (dark theme, `accent`): 2px focus ring and text selection background. Paired with `on-accent` for selected text. Never used for hover (Iván's decision, 2026-11-27: hovers read as a subtle grey, not violet).
- **Deep Violet** (light theme, `accent-light`): the same roles in the light theme; darker so the focus ring holds contrast on the pale ground.

### Neutral
- **Ink Black** (`page` / `page-light`): page ground. Also the hard-coded ground of the Open Graph image.
- **Bone** (`fg` / `fg-light`): names, headings, link text, the active language.
- **Ash Grey** (`muted` / `muted-light`): bio body, role lines, descriptions, dates, counters, inactive icons. The default reading tone; most body copy is muted, not fg.
- **Raised Charcoal** (`surface` / `surface-light`): fill of the status pill and the disabled call pill.
- **Hover Card** (`card` / `card-light`): fill a project row takes on hover only.
- **Hairline** (`line` / `line-light`): borders of banners, company logos, status pill, disabled pill, hovered project row.
- **Strong Hairline** (`line-strong` / `line-strong-light`): resting underline of inline bio links.
- **Pill Ink** (`pill` / `on-pill`, and light pair): the one filled control. In dark it is a light pill with dark text; in light it inverts to a dark pill with light text.

### Status
- **Awake Green** (`status-awake`) and **Asleep Red** (`status-asleep`): the 8px dot in the local-time pill only. They are literal values in the component, not theme tokens, and they never carry meaning alone (the sun/moon icon and screen-reader text say the same thing).

### Named Rules
**The Focus-Only Colour Rule.** The accent appears only for focus-visible and text selection. Hovers move between greys (muted to fg, pill to pill at 85%). Nothing in the portfolio's own chrome is lavender at rest or on hover.

**The One Filled Pill Rule.** Only the Resume download uses the filled `pill` treatment. Every other control is a surface pill, a bare icon or a text link.

**The Banners Are Guests Rule.** Project banners are rasters in each product's own identity. They are framed with a hairline and an 8px radius but never recoloured or tinted to match the portfolio.

## Typography

**Body Font:** Roboto (with system-ui, sans-serif), weights 400 and 500 in use
**Label/Mono Font:** Roboto Mono (with ui-monospace, monospace), weight 400

**Character:** A single plain sans carries everything; the mono is a small technical aside, not a second voice.

### Hierarchy
- **Headline** (500, 26px, 1.25, -0.01em): the name. The only large type on the page; there is no display size.
- **Title** (500, 15px): project names and company names.
- **Body Lead** (400, 15.5px, 1.75): the bio paragraphs, in muted. Also the 404 copy.
- **Body** (400, 14px, 1.6 to 1.7): project descriptions and job paragraphs, in muted. 15px for the role line under the name.
- **Label** (500, 13.5px): pill button text.
- **Caption** (400, 12.5px to 13px): tech stack lines joined by " · ", job dates and the status pill, with tabular numerals on dates and time.
- **Mono Label** (400, 13px, muted): section headings in the form "projects / 02" and the "en / es" switcher.

### Named Rules
**The Two-Weights Rule.** Hierarchy is 500 against 400 plus fg against muted. No bold, no uppercase, no letter-spaced labels.

**The Mono-Is-Metadata Rule.** Roboto Mono is reserved for the section counter headings and the language switcher. It never sets body copy, names or buttons.

## Layout

A single centred column, `max-width: 600px`, with a 24px gutter at every width and 120px of padding above and below. The header block stacks avatar (88px circle), name and role, and the language switcher on one flex row; below the 640px breakpoint the name block wraps to its own full-width line and the switcher stays top-right beside the avatar.

Vertical rhythm: 28px between header blocks (bio, actions), 72px before the first section, 64px between sections, 12px from a section heading to its list. Lists use a 4px gap; project rows carry 12px internal padding and are pulled out by -12px so their content aligns with the column edge while the hover fill bleeds into the gutter.

Project rows put a 168px banner (1200:630) beside the text at 640px and up; below that the banner goes full width above the text. Experience rows are a 32px logo, name and role, right-aligned dates and a chevron; the expanded body is indented 46px to align with the text, not the logo. Paragraphs use `text-wrap: pretty`.

## Elevation & Depth

Flat. There are no shadows anywhere in the build. Depth is a one-step tonal change (`page` to `surface` or `card`) plus a 1px hairline border. A project row is borderless and transparent at rest and only gains the card fill and hairline on hover.

### Named Rules
**The Hairline-Not-Shadow Rule.** Separate with a 1px `line` border or a one-step surface shift. Never a box-shadow.

## Shapes

Three radii. Fully round (9999px) for every pill, the avatar, the status dot and icon-link hit areas. 12px for the interactive project row. 8px for framed imagery: project banners, company logos and the experience summary. Icons are 24-unit stroke icons (2px stroke, round caps and joins) drawn at 13 to 17px.

## Components

### Buttons
Quiet pills, all 34px tall, with an invisible 5px outset that grows the tap target to 44px.
- **Shape:** fully rounded (9999px), 1px border.
- **Primary (Resume):** `pill` fill and border, `on-pill` text, 13.5px/500 label with a 15px download icon, 14px left and 16px right padding, 7px icon gap.
- **Hover:** fill drops to `pill` at 85% (a slightly greyer pill) and the border goes transparent, over 200ms; text stays `on-pill`.
- **Focus:** the global 2px accent outline at 3px offset.
- **Disabled (Book a call):** `surface` fill, `line` border, muted text, not-allowed cursor, with "· soon" appended. No hover state.

### Icon links
- **Style:** 34px round hit area (44px with the outset), 17px stroke icon in muted.
- **Hover:** icon goes from muted to `fg`. No fill, no border.

### Inline links
- **Style:** fg text with a `line-strong` underline at 3px offset.
- **Hover:** only the underline turns `fg`; the text colour holds.

### Status pill (local time)
- **Style:** 30px round pill, `surface` fill, `line` border, 13px tabular text: status dot, place, a muted middle dot, sun or moon icon, 24-hour Madrid time. Renders "--:--" with a muted dot before hydration.

### Navigation (language switcher)
- **Style:** mono 13px "en / es", muted; the current language is fg and marked `aria-current`.
- **Hover:** text to fg. Each link carries an invisible pseudo-element hit area.

### Project row
- **Style:** whole row is one link; banner with hairline and 8px radius, title with a 13px up-right arrow, muted description, caption stack line.
- **Hover:** row gains `card` fill and `line` border at 12px radius.

### Experience row
- **Style:** native `<details>`; summary with logo, title, muted role, dates and a 16px chevron. All rows but the last start open.
- **Hover / Open:** chevron goes from muted to `fg` on summary hover and rotates 180 degrees when open, 200ms.

## Do's and Don'ts

### Do:
- **Do** keep every surface inside the single 600px column with the 24px gutter.
- **Do** keep hovers as grey shifts; let the accent appear only on focus-visible and selection.
- **Do** make new controls 34px pills with the 44px hit-area outset.
- **Do** use the `pill` fill for at most one primary action per view.
- **Do** separate surfaces with a 1px hairline or a one-step tonal shift.
- **Do** set section headings as mono "label / NN" counters in muted.
- **Do** keep a 200ms colour-only transition and drop it under reduced motion.

### Don't:
- **Don't** add box-shadows, gradients or glows.
- **Don't** use the accent as a resting fill, text colour, background or hover colour.
- **Don't** use Roboto Mono for anything other than section counters and the language switcher.
- **Don't** introduce bold, uppercase or tracked-out labels; hierarchy is 500/400 and fg/muted.
- **Don't** recolour or tint project banners to the portfolio palette.
- **Don't** add a theme toggle; the theme follows the system.
