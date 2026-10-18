# AFFAS Docs

Vue 3 + TypeScript/TSX + Vite 6 + Tailwind CSS v4 + Sass documentation app.

## Development

```bash
npm install
npm run dev
```

## Verification and build

```bash
npm run type-check
npm run build
npm run preview
```

## GitHub Pages

- Vite `base`: `/affas/`
- Router: `createWebHashHistory()` for safe static hosting
- Build output: `dist/`
- Deployment: `.github/workflows/deploy.yml`

Hash routing avoids the GitHub Pages SPA rewrite problem, while the Vite base keeps assets under the repository project path.
