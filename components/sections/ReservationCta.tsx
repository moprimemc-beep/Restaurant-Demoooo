import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";
import { getContent } from "@/lib/content";
import { localizedHref, type Locale } from "@/lib/i18n";

export default function ReservationCta({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const { reservationCta } = content.home;

  return (
    <section className="tone-dark relative overflow-hidden bg-secondary py-24 text-cream sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #c9a227 0, transparent 40%), radial-gradient(circle at 80% 70%, #8b0000 0, transparent 45%)",
        }}
        aria-hidden="true"
      />
      <Container className="relative text-center">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            {reservationCta.eyebrow}
          </span>
          <h2 className="mx-auto mt-5 max-w-2xl text-balance font-display text-4xl italic leading-[1.1] text-cream sm:text-5xl">
            {reservationCta.title}
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-cream/80">
            {reservationCta.description}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={localizedHref(locale, "/reservierung")} variant="primary">
              {content.common.reserveCta}
            </Button>
            <a
              href={content.restaurant.phone.href}
              className="text-sm font-semibold uppercase tracking-wide text-cream/80 underline decoration-cream/30 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              {reservationCta.orCallPrefix} {content.restaurant.phone.display}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
