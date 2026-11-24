# Portfolio-Site — Jil Patel

A responsive, light-first portfolio built with Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui components built on Radix, and Motion. A dark-mode toggle is intentionally deferred.

## Development

```sh
npm install
npm run dev
```

Open http://127.0.0.1:3000. Run `npm run typecheck` and `npm run build` to validate. The build produces a static website in `out/`.

## Content

- Edit `src/data/portfolio.ts` for the profile, projects, skills, and combined experience/education timeline.
- The resume is served from `public/jil_patel.pdf`.
- Project visuals are explicitly labeled illustrative concepts. Replace them with approved screenshots when supplied; they are not representations of the actual product UIs.
- `src/components/coming-content.tsx` displays certifications and LinkedIn recommendations. Edit their details in `src/data/portfolio.ts`; images are in `public/certifications/` and `public/testimonials/`.
- The resume supplies the LinkedIn and email links. A GitHub link is omitted until the correct profile is provided.
- Contact links open the visitor's email application. No contact data is collected or stored.
- Add the real domain and social preview image to metadata when ready for publication.

The original resume and Word document remain in the parent folder. No hosting account or deployment is required for local development.

## Verification in this workspace

- TypeScript validation and Tailwind stylesheet compilation passed.
- An isolated React preview passed layout checks at widths of 320, 390, 768, 1024, and 1440 pixels, with no horizontal page overflow or browser errors.
- Mobile navigation and opening/closing the certification dialog passed browser checks.
- Screenshots and the preview harness are in the ignored `.verification/` directory. This harness substitutes plain anchors for Next.js links; it does not verify Next.js routing or the production build.
- A complete dependency installation and production build could not finish because this environment blocks npm network access and some Next.js dependencies are absent from its local cache. Run `npm install` followed by `npm run build` in an environment with registry access before publishing. Locally restored dependency directories are incomplete; `npm install` is still required.
