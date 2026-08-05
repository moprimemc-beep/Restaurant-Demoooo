import Container from "@/components/ui/Container";
import { RevealGroup, RevealItem } from "@/components/motion/RevealGroup";
import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <section className="tone-dark bg-primary py-16 text-cream sm:py-20">
      <Container>
        <RevealGroup className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6">
          {stats.map((stat) => (
            <RevealItem key={stat.label} className="text-center sm:text-left">
              <p className="font-display text-4xl italic text-cream sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-cream/75">
                {stat.label}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
