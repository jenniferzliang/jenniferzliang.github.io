# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static portfolio website hosted on GitHub Pages for Jennifer Liang. The site is built with vanilla HTML, CSS, and JavaScript using Bootstrap for responsive design.

## Architecture

- **Static Site**: No build process required - files are served directly
- **GitHub Pages**: Deployed via Jekyll with minimal theme configuration in `_config.yml`
- **Frontend Only**: Pure client-side code with no backend dependencies

### Key Files Structure

- `index.html` - Main portfolio page with sections for About, Experience, and Portfolio
- `js/portfolio.js` - Portfolio filtering functionality for project categories
- `js/createPorfolio.js` - Project data and modal content management
- `css/` - Custom styling files (style1.css, style2.css, custom.css, tab.css)
- `assets/` - Images, PDFs, and static resources
- `v1/` - Legacy version of the portfolio (SCSS-based with Gulp build process)

### Project Data Management

Projects are defined as JavaScript objects in `js/createPorfolio.js` with properties:
- `name` - Project title
- `tools` - Technologies used  
- `description` - HTML content with links
- `img` - Image path for modal display

Portfolio filtering uses CSS classes (`web`, `app`, `misc`) to categorize and show/hide projects.

## Development

### Local Development
Since this is a static site, simply open `index.html` in a browser. No build process or local server required.

### Deployment
Changes are automatically deployed to GitHub Pages when pushed to the `master` branch.

### Adding New Projects
1. Add project data object to `project` array in `js/createPorfolio.js`
2. Add corresponding portfolio item HTML in `index.html` with appropriate `filterDiv` classes
3. Ensure image assets are placed in `assets/img/portfolio/`

### Content Updates
- Resume: Replace `assets/Jennifer_Liang.pdf`
- Profile images: Update files in `assets/img/profile/`
- Project images: Add to `assets/img/portfolio/`