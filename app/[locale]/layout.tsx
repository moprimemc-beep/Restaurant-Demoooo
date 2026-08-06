import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Playfair_Display, Lato } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { LocaleProvider } from "@/lib/locale-context";
import { getContent } from "@/lib/content";
import { isLocale, locales, type Locale } from "@/lib/i18n";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

const siteUrl = "https://trattoria-bellavista.example.com";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const content = getContent(locale);
  const { restaurant, meta } = content;
  const title = `${restaurant.name} — ${restaurant.slogan}`;

  return {
    metadataBase: new URL(siteUrl),
    title: { default: title, template: meta.siteTitleTemplate },
    description: meta.siteDescription,
    keywords: meta.keywords,
    authors: [{ name: restaurant.name }],
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: {
        en: `${siteUrl}/en`,
        de: `${siteUrl}/de`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "de" ? "de_DE" : "en_US",
      url: `${siteUrl}/${locale}`,
      siteName: restaurant.name,
      title,
      description: meta.siteDescription,
      images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: `${restaurant.name} — Logo` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: meta.siteDescription,
      images: ["/images/og-image.jpg"],
    },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#1f3a2e",
};

function buildJsonLd(locale: Locale, content: ReturnType<typeof getContent>) {
  const { restaurant } = content;
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: restaurant.name,
    description: content.meta.siteDescription,
    servesCuisine: "Italian",
    priceRange: "€€",
    telephone: restaurant.phone.display,
    email: restaurant.email.display,
    url: `${siteUrl}/${locale}`,
    image: `${siteUrl}/images/exterior-facade-night.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: restaurant.address.street,
      postalCode: restaurant.address.zip,
      addressLocality: restaurant.address.city,
      addressCountry: "DE",
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "17:00", closes: "22:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"], opens: "12:00", closes: "14:30" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"], opens: "17:00", closes: "22:30" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "12:00", closes: "23:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "12:00", closes: "21:30" },
    ],
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const content = getContent(locale);
  const jsonLd = buildJsonLd(locale, content);

  return (
    <html lang={content.meta.htmlLang} className={`${playfair.variable} ${lato.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LocaleProvider locale={locale} content={content}>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-secondary"
          >
            {content.common.skipLink}
          </a>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
