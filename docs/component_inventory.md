| # | Layer | Component | Called by | Calls into | MVP? |
|---|-------|-----------|-----------|------------|------|
| 1 | ui | Single portfolio page (`index.html`) | browser request / direct file open | header nav, hero section, projects section, contact section, footer | Yes |
| 2 | ui | Header | single portfolio page | anchor navigation | Yes |
| 3 | ui | Anchor navigation | header | hero section, projects section, contact section | Yes |
| 4 | ui | Hero / landing section | single portfolio page, anchor navigation | tagline block, role/specialty statement, bio block, credibility cues list, profile photo placeholder | Yes |
| 5 | ui | Tagline block | hero / landing section | — | Yes |
| 6 | ui | Role / specialty statement | hero / landing section | — | Yes |
| 7 | ui | Short bio block | hero / landing section | — | Yes |
| 8 | ui | Credibility cues list | hero / landing section | credibility cue item | Yes |
| 9 | ui | Credibility cue item | credibility cues list | — | Yes |
| 10 | ui | Profile photo placeholder | hero / landing section | — | Yes |
| 11 | ui | Projects section | single portfolio page, anchor navigation | project entry card/article list | Yes |
| 12 | ui | Project entry card/article list | projects section | project entry card/article | Yes |
| 13 | ui | Project entry card/article | project entry card/article list | project title, project description, project relevance/outcome context, project outbound link | Yes |
| 14 | ui | Project title | project entry card/article | — | Yes |
| 15 | ui | Project description | project entry card/article | — | Yes |
| 16 | ui | Project relevance / outcome context | project entry card/article | — | Yes |
| 17 | ui | Project outbound link | project entry card/article | external project destination | Yes |
| 18 | ui | Contact section | single portfolio page, anchor navigation | contact form, visible direct email text, LinkedIn link | Yes |
| 19 | ui | Contact form | contact section | name field, email field, message field, contact form submit control | Yes |
| 20 | ui | Name field | contact form | — | Yes |
| 21 | ui | Email field | contact form | — | Yes |
| 22 | ui | Message field | contact form | — | Yes |
| 23 | ui | Contact form submit control | contact form | contact form submission flow | Yes |
| 24 | ui | Visible direct email text | contact section | browser/mail client via copied or clicked email usage | Yes |
| 25 | ui | LinkedIn link | contact section | external LinkedIn profile | Yes |
| 26 | ui | Footer | single portfolio page | — | Yes |
| 27 | ui | Smooth-scroll enhancement | anchor navigation | smooth-scroll enhancement flow | No — marked optional progressive enhancement and `Could | Smooth scroll` |
| 28 | service | Contact form non-empty validator | contact form submission flow | name field, email field | Yes |
| 29 | service | Safe `mailto:` URL builder | contact form submission flow | browser mail client adapter | Yes |
| 30 | service | `mailto:` subject/body URL encoder | safe `mailto:` URL builder | — | Yes |
| 31 | service | User-controlled header fragment rejection guard | safe `mailto:` URL builder | — | Yes |
| 32 | adapter | Browser mail client via `mailto:` | safe `mailto:` URL builder, visible direct email text | external mail application | Yes |
| 33 | adapter | External LinkedIn profile destination | LinkedIn link | LinkedIn | Yes |
| 34 | adapter | External project destination | project outbound link | live site / repository / case-study host | Yes |
| 35 | adapter | GitHub Pages or equivalent static host | unknown | serves single portfolio page assets | Yes |
| 36 | pipeline | [unnamed trigger for contact form submission flow] | contact form submit control | contact form non-empty validator, safe `mailto:` URL builder, browser mail client via `mailto:` | Yes |
| 37 | pipeline | [unnamed trigger for smooth-scroll enhancement flow] | anchor navigation | smooth-scroll enhancement | No — marked optional progressive enhancement and `Could | Smooth scroll` |
| 38 | pipeline | [unnamed trigger for static site publish/deploy flow] | unknown | GitHub Pages or equivalent static host | Yes |
| 39 | pipeline | [unnamed trigger for public asset hygiene review before launch] | unknown | single portfolio page, project outbound links, visible direct email text, LinkedIn link, GitHub Pages or equivalent static host | Yes |

**Deferral summary**
- `Smooth-scroll enhancement` is out of MVP because the PRD marks smooth scroll as `Could` and the tech design says “smooth scroll if desired.”
- `[unnamed trigger for smooth-scroll enhancement flow]` is out of MVP for the same explicit `Could` boundary on smooth scroll.

**Uncertain components**
- `[unnamed trigger for static site publish/deploy flow]` is implied by “GitHub Pages or equivalent static hosting,” but the design does not specify whether deployment is manual, branch-based, or script-driven.
- `[unnamed trigger for public asset hygiene review before launch]` is implied by the security condition to remove private/stale material before launch, but the design does not say whether this is a checklist, script, or manual review step.
- `GitHub Pages or equivalent static host` is clearly in scope as a deployment target, but the design does not define whether any repo-side configuration artifact is required.
- `Browser mail client via \`mailto:\`` is explicit, but the exact no-JS submission behavior of the form is not fully specified beyond fallback visibility.

## Project Conventions

**Stack & runtime**
- Plain `HTML5`, `CSS3`, and minimal vanilla `JavaScript`
- No framework
- No build tooling required; must work by opening `index.html` directly
- No package manager / package-managed frontend stack

**Environment**
- No environment variables are specified in the final technical design

**File & module conventions**
- Core files are `index.html`, `styles.css`, and optional `script.js`
- Use a semantic single-document structure with `header`, `nav`, `main`, section anchors, and `footer`
- Keep content in source files; no CMS, backend, database, or external content service is implied
- JavaScript, if present, is only for progressive enhancement:
- smooth scroll if included
- contact-form validation for non-empty name and email
- safe construction of a `mailto:` submission link