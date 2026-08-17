---
version: 2.0.0
name: NCA HVAC Design System
description: Industrial-grade visual language for NCA HVAC — residential, commercial, refrigeration and maintenance services across Perth.
colors:
  background: "#111111"
  primary: "#0B63D8"
  secondary: "#E8222A"
  text-primary: "#FFFFFF"
  text-secondary: "#999999"
  surface: "#161616"
  surface-alt: "#141414"
  border: "rgba(255, 255, 255, 0.05)"
  accent-primary-muted: "rgba(11, 99, 216, 0.12)"
  accent-secondary-muted: "rgba(232, 34, 42, 0.10)"
typography:
  display:
    family: "Barlow Condensed"
    weight: "600"
    casing: "uppercase"
    tracking: "-0.05em"
  heading:
    family: "Barlow Condensed"
    weight: "500"
    casing: "uppercase"
    tracking: "-0.02em"
  body:
    family: "Barlow"
    weight: "400"
    size: "16px"
  label:
    family: "Barlow Condensed"
    weight: "600"
    casing: "uppercase"
    tracking: "0.2em"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "32px"
  xl: "64px"
  section: "128px"
rounded:
  none: "0px"
  full: "999px"
components:
  nav:
    type: "fixed-header"
    height: "80px"
    blur: "8px"
  button:
    shape: "square"
    text: "uppercase-bold"
    transition: "300ms-ease"
  card:
    bg: "#161616"
    border: "1px-solid"
    hover: "border-primary"
  input:
    bg: "#111111"
    border: "1px-solid-white-10"
    shape: "square"
  ticker:
    speed: "40s"
    direction: "left"
motion:
  speed: "300ms"
  curve: "cubic-bezier(0.4, 0, 0.2, 1)"
---

# NCA HVAC — Design System / Build Specification

## 1. Overview

NCA HVAC uses a high-impact, dark-mode industrial aesthetic to communicate technical competence, reliability and owner-led trade expertise.

The visual language is intentionally rigid and architectural:

- near-black backgrounds
- high-contrast white typography
- NCA blue as the dominant interaction colour
- NCA red as a controlled supporting signal colour
- hard-edged zero-radius components
- condensed uppercase typography
- 1px grid lines
- image-led service tiles
- minimal shadow use
- motion based on translation, grayscale release, line expansion and ticker movement

The reference design system is the structural visual source of truth. The NCA implementation must preserve its proportions, pacing, hard edges, dense condensed typography and dark industrial atmosphere while replacing BRIX-specific branding, electrical content, solar content, affiliations and unsupported claims with NCA HVAC content.

---

## 2. Brand Translation

### 2.1 NCA identity

Business name:

**NCA HVAC**

Tagline:

**Residential | Commercial**

Supporting line:

**Reliable HVAC Solutions Across Perth**

Primary positioning:

**Professional Air Conditioning and Refrigeration Services Across Perth**

Core identity:

- Perth-based
- locally owned
- family-run
- owner-operated
- direct technician communication
- practical advice
- quality workmanship
- over a decade of hands-on HVAC industry experience

### 2.2 Colour hierarchy

The BRIX source uses a single signal-red accent. NCA must preserve the same high-contrast visual behaviour but map the primary interaction system to the NCA logo.

Use:

- `#0B63D8` — dominant NCA blue
- `#E8222A` — secondary NCA red
- `#111111` — global background
- `#161616` — main card / form surface
- `#141414` — alternate surface
- `#FFFFFF` — primary text
- `#999999` — secondary text

Recommended usage:

- Primary CTAs: NCA blue
- Active nav / focus / hover rules: NCA blue
- Signal lines, hot-side references, micro accents: NCA red
- White: headings and critical copy
- Grey: descriptive / secondary copy

Do not introduce unrelated bright colours.

---

## 3. Critical Fidelity Constraints

