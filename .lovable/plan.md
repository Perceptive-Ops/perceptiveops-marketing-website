

# Multi-Section Redesign: Case Studies, Buttons, Hero, and Video

## Overview
This plan covers five changes: redesigning Case Studies to match the uploaded reference, adding hover effects to Testimonial cards, switching all buttons from purple to blue, making the hero headline larger, and swapping the background video.

---

## 1. Case Studies Redesign (`src/components/CaseStudies.tsx`)

Replace the current sticky-stacking layout with a **3-column card grid** matching the uploaded reference:

- Each card: dark background (`bg-card`), rounded corners, border
- **Top section**: The existing AI-generated image (from `src/assets/`) displayed as a wide banner with a subtle teal/dark gradient overlay and a centered icon
- **Middle section**: Colored tag label (e.g. "HEALTHCARE AI" in cyan/teal), bold title, description paragraph
- **Bottom section**: 3 metric stats in a row (value + label underneath), styled with the accent color
- Remove the testimonial sidebar and sticky scroll behavior entirely
- Use `lg:grid-cols-3` responsive grid layout
- Keep the existing images (`case-healthcare.jpg`, `case-ecommerce.jpg`, `case-support.jpg`) for each card's top banner

Data structure update -- add metrics array to each case:
```text
Healthcare: 85% Faster Analysis | 99.2% Accuracy | 5M+ Images Processed
E-Commerce: 90% Revenue Increase | 2X Order Capacity | 14->5 Days to Launch
Support: 40% Faster Response | 2X Volume Handled | 92% CSAT Score
```

## 2. Testimonial Cards Hover Effect (`src/components/Testimonials.tsx`)

Apply the same hover pattern used by the Process phase cards:
- Default: `bg-card border-border`
- On hover: transition to dark background (`hover:bg-[hsl(var(--dark-card))]`), update text colors to light, add the long horizontal arrow decoration
- Add `group` class and `group-hover:` color transitions for all text elements

## 3. All Buttons: Purple to Blue Gradient (`src/index.css` + all components)

Replace the `btn-purple-3d` utility with a new `btn-gradient` style matching the uploaded button reference:

**New CSS utility** (replacing `btn-purple-3d`):
```text
.btn-gradient {
  background: linear-gradient(135deg, hsl(270 60% 58%), hsl(220 90% 56%));
  color: white;
  border-radius: 12px;
  padding: 14px 32px;
  font-weight: 600;
  box-shadow: 0 4px 24px rgba(99, 102, 241, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.btn-gradient:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(99, 102, 241, 0.45);
}
```

Files to update class references from `btn-purple-3d` to `btn-gradient`:
- `src/components/Hero.tsx` (main CTA)
- `src/components/Navbar.tsx` (header CTA, desktop + mobile)
- `src/components/Process.tsx` (consultation button)
- `src/components/FinalCTA.tsx` (final CTA)

Also update `highlight-box` background to use blue instead of purple.

## 4. Hero Headline Size (`src/components/Hero.tsx`)

Increase hero `h1` to `text-5xl sm:text-6xl lg:text-7xl` so it is visibly larger than all other section headings (which use `text-4xl lg:text-6xl` or `text-3xl lg:text-5xl`).

## 5. Background Video with Purple/Blue Elements

Replace the current Pexels video URL with one that features purple and blue abstract/tech visuals. Will use a Pexels video with blue/purple particle or network visuals (e.g. abstract blue data streams or neural network animations).

---

## Files Modified

| File | Changes |
|------|---------|
| `src/components/CaseStudies.tsx` | Full rewrite to 3-column grid cards with image banners and metric stats |
| `src/components/Testimonials.tsx` | Add group-hover dark background transition and arrow decoration |
| `src/index.css` | Replace `btn-purple-3d` with `btn-gradient`, update `highlight-box` color |
| `src/components/Hero.tsx` | Increase h1 font size, update button class, swap video URL |
| `src/components/Navbar.tsx` | Update button class from `btn-purple-3d` to `btn-gradient` |
| `src/components/Process.tsx` | Update button class |
| `src/components/FinalCTA.tsx` | Update button class |
| `src/components/Services.tsx` | Update icon accent color from purple to blue |
| `src/components/Results.tsx` | Update checkmark icon color from purple to blue |

