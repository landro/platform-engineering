---
layout: principle
title: "Principle 6: Start with a minimal viable platform"
examples:
  - title: "Launch with a single golden-path pipeline"
    body: "Release a working CI/CD pipeline for one language (e.g., Java on Kubernetes) to production, gather feedback from real teams, and add the next language stack only after the first is stable and adopted."
  - title: "Deploy the MVP with one pilot team"
    body: "Onboard a single willing product team as your first user before any broader rollout. Their feedback will surface usability problems that reviews and demos never catch."
  - title: "Use a simple YAML config to describe a service"
    body: "Start with a minimal `service.yaml` (name, team, language, port) as the platform contract rather than designing a comprehensive schema upfront. Add fields only when teams ask for them."
  - title: "Provide a working hello-world template"
    body: "Create one fully functional example repository that can be forked, renamed, and deployed in under 30 minutes. Ship that before building the template catalogue."
  - title: "Skip the portal, start with the CLI"
    body: "A `platform` CLI that wraps common tasks (create, deploy, logs) gets into developers' hands faster than building a full web portal. Add the portal once the workflows are proven via the CLI."
  - title: "Cut scope at the first sign of schedule pressure"
    body: "When an MVP is at risk of slipping, remove features rather than delay the release. An on-time MVP that covers 60% of needs beats a comprehensive platform that arrives six months late."
  - title: "Limit the MVP to one environment"
    body: "Deliver a production environment first. Staging and development environment support can come in the next iteration, once the production deployment path is validated."
  - title: "Write the user guide before building the feature"
    body: "Draft the documentation for a capability before implementing it. If you cannot describe how a developer would use it in plain language, the design is probably not simple enough to ship."
  - title: "Use a shared spreadsheet as the first service catalogue"
    body: "Before building a service catalogue database or portal, maintain a shared spreadsheet of service name, owner, language, and repo. It is useful immediately and reveals what a real catalogue needs to store."
  - title: "Release behind a feature flag"
    body: "Roll out MVP platform capabilities to opt-in teams via a feature flag so you can gather feedback and iterate without blocking teams still on the old path."
  - title: "Define \"done\" for the MVP before starting"
    body: "Write three acceptance criteria (e.g., \"a new engineer can deploy a service without help in under 45 minutes\") and resist scope creep until all three are met and validated."
  - title: "Ship runbooks before automation"
    body: "Document the manual steps for a complex operation (e.g., certificate rotation) as a runbook first. Automate it in the next iteration once you have validated the steps are correct."
  - title: "Use existing tools as the first version"
    body: "Before writing a custom deployment operator, validate the workflow using `kubectl`, shell scripts, and Makefiles. Build the operator only when the manual process is proven and the automation need is clear."
  - title: "Timebox spikes to two days"
    body: "When evaluating a technology choice for the MVP, timebox the investigation to two days and make a decision with available information. Avoid analysis paralysis on tooling that can be changed later."
  - title: "Set a hard ship date for the MVP"
    body: "Commit publicly to an MVP launch date with leadership and pilot teams. The deadline creates the pressure to cut scope to essentials rather than gold-plating."
  - title: "Measure the MVP against one headline metric"
    body: "Pick a single metric (e.g., time-to-first-deployment) as the MVP success criterion. Resist adding more metrics until the first one is being hit consistently."
  - title: "Onboard three teams before adding new capabilities"
    body: "After launching the MVP, focus entirely on getting three product teams using it end-to-end before adding any new feature. Adoption depth beats feature breadth."
  - title: "Collect feedback with a five-question form after first use"
    body: "After a developer deploys their first service through the platform, send a short form asking what was hard, what was missing, and what worked well. Act on the top two themes."
  - title: "Publish the MVP changelog with known limitations"
    body: "Be transparent about what the MVP does not yet support. Teams trust a platform that is honest about its gaps more than one that over-promises."
  - title: "Plan the next iteration based on MVP feedback"
    body: "Do not plan iteration two until the MVP has been used by real teams for at least two weeks. Use observed friction points and user feedback to prioritise the next set of capabilities."
---

# Principle 6: Start with a minimal viable platform

> Ship the thinnest platform that delivers real value to real teams, then iterate. A working golden path for one use case beats a comprehensive platform that is six months from release. Validate with actual users before building the next layer.

## 20 Practical Examples
