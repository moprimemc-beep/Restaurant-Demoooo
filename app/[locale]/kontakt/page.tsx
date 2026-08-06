import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/forms/ContactForm";
import { getContent } from "@/lib/content";
import { isLocale, type Locale } from "@/lib/i18n";
import { buildAlternates } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const content = getContent(locale);
  return {
    title: content.contactPage.title,
    description: content.contactPage.description,
    alternates: buildAlternates(locale, "/kontakt"),
  };
}

export default async function KontaktPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const content = getContent(loc);
  const { restaurant, contactPage } = content;

  return (
    <>
      <PageHero
        eyebrow={contactPage.title}
        title={contactPage.heroTitle}
        description={contactPage.heroDescription}
        image="/images/exterior-facade-night.png"
        compact
      />

      <section className="bg-background py-20 sm:py-28">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-ink">{restaurant.name}</p>
                  <p className="text-sm text-ink-soft">
                    {restaurant.address.street}
                    <br />
                    {restaurant.address.zip} {restaurant.address.city}
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${restaurant.mapsQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-primary hover:underline"
                  >
                    {contactPage.mapLink}
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-ink">{contactPage.phoneLabel}</p>
                  <a href={restaurant.phone.href} className="text-sm text-ink-soft hover:text-primary">
                    {restaurant.phone.display}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-ink">{contactPage.emailLabel}</p>
                  <a href={restaurant.email.href} className="text-sm text-ink-soft hover:text-primary">
                    {restaurant.email.display}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-ink">{contactPage.hoursLabel}</p>
                  <ul className="mt-1 space-y-1 text-sm text-ink-soft">
                    {content.openingHours.map((entry) => (
                      <li key={entry.day}>
                        <span className="text-ink">{entry.day}:</span> {entry.hours}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
