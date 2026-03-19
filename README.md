# Saurabh Mishra Portfolio

A production-ready portfolio built with vanilla HTML, CSS, and JavaScript plus a lightweight Node build script for fast GitHub Pages deployment.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## GitHub Pages deployment

A GitHub Actions workflow is included in `.github/workflows/deploy.yml`. It builds the site and deploys the `dist/` output to GitHub Pages whenever changes are pushed to `main`.

If your GitHub repository is `saurabh2mishra/saurabh_pflo`, the expected Pages URL is:

`https://saurabh2mishra.github.io/saurabh_pflo/`
