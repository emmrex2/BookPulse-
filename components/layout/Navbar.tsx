import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/how-ai-recommends-books", label: "How it works" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Logo />
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
<div className="flex items-center gap-2">

  <Link href="/login">
    <Button
      variant="ghost"
      size="sm"
      className="hidden sm:inline-flex"
    >
      Sign in
    </Button>
  </Link>

  <Link href="/signup">
    <Button
      size="sm"
      className="bg-brand-gradient text-primary-foreground"
    >
      Start free
    </Button>
  </Link>

</div>
        </div>
      </div>
    </header>
  );
}
