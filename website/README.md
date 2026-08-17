# Revenue Durability Group — Website

Static site for [Revenue Durability Group](https://revenuedurability.com). No build step, no framework. Deploys to GitHub Pages, Netlify, Vercel, Cloudflare Pages, or any static host in under 5 minutes.

## Structure

```
website/
├── index.html            Homepage — hero, narrative, framework teaser, CTAs
├── framework.html        The Revenue Durability Framework™ deep dive
├── services.html         Services, offer ladder, engagement phases, pricing
├── about.html            About + contact form + booking CTA
├── quiz.html             Lite 10-question Revenue Durability Score™ quiz
├── diagnostic.html       Full 25-question diagnostic (email-gated entry)
├── 404.html              Custom 404
├── .nojekyll             Tells GitHub Pages to skip Jekyll processing
├── README.md             This file
└── assets/
    ├── css/style.css     All site styles (single stylesheet, ~10KB)
    ├── js/site.js        Nav toggle, active-link highlighting
    ├── js/quiz.js        Quiz engine (shared by both quizzes)
    ├── js/quiz-data.js   All 25 questions, bands, and recommendations
    └── img/
        ├── logo.png           Transparent RDG logo (used in nav)
        └── logo-solid.png     Solid-background variant
```

**Total site weight:** ~50 KB (excluding Google Fonts). Loads fast on 3G.

## Local preview

Any static server works:

```bash
# Python 3
python3 -m http.server 8000 -d website

# Node.js
npx serve website

# PHP
php -S localhost:8000 -t website
```

Then open <http://localhost:8000>.

## Deploy to GitHub Pages

1. **Push to GitHub.** Create a new repo (e.g. `rdg-website`) and push this `website/` folder to it. You have two options:
   - **Root-level deploy:** put the contents of `website/` at the repo root.
   - **Subfolder deploy:** keep `website/` as a subfolder — you'll point GitHub Pages at it.
2. **Enable Pages.** In the repo: **Settings → Pages**.
   - **Source:** *Deploy from a branch*
   - **Branch:** `main` (or `master`)
   - **Folder:** `/ (root)` if you did root-level, or `/website` if you kept it as a subfolder
3. Save. Give it 1–2 minutes. Your site is live at `https://<your-username>.github.io/<repo-name>/`.
4. **Custom domain (optional).** In **Settings → Pages → Custom domain**, enter `revenuedurability.com` (or your domain). Add a `CNAME` file at the site root containing your domain, then point your DNS at GitHub Pages (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` for the apex, or a CNAME to `<your-username>.github.io` for `www`).

The `.nojekyll` file is already in place so GitHub Pages won't run Jekyll on your assets.

## Before you go live — five things to wire up

Search the codebase for `YOUR-` and `YOUR-` — every placeholder that needs replacing is tagged.

### 1. Form provider (contact form + quiz email gates)

The site currently uses [Formspree](https://formspree.io/) placeholder URLs. Any provider that accepts a plain `POST` will work: Formspree, [Getform](https://getform.io/), [Basin](https://usebasin.com/), or [Netlify Forms](https://docs.netlify.com/forms/setup/).

Files to update:

- `about.html` — search for `YOUR-FORM-ID`, replace with your Formspree endpoint (or swap in Netlify's `data-netlify="true"` attribute).
- `quiz.html` — search for `YOUR-FORM-ID` in the unlock form.
- `diagnostic.html` — search for `YOUR-FORM-ID` in the entry form.

Until you replace those placeholders, the quiz forms will unlock/start the quiz *locally* without submitting anywhere — a smart fallback so nothing looks broken in dev.

### 2. Booking link (Calendly / SavvyCal / Cal.com)

`about.html` has a placeholder link `https://calendly.com/YOUR-HANDLE/rdg-intro`. Replace with your actual booking URL. The link appears once, and is duplicated in a footer link — grep for `YOUR-HANDLE` and update everywhere.

### 3. Email address

Search for `hello@revenuedurability.com` and swap in your actual contact address (or leave it if you're using that alias).

### 4. Founder bio

`about.html` has a `[Founder bio placeholder]` in the "Who we are" section. Write your operator story: functions you've built, ARR ranges you've operated across, why you started RDG. Keep the operator/no-BS voice.

### 5. Meta descriptions & social cards (optional but recommended)

Each page has a `<meta name="description">` tag. Skim once and adjust if you want different wording. If you want rich previews when the site is shared on LinkedIn/Twitter, add Open Graph and Twitter Card tags to the `<head>` of each page — the [OG image generator](https://og-playground.vercel.app/) is a quick way to spin one up.

## Editing content

Every page is a single HTML file — no templates, no build step. Open, edit, save, refresh.

**To edit the framework text:** `framework.html` mirrors the structure of the framework doc. Section headings map 1:1 to what's in `RDG_Revenue_Durability_Framework_v0.1.docx`.

**To edit the quiz questions:** all 25 questions live in `assets/js/quiz-data.js`. Each question has:
- `pillar`: one of `fit`, `activation`, `signal`, `motion`, `os`
- `lite`: `true` if it should appear in the 10-question lite quiz
- `prompt` and optional `sub`
- `options`: array of `{ text, score }` in descending score order (4 → 0)

Editing recommendations: the `recommendations` object at the bottom of `quiz-data.js` holds band-specific advice per pillar. Update these as you learn from real engagements.

## Analytics (optional)

Drop your analytics snippet (Plausible, Fathom, Google Analytics 4) into the `<head>` of each page. If you want it site-wide via a single edit, extract the header into a shared partial — but for a 6-page site, copy-paste is faster than tooling.

## Naming conventions

- **File names**: lowercase, hyphen-separated
- **CSS**: BEM-lite — semantic class names, minimal nesting
- **JS**: vanilla ES5-flavored (no build), IIFEs for encapsulation

## Trademarks

The strings "Revenue Durability™", "Revenue Durability Score™", and "The Revenue Durability Framework™" appear throughout the site. If/when the marks are formally registered (®), update the symbols site-wide with a find-and-replace.

## License

Site content and copy © Revenue Durability Group. Framework, methodology, and diagnostic questions are proprietary — reuse requires permission.
