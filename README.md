# Little Lemon, React capstone project
Capstone project of the Meta Front-End Developer certificate on Coursera, taken by Thomas Scheiber in 2023 and 2024.

A single-page React site for a Mediterranean restaurant, written in TypeScript and built with Vite. It has a home page, a table booking form and a confirmation page. Nothing is sent to a server, because the repository has no backend.

## Stack

- React 19.3 and React Router 7.18 (`react-router-dom`), with `react-router-hash-link` for `#about` and `#menu` links
- styled-components 6.6 for styles, with a theme in `src/styles/theme.ts`
- Formik 2.4 for form state and Yup 1.7 for validation
- TypeScript 6.0 in strict mode, Vite 8.3 and `@vitejs/plugin-react` 6.3
- Jest 30.5 with ts-jest and jsdom for tests, ESLint 10.14 for linting

## Pages

- `/` (Home) has a hero with a "Reserve a Table" button that opens `/bookings`, three specials with prices (Greek Salad 12.99 €, Bruschetta 7.99 €, Lemon Dessert 6.99 €), four static customer testimonials and an About section (`#about`).
- `/bookings` has the table booking form described below.
- `/confirmation` shows the last booking saved in `localStorage`. Without a saved booking, it shows only the thank-you text.

The header slides out of view when the page scrolls down and returns when it scrolls up. At 768px or narrower, the desktop links are hidden and a menu button opens a separate menu.

The "Order a delivery" and "Online Menu" buttons have no click handler. The "Order Online" and "Login" links point to `#` or `/#` and go nowhere.

## Table booking form

The form uses Formik for state and Yup for validation. Errors appear under each field once the field has been touched, and the browser's own validation is turned off.

- Date: required. It defaults to today's date.
- Time: a select list filled from the chosen date. The value must be one of the offered times.
- Number of guests: a number from 1 to 10. Decimal values are not rejected.
- Occasion: one of `birthday`, `engagement` or `anniversary`.

The offered times come from `fetchAPI` in `src/utils/temp.ts`, which does not check any availability. It seeds a random generator with the day of the month, so the same day number gives the same times in every month. For each hour from 17:00 to 23:00, the generator offers the full hour and the half hour, each with a 50% chance.

On submit, `submitAPI` in the same file returns `true` without a network request. The form then saves the values under the `Bookings` key in `localStorage`, replacing any earlier booking in that browser, and navigates to `/confirmation`.

## Run it locally

The lockfile is `bun.lock`, so use Bun.

```bash
bun install
bun run dev      # Vite dev server on port 3000
bun run build    # tsc, then vite build into dist/
bun run start    # vite preview on $PORT (default 3000), serves dist/ after a build
bun run test     # Jest, 4 tests in src/components/BookingForm
bun run lint     # ESLint with the flat config in eslint.config.mjs
```

The only environment variable is `PORT`, read by `bun run start`. The application code reads none. The repository has no deployment configuration. `bun run build` writes a static site to `dist/`.

## Project layout

- `src/components/` has one folder per component, each with its `styles` file.
- `src/pages/` has the three page components, and `src/routes.tsx` maps them to paths.
- `src/utils/temp.ts` holds the time generator, the submit stub and the reducer for the time list.
- `src/assets/` holds the photos and SVG icons.

## Limits

- There is no backend, so bookings never leave the browser, and the restaurant's real availability is not checked.
- Each booking overwrites the previous one in `localStorage`.
- The site has no authentication, no order flow and no menu page.
