import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import { RevealGroup, RevealItem } from "@/components/motion/RevealGroup";
import { restaurant, values } from "@/lib/data";

export default function Philosophy() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <SectionHeading
            number="01"
            eyebrow="Unsere Philosophie"
            title="Was der Trattoria Bellavista wichtig ist."
            description={restaurant.philosophy}
          />

          <RevealGroup className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
            {values.map((value, index) => (
              <RevealItem key={value.title}>
                <span className="font-display text-sm italic text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-xl text-ink">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {value.description}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
