import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { galleryImages, restaurant } from "@/lib/data";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Einblicke in die Trattoria Bellavista in München — Gastraum, Steinofen, Terrasse und unsere Gerichte.",
  alternates: { canonical: "/galerie" },
};

export default function GaleriePage() {
  return (
    <>
      <PageHero
        eyebrow="Galerie"
        title="Ein Blick hinter die Türen."
        description={`Küche, Gastraum, Terrasse und Teller — Eindrücke aus der ${restaurant.name}.`}
        image="/images/interior-terrace-seating.png"
        compact
      />
      <section className="bg-background py-20 sm:py-28">
        <Container>
          <GalleryGrid images={[...galleryImages]} />
        </Container>
      </section>
    </>
  );
}
