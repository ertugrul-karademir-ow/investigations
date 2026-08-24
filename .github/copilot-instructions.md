# RTLS Fabric teaching workspace

Use the global `teach` skill for teaching requests in this repository.

Whenever that skill adds a lesson:

- Update `index.html` in the same change with the next numbered lesson card.
- Add any new quick-reference document to the reference table in `index.html`.
- Keep all published dependencies within `index.html`, `assets/`, `lessons/`, and `reference/`.
- Use canonical GitHub URLs for source files in sibling repositories; do not publish local `../../rtls-*` links.
- Most of the repositories have `master` as their main branch, not `main` except for `rtls-one-retail`.
- Verify all relative links and asset references resolve in the GitHub Pages site.

Do not create a repository-local skill named `teach`; the global skill owns the teaching workflow.
