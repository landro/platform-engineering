---
layout: principle
title: "Principle 12: Define and honour the platform contract"
examples:
  - title: "Publish a one-page platform contract"
    body: "Write a clear, human-readable document that states what the platform provides (e.g., \"99.9% pipeline availability during business hours\"), what it requires from services (e.g., standard labels, health endpoints), and what it explicitly does not cover."
  - title: "Define SLOs for every platform component"
    body: "Publish service level objectives (availability, latency, error rate) for CI/CD, artifact registry, secret management, and the developer portal. Post them in the developer documentation."
  - title: "Publish an ownership boundary map"
    body: "Create a diagram or table that shows which team owns what: which Kubernetes components the platform team manages versus what product teams are responsible for, down to the namespace level."
  - title: "Document the supported resource request process"
    body: "Publish a clear process for how teams request new platform capabilities: how to submit a request, what information is needed, who reviews it, and what the decision timeline is."
  - title: "Version the platform contract"
    body: "Treat the platform contract as a versioned document. When the contract changes, publish a diff, communicate the change, and give teams time to adapt — just as you would a versioned API."
  - title: "Provide a written process for stepping off the golden path"
    body: "Publish the steps for teams that need to diverge: what justification is required, who approves exceptions, how the exception is tracked, and when it is reviewed for removal."
  - title: "Enforce the contract through automated checks"
    body: "Back up the contract's requirements (labels, resource limits, health probes) with CI policy checks and admission controllers so compliance is verified continuously, not just during audits."
  - title: "Define and communicate breaking change policy"
    body: "Document what constitutes a breaking change to the platform contract, how far in advance teams will be notified, and what migration support will be provided. Never break the contract silently."
  - title: "Publish an incident escalation matrix"
    body: "Provide a clear matrix that tells product teams exactly who to contact for each type of platform incident, at what severity level, and through which channel — so they are never guessing during an outage."
  - title: "Set explicit data retention policies"
    body: "State in the contract how long logs, metrics, traces, and artifacts are retained. Teams designing compliance or audit capabilities need to know this boundary before building, not after."
  - title: "Define \"best-effort\" vs. \"supported\" capabilities"
    body: "Label each platform feature as \"supported\" (with SLO guarantees) or \"best-effort\" (available but without formal SLO). Teams need to know which tier a capability sits in before relying on it for production workloads."
  - title: "Run a quarterly contract review"
    body: "Hold a structured review each quarter where the platform team and product team representatives assess whether the contract is still accurate, whether new obligations have emerged, and whether any guarantees need updating."
  - title: "Document what happens during platform maintenance windows"
    body: "State in the contract when planned maintenance windows occur, how teams are notified, and what the expected behaviour of platform components is during those windows."
  - title: "Establish an SLA for exception reviews"
    body: "When a team submits a request to diverge from the golden path, commit to a decision within a stated timeframe (e.g., five business days). Unanswered exception requests lead teams to bypass the process entirely."
  - title: "Publish a cost contract alongside the technical contract"
    body: "Specify what platform infrastructure costs are covered centrally and what costs teams are responsible for. Unclear cost boundaries create billing surprises and strained relationships."
  - title: "Provide contract compliance reports to teams"
    body: "Generate and send periodic reports to each product team showing which contract requirements they meet and which they do not, with links to remediation guidance."
  - title: "Create a contract FAQ"
    body: "Maintain a living FAQ that answers the most common questions teams ask about the contract (\"Can I use a different database?\", \"Who handles TLS certificate renewal?\"). Update it after every recurring support question."
  - title: "Link the platform contract in every service's README template"
    body: "Include a link to the current platform contract in the golden-path service template README so every new service owner reads it during onboarding."
  - title: "Hold the platform team accountable to the contract"
    body: "Report SLO compliance for each platform component monthly, publicly within the engineering organisation. If the platform team misses SLOs, it should be as visible as a product team outage."
  - title: "Retire obligations the platform no longer needs"
    body: "When a platform responsibility is transferred to a team or automated away, formally remove it from the contract and communicate the change. A contract that grows but never shrinks becomes unmanageable."
---

# Principle 12: Define and honour the platform contract

> The platform's job is to absorb operational complexity so that developers need not manage it themselves. In return, developers who stay within the contract receive its guarantees. Make this deal explicit — through service level objectives, documented ownership boundaries, and a published process for stepping off the path.

## 20 Practical Examples
