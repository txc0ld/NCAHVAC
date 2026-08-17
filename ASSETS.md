# Image Assets — Provenance & Licensing

All photography is **placeholder stock** pending approved client photography
(see PRD §14 and §30 launch blockers). Swap files in `public/images/` 1:1 when
client assets arrive; filenames are referenced from `src/content/` and page
components.

| File | Subject | Source | License | Notes |
|---|---|---|---|---|
| `images/hero.jpg` | Technician with manifold gauges commissioning a heat pump condenser | Wikimedia Commons `Heat_Pump_Installation_(51323299230).jpg` | CC BY 2.0 — attribution required if kept | Homepage + services hero backgrounds. Small unit-brand mark visible; review before launch |
| `images/residential.jpg` | Modern Australian home at dusk | Unsplash `photo-1600585154340-be6161a56a0c` | Unsplash License | Residential service card |
| `images/commercial.jpg` | Insulated ductwork + AHUs, commercial plant room, Brisbane | Wikimedia Commons `Air_conditioning_ductwork_in_large_commercial_building,_Brisbane.jpg` | CC BY-SA 3.0 — attribution + share-alike if kept | Commercial HVAC card |
| `images/repair.jpg` | Digital manifold gauges on a split-system condenser | Wikimedia Commons `Cool_under_pressure-_386th_ECES_HVAC_technicians_in_action_(9047740).jpg` | Public domain (US Air Force) | Breakdown & repair card + contact hero. Small unit-brand mark visible; review before launch |
| `images/maintenance.jpg` | Outdoor condenser coil detail, low light | Wikimedia Commons `Outdoor_air_conditioner_unit_installed_in_residential_garden_space.jpg` | CC BY 2.0 — attribution required if kept | Preventative maintenance card |
| `images/technician.jpg` | Tradesperson portrait, arms crossed | Unsplash `photo-1621905252507-b35492cc74b4` (design.md-approved reference) | Unsplash License | About sections; replace with owner photo when available |
| `images/planning.jpg` | Engineering drawings / planning desk | Unsplash `photo-1581092160562-40aa08e78837` (design.md-approved reference) | Unsplash License | About page hero backdrop |
| `brand/logo-dark.png` | NCA HVAC logo (dark field) | Client-supplied | Client-owned | Rendered with `mix-blend-mode: screen` over `#111111` |
| `brand/logo-light.png` | NCA HVAC logo (light field) | Client-supplied | Client-owned | For light contexts (email, print) |
| `og.png`, `src/app/icon.png` | Derived from client logo | Generated via `scripts/prepare-assets.mjs` | Client-owned | Regenerate with `node scripts/prepare-assets.mjs` |

Launch checklist items affected: photography approval, CC BY / CC BY-SA
attribution (or replacement) for hero, commercial and maintenance images,
equipment-brand-mark review on hero and repair images.
