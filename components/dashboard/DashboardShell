import Link from "next/link";
import { LayoutDashboard, Sparkles, FileText, BookOpen, CreditCard, Settings } from "lucide-react";
import { Logo } from "@/components/brand/Logo";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/analyze", label: "Analyze", icon: Sparkles },
  { href: "/dashboard/reports", label: "Reports", icon: FileText },
  { href: "/dashboard/books", label: "Books", icon: BookOpen },
  { href: "/dashboard/billing", label: "Billing", icon: CreditCard },
  { href: "/account", label: "Settings", icon: Settings },
];

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen lg:grid-cols-[260px_1fr]">
      <aside className="hidden border-r border-border bg-sidebar/60 backdrop-blur-xl lg:flex lg:flex-col">
        <div className="px-5 py-5">
          <Logo />
        </div>
        <nav className="flex-1 px-3 py-2">
          {navItems.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="mb-1 flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-sidebar-foreground/70 transition-colors hover:bg-white/5 hover:text-sidebar-foreground"
            >
              <n.icon className="h-4 w-4" />
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="m-3 rounded-xl border border-border bg-brand-gradient/15 p-4">
          <p className="text-xs uppercase tracking-widest text-[var(--brand-accent)]">Upgrade</p>
          <p className="mt-1 text-sm">Go Pro for unlimited scans</p>
          <Link
            href="/pricing"
            className="mt-3 inline-flex text-xs font-medium underline-offset-4 hover:underline"
          >
            See plans →
          </Link>
        </div>
      </aside>

      <div className="flex min-w-0 flex-col">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-border bg-background/60 px-4 backdrop-blur-xl sm:px-6">
          <div className="flex-1" />
          <div className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-full bg-brand-gradient text-xs font-semibold">
              U
            </div>
          </div>
        </header>
        <div className="flex-1 p-4 sm:p-6 lg:p-8">{children}</div>
      </div>
    </div>
  );
}
