import { cn } from "@/lib/utils";
import Reveal from "@/components/motion/Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  number,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  number?: string;
}) {
  return (
    <Reveal>
      <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
        {(eyebrow || number) && (
          <div
            className={cn(
              "mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em]",
              tone === "dark" ? "text-primary" : "text-accent",
              align === "center" && "justify-center"
            )}
          >
            {number && <span className="font-display text-base italic">{number}</span>}
            {eyebrow && <span>{eyebrow}</span>}
          </div>
        )}
        <h2
          className={cn(
            "font-display text-balance text-4xl leading-[1.1] sm:text-5xl",
            tone === "dark" ? "text-ink" : "text-cream"
          )}
        >
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              "mt-5 text-base leading-relaxed sm:text-lg",
              tone === "dark" ? "text-ink-soft" : "text-cream/80"
            )}
          >
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}
