---
layout: principle
title: "Principle 3: Measure from day one"
examples:
  - title: "Instrument the golden-path pipeline from launch"
    body: "Add counters to your CI/CD pipeline on day one that track builds triggered, success rate, and median duration. Store results in a time-series database so you can show trends from week one."
  - title: "Track DORA metrics automatically"
    body: "Configure your deployment tooling to emit deployment frequency, lead time for changes, change failure rate, and mean time to restore (MTTR) without requiring teams to fill in spreadsheets."
  - title: "Create a platform health dashboard"
    body: "Build a Grafana (or equivalent) dashboard visible to everyone that shows live platform SLO compliance, current queue depths, and error rates across all shared services."
  - title: "Measure golden-path adoption rate"
    body: "Calculate the percentage of active services that use the standard pipeline, base images, and secret management each week, and make it a team KPI."
  - title: "Set a lead-time baseline before any changes"
    body: "Before making platform improvements, measure current average lead time for a change to reach production. Use it as the before/after benchmark for every initiative."
  - title: "Alert on adoption regressions"
    body: "Set an alert if golden-path adoption drops by more than 5% week-over-week so the team can investigate whether teams are abandoning the platform or working around it."
  - title: "Tag every deployment with a team identifier"
    body: "Require a `team` label on every workload so you can slice adoption, cost, and reliability metrics by team without manual reconciliation."
  - title: "Log every escape-hatch usage"
    body: "When a team uses a platform override or exception, record it automatically. Review these logs monthly to identify gaps in the golden path worth fixing."
  - title: "Track time-to-first-deployment"
    body: "Record the timestamp when a team's repository is created and when their first successful production deployment occurs. The gap is your onboarding lead time metric."
  - title: "Publish a weekly metrics digest"
    body: "Send a short automated email or Slack summary every Monday with the previous week's platform metrics — adoption, pipeline reliability, and top errors — to keep stakeholders informed without meetings."
  - title: "Measure and display documentation usage"
    body: "Instrument developer portal page views and search queries. Pages with high views but low task completion signal confusing documentation worth improving."
  - title: "Count support requests per platform feature"
    body: "Track how many Slack questions or tickets are raised about each platform component. High question volume on a feature signals poor discoverability or documentation."
  - title: "Measure change failure rate per team"
    body: "Compute how often a deployment requires a hotfix or rollback per team so you can identify teams that would benefit most from stronger golden-path guardrails."
  - title: "Set a developer sentiment target"
    body: "Define a target score (e.g., NPS ≥ 30) for developer satisfaction with the platform and measure it each quarter so it carries the same weight as reliability metrics."
  - title: "Track mean time to onboard a new service"
    body: "Measure the average time from \"repository created\" to \"first deployment through the golden path.\" Use it as a north-star metric for reducing onboarding friction."
  - title: "Monitor platform component error budgets"
    body: "Define an error budget for the CI system (e.g., 99.5% pipeline success rate) and stop adding new features when the budget is exhausted — fix reliability first."
  - title: "Instrument the developer portal search"
    body: "Record every search query with zero results. Each no-result query is a capability gap or a documentation gap worth triaging."
  - title: "Correlate platform upgrades with incident rates"
    body: "After every platform version upgrade, compare the change failure rate in the two weeks before and after. Make this comparison part of the release review."
  - title: "Report cost per team automatically"
    body: "Use resource tags to generate a monthly cost breakdown per team. Share it with engineering managers so cost awareness becomes a shared responsibility without manual chargeback processes."
  - title: "Review metrics in every sprint retrospective"
    body: "Include at least one platform metric in the team's regular retrospective to make measurement a habit rather than a quarterly exercise."
---

# Principle 3: Measure from day one

> Technical sophistication without adoption delivers nothing. Track adoption, lead time, change failure rate, and developer sentiment from the start. Feedback loops and telemetry are not afterthoughts — they are how platforms improve.

## 20 Practical Examples
