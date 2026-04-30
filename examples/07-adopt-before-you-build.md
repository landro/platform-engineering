---
layout: principle
title: "Principle 7: Adopt before you build"
---

# Principle 7: Adopt before you build

> Apply established patterns, open standards, and proven tools before writing bespoke solutions. The platform engineering community has solved most foundational problems. Build only where genuine differentiation is needed — and retire what no longer serves.

## 20 Practical Examples

1. **Use OpenTelemetry before writing a custom tracing SDK** — Adopt the vendor-neutral OpenTelemetry standard for metrics, logs, and traces rather than building an in-house instrumentation library that only your organisation knows.

2. **Adopt Argo CD before writing a custom deployment controller** — GitOps controllers like Argo CD and Flux are mature, well-documented, and widely supported. Use them before building a bespoke deployment operator.

3. **Use Helm charts before writing raw Kubernetes manifest generators** — Helm is the de-facto Kubernetes package manager. Adopt it (or Kustomize) before developing a custom templating system that developers must learn from scratch.

4. **Adopt Backstage before building a custom developer portal** — Backstage is a mature, extensible internal developer portal. Evaluate it seriously before committing engineering months to a bespoke portal with fewer features.

5. **Use Terraform modules from the public registry** — Leverage community-maintained Terraform modules for common AWS, GCP, or Azure resources before writing your own. Fork only when the community module does not meet your constraints.

6. **Adopt cert-manager for TLS before writing certificate automation scripts** — cert-manager is a production-grade Kubernetes add-on. Use it to automate certificate lifecycle management rather than writing cron jobs that interact with the CA API directly.

7. **Use Trivy or Grype for container scanning before building a scanner** — Mature open-source image scanners exist and integrate with CI pipelines in minutes. Adopt one before writing custom vulnerability scanning tooling.

8. **Leverage cloud provider IAM before building an authorisation service** — AWS IAM, GCP IAM, and Azure RBAC cover most access control needs. Build a custom authorisation layer only when your requirements genuinely exceed what cloud IAM provides.

9. **Use Renovate or Dependabot before writing dependency update scripts** — Automated dependency management tools exist and support dozens of ecosystems. Adopt them rather than writing bespoke update scripts that require ongoing maintenance.

10. **Adopt HashiCorp Vault before building a secrets service** — Vault offers dynamic secrets, lease management, audit logging, and extensive integrations. Evaluate it before designing a secrets service from scratch.

11. **Use Gateway API before writing a custom ingress controller** — Kubernetes Gateway API provides standardised, extensible ingress configuration. Adopt it before building a proprietary ingress abstraction that teams must learn in addition to Kubernetes.

12. **Adopt SLSA before creating a bespoke supply-chain security framework** — SLSA (Supply-chain Levels for Software Artifacts) provides an industry-standard maturity model for software supply chain security. Follow it rather than inventing an internal equivalent.

13. **Use OPA/Rego for policy-as-code before building a custom policy engine** — OPA is widely adopted, well-documented, and supported by most CI/CD tools. Adopt it before writing a bespoke rule engine that only your team understands.

14. **Leverage cloud-native autoscaling before building custom scaling logic** — Kubernetes HPA, VPA, and KEDA cover the vast majority of scaling use cases. Adopt them before writing a custom scaling controller.

15. **Use managed Postgres before building a database provisioning service** — Cloud-managed databases (RDS, Cloud SQL, Azure Database) handle patching, backups, and failover. Provision them via Terraform before building a database-as-a-service layer.

16. **Adopt trunk-based development conventions before writing branch management automation** — Establish team conventions for branching and release models using documented standards before building tooling to enforce them.

17. **Use cloud provider cost management tools before building a chargeback system** — AWS Cost Explorer, GCP Billing, and Azure Cost Management provide tagging-based cost allocation. Use them before building a custom chargeback system.

18. **Adopt conventional commits before writing a custom changelog generator** — The conventional commits specification and tools like `release-please` or `semantic-release` handle changelog generation and versioning. Adopt them before writing bespoke tooling.

19. **Use OWASP dependency-check before writing a security audit tool** — OWASP dependency-check and similar tools audit third-party dependencies against known vulnerability databases. Integrate them into CI before building custom audit pipelines.

20. **Audit your bespoke tools annually against the market** — Every year, review each internally-built platform component against available open-source and commercial alternatives. Retire and replace when the market has caught up — maintaining bespoke tools is a cost that compounds.
