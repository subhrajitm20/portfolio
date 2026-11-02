# Subhrajit Mishra · Portfolio

Personal portfolio site, live at <https://subhrajitm20.github.io/portfolio/>.

Built with React (Create React App) and Tailwind CSS.

## Updating content

All copy lives in [`src/data/content.js`](src/data/content.js): profile, stats, experience,
patents, projects, skills, education, honors and leadership. Edit that file; the components in
`src/components/` only handle layout.

- **Resume / CV**: put the PDFs in `public/` and point `profile.resume` / `profile.cv` at the file names.
- **Availability badge**: `profile.availability` (the pill at the top of the hero).
- **Photo**: `src/assets/heroImage-sjm.png` (imported at the top of `content.js`).
- **Link preview image**: `public/og-image.png` (1200×630), referenced from `public/index.html`.

## Scripts

```bash
npm start        # dev server at http://localhost:3000/portfolio
npm run build    # production build in build/
npm run deploy   # build and publish build/ to the gh-pages branch
```
