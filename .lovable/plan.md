# PropyFy Enterprise Platform — Build Plan

This is a multi-phase build. I'll ship phases sequentially. Each phase is a working milestone you can review before I move on.

## Phase 1 — Design System Reset + Multi-Route Foundation

Rebuild the visual language and split the single page into routes.

- **Design tokens (`src/styles.css`)**: replace ink/gold palette
  - `--bg`: matte black `oklch(0.13 0 0)`
  - `--surface`: graphite `oklch(0.18 0 0)`
  - `--surface-2`: deep charcoal `oklch(0.22 0 0)`
  - `--accent`: electric blue `oklch(0.68 0.20 250)`
  - `--accent-glow`: blue glow for shadows/borders
  - `--silver`: metallic silver `oklch(0.78 0.01 250)`
  - `--text`: soft white `oklch(0.96 0 0)`
  - Typography: Inter (body) + Space Grotesk (display) — closest free pairing to SF Pro / Neue Haas
  - Glassmorphism utility (`.glass`), glow border (`.glow-border`), grain overlay retained

- **Routes** (`src/routes/`):
  - `index.tsx` — Hero + condensed highlights of each pillar
  - `about.tsx` — Company + pillars
  - `services.tsx` — 10 service cards
  - `projects.tsx` — Filterable project grid (static seed data this phase)
  - `projects.$slug.tsx` — Project detail page
  - `immersive.tsx` — VR / AV experience showcase
  - `experience-centre.tsx`
  - `research.tsx` — Insights/reports listing
  - `technology.tsx` — PropTech showcase
  - `contact.tsx` — Lead forms
  - Each route gets unique `head()` meta

- **Shared chrome**: enterprise Nav with mega-menu, refreshed Footer, ScrollProgress

## Phase 2 — Lovable Cloud + Lead Capture

- Enable Lovable Cloud (Supabase under the hood)
- Tables: `leads`, `enquiries`, `consultations`, `newsletter_subscribers`
- Public `INSERT` policies; admin-only `SELECT`
- Wire all contact / consultation / enquiry / newsletter forms to DB with Zod validation
- Toast confirmations + honeypot anti-spam

## Phase 3 — Auth + Roles

- Email/password + Google sign-in
- `profiles` table (auto-created via trigger)
- `app_role` enum: `admin`, `sales`, `partner`, `developer`, `investor`, `buyer`
- Separate `user_roles` table + `has_role()` security-definer function
- `/login`, `/signup`, `/reset-password` routes
- `_authenticated` layout route guard
- Role-gated dashboard shells under `/dashboard/*`

## Phase 4 — Projects CMS + CRM Skeleton

- `projects`, `project_media`, `categories`, `developers` tables
- Admin CRUD for projects (under `/dashboard/admin/projects`)
- Project gallery + brochure upload via Supabase Storage
- CRM: `leads` pipeline view (status, assigned_to, notes, follow-ups)
- Sales dashboard: assigned leads, activity feed

## Phase 5 — Research, Testimonials, Polish

- `reports`, `blog_posts`, `testimonials` tables + admin management
- Research downloads (gated email capture)
- Testimonial carousel pulling from DB
- Cinematic page transitions, parallax polish, motion sweep

## Phase 6 — AI Layer (optional / last)

- Lovable AI Gateway: project recommendation, smart search, chat assistant
- Streaming chat widget

---

## What I'll build now (Phase 1)

This response will deliver the full Phase 1: new design system, all public routes wired with content, enterprise nav/footer, and SEO meta per route. No backend yet — that comes in Phase 2 once you approve Phase 1's look.

Realistic expectation: even Phase 1 is a large turn (~15+ files). Phases 2–6 will each be their own approved iteration. The full spec (admin dashboards, CRM, AI chatbot, VR media pipeline) is realistically weeks of iterations, not a single build.

## Technical notes

- Stack stays TanStack Start (current template), not Next.js — Lovable's runtime is TanStack Start v1 on Cloudflare Workers. All your spec items work on this stack; just noting the spec's "Next.js + Express + Vercel" tech list doesn't apply here.
- All backend work uses Lovable Cloud + `createServerFn`, not Edge Functions.
- VR walkthrough media: I'll scaffold the UI and upload pipeline; you'll provide the actual VR assets.

Approve to start Phase 1.