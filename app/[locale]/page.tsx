import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import Specialties from "@/components/sections/Specialties";
import MenuTeaser from "@/components/sections/MenuTeaser";
import Stats from "@/components/sections/Stats";
import GalleryPreview from "@/components/sections/GalleryPreview";
import AboutTeaser from "@/components/sections/AboutTeaser";
import ReservationCta from "@/components/sections/ReservationCta";
import { isLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;

  return (
    <>
      <Hero />
      <Philosophy locale={loc} />
      <Specialties locale={loc} />
      <MenuTeaser locale={loc} />
      <Stats locale={loc} />
      <GalleryPreview locale={loc} />
      <AboutTeaser locale={loc} />
      <ReservationCta locale={loc} />
    </>
  );
}
