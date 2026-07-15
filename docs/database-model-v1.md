# Database Model V1

Status: design baseline
Database: PostgreSQL
ORM recommendation: Prisma
Primary key style: UUID for business tables, stable slugs where public URLs need readability.

## 1. Modeling Principles

1. Separate users, organizations, content, commerce, progress, media, AI, and audit data.
2. Keep source language and target language independent.
3. Keep courses separate from products and bundles.
4. Use entitlements as the single access decision layer.
5. Store course content once and reuse it through products, bundles, memberships, and organizations.
6. Store user recordings privately and separately from public course media.
7. Preserve review status, version history, and audit logs for important actions.
8. Support individual learners and organization learners with the same user account.

## 2. Table Overview

Core tables:

- `users`
- `profiles`
- `organizations`
- `organization_members`
- `languages`
- `occupations`
- `courses`
- `modules`
- `lessons`
- `sentences`
- `sentence_translations`
- `sentence_variants`
- `recommended_responses`
- `media`
- `products`
- `bundles`
- `bundle_courses`
- `prices`
- `purchases`
- `subscriptions`
- `entitlements`
- `enrollments`
- `lesson_progress`
- `sentence_progress`
- `recordings`
- `ai_jobs`
- `content_reviews`
- `video_projects`
- `campaigns`
- `audit_logs`

## 3. Identity and Tenant Tables

### 3.1 `users`

Purpose: canonical user account used across web, PWA, future app, purchases, progress, admin, and organization membership.

Primary key:

- `id uuid primary key`

Main fields:

- `auth_provider text not null`
- `auth_provider_user_id text not null`
- `email text unique`
- `phone text`
- `status text not null default 'active'`
- `global_role text not null default 'learner'`
- `created_at timestamptz not null`
- `updated_at timestamptz not null`
- `last_login_at timestamptz`

Important indexes:

- unique `(auth_provider, auth_provider_user_id)`
- unique `(email)` where email is not null
- index `(global_role)`
- index `(status)`

Notes:

- `global_role` is for platform-wide roles only, such as platform admin or support.
- Organization roles live in `organization_members`.

### 3.2 `profiles`

Purpose: learner profile and preferences separate from auth identity.

Primary key:

- `user_id uuid primary key references users(id)`

Main fields:

- `display_name text`
- `native_language_code text references languages(code)`
- `preferred_target_language_code text references languages(code)`
- `country text`
- `timezone text`
- `avatar_media_id uuid references media(id)`
- `onboarding_status text`
- `created_at timestamptz not null`
- `updated_at timestamptz not null`

Important indexes:

- index `(native_language_code)`
- index `(preferred_target_language_code)`
- index `(country)`

### 3.3 `organizations`

Purpose: tenant container for schools, employers, training agencies, or institutional customers.

Primary key:

- `id uuid primary key`

Main fields:

- `slug text unique not null`
- `name text not null`
- `type text not null`
- `status text not null default 'active'`
- `country text`
- `billing_email text`
- `owner_user_id uuid references users(id)`
- `created_at timestamptz not null`
- `updated_at timestamptz not null`

Important indexes:

- unique `(slug)`
- index `(status)`
- index `(owner_user_id)`

### 3.4 `organization_members`

Purpose: many-to-many relationship between users and organizations with tenant-specific roles.

Primary key:

- `id uuid primary key`

Foreign keys:

- `organization_id uuid references organizations(id)`
- `user_id uuid references users(id)`

Main fields:

- `role text not null`
- `status text not null default 'active'`
- `invited_by_user_id uuid references users(id)`
- `joined_at timestamptz`
- `created_at timestamptz not null`
- `updated_at timestamptz not null`

Allowed roles:

- `organization_admin`
- `organization_instructor`
- `organization_learner`
- `billing_manager`

Important indexes:

- unique `(organization_id, user_id)`
- index `(user_id)`
- index `(organization_id, role)`
- index `(organization_id, status)`

## 4. Language and Occupation Tables

### 4.1 `languages`

Purpose: supported source and target languages.

Primary key:

- `code text primary key`

Main fields:

- `name text not null`
- `native_name text not null`
- `direction text not null default 'ltr'`
- `enabled_as_source boolean not null default false`
- `enabled_as_target boolean not null default false`
- `status text not null default 'planned'`
- `created_at timestamptz not null`
- `updated_at timestamptz not null`

Important indexes:

