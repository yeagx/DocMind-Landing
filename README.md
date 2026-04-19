# DocMind Landing

Public marketing site for DocMind. This project is **standalone**: it does not link to or embed the DocMind web application. Use it for product positioning and institutional outreach (e.g. `mailto:` contact).

## Stack

Vite + React 19 + Tailwind CSS v3 + framer-motion + lucide-react.

## Run locally

```bash
cp .env.example .env   # optional
npm install
npm run dev            # http://localhost:5174
```

## Environment

| Variable | Purpose |
|----------|---------|
| `VITE_PARTNER_EMAIL` | Shown in partner/contact CTAs; defaults to `hello@docmind.app` |

There is **no** app URL or API base URL in this project.

## Layout

```
src/
├── App.jsx
├── lib/env.js          # PARTNER_EMAIL only
├── assets/docmind-logo.png
└── components/
    ├── ui/
    ├── effects/
    └── marketing/
```
