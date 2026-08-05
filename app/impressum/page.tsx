import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import LegalNotice from "@/components/ui/LegalNotice";
import { restaurant } from "@/lib/data";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Trattoria Bellavista.",
  alternates: { canonical: "/impressum" },
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Impressum" compact />
      <section className="bg-background py-20 sm:py-28">
        <Container narrow>
          <LegalNotice />

          <div className="prose-headings:font-display space-y-10 text-sm leading-relaxed text-ink-soft">
            <div>
              <h2 className="font-display text-xl text-ink">Angaben gemäß § 5 TMG</h2>
              <p className="mt-3">
                {restaurant.name}
                <br />
                Luca Romano (Restaurantleitung)
                <br />
                {restaurant.address.street}
                <br />
                {restaurant.address.zip} {restaurant.address.city}
                <br />
                {restaurant.address.country}
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-ink">Kontakt</h2>
              <p className="mt-3">
                Telefon: {restaurant.phone.display}
                <br />
                E-Mail: {restaurant.email.display}
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-ink">
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
              </h2>
              <p className="mt-3">
                Luca Romano
                <br />
                {restaurant.address.street}, {restaurant.address.zip} {restaurant.address.city}
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-ink">EU-Streitschlichtung</h2>
              <p className="mt-3">
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit. Da es sich bei dieser Website um
                ein Demo-Projekt ohne echten Geschäftsbetrieb handelt, ist kein
                aktiver Link zur Plattform hinterlegt. Wir sind nicht verpflichtet
                und nicht bereit, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-ink">Haftung für Inhalte</h2>
              <p className="mt-3">
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-ink">Haftung für Links</h2>
              <p className="mt-3">
                Diese Website enthält keine Links zu externen Websites Dritter,
                auf deren Inhalte wir Einfluss hätten. Für die Inhalte
                verlinkter Seiten (z. B. Google Maps) ist stets der jeweilige
                Anbieter verantwortlich.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-ink">Urheberrecht</h2>
              <p className="mt-3">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Bilder dieser Demo-Website dienen ausschließlich zu
                Demonstrationszwecken.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
