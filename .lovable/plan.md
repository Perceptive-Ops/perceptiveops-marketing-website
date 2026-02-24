

# Redesign to Exactly Match Axe Automation Layout

Restructure and restyle every section to precisely replicate the Axe Automation design patterns seen in the reference screenshots, while keeping Perceptive Ops content and cyan-to-purple color accent.

## Section-by-Section Changes

### 1. Hero (Hero.tsx)
- **Highlighted text box**: The key phrase "Run Your Operations" gets a solid dark blue/navy filled rounded box behind it (like Axe's "custom and done-for-you" highlight) instead of a gradient text effect
- **Single large CTA button**: One dark rounded-pill "FREE CONSULTATION" button with circled arrow icon, centered -- remove the secondary "See Our Work" button
- **Stats bar redesign**: Move stats into a light gray rounded card below the CTA. Layout becomes: left side shows badge/award icons area, right side shows 3 large stat numbers (200+ AI Models Deployed, 50K+ Hours Automated, 98% Client Retention) separated by vertical dividers -- matching Axe's Clutch badges + stats layout

### 2. Navbar (Navbar.tsx)
- Already close to the reference. Minor tweak: increase max-width slightly, ensure the pill container fills more width like Axe's full-width rounded navbar

### 3. Process Section (Process.tsx) -- Major Restructure
- **Add intro block**: A large rounded card with light gray background containing:
  - Left side: "Our Approach" pill badge, heading "Our proven approach to transform your operations" with "proven approach" in a highlighted box (dark navy background, white text, rounded), description paragraph, and dark "FREE CONSULTATION" button
  - Right side: Image placeholder area (rounded corners)
- **Phase cards**: Change from vertical stacked dark cards to a **2x2 grid** of light bordered cards:
  - Each card has: "Phase X" pill badge (top-left), long arrow line pointing right (top-right), bold title, description paragraph
  - Phase 1 card gets a special dark/gradient blue background with white text (like the active/highlighted state in the reference)
  - Phases 2-4 have white background with light border

### 4. Results/Outcomes Section (Results.tsx) -- Major Restructure
- Rename to "Outcomes" section
- **New layout**: Light gray rounded container with:
  - "Outcomes" pill badge centered at top
  - Heading: "We find constraints, then solve them for **massive results**" where "massive results" is in a dark navy highlight box
  - Subtitle paragraph
  - **3-column table** below: Problems | Solutions | Outcomes
    - Header row with bold titles separated by vertical lines
    - 4 data rows with items like:
      - "High operational costs" | checkmark "Automate with AI" | checkmark "40% cost reduction"
      - "Slow processing" | checkmark "AI-powered pipelines" | checkmark "3X faster"
      - "Inaccurate predictions" | checkmark "Custom ML models" | checkmark "99% accuracy"
      - "Low ROI on tech" | checkmark "Strategic AI deployment" | checkmark "10X ROI"
    - Solutions and Outcomes columns show cyan/blue checkmark icons

### 5. Case Studies (CaseStudies.tsx) -- Restructure Layout
- Each case study becomes a large rounded bordered card with two-column layout:
  - **Left column (wider ~60%)**: Industry tag pill badge (e.g. "Healthcare AI"), bold headline, image placeholder area with colored overlay showing metric, "What We Did" label with icon, description paragraph
  - **Right column (~40%)**: Testimonial quote in large text, author name and role at bottom with avatar placeholder
- Stack case studies vertically with generous spacing

### 6. Testimonials, Services, TrustedBy, FinalCTA, Footer
- Keep mostly as-is since the reference screenshots don't show these differing significantly from current implementation
- Minor: ensure "FREE CONSULTATION" button style (dark, rounded-pill, with circled arrow icon) is consistent everywhere

## Technical Details

### Files to modify:
- **src/components/Hero.tsx** -- Highlighted text box effect, single CTA, redesigned stats bar
- **src/components/Process.tsx** -- Add intro section with two-column layout, convert to 2x2 phase card grid with first card highlighted
- **src/components/Results.tsx** -- Complete rebuild as "Outcomes" section with Problems/Solutions/Outcomes table
- **src/components/CaseStudies.tsx** -- Two-column card layout with image placeholder and testimonial sidebar
- **src/components/Navbar.tsx** -- Minor width adjustment
- **src/index.css** -- Add utility class for the dark highlight box text effect (`.highlight-box`)

### No new dependencies needed
All changes use existing Tailwind CSS, Framer Motion, and Lucide icons.

