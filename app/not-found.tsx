import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
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
        <span className="font-display text-2xl italic text-accent">404</span>
        <h1 className="mt-4 text-balance font-display text-4xl italic leading-tight sm:text-5xl">
          Dieser Tisch ist leider nicht gedeckt.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-cream/80">
          Die gesuchte Seite existiert nicht oder wurde verschoben. Kehren Sie
          zurück zur Startseite oder werfen Sie einen Blick in unsere
          Speisekarte.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/" variant="primary">
            Zur Startseite
          </Button>
          <Button href="/speisekarte" variant="ghost">
            Speisekarte ansehen
          </Button>
        </div>
      </Container>
    </section>
  );
}
