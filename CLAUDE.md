# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Application Overview

This is a Laravel 12 application using Inertia.js v2 with React 19 and Filament v4 for admin panels. The application follows Laravel's modern streamlined structure (introduced in Laravel 11) and uses SQLite as the database.

### Tech Stack
- **Backend**: Laravel 12, PHP 8.3
- **Frontend**: React 19, Inertia.js v2, TypeScript
- **Styling**: Tailwind CSS v4
- **Admin Panel**: Filament v4 (Livewire-based)
- **Routing**: Laravel Wayfinder (type-safe route generation)
- **Testing**: Pest v4
- **Code Quality**: Laravel Pint (formatting), ESLint, Prettier

## Development Commands

### Starting Development Server
```bash
composer run dev
```
This runs a concurrent setup with:
- Laravel development server (`php artisan serve`)
- Queue worker (`php artisan queue:listen`)
- Log viewer (`php artisan pail`)
- Vite dev server (`npm run dev`)

### Initial Setup
```bash
composer run setup
```
Runs the complete setup: installs dependencies, generates app key, runs migrations, and builds assets.

### Frontend Development
```bash
npm run dev          # Start Vite dev server
npm run build        # Build production assets
npm run build:ssr    # Build with SSR support
```

### SSR Development
```bash
composer run dev:ssr
```
Runs the same concurrent setup but with Inertia SSR instead of Vite dev server.

### Code Quality
```bash
vendor/bin/pint --dirty    # Format PHP code (run before committing)
npm run lint               # Lint and fix JavaScript/TypeScript
npm run format             # Format with Prettier
npm run format:check       # Check formatting without changes
npm run types              # Type check TypeScript
```

### Testing
```bash
composer run test                           # Run all tests
php artisan test                            # Run all tests
php artisan test tests/Feature/ExampleTest.php    # Run specific file
php artisan test --filter=testName         # Run specific test
```

For browser tests (Pest v4):
- Browser tests live in `tests/Browser/`
- Use `visit()` to interact with real browsers

## Architecture & Structure

### Laravel 12 Modern Structure
- **No `app/Http/Middleware/`**: Middleware is registered in `bootstrap/app.php`
- **No `app/Console/Kernel.php`**: Console commands auto-register from `app/Console/Commands/`
- **Configuration**: `bootstrap/app.php` for routing, middleware, exceptions
- **Service Providers**: `bootstrap/providers.php` for application-specific providers

### Frontend Architecture
- **Inertia Pages**: `resources/js/pages/` - All Inertia components go here
- **Page Resolution**: Uses glob pattern `./pages/**/*.tsx` with auto-discovery
- **Type Safety**: TypeScript with strict mode enabled
- **Path Alias**: `@/*` maps to `resources/js/*`
- **Styling**: Tailwind v4 uses `@import "tailwindcss"` (not `@tailwind` directives)

### Wayfinder Integration
Wayfinder generates TypeScript functions from Laravel routes/controllers:
- **Generated Actions**: Import from `@/actions/App/Http/Controllers/...`
- **Named Routes**: Import from `@/routes/...`
- Auto-regenerates via Vite plugin (configured with `formVariants: true`)
- Use with Inertia forms: `form.submit(store())`

### Filament Admin Panel
- **Panel Path**: `/admin` (configured in `app/Providers/Filament/AdminPanelProvider.php`)
- **Panel ID**: `admin` (default panel)
- **Primary Color**: Amber
- **Auto-discovery**: Resources, Pages, and Widgets are auto-discovered from their respective directories
- **Expected Directories**:
  - `app/Filament/Resources/` - CRUD resources
  - `app/Filament/Pages/` - Custom pages
  - `app/Filament/Widgets/` - Dashboard widgets

### Database
- **Driver**: SQLite (`database/database.sqlite`)
- **Migrations**: Standard Laravel migrations in `database/migrations/`
- **Default Tables**: Users, cache, jobs (sessions stored in database)

## Key Conventions

### React/TypeScript
- Use functional components with TypeScript
- Pages receive props typed from Laravel backend
- Use Inertia's `useForm` for form handling
- Use `<Link>` from `@inertiajs/react` for navigation

### Routes
- Web routes in `routes/web.php` use `Inertia::render()`
- Use named routes (e.g., `->name('home')`)
- Wayfinder automatically generates TypeScript types for controllers

### Code Style
- **PHP**: Laravel Pint with project config - always run `vendor/bin/pint --dirty` before committing
- **TypeScript/React**: ESLint + Prettier configured with React 19 presets
- **Import Organization**: Prettier plugin handles import sorting

## Important Notes

### Vite Manifest Errors
If you see "Unable to locate file in Vite manifest" errors, the user needs to run:
- `npm run dev` (for development with hot reload)
- `npm run build` (to build assets)
- `composer run dev` (to start full development environment)

### Frontend Changes Not Reflecting
Ask the user if they have `npm run dev` or `composer run dev` running.

### Wayfinder Updates
After adding/modifying routes or controllers, Wayfinder auto-regenerates types via the Vite plugin. No manual command needed unless the Vite plugin isn't running.

### Testing Strategy
- Most tests should be Feature tests (not Unit tests)
- Use `php artisan make:test --pest {name}` for feature tests
- Add `--unit` flag only for unit tests
- Use model factories for test data setup
- For Filament: Use `livewire()` or `Livewire::test()` for testing resources/pages

### Laravel Boost MCP
This project has Laravel Boost MCP tools available:
- `search-docs` - Search version-specific documentation for all Laravel ecosystem packages
- `tinker` - Execute PHP code in Laravel context
- `database-query` - Run read-only SQL queries
- `browser-logs` - Read browser console logs/errors
- `list-artisan-commands` - List all available Artisan commands
- Always use `search-docs` before implementing unfamiliar features
