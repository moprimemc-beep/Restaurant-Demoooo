import type { Metadata } from "next";
import { Clock, Phone, Mail } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import ReservationForm from "@/components/forms/ReservationForm";
import { openingHours, restaurant } from "@/lib/data";

export const metadata: Metadata = {
  title: "Reservierung",
  description:
    "Reservieren Sie Ihren Tisch in der Trattoria Bellavista in München — schnell und unkompliziert online anfragen.",
  alternates: { canonical: "/reservierung" },
};

export default function ReservierungPage() {
  return (
    <>
      <PageHero
        eyebrow="Reservierung"
        title="Reservieren Sie Ihren Tisch."
        description="Teilen Sie uns Ihren Wunschtermin mit — wir bestätigen Ihre Reservierung so schnell wie möglich."
        image="/images/menu-book-closed.png"
        compact
      />

      <section className="bg-background py-20 sm:py-28">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <div>
              <h2 className="font-display text-2xl text-ink">Gut zu wissen</h2>
              <div className="mt-6 space-y-6 text-sm text-ink-soft">
                <div className="flex gap-3">
                  <Clock className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-ink">Öffnungszeiten</p>
                    <ul className="mt-2 space-y-1">
                      {openingHours.map((entry) => (
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
                    <p className="font-semibold text-ink">Lieber telefonisch?</p>
                    <a href={restaurant.phone.href} className="hover:text-primary">
                      {restaurant.phone.display}
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-ink">Per E-Mail</p>
                    <a href={restaurant.email.href} className="hover:text-primary">
                      {restaurant.email.display}
                    </a>
                  </div>
                </div>
                <p className="rounded-xl bg-surface p-4 text-xs leading-relaxed text-ink-soft">
                  Bei Gruppen ab 9 Personen empfehlen wir eine telefonische Abstimmung,
                  damit wir für Sie den passenden Tisch reservieren können.
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
