---
layout: principle
title: "Principle 1: Make the right thing the easy thing — not the only thing"
examples:
  - title: "Scaffold with security baked in"
    body: "Provide a `create-service` CLI command that generates a new microservice with TLS, structured logging, and secret injection pre-configured so developers never start from a blank, insecure slate."
  - title: "Pre-approved base images"
    body: "Publish a curated set of hardened container base images in the internal registry. Developers pull `internal/node:20` and get a patched, minimal image without thinking about CVEs."
  - title: "Lint rules as guardrails, not blockers"
    body: "Ship a shared linter configuration that flags insecure patterns (e.g., hardcoded secrets, `HTTP` instead of `HTTPS`) in CI with clear fix instructions, rather than silently passing or hard-failing with no guidance."
  - title: "Default resource limits in Kubernetes"
    body: "Apply a `LimitRange` and `ResourceQuota` to every namespace by default so that new workloads automatically get sensible CPU and memory boundaries without requiring a ticket."
  - title: "One-command local environment"
    body: "Provide a `platform dev up` command that starts a local stack (database, message broker, stub services) with a single command, eliminating multi-page setup guides."
  - title: "Automated dependency updates"
    body: "Run Dependabot or Renovate pre-configured across all repositories so teams receive automatic PRs for dependency updates rather than having to remember to check."
  - title: "Secret rotation without code changes"
    body: "Integrate secrets management so that rotating a database password is a platform operation, not a developer task requiring a deployment."
  - title: "Built-in distributed tracing"
    body: "Inject an OpenTelemetry sidecar or SDK wrapper by default so every service emits traces without developers wiring up instrumentation manually."
  - title: "Self-healing deployments"
    body: "Configure liveness and readiness probes in the golden-path deployment template so Kubernetes restarts unhealthy pods automatically without developer intervention."
  - title: "Compliance-as-code in CI"
    body: "Embed Open Policy Agent (OPA) checks in the CI pipeline that block deployments with missing labels, wrong image registries, or overly permissive RBAC — with a link to the approved fix."
  - title: "Network policies by default"
    body: "Apply a default-deny network policy to all new namespaces so that only explicitly declared traffic is permitted, removing the need for developers to think about lateral movement risks."
  - title: "Escape hatch via `platform.override.yaml`"
    body: "Allow teams to declare justified exceptions in a versioned override file reviewed during pull requests, so diverging from the golden path is possible but auditable."
  - title: "Preview environments on every PR"
    body: "Automatically spin up an ephemeral environment for every pull request so reviewers can test changes without manually deploying to shared environments."
  - title: "Runbook links in alerts"
    body: "Attach a `runbook_url` label to every alert rule so that on-call engineers land directly on remediation steps instead of searching Confluence at 3 AM."
  - title: "Database migrations in the deployment pipeline"
    body: "Include a migration step in the golden-path pipeline that runs schema changes safely before rolling out the application, so developers don't run `psql` by hand in production."
  - title: "Role-based access templates"
    body: "Offer pre-defined IAM/RBAC role bundles (`developer`, `operator`, `read-only`) that teams request rather than composing permissions from scratch, reducing misconfigurations."
  - title: "Cost visibility in pull requests"
    body: "Post an automated cost estimate comment on infrastructure PRs so engineers see the financial impact of their changes before merging."
  - title: "Shared observability dashboards"
    body: "Pre-build Grafana dashboards for the standard golden-path stack (RED metrics, JVM heap, DB connections) so teams have useful dashboards from day one without building their own."
  - title: "Centralised log aggregation by default"
    body: "Route container stdout/stderr to the central log platform automatically via a DaemonSet, so developers `kubectl logs` in dev and query Loki/Splunk in production without extra setup."
  - title: "Graceful degradation patterns in the SDK"
    body: "Provide a platform SDK with a built-in circuit breaker and fallback interface so developers get resilience patterns without implementing Hystrix from scratch."
---

# Principle 1: Make the right thing the easy thing — not the only thing

> Every platform decision should answer: does this help developers focus on delivering business value, or does it add friction they must carry? Golden paths guide developers towards safe, reliable outcomes — with security and compliance built in by design, invisible rather than adversarial. They must always include escape hatches: teams that need to diverge responsibly should be supported, not punished.

## 20 Practical Examples
