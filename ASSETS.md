# Image Assets — Provenance & Licensing

All photography is **placeholder stock** pending approved client photography
(see PRD §14 and §30 launch blockers). Swap files in `public/images/` 1:1 when
client assets arrive; filenames are referenced from `src/content/`.

| File | Subject | Source | License | Notes |
|---|---|---|---|---|
| `images/hero.jpg` | Technician working on wall-mounted equipment | Unsplash `photo-1621905251189-08b45d6a269e` (design.md-approved reference) | Unsplash License | Homepage hero background |
| `images/residential.jpg` | Modern Australian home at dusk | Unsplash `photo-1600585154340-be6161a56a0c` | Unsplash License | Residential service card |
| `images/commercial.jpg` | Mechanical plant welding work | Unsplash `photo-1504328345606-18bbc8c9d7d1` | Unsplash License | Commercial HVAC service card |
| `images/repair.jpg` | Technician fault-finding at switchboard | Unsplash `photo-1621905251918-48416bd8575a` | Unsplash License | Breakdown & repair card |
| `images/maintenance.jpg` | Split-system outdoor condenser unit | Wikimedia Commons `Carrier_Outdoor_Split_Air_Conditioner_Heat_Pump_System_(55005181522).jpg` | CC BY 2.0 — attribution required if kept in production | Maintenance card. Carrier logo visible; replace before launch per photography rules |
| `images/technician.jpg` | Tradesperson portrait, arms crossed | Unsplash `photo-1621905252507-b35492cc74b4` (design.md-approved reference) | Unsplash License | About section |
| `images/planning.jpg` | Engineering drawings / planning desk | Unsplash `photo-1581092160562-40aa08e78837` (design.md-approved reference) | Unsplash License | Internal page hero backdrop |
| `brand/logo-dark.png` | NCA HVAC logo (dark field) | Client-supplied | Client-owned | Rendered with `mix-blend-mode: screen` over `#111111` |
| `brand/logo-light.png` | NCA HVAC logo (light field) | Client-supplied | Client-owned | For light contexts (email, print) |
| `og.png`, `src/app/icon.png` | Derived from client logo | Generated via `scripts/prepare-assets.mjs` | Client-owned | Regenerate with `node scripts/prepare-assets.mjs` |

Launch checklist items affected: photography approval, previous-employer imagery
review, equipment-branding review (Carrier unit), CC BY attribution or removal.
