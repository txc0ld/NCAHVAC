# NCA HVAC — Product Requirements Document
Version: 1.0  
Status: Build-ready PRD  
Product: Public marketing and lead-generation website  
Business: NCA HVAC  
Primary market: Perth, Western Australia

---

# 1. Product Summary

Build a premium, high-performance website for NCA HVAC that:

- establishes the brand as a credible Perth HVAC provider
- communicates that the business is family-run and owner-operated
- clearly presents residential, commercial, refrigeration, repair and maintenance services
- creates direct phone and quote enquiries
- works exceptionally well on mobile
- supports local search visibility
- remains easy to maintain
- avoids overstating company size, age or project history

The site should combine the supplied NCA branding with the BRIX-derived industrial design system: a #111111 dark canvas, Barlow / Barlow Condensed typography, strict zero-radius geometry, fixed 80px navigation, low-opacity luminosity imagery, image-led service tiles, 1px grid borders, continuous trust ticker, restrained grayscale/scale interactions and strong NCA-branded CTAs.

---

# 2. Business Objectives

Primary objectives:

1. Generate qualified inbound quote requests.
2. Generate phone enquiries.
3. Build trust quickly.
4. Explain the NCA service offering without overwhelming the user.
5. Differentiate NCA through owner-operated service.
6. Establish strong local relevance for Perth searches.
7. Create a platform that can later expand into location/service landing pages if required.

Secondary objectives:

- support referral traffic
- provide a credible URL for tenders, commercial clients and suppliers
- present approved qualifications / licensing details discreetly
- support future Google Business Profile activity
- create reusable brand components for future campaigns

---

# 3. Success Metrics

Initial KPIs:

- quote form conversion rate
- click-to-call rate
- form completion rate
- organic impressions for Perth HVAC-related terms
- organic clicks
- Core Web Vitals pass rate
- mobile bounce / engagement quality
- percentage of enquiries containing useful job detail

Analytics should not be considered successful merely because traffic increases. Primary success is qualified enquiry generation.

---

# 4. Target Users

## 4.1 Residential customer

Typical needs:

- new split system
- ducted system
- replacement or upgrade
- servicing
- fault diagnosis
- no cooling / heating
- airflow problem
- leak / drain issue

Priorities:

- trust
- clear communication
- practical advice
- responsiveness
- workmanship
- price clarity

## 4.2 Commercial customer

Typical roles:

- facilities manager
- building manager
- business owner
- property manager
- contractor
- strata representative

Typical needs:

- planned maintenance
- reactive repair
- commercial air-conditioning
- refrigeration
- central plant
- equipment replacement
- testing / commissioning
- condition inspections

Priorities:

- technical competence
- reliability
- communication
- safe work
- documentation
- response time
- continuity

## 4.3 Referral visitor

Comes from:

- word of mouth
- social
- supplier
- existing contact
- trade network

Needs immediate confirmation that the business is legitimate, professional and easy to contact.

---

# 5. Brand Requirements

The site must accurately communicate:

- NCA HVAC is locally owned
- NCA HVAC is family-run
- NCA HVAC is owner-operated
- the owner has more than a decade of hands-on HVAC industry experience
- NCA HVAC itself is a new business
- customers deal directly with the technician responsible for the work
- advice is honest, practical and tailored to the customer
- the business services residential and commercial customers
- primary operating area is Perth metropolitan
- regional Western Australian work may be considered by arrangement

Do not imply:

- a large field team
- national coverage
- decades of company history
- a large corporate structure

---

# 6. Information Architecture

Required public pages:

```text
/
├── /about
├── /services
└── /contact
```

Optional legal routes:

```text
/privacy
/terms
```

No separate pages are required at launch for:

- qualifications
- licences
- gallery
- industry experience
- brands / systems
- individual suburbs

These can be introduced later if SEO or commercial needs justify them.

---

# 7. Navigation

Primary nav:

- Home
- About
- Services
- Contact

Persistent primary CTA:

**Request a Free Quote**

Persistent phone action:

**Call Now**

Mobile navigation must surface both conversion actions.

---

# 8. Homepage Requirements

## 8.1 Hero

Must include:

- NCA HVAC logo
- `Residential | Commercial`
- headline: `Professional Air Conditioning and Refrigeration Services Across Perth`
- owner-operated positioning
- Request a Free Quote CTA
- Call Now CTA
- premium HVAC image/video background
- strong contrast overlay

## 8.2 Services summary

Four high-level categories:

1. Residential Air Conditioning
2. Commercial HVAC
3. Breakdown & Repair
4. Preventative Maintenance

Each links to the relevant section of `/services`.

## 8.3 Owner-operated value proposition

Must explain:

- direct technician contact
- personal service
- accountability
- practical solutions
- direct communication

## 8.4 Residential / commercial split

