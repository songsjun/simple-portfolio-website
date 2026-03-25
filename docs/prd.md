**Scope**  
A public single-page portfolio website for one professional, deployed as a static site such as GitHub Pages, intended for recruiters and freelance leads.

**Problem statement**  
The owner currently has to assemble LinkedIn, GitHub, resume, and project links manually when presenting themselves, which creates friction for both them and the visitor. Recruiters and freelance clients must piece together identity, credibility, and contact details across multiple sources, and some will drop off before understanding the owner’s value or reaching out. This product aims to replace that fragmented experience with one clear public URL that helps strangers understand who the owner is, what they do, why they are credible, and how to contact them within a short visit.

**Goals**
- Provide one public URL that quickly communicates the owner’s role, specialty, and credibility.
- Show enough proof of work for a visitor to assess fit without leaving the site immediately.
- Offer an obvious, low-friction contact path that works on desktop and mobile.
- Keep the site simple to publish and maintain without backend services or tooling.

**Non-goals**
- No multi-page information architecture or audience-specific branching in v1.
- No backend contact form, stored submissions, analytics dashboard, or admin surface.
- No multi-user support, authentication, or role-based behavior.
- No external dependencies, CDN assets, or package-managed frontend stack.
- No advanced personalization or recruiter/client toggle unless message conflict is proven.

**User stories**
- As a recruiter, I want to understand the owner’s role and strengths within a few seconds, so that I can quickly decide whether to shortlist them.
- As a freelance lead, I want to see a few relevant projects with enough context and links, so that I can judge whether this person seems credible for my needs.
- As a visitor, I want an obvious way to contact the owner, so that I can reach out without hunting across multiple profiles.
- As the owner, I want one static public page I can send anywhere, so that I stop repeating the same introduction and link bundle manually.
- As the owner, I want the site to remain usable without JavaScript, so that the core experience is robust and low-maintenance.

**Technical constraints**
- Deliver as a single static page that works by opening `index.html` directly and can deploy unchanged to GitHub Pages or equivalent static hosting.
- Use plain HTML, CSS, and only minimal vanilla JavaScript for progressive enhancement such as smooth scroll or client-side validation.
- Support current Chrome and Safari, including desktop and mobile-width layouts.
- Use semantic HTML and keep core navigation and contact access usable with JavaScript disabled.

**Security requirements**
- Publish only intentionally public information such as bio, project links, and chosen contact details; no private assets or hidden personal data in the repo.
- Keep the site fully static with no server-side processing, accounts, sessions, or stored visitor submissions.
- Ensure contact options degrade safely: if JavaScript is disabled or `mailto` is unreliable, a visible fallback such as direct email or LinkedIn must remain available.
- Sanitize any client-side construction of `mailto:` links to avoid malformed URLs or header injection, and avoid third-party scripts or embeds.

**Success metrics**
- The owner feels confident sending one link instead of assembling multiple profile links manually.
- In informal review, target viewers can correctly describe what the owner does and why they seem credible after a brief scan.
- The owner receives or observes credible contact attempts through the published contact path without obvious friction.

**Feature priority (MoSCoW)**

| Priority | Feature | Rationale |
|---|---|---|
| Must | Single public portfolio page / standalone public URL | This is the core asset the whole product is meant to create. |
| Must | Clear first-screen positioning: short bio + tagline + role/specialty + credibility cues | Without immediate understanding and trust, the page fails its core job of helping visitors evaluate the owner quickly. |
| Must | Proof of work plus contact path: projects section with at least a few project title/description/link entries, and an obvious usable way to contact the owner | Without evidence and a way to act, the site cannot convert interest into confidence and outreach. |
| Should | Single-page structure | Matches the recommended low-friction format and keeps comprehension fast. |
| Should | Home page / landing section | Needed in practice to deliver the first impression cleanly. |
| Should | Projects section | Important because credibility is weak without visible work samples. |
| Could | Profile photo placeholder | Helps polish and trust, but the site can do its job without it. |
| Could | Smooth scroll | Nice polish with little effect on the core outcome. |
| Could | Direct email, LinkedIn, or combination as supplementary contact options | Helpful redundancy, but not strictly required if one clear path works. |
| Won't | Recruiter/client audience toggle | Adds complexity before proving that one message cannot work. |
| Won't | Backend contact form | Explicitly out of default scope unless `mailto` proves unreliable. |
| Won't | Interactive choose-your-own-path homepage | Too much scope and polish risk for a simple portfolio. |

**Kano classification**

| Feature | Category | Note |
|---|---|---|
| Single public URL / standalone portfolio site | Basic | Core product fails without one destination. |
| Short bio | Basic | Required for fast understanding of the owner. |
| Tagline / positioning statement | Basic | Needed for immediate specialty comprehension. |
| Projects section | Basic | Required proof of work for credibility. |
| Project description | Basic | Visitors need context, not just titles. |
| Project link | Basic | Claims need a way to be verified. |
| Contact section | Basic | Core job fails without a visible action path. |
| Contact form | Performance | Helpful, but other contact methods can still satisfy the job. |
| Responsive layout | Basic | A public professional page cannot break on mobile. |
| Client-side form validation | Basic | Corrected misclassification; minimum quality for the contact flow. |
| Fully navigable without JavaScript | Basic | Corrected misclassification; baseline robustness for a static site. |
| Semantic HTML | Basic | Supports accessibility and no-JS usability. |
| Smooth scroll | Delighter | Nice polish, not required for core value. |
| Profile photo placeholder | Performance | Helps trust and polish, but not strictly required. |
| Tailored copy for recruiters vs freelance clients | Delighter | Useful only if shared messaging proves insufficient. |
| Low-friction contact path | Basic | Corrected emphasis; reliable contact is part of the core job. |
| Fast first-screen comprehension | Basic | Corrected emphasis; this is central to the product outcome, not optional polish. |

**Key assumptions**
- **Assumption**: Recruiters and freelance clients will actually click through to a standalone portfolio when evaluating the owner. | **Risk if wrong**: The site becomes a low-leverage artifact with little impact on trust or contact rates. | **Risk level**: High
- **Assumption**: Minimal content is sufficient for strangers to form trust quickly. | **Risk if wrong**: Visitors may see the site as too thin or generic and leave without contacting. | **Risk level**: High
- **Assumption**: `mailto` or a no-backend contact flow is reliable enough at the point of conversion. | **Risk if wrong**: Interested visitors may fail or hesitate to reach out, breaking the primary business outcome. | **Risk level**: High

**Open questions**
- What exact message should a visitor understand within the first 10 seconds?
- Which 3 to 5 projects are strong and public enough to use as proof of work?
- What should be the primary public contact method: `mailto`, visible email, LinkedIn, or a combination?
- Is one shared positioning statement sufficient for both recruiters and freelance leads, or is audience-specific messaging needed later?