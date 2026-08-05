"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "done">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.includes("@")) return;
    setStatus("done");
    setEmail("");
  };

  if (status === "done") {
    return (
      <p role="status" className="text-sm text-accent">
        Danke! In einer produktiven Version würden Sie nun eine Bestätigung
        erhalten. (Demo-Formular ohne echten Versand)
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm items-center gap-2">
      <label htmlFor="newsletter-email" className="sr-only">
        E-Mail-Adresse für den Newsletter
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Ihre E-Mail-Adresse"
        className="w-full rounded-full border border-cream/25 bg-transparent px-4 py-2.5 text-sm text-cream placeholder:text-cream/40 focus-visible:border-accent"
      />
      <button
        type="submit"
        className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent text-secondary transition-transform hover:scale-105 active:scale-95"
        aria-label="Newsletter abonnieren"
      >
        <Send className="size-4" aria-hidden="true" />
      </button>
    </form>
  );
}
