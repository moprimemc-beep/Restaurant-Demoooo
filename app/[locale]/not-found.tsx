"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { localizedHref } from "@/lib/i18n";
import { useLocale } from "@/lib/locale-context";

export default function NotFound() {
  const { locale, content } = useLocale();
  const { notFound } = content;

  return (
    <section className="tone-dark relative flex min-h-[85svh] items-center overflow-hidden bg-secondary text-cream">
      <Image
        src="/images/interior-bar-oven.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,16,10,0.55) 0%, rgba(15,12,8,0.9) 100%)",
        }}
        aria-hidden="true"
      />
      <Container className="relative z-10 text-center">
        <span className="font-display text-2xl italic text-accent">{notFound.eyebrow}</span>
        <h1 className="mt-4 text-balance font-display text-4xl italic leading-tight sm:text-5xl">
          {notFound.title}
        </h1>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-cream/80">
          {notFound.description}
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={localizedHref(locale, "/")} variant="primary">
            {notFound.ctaHome}
          </Button>
          <Button href={localizedHref(locale, "/speisekarte")} variant="ghost">
            {notFound.ctaMenu}
          </Button>
        </div>
      </Container>
    </section>
  );
}
