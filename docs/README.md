# Project documentation

This folder is the current-state entry point for the Dotnet-Vue showcase. It
uses the lightweight PMP/agile documentation structure used across the
portfolio: GitHub Issues and the portfolio Project track delivery, while these
documents record the durable project context.

## Current-state documents

| Document | Purpose |
| --- | --- |
| [Charter](charter.md) | Purpose, audience, and success measures. |
| [Scope and roadmap](scope-and-roadmap.md) | Current boundaries and next review points. |
| [Architecture](architecture.md) | Application components and their interactions. |
| [Delivery and quality](delivery-and-quality.md) | Delivery workflow and validation expectations. |
| [Operations](operations.md) | Local operation guidance and deployment boundaries. |
| [Risks and decisions](risks-and-decisions.md) | Active risks and decision log. |
| [ADRs](adr/README.md) | Architecture decision record process. |

## Detailed technical references

- The repository [README](../README.md) is the detailed source for local
  setup, API endpoints, Docker commands, environment variables, and container
  manifests.
- [draft.md](draft.md) retains implementation notes on Vue route-level code
  splitting and server-managed HttpOnly authentication cookies.

Infrastructure files in `docker/` and `k8s/` are retained technical artifacts.
They are not evidence of an approved or active deployment environment.
