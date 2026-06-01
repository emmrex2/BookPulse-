/**
 * Domain types for BookPulse AI. These mirror the Supabase schema in the
 * blueprint (profiles, books, scans, scan_runs).
 */

export type Plan = "free" | "pro" | "publisher";

export interface Profile {
  id: string;
  name: string | null;
  email: string;
  plan: Plan;
  created_at: string;
}

export interface Book {
  id: string;
  user_id: string;
  title: string;
  genre: string | null;
  description: string | null;
  author: string | null;
  amazon_url: string | null;
  created_at: string;
}

export type ScanStatus = "pending" | "running" | "complete" | "failed";

export type RecallStatus = "unknown" | "known" | "recommended";

export interface Scan {
  id: string;
  book_id: string;
  status: ScanStatus;
  visibility_score: number | null;
  ai_frequency: Record<string, number> | null;
  recall_status: RecallStatus | null;
  keywords: string[] | null;
  citation_gap: CitationGapItem[] | null;
  report: unknown | null;
  created_at: string;
}

export type Engine = "perplexity" | "openai_search" | "gemini" | "baseline";

export type PromptBucket = "discovery" | "comp" | "trope" | "direct";

export interface ScanRun {
  id: string;
  scan_id: string;
  engine: Engine;
  prompt: string;
  prompt_bucket: PromptBucket;
  run_index: number;
  appeared: boolean | null;
  response_text: string | null;
  sources_json: string[] | null;
  competitors_json: string[] | null;
  created_at: string;
}

export interface CitationGapItem {
  url: string;
  title: string;
  difficulty: "easy" | "medium" | "hard";
  competitorsAppearing: string[];
}
