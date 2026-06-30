# Hydration Fix Note

The hydration error was caused by the 3D particle background generating random points during server rendering and again in the browser.

Fix applied:

- `ParticleField` is dynamically loaded with `ssr: false` from `Hero.tsx`
- particle positions were changed from `Math.random()` to seeded deterministic values
- this prevents server/client HTML mismatch while keeping the animated 3D effect

After replacing files, run:

```bash
npm run build
npm run dev
```

Then push:

```bash
git add .
git commit -m "Fix hydration mismatch in particle background"
git push
```
