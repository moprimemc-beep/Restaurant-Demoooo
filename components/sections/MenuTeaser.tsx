import Link from "next/link";
import { ArrowUpRight, Soup, UtensilsCrossed, Pizza, Beef, Fish, IceCreamCone, Wine } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import { RevealGroup, RevealItem } from "@/components/motion/RevealGroup";
import { getContent } from "@/lib/content";
import { localizedHref, type Locale } from "@/lib/i18n";

const icons = {
  vorspeisen: Soup,
  pasta: UtensilsCrossed,
  pizza: Pizza,
  fleisch: Beef,
  fisch: Fish,
  desserts: IceCreamCone,
  getraenke: Wine,
};

export default function MenuTeaser({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const { menuTeaser } = content.home;

  return (
    <section className="tone-dark bg-secondary py-24 text-cream sm:py-32">
      <Container>
        <SectionHeading
          number={menuTeaser.number}
          eyebrow={menuTeaser.eyebrow}
          title={menuTeaser.title}
          description={menuTeaser.description}
          tone="light"
        />

        <RevealGroup className="mt-14 grid grid-cols-1 divide-y divide-cream/12 border-y border-cream/12 sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
          {content.menu.map((category) => {
            const Icon = icons[category.id as keyof typeof icons];
            return (
              <RevealItem key={category.id}>
                <Link
                  href={`${localizedHref(locale, "/speisekarte")}#${category.id}`}
                  className="group flex h-full flex-col gap-5 px-6 py-8 transition-colors hover:bg-cream/5"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="size-6 text-accent" aria-hidden="true" />
                    <span className="font-display text-sm italic text-cream/65">
                      {category.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-cream">{category.label}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream/60">
                      {category.intro}
                    </p>
                  </div>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-accent opacity-0 transition-opacity group-hover:opacity-100">
                    {menuTeaser.viewLabel}
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </span>
                </Link>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
