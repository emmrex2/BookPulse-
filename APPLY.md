# How to apply this drop-in

This folder contains corrected, working versions of the files that were broken
or empty in your project. Apply it in this order — it's safe and reversible.

## 0. Rotate the leaked secrets first

You uploaded a `.env.local` containing your **real** OpenAI and Resend keys.
Those keys are compromised. Before anything else:

- OpenAI → https://platform.openai.com/api-keys → revoke and re-create
- Resend → https://resend.com/api-keys → revoke and re-create
- Supabase → Settings → API → reset the anon key

## 1. Delete the dead `src/` directory

Your `tsconfig.json` aliases `@/*` to the project root, so anything under
`src/` was unreachable from `@/...` imports. The shadcn components and the
`app/` directory live at the root — that's the structure we keep.

```bash
rm -rf src
```

## 2. Replace files

Copy every file in this `bookpulse-ai/` folder over the same paths in your
project. Replace, don't merge:

- `package.json` — drops the deprecated `@supabase/auth-helpers-nextjs`,
  moves `shadcn` to devDeps, adds `@supabase/ssr` and `openai`, adds
  `@hookform/resolvers` (needed by the form)
- `tsconfig.json` — ES2022 target, paths unchanged
- `next.config.ts` — adds `reactStrictMode` and image remote patterns
- `components.json` — fixes the invalid `"radix-vega"` style to `"new-york"`
  and removes the non-standard `menuColor`/`menuAccent` fields
- `app/globals.css` — removes the broken `@import "shadcn/tailwind.css"`,
  adds BookPulse brand tokens (Deep Indigo / Electric Purple / Soft Cyan)
- `app/layout.tsx` — fixes the double-font bug (Geist + Inter both writing
  `--font-sans`), real OG metadata, mounts `ThemeProvider` + `Toaster`
- `app/page.tsx` — uses brand tokens, composes Navbar/Footer, real CTAs

## 3. Add the new files

These didn't exist (or were empty):

- `components/theme-provider.tsx` — required so sonner's `useTheme()` doesn't crash
- `components/brand/Logo.tsx`
- `components/layout/Navbar.tsx`
- `components/layout/Footer.tsx`
- `components/forms/BookForm.tsx` — real form with react-hook-form + zod
- `components/dashboard/DashboardShell.tsx`
- `lib/supabase/client.ts` — browser client (uses `@supabase/ssr`)
- `lib/supabase/server.ts` — server client (`await cookies()` for Next 16)
- `lib/supabase/middleware.ts` — session refresh helper
- `middleware.ts` — root middleware, gates `/dashboard` and `/account`
- `lib/ai/openai.ts` — OpenAI client + 4-bucket prompt builder
- `types/index.ts` — domain types
- `app/api/scan/route.ts` — enqueues a scan (does **not** run it inline)
- `.env.local.example` — placeholders

## 4. Reinstall

```bash
rm -rf node_modules package-lock.json
npm install
```

The new `package-lock.json` will reflect the corrected deps.

## 5. Set up env

```bash
cp .env.local.example .env.local
# fill in: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY,
# OPENAI_API_KEY, RESEND_API_KEY
```

## 6. Run

```bash
npm run dev
```

You should land on a real BookPulse landing page on http://localhost:3000.

## What's still TODO (not blocking the dev server)

- The actual scan worker (background job that picks up `status='pending'`
  scans, runs the engines, writes evidence to `scan_runs`, flips status).
- Routes: `/login`, `/signup`, `/dashboard`, `/dashboard/analyze`,
  `/pricing`, `/blog`, `/account`, and the SEO pages.
- The Supabase migration SQL — paste `0001_init.sql` from your blueprint
  into the Supabase SQL editor and run it.

Tell me which of those to build next.
