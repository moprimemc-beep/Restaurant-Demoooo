"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localizedHref, stripLocale } from "@/lib/i18n";
import { useLocale } from "@/lib/locale-context";
import { cn } from "@/lib/utils";

const labels: Record<string, string> = { en: "EN", de: "DE" };

export default function LanguageSwitcher({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const pathname = usePathname();
  const { locale, content } = useLocale();
  const restPath = stripLocale(pathname);

  return (
    <div
      role="group"
      aria-label={content.common.languageLabel}
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full border p-0.5 text-xs font-semibold uppercase tracking-wide",
        tone === "dark" ? "border-ink/20" : "border-cream/40",
        className
      )}
    >
      {locales.map((loc) => {
        const active = loc === locale;
        return (
          <Link
            key={loc}
            href={localizedHref(loc, restPath)}
            aria-current={active ? "true" : undefined}
            className={cn(
              "rounded-full px-2.5 py-1 transition-colors",
              active
                ? "bg-primary text-cream"
                : tone === "dark"
                  ? "text-ink-soft hover:text-ink"
                  : "text-cream/70 hover:text-cream"
            )}
          >
            {labels[loc]}
          </Link>
        );
      })}
    </div>
  );
}
