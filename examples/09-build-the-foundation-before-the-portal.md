---
layout: principle
title: "Principle 9: Build the foundation before the portal"
examples:
  - title: "Make deployments reliable before surfacing them in a UI"
    body: "Ensure your deployment pipeline succeeds consistently (>99% success rate) before adding a portal button that triggers deployments. A portal that exposes flaky automation damages trust faster than no portal at all."
  - title: "Define service SLOs before building a status dashboard"
    body: "An uptime dashboard built on services without SLOs shows noise, not signal. Define SLOs per service first, then build the dashboard to track compliance against them."
  - title: "Establish secret management before building a self-service credential UI"
    body: "Set up Vault or a cloud-native secret store with proper policies and audit logging before exposing a self-service interface. The UI is only as safe as the backend it calls."
  - title: "Complete the onboarding workflow manually before automating it"
    body: "Walk three teams through onboarding using only runbooks and CLI commands before building a portal wizard. The manual process reveals missing steps that automated UIs silently skip."
  - title: "Instrument all platform APIs before building dashboards"
    body: "Add observability (request rates, error rates, latencies) to every internal API before surfacing metrics in a developer portal. Dashboards without reliable data mislead operators."
  - title: "Implement access control policies before offering self-service provisioning"
    body: "Define who can create which resources, in which environments, before building a portal that lets developers provision them. Self-service without guardrails is not self-service — it is a blast radius."
  - title: "Test disaster recovery before showing availability metrics"
    body: "Validate that backups restore, failover works, and recovery time meets your SLO before publishing an availability percentage. Displaying false confidence is worse than displaying no metric."
  - title: "Resolve the top three developer pain points before adding portal features"
    body: "Survey developers for their biggest friction points and fix the three most common platform-level issues before investing in new portal capabilities."
  - title: "Standardise logging before building a log search UI"
    body: "Define a structured log format and ensure all services emit it before building a search interface. A log UI over unstructured logs returns results teams cannot reliably query."
  - title: "Establish a change management process before exposing change history in a portal"
    body: "Implement deployment records (who deployed what, when, with what config) in your data layer before surfacing a change history view. The UI is only as trustworthy as the data it reads."
  - title: "Validate the golden path end-to-end before adding portal shortcuts"
    body: "Run a production deployment through the golden path manually and confirm every stage works correctly before adding one-click shortcuts. Shortcuts that hide broken steps are worse than no shortcuts."
  - title: "Define the platform contract before building a service catalogue"
    body: "Document what the platform provides and what it expects from services (resource labels, health endpoints, SLO definitions) before building a catalogue that displays compliance. The catalogue is a projection of the contract, not a substitute for it."
  - title: "Make rollbacks reliable before building a portal deploy button"
    body: "A deployment button that cannot roll back is a liability. Validate automated rollback end-to-end before surfacing deployment controls in a UI."
  - title: "Fix flaky CI before building a CI status portal"
    body: "A dashboard displaying flaky pipelines creates noise and trains teams to ignore it. Reduce the flaky test and infrastructure error rate to an acceptable level before investing in better pipeline visibility."
  - title: "Complete network segmentation before building a service-to-service auth UI"
    body: "Establish mTLS or a service mesh policy foundation before offering a portal for teams to configure service authorisation. The UI is meaningless if the underlying policy enforcement is absent."
  - title: "Implement audit logging before adding self-service admin capabilities"
    body: "Any portal feature that modifies production resources must have a corresponding audit trail. Build the audit log first; never add self-service controls without it."
  - title: "Stabilise the underlying API before building multiple portal layers on top"
    body: "If the internal API the portal calls is still changing frequently, adding portal layers multiplies the surface area of breaking changes. Stabilise the API contract before building additional consumers."
  - title: "Establish cost allocation tags before building a cost portal"
    body: "Tags applied consistently across all resources are the foundation of a cost dashboard. A cost portal built without reliable tagging shows inaccurate data and erodes confidence."
  - title: "Write automated platform health checks before creating a health status page"
    body: "Implement active checks that verify each platform component end-to-end before displaying a status page. A status page driven by human updates is out of date the moment it matters most."
  - title: "Train the platform team on the new capability before opening it to users"
    body: "Before launching a portal feature, ensure every platform team member can use it, explain it, and handle support requests for it. A portal that the team behind it does not understand will generate more questions than it answers."
---

# Principle 9: Build the foundation before the portal

> A portal built on a broken foundation will be abandoned. Invest in capabilities, reliability, and contracts first — the interface amplifies what is already there; it cannot substitute for what is not.

## 20 Practical Examples
