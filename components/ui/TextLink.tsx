import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function TextLink({
  href,
  children,
  className,
  tone = "dark",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide transition-colors",
        tone === "dark" ? "text-ink hover:text-primary" : "text-cream hover:text-accent",
        className
      )}
    >
      <span className="border-b border-current/40 pb-0.5 group-hover:border-current">
        {children}
      </span>
      <ArrowRight
        className="size-4 transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden="true"
      />
    </Link>
  );
}
