"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryImage } from "@/components/gallery/GalleryGrid";
import { useLocale } from "@/lib/locale-context";

export default function Lightbox({
  images,
  index,
  onClose,
  onNavigate,
}: {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const current = images[index];
  const { content } = useLocale();

  useEffect(() => {
    previouslyFocused.current = document.activeElement as HTMLElement;
    document.body.classList.add("scroll-locked");
    closeButtonRef.current?.focus();

    return () => {
      document.body.classList.remove("scroll-locked");
      previouslyFocused.current?.focus();
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowRight") {
        onNavigate((index + 1) % images.length);
      } else if (event.key === "ArrowLeft") {
        onNavigate((index - 1 + images.length) % images.length);
      } else if (event.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          "button:not([disabled])"
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
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [index, images.length, onClose, onNavigate]);

  return (
    <motion.div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={current.alt}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="tone-dark fixed inset-0 z-[70] flex items-center justify-center bg-ink/95 p-4 sm:p-10"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full border border-cream/30 text-cream transition-colors hover:border-accent hover:text-accent sm:right-8 sm:top-8"
        aria-label={content.common.closeImageLabel}
      >
        <X className="size-5" aria-hidden="true" />
      </button>

      <button
        type="button"
        onClick={() => onNavigate((index - 1 + images.length) % images.length)}
        className="absolute left-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-cream/30 text-cream transition-colors hover:border-accent hover:text-accent sm:left-8"
        aria-label={content.common.previousImageLabel}
      >
        <ChevronLeft className="size-5" aria-hidden="true" />
      </button>

      <div className="relative h-[70vh] w-full max-w-4xl">
        <Image
          src={current.src}
          alt={current.alt}
          fill
          sizes="90vw"
          className="object-contain"
          priority
        />
      </div>

      <button
        type="button"
        onClick={() => onNavigate((index + 1) % images.length)}
        className="absolute right-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-cream/30 text-cream transition-colors hover:border-accent hover:text-accent sm:right-8"
        aria-label={content.common.nextImageLabel}
      >
        <ChevronRight className="size-5" aria-hidden="true" />
      </button>

      <p className="absolute bottom-6 left-1/2 max-w-lg -translate-x-1/2 px-4 text-center text-sm text-cream/70">
        {current.alt}
      </p>
    </motion.div>
  );
}
