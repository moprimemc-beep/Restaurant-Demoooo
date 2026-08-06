import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import StoryBlock from "@/components/sections/StoryBlock";
import TeamGrid from "@/components/sections/TeamGrid";
import ReservationCta from "@/components/sections/ReservationCta";
import { getContent } from "@/lib/content";
import { isLocale, type Locale } from "@/lib/i18n";
import { buildAlternates } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const content = getContent(locale);
  return {
    title: content.aboutPage.title,
    description: content.aboutPage.description,
    alternates: buildAlternates(locale, "/ueber-uns"),
  };
}

export default async function UeberUnsPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const content = getContent(loc);
  const [chapter1, chapter2, chapter3] = content.aboutPage.chapters;

  return (
    <>
      <PageHero
        eyebrow={content.aboutPage.title}
        title={content.aboutPage.heroTitle}
        description={content.aboutPage.heroDescription}
        image="/images/interior-wine-wall.png"
      />

      <StoryBlock
        number={chapter1.number}
        eyebrow={chapter1.eyebrow}
        title={chapter1.title}
        paragraphs={chapter1.paragraphs}
        image="/images/exterior-facade-night.png"
        imageAlt={chapter1.imageAlt}
      />

      <StoryBlock
        number={chapter2.number}
        eyebrow={chapter2.eyebrow}
        title={chapter2.title}
        paragraphs={chapter2.paragraphs}
        image="/images/interior-bar-oven.png"
        imageAlt={chapter2.imageAlt}
        reverse
        tone="alt"
      />

      <StoryBlock
        number={chapter3.number}
        eyebrow={chapter3.eyebrow}
        title={chapter3.title}
        paragraphs={chapter3.paragraphs}
        image="/images/interior-terrace-seating.png"
        imageAlt={chapter3.imageAlt}
      />

      <TeamGrid locale={loc} />
      <ReservationCta locale={loc} />
    </>
  );
}
