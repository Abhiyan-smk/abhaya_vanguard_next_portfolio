# Deployment Guide

## Fastest local test

```bash
cd abhaya_engineering_portfolio_pro
python -m http.server 5500
```

Open `http://localhost:5500`.

## Best free hosting path

Use Netlify first if you want the contact form to work without extra setup.

1. Zip or upload the entire folder.
2. Drag it into Netlify's deploy area.
3. Netlify will give you a free temporary domain.
4. Rename the site in Netlify settings.
5. Later, connect a custom domain.

## GitHub Pages path

1. Create a public GitHub repo.
2. Upload everything inside the website folder.
3. Settings → Pages → Source: Deploy from branch.
4. Branch: main, folder: `/root`.
5. Save.

## Domain note

For a student/free setup, start with a free Netlify/GitHub Pages URL. Only buy/connect a custom domain after the site content is final.
