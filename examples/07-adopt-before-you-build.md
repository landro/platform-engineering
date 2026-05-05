---
layout: principle
title: "Principle 7: Adopt before you build"
examples:
  - title: "Use OpenTelemetry before writing a custom tracing SDK"
    body: "Adopt the vendor-neutral OpenTelemetry standard for metrics, logs, and traces rather than building an in-house instrumentation library that only your organisation knows."
  - title: "Adopt Argo CD before writing a custom deployment controller"
    body: "GitOps controllers like Argo CD and Flux are mature, well-documented, and widely supported. Use them before building a bespoke deployment operator."
  - title: "Use Helm charts before writing raw Kubernetes manifest generators"
    body: "Helm is the de-facto Kubernetes package manager. Adopt it (or Kustomize) before developing a custom templating system that developers must learn from scratch."
  - title: "Adopt Backstage before building a custom developer portal"
    body: "Backstage is a mature, extensible internal developer portal. Evaluate it seriously before committing engineering months to a bespoke portal with fewer features."
  - title: "Use Terraform modules from the public registry"
    body: "Leverage community-maintained Terraform modules for common AWS, GCP, or Azure resources before writing your own. Fork only when the community module does not meet your constraints."
  - title: "Adopt cert-manager for TLS before writing certificate automation scripts"
    body: "cert-manager is a production-grade Kubernetes add-on. Use it to automate certificate lifecycle management rather than writing cron jobs that interact with the CA API directly."
  - title: "Use Trivy or Grype for container scanning before building a scanner"
    body: "Mature open-source image scanners exist and integrate with CI pipelines in minutes. Adopt one before writing custom vulnerability scanning tooling."
  - title: "Leverage cloud provider IAM before building an authorisation service"
    body: "AWS IAM, GCP IAM, and Azure RBAC cover most access control needs. Build a custom authorisation layer only when your requirements genuinely exceed what cloud IAM provides."
  - title: "Use Renovate or Dependabot before writing dependency update scripts"
    body: "Automated dependency management tools exist and support dozens of ecosystems. Adopt them rather than writing bespoke update scripts that require ongoing maintenance."
  - title: "Adopt HashiCorp Vault before building a secrets service"
    body: "Vault offers dynamic secrets, lease management, audit logging, and extensive integrations. Evaluate it before designing a secrets service from scratch."
  - title: "Use Gateway API before writing a custom ingress controller"
    body: "Kubernetes Gateway API provides standardised, extensible ingress configuration. Adopt it before building a proprietary ingress abstraction that teams must learn in addition to Kubernetes."
  - title: "Adopt SLSA before creating a bespoke supply-chain security framework"
    body: "SLSA (Supply-chain Levels for Software Artifacts) provides an industry-standard maturity model for software supply chain security. Follow it rather than inventing an internal equivalent."
  - title: "Use OPA/Rego for policy-as-code before building a custom policy engine"
    body: "OPA is widely adopted, well-documented, and supported by most CI/CD tools. Adopt it before writing a bespoke rule engine that only your team understands."
  - title: "Leverage cloud-native autoscaling before building custom scaling logic"
    body: "Kubernetes HPA, VPA, and KEDA cover the vast majority of scaling use cases. Adopt them before writing a custom scaling controller."
  - title: "Use managed Postgres before building a database provisioning service"
    body: "Cloud-managed databases (RDS, Cloud SQL, Azure Database) handle patching, backups, and failover. Provision them via Terraform before building a database-as-a-service layer."
  - title: "Adopt trunk-based development conventions before writing branch management automation"
    body: "Establish team conventions for branching and release models using documented standards before building tooling to enforce them."
  - title: "Use cloud provider cost management tools before building a chargeback system"
    body: "AWS Cost Explorer, GCP Billing, and Azure Cost Management provide tagging-based cost allocation. Use them before building a custom chargeback system."
  - title: "Adopt conventional commits before writing a custom changelog generator"
    body: "The conventional commits specification and tools like `release-please` or `semantic-release` handle changelog generation and versioning. Adopt them before writing bespoke tooling."
  - title: "Use OWASP dependency-check before writing a security audit tool"
    body: "OWASP dependency-check and similar tools audit third-party dependencies against known vulnerability databases. Integrate them into CI before building custom audit pipelines."
  - title: "Audit your bespoke tools annually against the market"
    body: "Every year, review each internally-built platform component against available open-source and commercial alternatives. Retire and replace when the market has caught up — maintaining bespoke tools is a cost that compounds."
---

# Principle 7: Adopt before you build

> Apply established patterns, open standards, and proven tools before writing bespoke solutions. The platform engineering community has solved most foundational problems. Build only where genuine differentiation is needed — and retire what no longer serves.

## 20 Practical Examples
