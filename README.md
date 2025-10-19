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

Fonts and where to get them (free sources)

If you don't have the fonts yet, here are free or freely-available alternatives and sources you can use now:

- DOTIMPACT (logo font): this is a display / arcade style font. If DOTIMPACT isn't freely available you can use free alternatives such as "Press Start 2P" (Google Fonts) or "Orbitron" for bold, geometric display. Search links:
	- Google Fonts: https://fonts.google.com (search "Press Start 2P" or "Orbitron")
- Magic Retro (byline): a retro script; Magic Retro may be a paid font. Free script alternatives: "Pacifico" or "Fredericka the Great" on Google Fonts.
- Helvetica Neue (body): Helvetica Neue is commercial on some platforms. Use system fallbacks or free alternatives: "Inter", "Roboto", or "Noto Sans" from Google Fonts.

Recommended free font workflow

1. Pick a replacement from Google Fonts (https://fonts.google.com) or upload your licensed font files into `assets/fonts/`.
2. Add @font-face rules in `styles.css` pointing to the uploaded files (WOFF/WOFF2 preferred). Example:

```css
@font-face {
	font-family: 'DOTIMPACT';
	src: url('assets/fonts/DOTIMPACT.woff2') format('woff2');
	font-weight: normal;
	font-style: normal;
	font-display: swap;
}
```

Banner / head image recommendations

- Aspect ratio: use a wide banner. Recommended aspect ratios are 16:6 (very wide and short) or 16:9 will also work. The current hero area uses a responsive crop, so provide a wide image (for full-width display):
	- Desktop: at least 1600px wide for crisp display on large screens.
	- Height: between 360px and 600px originals are fine (the CSS will crop/scale). A 1600×600 image is a safe baseline.
- File format: use optimized JPEG or WebP for photos; use PNG or SVG for illustrations or logos. WebP is preferred if you want smaller file sizes and wide browser support.
- Focal point: keep important visual content near the horizontal center and vertically near the middle third because the hero is center-cropped for many viewports.

Responsiveness

The site is built to be responsive: the hero scales down on small screens, the nav wraps, and content sections stack vertically on mobile. I updated `styles.css` with media queries so the layout adapts between desktop and mobile widths. You can test by resizing the browser or opening the page on a phone.

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

If you'd like, I can add fonts now (if you upload them) or wire an automated deployment. I can also tweak exact banner sizing or add srcset/picture markup to serve WebP and fallback images for better performance.