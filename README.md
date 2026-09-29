# Jonghyuk Yun — research website

A custom Hugo site. The visual design is a draft awaiting review.

## Preview and build

Tested with Hugo 0.165.0. No Ruby or Node dependencies are required.

```sh
hugo server --bind 127.0.0.1
hugo --minify
```

The build is written to `public/`; do not commit that directory.

## Edit content

- `data/publications.json`: publication metadata and resource links, imported from the author's Google Sites on 2026-09-29.
- `layouts/index.html`: biography and selected news.
- `content/`: page routes and project descriptions.
- `layouts/`: custom templates.
- `static/assets/css/research.css`: responsive styling.
- `static/assets/js/research.js`: progressive search and filters. Publications remain readable without JavaScript.

Existing `/md/publications`, `/md/projects`, `/md/powdew/`, and `/md/rampscope/` routes are retained. Legacy `.html` index URLs have aliases.

## Deployment

No push or deployment has been performed. Before publishing, review the design, then configure GitHub Pages to use GitHub Actions and a Hugo build workflow. The old Jekyll build should not be used for this version.

Official deployment guide: https://gohugo.io/host-and-deploy/host-on-github-pages/
