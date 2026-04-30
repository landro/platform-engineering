# Principle 9: Build the foundation before the portal

> A portal built on a broken foundation will be abandoned. Invest in capabilities, reliability, and contracts first — the interface amplifies what is already there; it cannot substitute for what is not.

## 20 Practical Examples

1. **Make deployments reliable before surfacing them in a UI** — Ensure your deployment pipeline succeeds consistently (>99% success rate) before adding a portal button that triggers deployments. A portal that exposes flaky automation damages trust faster than no portal at all.

2. **Define service SLOs before building a status dashboard** — An uptime dashboard built on services without SLOs shows noise, not signal. Define SLOs per service first, then build the dashboard to track compliance against them.

3. **Establish secret management before building a self-service credential UI** — Set up Vault or a cloud-native secret store with proper policies and audit logging before exposing a self-service interface. The UI is only as safe as the backend it calls.

4. **Complete the onboarding workflow manually before automating it** — Walk three teams through onboarding using only runbooks and CLI commands before building a portal wizard. The manual process reveals missing steps that automated UIs silently skip.

5. **Instrument all platform APIs before building dashboards** — Add observability (request rates, error rates, latencies) to every internal API before surfacing metrics in a developer portal. Dashboards without reliable data mislead operators.

6. **Implement access control policies before offering self-service provisioning** — Define who can create which resources, in which environments, before building a portal that lets developers provision them. Self-service without guardrails is not self-service — it is a blast radius.

7. **Test disaster recovery before showing availability metrics** — Validate that backups restore, failover works, and recovery time meets your SLO before publishing an availability percentage. Displaying false confidence is worse than displaying no metric.

8. **Resolve the top three developer pain points before adding portal features** — Survey developers for their biggest friction points and fix the three most common platform-level issues before investing in new portal capabilities.

9. **Standardise logging before building a log search UI** — Define a structured log format and ensure all services emit it before building a search interface. A log UI over unstructured logs returns results teams cannot reliably query.

10. **Establish a change management process before exposing change history in a portal** — Implement deployment records (who deployed what, when, with what config) in your data layer before surfacing a change history view. The UI is only as trustworthy as the data it reads.

11. **Validate the golden path end-to-end before adding portal shortcuts** — Run a production deployment through the golden path manually and confirm every stage works correctly before adding one-click shortcuts. Shortcuts that hide broken steps are worse than no shortcuts.

12. **Define the platform contract before building a service catalogue** — Document what the platform provides and what it expects from services (resource labels, health endpoints, SLO definitions) before building a catalogue that displays compliance. The catalogue is a projection of the contract, not a substitute for it.

13. **Make rollbacks reliable before building a portal deploy button** — A deployment button that cannot roll back is a liability. Validate automated rollback end-to-end before surfacing deployment controls in a UI.

14. **Fix flaky CI before building a CI status portal** — A dashboard displaying flaky pipelines creates noise and trains teams to ignore it. Reduce the flaky test and infrastructure error rate to an acceptable level before investing in better pipeline visibility.

15. **Complete network segmentation before building a service-to-service auth UI** — Establish mTLS or a service mesh policy foundation before offering a portal for teams to configure service authorisation. The UI is meaningless if the underlying policy enforcement is absent.

16. **Implement audit logging before adding self-service admin capabilities** — Any portal feature that modifies production resources must have a corresponding audit trail. Build the audit log first; never add self-service controls without it.

17. **Stabilise the underlying API before building multiple portal layers on top** — If the internal API the portal calls is still changing frequently, adding portal layers multiplies the surface area of breaking changes. Stabilise the API contract before building additional consumers.

18. **Establish cost allocation tags before building a cost portal** — Tags applied consistently across all resources are the foundation of a cost dashboard. A cost portal built without reliable tagging shows inaccurate data and erodes confidence.

19. **Write automated platform health checks before creating a health status page** — Implement active checks that verify each platform component end-to-end before displaying a status page. A status page driven by human updates is out of date the moment it matters most.

20. **Train the platform team on the new capability before opening it to users** — Before launching a portal feature, ensure every platform team member can use it, explain it, and handle support requests for it. A portal that the team behind it does not understand will generate more questions than it answers.
