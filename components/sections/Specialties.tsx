import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import TextLink from "@/components/ui/TextLink";
import Reveal from "@/components/motion/Reveal";

const dishes = [
  {
    name: "Tagliatelle al Tartufo",
    description: "Frische Tagliatelle mit Trüffelcreme und Parmesan.",
    price: "16,90 €",
    image: "/images/dish-tagliatelle-tartufo.png",
    alt: "Tagliatelle al Tartufo mit gehobeltem Trüffel und Parmesan, serviert mit Rotwein",
  },
  {
    name: "Pizza Margherita",
    description: "Tomatensauce, Mozzarella, Basilikum — aus dem Steinofen.",
    price: "11,90 €",
    image: "/images/dish-pizza-margherita.png",
    alt: "Knusprige Pizza Margherita aus dem Steinofen mit Basilikum",
  },
  {
    name: "Linguine Frutti di Mare",
    description: "Linguine mit Garnelen, Miesmuscheln und Cherrytomaten.",
    price: "19,90 €",
    image: "/images/dish-frutti-di-mare.png",
    alt: "Linguine Frutti di Mare mit Garnelen und Kirschtomaten",
  },
];

export default function Specialties() {
  return (
    <section className="bg-surface py-24 sm:py-32">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            number="02"
            eyebrow="Beliebte Gerichte"
            title="Unsere Spezialitäten."
            description="Drei Teller, die zeigen, wofür unsere Küche steht — hausgemacht, mit Sorgfalt und ausgewählten Zutaten."
          />
          <div className="hidden sm:block">
            <TextLink href="/speisekarte">Ganze Speisekarte</TextLink>
          </div>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {dishes.map((dish, index) => (
            <Reveal key={dish.name} delay={index * 0.1}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-cream shadow-card">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={dish.image}
                    alt={dish.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-2xl text-ink">{dish.name}</h3>
                    <span className="whitespace-nowrap font-display text-lg italic text-primary">
                      {dish.price}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {dish.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 sm:hidden">
          <TextLink href="/speisekarte">Ganze Speisekarte</TextLink>
        </div>
      </Container>
    </section>
  );
}
