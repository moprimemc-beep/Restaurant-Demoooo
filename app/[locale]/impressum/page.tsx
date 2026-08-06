import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import LegalNotice from "@/components/ui/LegalNotice";
import { getContent } from "@/lib/content";
import { isLocale, type Locale } from "@/lib/i18n";
import { buildAlternates } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const content = getContent(locale);
  return {
    title: content.legal.impressum.title,
    description: content.legal.impressum.description,
    alternates: buildAlternates(locale, "/impressum"),
    robots: { index: false, follow: true },
  };
}

export default async function ImpressumPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = getContent(locale as Locale);
  const { impressum } = content.legal;

  return (
    <>
      <PageHero eyebrow={content.footer.impressumLink} title={impressum.title} compact />
      <section className="bg-background py-20 sm:py-28">
        <Container narrow>
          <LegalNotice notice={impressum.notice} />

          <div className="space-y-10 text-sm leading-relaxed text-ink-soft">
            {impressum.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-display text-xl text-ink">{section.heading}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="mt-3 whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
