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