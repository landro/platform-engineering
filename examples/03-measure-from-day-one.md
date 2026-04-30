---
layout: principle
title: "Principle 3: Measure from day one"
---

# Principle 3: Measure from day one

> Technical sophistication without adoption delivers nothing. Track adoption, lead time, change failure rate, and developer sentiment from the start. Feedback loops and telemetry are not afterthoughts — they are how platforms improve.

## 20 Practical Examples

1. **Instrument the golden-path pipeline from launch** — Add counters to your CI/CD pipeline on day one that track builds triggered, success rate, and median duration. Store results in a time-series database so you can show trends from week one.

2. **Track DORA metrics automatically** — Configure your deployment tooling to emit deployment frequency, lead time for changes, change failure rate, and mean time to restore (MTTR) without requiring teams to fill in spreadsheets.

3. **Create a platform health dashboard** — Build a Grafana (or equivalent) dashboard visible to everyone that shows live platform SLO compliance, current queue depths, and error rates across all shared services.

4. **Measure golden-path adoption rate** — Calculate the percentage of active services that use the standard pipeline, base images, and secret management each week, and make it a team KPI.

5. **Set a lead-time baseline before any changes** — Before making platform improvements, measure current average lead time for a change to reach production. Use it as the before/after benchmark for every initiative.

6. **Alert on adoption regressions** — Set an alert if golden-path adoption drops by more than 5% week-over-week so the team can investigate whether teams are abandoning the platform or working around it.

7. **Tag every deployment with a team identifier** — Require a `team` label on every workload so you can slice adoption, cost, and reliability metrics by team without manual reconciliation.

8. **Log every escape-hatch usage** — When a team uses a platform override or exception, record it automatically. Review these logs monthly to identify gaps in the golden path worth fixing.

9. **Track time-to-first-deployment** — Record the timestamp when a team's repository is created and when their first successful production deployment occurs. The gap is your onboarding lead time metric.

10. **Publish a weekly metrics digest** — Send a short automated email or Slack summary every Monday with the previous week's platform metrics — adoption, pipeline reliability, and top errors — to keep stakeholders informed without meetings.

11. **Measure and display documentation usage** — Instrument developer portal page views and search queries. Pages with high views but low task completion signal confusing documentation worth improving.

12. **Count support requests per platform feature** — Track how many Slack questions or tickets are raised about each platform component. High question volume on a feature signals poor discoverability or documentation.

13. **Measure change failure rate per team** — Compute how often a deployment requires a hotfix or rollback per team so you can identify teams that would benefit most from stronger golden-path guardrails.

14. **Set a developer sentiment target** — Define a target score (e.g., NPS ≥ 30) for developer satisfaction with the platform and measure it each quarter so it carries the same weight as reliability metrics.

15. **Track mean time to onboard a new service** — Measure the average time from "repository created" to "first deployment through the golden path." Use it as a north-star metric for reducing onboarding friction.

16. **Monitor platform component error budgets** — Define an error budget for the CI system (e.g., 99.5% pipeline success rate) and stop adding new features when the budget is exhausted — fix reliability first.

17. **Instrument the developer portal search** — Record every search query with zero results. Each no-result query is a capability gap or a documentation gap worth triaging.

18. **Correlate platform upgrades with incident rates** — After every platform version upgrade, compare the change failure rate in the two weeks before and after. Make this comparison part of the release review.

19. **Report cost per team automatically** — Use resource tags to generate a monthly cost breakdown per team. Share it with engineering managers so cost awareness becomes a shared responsibility without manual chargeback processes.

20. **Review metrics in every sprint retrospective** — Include at least one platform metric in the team's regular retrospective to make measurement a habit rather than a quarterly exercise.
