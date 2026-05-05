---
layout: default
title: The Platform Engineering Manifesto
---

<section class="hero">
  <div class="hero-inner">
    <div class="hero-eyebrow">⚙ Platform Engineering</div>
    <a href="https://github.com/landro/platform-engineering/releases/latest" class="version-badge" target="_blank" rel="noopener">
      <img src="https://img.shields.io/github/v/release/landro/platform-engineering?label=version&color=4f8ef7" alt="Latest release version" />
    </a>
    <h1>The Platform Engineering Manifesto</h1>
    <p class="hero-subtitle">Inspired by the Agile Manifesto, we are uncovering better ways of building and operating internal developer platforms — by doing it and helping others do the same.</p>
    <p class="values-intro">Through this work we have come to value:</p>
    <div class="values-grid">
      <div class="value-item">
        <div class="value-over">we value</div>
        <div class="value-left">Developer outcomes</div>
        <div class="value-right">over platform outputs</div>
      </div>
      <div class="value-item">
        <div class="value-over">we value</div>
        <div class="value-left">Platform as a product</div>
        <div class="value-right">over platform as a project</div>
      </div>
      <div class="value-item">
        <div class="value-over">we value</div>
        <div class="value-left">Golden paths</div>
        <div class="value-right">over golden cages</div>
      </div>
      <div class="value-item">
        <div class="value-over">we value</div>
        <div class="value-left">Self-service</div>
        <div class="value-right">over ticket-driven operations</div>
      </div>
    </div>
  </div>
</section>

<section class="principles-section">
  <div class="container">
    <h2 class="section-heading">12 Principles</h2>
    <div class="principles-grid">

      <a href="examples/01-make-the-right-thing-the-easy-thing" class="principle-card">
        <span class="card-number">01</span>
        <div class="card-title">Make the right thing the easy thing — not the only thing</div>
        <div class="card-body">Golden paths guide developers towards safe, reliable outcomes with security built in by design. They must always include escape hatches for teams that need to diverge responsibly.</div>
        <span class="card-link">20 examples <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg></span>
      </a>

      <a href="examples/02-treat-the-platform-as-a-living-product" class="principle-card">
        <span class="card-number">02</span>
        <div class="card-title">Treat the internal developer platform as a living product</div>
        <div class="card-body">Platforms have no delivery date. They have users, roadmaps, feedback loops, and product lifecycles — and they must continuously evolve to remain useful.</div>
        <span class="card-link">20 examples <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg></span>
      </a>

      <a href="examples/03-measure-from-day-one" class="principle-card">
        <span class="card-number">03</span>
        <div class="card-title">Measure from day one</div>
        <div class="card-body">Technical sophistication without adoption delivers nothing. Track adoption, lead time, change failure rate, and developer sentiment from the start.</div>
        <span class="card-link">20 examples <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg></span>
      </a>

      <a href="examples/04-manage-everything-as-code" class="principle-card">
        <span class="card-number">04</span>
        <div class="card-title">Manage everything as code</div>
        <div class="card-body">Infrastructure, pipelines, security policies, and golden path configurations belong in version control — testable, reviewable, and repeatable.</div>
        <span class="card-link">20 examples <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg></span>
      </a>

      <a href="examples/05-right-size-your-platform" class="principle-card">
        <span class="card-number">05</span>
        <div class="card-title">Right-size your platform</div>
        <div class="card-body">Match complexity to organisational need. Build for the problem you have today, not the organisation you may one day become.</div>
        <span class="card-link">20 examples <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg></span>
      </a>

      <a href="examples/06-start-with-a-minimal-viable-platform" class="principle-card">
        <span class="card-number">06</span>
        <div class="card-title">Start with a minimal viable platform</div>
        <div class="card-body">Ship the thinnest platform that delivers real value to real teams, then iterate. Validate with actual users before building the next layer.</div>
        <span class="card-link">20 examples <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg></span>
      </a>

      <a href="examples/07-adopt-before-you-build" class="principle-card">
        <span class="card-number">07</span>
        <div class="card-title">Adopt before you build</div>
        <div class="card-body">Apply established patterns, open standards, and proven tools before writing bespoke solutions. Build only where genuine differentiation is needed.</div>
        <span class="card-link">20 examples <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg></span>
      </a>

      <a href="examples/08-deprecate-gracefully" class="principle-card">
        <span class="card-number">08</span>
        <div class="card-title">Deprecate gracefully</div>
        <div class="card-body">Every tool, API, and integration has a lifecycle — and retiring things gracefully is as important as introducing them. A published deprecation policy prevents the platform from becoming a museum.</div>
        <span class="card-link">20 examples <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg></span>
      </a>

      <a href="examples/09-build-the-foundation-before-the-portal" class="principle-card">
        <span class="card-number">09</span>
        <div class="card-title">Build the foundation before the portal</div>
        <div class="card-body">A portal built on a broken foundation will be abandoned. Invest in capabilities, reliability, and contracts first — the interface amplifies what is already there.</div>
        <span class="card-link">20 examples <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg></span>
      </a>

      <a href="examples/10-treat-developer-experience-as-a-product" class="principle-card">
        <span class="card-number">10</span>
        <div class="card-title">Treat developer experience as a product in its own right</div>
        <div class="card-body">The platform's interface — documentation, onboarding, error messages, and CLI ergonomics — is as important as its capabilities. Developer experience is not polish; it is the product.</div>
        <span class="card-link">20 examples <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg></span>
      </a>

      <a href="examples/11-invest-in-people-process-and-culture" class="principle-card">
        <span class="card-number">11</span>
        <div class="card-title">Invest in people, process, and culture — amplified by tools</div>
        <div class="card-body">Tools are multipliers, but only when the right culture and clear processes already exist. No tool compensates for a lack of product thinking or stakeholder trust.</div>
        <span class="card-link">20 examples <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg></span>
      </a>

      <a href="examples/12-define-and-honour-the-platform-contract" class="principle-card">
        <span class="card-number">12</span>
        <div class="card-title">Define and honour the platform contract</div>
        <div class="card-body">The platform's job is to absorb operational complexity so developers need not manage it themselves. Make this deal explicit — through SLOs, documented ownership, and a published process for stepping off the path.</div>
        <span class="card-link">20 examples <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg></span>
      </a>

    </div>
  </div>
</section>
