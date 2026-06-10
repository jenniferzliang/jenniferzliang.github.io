# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static portfolio website for Jennifer Liang, built with Jekyll and hosted on GitHub Pages. Styling is plain CSS (`css/markdown-style.css`) with no framework.

## Architecture

- **Jekyll Site**: Pages share a single layout; project data lives in a YAML data file
- **Deployment**: GitHub Actions (`.github/workflows/static.yml`) builds the site with `actions/jekyll-build-pages` and deploys to GitHub Pages on every push to `master`

### Key Files Structure

- `_layouts/default.html` - Shared layout: head, header/nav, footer
- `_data/projects.yml` - Project data (categories and items) rendered on the Projects page
- `index.html` - About and Experience sections (plus the NYC walking-map dialog)
- `projects.html` - Loops over `site.data.projects` to render project cards
- `misc.html` - Books, movies, podcasts, travel apps, hobbies
- `css/markdown-style.css` - The site's only stylesheet
- `travel-planner.html` - Standalone self-contained app (no front matter; Jekyll copies it verbatim — do not add the layout to it)
- `v1/` - Legacy version of the portfolio, served as-is at `/v1/`

### Page Front Matter

Each page sets:
- `layout: default`
- `title` - Appended to the `<title>` tag (omitted on the home page)
- `nav` - One of `about`/`projects`/`misc`; controls the active nav link
- `description` - Meta description

## Development

### Local Development
Requires Ruby and Bundler with the `github-pages` gem, then `bundle exec jekyll serve`. There is no Gemfile checked in; alternatively, push to a branch and check the Actions build.

### Deployment
Pushes to `master` trigger the Pages workflow, which runs the Jekyll build and deploys `_site/`.

### Adding New Projects
Add an entry to the appropriate category in `_data/projects.yml` with `name`, `tools`, `description`, optional `links` (list of `label`/`url`), and optional `note` (raw HTML appended after the links).

### Content Updates
- Resume: Replace `assets/Jennifer_Liang.pdf`
- Project images: Add to `assets/img/portfolio/`
