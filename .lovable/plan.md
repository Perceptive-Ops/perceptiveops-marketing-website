

# Website Copy Update, Tech Stack Section, and Footer Redesign

## Overview
This plan updates all website copy to match the provided content spec, adds a new Tech Stack section before Testimonials, and redesigns the Footer to match the reference screenshot.

---

## 1. Update All Section Copy

### Navbar (`src/components/Navbar.tsx`)
- Add "Testimonials" link (`#testimonials`) to nav links
- Change CTA text to "Book a Call" with `href="#contact"`

### Hero (`src/components/Hero.tsx`)
- Badge text: "Now Accepting New Clients"
- Headline: "We Build AI Systems That Run Your Operations"
- Subtitle: updated to match spec
- Two buttons: "Get Free Consultation" (btn-primary, `href="#contact"`) + "See Our Work" (btn-secondary, `href="#cases"`)
- Stats: add 4th stat "$50M+ / Client Revenue Impact", reorder to match spec

### TrustedBy (`src/components/TrustedBy.tsx`)
- Update text to "Trusted by forward-thinking companies"

### Services (`src/components/Services.tsx`)
- Badge: "What We Do"
- Heading: "AI-Powered Services Built for Real Impact"
- Add subtitle paragraph: "From strategy to deployment..."
- Add "Learn more" links to each card

### Process (`src/components/Process.tsx`)
- Badge: "Our Process"
- Heading: "From Chaos to Clarity in 4 Phases"
- Subtitle: "A battle-tested approach..."
- Step labels: "01 Discover and Audit", "02 Design and Architect", etc.

### Results (`src/components/Results.tsx`)
- Badge: "Results That Matter"
- Heading: "Every Automation Compounds"
- Subtitle: "Real numbers from real clients..."
- Change from table format to 4 result cards: 40% cost reduction, 3X faster, 99% accuracy, 10X ROI

### Case Studies (`src/components/CaseStudies.tsx`)
- Update `id` to `cases` (matching nav link `#cases`)
- Badge: "Case Studies"
- Heading: "Proof in the Results"
- Subtitle: "See how we've helped companies..."
- Update tag for support card to "Conversational AI"

### FinalCTA (`src/components/FinalCTA.tsx`)
- Add `id="contact"`
- Heading: "Ready to Make Your Operations Intelligent?"
- Subtitle: "Book a free consultation. We'll audit your operations..."
- Button: "Book Your Free Consultation" with `mailto:hello@perceptiveops.com`

---

## 2. New Tech Stack Section (`src/components/TechStack.tsx`)

Create a new component matching the uploaded dark-background screenshot:
- Dark section background (`dark-section`)
- Badge pill: "TECH STACK"
- Heading: "Built With the **Best Tools**" (last two words in gradient text)
- Subtitle: "We're tech-agnostic. We choose what's right for your project, not what's trendy."
- Grid of pill/chip elements, each with a small colored dot and tech name
- Technologies: Python, TensorFlow, PyTorch, OpenAI, Claude / Anthropic, LangChain, AWS, Google Cloud, Azure, Next.js, React, Node.js, Flutter, FastAPI, PostgreSQL, Pinecone, Docker, Kubernetes
- Each pill: rounded border, dark background, subtle border, colored dot (varied colors like green, red, purple, cyan, orange, blue)
- Centered, wrapping layout using `flex flex-wrap justify-center gap-3`

---

## 3. Footer Redesign (`src/components/Footer.tsx`)

Redesign to match the reference screenshot:
- **Brand column**: Logo + "Perceptive Ops" name + tagline "AI-powered operations and automation for businesses that want to scale smarter, not harder."
- **Services column**: AI Agent Development, Workflow Automation, Machine Learning, Product Engineering, AI Consulting
- **Company column**: About Us, Case Studies, Blog, Careers, Contact
- **Connect column**: hello@perceptiveops.com, LinkedIn (https://www.linkedin.com/company/perceptive-ops), Twitter / X (https://x.com/perceptiveops), GitHub (https://github.com/perceptiveops)
- **Bottom bar**: Copyright left, social icons right (X, LinkedIn, YouTube/play icons)

---

## 4. Page Layout Update (`src/pages/Index.tsx`)

Insert `TechStack` component between `CaseStudies` and `Testimonials`.

---

## Files Modified

| File | Changes |
|------|---------|
| `src/components/Navbar.tsx` | Add Testimonials nav link, update CTA |
| `src/components/Hero.tsx` | Update copy, add 2 buttons + 4th stat |
| `src/components/TrustedBy.tsx` | Update heading text |
| `src/components/Services.tsx` | Update heading/badge, add subtitle + learn more |
| `src/components/Process.tsx` | Update copy to match spec |
| `src/components/Results.tsx` | Update copy, change to card layout |
| `src/components/CaseStudies.tsx` | Update id, copy, tag names |
| `src/components/FinalCTA.tsx` | Add id="contact", update copy + mailto link |
| `src/components/TechStack.tsx` | **New file** - dark tech stack pill grid |
| `src/components/Footer.tsx` | Full redesign with social links |
| `src/pages/Index.tsx` | Import and add TechStack |

