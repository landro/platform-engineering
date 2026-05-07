# Platform Engineering Manifesto

A living manifesto of principles and practices for building and operating exceptional internal developer platforms. Published as a GitHub Pages site.

## Running the Site Locally

The site is built with [Jekyll](https://jekyllrb.com/) and served by GitHub Pages.

### Prerequisites

- [Ruby](https://www.ruby-lang.org/) (3.0 or newer)
- [Bundler](https://bundler.io/) (`gem install bundler`) — only required if a `Gemfile` is present
- [Jekyll](https://jekyllrb.com/) (`gem install jekyll`) — only required when not using Bundler

### Serve locally

From the repository root:

```bash
# With Bundler (recommended if a Gemfile exists)
bundle exec jekyll serve

# Or directly, if Jekyll is installed globally
jekyll serve
```

Then open <http://localhost:4000> in your browser. Jekyll watches for file changes and rebuilds automatically; refresh the page to see edits.

### Build the static site

To produce the static output in `_site/` without serving it:

```bash
bundle exec jekyll build
# or
jekyll build
```

## Creating a Release

To publish a new revision of the manifesto, trigger the [Create Release](https://github.com/landro/platform-engineering/actions/workflows/release.yml) workflow. It creates an annotated Git tag on `main` and publishes a matching GitHub Release automatically — no local tooling required.

### Steps

1. Go to **Actions → Create Release → Run workflow** (or click [here](https://github.com/landro/platform-engineering/actions/workflows/release.yml)).
2. Fill in the two inputs:
   - **Revision year** — e.g. `2026`
   - **Revision month** — zero-padded, between `01` and `12` (e.g. `01` for January)
3. Click **Run workflow**.

The workflow will:
- Create and push an annotated tag to `main`
- Publish a GitHub Release visible on the [Releases page](https://github.com/landro/platform-engineering/releases)

### Version naming convention

Tags follow the `YYYY.MM` format — the four-digit year and two-digit zero-padded month of the revision. Multiple revisions in the same month are not expected; if needed, append a suffix manually.

| Revision          | Tag      |
|-------------------|----------|
| January 2025      | 2025.01  |
| September 2025    | 2025.09  |
| March 2026        | 2026.03  |
