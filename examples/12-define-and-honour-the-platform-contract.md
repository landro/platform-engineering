# Principle 12: Define and honour the platform contract

> The platform's job is to absorb operational complexity so that developers need not manage it themselves. In return, developers who stay within the contract receive its guarantees. Make this deal explicit — through service level objectives, documented ownership boundaries, and a published process for stepping off the path.

## 20 Practical Examples

1. **Publish a one-page platform contract** — Write a clear, human-readable document that states what the platform provides (e.g., "99.9% pipeline availability during business hours"), what it requires from services (e.g., standard labels, health endpoints), and what it explicitly does not cover.

2. **Define SLOs for every platform component** — Publish service level objectives (availability, latency, error rate) for CI/CD, artifact registry, secret management, and the developer portal. Post them in the developer documentation.

3. **Publish an ownership boundary map** — Create a diagram or table that shows which team owns what: which Kubernetes components the platform team manages versus what product teams are responsible for, down to the namespace level.

4. **Document the supported resource request process** — Publish a clear process for how teams request new platform capabilities: how to submit a request, what information is needed, who reviews it, and what the decision timeline is.

5. **Version the platform contract** — Treat the platform contract as a versioned document. When the contract changes, publish a diff, communicate the change, and give teams time to adapt — just as you would a versioned API.

6. **Provide a written process for stepping off the golden path** — Publish the steps for teams that need to diverge: what justification is required, who approves exceptions, how the exception is tracked, and when it is reviewed for removal.

7. **Enforce the contract through automated checks** — Back up the contract's requirements (labels, resource limits, health probes) with CI policy checks and admission controllers so compliance is verified continuously, not just during audits.

8. **Define and communicate breaking change policy** — Document what constitutes a breaking change to the platform contract, how far in advance teams will be notified, and what migration support will be provided. Never break the contract silently.

9. **Publish an incident escalation matrix** — Provide a clear matrix that tells product teams exactly who to contact for each type of platform incident, at what severity level, and through which channel — so they are never guessing during an outage.

10. **Set explicit data retention policies** — State in the contract how long logs, metrics, traces, and artifacts are retained. Teams designing compliance or audit capabilities need to know this boundary before building, not after.

11. **Define "best-effort" vs. "supported" capabilities** — Label each platform feature as "supported" (with SLO guarantees) or "best-effort" (available but without formal SLO). Teams need to know which tier a capability sits in before relying on it for production workloads.

12. **Run a quarterly contract review** — Hold a structured review each quarter where the platform team and product team representatives assess whether the contract is still accurate, whether new obligations have emerged, and whether any guarantees need updating.

13. **Document what happens during platform maintenance windows** — State in the contract when planned maintenance windows occur, how teams are notified, and what the expected behaviour of platform components is during those windows.

14. **Establish an SLA for exception reviews** — When a team submits a request to diverge from the golden path, commit to a decision within a stated timeframe (e.g., five business days). Unanswered exception requests lead teams to bypass the process entirely.

15. **Publish a cost contract alongside the technical contract** — Specify what platform infrastructure costs are covered centrally and what costs teams are responsible for. Unclear cost boundaries create billing surprises and strained relationships.

16. **Provide contract compliance reports to teams** — Generate and send periodic reports to each product team showing which contract requirements they meet and which they do not, with links to remediation guidance.

17. **Create a contract FAQ** — Maintain a living FAQ that answers the most common questions teams ask about the contract ("Can I use a different database?", "Who handles TLS certificate renewal?"). Update it after every recurring support question.

18. **Link the platform contract in every service's README template** — Include a link to the current platform contract in the golden-path service template README so every new service owner reads it during onboarding.

19. **Hold the platform team accountable to the contract** — Report SLO compliance for each platform component monthly, publicly within the engineering organisation. If the platform team misses SLOs, it should be as visible as a product team outage.

20. **Retire obligations the platform no longer needs** — When a platform responsibility is transferred to a team or automated away, formally remove it from the contract and communicate the change. A contract that grows but never shrinks becomes unmanageable.
