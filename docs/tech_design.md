# Architecture

Use a pure static single-page site for v1.

- Files: `index.html`, `styles.css`, optional `script.js`
- Hosting: GitHub Pages or equivalent static hosting, with the page also working by opening `index.html` directly
- Structure: semantic single document with `header`, `nav`, `main`, section anchors, and `footer`
- No backend, database, package manager, CDN assets, or third-party scripts

Do not include the optional local content-generation step in v1. It is unnecessary for the current scope and should remain a post-MVP maintenance option only if manual editing becomes a real problem.

# Tech Choices

- HTML5 for all content and navigation
- CSS3 for responsive layout and visual styling
- Minimal vanilla JavaScript only for progressive enhancement:
  - smooth scroll if desired
  - contact-form validation for non-empty name and email
  - safe construction of a `mailto:` submission link

# Key Implementation Notes

## Information architecture

The page should have these sections in order:

1. Hero / landing section
2. Projects section
3. Contact section

The hero must make the owner understandable within a short scan for both recruiters and freelance leads. Include:

- short tagline
- explicit role/specialty statement
- short bio
- 2 to 3 credibility cues such as years of experience, domain focus, notable stack, or shipped project count
- optional profile photo placeholder

## Projects

Implement at least 3 projects in v1, per owner guidance. Each project entry must include:

- `title`
- short description
- brief relevance or outcome context so a freelance lead can judge fit, not just see a title
- outbound link to live work, repository, or case-study material

Projects should be presented as scannable cards or stacked articles. Prioritize relevance and clarity over quantity beyond the minimum 3.

## Contact

Keep a no-backend contact flow, but preserve the acceptance criteria by using a lightweight contact form with:

- name field
- email field
- message field
- client-side validation that name and email are non-empty before submission

The form should submit through a safely assembled `mailto:` URL only as a convenience layer. The page must also show visible fallback contact options that work without JavaScript or if `mailto:` is unreliable:

- direct email text
- LinkedIn link

Do not make JavaScript-generated `mailto:` the only contact path.

## Progressive enhancement and no-JS behavior

- Navigation must use normal anchor links
- Core reading flow and contact access must remain usable with JavaScript disabled
- If JavaScript is unavailable, the form may lose enhanced submission behavior, but the fallback email and LinkedIn contact options must remain visible and usable

## Responsive behavior

- Use mobile-first CSS
- Support current Chrome and Safari on desktop and mobile-width layouts
- Use simple flex/grid patterns and avoid fragile browser-specific effects
- Smooth scrolling, if included, should degrade harmlessly

# Security Conditions

- Treat the repository and published branch as fully public
- Remove commented-out personal data, hidden metadata, draft assets, stale files, and any non-public material before launch
- Keep v1 free of third-party scripts, embeds, analytics tags, and package-managed frontend dependencies
- If JavaScript constructs `mailto:`, assemble only from fixed trusted strings and URL-encode subject/body values
- Do not concatenate any user-controlled header fragments into the `mailto:` URL
- Use HTTPS via the static host
- Add `rel="noopener noreferrer"` on external links opened in new tabs

# Docker Compatibility

Yes.

- Compatible with Docker on Apple Silicon Mac Mini
- No GPU required
- No cloud-only dependency required
- Docker is optional because the site is just static files
- If local preview in Docker is desired, serve the files from a minimal static web server container

# Risks

- Content quality remains the main product risk; weak copy or weak project blurbs will hurt credibility more than technical defects.
- `mailto:` reliability remains imperfect even with validation, so visible fallback contact methods are required.
- A shared message for recruiters and freelance leads may still prove too generic; if that happens, revise copy later before adding audience-specific branching.
- The public repo can leak unintended personal information if launch review is sloppy.
- The site can become a liability if projects, links, or contact details are not kept current.