INSTALL FIX VERSION

This package uses a stable compatible stack:

- React 18.3.1
- React DOM 18.3.1
- Next.js 14.2.23
- @react-three/fiber 8.17.10
- @react-three/drei 9.122.0

Why:
The previous package used React 19, but @react-three/fiber 8 requires React >=18 and <19.
That caused npm ERESOLVE.

Recommended local commands:

1. Open this folder in terminal:
   cd "YOUR_PATH\abhaya_vanguard_next_portfolio"

2. Clean any failed install:
   rmdir /s /q node_modules
   del package-lock.json

3. Install:
   npm install

4. Run:
   npm run dev

5. Open:
   http://localhost:3000

Recommended Node version:
Use Node 20 LTS for fewer build problems.
