import { locales, type Locale } from "@/lib/i18n";

export const siteUrl = "https://trattoria-bellavista.example.com";

/** Builds canonical + hreflang alternates for a locale-neutral path ("/", "/speisekarte", ...). */
export function buildAlternates(locale: Locale, path: string) {
  const suffix = path === "/" ? "" : path;
  const languages = Object.fromEntries(
    locales.map((loc) => [loc, `${siteUrl}/${loc}${suffix}`])
  ) as Record<Locale, string>;

  return {
    canonical: `${siteUrl}/${locale}${suffix}`,
    languages: { ...languages, "x-default": `${siteUrl}/en${suffix}` },
  };
}