- Global background remains `#111111`.
- All main components use hard edges.
- All buttons remain `rounded-none`.
- All cards remain `rounded-none`.
- All inputs remain `rounded-none`.
- Use `Barlow` and `Barlow Condensed`.
- Container width remains `max-w-[1400px]`.
- Horizontal container padding remains 20px at the base breakpoint.
- Navigation remains fixed at 80px high.
- Images use `mix-blend-luminosity` and low opacity where used as atmospheric backgrounds.
- Card images transition from grayscale to colour on hover.
- Borders use `white/5` or `white/10`.
- Do not use drop-shadow based depth.
- Use radial gradients, overlays, line work and blur instead.
- Use Solar icons exclusively via Iconify.
- Functional labels and headings are uppercase.
- Use a clear focus state using NCA blue.

---

## 4. Technical Front-End Reference

Reference implementation stack:

- Tailwind CSS
- HTML
- Iconify
- Google Fonts

CDN references for a static prototype:

```html
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
```

Fonts:

- Barlow
- Barlow Condensed

For production Next.js implementation, reproduce the same design tokens using Tailwind config / CSS variables rather than relying on the Tailwind CDN.

---

## 5. Global Style

Suggested static prototype body:

```html
<body
  class="
    bg-[#111111]
    text-white
    font-sans
    antialiased
    selection:bg-[#0B63D8]
    selection:text-white
    overflow-x-hidden
  "
>
```

Global:

```css
html {
  scroll-behavior: smooth;
}

body {
  background: #111111;
  color: #ffffff;
}
```

No soft UI.

No large rounded corners.

No floating SaaS pills except circular icon containers where explicitly permitted.

---

## 6. Typography

### Display

Family:

`Barlow Condensed`

Weight:

`600`

Case:

uppercase

Tracking:

`-0.05em`

Use for:

- hero headline
- major CTA statements
- large stats

Typical scale:

- mobile: `text-6xl`
- tablet: `text-7xl`
- desktop: `text-8xl`
- large desktop: `text-9xl`

Hero leading:

approximately `0.85–0.92`

### Section Heading

Family:

`Barlow Condensed`

Weight:

`500`

Case:

uppercase

Scale:

- `text-5xl`
- through `text-7xl`

### Subheading

- `text-2xl` to `text-3xl`
- condensed
- semibold

### Body

Family:

`Barlow`

Weight:

`400`

Base:

`16px`

Line-height:

`1.5–1.7`

### Overline

Family:

`Barlow Condensed`

Weight:

`600`

Case:

uppercase

Tracking:

`0.2em`

Default style:

```html
<div class="flex items-center gap-4 text-xs font-condensed font-semibold uppercase tracking-[0.2em]">
  <span class="h-px w-8 bg-[#E8222A]"></span>
  <span>Residential | Commercial</span>
</div>
```

---

## 7. Spacing

Token scale:

- xs: 4px
- sm: 8px
- md: 16px
- lg: 32px
- xl: 64px
- section: 128px

Default section padding:

```html
py-24 lg:py-32
```

Primary container:

```html
max-w-[1400px] mx-auto px-5
```

Grid gaps:

- service grid: 1px
- editorial layouts: 32px–64px

---

## 8. Shapes

### Zero Radius Policy

Buttons:

`rounded-none`

Cards:

`rounded-none`

Inputs:

`rounded-none`

Image containers:

`rounded-none`

Form blocks:

`rounded-none`

### Circular elements

Circles may be used only for:

- icon containers
- review-source icons
- tiny separators
- status dots

---

## 9. Elevation and Depth

Use:

- `backdrop-blur-sm`
- low-opacity image layers
- radial gradients
- `border-white/5`
- `border-white/10`
- contrast shifts
- subtle scale/translation

Do not use:

- card shadows
- glow-heavy effects
- neumorphism

---

## 10. Asset Direction

The supplied NCA logo assets are mandatory.

Use the dark logo treatment over the site background.

Reference image direction:

### Hero

Industrial HVAC / mechanical services imagery.

Prototype reference:

`https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop`

