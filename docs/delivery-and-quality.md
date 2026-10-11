# Delivery and quality

## Work management

Use a GitHub Issue with an objective, scoped acceptance criteria, validation,
risks, rollback, and human gates. Track active work in `Personal Portfolio &
Engineering Labs`; use pull requests for reviewable changes.

## Expected validation

- Run the affected backend build/test commands when backend code changes.
- Run the frontend's available lint, type-check, build, and test commands when
  frontend code changes.
- For Docker or manifest changes, validate syntax and use a separately approved
  environment before any deployment.
- For documentation-only work, verify Markdown links and the repository tree.

## Pull-request gate

A pull request should identify its issue, completed acceptance criteria,
validation evidence, documentation impact, risk/rollback, and anything needing
human review. Passing automation complements—rather than replaces—review.

## Quality posture

The root README describes health endpoints, container health checks, TypeScript,
and non-root container practices. Reconfirm their implementation before making
current security or production-readiness claims.
