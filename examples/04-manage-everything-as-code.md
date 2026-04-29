# Principle 4: Manage everything as code

> Infrastructure, pipelines, security policies, and golden path configurations belong in version control — testable, reviewable, and repeatable. Code is the source of truth until the abstraction leaks; when it does, the gap between declared and actual state is a risk that must be managed.

## 20 Practical Examples

1. **Store all Terraform in a monorepo** — Keep every infrastructure module, environment configuration, and variable file in a single versioned repository so infrastructure changes follow the same PR review process as application code.

2. **Version-control Kubernetes manifests with GitOps** — Use Argo CD or Flux to reconcile cluster state from a Git repository so that the only way to change production is through a reviewed and merged pull request.

3. **Define CI/CD pipelines in YAML committed to the repo** — Store every GitHub Actions workflow, Jenkins pipeline, or Tekton Task in the repository it belongs to so pipeline changes are reviewed alongside code changes.

4. **Policy-as-code with OPA/Rego** — Write all security and compliance policies as Rego rules committed to version control, tested with `opa test`, and enforced in CI rather than documented in a wiki that drifts.

5. **Manage DNS records as code** — Define all DNS entries in Terraform or Pulumi rather than clicking through a web console, so every record change is reviewable, auditable, and reproducible.

6. **Define Grafana dashboards in JSON/YAML** — Export dashboards as code (using Grafonnet or the Terraform Grafana provider) and store them in Git so dashboards cannot be silently modified or lost.

7. **Store alert rules alongside service code** — Keep Prometheus alerting rules in the same repository as the service they monitor so on-call runbooks, alert thresholds, and service code evolve together.

8. **Manage Kubernetes RBAC as code** — Define all `RoleBinding` and `ClusterRoleBinding` resources in Terraform or Kustomize overlays so that privilege escalations are always a reviewed change, not a manual `kubectl apply`.

9. **Automate certificate management via code** — Use cert-manager with configuration committed to Git rather than uploading PEM files through a UI, so certificate lifecycle (issue, renew, revoke) is fully automated and auditable.

10. **Codify network firewall rules** — Represent all security group and firewall rules as infrastructure-as-code rather than console-created rules. Enable `terraform plan` in CI to catch rule regressions before they reach production.

11. **Write golden-path templates as versioned Helm charts or Kustomize bases** — Store shared deployment templates in a versioned chart repository so every consuming service references a pinned version and upgrades are deliberate.

12. **Run `terraform validate` and `tflint` in CI** — Automatically validate and lint all Terraform on every pull request so syntax errors and style violations are caught before review, not during apply.

13. **Store secret rotation scripts in version control** — Keep automation for rotating credentials in Git (without the secrets themselves) so rotation procedures are auditable, repeatable, and not locked in one engineer's head.

14. **Use `atlantis` or similar for infrastructure review** — Run Terraform plan output automatically as a pull request comment so reviewers see the exact resource diff before approving an infrastructure change.

15. **Track configuration drift with scheduled reconciliation** — Run a nightly job that compares live cloud state against the declared state in Git and pages on-call if unmanaged resources are detected.

16. **Manage IAM roles and policies as code** — Define all IAM roles in Terraform or CloudFormation so that permission changes require a PR, pass OPA checks, and are logged in the audit trail automatically.

17. **Store Slack or PagerDuty notification configs as code** — Define escalation policies, on-call schedules, and alert routing rules in version-controlled configuration (e.g., the PagerDuty Terraform provider) so they are reproducible and reviewable.

18. **Codify environment promotion gates** — Express promotion criteria (e.g., "all integration tests green, DORA metrics within SLO") as code in the pipeline definition, not as informal team norms that vary over time.

19. **Commit Dependabot/Renovate configuration to the repo** — Store the dependency update configuration in `.github/dependabot.yml` or `renovate.json` so every project gets automated updates without manual enablement per repository.

20. **Write infrastructure tests with Terratest or Checkov** — Add automated tests for your Terraform modules that verify expected resources are created and security constraints are met, and run them on every PR to the platform infrastructure repo.
