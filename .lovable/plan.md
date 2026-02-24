

# Match Axe Automation's Typography

Swap the display font from **Space Grotesk** to **Belanosima** (the exact heading font used by Axe Automation) and adjust font sizes across all components to match their scale. Body text stays as **Inter**.

## Changes

### 1. src/index.css
- Update Google Fonts import: replace `Space+Grotesk` with `Belanosima:wght@400;600;700`

### 2. tailwind.config.ts
- Change `font-display` from `["Space Grotesk", ...]` to `["Belanosima", ...]`

### 3. Component Font Size Adjustments
All components will be updated to use larger font sizes matching Axe's scale:

**Hero.tsx**
- Headline: `text-5xl sm:text-6xl lg:text-8xl` stays (already large)
- Subheadline: `text-lg lg:text-xl` -- keep as is
- Badge text: keep `text-sm`

**Services.tsx**
- Section heading: `text-4xl lg:text-6xl` -- keep
- Card title: `text-lg` to `text-xl`
- Card description: `text-sm` to `text-base`

**Process.tsx**
- Intro heading: `text-3xl lg:text-5xl` -- keep
- Phase card title: `text-xl lg:text-2xl` to `text-2xl lg:text-3xl`
- Phase card description: `text-sm` to `text-base`

**Results.tsx**
- Section heading: `text-3xl lg:text-5xl` -- keep
- Table text: `text-sm` to `text-base`

**CaseStudies.tsx**
- Section heading: `text-4xl lg:text-6xl` -- keep
- Card title: `text-2xl lg:text-3xl` -- keep
- Card description: `text-sm` to `text-base`

**Testimonials.tsx**
- Section heading: `text-4xl lg:text-6xl` -- keep
- Quote text: `text-sm` to `text-base`

**FinalCTA.tsx**
- Heading: `text-4xl lg:text-6xl` -- keep

**Footer.tsx**
- Text sizes stay as `text-sm` (standard for footers)

**TrustedBy.tsx**
- Brand names: `text-2xl` to `text-3xl`

**Navbar.tsx**
- Nav links: `text-sm` -- keep (matches Axe)

### Files to modify:
- `src/index.css` -- font import
- `tailwind.config.ts` -- font family
- `src/components/Services.tsx` -- card text sizes
- `src/components/Process.tsx` -- phase card text sizes
- `src/components/Results.tsx` -- table text sizes
- `src/components/CaseStudies.tsx` -- description text size
- `src/components/Testimonials.tsx` -- quote text size
- `src/components/TrustedBy.tsx` -- brand name size

No new dependencies needed.
