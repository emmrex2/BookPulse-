import Link from "next/link";
import { Logo } from "@/components/brand/Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-background/60">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            AI visibility intelligence for authors. Know if AI recommends your book — and exactly
            what to do about it.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Product</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link className="hover:text-foreground" href="/pricing">Pricing</Link></li>
            <li><Link className="hover:text-foreground" href="/ai-book-visibility-checker">Visibility checker</Link></li>
            <li><Link className="hover:text-foreground" href="/chatgpt-book-ranking">ChatGPT ranking</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Company</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link className="hover:text-foreground" href="/blog">Blog</Link></li>
            <li><Link className="hover:text-foreground" href="/contact">Contact</Link></li>
            <li><Link className="hover:text-foreground" href="/account">Account</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-muted-foreground sm:flex-row">
          <p>© {year} BookPulse AI · by Emmrex</p>
          <p>Built for authors who want to be found.</p>
        </div>
      </div>
    </footer>
  );
}
