# Implementation Roadmap V1

Status: design baseline
Scope: staged implementation plan for the SaaS foundation. This roadmap intentionally avoids full feature development in the current design step.

## 1. Roadmap Principles

1. Build the platform foundation before importing large course libraries.
2. Keep content, commerce, progress, media, and AI separated from UI code.
3. Ship one narrow learner flow first, then expand.
4. Add payment only after entitlement logic is working in test mode.
5. Add PWA after routing, media, and cache invalidation are stable.
6. Add AI through the gateway, not directly from UI components.
7. Keep every stage reversible with migrations and audit logs.

## 2. Phase 0: Repository and Architecture Baseline

Goal: make the repository ready for product implementation.

Deliverables:

- Confirm architecture baseline in `docs/architecture-v1.1-ai.md`.
- Confirm technical stack in `docs/technical-stack-v1.md`.
- Confirm database model in `docs/database-model-v1.md`.
- Confirm SaaS permissions in `docs/saas-permissions-v1.md`.
- Confirm implementation roadmap in this file.
- Decide whether MVP uses Clerk or Auth.js.
- Decide storage provider: Cloudflare R2, S3, or Supabase Storage.
- Decide database host: Neon, Supabase, or other managed Postgres.

Exit criteria:

- Product owner approves the technical direction.
- No business code is required for this phase.

## 3. Phase 1: App Foundation

Goal: create a minimal SaaS app shell without full course features.

Deliverables:

- Next.js + TypeScript project.
- Tailwind CSS and design tokens.
- Basic route groups:
  - marketing
  - learner
  - admin
  - API
- Environment configuration pattern.
- Linting and formatting.
- Basic test setup.
- Health check route.
- Error monitoring placeholder.

Do not include yet:

- real Stripe checkout
- full course import
- AI provider keys
- production deployment automation

Exit criteria:

- App runs locally.
- Build passes.
- No course content hard-coded into UI.

## 4. Phase 2: Database and Core Models

Goal: implement the PostgreSQL schema for the minimum platform foundation.

Deliverables:

- Prisma setup.
- Initial migrations for:
  - users
  - profiles
  - organizations
  - organization_members
  - languages
  - occupations
  - courses
  - modules
  - lessons
  - sentences
  - sentence_translations
  - sentence_variants
  - recommended_responses
  - media
  - products
  - bundles
  - bundle_courses
  - prices
  - purchases
  - subscriptions
  - entitlements
  - enrollments
  - lesson_progress
  - sentence_progress
  - recordings
  - ai_jobs
  - content_reviews
  - video_projects
  - campaigns
  - audit_logs
- Seed base languages.
- Seed base roles if needed.
- Add migration rollback notes.

Exit criteria:

- Local database migrates cleanly.
- Schema supports individual and organization access.
- Entitlement query can be tested.

## 5. Phase 3: Authentication and User Profiles

Goal: allow users to sign in and maintain profile preferences.

Deliverables:

- Auth provider integration.
- User sync into internal `users` table.
- Profile page basics.
- Native language and target language preferences.
- Platform role loading.
- Protected route middleware.

Exit criteria:

- User can sign in.
- User profile row exists.
- Server routes can identify current user and role.

## 6. Phase 4: Course Read Model and One Pilot Course

Goal: display one reviewed course from structured data.

Deliverables:

- Course catalog read API.
- Course detail API.
- Lesson/sentence API.
- Import one small reviewed pilot course.
- Mobile-first learner page reading from database.
- Sentence translations, variants, recommended responses, and work scenarios displayed from data.

Do not include yet:

- large course library
- AI-generated course publishing
- advanced admin editing

Exit criteria:

- One course is fully data-driven.
- No sentence content is hard-coded in React components.
- Course displays on mobile and desktop.

## 7. Phase 5: Media and Audio Playback

Goal: support public course audio and future private recordings.

Deliverables:

- `media` table integration.
- Object storage configuration.
- Normal and slow audio metadata.
- Audio player component.
- Signed URL pattern for private media.
- Audio failure handling.

Exit criteria:

- Course sentence can play normal and slow audio.
- Media paths come from database.
- Missing audio does not break the page.

## 8. Phase 6: Learning Progress

Goal: make the product useful across sessions and devices.

Deliverables:

- Enrollment creation.
- Lesson progress.
- Sentence progress.
- Favorites.
- Daily practice flag.
- Repeat count and completed state.
- Resume last course and lesson.

Exit criteria:

- User progress persists in database.
- Refreshing page restores state.
- Progress is scoped correctly for individual and organization learning.