Present both markets clearly.

## 8.5 Why choose NCA HVAC

Use approved list from source brief.

## 8.6 Service area

Copy:

**Servicing Perth and Western Australia**

Clarify:

- Perth metropolitan area is core service area
- regional WA considered by arrangement

## 8.7 Final conversion section

Must include:

- Request a Free Quote
- Call Now
- email
- Perth, WA

---

# 9. About Page Requirements

Required content themes:

- Perth-based business
- family-run
- owner-operated
- direct technician communication
- owner has 10+ years hands-on HVAC experience
- practical advice
- quality workmanship
- long-term relationships with local customers/community

Important:

The copy must distinguish between owner experience and the age of NCA HVAC.

---

# 10. Services Page Requirements

## 10.1 Residential Air Conditioning

Required service items:

- Split-system installation and replacement
- Ducted air-conditioning installation
- Home air-conditioning upgrades
- Air-conditioning servicing
- Breakdown repairs and fault-finding
- Preventative maintenance
- Airflow and performance checks
- Energy-efficient replacement recommendations

## 10.2 Commercial HVAC

Required service items:

- Planned and reactive maintenance
- Commercial breakdown repairs
- Commercial HVAC installations
- Equipment replacement and upgrades
- Fault diagnosis and troubleshooting
- Equipment testing and commissioning
- Equipment condition inspections
- Commercial refrigeration services
- Central plant maintenance
- Ventilation and air-conditioning services
- Preventative maintenance programs

## 10.3 Breakdown and Repair

Required service items:

- Air-conditioning breakdowns
- Refrigeration faults
- Systems not heating or cooling correctly
- Airflow and temperature problems
- Water leaks and drainage issues
- Unusual noises or vibrations
- Equipment and control faults
- Repair and replacement recommendations

## 10.4 Preventative Maintenance

Required service items:

- Scheduled air-conditioning servicing
- Filter inspections and cleaning
- Coil inspections
- Drain and condensate checks
- System performance checks
- Equipment condition reporting
- Repair recommendations
- Residential and commercial maintenance schedules

---

# 11. Contact Page Requirements

## 11.1 Display details

- Phone: `[TO BE CONFIRMED]`
- Email: `admin@ncahvac.com.au`
- Location: Perth, WA
- Service area: Perth metropolitan + regional WA by arrangement

## 11.2 Quote form

Fields:

| Field | Type | Required |
|---|---|---:|
| Customer name | text | yes |
| Phone number | tel | yes |
| Email address | email | yes |
| Suburb / job location | text | yes |
| Residential / commercial | select/radio | yes |
| Service required | select | yes |
| Job / fault description | textarea | yes |
| Preferred timeframe | select/text | yes |
| Photos | file upload | no |

Suggested `service_required` values:

- New installation
- Replacement / upgrade
- Service / maintenance
- Breakdown / repair
- Commercial HVAC
- Commercial refrigeration
- Ventilation
- Other

Suggested timeframe values:

- As soon as possible
- Within 1 week
- Within 2–4 weeks
- Planning / budgeting
- Other

---

# 12. Form Behaviour

Requirements:

- server-side validation
- client-side progressive validation
- spam protection
- CSRF protection where relevant
- rate limiting
- attachment validation
- human-readable error messages
- success state without losing context
- user data never written to public logs

Allowed photo formats:

- JPG
- JPEG
- PNG
- HEIC if implementation supports safe conversion

Recommended limits:

- max 5 files
- max 10 MB each
- validate MIME type server-side
- strip potentially unsafe metadata where practical
- store privately, not in a public bucket

Quote requests should be delivered to:

`admin@ncahvac.com.au`

Optional later:

- CRM integration
- job-management integration
- automated acknowledgement email

---

# 13. Content Rules

## 13.1 Allowed positioning

Use:

- family-run
- owner-operated
- locally owned
- Perth-based
- qualified
- licensed
- insured
- 10+ years hands-on industry experience
- practical advice
- quality workmanship
- direct communication

Subject to final client confirmation for any legal/licensing wording.

## 13.2 Prohibited claims unless explicitly confirmed

Do not claim:

- 24/7 emergency service
- same-day service
- guaranteed response times
- “Perth's #1”
- “best in Perth”
- fixed prices
- manufacturer-authorised status
- specific warranties
- 10+ years as NCA HVAC
- large fleet / large team
- nationwide coverage

---

# 14. Photography Requirements

Photos supplied by the client may include previous-employment work.

Rules:

- never label those images as NCA HVAC projects
- caption when needed:
  `Work completed during the owner's HVAC career.`
- do not publish previous employer branding
- do not publish confidential client details
- do not publish equipment IDs
- do not publish identifiable people without permission

There is no dedicated photo gallery at launch.

---

# 15. SEO Requirements

