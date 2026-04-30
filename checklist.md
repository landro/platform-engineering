---
layout: principle
title: "New Feature Checklist for Platform Engineers"
---

# New Feature Checklist for Platform Engineers

> Use this checklist when working on any new platform feature. It is grounded in the [Platform Engineering Manifesto]({{ '/' | relative_url }}) and is designed to be reviewed before shipping, not after.

---

- [ ] **1. Does this feature make the right thing the easy thing?**
  The golden path for this feature should guide users towards safe, reliable outcomes by default. There must be an escape hatch for teams with legitimate reasons to diverge. *(Principle 1)*

- [ ] **2. Has this feature been validated with real users before it ships?**
  Show a working prototype or minimal version to at least one consuming team before the full build. Avoid building in isolation. *(Principle 6)*

- [ ] **3. Have you adopted an existing tool or standard before writing bespoke code?**
  Check the platform engineering community, CNCF landscape, and internal tooling catalogue first. Build only where genuine differentiation is required. *(Principle 7)*

- [ ] **4. Is everything that makes this feature work managed as code?**
  Infrastructure, pipelines, configuration, policies, and golden path templates must be in version control — reviewable, testable, and repeatable. *(Principle 4)*

- [ ] **5. Is this feature right-sized for the current organisational need?**
  Avoid over-engineering for a future organisation. Validate that the complexity introduced is proportionate to the problem being solved today. *(Principle 5)*

- [ ] **6. Are success metrics defined and observable from day one?**
  Instrument the feature before release. Define what good looks like — adoption rate, lead time impact, error rate — and ensure dashboards or alerts exist to surface it. *(Principle 3)*

- [ ] **7. Does the feature rest on a solid foundation?**
  Confirm that the underlying capabilities (reliability, security, secrets management, networking) are stable before adding a new interface on top. *(Principle 9)*

- [ ] **8. Is the developer experience considered as part of the feature, not as a follow-up?**
  Review documentation, onboarding steps, error messages, and CLI or portal ergonomics before shipping. If a developer cannot discover and use the feature unaided, it is not done. *(Principle 10)*

- [ ] **9. Does this feature respect and update the platform contract?**
  If the feature changes what the platform provides or requires, update the SLOs, ownership boundaries, and documented responsibilities. Communicate the change to consuming teams before it lands. *(Principle 12)*

- [ ] **10. Is a deprecation or rollback path defined?**
  Every feature has a lifecycle. Document how this feature will be retired or replaced, and ensure a rollback procedure exists if the feature needs to be withdrawn quickly. *(Principle 8)*

---

*For guidance on each principle, see the [full manifesto]({{ '/' | relative_url }}).*
