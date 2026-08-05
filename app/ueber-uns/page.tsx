import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import StoryBlock from "@/components/sections/StoryBlock";
import TeamGrid from "@/components/sections/TeamGrid";
import ReservationCta from "@/components/sections/ReservationCta";
import { restaurant } from "@/lib/data";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Die Geschichte, Küche und das Team der Trattoria Bellavista in München — seit 2018 authentische italienische Gastfreundschaft.",
  alternates: { canonical: "/ueber-uns" },
};

export default function UeberUnsPage() {
  return (
    <>
      <PageHero
        eyebrow="Über uns"
        title="Ein Stück Italien in München."
        description="Wofür wir stehen, wie wir arbeiten und wer jeden Tag dafür sorgt, dass sich unsere Gäste wohlfühlen."
        image="/images/interior-wine-wall.png"
      />

      <StoryBlock
        number="01"
        eyebrow="Unsere Geschichte"
        title="Seit 2018 in München."
        paragraphs={[
          `Seit ${restaurant.foundingYear} lädt die ${restaurant.name} Gäste in der ${restaurant.address.city}er Innenstadt zu Tisch. ${restaurant.description}`,
          "Aus einem einfachen Gedanken heraus entstanden: dass gutes Essen Menschen zusammenbringt — an einem Tisch, bei einem Glas Wein, in guter Gesellschaft.",
        ]}
        image="/images/exterior-facade-night.png"
        imageAlt="Fassade der Trattoria Bellavista am Abend"
      />

      <StoryBlock
        number="02"
        eyebrow="Unsere Küche"
        title="Handgemacht, Tag für Tag."
        paragraphs={[
          "Unsere Pasta wird täglich frisch zubereitet, unsere Pizza reift langsam vor dem Backen im Steinofen. Wir verzichten bewusst auf Abkürzungen, weil man den Unterschied schmeckt.",
          "Frisches Gemüse, ausgewählter Käse und italienische Grundprodukte bilden die Basis für jedes Gericht, das unsere Küche verlässt.",
        ]}
        image="/images/interior-bar-oven.png"
        imageAlt="Steinofen und Küche der Trattoria Bellavista"
        reverse
        tone="alt"
      />

      <StoryBlock
        number="03"
        eyebrow="Bei uns zu Gast"
        title="Was Sie bei uns erwartet."
        paragraphs={[
          "Ein herzlicher Empfang, ein Team, das sich Zeit nimmt, und eine Atmosphäre, die an laue Abende in Italien erinnert — mit Kerzenlicht, Olivenzweigen und dem Duft von frisch gebackener Pizza.",
          "Ob spontaner Besuch oder geplanter Abend zu zweit: Wir freuen uns, wenn Sie sich bei uns Zeit nehmen.",
        ]}
        image="/images/interior-terrace-seating.png"
        imageAlt="Gedeckte Tische der Trattoria Bellavista am Abend"
      />

      <TeamGrid />
      <ReservationCta />
    </>
  );
}