### Residential

Prototype reference:

`https://images.unsplash.com/photo-1555964821-2e6b9195b6c2?q=80&w=2070&auto=format&fit=crop`

### Commercial

Prototype reference:

`https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop`

### Air Conditioning

Prototype reference:

`https://images.unsplash.com/photo-1620601614002-31518fdf973b?q=80&w=1964&auto=format&fit=crop`

### About / Technician

Prototype reference:

`https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop`

Production imagery should use approved client photography wherever possible.

Image backgrounds:

```html
class="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-luminosity"
```

or:

```html
opacity-40
```

depending on contrast.

---

## 11. Layer Stack / Positioning Map

### Navigation

- `fixed top-0`
- `z-50`
- `h-20`
- `backdrop-blur-sm`

### Hero

- outer: `relative`
- visual background: `z-0`
- content: `z-10`
- floating trust badge: `z-20`

### Ticker

- moving track: base layer
- left/right fade gradients: `z-10`

### CTA Banner

- radial gradient layer: `z-0`
- content: `relative z-10`

---

# 12. Section 1 — Sticky Navigation

Height:

`h-20`

Style:

```html
fixed top-0 left-0 right-0 z-50
border-b border-white/5
bg-[#111111]/95
backdrop-blur-sm
```

Container:

```html
max-w-[1400px] mx-auto px-5 h-full
```

### Left

NCA logo.

Use the supplied dark-background logo asset.

Do not recreate the full logo using Iconify.

### Centre navigation

Links:

- Home
- About
- Services
- Contact

Style:

```html
font-condensed
uppercase
text-xs
font-semibold
tracking-[0.12em]
```

Hover:

- white → NCA blue
- 300ms

### Right

Desktop:

**Request a Free Quote**

Primary button:

```html
bg-[#0B63D8]
text-white
rounded-none
uppercase
font-condensed
font-semibold
```

Hover:

- background white
- text `#111111`

Secondary compact action:

**Call Now**

Optional on desktop.

Hamburger:

Use Solar menu icon.

Example:

```html
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
```

---

# 13. Section 2 — Hero

Minimum height:

```html
min-h-[100svh]
```

Positioning:

```html
relative
flex
items-end
lg:items-center
```

### Background image

Full bleed.

```html
absolute inset-0 w-full h-full object-cover
opacity-40
mix-blend-luminosity
```

### Overlay stack

Vertical fade:

```html
bg-gradient-to-t
from-[#111111]
via-transparent
to-transparent
```

Horizontal fade:

```html
bg-gradient-to-r
from-[#111111]
via-[#111111]/70
to-transparent
```

Desktop horizontal overlay should occupy approximately 75% of the viewport.

### Hero content

Overline:

**RESIDENTIAL | COMMERCIAL**

H1:

**PROFESSIONAL AIR CONDITIONING  
& REFRIGERATION  
ACROSS PERTH**

Alternative approved line treatment:

**AIR CONDITIONING.  
REFRIGERATION.  
— ONE TECHNICIAN. ONE CALL.**

Do not use both simultaneously.

Recommended H1 classes:

```html
text-6xl
sm:text-7xl
lg:text-8xl
xl:text-9xl
font-condensed
font-semibold
uppercase
tracking-[-0.05em]
leading-[0.85]
```

Supporting copy:

NCA HVAC is a locally owned, family-run and owner-operated business providing residential and commercial air-conditioning and refrigeration services across Perth.

CTA row:

- Request a Free Quote
- Call Now

Primary button:

NCA blue.

Secondary:

transparent border-white/20 → white hover.

### Floating badge

Absolute:

```html
bottom-0 right-0
z-20
```

Do not invent star-rating data.

Replace the reference source's Google rating with verified NCA trust content.

Approved initial badge:

**10+ YEARS  
HANDS-ON HVAC EXPERIENCE**

Secondary small line:

**Owner Operated • Perth, WA**

Use NCA red as the badge micro-accent.

---

