"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { useLocale } from "@/lib/locale-context";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "done">("idle");
  const { content } = useLocale();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.includes("@")) return;
    setStatus("done");
    setEmail("");
  };

  if (status === "done") {
    return (
      <p role="status" className="text-sm text-accent">
        {content.footer.newsletterSuccess}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm items-center gap-2">
      <label htmlFor="newsletter-email" className="sr-only">
        {content.footer.newsletterPlaceholder}
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder={content.footer.newsletterPlaceholder}
        className="w-full rounded-full border border-cream/25 bg-transparent px-4 py-2.5 text-sm text-cream placeholder:text-cream/40 focus-visible:border-accent"
      />
      <button
        type="submit"
        className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent text-secondary transition-transform hover:scale-105 active:scale-95"
        aria-label={content.footer.newsletterButtonLabel}
      >
        <Send className="size-4" aria-hidden="true" />
      </button>
    </form>
  );
}
