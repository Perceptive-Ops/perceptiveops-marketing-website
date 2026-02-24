

# Redesign to Match Axe Automation's Design Language

Restyle the entire Perceptive Ops landing page to closely match the design patterns, layout structure, and visual feel of axeautomation.co -- while keeping all existing Perceptive Ops content.

## Key Design Changes

### Overall Theme
- Switch to a **light/white background** with clean, minimal aesthetic (currently has subtle gradient orbs -- these stay but get toned down)
- Use **black/dark text** as the primary text color for headings
- Rounded, pill-shaped navbar floating at the top (like Axe's navbar with a subtle border/shadow)
- **Dark CTA buttons** (black/dark navy with white text and arrow icon) instead of gradient buttons
- The gradient accent (cyan-to-purple) becomes more subtle -- used sparingly for highlighted text only
- Bigger, bolder typography with more whitespace between sections

### Section-by-Section Changes

**1. Navbar**
- Floating rounded-pill style container with light background, border, and shadow
- Logo left, links center, dark CTA button right with arrow icon
- More padding and a polished, card-like feel

**2. Hero**
- Small pill badge at top (keep existing)
- Much larger headline text, bolder weight
- "Run Your Operations" stays gradient but consider adding a subtle text-stroke or highlight box effect similar to Axe's "custom and done-for-you"
- Single dark CTA button ("FREE CONSULTATION" with arrow) instead of two buttons -- or keep two but make primary dark
- Stats row moves into a contained card/box below the CTA (like Axe's stats bar with light background)

**3. Trusted By**
- Add a heading like "Trusted by innovative teams" (already exists)
- Keep the scrolling animation
- Slightly larger brand names, more spaced out

**4. Process (Our Approach)**
- Redesign as vertical stacked cards (like Axe's Phase 1-4 cards) instead of horizontal 4-column grid
- Each phase gets a dark/gradient background card with phase number, title, and description
- Add arrow connectors between phases
- Add section CTA button

**5. Case Studies**
- Larger, more prominent cards with industry tag, bold headline, image placeholder area, description, and embedded testimonial quote
- Each card gets more vertical space -- closer to Axe's full-width case study cards

**6. Results / Outcomes**
- Reframe as a "Problems vs Solutions vs Outcomes" section (inspired by Axe's Outcomes section)
- Or keep as stat cards but make them larger with dark background and white text

**7. Testimonials / Reviews**
- Horizontal scrolling carousel of review cards (like Axe's Clutch reviews section)
- Each card shows stars, quote, reviewer name/title, and "Verified" badge

**8. Final CTA**
- Dark background section with bold white text
- Contrasting layout: "Not hiring us vs hiring us" comparison (inspired by Axe)
- Or keep simple but with dark/gradient background and white text

**9. Footer**
- Dark background footer with columns for Services, Company links
- Social media icons row
- Logo + tagline + copyright

## Technical Details

### Files to modify:
- **src/index.css** -- Update CSS variables: make background pure white, adjust card colors, add new utility classes for dark cards and pill shapes
- **src/components/Navbar.tsx** -- Floating pill navbar with rounded container, centered links, dark CTA button
- **src/components/Hero.tsx** -- Larger text, dark CTA button style, stats in a contained card
- **src/components/TrustedBy.tsx** -- Minor spacing/sizing tweaks
- **src/components/Services.tsx** -- Keep 6-card grid but refine card styling (cleaner borders, hover effects)
- **src/components/Process.tsx** -- Vertical stacked phase cards with dark backgrounds and phase numbers
- **src/components/Results.tsx** -- Larger cards or problems/solutions/outcomes layout
- **src/components/CaseStudies.tsx** -- Bigger cards with more detail, image placeholder areas, embedded quotes
- **src/components/Testimonials.tsx** -- Horizontal scrolling carousel with verified review badges
- **src/components/FinalCTA.tsx** -- Dark background, bold white headline, comparison copy
- **src/components/Footer.tsx** -- Dark background, multi-column layout with social links
- **tailwind.config.ts** -- Add any new keyframes or utility extensions needed

### No new dependencies needed
All changes use existing Tailwind CSS, Framer Motion, and Lucide icons.

