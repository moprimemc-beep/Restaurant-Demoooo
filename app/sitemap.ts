import type { MetadataRoute } from "next";

const siteUrl = "https://trattoria-bellavista.example.com";

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
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
