import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import CategoryNav from "@/components/menu/CategoryNav";
import CategorySection from "@/components/menu/CategorySection";
import { getContent } from "@/lib/content";
import { isLocale, type Locale } from "@/lib/i18n";
import { buildAlternates } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const content = getContent(locale);
  return {
    title: content.menuPage.title,
    description: content.menuPage.description,
    alternates: buildAlternates(locale, "/speisekarte"),
  };
}

export default async function SpeisekartePage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const content = getContent(loc);

  return (
    <>
      <PageHero
        eyebrow={content.menuPage.title}
        title={content.menuPage.heroTitle}
        description={content.menuPage.heroDescription}
        image="/images/interior-bar-oven.png"
      />
      <CategoryNav />
      {content.menu.map((category, index) => (
        <CategorySection
          key={category.id}
          category={category}
          tone={index % 2 === 0 ? "base" : "alt"}
        />
      ))}
    </>
  );
}
