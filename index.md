# The Platform Engineering Manifesto

Inspired by the Agile Manifesto, we are uncovering better ways of building and operating internal developer platforms — by doing it and helping others do the same.

Through this work we have come to value:

---

**Developer outcomes** over platform outputs

**Platform as a product** over platform as a project

**Golden paths** over golden cages

**Self-service** over ticket-driven operations

---

That is, while there is value in the items on the right, we value the items on the left more.

---

## Principles

**1. Make the right thing the easy thing — not the only thing.**
Every platform decision should answer: does this help developers focus on delivering business value, or does it add friction they must carry? Golden paths guide developers towards safe, reliable outcomes — with security and compliance built in by design, invisible rather than adversarial. They must always include escape hatches: teams that need to diverge responsibly should be supported, not punished.

**2. Treat the internal developer platform as a living product.**
Platforms have no delivery date. They have users, roadmaps, feedback loops, and product lifecycles — and they must continuously evolve to remain useful. The platform team must continuously communicate value, build stakeholder buy-in, and demonstrate impact — or the platform will be unused, deprecated, or made mandatory by force, each a failure mode.

**3. Measure from day one.**
Technical sophistication without adoption delivers nothing. Track adoption, lead time, change failure rate, and developer sentiment from the start. Feedback loops and telemetry are not afterthoughts — they are how platforms improve.

**4. Manage everything as code.**
Infrastructure, pipelines, security policies, and golden path configurations belong in version control — testable, reviewable, and repeatable. Code is the source of truth until the abstraction leaks; when it does, the gap between declared and actual state is a risk that must be managed.

**5. Right-size your platform.**
Match complexity to organisational need. A simple pipeline platform is as valid as a fully-orchestrated internal developer platform. Build for the problem you have today, not the organisation you may one day become.

**6. Start with a minimal viable platform.**
Ship the thinnest platform that delivers real value to real teams, then iterate. A working golden path for one use case beats a comprehensive platform that is six months from release. Validate with actual users before building the next layer.

**7. Adopt before you build.**
Apply established patterns, open standards, and proven tools before writing bespoke solutions. The platform engineering community has solved most foundational problems. Build only where genuine differentiation is needed — and retire what no longer serves.

**8. Deprecate gracefully.**
Platforms that only add capabilities ossify. Every tool, API, and integration has a lifecycle — and retiring things gracefully is as important as introducing them. A published deprecation policy prevents the platform from becoming a museum.

**9. Build the foundation before the portal.**
A portal built on a broken foundation will be abandoned. Invest in capabilities, reliability, and contracts first — the interface amplifies what is already there; it cannot substitute for what is not.

**10. Treat developer experience as a product in its own right.**
The platform's interface — documentation, onboarding, error messages, and CLI ergonomics — is as important as its capabilities. A powerful platform that is hard to discover or understand will be abandoned for something simpler. Developer experience is not polish; it is the product.

**11. Invest in people, process, and culture — amplified by tools.**
Tools are multipliers, but only when the right culture and clear processes already exist. No tool compensates for a lack of product thinking or stakeholder trust. Your platform's boundaries will reflect your organisational structure whether you plan it or not — treat team topology and platform scope as a single design decision.

**12. Define and honour the platform contract.**
The platform's job is to absorb operational complexity so that developers need not manage it themselves. In return, developers who stay within the contract receive its guarantees. Make this deal explicit — through service level objectives, documented ownership boundaries, and a published process for stepping off the path.
