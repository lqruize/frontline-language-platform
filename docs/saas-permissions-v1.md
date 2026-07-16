# SaaS Permissions V1

Status: design baseline
Scope: users, organizations, course administration, content review, purchases, entitlements, recordings, AI jobs, and audit controls.

## 1. Permission Principles

1. Authentication proves who the user is.
2. Authorization decides what the user can do.
3. Course access must always go through entitlements.
4. Organization data must be tenant-isolated.
5. Platform roles and organization roles are separate.
6. Admin actions must write audit logs.
7. Sensitive content and user recordings require stricter access rules.
8. UI hiding is not security; backend services must enforce permissions.

## 2. User Types and Roles

### 2.1 Individual Learner

Purpose: a personal user who buys or studies courses directly.

Can:

- Browse public course catalog.
- Access free preview content.
- Access courses unlocked by personal entitlement.
- Track personal progress.
- Save favorites and daily practice items.
- Create personal recordings.
- Delete own recordings when policy allows.

Cannot:

- See other users.
- See organization dashboards unless invited.
- Edit course content.
- See payment data beyond own receipts.

### 2.2 Platform Admin

Purpose: internal super admin.

Can:

- Manage all users, organizations, courses, products, entitlements, and reviews.
- View platform-wide analytics and audit logs.
- Grant or revoke manual entitlements.
- Configure AI providers and job policies.
- Access user recordings only for explicit support, review, or abuse/safety cases.

Must:

- Leave audit logs for sensitive actions.
- Avoid direct production data edits outside admin tools.

### 2.3 Content Editor

Purpose: creates and updates course content.

Can:

- Create draft courses, modules, lessons, sentences, variants, recommended responses, and glossary terms.
- Import CSV content into draft state.
- Request review.
- Generate AI draft content if allowed.

Cannot:

- Publish safety-sensitive content alone.
- View payment data.
- Grant purchases or entitlements.
- Access private user recordings by default.

### 2.4 Reviewer

Purpose: reviews ordinary content for quality and accuracy.

Can:

- Review draft content.
- Mark normal content as human reviewed.
- Reject content with notes.
- Request changes from editors.

Cannot:

- Safety-verify high-risk content unless also assigned safety reviewer role.
- Manage payments.
- Manage organizations.

### 2.5 Safety Reviewer

Purpose: reviews safety, emergency, medical, child-care, legal, immigration, medication, and workplace-risk content.

Can:

- Mark content as safety verified.
- Block publishing of unsafe content.
- Review AI-generated sensitive content.
- Add required safety notes.

Cannot:

- Bypass audit history.
- Publish without required workflow if policy requires two-step review.

### 2.6 Support Agent

Purpose: helps users and organizations.

Can:

- View user account status.
- View purchase status and entitlement status.
- Troubleshoot access issues.
- Trigger password/login support flows if supported.
- View limited progress summary.

Cannot:

- Edit course content.
- Change published content.
- Access user recordings unless explicitly escalated.
- Run high-cost AI jobs unless allowed.

### 2.7 Organization Admin

Purpose: manages a tenant organization.

Can within own organization:

- Invite members.
- Remove members.
- Assign organization roles.
- View organization learners.
- View organization course access.
- View organization-level progress summaries.
- Manage organization billing if also billing manager.

Cannot:

- See other organizations.
- Edit global course content.
- See personal purchases outside the organization.
- See private recordings unless organization policy and user consent allow it.

### 2.8 Organization Learner

Purpose: learner who studies through an organization entitlement.

Can:

- Access organization-assigned courses.
- Track personal progress.
- Use assigned practice tools.

Cannot:

- Manage organization members.
- See other learners' private data.
- Access courses outside personal or organization entitlements.

## 3. Multi-Tenant Structure

### 3.1 Individual Users

Individual users do not need an organization.

They can have:

- personal purchases
- personal subscriptions
- personal progress
- personal recordings
- personal entitlements

### 3.2 Organizations

An organization is a tenant boundary.

Each organization can have:

- multiple admins
- multiple learners
- billing managers
- organization purchases
- organization subscriptions
- organization course entitlements
- organization reports

### 3.3 Users in Multiple Organizations

A single user can join more than one organization.

Rules:

- Membership role is scoped to the organization.
- Progress can be personal, organization-scoped, or both depending on product policy.
- Organization admins only see the user's activity inside their organization.

### 3.4 Tenant Isolation

Every organization-scoped query must include `organization_id`.

Examples:

- Organization member list: filter by `organization_id`.
- Organization progress report: filter by `organization_id` enrollment or entitlement.
- Organization purchases: filter by `organization_id`.
- Organization audit logs: filter by `organization_id`.

Platform admins can bypass tenant filter only through platform-admin services with audit logs.

## 4. Course Access Rules

### 4.1 Public Catalog

Anyone can see:

- public course title
- description
- occupation
- level
- preview availability
- price or membership requirement

### 4.2 Free Preview

Unauthenticated users may access limited previews if configured.

Authenticated users may access free lessons if:

- course status is published
- lesson marked preview/free
- content is not restricted by organization-only product

### 4.3 Paid Course Access

A user can access a course if:

- the course is published
- the user has an active personal entitlement for the course, or
- the user is an active member of an organization with an active entitlement for the course, or
- the course is included in an active membership entitlement

### 4.4 Revoked or Expired Access

Access stops when:

- purchase is refunded
- subscription expires
- subscription is canceled after period end
- organization license expires
- admin revokes entitlement
- user is removed from organization

The user may keep historical progress records, but cannot open locked course content.

## 5. Course Editing Rules

Can create/edit drafts:

