# Ledgerly 24/7 Project Context

Use this file as the handoff brief for any future AI coding assistant. Read it before changing the project.

## Copy-paste prompt for the next AI

You are continuing work on the existing Ledgerly 24/7 website in this repository. First read `AGENTS.md`, `PROJECT_CONTEXT.md`, `package.json`, and the files directly related to my requested change. Preserve the existing Next.js App Router structure, TypeScript strictness, Tailwind CSS v4 conventions, responsive behavior, accessibility, and current visual language. Do not replace working sections or redesign unrelated areas. Before editing, identify the smallest owning component, state one likely cause/implementation hypothesis, and choose one focused validation check. After editing, run the narrowest relevant check, then `npm run lint` or `npm run build` when appropriate. Do not commit changes. If a requirement is ambiguous, make the smallest reversible assumption and state it.

My requested change is:

[Describe the requested change here]

## Project purpose

Ledgerly 24/7 is a professional accounting and bookkeeping portfolio website for Aniza Maham. The site promotes bookkeeping, accounting, payroll, reporting, tax preparation support, and financial consultancy services for businesses in the USA, UK, Pakistan, and worldwide.

## Technology and commands

- Next.js `16.2.6` with the App Router
- React `19.2.4`, TypeScript `5`, Tailwind CSS `4`
- Framer Motion for animations
- Lucide React for icons
- `clsx` and `tailwind-merge` are installed
- Path alias: `@/*` maps to `src/*`
- Strict TypeScript is enabled

```bash
npm install
npm run dev
npm run lint
npm run build
npm start
```

The development site is normally available at `http://localhost:3000`. `next.config.ts` allows the dev origin `192.168.0.106` for local network testing.

## Routes

- `/` - Main one-page marketing/portfolio site
- `/get-started` - Multi-step client intake form
- `/api/intake` - Server-side intake validation and Supabase insertion endpoint
- `/privacy-policy` - Privacy policy
- `/terms-of-service` - Terms of service
- `/cookie-policy` - Cookie policy
- `/legal-notes` - Legal notes and disclaimers

Legal pages use the shared `PremiumLegalLayout` component for the Navbar, hero, table of contents, scroll tracking, legal content styling, and Footer.

## Main page order

`src/app/page.tsx` renders these sections in order:

1. `Navbar`
2. `Hero`
3. `Locations`
4. `Stats`
5. `About`
6. `Services`
7. `TrustSignals`
8. `Clients`
9. `Features`
10. `StrategySession`
11. `VideoSection`
12. `Testimonials`
13. `FAQ`
14. `Contact`
15. `Footer`

Most landing-page navigation uses hash links such as `/#services`, `/#about`, `/#software`, `/#testimonials`, `/#faq`, and `/#contact`.

## Component ownership map

- `Navbar.tsx`: fixed responsive navigation, mobile menu, booking dropdown, Calendly/WhatsApp/email links
- `Hero.tsx`: main headline, primary CTAs, dashboard mockup, intro video modal
- `Locations.tsx`: service locations and stylized map markers
- `Stats.tsx`: business statistics section
- `About.tsx`: founder/about section
- `Services.tsx`: categorized service cards and process video modal
- `TrustSignals.tsx`: software/tool cards and trust banner
- `Clients.tsx`: industries served
- `Features.tsx`: reasons to trust Ledgerly
- `StrategySession.tsx`: free consultation CTA
- `VideoSection.tsx` and `VideoModal.tsx`: video presentation and modal behavior
- `Testimonials.tsx`: autoplay testimonial image carousel
- `FAQ.tsx`: frequently asked questions accordion
- `Contact.tsx`: contact cards, Google Maps directions, and Get Started CTAs; the old Web3Forms message form has been removed
- `GetStartedForm.tsx`: responsive five-step client intake form with review and success states
- `CookieConsent.tsx`: delayed localStorage-based cookie consent banner
- `Footer.tsx`: branding, links, compliance claims, social links, consultation CTA
- `Breadcrumb.tsx`: legal-page breadcrumb navigation
- `PremiumLegalLayout.tsx`: shared legal-page layout and active section tracking

## Styling conventions

Global design tokens live in `src/app/globals.css` and are exposed as Tailwind theme colors:

- Primary blue: `#2563EB`
- Navy: `#0F172A`
- Secondary background: `#F8FAFC`
- Light blue accent: `#DBEAFE`
- Border: `#E2E8F0`
- Secondary text: `#64748B`

The page uses a clean blue/navy professional style, generous section spacing, rounded cards, responsive Tailwind utilities, and Framer Motion reveal/hover animations. Keep the established design consistent. Avoid changing global tokens for a local component request.

## Assets

Local assets are in `public/`:

- `public/images/Led_logo.png`
- `public/images/profile.jpg`
- `public/images/QuickBooks logo.png`
- `public/images/xero logo.jpg`
- `public/images/MS Excel logo.png`
- `public/images/wave logo.png`
- `public/images/r1.jpeg`, `r2.jpeg`, `r3.jpeg`, `r4.jpeg`, `r5.jpeg`, `r6.jpeg`, `r8.jpeg`, `r9.jpeg`, `r10.jpeg`, `r12.jpeg`, `r13.jpeg`
- `public/video/intro.mp4`

Use paths beginning with `/images/` or `/video/` from components. The Zoho logo is currently loaded from an external SVG URL in `TrustSignals.tsx`.

## External integrations and business details

- WhatsApp: `https://wa.me/923155130326`
- Email: `Bookkeepingbyaniza@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/aniza-maham-86ba6041a/`
- Main office: `67 West St, Brooklyn, NY 11222`
- Google Maps embed and directions are configured in `Contact.tsx` and `Locations.tsx`
- Intake submissions require `NEXT_PUBLIC_SUPABASE_URL` and server-only `SUPABASE_SERVICE_ROLE_KEY` in `.env.local`.
- Run `supabase/schema.sql` in the Supabase SQL editor before using the intake form.
- Optional email notifications use server-only `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, and `RESEND_TO_EMAIL`.

Do not expose private credentials in source control. Never add the actual Web3Forms key to this context file.

## Important implementation notes

- `layout.tsx` loads the Inter Google font, global CSS, metadata, and `CookieConsent`.
- Components using state, effects, event handlers, Framer Motion, or browser APIs are client components and should keep the `"use client"` directive.
- The cookie banner stores `accepted` or `rejected` under localStorage key `cookie-consent` and appears after a short delay for users without a decision.
- The testimonials are image-based reviews rather than text objects. Preserve image aspect ratios when changing the carousel.
- The page currently contains marketing/legal claims such as certifications, compliance, client counts, and satisfaction percentages. Treat copy changes as content decisions and do not invent stronger claims without user confirmation.
- External links generally open in a new tab. Preserve `rel="noopener noreferrer"` where appropriate.
- Keep IDs used by navigation stable unless updating every dependent link.

## Suggested change workflow

1. Read the relevant component and its nearest caller/style context.
2. Make the smallest focused change.
3. Run a focused validation command when one exists.
4. Run `npm run lint`; run `npm run build` for routing, metadata, environment, or production-rendering changes.
5. Report changed files, validation results, assumptions, and any unrelated pre-existing issues.
