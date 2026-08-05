"use client";

import { useEffect, useState } from "react";
import { menu } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function CategoryNav() {
  const [active, setActive] = useState(menu[0]?.id);

  useEffect(() => {
    const sections = menu
      .map((category) => document.getElementById(category.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-20 z-30 border-b border-ink/10 bg-background/95 backdrop-blur-sm sm:top-24">
      <nav
        aria-label="Speisekarten-Kategorien"
        className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-6 py-4 sm:px-8 sm:py-5 lg:px-12"
      >
        {menu.map((category) => (
          <a
            key={category.id}
            href={`#${category.id}`}
            aria-current={active === category.id ? "true" : undefined}
            className={cn(
              "shrink-0 rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors",
              active === category.id
                ? "bg-primary text-cream"
                : "text-ink-soft hover:bg-surface hover:text-ink"
            )}
          >
            {category.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
