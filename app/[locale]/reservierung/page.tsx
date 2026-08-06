import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Clock, Phone, Mail } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import ReservationForm from "@/components/forms/ReservationForm";
import { getContent } from "@/lib/content";
import { isLocale, type Locale } from "@/lib/i18n";
import { buildAlternates } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const content = getContent(locale);
  return {
    title: content.reservationPage.title,
    description: content.reservationPage.description,
    alternates: buildAlternates(locale, "/reservierung"),
  };
}

export default async function ReservierungPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const content = getContent(loc);
  const { restaurant, reservationPage } = content;

  return (
    <>
      <PageHero
        eyebrow={reservationPage.title}
        title={reservationPage.heroTitle}
        description={reservationPage.heroDescription}
        image="/images/menu-book-closed.png"
        compact
      />

      <section className="bg-background py-20 sm:py-28">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <div>
              <h2 className="font-display text-2xl text-ink">{reservationPage.goodToKnow}</h2>
              <div className="mt-6 space-y-6 text-sm text-ink-soft">
                <div className="flex gap-3">
                  <Clock className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-ink">{reservationPage.hoursLabel}</p>
                    <ul className="mt-2 space-y-1">
                      {content.openingHours.map((entry) => (
                        <li key={entry.day}>
                          <span className="text-ink">{entry.day}:</span> {entry.hours}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-ink">{reservationPage.phoneQuestion}</p>
                    <a href={restaurant.phone.href} className="hover:text-primary">
                      {restaurant.phone.display}
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-ink">{reservationPage.emailLabel}</p>
                    <a href={restaurant.email.href} className="hover:text-primary">
                      {restaurant.email.display}
                    </a>
                  </div>
                </div>
                <p className="rounded-xl bg-surface p-4 text-xs leading-relaxed text-ink-soft">
                  {reservationPage.groupNote}
                </p>
              </div>
            </div>

            <ReservationForm />
          </div>
        </Container>
      </section>
    </>
  );
}
