---
layout: principle
title: "Principle 2: Treat the internal developer platform as a living product"
---

# Principle 2: Treat the internal developer platform as a living product

> Platforms have no delivery date. They have users, roadmaps, feedback loops, and product lifecycles — and they must continuously evolve to remain useful. The platform team must continuously communicate value, build stakeholder buy-in, and demonstrate impact — or the platform will be unused, deprecated, or made mandatory by force, each a failure mode.

## 20 Practical Examples

1. **Publish a public platform roadmap** — Maintain a `ROADMAP.md` or a GitHub Projects board visible to all engineering teams so everyone can see what is coming, what is in progress, and what has been delivered.

2. **Run quarterly platform demos** — Hold a short (30-minute) show-and-tell each quarter where the platform team walks through new capabilities, using real workflows from product teams as demos.

3. **Set up a `#platform-feedback` Slack channel** — Create a dedicated channel where developers can report pain points, request features, and get answers — monitored daily by a rotating platform team member.

4. **Conduct developer satisfaction surveys** — Send a brief (5-question) quarterly survey to all platform users measuring ease of use, reliability, and overall satisfaction. Share results openly.

5. **Maintain a changelog** — Keep a `CHANGELOG.md` updated with every platform release so teams know what changed, what was fixed, and what was deprecated without having to ask.

6. **Define platform personas** — Document two or three user personas (e.g., "the solo feature dev", "the on-call SRE") and review every roadmap item against their needs to avoid building for imaginary users.

7. **Run monthly office hours** — Dedicate one hour per month where any engineer can join a video call or walk-in session to ask questions, report issues, or discuss upcoming needs directly with the platform team.

8. **Track and publish platform adoption metrics** — Show the percentage of teams using the golden-path pipeline, number of services onboarded, and active portal users in a visible dashboard updated weekly.

9. **Prioritise bugs reported by users first** — Triage user-reported issues within one business day and communicate a fix timeline, reinforcing that developer feedback drives the roadmap.

10. **Interview new joiners after onboarding** — Schedule a 20-minute retrospective with every new engineer one week after they start, specifically asking what was hard about using the platform for the first time.

11. **Announce deprecations via the same channels developers use** — Post deprecation notices in Slack, the changelog, and the developer portal simultaneously so no team learns about a breaking change only at the deadline.

12. **Measure time-to-first-deployment for new teams** — Track how long it takes a new team to deploy their first service end-to-end. Use this as the headline product metric for the platform team.

13. **Assign a platform product owner** — Have a dedicated product owner (not a tech lead wearing both hats) who maintains the backlog, talks to users, and says no to low-value work.

14. **Link platform tickets to user stories** — Write platform backlog items as "As a developer, I want to … so that …" to keep the team focused on user value rather than technical deliverables.

15. **Hold a retrospective after every major incident** — When a platform outage affects product teams, share a blameless post-mortem and publish the follow-up action items publicly to build trust.

16. **Create a "first use" experience checklist** — Provide a short getting-started checklist in the developer portal so that a developer new to the platform knows the five things to do in their first hour.

17. **Version the platform API** — Treat internal platform APIs like external ones — version them, maintain backwards compatibility within a version, and provide migration guides when breaking changes are necessary.

18. **Track feature requests in the open** — Use a public (internal) GitHub issue tracker so developers can upvote existing requests rather than creating duplicates, and so the team can see demand signals at a glance.

19. **Set and publish SLOs for the platform itself** — Define service level objectives for the CI pipeline, artifact registry, and developer portal — and report against them monthly to demonstrate operational reliability.

20. **Celebrate wins with product teams** — When a platform improvement measurably reduces a team's deployment time or incident rate, share the story in a company update to make the value of platform investment visible to leadership.