## 15.1 Primary local topic set

Home:

- air conditioning Perth
- HVAC Perth
- refrigeration Perth
- commercial HVAC Perth
- air conditioning services Perth

Services:

- split system installation Perth
- ducted air conditioning Perth
- air conditioning repair Perth
- commercial HVAC Perth
- refrigeration repair Perth
- HVAC maintenance Perth
- preventative HVAC maintenance Perth

About:

- owner-operated HVAC Perth
- family-run air conditioning Perth

Contact:

- air conditioning quote Perth
- HVAC quote Perth

Do not keyword-stuff.

## 15.2 Metadata

Each page requires:

- unique title
- unique meta description
- canonical URL
- Open Graph title
- Open Graph description
- Open Graph image
- Twitter card metadata

## 15.3 Structured data

Use JSON-LD.

Recommended:

- `LocalBusiness`
- preferably `HVACBusiness` if implemented consistently with schema support
- `Service`
- `BreadcrumbList`
- `WebSite`
- `Organization`

Do not add review aggregate schema without genuine qualifying reviews.

## 15.4 Sitemap

Generate:

- `/sitemap.xml`
- `/robots.txt`

---

# 16. Accessibility Requirements

Target:

**WCAG 2.2 AA**

Minimum requirements:

- semantic HTML
- landmarks
- one H1 per page
- logical heading order
- skip link
- keyboard navigation
- labelled form fields
- error summaries
- `aria-describedby` for form help/error
- alt text
- reduced motion
- colour contrast
- focus visibility
- minimum target size
- no keyboard traps

---

# 17. Performance Requirements

Performance is a product requirement.

Target mobile Lighthouse:

- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

Target Core Web Vitals:

- LCP ≤ 2.5 s
- INP ≤ 200 ms
- CLS ≤ 0.1

Media rules:

- responsive images
- next-gen formats where appropriate
- lazy-load below fold
- hero visual prioritized
- no unnecessary client-side hydration
- no heavy animation library unless justified

---

# 17A. Visual Implementation Non-Negotiables

The production implementation must follow `design.md` as the visual source of truth.

Required:

- global background `#111111`
- Barlow and Barlow Condensed
- zero-radius buttons, cards and inputs
- max-width 1400px content containers
- 20px base horizontal padding
- fixed 80px navigation
- NCA blue `#0B63D8` as dominant CTA / focus colour
- NCA red `#E8222A` as secondary signal accent
- white/5 and white/10 borders
- low-opacity luminosity-blended imagery
- grayscale-to-colour service card hover treatment
- Solar icon set via Iconify
- 40s trust ticker where motion is enabled
- reduced-motion fallback
- no BRIX branding, electrical services, solar services or unsupported source-site affiliations

The source design's structure may be reproduced, but all business claims and service content must remain governed by the NCA HVAC brief.

---

# 18. Technical Architecture

Recommended stack:

```text
Framework: Next.js
Router: App Router
Language: TypeScript
Styling: CSS Modules or equivalent scoped CSS
Deployment: Vercel
Runtime: Node.js
Forms: Server Actions or route handlers
Validation: Zod
Spam protection: Cloudflare Turnstile
Email: Resend / equivalent transactional service
Image pipeline: Next/Image + approved asset pipeline
Analytics: Plausible, GA4, or equivalent
Error monitoring: optional Sentry
```

The site should be primarily statically rendered.

Client-side React should be limited to components requiring interaction.

---

# 19. Proposed Repository Structure

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── privacy/
│   │   └── page.tsx
│   ├── api/
│   │   └── quote/
│   │       └── route.ts
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── site-header/
│   ├── site-footer/
│   ├── hero/
│   ├── service-index/
│   ├── quote-form/
│   ├── cta/
│   └── image-block/
├── lib/
│   ├── validation/
│   ├── email/
│   ├── security/
│   └── analytics/
├── content/
│   ├── home.ts
│   ├── about.ts
│   └── services.ts
└── styles/
    ├── tokens.css
    └── globals.css
