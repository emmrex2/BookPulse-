"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase/client";

export default function AnalyzePage() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit() {
    const { data, error } = await supabase
      .from("books")
      .insert([
        {
          title,
          author,
          genre,
          description,
        },
      ]);

    if (error) {
      console.error(error);
      alert("Error saving book");
      return;
    }

    alert("Book saved successfully!");
    console.log(data);
  }

  return (
    <main className="min-h-screen bg-background px-6 py-20">

      <div className="mx-auto max-w-2xl">

        <h1 className="text-4xl font-bold">
          Analyze Book
        </h1>

        <p className="mt-2 text-muted-foreground">
          Enter your book details.
        </p>

        <div className="mt-8 space-y-4">

          <input
            className="w-full rounded-xl border p-3"
            placeholder="Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            className="w-full rounded-xl border p-3"
            placeholder="Author Name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

          <input
            className="w-full rounded-xl border p-3"
            placeholder="Genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />

          <textarea
            className="w-full rounded-xl border p-3"
            placeholder="Book Description"
            rows={6}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button
            onClick={handleSubmit}
            className="rounded-xl bg-purple-600 px-6 py-3 text-white"
          >
            Analyze Book
          </button>

        </div>

      </div>

    </main>
  );
}
