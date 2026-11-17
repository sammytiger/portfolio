# christinegalligan.com — Futures Worth Belonging To

Static site for Christine Galligan / Kutuhala Studio. No build step: deploy this folder as-is.

- `index.html` — the canal exhibition (home)
- `*.html` — case studies (Cloudflare Pages serves them at clean URLs, e.g. `/somatag`)
- `img/` — photography (portraits by Kim Brundage Photography) and case images
- `reading/` — free PDFs in the Reading Room
- `vendor/` — React 18.3.1 (UMD), self-hosted
- `support.js`, `_ds/` — page runtime and design tokens
- `_headers` — cache rules for Cloudflare Pages; `404.html` — not-found page

Deploy: Cloudflare Pages, connected to this repo's `main`. Framework preset "None", build command empty, output directory `/`. `_redirects` keeps the old case-study URLs working.
