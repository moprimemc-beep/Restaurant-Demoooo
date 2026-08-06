"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import NewsletterForm from "@/components/forms/NewsletterForm";
import { InstagramIcon, FacebookIcon, TikTokIcon } from "@/components/ui/SocialIcons";
import { localizedHref } from "@/lib/i18n";
import { useLocale } from "@/lib/locale-context";

const socialIcons = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  TikTok: TikTokIcon,
};

export default function Footer() {
  const { locale, content } = useLocale();
  const { restaurant } = content;

  return (
    <footer className="tone-dark bg-secondary text-cream">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <Link href={localizedHref(locale, "/")} className="flex items-center gap-3">
              <span className="relative size-12 shrink-0 overflow-hidden rounded-full border border-accent/50">
                <Image
                  src="/images/logo-emblem.png"
                  alt=""
                  fill
                  sizes="48px"
                  className="scale-125 object-cover"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg italic text-cream">Trattoria</span>
                <span className="font-display text-xl font-semibold text-accent">
                  Bellavista
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/70">
              {restaurant.slogan} {content.footer.tagline}
            </p>
            <ul className="mt-6 flex items-center gap-3">
              {content.socialLinks.map((social) => {
                const Icon = socialIcons[social.label as keyof typeof socialIcons];
                return (
                  <li key={social.label}>
                    <span
                      className="flex size-10 items-center justify-center rounded-full border border-cream/20 text-cream/70"
                      aria-label={`${social.label}: ${social.handle} ${content.footer.socialAriaSuffix}`}
                      title={`${social.label}: ${social.handle}`}
                    >
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base italic text-accent">{content.footer.navigationTitle}</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {content.navigation.map((item) => (
                <li key={item.href}>
                  <Link href={localizedHref(locale, item.href)} className="text-cream/75 transition-colors hover:text-accent">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={localizedHref(locale, "/reservierung")} className="text-cream/75 transition-colors hover:text-accent">
                  {content.footer.reservationLink}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base italic text-accent">{content.footer.hoursTitle}</h3>
            <ul className="mt-5 space-y-3 text-sm text-cream/75">
              {content.openingHours.map((entry) => (
                <li key={entry.day} className="flex flex-col">
                  <span className="text-cream/65">{entry.day}</span>
                  <span>{entry.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base italic text-accent">{content.footer.contactTitle}</h3>
            <ul className="mt-5 space-y-4 text-sm text-cream/75">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                <span>
                  {restaurant.name}
                  <br />
                  {restaurant.address.street}
                  <br />
                  {restaurant.address.zip} {restaurant.address.city}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="size-4 shrink-0 text-accent" aria-hidden="true" />
                <a href={restaurant.phone.href} className="hover:text-accent">
                  {restaurant.phone.display}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="size-4 shrink-0 text-accent" aria-hidden="true" />
                <a href={restaurant.email.href} className="hover:text-accent">
                  {restaurant.email.display}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-cream/15 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-display text-base italic text-accent">{content.footer.newsletterTitle}</h3>
            <p className="mt-2 max-w-sm text-sm text-cream/70">{content.footer.newsletterText}</p>
          </div>
          <NewsletterForm />
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-cream/15 pt-8 text-xs text-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {restaurant.name} · {content.footer.copyrightSuffix}
          </p>
          <div className="flex gap-6">
            <Link href={localizedHref(locale, "/impressum")} className="hover:text-accent">
              {content.footer.impressumLink}
            </Link>
            <Link href={localizedHref(locale, "/datenschutz")} className="hover:text-accent">
              {content.footer.datenschutzLink}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
