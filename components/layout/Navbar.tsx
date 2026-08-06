"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { localizedHref } from "@/lib/i18n";
import { useLocale } from "@/lib/locale-context";
import MobileMenu from "@/components/layout/MobileMenu";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);
  const { locale, content } = useLocale();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMenuOpen(false);
  }

  const solid = scrolled || menuOpen;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          solid
            ? "bg-background/95 shadow-[0_4px_30px_-10px_rgba(43,30,15,0.25)] backdrop-blur-sm"
            : "tone-dark bg-transparent"
        )}
      >
        <Container>
          <div className="flex h-20 items-center justify-between sm:h-24">
            <Link
              href={localizedHref(locale, "/")}
              className="flex items-center gap-3"
              aria-label={`${content.restaurant.name} — ${content.navigation[0].label}`}
            >
              <span
                className={cn(
                  "relative flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-full border transition-colors duration-500 sm:size-12",
                  solid ? "border-accent/60" : "border-cream/50"
                )}
              >
                <Image
                  src="/images/logo-emblem.png"
                  alt=""
                  fill
                  sizes="48px"
                  className="scale-125 object-cover"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span
                  className={cn(
                    "font-display text-lg italic transition-colors duration-500 sm:text-xl",
                    solid ? "text-ink" : "text-cream"
                  )}
                >
                  Trattoria
                </span>
                <span
                  className={cn(
                    "font-display text-xl font-semibold tracking-wide transition-colors duration-500 sm:text-2xl",
                    solid ? "text-primary" : "text-cream"
                  )}
                >
                  Bellavista
                </span>
              </span>
            </Link>

            <nav
              className="hidden items-center gap-8 lg:flex"
              aria-label={content.common.mainNavLabel}
            >
              {content.navigation.map((item) => {
                const href = localizedHref(locale, item.href);
                const isActive = pathname === href;
                return (
                  <Link
                    key={item.href}
                    href={href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "relative text-sm font-semibold uppercase tracking-wide transition-colors duration-300",
                      solid ? "text-ink hover:text-primary" : "text-cream hover:text-accent",
                      isActive && (solid ? "text-primary" : "text-accent")
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <span
                        className="absolute -bottom-1.5 left-0 h-px w-full bg-current"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden items-center gap-4 lg:flex">
              <LanguageSwitcher tone={solid ? "dark" : "light"} />
              <Button href={localizedHref(locale, "/reservierung")} variant="primary" className="px-6 py-3">
                {content.common.reserveCta}
              </Button>
            </div>

            <div className="flex items-center gap-3 lg:hidden">
              <LanguageSwitcher tone={solid ? "dark" : "light"} />
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                className={cn(
                  "flex size-11 items-center justify-center rounded-full border transition-colors duration-300",
                  solid ? "border-ink/20 text-ink" : "border-cream/50 text-cream"
                )}
                aria-label={content.common.menuOpenLabel}
                aria-expanded={menuOpen}
              >
                <Menu className="size-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
