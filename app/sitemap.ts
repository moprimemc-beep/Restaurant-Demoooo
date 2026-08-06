import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { siteUrl } from "@/lib/seo";

const routes = [
  "",
  "/speisekarte",
  "/galerie",
  "/ueber-uns",
  "/reservierung",
  "/kontakt",
  "/impressum",
  "/datenschutz",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${siteUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(locales.map((loc) => [loc, `${siteUrl}/${loc}${route}`])),
      },
    }))
  );
}
