---
layout: principle
title: "Principle 2: Treat the internal developer platform as a living product"
examples:
  - title: "Publish a public platform roadmap"
    body: "Maintain a `ROADMAP.md` or a GitHub Projects board visible to all engineering teams so everyone can see what is coming, what is in progress, and what has been delivered."
  - title: "Run quarterly platform demos"
    body: "Hold a short (30-minute) show-and-tell each quarter where the platform team walks through new capabilities, using real workflows from product teams as demos."
  - title: "Set up a `#platform-feedback` Slack channel"
    body: "Create a dedicated channel where developers can report pain points, request features, and get answers — monitored daily by a rotating platform team member."
  - title: "Conduct developer satisfaction surveys"
    body: "Send a brief (5-question) quarterly survey to all platform users measuring ease of use, reliability, and overall satisfaction. Share results openly."
  - title: "Maintain a changelog"
    body: "Keep a `CHANGELOG.md` updated with every platform release so teams know what changed, what was fixed, and what was deprecated without having to ask."
  - title: "Define platform personas"
    body: "Document two or three user personas (e.g., \"the solo feature dev\", \"the on-call SRE\") and review every roadmap item against their needs to avoid building for imaginary users."
  - title: "Run monthly office hours"
    body: "Dedicate one hour per month where any engineer can join a video call or walk-in session to ask questions, report issues, or discuss upcoming needs directly with the platform team."
  - title: "Track and publish platform adoption metrics"
    body: "Show the percentage of teams using the golden-path pipeline, number of services onboarded, and active portal users in a visible dashboard updated weekly."
  - title: "Prioritise bugs reported by users first"
    body: "Triage user-reported issues within one business day and communicate a fix timeline, reinforcing that developer feedback drives the roadmap."
  - title: "Interview new joiners after onboarding"
    body: "Schedule a 20-minute retrospective with every new engineer one week after they start, specifically asking what was hard about using the platform for the first time."
  - title: "Announce deprecations via the same channels developers use"
    body: "Post deprecation notices in Slack, the changelog, and the developer portal simultaneously so no team learns about a breaking change only at the deadline."
  - title: "Measure time-to-first-deployment for new teams"
    body: "Track how long it takes a new team to deploy their first service end-to-end. Use this as the headline product metric for the platform team."
  - title: "Assign a platform product owner"
    body: "Have a dedicated product owner (not a tech lead wearing both hats) who maintains the backlog, talks to users, and says no to low-value work."
  - title: "Link platform tickets to user stories"
    body: "Write platform backlog items as \"As a developer, I want to … so that …\" to keep the team focused on user value rather than technical deliverables."
  - title: "Hold a retrospective after every major incident"
    body: "When a platform outage affects product teams, share a blameless post-mortem and publish the follow-up action items publicly to build trust."
  - title: "Create a \"first use\" experience checklist"
    body: "Provide a short getting-started checklist in the developer portal so that a developer new to the platform knows the five things to do in their first hour."
  - title: "Version the platform API"
    body: "Treat internal platform APIs like external ones — version them, maintain backwards compatibility within a version, and provide migration guides when breaking changes are necessary."
  - title: "Track feature requests in the open"
    body: "Use a public (internal) GitHub issue tracker so developers can upvote existing requests rather than creating duplicates, and so the team can see demand signals at a glance."
  - title: "Set and publish SLOs for the platform itself"
    body: "Define service level objectives for the CI pipeline, artifact registry, and developer portal — and report against them monthly to demonstrate operational reliability."
  - title: "Celebrate wins with product teams"
    body: "When a platform improvement measurably reduces a team's deployment time or incident rate, share the story in a company update to make the value of platform investment visible to leadership."
---

# Principle 2: Treat the internal developer platform as a living product

> Platforms have no delivery date. They have users, roadmaps, feedback loops, and product lifecycles — and they must continuously evolve to remain useful. The platform team must continuously communicate value, build stakeholder buy-in, and demonstrate impact — or the platform will be unused, deprecated, or made mandatory by force, each a failure mode.

## 20 Practical Examples