```

---

# 20. Content Model

Use structured content rather than embedding large strings across UI components.

Example:

```ts
export interface ServiceGroup {
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  items: string[];
  image?: {
    src: string;
    alt: string;
    caption?: string;
  };
}
```

This allows future CMS migration without redesign.

---

# 21. Security Requirements

Quote form must include:

- server validation
- Turnstile verification
- rate limiting
- MIME checking for uploads
- file size limits
- safe filenames
- private object storage
- no direct executable uploads
- no user HTML
- no secrets exposed to client bundle

Recommended security headers:

```text
Content-Security-Policy
Referrer-Policy
Permissions-Policy
X-Content-Type-Options
Strict-Transport-Security
```

---

# 22. Privacy

The form collects personal information.

Requirements:

- clear privacy statement
- state purpose of collection
- no selling of lead data
- reasonable retention policy
- secure storage
- least-privilege access
- remove data when no longer required

If analytics or marketing cookies are used, implementation must reflect actual privacy obligations.

---

# 23. Analytics Events

Recommended event taxonomy:

```text
quote_cta_click
call_click
email_click
quote_form_start
quote_form_submit
quote_form_success
quote_form_error
photo_upload
service_view
```

Properties:

```text
page
service
device_category
cta_location
```

Do not transmit sensitive form contents into analytics.

---

# 24. Conversion Requirements

Primary conversion:

**Request a Free Quote**

Secondary conversion:

**Call Now**

CTA placement:

- header
- hero
- service sections
- final CTA
- contact page
- mobile menu

Mobile:

Use `tel:` for phone.

Desktop:

Phone remains clickable.

---

# 25. Error States

## 25.1 Form submission error

Message:

**We couldn't send your request. Please try again or contact NCA HVAC directly by phone or email.**

## 25.2 Upload error

Message must identify:

- unsupported format
- file too large
- too many files
- upload failure

## 25.3 404

Simple on-brand page with:

- NCA HVAC logo
- `Page not found`
- Home
- Services
- Request a Free Quote

---

# 26. Browser Support

Support current evergreen browsers:

- Chrome
- Edge
- Safari
- Firefox
- iOS Safari
- Android Chrome

No Internet Explorer requirement.

---

# 27. CMS Decision

Launch recommendation:

**No full CMS required.**

Reason:

- site is small
- content will change infrequently
- simpler security model
- better performance
- fewer dependencies

Use structured local content.

Future CMS options if required:

- Sanity
- Payload
- Contentful
- headless WordPress

Do not introduce a CMS unless there is a real editorial workflow requirement.

---

# 28. Deployment

Recommended:

- GitHub repository
- preview deployments on pull requests
- production on Vercel
- custom domain
- DNS managed centrally
- environment variables for email, anti-spam and storage

Environments:

```text
local
preview
production
```

No production data should be used in preview unless necessary.

---

# 29. Environment Variables

Example:

```bash
NEXT_PUBLIC_SITE_URL=
TURNSTILE_SITE_KEY=
TURNSTILE_SECRET_KEY=
RESEND_API_KEY=
QUOTE_TO_EMAIL=admin@ncahvac.com.au

UPLOAD_BUCKET=
UPLOAD_REGION=
UPLOAD_ACCESS_KEY=
UPLOAD_SECRET_KEY=
```

Never commit secrets.

---

# 30. Launch Blockers

The website must not be publicly launched until the following are confirmed:

- business phone number
- final insurance wording
- final licence / authorisation wording
- ABN / legal business details if displayed
- approved logo files
- approved final content
- all photography
- photo usage rights
- previous-employer imagery review
- final email delivery test
- form spam protection
- mobile QA
- analytics configuration
- metadata
- sitemap
- robots
- favicon
- Open Graph image

---

# 31. Pre-Launch QA

Functional:

- nav links
- mobile menu
- all CTAs
- tel links
- mailto links
- quote form
- form validation
- photo upload
- error path
- success path
- anti-spam

Content:

- no fake company-age claims
- no unverified service claims
- no unapproved licence wording
- no previous-employer project mislabelling
- no placeholder phone in production

Technical:

- production build passes
- no console errors
- no 404 assets
- no mixed content
- canonical URLs correct
- sitemap valid
- robots correct
- structured data validates
- image dimensions defined
- Web Vitals checked

Accessibility:

- keyboard test
- screen reader spot-check
- labels
- focus states
- contrast
- reduced motion

---

# 32. Future Expansion

Potential phase-two additions:

- service landing pages
- suburb landing pages
- commercial maintenance enquiry flow
- downloadable maintenance capability statement
- customer review integration
- project case studies
- job-management integration
- CRM integration
- online booking
- maintenance reminders
- emergency service status if ever offered
- FAQ schema where genuinely useful

These should not be built into v1 unless required.

---

# 33. Acceptance Criteria

The website is ready for approval when:

1. It accurately reflects the supplied NCA HVAC business scope.
2. It visibly reads as family-run and owner-operated.
3. It does not imply a large company.
4. The owner’s experience and company age are not conflated.
5. Residential and commercial services are easy to find.
6. Quote and call actions are obvious.
7. The quote form works securely.
8. The site works cleanly on mobile.
9. Approved photography is used correctly.
10. Visual design aligns with the supplied NCA logo and the BRIX-derived dark industrial design specification in `design.md`.
11. Accessibility baseline is met.
12. Core Web Vitals targets are achievable.
13. SEO metadata and structured data are present.
14. Legal/licence/insurance content remains pending until confirmed.
15. Client final approval is received before production launch.