- index `(enabled_as_source, status)`
- index `(enabled_as_target, status)`

### 4.2 `occupations`

Purpose: industry and occupation taxonomy for course discovery and packaging.

Primary key:

- `id uuid primary key`

Main fields:

- `slug text unique not null`
- `name text not null`
- `name_zh text`
- `parent_id uuid references occupations(id)`
- `status text not null default 'active'`
- `sort_order int not null default 0`
- `created_at timestamptz not null`
- `updated_at timestamptz not null`

Important indexes:

- unique `(slug)`
- index `(parent_id)`
- index `(status, sort_order)`

## 5. Course Content Tables

### 5.1 `courses`

Purpose: reusable learning content object. A course is not a product.

Primary key:

- `id uuid primary key`

Foreign keys:

- `occupation_id uuid references occupations(id)`
- `source_language_code text references languages(code)`
- `target_language_code text references languages(code)`

Main fields:

- `slug text not null`
- `title text not null`
- `subtitle text`
- `description text`
- `level text`
- `status text not null default 'draft'`
- `review_status text not null default 'draft'`
- `version int not null default 1`
- `created_by_user_id uuid references users(id)`
- `published_at timestamptz`
- `created_at timestamptz not null`
- `updated_at timestamptz not null`

Important indexes:

- unique `(slug, source_language_code, target_language_code)`
- index `(occupation_id)`
- index `(status, review_status)`
- index `(source_language_code, target_language_code)`

### 5.2 `modules`

Purpose: course section or unit.

Primary key:

- `id uuid primary key`

Foreign keys:

- `course_id uuid references courses(id) on delete cascade`

Main fields:

- `slug text not null`
- `title text not null`
- `description text`
- `sequence int not null`
- `status text not null default 'active'`
- `created_at timestamptz not null`
- `updated_at timestamptz not null`

Important indexes:

- unique `(course_id, slug)`
- unique `(course_id, sequence)`
- index `(course_id, status)`

### 5.3 `lessons`

Purpose: normal learning unit or scenario container inside a module.

Primary key:

- `id uuid primary key`

Foreign keys:

- `module_id uuid references modules(id) on delete cascade`

Main fields:

- `slug text not null`
- `title text not null`
- `lesson_type text not null`
- `learning_goal text`
- `sequence int not null`
- `status text not null default 'active'`
- `created_at timestamptz not null`
- `updated_at timestamptz not null`

Allowed `lesson_type` examples:

- `sentence_set`
- `scenario`
- `listening_drill`
- `speaking_drill`

Important indexes:

- unique `(module_id, slug)`
- unique `(module_id, sequence)`
- index `(module_id, lesson_type)`

### 5.4 `sentences`

Purpose: target-language sentence or scenario turn.

Primary key:

- `id uuid primary key`

Foreign keys:

- `course_id uuid references courses(id) on delete cascade`
- `module_id uuid references modules(id) on delete cascade`
- `lesson_id uuid references lessons(id) on delete cascade`

Main fields:

- `stable_key text not null`
- `sequence int not null`
- `speaker_role text not null`
- `target_text text not null`
- `work_scenario text`
- `difficulty text`
- `safety_level text not null default 'normal'`
- `review_status text not null default 'draft'`
- `active boolean not null default true`
- `created_at timestamptz not null`
- `updated_at timestamptz not null`

Important indexes:

- unique `(course_id, stable_key)`
- unique `(lesson_id, sequence)`
- index `(course_id, active)`
- index `(speaker_role)`
- index `(safety_level, review_status)`
- full-text index on `target_text` when search is added

### 5.5 `sentence_translations`

Purpose: source-language explanation of a sentence.

Primary key:

- `id uuid primary key`

Foreign keys:

- `sentence_id uuid references sentences(id) on delete cascade`
- `language_code text references languages(code)`

Main fields:

- `translation_text text not null`
- `explanation text`
- `status text not null default 'draft'`
- `reviewed_by_user_id uuid references users(id)`
- `reviewed_at timestamptz`
- `created_at timestamptz not null`
- `updated_at timestamptz not null`

Important indexes:

- unique `(sentence_id, language_code)`
- index `(language_code, status)`
- index `(reviewed_by_user_id)`

### 5.6 `sentence_variants`

Purpose: natural alternative ways the other person may say the same idea.

Primary key:

- `id uuid primary key`

Foreign keys:

- `sentence_id uuid references sentences(id) on delete cascade`
- `translation_language_code text references languages(code)`

Main fields:

- `target_text text not null`
- `translation_text text`
- `sequence int not null`
- `status text not null default 'draft'`
- `created_at timestamptz not null`
- `updated_at timestamptz not null`

Important indexes:

- unique `(sentence_id, sequence)`
- index `(sentence_id, status)`

### 5.7 `recommended_responses`

Purpose: short practical answers the learner can say.

Primary key:

- `id uuid primary key`

Foreign keys:

- `sentence_id uuid references sentences(id) on delete cascade`
- `translation_language_code text references languages(code)`

Main fields:

- `target_text text not null`
- `translation_text text`
- `sequence int not null`
- `status text not null default 'draft'`
- `created_at timestamptz not null`
- `updated_at timestamptz not null`

Important indexes:

- unique `(sentence_id, sequence)`
- index `(sentence_id, status)`

## 6. Media Table

### 6.1 `media`

Purpose: public course media and private learner media metadata.

Primary key:

- `id uuid primary key`

Foreign keys:

- `sentence_id uuid references sentences(id)`
- `owner_user_id uuid references users(id)`

Main fields:

- `media_type text not null`
- `storage_provider text not null`
- `storage_key text not null`
- `public_url text`
- `language_code text references languages(code)`
- `voice text`
- `speed text`
- `duration_ms int`
- `visibility text not null default 'private'`
- `status text not null default 'ready'`
- `created_at timestamptz not null`
- `updated_at timestamptz not null`

Important indexes:

- unique `(storage_provider, storage_key)`
- index `(sentence_id, media_type)`
- index `(owner_user_id, media_type)`
- index `(visibility, status)`

## 7. Commerce Tables

### 7.1 `products`

Purpose: purchasable item visible to users. Product is not a course.

Primary key:

- `id uuid primary key`

Main fields:

- `slug text unique not null`
- `name text not null`
- `description text`
- `product_type text not null`
- `status text not null default 'draft'`
- `created_at timestamptz not null`
- `updated_at timestamptz not null`

Important indexes:

- unique `(slug)`
- index `(product_type, status)`

### 7.2 `bundles`

Purpose: reusable package grouping courses or product benefits.

Primary key:

- `id uuid primary key`

Main fields:

- `slug text unique not null`
- `name text not null`
- `description text`
- `status text not null default 'draft'`
- `created_at timestamptz not null`
- `updated_at timestamptz not null`

Important indexes:

- unique `(slug)`
- index `(status)`

### 7.3 `bundle_courses`

Purpose: courses included in a bundle.

Primary key:

- `id uuid primary key`

Foreign keys:

- `bundle_id uuid references bundles(id) on delete cascade`
- `course_id uuid references courses(id)`

Main fields:

- `included_from timestamptz`
- `included_until timestamptz`
- `created_at timestamptz not null`

Important indexes:

- unique `(bundle_id, course_id)`
- index `(course_id)`

### 7.4 `prices`

Purpose: price records for products, bundles, subscriptions, and Stripe mapping.

Primary key:

- `id uuid primary key`

Foreign keys:

- `product_id uuid references products(id)`
- `bundle_id uuid references bundles(id)`

Main fields:

- `provider text not null default 'stripe'`
- `provider_price_id text`
- `currency text not null`
- `amount_cents int not null`
- `billing_interval text`
- `trial_days int`
- `status text not null default 'active'`
- `created_at timestamptz not null`
- `updated_at timestamptz not null`

Important indexes:

- unique `(provider, provider_price_id)` where provider_price_id is not null
- index `(product_id, status)`
- index `(bundle_id, status)`

### 7.5 `purchases`

Purpose: completed one-time purchases and Stripe checkout records.

Primary key:

- `id uuid primary key`

Foreign keys:

- `user_id uuid references users(id)`
- `organization_id uuid references organizations(id)`
- `product_id uuid references products(id)`
- `bundle_id uuid references bundles(id)`
- `price_id uuid references prices(id)`

Main fields:

- `provider text not null default 'stripe'`
- `provider_checkout_id text`
- `provider_payment_intent_id text`
- `amount_cents int not null`
- `currency text not null`
- `status text not null`
- `purchased_at timestamptz`
- `refunded_at timestamptz`
- `created_at timestamptz not null`
- `updated_at timestamptz not null`

Important indexes:

- index `(user_id, status)`
- index `(organization_id, status)`
- unique `(provider, provider_checkout_id)` where provider_checkout_id is not null

### 7.6 `subscriptions`

Purpose: recurring membership records.

Primary key:

- `id uuid primary key`

Foreign keys:

- `user_id uuid references users(id)`
- `organization_id uuid references organizations(id)`
- `product_id uuid references products(id)`
- `price_id uuid references prices(id)`

Main fields:

- `provider text not null default 'stripe'`
- `provider_subscription_id text`
- `status text not null`
- `current_period_start timestamptz`
- `current_period_end timestamptz`
- `cancel_at_period_end boolean not null default false`
- `created_at timestamptz not null`
- `updated_at timestamptz not null`

Important indexes:

- unique `(provider, provider_subscription_id)` where provider_subscription_id is not null
- index `(user_id, status)`
- index `(organization_id, status)`

### 7.7 `entitlements`

Purpose: single source of truth for course access.

Primary key:

- `id uuid primary key`

Foreign keys:

- `user_id uuid references users(id)`
- `organization_id uuid references organizations(id)`
- `course_id uuid references courses(id)`
- `product_id uuid references products(id)`
- `bundle_id uuid references bundles(id)`
- `purchase_id uuid references purchases(id)`
- `subscription_id uuid references subscriptions(id)`
- `granted_by_user_id uuid references users(id)`

Main fields:

- `source text not null`
- `status text not null default 'active'`
- `starts_at timestamptz not null`
- `ends_at timestamptz`
- `revoked_at timestamptz`
- `revoke_reason text`
- `created_at timestamptz not null`
- `updated_at timestamptz not null`

Important indexes:

- index `(user_id, course_id, status)`
- index `(organization_id, course_id, status)`
- index `(source, status)`
- index `(ends_at)`

## 8. Enrollment and Progress Tables

### 8.1 `enrollments`

Purpose: a user intentionally starts a course, whether free, paid, or institution-granted.

Primary key:

- `id uuid primary key`

Foreign keys:

- `user_id uuid references users(id)`
- `course_id uuid references courses(id)`
- `organization_id uuid references organizations(id)`
- `entitlement_id uuid references entitlements(id)`

Main fields:

- `status text not null default 'active'`
- `started_at timestamptz not null`
- `completed_at timestamptz`
- `last_opened_at timestamptz`

Important indexes:

- unique `(user_id, course_id, organization_id)`
- index `(user_id, status)`
- index `(course_id, status)`

### 8.2 `lesson_progress`

Purpose: per-lesson progress.

Primary key:

- `id uuid primary key`

Foreign keys:

- `user_id uuid references users(id)`
- `course_id uuid references courses(id)`
- `lesson_id uuid references lessons(id)`

Main fields:

- `status text not null default 'not_started'`
- `progress_percent int not null default 0`
- `started_at timestamptz`
- `completed_at timestamptz`
- `updated_at timestamptz not null`

Important indexes:

- unique `(user_id, lesson_id)`
- index `(user_id, course_id)`

### 8.3 `sentence_progress`

Purpose: sentence-level practice state.

Primary key:

- `id uuid primary key`

Foreign keys:

- `user_id uuid references users(id)`
- `sentence_id uuid references sentences(id)`

Main fields:

- `play_count int not null default 0`
- `repeat_count int not null default 0`
- `speaking_attempt_count int not null default 0`
- `favorite boolean not null default false`
- `daily_practice boolean not null default false`
- `status text not null default 'not_started'`
- `last_practiced_at timestamptz`
- `completed_at timestamptz`
- `updated_at timestamptz not null`

Important indexes:

- unique `(user_id, sentence_id)`
- index `(user_id, favorite)`
- index `(user_id, daily_practice)`
- index `(user_id, status)`

### 8.4 `recordings`

Purpose: private user speaking recordings and scoring metadata.

Primary key:

- `id uuid primary key`

Foreign keys:

- `user_id uuid references users(id)`
- `sentence_id uuid references sentences(id)`
- `media_id uuid references media(id)`

Main fields:

- `transcript text`
- `score numeric`
- `feedback jsonb`
- `provider text`
- `status text not null default 'created'`
- `created_at timestamptz not null`
- `deleted_at timestamptz`

Important indexes:

- index `(user_id, sentence_id)`
- index `(user_id, created_at)`
- index `(status)`