## 9. Phase 7: Admin Content Management MVP

Goal: let staff manage structured course content without editing code.

Deliverables:

- Admin course list.
- Module and lesson list.
- Sentence table.
- CSV import dry-run.
- CSV import report.
- Import archive policy.
- Review status fields.
- Audit logs for imports and content changes.

Exit criteria:

- Admin can import a course draft.
- Import errors are clear.
- No partial import on failure.
- Changes are auditable.

## 10. Phase 8: Reviews and Publishing

Goal: protect content quality and safety.

Deliverables:

- Human review workflow.
- Safety review workflow.
- Publish/unpublish actions.
- Review notes.
- Required review enforcement by safety level.
- Published-only learner APIs.

Exit criteria:

- Normal content requires human review.
- Safety/emergency content requires safety verification.
- Draft content is hidden from learners.

## 11. Phase 9: Commerce and Entitlements in Test Mode

Goal: implement access control before live payments.

Deliverables:

- Product and bundle admin basics.
- Price records.
- Stripe test mode setup.
- Checkout test flow.
- Webhook handler.
- Purchase records.
- Subscription records.
- Entitlement creation and revocation.
- Manual grant/revoke tool.

Exit criteria:

- Single course purchase grants access.
- Bundle grants included courses.
- Subscription grants membership access.
- Refund revokes entitlement.
- Locked courses are blocked server-side.

## 12. Phase 10: Organization SaaS MVP

Goal: support institution customers.

Deliverables:

- Organization creation.
- Organization member invitations.
- Organization roles.
- Organization course entitlement.
- Organization learner dashboard.
- Organization progress summary.
- Tenant-isolated APIs.

Exit criteria:

- Organization admin sees only own organization.
- Organization learners inherit assigned course access.
- Same user can belong to more than one organization.

## 13. Phase 11: PWA

Goal: make the learner experience installable and mobile-friendly.

Deliverables:

- Manifest.
- Icons.
- Service worker.
- App shell caching.
- Static asset versioning.
- Safe cache invalidation.
- iOS Safari checks.

Exit criteria:

- App can be installed.
- New version loads reliably.
- Entitlement and course data are not dangerously stale.

## 14. Phase 12: AI Gateway MVP

Goal: introduce AI safely behind internal services.

Deliverables:

- Provider adapter interface.
- Model routing rules.
- Prompt version registry.
- AI job queue.
- Cost logging.
- Retry and fallback.
- Sensitive content gating.
- AI output review state.

First task types:

- translation draft
- variants draft
- recommended responses draft
- TTS generation
- speech-to-text for user recording
- pronunciation feedback prototype

Exit criteria:

- UI never calls AI provider directly.
- AI jobs are logged.
- Sensitive output cannot publish without review.

## 15. Phase 13: Short-Video and Campaign Foundation

Goal: support marketing growth without compromising content quality.

Deliverables:

- Video project records.
- Campaign records.
- Script generation from reviewed course content.
- Subtitle export.
- Links back to course landing pages.

Exit criteria:

- Short-video scripts cite reviewed course content.
- Campaigns can be connected to courses/products.

## 16. Phase 14: Production Hardening

Goal: make the SaaS safe for real customers.

Deliverables:

- Staging environment.
- Production environment.
- Backups.
- Observability.
- Rate limits.
- Error monitoring.
- Webhook replay handling.
- Privacy controls for recordings.
- Admin audit review.
- Security review.

Exit criteria:

- Production deploy process is documented.
- Critical flows have tests.
- Payment and entitlement flows are verified.
- Rollback path is documented.

## 17. Recommended Build Order Summary

1. Architecture and design docs.
2. App shell.
3. Database schema.
4. Auth/profile.
5. One pilot course from database.
6. Audio/media.
7. Progress.
8. Admin import.
9. Review/publish.
10. Entitlements and Stripe test mode.
11. Organization SaaS.
12. PWA.
13. AI Gateway.
14. Short-video/campaigns.
15. Production hardening.

## 18. What Not To Do Early

Do not start with:

- importing every course
- live Stripe payments
- production deployment
- free-form AI chat
- native mobile app
- short-video automation
- complex gamification
- separate codebases by language or occupation

These can be valuable later, but they are risky before the core SaaS foundation is stable.

## 19. First Milestone Recommendation

The first milestone should be:

> A logged-in learner can open one reviewed course, play sentence audio, see translations and variants, mark progress, and have access controlled through an entitlement row.

This milestone proves the core platform model without overbuilding.
