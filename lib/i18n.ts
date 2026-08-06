export const locales = ["en", "de"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Prefixes a locale-neutral path ("/speisekarte", "/") with the given locale. */
export function localizedHref(locale: Locale, path: string): string {
  if (path === "/") return `/${locale}`;
  return `/${locale}${path}`;
}

/** Strips a leading /en or /de segment from a pathname, returning the locale-neutral rest. */
export function stripLocale(pathname: string): string {
  const match = pathname.match(/^\/(en|de)(\/.*)?$/);
  if (!match) return pathname;
  return match[2] ?? "/";
}
