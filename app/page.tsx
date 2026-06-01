import Link from "next/link";
import { Sparkles, ShieldCheck, BarChart3, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative isolate overflow-hidden">
        {/* Soft brand glow background */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_-10%,var(--brand-accent)_0%,transparent_60%)] opacity-25"
        />

        {/* HERO */}
        <section className="mx-auto max-w-6xl px-6 pt-24 pb-20 text-center sm:pt-32">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-[var(--brand-accent)]" />
            Emmrex presents BookPulse AI
          </div>

          <h1 className="mx-auto mt-6 max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            <span className="text-brand-gradient">Know if AI recommends your book</span>
            <br />
            <span className="text-foreground/90">before readers do.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            BookPulse AI runs your book through ChatGPT, Gemini, and Perplexity, captures the
            evidence, and shows you exactly which third-party sources to land in to climb.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
<Link href="/signup">
  <Button
    size="lg"
    className="bg-brand-gradient text-primary-foreground shadow-lg shadow-[var(--brand-accent)]/20"
  >
    Analyze my book
  </Button>
</Link>
 <Link href="#how">
  <Button
    size="lg"
    variant="outline"
    className="bg-card/60 backdrop-blur"
  >
    See a demo report
  </Button>
</Link>
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            Free plan · 1 report / month · no credit card required
          </p>
        </section>

        {/* FEATURES */}
        <section id="how" className="mx-auto max-w-6xl px-6 pb-24">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: BarChart3,
                title: "Evidence-backed visibility score",
                body: "Every number links to the actual AI answer and the sources it cited. No black-box dashboards.",
              },
              {
                icon: ShieldCheck,
                title: "Honest, day-one results",
                body: "If AI doesn't know your book yet, we tell you — and show the realistic path to get there.",
              },
              {
                icon: Sparkles,
                title: "The citation gap",
                body: "See the exact Goodreads lists, Reddit threads, and roundups your competitors appear in — and you don't.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="glass rounded-2xl p-6 transition-colors hover:border-[var(--brand-accent)]/40"
              >
                <Icon className="h-5 w-5 text-[var(--brand-accent)]" />
                <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SOCIAL PROOF */}
        <section className="mx-auto max-w-3xl px-6 pb-28 text-center">
          <Quote className="mx-auto h-6 w-6 text-[var(--brand-accent)]" />
          <p className="mt-4 font-display text-2xl font-medium leading-snug text-foreground/90 md:text-3xl">
            "I finally understand why ChatGPT was recommending my competitors and not me. The
            citation gap report alone was worth the subscription."
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            — Sara Okonkwo, indie romance author
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
