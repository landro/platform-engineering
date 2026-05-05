---
layout: principle
title: "Principle 4: Manage everything as code"
examples:
  - title: "Store Terraform in dedicated, purpose-scoped repositories"
    body: "Give each platform capability or service domain its own versioned repository for infrastructure modules, environment configuration, and variable files. Dedicated repositories keep ownership clear, limit blast radius, and allow teams to release infrastructure changes independently rather than serialising through a single monorepo pipeline."
  - title: "Version-control Kubernetes manifests with GitOps"
    body: "Use Argo CD or Flux to reconcile cluster state from a Git repository so that the only way to change production is through a reviewed and merged pull request."
  - title: "Define CI/CD pipelines in YAML committed to the repo"
    body: "Store every GitHub Actions workflow, Jenkins pipeline, or Tekton Task in the repository it belongs to so pipeline changes are reviewed alongside code changes."
  - title: "Policy-as-code with OPA/Rego"
    body: "Write all security and compliance policies as Rego rules committed to version control, tested with `opa test`, and enforced in CI rather than documented in a wiki that drifts."
  - title: "Manage DNS records as code"
    body: "Define all DNS entries in Terraform or Pulumi rather than clicking through a web console, so every record change is reviewable, auditable, and reproducible."
  - title: "Define Grafana dashboards in JSON/YAML"
    body: "Export dashboards as code (using Grafonnet or the Terraform Grafana provider) and store them in Git so dashboards cannot be silently modified or lost."
  - title: "Store alert rules alongside service code"
    body: "Keep Prometheus alerting rules in the same repository as the service they monitor so on-call runbooks, alert thresholds, and service code evolve together."
  - title: "Manage Kubernetes RBAC as code"
    body: "Define all `RoleBinding` and `ClusterRoleBinding` resources in Terraform or Kustomize overlays so that privilege escalations are always a reviewed change, not a manual `kubectl apply`."
  - title: "Automate certificate management via code"
    body: "Use cert-manager with configuration committed to Git rather than uploading PEM files through a UI, so certificate lifecycle (issue, renew, revoke) is fully automated and auditable."
  - title: "Codify network firewall rules"
    body: "Represent all security group and firewall rules as infrastructure-as-code rather than console-created rules. Enable `terraform plan` in CI to catch rule regressions before they reach production."
  - title: "Write golden-path templates as versioned Helm charts or Kustomize bases"
    body: "Store shared deployment templates in a versioned chart repository so every consuming service references a pinned version and upgrades are deliberate."
  - title: "Run `terraform validate` and `tflint` in CI"
    body: "Automatically validate and lint all Terraform on every pull request so syntax errors and style violations are caught before review, not during apply."
  - title: "Store secret rotation scripts in version control"
    body: "Keep automation for rotating credentials in Git (without the secrets themselves) so rotation procedures are auditable, repeatable, and not locked in one engineer's head."
  - title: "Use `atlantis` or similar for infrastructure review"
    body: "Run Terraform plan output automatically as a pull request comment so reviewers see the exact resource diff before approving an infrastructure change."
  - title: "Track configuration drift with scheduled reconciliation"
    body: "Run a nightly job that compares live cloud state against the declared state in Git and pages on-call if unmanaged resources are detected."
  - title: "Manage IAM roles and policies as code"
    body: "Define all IAM roles in Terraform or CloudFormation so that permission changes require a PR, pass OPA checks, and are logged in the audit trail automatically."
  - title: "Store Slack or PagerDuty notification configs as code"
    body: "Define escalation policies, on-call schedules, and alert routing rules in version-controlled configuration (e.g., the PagerDuty Terraform provider) so they are reproducible and reviewable."
  - title: "Codify environment promotion gates"
    body: "Express promotion criteria (e.g., \"all integration tests green, DORA metrics within SLO\") as code in the pipeline definition, not as informal team norms that vary over time."
  - title: "Commit Dependabot/Renovate configuration to the repo"
    body: "Store the dependency update configuration in `.github/dependabot.yml` or `renovate.json` so every project gets automated updates without manual enablement per repository."
  - title: "Write infrastructure tests with Terratest or Checkov"
    body: "Add automated tests for your Terraform modules that verify expected resources are created and security constraints are met, and run them on every PR to the platform infrastructure repo."
---

# Principle 4: Manage everything as code

> Infrastructure, pipelines, security policies, and golden path configurations belong in version control — testable, reviewable, and repeatable. Code is the source of truth until the abstraction leaks; when it does, the gap between declared and actual state is a risk that must be managed.

## 20 Practical Examples
