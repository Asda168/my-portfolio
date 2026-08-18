# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

This is a Laravel 13 + Inertia.js v3 + Vue 3 (TypeScript) application, based on the official `laravel/vue-starter-kit`, with authentication provided by **WorkOS AuthKit** (`laravel/workos`) instead of Laravel's built-in password auth. There is no local registration/login form — `login` redirects the user to WorkOS's hosted auth UI, and `authenticate` completes the flow.

## Commands

### Environment setup
- `composer setup` — full first-time bootstrap: installs PHP deps, copies `.env`, generates `APP_KEY`, runs migrations, installs npm deps, builds assets.
- Local dev uses SQLite by default (`DB_CONNECTION=sqlite`); `database/database.sqlite` must exist before migrating (`php -r "touch('database/database.sqlite');"` if missing).
- Requires PHP ^8.3 and Node 22 (CI pins Node 22; the `vite`/`vue-tsc` toolchain requires a recent Node — old Node versions will fail with cryptic `vite`-not-found errors).

### Running the app
- `composer dev` (or `php artisan dev`) — runs the full local dev stack (HTTP server, queue listener, Vite dev server) concurrently in one command. This is the normal way to run the app locally.
- `npm run dev` — Vite dev server only (HMR for Vue/CSS).
- `php artisan serve` — Laravel HTTP server only.

### Linting / formatting / type-checking
- `composer lint` — fix PHP style with Pint (`pint --parallel`).
- `composer lint:check` — check PHP style without fixing (used in CI).
- `composer types:check` — PHPStan/Larastan static analysis (level 7, config in `phpstan.neon`).
- `npm run lint` / `npm run lint:check` — ESLint (fix / check-only).
- `npm run format` / `npm run format:check` — Prettier over `resources/`.
- `npm run types:check` — Vue/TS type-checking via `vue-tsc --noEmit`.

### Tests
- `composer test` — clears config, runs `lint:check`, `types:check`, then `php artisan test` (full PHP test suite, PHPUnit).
- `php artisan test --filter=TestName` — run a single test (or `vendor/bin/phpunit --filter=TestName`).
- `php artisan test tests/Feature/DashboardTest.php` — run a single test file.
- `composer ci:check` — what CI actually runs: `npm run lint:check`, `npm run format:check`, `npm run types:check`, then `composer test`. Run this before considering a change done.
- Tests use an in-memory SQLite DB (`phpunit.xml` sets `DB_DATABASE=:memory:`), array session/cache, and sync queue — no local DB setup needed to run tests.

### Building
- `npm run build` — production frontend build.
- `npm run build:ssr` — production build + SSR bundle.

## Architecture

### Auth is WorkOS-driven, not Laravel's default
`routes/auth.php` has no register/password-reset routes — `login` builds a WorkOS-hosted redirect via `AuthKitLoginRequest`, and `authenticate` completes the WorkOS callback via `AuthKitAuthenticationRequest` before redirecting to `dashboard`. Authenticated routes are protected by **both** `auth` and `Laravel\WorkOS\Http\Middleware\ValidateSessionWithWorkOS` (see `routes/web.php` and `routes/settings.php`) — the WorkOS middleware re-validates the session against WorkOS, so it must be paired with `auth` on any new protected route group. `WORKOS_CLIENT_ID`, `WORKOS_API_KEY`, and `WORKOS_REDIRECT_URL` in `.env` are required for auth to work at all.

### Route → page wiring
Routes that just render an Inertia page with no controller logic use the `Route::inertia('path', 'PageComponent')` shorthand (see `web.php`, `settings.php`) rather than a controller method returning `Inertia::render(...)`. Only add a controller (see `app/Http/Controllers/Settings/ProfileController.php`) when there's actual request handling to do.

### Wayfinder: generated, type-safe routes/actions
`resources/js/actions/`, `resources/js/routes/`, and `resources/js/wayfinder/` are **generated** by `@laravel/vite-plugin-wayfinder` (configured in `vite.config.ts`) from the PHP routes/controllers, regenerate automatically while Vite is running, and are gitignored (not committed). Do not hand-edit files under these directories — change the PHP route/controller instead and let Wayfinder regenerate (run `npm run dev` or `npm run build` if they're missing/stale). Frontend code imports from these generated modules to call routes/actions with full type safety instead of hardcoding URL strings.

### Inertia page resolution and layouts
`resources/js/app.ts` wires up `createInertiaApp` with a custom `layout` resolver based on page name:
- `Welcome` → no layout (public landing page).
- `settings/*` → `[AppLayout, SettingsLayout]` (nested: app chrome, then the settings sidebar/tabs).
- everything else → `AppLayout` only.

`AppLayout` (`resources/js/layouts/AppLayout.vue`) wraps `AppSidebarLayout`. When adding a new page under `resources/js/pages/settings/`, it will automatically pick up the nested settings layout by naming convention — no per-page layout wiring needed.

### Shared Inertia data
`app/Http/Middleware/HandleInertiaRequests::share()` puts `name` (app name), `auth.user`, and `sidebarOpen` (derived from the `sidebar_state` cookie) on every Inertia response. `sidebar_state` and `appearance` cookies are excluded from cookie encryption in `bootstrap/app.php` (`encryptCookies(except: [...])`) since they're read/written client-side. Dark/light theme avoids a flash of the wrong theme via a three-layer setup: `HandleAppearance` middleware shares the `appearance` cookie into the Blade view, `resources/views/app.blade.php` uses it to set the initial `dark` class (and an inline `<script>` resolves `system` preference) before any JS loads, and `resources/js/composables/useAppearance.ts` (`initializeTheme()`, called from `app.ts`) keeps `localStorage`, the `appearance` cookie, and the `dark` class in sync after mount.

### UI components
Components under `resources/js/components/ui` follow shadcn-vue (`components.json`: style `new-york-v4`, base color `neutral`, icon library `lucide` via `@lucide/vue`). Tailwind v4 is used with no `tailwind.config.js` — configuration lives in CSS (`resources/css/app.css`) per Tailwind v4's CSS-first config model. Path aliases (`@/components`, `@/composables`, `@/lib`, `@/ui`) are defined in `components.json` and mirrored in `tsconfig.json`.

### Testing conventions
Feature tests live in `tests/Feature` (e.g. `DashboardTest.php`, `Settings/`), unit tests in `tests/Unit`. `phpstan.neon` analyses `app/`, `bootstrap/app.php`, `config/`, `database/`, `routes/` at level 7 — new code in those paths should stay clean under Larastan.
