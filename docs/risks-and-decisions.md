# Risks and decisions

## Active risks

| Risk | Impact | Response |
| --- | --- | --- |
| Setup and dependency guidance may drift. | A reviewer cannot reproduce the showcase. | Revalidate local instructions before demos and update the README or a tracked issue. |
| Deployment artifacts may be mistaken for live operations. | Unsafe or unsupported infrastructure actions. | Treat Docker, Kubernetes, and Swarm files as unvalidated until an approved environment decision exists. |
| Authentication examples may be treated as complete production security. | Overstated security posture. | Retain the server-managed HttpOnly-cookie guidance and require a dedicated security review for changes. |
| Scope expands from showcase to product without governance. | Unclear priorities and unsupported operational claims. | Use issues, PRs, and ADRs to approve material changes. |

## Decision log

| Date | Decision | Rationale |
| --- | --- | --- |
| 2026-10-11 | Keep infrastructure assets as technical references, not operational commitments. | No active, approved environment is documented. |
| 2026-10-11 | Use the lightweight documentation model. | It gives reviewers context without duplicating the detailed README. |
