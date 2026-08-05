"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { restaurant } from "@/lib/data";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="tone-dark relative flex min-h-[100svh] items-end overflow-hidden bg-secondary">
      <Image
        src="/images/exterior-facade-night.png"
        alt="Beleuchtete Fassade der Trattoria Bellavista am Abend mit rotem Vordach und der Aufschrift Cucina Italiana"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,16,10,0.35) 0%, rgba(17,14,9,0.35) 45%, rgba(15,12,8,0.92) 100%)",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10 pb-24 pt-40 sm:pb-28 md:pb-32">
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
            {restaurant.name} · {restaurant.city} · {restaurant.type}
          </p>
          <h1 className="mt-6 max-w-3xl text-balance font-display text-5xl italic leading-[1.05] text-cream sm:text-7xl lg:text-[5.5rem]">
            Italien genießen —<br className="hidden sm:block" /> Bissen für Bissen.
          </h1>
          <p className="mt-7 max-w-xl text-balance text-base leading-relaxed text-cream/85 sm:text-lg">
            Traditionelle italienische Küche mit frischen Zutaten, hausgemachter Pasta
            und knuspriger Steinofenpizza — mitten in {restaurant.city}.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/reservierung" variant="primary">
              Tisch reservieren
            </Button>
            <Button href="/speisekarte" variant="ghost">
              Speisekarte ansehen
            </Button>
          </div>
        </motion.div>
      </Container>

      <motion.div
        initial={shouldReduceMotion ? undefined : { opacity: 0 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute inset-x-0 bottom-6 z-10 hidden justify-center sm:flex"
        aria-hidden="true"
      >
        <ChevronDown className="size-6 animate-bounce text-cream/70" />
      </motion.div>
    </section>
  );
}
