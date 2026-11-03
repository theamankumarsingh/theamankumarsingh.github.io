# Personal Website

This is a minimalist, typography-first personal website for Aman Kumar Singh. It is built with plain HTML, CSS, and JavaScript with no build steps, frameworks, or external dependencies.

## Design Philosophy
- **No-Build:** Purely static files. No React, Next.js, or static site generators.
- **Performance:** Zero external requests (fonts, icons, scripts) beyond the avatar.
- **Accessibility:** WCAG AA contrast, semantic HTML, and keyboard-navigable.
- **Simplicity:** Single-column layout, system fonts, and automatic system-based dark/light mode.

## Repository Structure
```
.
├── index.html           # Homepage (Single-page layout)
├── 404.html             # Custom 404 page
├── LICENSE              # License and copyright information
├── robots.txt           # Search engine instructions
├── sitemap.xml          # Sitemap for SEO
├── .nojekyll            # Tells GitHub Pages not to process files with Jekyll
├── README.md            # This file
└── assets/
    ├── css/
    │   └── style.css    # Single stylesheet
    ├── img/
    │   └── favicon.svg  # Favicon
    └── js/
        └── script.js    # Client-side scripts
```

## Maintenance

### Updating Content
Since the site is a single-page layout, all content is managed within `index.html`. 

- **Research Entries:** To add a new publication, insert a new `<article class="entry">` block within the `#research` section. Follow the existing pattern: `<h3>` for title, `<p class="entry-meta">` for venue/date, and a `<p>` for authors and links.
- **Experience Entries:** Add a new `<article class="entry">` block within the `#experience` section.
- **Software Entries:** Add a new `<article class="entry">` block within the `#software` section.

### SEO and Metadata
- Update the `<title>` and `<meta name="description">` tags in `index.html` to reflect current roles or research interests.
- Update `sitemap.xml` if new pages are added (though currently it is a single-page site).

## Technical Details

### Theme
The site uses the `prefers-color-scheme` CSS media query to automatically switch between light and dark modes based on the user's system settings.

## License

Copyright (c) 2026 Aman Kumar Singh. All rights reserved.
