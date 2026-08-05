import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import LegalNotice from "@/components/ui/LegalNotice";
import { restaurant } from "@/lib/data";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung der Trattoria Bellavista.",
  alternates: { canonical: "/datenschutz" },
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Datenschutzerklärung" compact />
      <section className="bg-background py-20 sm:py-28">
        <Container narrow>
          <LegalNotice />

          <div className="space-y-10 text-sm leading-relaxed text-ink-soft">
            <div>
              <h2 className="font-display text-xl text-ink">1. Verantwortlicher</h2>
              <p className="mt-3">
                {restaurant.name}
                <br />
                {restaurant.address.street}
                <br />
                {restaurant.address.zip} {restaurant.address.city}
                <br />
                E-Mail: {restaurant.email.display}
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-ink">
                2. Erhebung und Verarbeitung personenbezogener Daten
              </h2>
              <p className="mt-3">
                Beim Besuch dieser Website werden durch den Hosting-Anbieter
                automatisch technische Informationen (z. B. IP-Adresse, Datum
                und Uhrzeit des Zugriffs) in Server-Logfiles verarbeitet, um
                den Betrieb der Website sicherzustellen.
              </p>
              <p className="mt-3">
                Wenn Sie unser Reservierungs- oder Kontaktformular nutzen,
                verarbeiten wir die von Ihnen freiwillig angegebenen Daten
                (z. B. Name, E-Mail-Adresse, Telefonnummer, Nachricht)
                ausschließlich zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage
                ist Art. 6 Abs. 1 lit. b DSGVO.
              </p>
              <p className="mt-3">
                Hinweis: Bei dieser Demo-Website ist kein echter Formularversand
                angebunden — es werden keine Formulardaten an einen Server
                übertragen oder gespeichert.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-ink">3. Newsletter</h2>
              <p className="mt-3">
                Der Newsletter-Anmeldebereich im Footer dieser Website ist eine
                simulierte Demo-Funktion. Es findet keine echte Speicherung
                oder Versendung von E-Mail-Adressen statt.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-ink">4. Cookies</h2>
              <p className="mt-3">
                Diese Website verwendet keine Marketing- oder Tracking-Cookies.
                Es werden keine Analyse- oder Werbetools von Drittanbietern
                eingebunden.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-ink">5. Externe Links</h2>
              <p className="mt-3">
                Auf der Kontaktseite verlinken wir auf Google Maps, um die
                Anfahrt zu erleichtern. Beim Anklicken dieses Links verlassen
                Sie unsere Website; es gilt die Datenschutzerklärung von
                Google. Die Karte selbst wird nicht eingebettet.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-ink">6. Ihre Rechte</h2>
              <p className="mt-3">
                Sie haben jederzeit das Recht auf Auskunft, Berichtigung,
                Löschung und Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten sowie ein Recht auf
                Datenübertragbarkeit und Widerspruch. Wenden Sie sich hierzu an{" "}
                {restaurant.email.display}.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
