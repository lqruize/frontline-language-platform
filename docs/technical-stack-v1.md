# Technical Stack V1

Status: design baseline
Scope: SaaS foundation for web, PWA, future mobile apps, multilingual courses, occupation-specific content, individual learners, and organization customers.

## 1. Design Goals

The first-stage stack should optimize for stability, low maintenance, clear hiring market, and a direct path from MVP to paid SaaS.

Primary goals:

- Build one shared platform, not separate websites per language or occupation.
- Keep course content, purchases, progress, media, and AI jobs in backend data models.
- Support individual learners and organizations from the beginning.
- Support responsive web first, PWA second, future mobile app later.
- Keep AI provider usage behind an internal gateway.
- Avoid experimental frameworks that increase operational risk.

## 2. Recommended First-Stage Stack

| Area | Recommendation | Reason |
| --- | --- | --- |
| Frontend | Next.js with React and TypeScript | Mature, strong SaaS ecosystem, server rendering, API routes, PWA support, easy deployment. |
| Styling | Tailwind CSS plus CSS variables | Fast implementation, consistent design tokens, works well for mobile-first interfaces. |
| Backend | Next.js server routes/actions for MVP; modular service layer | Keeps early platform simple while preserving a path to split services later. |
| Database | PostgreSQL | Reliable relational model for users, courses, organizations, purchases, progress, and audit history. |
| ORM | Prisma | Clear schema, migrations, TypeScript types, good developer velocity. |
| Auth | Clerk or Auth.js with adapter; choose Clerk if speed matters, Auth.js if self-control matters | Both support OAuth/email and can support organizations with custom modeling. |
| File and audio storage | S3-compatible object storage, such as Cloudflare R2, AWS S3, or Supabase Storage | Durable storage for audio, recordings, images, subtitles, and generated video assets. |
| CDN | Cloudflare CDN or storage-backed CDN | Needed for audio and future short-video delivery. |
| Payment | Stripe | Mature subscriptions, products, coupons, invoices, webhooks, refunds. |
| Email | Resend | Simple transactional email, good developer experience. |
| PWA | next-pwa or custom service worker after app routes stabilize | Avoid premature cache bugs; add PWA once learning flows are stable. |
| AI Gateway | Internal API module backed by provider adapters | Prevents direct UI calls to AI vendors and supports routing, fallback, cost logs, and review. |
| Queue/jobs | Inngest or BullMQ with Redis | Needed for TTS, imports, AI jobs, video generation, retries. Use Inngest first for low ops. |
| Analytics | PostHog for product analytics; database audit logs for compliance events | Tracks learning, funnels, retention, and content usage without mixing with audit data. |
| Error monitoring | Sentry | Mature SaaS error tracking. |
| Deployment | Vercel for web/API MVP; managed Postgres and object storage | Fast preview deployments; can migrate later if cost or control requires. |

## 3. Frontend Architecture

Use one Next.js application with route groups:

```text
app/
  (marketing)/
  (learner)/
  (admin)/
  api/
```

Frontend rules:

- Do not hard-code course sentences in components.
- All course content comes from database/API or imported seed data.
- UI text uses locale dictionaries.
- Learning pages are mobile-first.
- Admin pages can be desktop-optimized but must remain usable on tablets.
- Player controls should be componentized for reuse by web and future app.

Recommended frontend layers:

- `components/ui`: reusable controls.
- `components/learning`: course player, sentence card, glossary, audio controls.
- `components/admin`: content tables, import reports, review tools.
- `lib/api-client`: typed API access.
- `lib/i18n`: UI language dictionaries.

## 4. Backend Architecture

For the first stage, keep backend inside the Next.js app but separate logic from route handlers.

Recommended backend layers:

```text
src/server/
  auth/
  courses/
  commerce/
  entitlements/
  progress/
  media/
  ai-gateway/
  admin/
  audit/
```

Rules:

- Route handlers validate input and call service functions.
- Service functions enforce permissions.
- Database access stays in repository modules.
- Admin actions always write audit logs.
- AI and payment webhooks are handled server-side only.

## 5. Database

Use PostgreSQL with Prisma migrations.

Why relational first:

- Course hierarchy is relational.
- Users can belong to multiple organizations.
- Purchases, subscriptions, entitlements, and progress need transactional consistency.
- Content review and audit trails need reliable joins.

Use UUID primary keys for most tables.

Use stable slugs for public URLs:

- course slug
- occupation slug
- product slug
- bundle slug