- platform admin
- content editor

Can review normal content:

- reviewer
- platform admin

Can safety verify sensitive content:

- safety reviewer
- platform admin

Can publish:

- platform admin
- authorized content lead role if added later

Publishing requires:

- course is structurally valid
- normal content is human reviewed
- safety/emergency content is safety verified
- required media is ready or intentionally omitted
- audit log is written

## 6. Payment Data Rules

Can view own purchases:

- individual learner

Can view organization billing:

- organization admin with billing permission
- billing manager
- platform admin
- support agent with limited view

Can issue refunds or manual grants:

- platform admin
- finance/support role if explicitly added later

Payment secrets and webhook handling are server-only.

## 7. Organization Management Rules

Organization admin can:

- manage members in own organization
- assign allowed organization roles
- view organization progress summaries
- manage organization course assignment if entitlement exists

Organization admin cannot:

- grant platform-level roles
- access another organization
- modify global course content
- change platform pricing

Platform admin can:

- create/suspend organizations
- manage organization admins
- view all tenants
- grant institutional entitlements

## 8. User Recording Access

Default rule: recordings are private to the learner.

Learner can:

- create own recordings
- listen to own recordings
- delete own recordings where policy allows

Support can access only when:

- user requests help
- abuse/safety review is needed
- platform policy allows access
- access is logged

Organization admins should not access raw recordings by default.

Possible future option:

- organization-level training programs can request explicit consent for instructor review.

## 9. AI Task Permissions

Can run low-risk AI draft tasks:

- content editor
- reviewer
- platform admin

Can run TTS generation:

- content editor
- platform admin

Can run pronunciation scoring:

- learner for own attempt
- platform services for requested practice

Can run sensitive AI tasks:

- safety reviewer
- platform admin
- content editor only if output remains draft and requires review

High-cost AI jobs require:

- role permission
- cost limit check
- job logging
- retry/fallback policy

## 10. Unified Entitlement Model

Entitlements are generated by multiple sources but checked through one table.

### 10.1 Single Course Purchase

Flow:

1. User buys a product linked to one course.
2. Stripe webhook confirms payment.
3. System creates `purchase`.
4. System creates active `entitlement` for that user and course.

### 10.2 Bundle Purchase

Flow:

1. User buys a bundle product.
2. System creates one purchase.
3. System creates entitlements for each course in `bundle_courses`.
4. Future bundle changes do not automatically rewrite historical access unless policy says so.

### 10.3 Annual Membership

Flow:

1. User starts subscription.
2. System creates subscription row.
3. System grants membership entitlements.
4. Entitlements expire at current period end unless renewed.
5. Webhooks update status.

### 10.4 Organization License

Flow:

1. Organization buys or receives license.
2. Entitlement is created for `organization_id`.
3. Active organization learners inherit access.
4. Removed members lose inherited access.

### 10.5 Coupon or Promo Code

Flow:

1. User redeems code.
2. System validates limits.
3. Entitlement source is `promo_code`.
4. Expiration is based on promo policy.

### 10.6 Admin Grant

Flow:

1. Platform admin grants course access.
2. Entitlement source is `admin_grant`.
3. Reason is logged.
4. Grant can be revoked.

### 10.7 Refund Revocation

Flow:

1. Stripe refund webhook arrives.
2. Purchase status becomes refunded.
3. Related entitlements become revoked.
4. Audit log records revocation.

### 10.8 Expiration

Entitlements are valid only when:

- status is active
- starts_at is in the past
- ends_at is null or in the future

A scheduled job can mark expired entitlements, but access checks must evaluate dates even if the scheduled job is delayed.

## 11. Permission Matrix

| Action | Learner | Org Learner | Org Admin | Editor | Reviewer | Safety Reviewer | Support | Platform Admin |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Browse catalog | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Access paid course | Entitlement | Entitlement | Entitlement | If granted | If granted | If granted | If granted | Yes |
| Edit draft content | No | No | No | Yes | Limited notes | Limited notes | No | Yes |
| Publish content | No | No | No | No | No | No | No | Yes |
| Safety verify | No | No | No | No | No | Yes | No | Yes |
| View own progress | Yes | Yes | Yes | No | No | No | Limited support | Yes |
| View org progress | No | Own only | Yes, own org | No | No | No | Limited support | Yes |
| Manage org members | No | No | Yes, own org | No | No | No | No | Yes |
| View payment data | Own only | Own only | Own org if billing | No | No | No | Limited | Yes |
| Access recordings | Own only | Own only | No by default | No | No | Review only | Escalated only | Escalated only |
| Run AI content jobs | No | No | No | Yes | Yes | Yes | No | Yes |
| Run AI speaking score | Own attempts | Own attempts | No | No | No | No | Support case | Yes |

## 12. Service-Level Enforcement

Every server action/API should follow this pattern:

1. Authenticate user.
2. Load platform role and organization memberships.
3. Validate input.
4. Check permission in service layer.
5. Perform database transaction.
6. Write audit log for sensitive changes.
7. Return least necessary data.

Do not rely on frontend route guards alone.

## 13. Audit Requirements

Must audit:

- course publish/unpublish
- safety verification
- CSV import
- entitlement grant/revoke
- refund-based access removal
- organization role changes
- user recording access by staff
- AI sensitive job approval
- payment webhook errors
- admin impersonation if ever added

## 14. First-Stage Permission Recommendation

Start with a small role set:

- learner
- platform_admin
- content_editor
- reviewer
- safety_reviewer
- support
- organization_admin
- organization_learner

Avoid creating too many roles before real workflows are proven. Add fine-grained permissions only when the admin workload requires it.
