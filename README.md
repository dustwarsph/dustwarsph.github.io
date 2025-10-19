# Dust Wars Ph — Static Site

This repository contains a single-page static website for Dust Wars Ph, a card game by Nate. The site is designed to be published on GitHub Pages and is intentionally simple so you can replace fonts and images easily.

Files added
- `index.html` — single-page site with all sections.
- `styles.css` — site styles and responsive rules.
- `assets/` — SVG placeholders for hero, posts, and creator image.

Local preview

To preview locally, you can use Python's simple HTTP server from the project root. For macOS / zsh run:

```bash
# Python 3.x
python3 -m http.server 8000
```

Then open http://localhost:8000 in your browser.

GitHub Pages

1. Commit and push this repository to GitHub (owner: `dustwarsph`).
2. In repository Settings > Pages, select the `main` branch and `/ (root)` as the folder.
3. Save — your site will be available at `https://dustwarsph.github.io/` (it may take a minute).

Fonts and assets

- Replace the placeholders in `assets/` with final images when ready.
- To include your custom fonts, upload them and add @font-face rules in `styles.css`. Use `DOTIMPACT` for the `DUST WARS` logo and `Magic Retro` for the byline (avoid Magic Retro for all-caps text). Body text should use `Helvetica Neue`.

Next steps (optional)

- Add meta/social cards for improved sharing.
- Add a contact form or payment link to the "How to order" section.
- Add a build step with SASS if you want more advanced styling workflows.

If you want, I can add a GitHub Actions workflow to auto-deploy to Pages or wire up a contact form.
# dustwarsph.github.io