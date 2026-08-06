import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import TextLink from "@/components/ui/TextLink";
import Reveal from "@/components/motion/Reveal";
import { getContent } from "@/lib/content";
import { localizedHref, type Locale } from "@/lib/i18n";

export default function AboutTeaser({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const { aboutTeaser } = content.home;

  return (
    <section className="bg-surface py-24 sm:py-32">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-soft sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="/images/interior-wine-wall.png"
                alt={content.galleryImages[2].alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div>
            <SectionHeading
              number={aboutTeaser.number}
              eyebrow={aboutTeaser.eyebrow}
              title={aboutTeaser.title}
              description={aboutTeaser.description}
            />
            <div className="mt-8">
              <TextLink href={localizedHref(locale, "/ueber-uns")}>{content.common.moreAboutUsLink}</TextLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
