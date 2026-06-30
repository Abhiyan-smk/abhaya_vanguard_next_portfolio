# Vanguard Portfolio Blueprint

## The Blueprint

### User flow
1. Recruiter lands on the hero and sees role, location, visual identity and immediate actions.
2. Recruiter scans role-fit cards to understand what jobs Abhaya matches.
3. Recruiter reviews realistic evidence visuals.
4. Recruiter opens project cards and case snapshots.
5. Recruiter scans ATS keywords and contacts Abhaya.

### Visual mood
Dark civil-infrastructure interface using:
- deep green/blue base `#032539`
- sage engineering accent `#a6bd8f`
- mist text/background `#e8e9e4`
- white high-contrast CTA layer

### Motion physics
- Lenis smooth-scroll using eased requestAnimationFrame loop.
- Motion spring values for magnetic buttons.
- R3F instanced particle field for low-draw-call ambient motion.
- GLSL fragment shader plane for subtle wave/grain refraction.
- Modal animations use AnimatePresence with scale, opacity and y-axis movement.

## Component Architecture

```text
app/
  layout.tsx
  page.tsx
  globals.css
components/
  Hero.tsx
  RoleFit.tsx
  Evidence.tsx
  Projects.tsx
  Keywords.tsx
  Contact.tsx
  CommandPalette.tsx
  MagneticButton.tsx
  Providers.tsx
  SectionHeader.tsx
  canvas/
    ParticleField.tsx
lib/
  data.ts
  utils.ts
public/
  images/
  docs/
```

## Core Implementation

The implementation is a Next.js App Router project with React, TypeScript, Tailwind, Motion, Lenis and React Three Fiber.

## Performance Audit

Implemented:
- R3F `instancedMesh` for particle nodes to avoid hundreds of individual mesh draw calls.
- `dpr={[1, 1.7]}` and performance minimum for Canvas to reduce mobile GPU pressure.
- Lenis cleanup via `destroy()` and `cancelAnimationFrame`.
- Command palette event listeners removed on unmount.
- Reduced-motion CSS fallback.
- Images stored locally under `public/images`.
- No full address or referee private details exposed.

Deploy:
- Vercel: import repo, run `npm install`, then `npm run build`.
- Netlify: use Next.js runtime build. Build command: `npm run build`. Publish handled by Netlify Next adapter.
