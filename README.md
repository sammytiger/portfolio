# christinegalligan.com

Static site. No build step — Cloudflare Pages serves this directory as-is.

```
index.html                 home
*-case-study.html          six case studies
img/                       photography
favicon.svg
```

**Deploy:** Cloudflare Pages, connected to this repo's `main`. Build command: none. Output directory: `/`.

**Design system:** Antic Didone (display) + Hanken Grotesk (text), on the shared token palette —
paper `#F4F0E8`, ink `#252321`, sage `#7A7B5E`, clay `#A66F55`, gold `#A8854E`.
Tokens are declared inline in each file's `:root`; keep them in sync when editing.
