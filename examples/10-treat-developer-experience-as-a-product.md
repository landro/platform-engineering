# Principle 10: Treat developer experience as a product in its own right

> The platform's interface — documentation, onboarding, error messages, and CLI ergonomics — is as important as its capabilities. A powerful platform that is hard to discover or understand will be abandoned for something simpler. Developer experience is not polish; it is the product.

## 20 Practical Examples

1. **Write error messages that include the fix** — Every platform CLI and API error should tell the developer not just what went wrong, but what to do next. Replace `Error: invalid config` with `Error: 'replicas' must be ≥ 1. See: https://platform/docs/config#replicas`.

2. **Create a "getting started in 30 minutes" guide** — Write a guide that takes a new engineer from zero to a deployed service in under 30 minutes. Test it with actual new hires and fix every step that takes longer than described.

3. **Keep all documentation in one place** — Maintain a single, authoritative documentation site. Avoid scattering docs across Confluence, GitHub READMEs, Slack pins, and a developer portal simultaneously — fragmentation is its own form of broken experience.

4. **Add working code examples to every documentation page** — Every documentation page that describes a capability should include a copy-paste code sample that actually works. Broken examples destroy trust faster than missing ones.

5. **Test the onboarding journey with a timer** — Have a new team member attempt onboarding with only the public documentation and a timer. Identify every step where they need to ask for help and fix those steps before the next onboarding.

6. **Provide a `platform doctor` command** — Offer a CLI subcommand that checks the developer's local environment and reports missing tools, expired credentials, or misconfigurations with clear remediation steps.

7. **Design CLI commands to be discoverable** — Ensure every `platform help` and `platform <command> --help` output is accurate, comprehensive, and includes examples. Developers explore capabilities through the CLI help system.

8. **Send a contextual welcome email after first deployment** — After a team successfully deploys for the first time, send a short automated email that links to the next logical step: setting up alerts, configuring autoscaling, or joining the platform community.

9. **Name things consistently** — Use consistent naming conventions across the CLI, portal, documentation, and Slack channels. Inconsistency (e.g., "workload" in docs vs. "service" in the CLI vs. "app" in the portal) creates unnecessary cognitive load.

10. **Version and datestamp all documentation** — Display when each documentation page was last updated and which platform version it applies to. Stale undated documentation causes developers to waste time on instructions that no longer apply.

11. **Provide a sandbox environment** — Give every team access to a cost-controlled sandbox where they can experiment with platform capabilities without risk of affecting production workloads or incurring unexpected costs.

12. **Design forms that prevent invalid input** — In web-based self-service forms, use dropdowns, validated fields, and inline guidance rather than free-text inputs that fail silently after submission.

13. **Add "why" to every policy enforcement message** — When a CI check or policy gate blocks a deployment, include a one-line explanation of why the policy exists alongside the fix instruction. Unexplained rejections create resentment.

14. **Offer a dry-run mode for destructive commands** — Every CLI command that modifies or deletes resources should support a `--dry-run` flag that shows the planned changes without executing them.

15. **Conduct usability testing on new platform features** — Before launching a new portal feature or CLI command, watch two or three developers use it with no assistance. Identify every point of confusion and address it before the general release.

16. **Surface relevant documentation in context** — When a developer is viewing a service in the portal, surface links to the relevant golden-path guide, runbook, and alert policy for that service — not a link to the documentation home page.

17. **Build a changelog developers actually read** — Format the platform changelog for a developer audience: short entries, grouped by user impact (new, improved, fixed, deprecated), with links to migration guides when relevant.

18. **Respond to every support request within one business day** — A fast, helpful response to the first question a developer asks sets the tone for their entire relationship with the platform. Slow or dismissive responses drive shadow IT.

19. **Provide copy-paste Slack notification configs** — Supply ready-to-use alert notification configurations (Slack webhooks, PagerDuty integrations) in documentation so teams can set up alerting in minutes, not hours.

20. **Run an annual developer experience review** — Once per year, audit the entire developer journey — from first repo creation to production deployment to incident response — and identify the three highest-friction points to prioritise in the next planning cycle.
