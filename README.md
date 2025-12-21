# naazcommercialinstitute.in
Naaz Commercial Institute

## Deployment status

[![Pages Deploy](https://github.com/nehanaaz/naazcommercialinstitute.in/actions/workflows/pages-deploy-custom.yml/badge.svg)](https://github.com/nehanaaz/naazcommercialinstitute.in/actions/workflows/pages-deploy-custom.yml)

The site is built from the `website/` Astro project and deployed to GitHub Pages from the generated `dist/` directory (configured in `website/astro.config.mjs`).

Local commands

```bash
cd website
pnpm install
pnpm build    # outputs `dist/` at the repository root
pnpm preview
```

Notes

- The workflow `pages-deploy-custom.yml` runs on pushes to `main`, tag pushes like `v1.2.3`, and manual dispatch.
- The repo contains a `CNAME` file — GitHub Pages will use that domain after deployment.
