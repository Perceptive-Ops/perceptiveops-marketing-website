

# Visual Fixes and Enhancements

Address the user's feedback: use purple color scheme, hover-only backgrounds on phase cards, fix button border, longer arrows, and hero sizing.

## Changes

### 1. Use Purple Color for Highlight Box and CTA Buttons (src/index.css)
- Change `.highlight-box` from using `--primary` (dark navy) to using `--gradient-end` (purple, `270 60% 58%`) for background
- This applies the purple accent throughout: highlight boxes in headings, and can be used for buttons

### 2. Fix CTA Button Border Issue (all components with buttons)
- The `Button` component base class includes `border-border` from the global `* { @apply border-border }` rule
- Add `border-0` or `border-none` explicitly to all rounded-full CTA buttons in:
  - `Hero.tsx` (Free Consultation button)
  - `Process.tsx` (Free Consultation button)
  - `Navbar.tsx` (Free Consultation button)
- Also change button background from `bg-primary` to use the purple gradient (`gradient-bg`) so buttons match the purple theme

### 3. Phase Cards: Hover-Only Background (src/components/Process.tsx)
- Remove the `highlighted: true` property from Phase 1 -- no card starts highlighted
- All cards start with white/card background and light border
- On hover, apply the dark-section background (or purple gradient background) with white text
- Use Tailwind `group` and `group-hover:` utilities for the text color transitions
- Make the arrow longer: replace `ArrowRight` icon (size 20) with a wider horizontal line + arrowhead using a custom SVG or use `MoveRight` icon at larger size (size 40+), or draw a long line with CSS

### 4. Longer Arrows in Phase Cards (src/components/Process.tsx)
- Replace the small `ArrowRight` icon with a longer arrow element
- Use a combination of a horizontal line (`w-16 h-px bg-current`) and an arrowhead, or use `MoveRight` from lucide at size 32-40
- Style: thin, subtle in default state, becomes visible on hover

### 5. Hero Section Sizing Fixes (src/components/Hero.tsx)
- Increase headline from `text-5xl sm:text-6xl lg:text-8xl` to `text-6xl sm:text-7xl lg:text-[7rem]` to better match the Axe reference scale
- Increase the subtitle text from `text-lg lg:text-xl` to `text-xl lg:text-2xl`
- Increase CTA button height from `h-14` to `h-16`
- Stats values from `text-3xl lg:text-4xl` to `text-4xl lg:text-5xl`

### 6. Add Images/Icons Where Possible
- In the Process intro block: replace the "Process Overview" placeholder text with an icon composition (e.g., a `BrainCircuit` icon from lucide centered large with a gradient background)
- In the stats bar badges: keep the star and A+ icons (already present)

## Files to Modify
- **src/index.css** -- Update `.highlight-box` to purple color
- **src/components/Hero.tsx** -- Larger font sizes, fix button border, purple button
- **src/components/Process.tsx** -- Hover-only card backgrounds, longer arrows, purple button, intro image placeholder
- **src/components/Navbar.tsx** -- Fix button border, purple button
- **src/components/FinalCTA.tsx** -- Ensure button has no border artifact

## Technical Notes
- Phase card hover effect: use `group` class on the card wrapper, then `group-hover:bg-[hsl(var(--dark-card))]` for background transition, `group-hover:text-white` for text
- Long arrow: render a `<div>` with `w-12 lg:w-16 h-[1.5px] bg-current` plus a small triangle/arrowhead, or use lucide `MoveRight` at size 36
- All CTA buttons get `border-0 gradient-bg` instead of `bg-primary`

