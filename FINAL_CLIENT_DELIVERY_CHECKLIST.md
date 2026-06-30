# Final Client Delivery Checklist

## Before pushing to GitHub

1. Put MP4 videos in:

```text
public/videos/
```

Required filenames:

```text
hero-gis-map.mp4
stormwater-flow.mp4
geotech-soil-section.mp4
infrastructure-dashboard.mp4
```

2. Put the PDF resume in:

```text
public/documents/Abhaya_Simkhada_Resume.pdf
```

3. Run:

```bash
npm install
npm run build
npm run dev
```

4. Check:

```text
http://localhost:3000
```

## Final visual checks

- Hero video loads.
- Animated GIS route lines appear.
- Metrics are visible.
- What I Do cards animate.
- Four case studies show correctly.
- Stormwater animation appears.
- Geotech soil-layer animation appears.
- Resume button works.
- Email, phone and LinkedIn links work.
- Mobile layout looks clean.
- No street address or referee personal details are published.

## Deploy

```bash
git add .
git commit -m "Final client-ready Civic Infrastructure Intelligence portfolio"
git push
```

Vercel will deploy automatically.

## Recommended domain step

First test the Vercel URL.

Only after approval, connect:

```text
abhayasimkhada.com
```

or a safer test subdomain:

```text
vanguard.abhayasimkhada.com
```