# 14. Section 3 — Trust Bar

Full width.

Primary background:

`#0B63D8`

Use white type and Solar icons.

Items:

- Owner Operated
- Family Run
- Qualified & Licensed
- Fully Insured
- Free Quotes
- Perth Based

Use red circular dividers or micro-lines between selected items.

Mobile:

- allow wrap
- hide decorative divider circles as required
- retain the most important items:
  - Owner Operated
  - Qualified & Licensed
  - Free Quotes

No invented partner badges.

---

# 15. Section 4 — Services Grid

Headline:

**HVAC SERVICES  
BUILT AROUND THE JOB.**

Intro:

Residential and commercial installation, maintenance, fault-finding and refrigeration services across Perth.

Grid:

```html
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-px
bg-white/5
```

Cards:

- background `#161616`
- `rounded-none`
- `aspect-square` mobile
- desktop target ratio approximately `3 / 4`

## Card 01

**Residential Air Conditioning**

Image:

residential / split-system / ducted.

Description:

Split-system and ducted installation, replacement, upgrades, servicing, repairs and performance checks.

## Card 02

**Commercial HVAC**

Image:

commercial plant / mechanical environment.

Description:

Planned and reactive maintenance, installations, equipment replacement, fault diagnosis, testing and commissioning.

## Card 03

**Breakdown & Repair**

Image:

air-conditioning / technician / equipment detail.

Description:

Fault-finding for cooling, heating, refrigeration, airflow, drainage, controls, noise and vibration issues.

## Card 04

**Preventative Maintenance**

Image:

maintenance / plant / coil / service detail.

Description:

Scheduled servicing, filters, coils, drains, system performance checks, condition reporting and maintenance schedules.

### Card image behaviour

Initial:

```html
grayscale
scale-100
```

Hover:

```html
group-hover:grayscale-0
group-hover:scale-105
```

Transition:

`duration-500`

### Bottom content

Gradient:

```html
bg-gradient-to-t from-[#111111] via-[#111111]/80 to-transparent
```

Accent line:

- default `scale-x-0`
- hover `scale-x-100`
- `origin-left`
- NCA blue

A small red micro-stroke may sit alongside the blue line.

Description:

- default `max-h-0 opacity-0`
- hover `max-h-32 opacity-100`

---

# 16. Section 5 — Stats / Proof Bar

Do not invent BRIX source stats.

Use only approved NCA proof points.

Recommended grid:

### 10+
**Years hands-on HVAC industry experience**

### 2
**Residential + Commercial capability**

### Perth
**Metropolitan service area**

### Free
**Quotes**

Large display values:

```html
text-6xl
lg:text-7xl
text-[#0B63D8]
font-condensed
font-semibold
uppercase
```

Grid:

```html
divide-y lg:divide-y-0 lg:divide-x divide-white/5
```

Hover:

value `scale-105`

NCA red may be used for one small underline or label per block.

---

# 17. Section 6 — Trust Ticker

Continuous ticker.

Animation:

```css
@keyframes ticker {
  0% {
    transform: translate3d(0, 0, 0);
  }

  100% {
    transform: translate3d(-50%, 0, 0);
  }
}
```

Duration:

`40s linear infinite`

Content must use factual NCA attributes:

- Owner Operated
- Family Run
- Direct Technician Communication
- Qualified & Licensed
- Fully Insured
- Honest Practical Advice
- Residential HVAC
- Commercial HVAC
- Refrigeration
- Preventative Maintenance
- Free Quotes
- Perth, WA

Repeat track content twice for seamless looping.

Add left/right fade gradients.

---

# 18. Section 7 — Customer Reviews

The source layout contains a horizontal testimonial carousel.

NCA may use this section only when genuine customer reviews have been approved.

Until approved:

- do not render fabricated reviews
- do not render a fake Google rating
- either hide this section or replace it with an owner-operated service statement block

When genuine reviews are available:

```html
flex
overflow-x-auto
snap-x
snap-mandatory
hide-scrollbar
```

