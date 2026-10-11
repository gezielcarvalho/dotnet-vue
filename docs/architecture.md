# Architecture

## Component view

```text
Browser
  |
  v
Quasar SSR application (Vue 3, TypeScript, Tailwind, Pinia)
  |
  | API/proxy requests
  v
.NET 8 backend API
  |
  v
Health and authentication endpoints
```

The frontend provides server-side rendering and client interaction. The backend
exposes the API surface, including the health and authentication endpoints
documented in the root README. In development, the frontend proxy/API layer
connects the two components.

## Supporting artifacts

- `docker/` contains development and production-oriented Compose assets and
  container build definitions.
- `k8s/` contains Kubernetes and Swarm-oriented manifest artifacts.
- The root README is the detailed technical reference for ports, environment
  variables, and commands.

## Architecture boundary

These supporting artifacts document intended technical patterns. They do not
confirm an active registry, cluster, cloud account, domain, secret store, or
production release process.
