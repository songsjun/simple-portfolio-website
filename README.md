# Simple Portfolio Website

Simple Portfolio Website is a lightweight, single-page portfolio site for freelancers, job seekers, and other professionals who need a fast, browser-ready way to present their profile, showcase projects, and provide contact options without relying on a backend service.

## Features

- Semantic single-page portfolio layout with anchor navigation
- Hero section designed to introduce the portfolio owner quickly
- Projects section with at least three proof-of-work entries
- Contact section with a no-backend form and visible fallback contact options
- Progressive enhancement for client-side contact form validation
- Safe `mailto:` link assembly with URL-encoded subject and message content
- Responsive visual system for desktop and mobile browsers
- Single-page wiring with launch-safety checks and external-link safety attributes
- End-to-end acceptance coverage for the hero, projects, and contact journey

## Getting Started

### Prerequisites

You only need a modern web browser to view the site locally.

Optional tools for local serving and testing:

- A basic static HTTP server
- A POSIX-compatible shell to run the test scripts in `tests/`

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/songsjun/simple-portfolio-website.git
   ```
2. Move into the project directory:
   ```bash
   cd simple-portfolio-website
   ```
3. Open `index.html` directly in your browser for a quick preview, or serve the project over HTTP with your preferred static file server.

## Usage

### Run locally

For a simple preview, open `index.html` in a browser.

For a more production-like local run, serve the repository as a static site from the project root so the HTML, CSS, and JavaScript load over HTTP.

### Run tests

This repository includes shell-based tests under `tests/`:

```bash
sh tests/contact_form_behavior_test.sh
sh tests/portfolio.e2e.sh
```

The end-to-end test is intended to validate the full static portfolio journey through HTTP, including the hero, projects, and contact flow.

### Deploy to production

Deploy the repository as a static website on any hosting platform that serves plain HTML, CSS, JavaScript, and public assets. No backend service or database is required.

## Dependencies

This project has no package-managed runtime dependencies.

Runtime components:

- `index.html`: the static document shell and page content
- `styles.css`: the shared responsive visual system
- `script.js`: client-side progressive enhancement for behavior and contact handling

Optional local dependencies:

- A static HTTP server for local serving
- A shell environment for running the provided test scripts

## Project Structure

- `index.html` — main single-page portfolio document
- `styles.css` — shared responsive styling for hero, projects, and contact sections
- `script.js` — client-side enhancements, validation, and safe `mailto:` assembly
- `tests/contact_form_behavior_test.sh` — contact form behavior test script
- `tests/portfolio.e2e.sh` — end-to-end acceptance test for the full static site journey
- `docs/prd.md` — product requirements documentation
- `docs/tech_design.md` — technical design notes
- `docs/component_inventory.md` — component inventory
- `docs/conventions.md` — project conventions

## Contributing

Contributions should stay within the project’s static-site scope and preserve the existing single-page experience, responsive design, and no-backend contact flow.

Before submitting changes:

- Keep the site deployable as static assets
- Preserve semantic HTML and safe external-link behavior
- Verify contact form behavior and end-to-end flow using the provided tests
- Open a pull request with a clear summary of the problem solved and the user-facing impact

## License

MIT License