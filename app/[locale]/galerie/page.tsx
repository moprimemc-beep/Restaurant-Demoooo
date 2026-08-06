import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { getContent } from "@/lib/content";
import { isLocale, type Locale } from "@/lib/i18n";
import { buildAlternates } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const content = getContent(locale);
  return {
    title: content.galleryPage.title,
    description: content.galleryPage.description,
    alternates: buildAlternates(locale, "/galerie"),
  };
}

export default async function GaleriePage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const content = getContent(loc);

  return (
    <>
      <PageHero
        eyebrow={content.galleryPage.title}
        title={content.galleryPage.heroTitle}
        description={content.galleryPage.heroDescription}
        image="/images/interior-terrace-seating.png"
        compact
      />
      <section className="bg-background py-20 sm:py-28">
        <Container>
          <GalleryGrid images={[...content.galleryImages]} />
        </Container>
      </section>
    </>
  );
}
