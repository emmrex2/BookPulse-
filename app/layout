import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BookPulse AI — Know if AI recommends your book",
    template: "%s · BookPulse AI",
  },
  description:
    "AI visibility intelligence for authors and publishers. See how ChatGPT, Gemini, and Perplexity recommend your book — and exactly what to do about it.",
  authors: [{ name: "Emmrex" }],
  openGraph: {
    title: "BookPulse AI",
    description:
      "Know if AI recommends your book before readers do. Evidence-backed AI visibility reports for authors.",
    siteName: "BookPulse AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BookPulse AI",
    description:
      "Know if AI recommends your book before readers do.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(inter.variable, display.variable)}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
