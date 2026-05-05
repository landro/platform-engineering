---
layout: principle
title: "Principle 8: Deprecate gracefully"
examples:
  - title: "Publish a written deprecation policy"
    body: "Document the minimum notice period (e.g., 90 days), communication channels, and migration support commitment before you deprecate anything. Publish it where developers can find it."
  - title: "Announce deprecations through multiple channels"
    body: "Post a deprecation notice in Slack, the developer portal, the changelog, and directly in the tool or API being deprecated — all at the same time, not sequentially."
  - title: "Embed a deprecation warning in the tool itself"
    body: "Add a visible warning message to a deprecated CLI command, API response header, or pipeline step so that developers using it are reminded on every invocation, not just at announcement time."
  - title: "Provide a migration guide alongside the deprecation notice"
    body: "Never announce a deprecation without a step-by-step migration guide to the replacement. Developers should know exactly what to do before the end-of-life date."
  - title: "Set a firm end-of-life date"
    body: "Deprecations without a concrete end-of-life date drift indefinitely. Commit to a specific date and honour it to build the credibility needed for future deprecations to be taken seriously."
  - title: "Offer migration tooling where possible"
    body: "Provide a script, codemods, or automated PR generation to help teams migrate from the deprecated tool to its replacement, reducing the manual effort barrier to adoption."
  - title: "Assign a migration owner"
    body: "Name a specific platform team member responsible for tracking migration progress, answering questions, and chasing blockers for each deprecation. Ownerless deprecations stall."
  - title: "Track migration progress in a shared dashboard"
    body: "Show the number of services still using the deprecated component and update the count weekly. Visible progress motivates teams and allows leadership to prioritise migration work."
  - title: "Run a deprecation retrospective"
    body: "After every major deprecation cycle, hold a short retrospective to identify what worked and what caused friction. Use the learnings to improve the next deprecation."
  - title: "Block new consumers from adopting deprecated components"
    body: "Enforce a CI check or OPA policy that prevents new services from taking a dependency on a deprecated tool or API from the moment the deprecation is announced."
  - title: "Maintain the deprecated tool at security-patch level only"
    body: "Once a component is deprecated, commit to security patches only — no new features. Communicate this explicitly so teams understand that migrating is the only path to improvement."
  - title: "Offer a supported transition period with dual-running paths"
    body: "During the deprecation window, run both the old and new paths in parallel so teams can migrate at their own pace without being blocked on a single cutover weekend."
  - title: "Extend deadlines only once, transparently"
    body: "If migration is slower than expected, extend the end-of-life date once with a public explanation. Unlimited extensions erode trust and teach teams that deadlines are not real."
  - title: "Recognise teams that migrate early"
    body: "Acknowledge teams who complete migrations ahead of schedule in a company update or Slack channel. Social recognition motivates early adoption and reduces last-minute rushes."
  - title: "Keep an end-of-life register"
    body: "Maintain a public list of all platform components with their current lifecycle status (supported, deprecated, end-of-life). Review and update it each quarter."
  - title: "Retire the deprecated component on the announced date"
    body: "Actually turn it off on the published date. If deadlines slip repeatedly, teams learn to ignore deprecation notices and accumulate technical debt."
  - title: "Document why the deprecation is happening"
    body: "Explain the reason (security risk, maintenance burden, superseded by a better tool) in the deprecation notice. Teams who understand the \"why\" are more likely to prioritise migration."
  - title: "Avoid deprecating multiple major components simultaneously"
    body: "Stagger deprecations so teams are not asked to migrate from three components at once. Concurrent deprecations create burnout and resistance."
  - title: "Capture deprecated APIs in API versioning strategy"
    body: "Define in your API versioning policy how long each major version will be supported after a new version is released. This sets expectations before any specific deprecation is needed."
  - title: "Archive, don't delete, retired repositories"
    body: "When a platform component reaches end-of-life, archive its repository with a clear README pointing to the replacement. Deleted repositories break institutional knowledge and leave teams confused."
---

# Principle 8: Deprecate gracefully

> Platforms that only add capabilities ossify. Every tool, API, and integration has a lifecycle — and retiring things gracefully is as important as introducing them. A published deprecation policy prevents the platform from becoming a museum.

## 20 Practical Examples
