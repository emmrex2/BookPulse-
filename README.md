# BookPulse AI

> Know if AI recommends your book before readers do.
> AI visibility intelligence for authors — by Emmrex.

## Stack

- Next.js 16 (App Router, async cookies/params)
- React 19 + Tailwind v4 + shadcn/ui (new-york, `radix-ui` meta package)
- Supabase (Postgres + Auth) via `@supabase/ssr`
- OpenAI for the report engine (Perplexity / Gemini runners come later)
- Resend for transactional email

## Quickstart

```bash
# 1. install
npm install

# 2. configure env — copy the example and fill in your real keys
cp .env.local.example .env.local
# edit .env.local: set NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY,
# OPENAI_API_KEY (server), RESEND_API_KEY (server)

# 3. run
npm run dev
```

Open http://localhost:3000.

## Supabase setup

1. Create a project at https://supabase.com.
2. From Project Settings → API copy the **Project URL** and the **anon public** key into `.env.local`.
3. Run the migration from `supabase/migrations/0001_init.sql` in your blueprint
   (Supabase SQL editor → paste → run). It creates `profiles`, `books`, `scans`,
   `scan_runs`, enables Row-Level Security, and adds the auto-profile trigger.

## Security

- `.env.local` is gitignored. **Never** commit real keys. If you accidentally
  leak one (e.g. by uploading a zip), rotate it immediately at the provider.
- The `anon` key is safe to ship to the browser **only** if RLS is on for
  every table. Verify this in the Supabase dashboard before going live.

## Project layout

```
app/                    Next.js App Router pages + API routes
  api/scan/route.ts     Enqueues a scan (long jobs run in a background worker)
components/
  brand/                Logo and brand-specific bits
  layout/               Navbar, Footer
  forms/                BookForm (react-hook-form + zod)
  dashboard/            DashboardShell
  ui/                   shadcn components
lib/
  utils.ts              cn() helper
  supabase/             client.ts (browser) · server.ts (RSC) · middleware.ts
  ai/openai.ts          OpenAI client + 4-bucket prompt builder
middleware.ts           Refreshes Supabase session, gates /dashboard + /account
types/index.ts          Domain types (Profile, Book, Scan, ScanRun, …)
```
