---
layout: principle
title: "Principle 11: Invest in people, process, and culture — amplified by tools"
---

# Principle 11: Invest in people, process, and culture — amplified by tools

> Tools are multipliers, but only when the right culture and clear processes already exist. No tool compensates for a lack of product thinking or stakeholder trust. Your platform's boundaries will reflect your organisational structure whether you plan it or not — treat team topology and platform scope as a single design decision.

## 20 Practical Examples

1. **Define team topologies before selecting tools** — Decide which teams own which capabilities (stream-aligned, platform, enabling, complicated-subsystem) before evaluating tooling. Buying a tool before designing team ownership creates orphaned capabilities.

2. **Create a shared on-call rotation with product teams** — Include at least one product engineer in platform incidents and include a platform engineer in product on-call rotations. Cross-pollination builds empathy and shared ownership.

3. **Run a "platform as product" enablement session** — Hold a half-day workshop for the platform team on product thinking, user research, and roadmap management. Invest in this before investing in new tooling.

4. **Document the platform team's decision-making process** — Publish how the platform team makes technology decisions (ADRs, RFCs, approval criteria) so product teams understand how to propose changes and why decisions were made.

5. **Establish a platform community of practice** — Create a regular (monthly) cross-team forum where engineers who use the platform share patterns, discuss pain points, and propose improvements. Tools do not build communities — people do.

6. **Tie platform OKRs to developer outcomes, not platform outputs** — Set objectives like "reduce time-to-first-deployment by 40%" not "deliver three new platform features." Outcome-based OKRs align the platform team's incentives with user value.

7. **Require platform engineers to spend time embedded in product teams** — Rotate platform engineers into product teams for two weeks per quarter so they experience the developer journey firsthand and build relationships that improve feedback quality.

8. **Write Architecture Decision Records (ADRs) for all major platform choices** — Document the context, options considered, and rationale for every significant platform decision in version-controlled ADRs so institutional knowledge survives team changes.

9. **Establish clear escalation paths** — Document who owns what in the platform and how to escalate unresolved issues. Ambiguous ownership causes incidents to stall and erodes trust in the platform.

10. **Hold regular platform team retrospectives** — Run bi-weekly or monthly retrospectives within the platform team to surface and address internal process problems before they affect the developer experience.

11. **Share the platform roadmap with engineering leadership quarterly** — Present the platform roadmap and adoption metrics to engineering directors each quarter to maintain stakeholder buy-in and ensure platform investment is protected.

12. **Create an "inner source" contribution model** — Publish a `CONTRIBUTING.md` that allows product engineers to submit pull requests to platform components with a defined review and acceptance process. Tools cannot accept contributions — process does.

13. **Pair platform engineers with new team onboarding** — Assign a platform engineer as a "platform buddy" to each new product team for their first two weeks. Human support accelerates adoption faster than any amount of documentation.

14. **Establish a blameless post-mortem culture** — Run blameless post-mortems for all platform incidents and publish the reports internally. A culture of blame suppresses incident reporting, which means problems stay hidden until they cause major outages.

15. **Set explicit working agreements for platform team interactions** — Agree and publish SLAs for platform support responses, change review turnaround, and feature request triage. Clear agreements prevent frustration on both sides.

16. **Map platform boundaries to team cognitive load** — Evaluate whether the scope of the platform team's responsibilities is manageable for the team's size. An overloaded platform team produces poor DX regardless of the quality of their tools.

17. **Celebrate cross-team contributions publicly** — Acknowledge product team engineers who contribute fixes or improvements to platform components in company-wide communications. Recognition reinforces the culture of shared ownership.

18. **Create an internal platform champions network** — Identify and empower one engaged developer in each product team as a platform champion. Champions multiply the reach of the platform team without requiring the platform team to grow proportionally.

19. **Document the "you build it, you run it" boundary explicitly** — Clearly define what the platform team runs operationally versus what product teams own. Ambiguous operational boundaries cause incidents to be mis-routed and breed resentment.

20. **Invest in psychological safety before process improvement** — Before introducing any new process (incident reviews, code reviews, SLO reviews), ensure the team has the psychological safety to raise problems honestly. Processes imposed on fearful teams produce theatre, not improvement.
