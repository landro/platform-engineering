# Platform Engineering Manifesto

A living manifesto of principles and practices for building and operating exceptional internal developer platforms. Published as a GitHub Pages site.

## Annual Revision — Creating a Release

For each annual revision of the manifesto, trigger the [Create Release](https://github.com/landro/platform-engineering/actions/workflows/release.yml) workflow. It creates an annotated Git tag on `main` and publishes a matching GitHub Release automatically — no local tooling required.

### Steps

1. Go to **Actions → Create Release → Run workflow** (or click [here](https://github.com/landro/platform-engineering/actions/workflows/release.yml)).
2. Fill in the two inputs:
   - **Version tag** — e.g. `v2.0`
   - **Revision year** — e.g. `2026`
3. Click **Run workflow**.

The workflow will:
- Create and push an annotated tag to `main`
- Publish a GitHub Release visible on the [Releases page](https://github.com/landro/platform-engineering/releases)

### Version naming convention

| Year | Tag    |
|------|--------|
| 2025 | v1.0   |
| 2026 | v2.0   |
| 2027 | v3.0   |

Increment the major version number by 1 for each annual revision.
