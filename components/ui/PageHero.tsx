import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  compact = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image?: string;
  compact?: boolean;
}) {
  return (
    <section
      className={`tone-dark relative flex items-end overflow-hidden bg-secondary ${
        compact ? "min-h-[46vh]" : "min-h-[64vh]"
      }`}
    >
      {image && (
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      )}
      <div
        className="absolute inset-0"
        style={{
          background: image
            ? "linear-gradient(180deg, rgba(31,58,46,0.55) 0%, rgba(20,16,10,0.75) 100%)"
            : "linear-gradient(160deg, #1f3a2e 0%, #16281f 100%)",
        }}
        aria-hidden="true"
      />
      <Container className="relative z-10 pb-16 pt-32 sm:pb-20 sm:pt-40">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            {eyebrow}
          </span>
          <h1 className="mt-4 max-w-3xl text-balance font-display text-5xl italic leading-[1.05] text-cream sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
              {description}
            </p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