Cards:

- `bg-[#161616]`
- `rounded-none`
- quote icon in `white/5`

Solar quote icon:

```html
<iconify-icon icon="solar:quote-left-bold"></iconify-icon>
```

If a Google icon is shown, it must accurately represent the real source of the review.

---

# 19. Section 8 — Preventative Maintenance Banner

Replace the BRIX-specific migration banner with NCA's preventative maintenance proposition.

Wrapper:

```html
bg-gradient-to-r
from-[#1a1a1a]
to-[#111111]
border-l-4
border-[#0B63D8]
```

Secondary red rule may appear inside the banner.

Large background icon:

```html
text-white/[0.02]
```

Solar icon:

`solar:wind-linear`

Eyebrow:

**PREVENTATIVE MAINTENANCE**

Headline:

**KEEP HVAC EQUIPMENT WORKING BEFORE A FAULT BECOMES DOWNTIME.**

Copy:

Scheduled residential and commercial maintenance can include filters, coils, drains, system performance checks, equipment condition reporting and repair recommendations.

CTA:

**Discuss a Maintenance Schedule**

---

# 20. Section 9 — About NCA HVAC

Two-column desktop layout.

### Left / image

Approved owner / HVAC career / technical work image.

Image treatment:

- low saturation / grayscale
- reveal colour on hover optional
- hard-edged frame

NCA accent corners:

- blue upper-left / lower-right line
- red secondary line or bottom bar

No rounded image mask.

### Right / content

Overline:

**ABOUT NCA HVAC**

Headline:

**PERSONAL SERVICE.  
DIRECT ACCOUNTABILITY.**

Body:

NCA HVAC is a Perth-based, family-run and owner-operated air-conditioning and refrigeration business servicing residential and commercial customers.

Customers deal directly with the qualified technician responsible for assessing and completing the work, providing clear communication and accountability from enquiry through to completion.

The owner brings over a decade of hands-on HVAC industry experience. Do not imply NCA HVAC itself has operated for more than a decade.

CTA:

**About NCA HVAC**

---

# 21. Section 10 — Why Choose NCA

Use either directly after About or as an internal subsection.

Display as rigid grid lines rather than rounded cards.

Approved items:

- Locally owned and family-run
- Owner-operated
- Qualified and licensed
- Fully insured
- Over a decade of hands-on HVAC industry experience
- Residential and commercial capability
- Personal service tailored to each customer
- Direct communication with the technician completing the work
- Honest and practical advice
- Flexible approach to customer requirements
- Strong focus on safety
- Quality workmanship
- Free quotes

Recommended:

```html
grid lg:grid-cols-2
border-t border-l border-white/5
```

Each item:

```html
border-r border-b border-white/5
p-6 lg:p-8
```

Number each item:

`01`, `02`, etc.

---

# 22. Section 11 — FAQ Accordion

Use native HTML:

```html
<details class="group border-b border-white/10">
  <summary>
    ...
  </summary>
</details>
```

Remove summary marker.

```css
summary::-webkit-details-marker {
  display: none;
}
```

Solar chevron icon rotates 180 degrees using `group-open`.

Suggested FAQs:

### Do you work on both residential and commercial HVAC?
Yes. NCA HVAC services residential and commercial customers across Perth.

### Do you offer new air-conditioning installations?
Yes. Services include split-system installation and replacement, ducted air-conditioning installation and system upgrades.

### Can you diagnose an air-conditioning or refrigeration fault?
Yes. Fault-finding includes systems not heating or cooling correctly, airflow and temperature issues, drainage issues, unusual noise/vibration and equipment/control faults.

### Do you provide preventative maintenance?
Yes. Maintenance can include scheduled servicing, filters, coils, drains, performance checks, equipment condition reporting and maintenance schedules.

### What areas do you service?
NCA HVAC is based in Perth and services the metropolitan area, with regional Western Australian work considered by arrangement.

### Do you provide free quotes?
Yes.

