# Shivam Mishra: Developer Portfolio

Static site (HTML, CSS, vanilla JS). No build step, no backend.

## Files
- `index.html`: main portfolio. `css/styles.css`, `js/main.js` (rendering, filters, detail view, nav).
- `js/projects.js`: **all project and skill data.** Edit this file to change content.
- `arcade.html`: the original game-style portfolio, preserved and linked from the nav.
- `resume.pdf`: downloadable resume.

## Publish on GitHub Pages
1. Create a repository (for `https://YOUR-GITHUB-USERNAME.github.io/` name it `YOUR-GITHUB-USERNAME.github.io`).
2. Upload everything in this folder to the `main` branch root.
3. Settings > Pages > Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
4. Custom domain (e.g. rshivam.xyz): add it under Settings > Pages, create a `CNAME` file containing the domain, and point DNS to GitHub Pages (A records for the apex, or a CNAME record for `www`).

## Add a project
Add an object to `PROJECTS` in `js/projects.js` (`id`, `name`, `cat`, `desc`, `work`, `tech`, optional `url` and `repo`). Cards and filters update automatically. Use only verified links and facts.

## To fill in or confirm
Projects marked `confirm:true` use neutral descriptions until you verify them: CompressionZ, 2020 CDL Driving, Dr. Restivo, Corvantis, Aurele, Demo Technologies, Global Ventage, M&M Bakery, 2020 Driving School (platform and shipped features), HR Portal (email verification, status tracking), Doctor-Patient API (endpoints), AI Discord Bot, Music Website.
- Add real URLs (`url`) and categories for each client once verified; none are assumed to be Shopify or WordPress unless documented.
- Agile Digital Edge start date and official title (Experience section in `index.html`).
- Project screenshots: cards use abstract placeholders; add authorized images to `assets/images/`.
- Client-confidentiality: publish only links and screenshots you are allowed to show.
