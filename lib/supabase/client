import { createBrowserClient } from "@supabase/ssr";

/**
 * Browser-side Supabase client. Use this in Client Components.
 * Reads anon key from public env — safe to ship to the browser
 * AS LONG AS row-level security is enabled on every table.
 */
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}