Do not state emergency hours or guaranteed response times unless separately confirmed.

---

# 23. Section 12 — Final CTA + Quote Form

Section background:

`#111111`

Use radial gradient at bottom-left:

```css
background:
  radial-gradient(
    circle at bottom left,
    rgba(11, 99, 216, 0.18),
    transparent 42%
  );
```

Optional second red radial accent:

```css
radial-gradient(
  circle at 80% 20%,
  rgba(232, 34, 42, 0.06),
  transparent 34%
)
```

## Left

Overline:

**REQUEST A FREE QUOTE**

Headline:

**LET'S TALK.**

Support:

Tell NCA HVAC about the property, system and work required. You will be contacted directly to discuss the best way forward.

Contact details:

- Phone: `[TO BE CONFIRMED]`
- Email: `admin@ncahvac.com.au`
- Perth, WA

## Right

Form block:

```html
bg-[#161616]
rounded-none
border border-white/5
```

Fields:

- Customer name
- Phone number
- Email address
- Suburb or job location
- Residential / commercial
- Service required
- Description of job or fault
- Preferred timeframe
- Photo upload

Input base:

```html
bg-[#111111]
border
border-white/10
rounded-none
text-white
```

Focus:

```html
focus:border-[#0B63D8]
focus:ring-1
focus:ring-[#0B63D8]
```

Primary submit:

**Request My Free Quote**

Blue → white hover.

---

# 24. Footer

Dark footer:

`#0D0D0D`

Top border:

`border-white/5`

Use 3–4 columns.

### Brand

NCA HVAC logo.

Tagline:

Residential | Commercial

Supporting:

Reliable HVAC Solutions Across Perth

### Navigation

- Home
- About
- Services
- Contact

### Services

- Residential Air Conditioning
- Commercial HVAC
- Breakdown & Repair
- Preventative Maintenance
- Refrigeration

### Contact

- Phone `[TO BE CONFIRMED]`
- admin@ncahvac.com.au
- Perth, WA

Bottom:

- copyright
- ABN / licence details when confirmed
- Privacy

---

# 25. Media Behaviour

### Background imagery

Use:

- `mix-blend-luminosity`
- `opacity-30`
- `opacity-40`

### Card imagery

Initial:

- grayscale 100%
- scale 100%

Hover:

- grayscale 0%
- scale 105%

### About image

May remain partially desaturated until hover.

Do not make photography overly vivid.

---

# 26. Motion

Global transition speed:

`300ms`

Extended image transition:

`500ms`

Curve:

```css
cubic-bezier(0.4, 0, 0.2, 1)
```

Approved motion:

- image scale
- grayscale release
- border colour
- line scale
- text slide
- arrow translation
- ticker

Do not use:

- bounce
- elastic motion
- 3D tilt
- cursor following
- particle systems

---

# 27. Ticker CSS

```css
@keyframes ticker {
  0% {
    transform: translate3d(0, 0, 0);
  }

  100% {
    transform: translate3d(-50%, 0, 0);
  }
}

.animate-ticker {
  animation: ticker 40s linear infinite;
}
```

Disable or simplify on reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  .animate-ticker {
    animation: none;
    transform: none;
  }
}
```

---

# 28. Hide Scrollbar Utility

```css
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
```

---

# 29. Responsive Rules

## Mobile

- fixed 80px nav
- logo left
- menu right
- CTA hidden from main nav, shown in menu
- hero text `text-6xl`
- hero content bottom-aligned where useful
- one-column service cards
- stats stack
- trust bar wraps
- final CTA form stacks
- quote form single column

## Tablet

- 2-column services
- 2-column stats
- condensed nav as space permits
- hero `text-7xl`

## Desktop

- 4-column service grid
- 4-column proof bar
- full nav
- hero `text-8xl` to `text-9xl`
- split About layout
- split CTA / form layout

---

# 30. Accessibility

Target:

**WCAG 2.2 AA**

Requirements:

- secondary `#999999` text must be checked against `#111111`
- critical information should use white
- all icons with no visible text require an accessible label
- all decorative icons use `aria-hidden="true"`
- clear NCA blue focus state
- 44px minimum interactive target
- form labels must be visible
- avoid placeholder-only inputs
- semantic heading order
- reduced-motion support
- no hidden horizontal-scroll content that cannot be keyboard accessed

