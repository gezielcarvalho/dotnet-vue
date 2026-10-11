# Operations

## Current operating posture

The approved posture is local development and portfolio demonstration only.
Follow the root README for the local .NET/Vue workflow or Docker Compose
commands, and validate them in the current machine before use.

## Deployment boundary

`docker/` and `k8s/` include production-oriented Compose, Kubernetes, and
Swarm assets, but no environment is approved or managed by this repository
documentation. Do not apply manifests, publish images, expose services, or
configure DNS/TLS based on these files alone.

## Before approving an environment

Identify an owner and target environment; establish secret handling, image
registry ownership, access control, backups where applicable, monitoring and
logs, a rollback plan, and a reviewed release gate. Record the decision in an
ADR and a tracked issue before execution.

## Incident and support boundary

There is no supported production service or on-call commitment. A reproducible
local issue should be captured as a GitHub Issue with environment details,
steps to reproduce, expected/actual behaviour, and any safe diagnostics.
