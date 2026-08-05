import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import TextLink from "@/components/ui/TextLink";
import Reveal from "@/components/motion/Reveal";
import { restaurant } from "@/lib/data";

export default function AboutTeaser() {
  return (
    <section className="bg-surface py-24 sm:py-32">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-soft sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="/images/interior-wine-wall.png"
                alt="Gastraum der Trattoria Bellavista mit Weinregal-Wand und beleuchtetem Schriftzug"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div>
            <SectionHeading
              number="05"
              eyebrow="Über uns"
              title="Seit 2018 mit Leidenschaft für Italien."
              description={`${restaurant.description} Unser Team sorgt jeden Tag dafür, dass sich Gäste bei uns wie in einer echten Trattoria fühlen.`}
            />
            <div className="mt-8">
              <TextLink href="/ueber-uns">Mehr über uns</TextLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
