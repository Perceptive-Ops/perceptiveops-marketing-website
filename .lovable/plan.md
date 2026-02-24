

# Hero and Header Rework: Dark Video Background

## Overview
Rebuild the Hero section with a full-screen dark video background and make the Navbar fully transparent so it blends seamlessly into the cinematic hero. All text and UI elements in the hero will be updated to light/white colors for legibility against the dark video.

## Changes

### 1. Hero Section (`src/components/Hero.tsx`)
- Add a full-viewport video background using a free stock video (abstract tech/AI visuals from a CDN placeholder)
- Layer a dark overlay (`bg-black/60`) on top of the video for consistent text legibility
- Update all text to white/light colors:
  - Headline: white
  - Subheadline: white with reduced opacity
  - Badge pill: dark background with light text
- The stats bar at the bottom retains its current structure but gets a translucent dark glass-morphism style (`bg-white/5 backdrop-blur border-white/10`)
- The video element will be `position: absolute`, cover the full section, `object-fit: cover`, muted, autoplay, loop

### 2. Navbar (`src/components/Navbar.tsx`)
- Change from solid dark pill to a fully transparent background by default
- When scrolled, transition to a frosted glass effect (`bg-black/40 backdrop-blur-xl`) so content underneath remains somewhat visible
- Nav links stay white (already white/60 with hover to white -- this works perfectly on transparent)
- The logo is already designed for dark backgrounds so it will remain legible
- Keep the sticky/fixed behavior
- Remove the rounded-full pill container or make it transparent so it merges with the hero

### 3. Index CSS (`src/index.css`)
- No major changes needed; existing dark theme utilities support this

## Technical Details

### Video Element Structure
```text
<section> (relative, min-h-screen or similar tall hero)
  +-- <video> (absolute, inset-0, object-cover, autoplay, muted, loop)
  +-- <div> (absolute overlay, bg-black/60)
  +-- <div> (relative z-10, all hero content)
</section>
```

### Placeholder Video
Will use a free stock video URL (e.g., from Pexels CDN or similar) showing abstract dark tech visuals. This can be swapped later with a branded video.

### Navbar Transparency Logic
- Default state: `bg-transparent border-transparent`
- Scrolled state: `bg-black/40 backdrop-blur-xl border-white/10`
- This creates a clean seamless look when at top of page, and readable nav when scrolling over lighter sections

### Color Updates in Hero
- Headline: `text-white`
- Subtitle: `text-white/70`
- Badge: `bg-white/10 border-white/10 text-white/80`
- Stats bar: `bg-white/5 backdrop-blur-md border-white/10` with white text
- CTA button: keeps the purple 3D style (already high contrast)