## 9. AI and Review Tables

### 9.1 `ai_jobs`

Purpose: async AI tasks for content, TTS, speech, scoring, support, and video.

Primary key:

- `id uuid primary key`

Foreign keys:

- `created_by_user_id uuid references users(id)`
- `reviewed_by_user_id uuid references users(id)`

Main fields:

- `job_type text not null`
- `provider text`
- `model text`
- `prompt_version text`
- `input_ref jsonb`
- `output_ref jsonb`
- `status text not null default 'queued'`
- `sensitive boolean not null default false`
- `review_status text not null default 'not_required'`
- `cost_cents int`
- `attempt_count int not null default 0`
- `error_message text`
- `created_at timestamptz not null`
- `completed_at timestamptz`

Important indexes:

- index `(job_type, status)`
- index `(created_by_user_id, created_at)`
- index `(review_status)`

### 9.2 `content_reviews`

Purpose: human review and safety verification for content.

Primary key:

- `id uuid primary key`

Foreign keys:

- `course_id uuid references courses(id)`
- `sentence_id uuid references sentences(id)`
- `reviewer_user_id uuid references users(id)`

Main fields:

- `review_type text not null`
- `status text not null`
- `notes text`
- `required_for_publish boolean not null default false`
- `created_at timestamptz not null`
- `reviewed_at timestamptz`

Important indexes:

- index `(course_id, status)`
- index `(sentence_id, status)`
- index `(reviewer_user_id, status)`

### 9.3 `video_projects`

Purpose: short-video production projects linked to reviewed course content.

Primary key:

- `id uuid primary key`

Foreign keys:

- `course_id uuid references courses(id)`
- `created_by_user_id uuid references users(id)`
- `ai_job_id uuid references ai_jobs(id)`

Main fields:

- `title text not null`
- `platform text`
- `script text`
- `status text not null default 'draft'`
- `created_at timestamptz not null`
- `updated_at timestamptz not null`

Important indexes:

- index `(course_id, status)`
- index `(platform, status)`

### 9.4 `campaigns`

Purpose: marketing campaigns for courses, bundles, or videos.

Primary key:

- `id uuid primary key`

Foreign keys:

- `product_id uuid references products(id)`
- `bundle_id uuid references bundles(id)`
- `course_id uuid references courses(id)`
- `created_by_user_id uuid references users(id)`

Main fields:

- `slug text unique not null`
- `name text not null`
- `channel text`
- `status text not null default 'draft'`
- `starts_at timestamptz`
- `ends_at timestamptz`
- `created_at timestamptz not null`
- `updated_at timestamptz not null`

Important indexes:

- unique `(slug)`
- index `(channel, status)`

### 9.5 `audit_logs`

Purpose: immutable operational audit trail.

Primary key:

- `id uuid primary key`

Foreign keys:

- `actor_user_id uuid references users(id)`
- `organization_id uuid references organizations(id)`

Main fields:

- `action text not null`
- `entity_type text not null`
- `entity_id uuid`
- `before_data jsonb`
- `after_data jsonb`
- `ip_address text`
- `user_agent text`
- `created_at timestamptz not null`

Important indexes:

- index `(actor_user_id, created_at)`
- index `(organization_id, created_at)`
- index `(entity_type, entity_id)`
- index `(action, created_at)`

## 10. Entitlement Access Query

A user can access a course when at least one active entitlement exists:

```text
entitlements.status = 'active'
and entitlements.course_id = requested course
and entitlements.starts_at <= now()
and (entitlements.ends_at is null or entitlements.ends_at > now())
and (
  entitlements.user_id = current user
  or entitlements.organization_id in current user's active organization memberships
)
```

This lets the same course be unlocked by single purchase, bundle purchase, subscription, organization license, coupon, manual grant, or admin promotion.

## 11. Multi-Tenant Notes

- Individual users can learn without an organization.
- Organizations own memberships, seats, and organization-level entitlements.
- A user may belong to more than one organization.
- Organization admins can only see members, progress, and purchases inside their organization.
- Platform admins can manage all organizations.
- Tenant isolation must be enforced in service-layer queries and admin permissions.

## 12. Future Additions

Potential future tables:

- `course_versions`
- `sentence_glossary_terms`
- `promo_codes`
- `organization_seats`
- `support_tickets`
- `webhook_events`
- `prompt_versions`
- `model_providers`

These can be added after the MVP data model is stable.
