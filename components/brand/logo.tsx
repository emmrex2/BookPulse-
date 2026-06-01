import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="BookPulse AI home"
      className={cn(
        "inline-flex items-center gap-2 font-display text-lg font-semibold tracking-tight",
        className,
      )}
    >
      <span
        aria-hidden
        className="grid h-7 w-7 place-items-center rounded-md bg-brand-gradient text-[10px] font-bold text-primary-foreground shadow-md shadow-[var(--brand-accent)]/30"
      >
        BP
      </span>
      <span>
        BookPulse <span className="text-[var(--brand-accent)]">AI</span>
      </span>
    </Link>
  );
}
