# Discover Kashmir – website prototype (Part 1)

Student project for *Internet Technologies – Client Side*, Czech University of Life Sciences Prague.
Authors: Mahesh Kumar, Krunal Pandya, Shrey.

A five-page informational website about Neelum Valley and nearby areas of Pakistan-administered Kashmir.
It is an educational prototype: there is no backend, and no bookings, route calculation, live data or message
submission. It is not an official tourism or safety advisory.

## Pages
| Page | File |
|---|---|
| Home | `index.html` |
| Destinations (search and category filters) | `destinations.html` |
| Culture & Heritage | `culture.html` |
| Adventure & Activities | `adventure.html` |
| Plan Your Trip (routes, seasons, accommodation, safety, Contact & Support, sources) | `plan.html` |

Contact & Support is a section of Plan Your Trip, not a separate page.

## Files
- `css/style.css` – shared stylesheet; breakpoints at 900 px (tablet) and 700 px (mobile). System fonts only.
- `js/main.js` – mobile menu and destination search/filter. Plain JavaScript, no libraries.
- `assets/` – SVG illustrations drawn for the project, and the favicon.

## Accessibility features
Semantic landmarks, skip link, one `h1` per page, descriptive alt text, visible focus, 44 px touch targets,
labelled search field, `aria-pressed` filter buttons, announced result count, `aria-expanded` menu button
(closes with Escape), reduced-motion support, and a no-JavaScript fallback for the navigation.
This is a prototype and has not been through a formal WCAG audit or screen-reader test.

## Run locally
Open `index.html` in a browser, or run `python -m http.server 8000` in this folder and visit http://localhost:8000.
