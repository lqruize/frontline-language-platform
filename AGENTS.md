# Frontline Language Platform — Codex Instructions

## 1. Required Reading

Before analyzing or modifying this repository, read:

1. `README.md`
2. `docs/architecture-v1.1-ai.md`

The architecture document is the approved project baseline.

## 2. Product Definition

This is a multilingual life-and-work language-learning platform for immigrants, international students, and frontline workers.

The platform must support:

- multiple learner source languages;
- multiple target languages;
- daily-life courses;
- common workplace courses;
- occupation-specific courses;
- responsive web and PWA;
- future iOS and Android apps;
- course purchases, bundles, subscriptions, and institutional access;
- AI-assisted content, translation, voice, speaking practice, video production, support, and analytics.

Do not design the system as a single Chinese-to-English restaurant course.

## 3. Architecture Rules

1. Course content must be separate from application code.
2. Do not hard-code course sentences in UI components.
3. Do not build separate websites for each language or occupation.
4. Keep `sourceLanguage` and `targetLanguage` independent.
5. Courses and purchasable products are different objects.
6. Shared courses must not be copied into every occupation package.
7. Web, PWA, and future apps must share backend data, accounts, progress, purchases, and entitlements.
8. Use stable IDs for courses, modules, lessons, scenarios, sentences, translations, products, and bundles.
9. Do not bind the platform permanently to one AI model or provider.
10. AI services must be accessed through an internal AI gateway or provider abstraction.
11. Sensitive medical, legal, immigration, child-safety, medication, and workplace-safety content requires human review.
12. Preserve audit history and version information for published content.

## 4. Change-Control Rules

Before making a major change:

1. Inspect the current implementation.
2. Explain the problem.
3. Propose the smallest safe change.
4. List affected files.
5. Identify migration and rollback risks.
6. Wait for explicit approval when the task is an architecture change or major refactor.

Do not:

- rewrite the whole project without approval;
- delete existing course data;
- modify production data directly;
- push directly to `main`;
- change deployment settings without approval;
- remove existing working features without documenting replacements;
- introduce a new framework merely because it is newer.

## 5. Git Workflow

Use this workflow:

1. Read the approved architecture.
2. Create a dedicated branch.
3. Make focused changes.
4. Run validation, tests, linting, and build checks.
5. Show changed files and test results.
6. Create a Pull Request.
7. Wait for human approval before merging.

## 6. Course Content Rules

Course content should follow this hierarchy:

```text
Source Language
→ Target Language
→ Course
→ Module
→ Lesson or Scenario
→ Sentence
→ Translation
→ Variant
→ Recommended Response
→ Media
