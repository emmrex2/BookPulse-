"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const bookSchema = z.object({
  title: z.string().min(1, "Required").max(200),
  author: z.string().max(200).optional(),
  genre: z.string().min(1, "Required").max(80),
  description: z.string().min(20, "At least 20 characters").max(2000),
  amazonUrl: z.string().url("Must be a valid URL").or(z.literal("")).optional(),
});

export type BookFormValues = z.infer<typeof bookSchema>;

export function BookForm() {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookFormValues>({
    resolver: zodResolver(bookSchema),
    defaultValues: { title: "", author: "", genre: "", description: "", amazonUrl: "" },
  });

  async function onSubmit(values: BookFormValues) {
    setSubmitting(true);
    try {
      const res = await fetch("/api/scan", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error(`Scan failed (${res.status})`);
      toast.success("Scan started — your report will be ready in ~90 seconds.");
      reset();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <Field label="Book title" error={errors.title?.message}>
        <Input placeholder="The Lantern Keeper" {...register("title")} />
      </Field>

      <Field label="Author name (optional)" error={errors.author?.message}>
        <Input placeholder="Mira Lan" {...register("author")} />
      </Field>

      <Field label="Genre" error={errors.genre?.message}>
        <Input placeholder="Cozy Fantasy" {...register("genre")} />
      </Field>

      <Field label="Book description" error={errors.description?.message}>
        <textarea
          rows={5}
          placeholder="A short blurb — what a reader would see on the back cover."
          {...register("description")}
          className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        />
      </Field>

      <Field label="Amazon URL (optional)" error={errors.amazonUrl?.message}>
        <Input placeholder="https://amazon.com/dp/..." {...register("amazonUrl")} />
      </Field>

      <Button
        type="submit"
        size="lg"
        disabled={submitting}
        className="w-full bg-brand-gradient text-primary-foreground shadow-lg shadow-[var(--brand-accent)]/20"
      >
        {submitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Scanning AI recommendation systems…
          </>
        ) : (
          <>
            <Sparkles className="mr-2 h-4 w-4" /> Analyze with AI
          </>
        )}
      </Button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label className="block text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      {children}
      {error ? <p className="text-xs text-destructive">{error}</p> : null}
    </div>
  );
}
