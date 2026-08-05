import type { MetadataRoute } from "next";

const siteUrl = "https://trattoria-bellavista.example.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/impressum", "/datenschutz"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
