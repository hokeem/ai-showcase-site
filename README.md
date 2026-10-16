# HOKEEM Portfolio

A static portfolio for vibe-coded products and AIGC visual work, published at https://hokeem.github.io/ai-showcase-site/.

## Files

- `index.html` — page shell and navigation
- `app.js` — routes, interactions, and page content
- `project-data.js` — project entries and media references
- `styles.css` — responsive layout and motion
- `assets/` — covers, illustrations, and the profile image
- `media/` — playable project videos and other project media

The site uses hash routes such as `#home`, `#work/product`, `#project/kol-cooperation-platform`, and `#contact`. Relative asset paths allow it to run under the GitHub Pages repository path.

## Local preview

From this directory, run `python3 -m http.server 4180` and open http://localhost:4180/.

## Updating a project

Add the cover to `assets/` and the video or image to `media/`, then add or update its entry in `project-data.js`. Keep the title, description, role, and results specific to work that can be verified. For large videos, provide a browser-compatible MP4 and a lightweight cover.

Publishing from the repository's `main` branch replaces the public GitHub Pages version. Prior versions remain available through Git history.
