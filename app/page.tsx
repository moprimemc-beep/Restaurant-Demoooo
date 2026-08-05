import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import Specialties from "@/components/sections/Specialties";
import MenuTeaser from "@/components/sections/MenuTeaser";
import Stats from "@/components/sections/Stats";
import GalleryPreview from "@/components/sections/GalleryPreview";
import AboutTeaser from "@/components/sections/AboutTeaser";
import ReservationCta from "@/components/sections/ReservationCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Philosophy />
      <Specialties />
      <MenuTeaser />
      <Stats />
      <GalleryPreview />
      <AboutTeaser />
      <ReservationCta />
    </>
  );
}
