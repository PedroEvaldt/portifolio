# Pedro Evaldt Portfolio

Professional portfolio landing page for Pedro Evaldt, a Computer Science student at UFRGS focused on backend, systems and practical developer tools.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- Vitest
- React Testing Library
- Playwright

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Scripts

```bash
npm run lint
npm run typecheck
npm run test
npm run test:e2e
npm run test:all
npm run build
```

## Project Structure

```text
src/app/
  layout.tsx
  page.tsx
  globals.css

src/components/
  Header.tsx
  Hero.tsx
  About.tsx
  Skills.tsx
  Projects.tsx
  ProjectCard.tsx
  CaseStudy.tsx
  Education.tsx
  Contact.tsx
  Footer.tsx
  ExternalLink.tsx

src/data/
  portfolio.ts

src/types/
  portfolio.ts

tests/
  components/
  e2e/
```

## Editing Content

Most portfolio content lives in:

```text
src/data/portfolio.ts
```

Update that file to change:

- navigation labels;
- hero text and CTAs;
- skills;
- projects and repository links;
- case study content;
- education details;
- contact links;
- deployment URL and Open Graph image path.

## SEO

SEO metadata is configured in:

```text
src/app/layout.tsx
```

The metadata reads from `src/data/portfolio.ts`. When the site is deployed, update `portfolio.site.deploymentUrl` with the final public URL. If an Open Graph image is added later, set `portfolio.site.ogImagePath`.

## Testing

Before considering changes complete, run:

```bash
npm run lint
npm run typecheck
npm run test
npm run test:e2e
```

For a production check, also run:

```bash
npm run build
```

## Deployment

This project is ready for deployment on Vercel or any platform that supports Next.js.

For Vercel:

1. Push the repository to GitHub.
2. Import the repository in Vercel.
3. Keep the default Next.js build settings.
4. After deployment, update `portfolio.site.deploymentUrl` with the production URL.
