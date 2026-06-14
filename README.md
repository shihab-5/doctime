# Doctime

Live site (client): https://doctime.vercel.app

Doctime is a lightweight appointment-booking and telemedicine frontend built with Next.js and React. It helps patients discover vetted medical professionals and schedule appointments quickly.

Key features
- Book appointments with verified medical specialists and view available time slots.
- Fast, server-rendered pages using Next.js for good SEO and performance.
- Search and filter doctors by name and specialty with client-side routing.
- Secure user authentication and session handling for booking management.
- Responsive, accessible UI components and smooth interactions.

Quick start (local development)

1. Install dependencies:

```bash
npm install
```

2. Copy environment variables (example `.env`):

Set `NEXT_PUBLIC_SERVER_URL` to your API server (or leave blank to use relative paths):

```env
NEXT_PUBLIC_SERVER_URL=http://localhost:5000
```

3. Run the dev server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

Deployment

- This project is ready for deployment on Vercel. Configure environment variables in your Vercel project dashboard.

Contributing

- Pull requests and issues are welcome. Please open an issue first for larger changes.

Replace the `Live site (client)` URL above with your real client URL if different.
