import type { Metadata, Viewport } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { restaurant } from "@/lib/data";

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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${restaurant.name} — ${restaurant.slogan}`,
    template: `%s — ${restaurant.name}`,
  },
  description: restaurant.description,
  keywords: [
    "italienisches Restaurant München",
    "Trattoria München",
    "Pizza München",
    "Pasta München",
    "italienisch essen München",
    restaurant.name,
  ],
  authors: [{ name: restaurant.name }],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteUrl,
    siteName: restaurant.name,
    title: `${restaurant.name} — ${restaurant.slogan}`,
    description: restaurant.description,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${restaurant.name} — Logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${restaurant.name} — ${restaurant.slogan}`,
    description: restaurant.description,
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#1f3a2e",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: restaurant.name,
  description: restaurant.description,
  servesCuisine: "Italienisch",
  priceRange: "€€",
  telephone: restaurant.phone.display,
  email: restaurant.email.display,
  url: siteUrl,
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${playfair.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-secondary"
        >
          Zum Inhalt springen
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
