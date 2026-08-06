"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { X, Phone, Mail } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { localizedHref } from "@/lib/i18n";
import { useLocale } from "@/lib/locale-context";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";

export default function MobileMenu({ onClose }: { onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const { locale, content } = useLocale();

  useEffect(() => {
    previouslyFocused.current = document.activeElement as HTMLElement;
    document.body.classList.add("scroll-locked");
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("scroll-locked");
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocused.current?.focus();
    };
  }, [onClose]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={content.common.mainNavLabel}
      ref={panelRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="tone-dark fixed inset-0 z-[60] flex flex-col bg-secondary"
    >
      <Container>
        <div className="flex h-20 items-center justify-between sm:h-24">
          <span className="font-display text-xl italic text-cream">
            {content.restaurant.name}
          </span>
          <div className="flex items-center gap-3">
            <LanguageSwitcher tone="light" />
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="flex size-11 items-center justify-center rounded-full border border-cream/40 text-cream transition-colors hover:border-accent hover:text-accent"
              aria-label={content.common.menuCloseLabel}
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </Container>

      <nav
        className="flex flex-1 flex-col justify-center gap-2 px-8"
        aria-label={content.common.mobileNavLabel}
      >
        {content.navigation.map((item, index) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 * index }}
          >
            <Link
              href={localizedHref(locale, item.href)}
              className="block py-3 font-display text-4xl italic text-cream transition-colors hover:text-accent sm:text-5xl"
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
      </nav>

      <Container className="pb-10">
        <div className="flex flex-col gap-6 border-t border-cream/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 text-sm text-cream/70">
            <a href={content.restaurant.phone.href} className="inline-flex items-center gap-2 hover:text-accent">
              <Phone className="size-4" aria-hidden="true" />
              {content.restaurant.phone.display}
            </a>
            <a href={content.restaurant.email.href} className="inline-flex items-center gap-2 hover:text-accent">
              <Mail className="size-4" aria-hidden="true" />
              {content.restaurant.email.display}
            </a>
          </div>
          <Button href={localizedHref(locale, "/reservierung")} variant="primary">
            {content.common.reserveCta}
          </Button>
        </div>
      </Container>
    </motion.div>
  );
}
