# GitHub Copilot Instructions

> **Maintenance:** This file is mirrored verbatim in `AGENTS.md` (except that file's title). Whenever you modify anything here, you **must** update that file in the same commit to keep them identical. This applies to all agents.

## Project Overview

The Platform Engineering Manifesto — a community-driven documentation site articulating 12 foundational principles for building internal developer platforms (IDPs). Inspired by the Agile Manifesto.

## Architecture

This is a Jekyll static site hosted using GitHub Pages and the platformengineering.no custom domain.

## Content Conventions

- The text is in British English
- Principle example files are named `NN-slug.md` where `NN` is zero-padded (01–12)
- Each example file has front matter with `title`, `principle_number`, `layout: principle`
- The checklist in `checklist.md` must stay aligned with the 12 principles: one item per principle, sorted in principle order
- The site is deployed via GitHub Pages using the custom domain in `CNAME`

## Requirements

### Language
Write all text, comments, and documentation in British English.

### Security
- Client-side JavaScript must have no security vulnerabilities (XSS, injection, insecure `eval`, unsafe DOM manipulation, exposed secrets, etc.)
- Review all JS against OWASP top-10 before considering a task complete

### Accessibility (Universal Design)
- All HTML must meet WCAG 2.2 AA as a minimum
- Use semantic elements (`<nav>`, `<main>`, `<article>`, etc.) and ARIA roles where needed
- Ensure keyboard navigability, sufficient colour contrast, and meaningful alt text on images

### Pull Requests
- Every pull request must include screenshots showing the change in both a desktop and a mobile viewport
- Screenshots belong in the PR description, not committed to the repository
