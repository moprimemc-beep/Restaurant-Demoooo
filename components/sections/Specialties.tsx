import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import TextLink from "@/components/ui/TextLink";
import Reveal from "@/components/motion/Reveal";
import { getContent } from "@/lib/content";
import { localizedHref, type Locale } from "@/lib/i18n";

export default function Specialties({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const { specialties } = content.home;

  return (
    <section className="bg-surface py-24 sm:py-32">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            number={specialties.number}
            eyebrow={specialties.eyebrow}
            title={specialties.title}
            description={specialties.description}
          />
          <div className="hidden sm:block">
            <TextLink href={localizedHref(locale, "/speisekarte")}>{content.common.fullMenuLink}</TextLink>
          </div>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {specialties.dishes.map((dish, index) => (
            <Reveal key={dish.name} delay={index * 0.1}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-cream shadow-card">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={dish.image!}
                    alt={`${dish.name} — ${dish.description}`}
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
          <TextLink href={localizedHref(locale, "/speisekarte")}>{content.common.fullMenuLink}</TextLink>
        </div>
      </Container>
    </section>
  );
}
