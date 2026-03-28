# Apparel Clinic

Laundry and dry cleaning website built with React, Vite, and Vercel serverless API routes.

## Scripts

```bash
npm run dev
npm run server
npm run dev:full
npm run build
npm run preview
```

## Environment Variables

Use `.env.example` as the template.

Required for email delivery:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-character-app-password
EMAIL_TO=where-you-want-to-receive-mail@gmail.com
```

Optional frontend endpoint overrides:

```env
VITE_PICKUP_FORM_ENDPOINT=https://your-domain.com/api/pickup
VITE_CONTACT_FORM_ENDPOINT=https://your-domain.com/api/contact
```

## Structure

```text
src/
  assets/
  components/
  data/
  hooks/
  pages/
api/
  _lib/
  pickup.js
  contact.js
scripts/
  dev.js
server.js
vercel.json
```

## Notes

- `ScrollToTop` is already active in the app shell.
- Page transitions use `Suspense` with `PageLoader`.
- Production form handling is implemented through Vercel API routes.
- Local development can use `npm run dev:full` to run frontend and backend together.
