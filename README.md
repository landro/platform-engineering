# Platform Engineering Manifesto

A living manifesto of principles and practices for building and operating exceptional internal developer platforms. Published as a GitHub Pages site.

## Annual Revision — Creating a Release

For each annual revision of the manifesto, create an annotated Git tag and a matching GitHub Release using the steps below.

### Prerequisites

- [Git](https://git-scm.com/) installed locally
- [GitHub CLI](https://cli.github.com/) (`gh`) installed and authenticated (`gh auth login`)
- You have push access to this repository

### Steps

1. **Check out the latest `main` branch and pull any changes**

   ```bash
   git checkout main
   git pull
   ```

2. **Create an annotated Git tag**

   Replace `v1.0` with the appropriate version (e.g. `v2.0` for the second annual revision) and adjust the message accordingly.

   ```bash
   git tag -a v1.0 -m "Platform Engineering Manifesto — 2025 Annual Revision"
   ```

3. **Push the tag to GitHub**

   ```bash
   git push origin v1.0
   ```

4. **Create the GitHub Release**

   ```bash
   gh release create v1.0 \
     --title "Platform Engineering Manifesto v1.0 — 2025 Annual Revision" \
     --notes "Annual revision of the Platform Engineering Manifesto. See the published site for the full content."
   ```

   This creates a release tied to the `v1.0` tag and makes it visible on the [GitHub Releases page](https://github.com/landro/platform-engineering/releases).

### Version naming convention

| Year | Tag    |
|------|--------|
| 2025 | v1.0   |
| 2026 | v2.0   |
| 2027 | v3.0   |

Increment the major version number by 1 for each annual revision.
