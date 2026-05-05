# Platform Engineering Manifesto

A living manifesto of principles and practices for building and operating exceptional internal developer platforms. Published as a GitHub Pages site.

## Annual Revision — Creating a Release

For each annual revision of the manifesto, trigger the [Create Release](https://github.com/landro/platform-engineering/actions/workflows/release.yml) workflow. It creates an annotated Git tag on `main` and publishes a matching GitHub Release automatically — no local tooling required.

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

Tags follow the `YYYY.MM` format — the four-digit year and two-digit zero-padded month of the revision.

| Revision        | Tag      |
|-----------------|----------|
| January 2025    | 2025.01  |
| January 2026    | 2026.01  |
| January 2027    | 2027.01  |