## 6. Authentication

First-stage recommendation:

- Use Clerk if the priority is fastest production-grade auth and organization support.
- Use Auth.js if the priority is maximum ownership and lower vendor dependency.

Preferred MVP path: Clerk plus internal user/profile/org tables.

Authentication capabilities:

- Email magic link or email/password.
- Google OAuth.
- Future Apple login for mobile app.
- Admin roles stored in application database.
- Organization membership stored in application database.

Do not rely only on auth-provider metadata for business permissions.

## 7. File and Audio Storage

Use object storage for:

- normal sentence audio
- slow sentence audio
- user recordings
- generated TTS files
- images
- subtitles
- short video assets
- CSV import originals

Media records in database must store:

- storage key
- public or signed URL policy
- duration
- language
- provider
- status
- owning sentence or user recording

User recordings should be private by default and served through signed URLs.

## 8. Payment

Use Stripe in test mode during development.

Supported first-stage payment objects:

- single course purchase
- bundle purchase
- recurring membership
- coupon/promo code
- refund and cancellation webhooks

Rules:

- Stripe product IDs map to internal products/prices.
- Stripe webhooks create or revoke entitlements.
- Learning access checks internal entitlement rows, not Stripe directly.
- No payment secrets in frontend.

## 9. Email

Use Resend for:

- login notifications if needed
- purchase receipt follow-up
- subscription renewal/failure notice
- organization invite
- admin import result notice
- support email

Email templates should be versioned and localized.

## 10. PWA

Add PWA after learner routes and media behavior stabilize.

PWA first-stage requirements:

- manifest
- icons
- install prompt compatibility
- app shell caching
- versioned static asset caching
- no aggressive stale cache for course data
- safe cache invalidation for audio

Avoid caching entitlement responses for too long.

## 11. AI Gateway

AI Gateway is an internal server module/API. UI and admin tools never call model providers directly.

Gateway responsibilities:

- provider abstraction
- model routing
- prompt versioning
- cost tracking
- retry and fallback
- task queue integration
- output storage
- review status
- sensitive content gating

First providers can include:

- OpenAI for text, speech-to-text, TTS, and structured output.
- Alternative providers later through adapters.

## 12. Data Analytics

Use two kinds of analytics:

1. Product analytics in PostHog:
   - page views
   - lesson starts
   - sentence plays
   - completion events
   - purchase funnel
   - retention

2. Internal audit logs in PostgreSQL:
   - admin changes
   - imports
   - publish/unpublish
   - entitlement grants/revokes
   - AI jobs
   - sensitive content review

Do not use product analytics as an audit trail.

## 13. Deployment Platform

Recommended MVP deployment:

- Vercel for web/API.
- Neon or Supabase Postgres.
- Cloudflare R2 or S3 for storage.
- Resend for email.
- Stripe test mode then live mode.
- Sentry for errors.
- PostHog for analytics.

Environments:

- local
- preview
- staging
- production

Rules:

- Every PR can get a preview build.
- Production uses protected env vars.
- Database migrations are reviewed before production.
- Webhooks are configured separately by environment.

## 14. Recommended Repository Structure

```text
frontline-language-platform/
  app/
    (marketing)/
    (learner)/
    (admin)/
    api/
  src/
    components/
      ui/
      learning/
      admin/
    server/
      auth/
      courses/
      commerce/
      entitlements/
      progress/
      media/
      ai-gateway/
      audit/
    lib/
      i18n/
      config/
      validation/
    styles/
  prisma/
    schema.prisma
    migrations/
    seed/
  content/
    inbox/
    imported/
    archive/
  scripts/
    import-course-csv.ts
    validate-content.ts
  docs/
    architecture-v1.1-ai.md
    technical-stack-v1.md
    database-model-v1.md
    saas-permissions-v1.md
    implementation-roadmap-v1.md
  tests/
    unit/
    integration/
    e2e/
  public/
    icons/
    manifest.webmanifest
```

## 15. First-Stage Decision Summary

Recommended first-stage stack:

- Next.js
- React
- TypeScript
- Tailwind CSS
- PostgreSQL
- Prisma
- Clerk or Auth.js, with Clerk preferred for speed
- Stripe
- Resend
- Cloudflare R2 or S3-compatible storage
- PostHog
- Sentry
- Inngest or BullMQ
- Internal AI Gateway
- Vercel

This gives the product a practical SaaS foundation without locking it into one language, one occupation, one platform, or one AI provider.
