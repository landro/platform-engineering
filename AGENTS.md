# AGENTS.md

## Project Overview

The Platform Engineering Manifesto — a community-driven documentation site articulating 12 foundational principles for building internal developer platforms (IDPs). Inspired by the Agile Manifesto.

## Commands

**Prerequisites:** Ruby + Bundler

```bash
# Serve locally (http://localhost:4000)
bundle exec jekyll serve

# Build static site into _site/
bundle exec jekyll build
```

## Architecture

This is a Jekyll static site hosted using GitHub pages and the platformengineering.no custom domain

## Content Conventions

- The text is in Oxford English
- Principle example files are named `NN-slug.md` where `NN` is zero-padded (01–12)
- Each example file has front matter with `title`, `principle_number`, `layout: principle`
- The checklist in `checklist.md` must stay aligned with the 12 principles: one item per principle, sorted in principle order
- The site is deployed via GitHub Pages using the custom domain in `CNAME`
