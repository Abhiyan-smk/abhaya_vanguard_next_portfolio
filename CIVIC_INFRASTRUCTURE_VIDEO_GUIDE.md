# Civic Infrastructure Intelligence — Video Integration Guide

## Theme direction

Use the concept:

**Civic Infrastructure Intelligence**

The site should feel like:
- modern council infrastructure dashboard
- engineering consultancy portfolio
- subtle agency-style motion website

Avoid:
- neon cyberpunk
- Web3/crypto look
- fake futuristic city visuals
- overdone 3D effects
- unreadable text over video

## Required video filenames

Place your MP4 files in:

```text
public/videos/
```

Use these exact names:

```text
hero-gis-map.mp4
stormwater-flow.mp4
geotech-soil-section.mp4
infrastructure-dashboard.mp4
```

## Hero video prompt

```text
Cinematic dark-mode GIS map of a regional Australian city, clean road network lines, pedestrian footpath routes highlighted in yellow and green, subtle glowing data points, slow camera push-in, professional infrastructure planning dashboard style, realistic but abstract, no text, no logos, smooth 6-second loop.
```

## Stormwater video prompt

```text
Technical civil engineering stormwater concept animation, rainfall falling onto an urban catchment, blue flow paths moving into drainage channels, hydrograph curve forming softly in the background, dark navy and concrete grey colour palette, professional engineering dashboard style, no text, no logos, smooth loop, realistic and clean.
```

## Geotechnical video prompt

```text
3D cutaway of soil and rock layers for civil engineering site assessment, layered earth cross-section, subtle parallax movement, small technical markers without readable text, clean professional lighting, dark background, realistic engineering visualisation, smooth slow rotation, seamless loop.
```

## Infrastructure dashboard video prompt

```text
Futuristic but professional civil infrastructure dashboard, GIS panels, walking network data, road lines, bus stop nodes, compliance indicators, subtle glassmorphism, dark navy interface, road-marking yellow highlights, slow animated data pulses, no logos, no readable text, seamless loop.
```

## Video export settings

```text
Format: MP4
Codec: H.264
Resolution: 1920x1080 or 1280x720
Length: 6–10 seconds
Audio: none / muted
Loop: seamless
File size target: under 8–12 MB each
```

## Current implementation

The hero already references:

```text
public/videos/hero-gis-map.mp4
```

If the file is not present, the site still works using the GIS image fallback.

## After adding videos

Run:

```bash
npm run build
npm run dev
```

Then push:

```bash
git add .
git commit -m "Add civic infrastructure video assets"
git push
```

Vercel will redeploy automatically.
