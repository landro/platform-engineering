# Principle 5: Right-size your platform

> Match complexity to organisational need. A simple pipeline platform is as valid as a fully-orchestrated internal developer platform. Build for the problem you have today, not the organisation you may one day become.

## 20 Practical Examples

1. **Start with a shared CI pipeline, not a service mesh** — For a team of 10 engineers, a standardised GitHub Actions workflow delivers more value than Istio traffic management. Add complexity only when the problem it solves is real and present.

2. **Use a managed Kubernetes service before building your own control plane** — Let a cloud provider handle etcd, API server upgrades, and node provisioning until you have hundreds of clusters and genuine control plane requirements.

3. **Replace a complex internal portal with a well-maintained README** — If your platform serves three teams, a thorough `README.md` with working examples is more effective than a custom React portal that takes six months to build.

4. **Use GitHub Actions before adopting Tekton** — GitHub Actions covers the needs of most organisations without requiring Kubernetes expertise. Adopt a more complex pipeline engine only when specific limitations are hit.

5. **Choose a managed secret store over building one** — Use AWS Secrets Manager, HashiCorp Vault Cloud, or Azure Key Vault before building a custom secrets service. Managed services come with audit logs, rotation, and SLAs for free.

6. **Deploy to a single cloud region initially** — Multi-region active-active deployments solve latency and availability problems at scale. For most organisations, a single region with cross-zone redundancy is the right starting point.

7. **Use a monorepo before introducing a complex microservice mesh** — A single repository with a clear module structure is easier to operate for small teams. Split repositories and service meshes when Conway's Law demands it, not before.

8. **Adopt a PaaS for non-differentiating workloads** — Use Heroku, Render, or Fly.io for internal tools and low-traffic services instead of running full Kubernetes clusters for workloads that do not need that control.

9. **Document the "size trigger" for each platform component** — Write down the specific condition (e.g., "when we exceed 50 services") that would justify adding the next layer of complexity, so the team evaluates objectively rather than speculatively.

10. **Avoid multitenancy until you have multiple tenants** — Building a multi-tenant platform control plane before having two or more real tenants introduces premature complexity. Single-tenant first is a valid architecture choice.

11. **Use labels and namespaces before a full service catalogue** — Tag Kubernetes workloads with `team`, `env`, and `tier` labels early so you have structured metadata to build on — without committing to a full service catalogue before the need is proven.

12. **Standardise on one observability stack** — Pick one logging, metrics, and tracing tool per layer and use it everywhere rather than supporting multiple stacks to satisfy every team's preference. Complexity in observability hides operational risk.

13. **Leverage cloud-native load balancers before building ingress controllers** — AWS ALB or GCP Load Balancer covers the vast majority of ingress needs. Build custom ingress only when WAF rules, advanced routing, or cost at scale make it necessary.

14. **Write a one-page platform scope document** — Clearly state what the platform does and does not do. Publish it so teams do not expect capabilities the platform was never designed to provide.

15. **Resist requests to support every language runtime** — Define a supported runtime matrix (e.g., JVM, Node.js, Python) and decline to build golden paths for runtimes used by fewer than two teams until demand justifies the maintenance cost.

16. **Use feature flags before building a full experimentation platform** — A simple LaunchDarkly integration or a homegrown boolean flag table solves most A/B testing needs at small scale. A full-blown experimentation platform is a later-stage problem.

17. **Cap the number of platform components in flight** — Limit the platform team's work in progress (e.g., no more than three major initiatives at once) to ensure quality and adoption of each component before adding new ones.

18. **Evaluate build vs. buy against total cost of ownership** — Before building a custom tool, estimate maintenance cost over three years including on-call burden, upgrades, and documentation. Compare it honestly against a vendor or open-source alternative.

19. **Deprecate underused platform components** — If a capability has fewer than two active consumers after six months, question whether it belongs in the platform. Removing it reduces cognitive load for the entire organisation.

20. **Re-evaluate platform architecture when team size doubles** — Schedule a deliberate platform architecture review when the engineering organisation doubles in size. What was right-sized at 20 engineers may be under-scaled at 40 or over-engineered at 15.
