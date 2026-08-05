import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CategoryNav from "@/components/menu/CategoryNav";
import CategorySection from "@/components/menu/CategorySection";
import { menu, restaurant } from "@/lib/data";

export const metadata: Metadata = {
  title: "Speisekarte",
  description:
    "Vorspeisen, Pasta, Pizza, Fleisch, Fisch, Desserts und Getränke der Trattoria Bellavista in München — hausgemacht und mit frischen Zutaten.",
  alternates: { canonical: "/speisekarte" },
};

export default function SpeisekartePage() {
  return (
    <>
      <PageHero
        eyebrow="Speisekarte"
        title="Von Antipasti bis Dolci."
        description={`Alle Gerichte der ${restaurant.name} auf einen Blick — täglich frisch zubereitet.`}
        image="/images/interior-bar-oven.png"
      />
      <CategoryNav />
      {menu.map((category, index) => (
        <CategorySection
          key={category.id}
          category={category}
          tone={index % 2 === 0 ? "base" : "alt"}
        />
      ))}
    </>
  );
}