---

# 31. Solar Icon Policy

Use only Solar icons through Iconify.

Approved examples:

- menu: `solar:hamburger-menu-linear`
- phone: `solar:phone-linear`
- arrow: `solar:arrow-right-linear`
- shield: `solar:shield-check-linear`
- tools: `solar:sledgehammer-linear` or relevant Solar tool icon
- home: `solar:home-2-linear`
- commercial: `solar:buildings-2-linear`
- snow/cooling: `solar:snowflake-linear`
- wind: `solar:wind-linear`
- maintenance: `solar:settings-linear`
- quote: `solar:quote-left-bold`
- location: `solar:map-point-linear`
- mail: `solar:letter-linear`

Do not mix Lucide, Heroicons or Font Awesome.

---

# 32. Do's and Don'ts

## Do

- use uppercase condensed headings
- preserve 0px radius
- maintain `#111111` as global background
- use NCA blue as dominant CTA colour
- use red as a controlled signal accent
- use low-opacity luminosity images
- use white/5 and white/10 borders
- preserve strong grid lines
- use image-led service cards
- maintain max-width 1400px
- keep direct owner-operated messaging visible
- keep the site technically credible and restrained

## Don't

- use rounded cards
- use generic pastel SaaS colour palettes
- invent partner affiliations
- invent star ratings
- invent testimonials
- imply a large team
- imply NCA HVAC itself has existed for 10+ years
- add electrical or solar services
- add the BRIX logo or BRIX name
- use unsupported 24/7 claims
- use drop shadows as primary depth
- over-saturate imagery

---

# 33. Source-to-NCA Component Mapping

| Source Component | NCA Implementation |
|---|---|
| BRIX logo | Supplied NCA HVAC dark logo |
| BRIX red CTA | NCA blue CTA |
| BRIX red trust bar | NCA blue trust bar |
| Electrical/Solar service tiles | Residential / Commercial / Repair / Maintenance |
| 5★ / 20+ Years badge | 10+ years hands-on HVAC experience |
| Electrical partner ticker | NCA factual trust ticker |
| Google testimonial carousel | Genuine NCA reviews only, otherwise hidden |
| DJK migration banner | Preventative maintenance banner |
| About BRIX | About NCA HVAC |
| Electrical quote form | HVAC/refrigeration quote form |

---

# 34. Page Model

The visual language must be consistent across:

- `/`
- `/about`
- `/services`
- `/contact`

All internal page heroes use:

- dark full-bleed background
- condensed uppercase headline
- 80px fixed nav
- NCA blue overline / CTA
- red micro accent
- low-opacity luminosity image treatment

---

# 35. Final Visual Acceptance Criteria

The build passes design QA when:

1. The global background is consistently `#111111`.
2. Barlow / Barlow Condensed are used correctly.
3. All buttons, inputs and cards use 0px radius.
4. NCA blue is the dominant CTA colour.
5. Red appears as a controlled supporting accent.
6. The site uses max-width 1400px containers with 20px base horizontal padding.
7. The nav is fixed and 80px tall.
8. Hero is at least 100svh.
9. Hero imagery is low-opacity and luminosity blended.
10. Services use architectural image-led tiles.
11. Card images transition grayscale → colour on hover.
12. No BRIX electrical/solar content remains.
13. No unsupported review, rating, partner or company-age claims appear.
14. Mobile layouts remain functional and conversion-focused.
15. The quote form visually matches the dark industrial system.
16. All icons are from Solar via Iconify.
17. Reduced motion is supported.
18. Photography rules from the NCA content brief are observed.
