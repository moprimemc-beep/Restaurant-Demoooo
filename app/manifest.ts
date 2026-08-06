import type { MetadataRoute } from "next";
import { getContent } from "@/lib/content";
import { defaultLocale } from "@/lib/i18n";

export default function manifest(): MetadataRoute.Manifest {
  const content = getContent(defaultLocale);
  const { restaurant } = content;

  return {
    name: `${restaurant.name} — ${restaurant.slogan}`,
    short_name: restaurant.name,
    description: content.meta.siteDescription,
    start_url: `/${defaultLocale}`,
    display: "standalone",
    background_color: "#f8f5f0",
    theme_color: "#1f3a2e",
    lang: content.meta.htmlLang,
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
}
