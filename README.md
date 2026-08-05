# Trattoria Bellavista — Website

Eine vollständige, produktionsreife Demo-Website für ein **fiktives** italienisches
Restaurant in München. Alle Inhalte (Speisekarte, Preise, Team, Kontaktdaten,
Öffnungszeiten) sind frei erfunden und dienen ausschließlich zu
Demonstrationszwecken.

## Projektbeschreibung

Die Website zeigt eine warme, elegante Trattoria-Ästhetik: dunkles Rot,
Waldgrün und Gold auf warmem Off-White, Playfair Display für Überschriften,
Lato für Fließtext, und ruhige Scroll-Animationen mit Framer Motion. Alle
verwendeten Fotos stammen aus dem bereitgestellten Bildmaterial der
"Trattoria Bellavista"-Markenwelt.

**Seiten:** Start, Speisekarte, Galerie, Über uns, Reservierung, Kontakt,
Impressum, Datenschutz, 404.

## Installation

```bash
npm install
npm run dev
```

Die Seite läuft dann unter [http://localhost:3000](http://localhost:3000).

```bash
npm run lint    # ESLint
npx tsc --noEmit # TypeScript Typecheck
npm run build   # Produktions-Build
npm run start   # Produktions-Server (nach dem Build)
```

## Projektstruktur

```
app/                    Next.js App Router Seiten & Routen
  speisekarte/           Speisekarte
  galerie/                Galerie mit Lightbox
  ueber-uns/              Über uns / Team
  reservierung/           Reservierungsformular
  kontakt/                Kontakt & Formular
  impressum/, datenschutz/  Rechtliche Seiten
  not-found.tsx           404-Seite
  sitemap.ts, robots.ts, manifest.ts  SEO/PWA-Routen
components/
  layout/                 Navbar, MobileMenu, Footer
  ui/                     Button, Container, PageHero, SectionHeading, ...
  sections/               Startseiten-Abschnitte (Hero, Philosophy, ...)
  menu/                   Speisekarten-Komponenten
  gallery/                Galerie-Grid & Lightbox
  forms/                  Reservierungs-/Kontakt-/Newsletter-Formulare
  motion/                 Framer-Motion Reveal-Wrapper
lib/
  data.ts                 Zentrale Inhalte (Restaurant, Speisekarte, Team, ...)
  schemas.ts               Zod-Validierungsschemas
  utils.ts
public/images/            Bereitgestellte Fotos & Logo
```

## Design-System

| Token | Wert | Verwendung |
|---|---|---|
| `primary` | `#8B0000` | Buttons, Preise, Akzentlinien |
| `secondary` | `#1F3A2E` | Dunkle Flächen (Footer, Hero-Overlay) |
| `accent` | `#C9A227` | Eyebrows, Icons, Hover-States auf dunklem Grund |
| `background` | `#F8F5F0` | Seitenhintergrund |
| `surface` | `#EFE9DF` | Alternierende Sektionsflächen |
| `ink` / `ink-soft` | `#2B2B2B` / `#55504A` | Text auf hellem Grund |
| `cream` | `#FFFDF9` | Text auf dunklem Grund, Kartenflächen |

Alle Farbpaare wurden gegen WCAG-AA-Kontrastanforderungen geprüft (siehe
`.tone-dark`-Klasse in `app/globals.css`, die Fokus-Ringe und Textfarben je
nach hellem/dunklem Sektionshintergrund umschaltet).

**Typografie:** Playfair Display (Headlines, `font-display`), Lato (Fließtext,
Standard). Beide über `next/font/google` geladen (kein Render-Blocking, kein
Layout-Shift durch `display: swap`).

## Content-Konfiguration

Alle Texte, Preise, Öffnungszeiten und Kontaktdaten liegen zentral in
`lib/data.ts`. Um die Website auf ein anderes (fiktives oder echtes)
Restaurant umzustellen, genügt es, diese Datei anzupassen — alle Seiten
beziehen ihre Inhalte von dort.

## Bild-Konfiguration

Alle Fotos liegen in `public/images/` und werden ausschließlich über
`next/image` eingebunden (automatische Optimierung, responsive Größen, Lazy
Loading, `priority` für LCP-relevante Hero-Bilder). Für Speisekarten-Kategorien
ohne eigenes Foto (Fleisch, Fisch, Desserts, Getränke, einzelne Vorspeisen)
wurde bewusst auf Stockfotos verzichtet — stattdessen ein typografisches
Karten-Design verwendet.

## SEO-Konfiguration

- Individuelle `metadata` (Title/Description/Canonical) je Seite
- OpenGraph- & Twitter-Card-Bild: `public/images/og-image.jpg`
- `Restaurant`-Schema.org JSON-LD (Adresse, Öffnungszeiten) in `app/layout.tsx`
- `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`
- Impressum/Datenschutz sind per `robots: noindex` von der Indexierung
  ausgeschlossen

**Wichtig:** `metadataBase`/Sitemap/robots.txt verwenden aktuell die
Platzhalter-Domain `https://trattoria-bellavista.example.com`. Vor einem
echten Launch muss diese in `app/layout.tsx`, `app/sitemap.ts` und
`app/robots.ts` durch die finale Domain ersetzt werden.

## Mobile Viewport & Zoom-Sperre

`app/layout.tsx` exportiert `viewport` mit `minimumScale: 1, maximumScale: 1,
userScalable: false` (kein Pinch-Zoom), während vertikales Scrollen jederzeit
uneingeschränkt funktioniert. Scroll-Sperren (mobiles Menü, Lightbox) setzen
temporär `overflow: hidden` nur auf `document.body` und stellen den Zustand
beim Schließen zuverlässig wieder her (siehe `MobileMenu.tsx`, `Lightbox.tsx`).

## Formular-Konfiguration

Reservierungs-, Kontakt- und Newsletter-Formular nutzen React Hook Form + Zod
für vollständige Client-Validierung mit zugänglichen Fehlermeldungen.

**Diese Demo-Website hat keinen echten Formularversand angebunden.** Nach
erfolgreicher Validierung wird ein ehrlich gekennzeichneter Erfolgszustand
angezeigt ("Demo-Website ohne echten Versand"), es werden aber keine Daten an
einen Server gesendet. Für einen echten Einsatz muss in
`components/forms/ReservationForm.tsx` und `ContactForm.tsx` die
`onSubmit`-Funktion an einen echten Endpoint (z. B. eine Route Handler unter
`app/api/`, einen E-Mail-Versanddienst oder ein Buchungssystem) angebunden
werden.

## Deployment auf Vercel

1. Repository zu Vercel importieren
2. Framework Preset: Next.js (automatisch erkannt)
3. Build Command: `npm run build` · Output: automatisch
4. Environment Variables: aktuell keine erforderlich
5. Nach dem ersten Deploy: finale Domain in `metadataBase` (siehe oben)
   eintragen und erneut deployen

## Launch-Checkliste

Vor einem echten Go-Live (bzw. bevor diese Demo als reale Website verwendet
wird) sollten folgende Punkte geprüft bzw. ergänzt werden:

- [ ] Finale Domain in `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts` eintragen
- [ ] Canonical-URLs mit finaler Domain abgleichen
- [ ] Echte Social-Media-URLs hinterlegen (aktuell nur Platzhalter-Handles ohne Links, siehe `lib/data.ts`)
- [ ] Impressumsangaben (Rechtsform, vertretungsberechtigte Person, ggf. Handelsregister/USt-ID) rechtssicher vervollständigen
- [ ] Datenschutzerklärung von rechtskundiger Stelle prüfen lassen
- [ ] Bildrechte der verwendeten Fotos klären (aktuell Demo-Bildmaterial)
- [ ] Nachhaltigkeits-/Qualitätsaussagen mit tatsächlichen Fakten belegen
- [ ] Reservierungs- und Kontaktformular an echten Versand/CRM anbinden
- [ ] Spam-Schutz (z. B. Honeypot, Rate-Limiting, CAPTCHA) für Formulare ergänzen
- [ ] OpenGraph-Vorschau (`public/images/og-image.jpg`) mit echtem Debug-Tool prüfen
- [ ] Favicon/App-Icons (`app/icon.png`, `app/apple-icon.png`) final prüfen
- [ ] Sitemap & robots.txt nach Domain-Wechsel erneut prüfen
- [ ] Mobile Darstellung auf echten Geräten (iOS/Android, kleine Displays) testen
- [ ] Mobile Zoom-Sperre und vertikales Scrollen auf echten Geräten verifizieren
- [ ] Kontaktlinks (`tel:`, `mailto:`) mit echten Daten prüfen
- [ ] Tracking/Analytics erst nach rechtlicher Freigabe (Cookie-Consent) aktivieren — aktuell ist keinerlei Tracking eingebunden

## Tech Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 ·
Framer Motion · React Hook Form · Zod · Lucide Icons · ESLint
