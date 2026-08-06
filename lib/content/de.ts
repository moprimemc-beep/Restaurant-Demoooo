// Zentrale, fiktive Inhalte der Trattoria-Bellavista-Demo-Website (Deutsch).
// Alle Angaben (Preise, Kontaktdaten, Team) sind frei erfunden.
import type { Content } from "./types";

export const de: Content = {
  locale: "de",
  meta: {
    htmlLang: "de",
    siteTitleTemplate: "%s — Trattoria Bellavista",
    siteDescription:
      "Die Trattoria Bellavista bringt das Lebensgefühl Italiens nach München. Frische Zutaten, hausgemachte Pasta und knusprige Steinofenpizza.",
    keywords: [
      "italienisches Restaurant München",
      "Trattoria München",
      "Pizza München",
      "Pasta München",
      "italienisch essen München",
      "Trattoria Bellavista",
    ],
  },

  restaurant: {
    name: "Trattoria Bellavista",
    slogan: "Authentischer Geschmack Italiens.",
    foundingYear: 2018,
    city: "München",
    country: "Deutschland",
    type: "Italienisches Restaurant",
    cuisine: "Traditionelle italienische Küche mit modernen Einflüssen",
    seats: 120,
    description:
      "Die Trattoria Bellavista bringt das Lebensgefühl Italiens nach Deutschland. Frische Zutaten, hausgemachte Pasta, knusprige Steinofenpizza und ausgewählte Weine sorgen für ein authentisches kulinarisches Erlebnis. Gäste genießen mediterrane Atmosphäre, herzlichen Service und traditionelle Rezepte aus verschiedenen Regionen Italiens.",
    philosophy:
      "Wir glauben daran, dass gutes Essen Menschen verbindet. Deshalb verwenden wir ausschließlich frische Zutaten, traditionelle Rezepte und hochwertige italienische Produkte.",
    address: { street: "Via Roma 18", zip: "80331", city: "München", country: "Deutschland" },
    phone: { display: "+49 89 555 33 220", href: "tel:+498955533220" },
    email: { display: "info@trattoria-bellavista.de", href: "mailto:info@trattoria-bellavista.de" },
    mapsQuery: "Via+Roma+18+80331+München",
  },

  values: [
    {
      title: "Frische Zutaten",
      description:
        "Wir beziehen Gemüse, Kräuter und Käse täglich frisch und verarbeiten sie noch am selben Tag.",
    },
    {
      title: "Hausgemachte Speisen",
      description:
        "Unsere Pasta wird täglich frisch von Hand hergestellt, unsere Pizza reift langsam vor dem Backen im Steinofen.",
    },
    {
      title: "Italienische Gastfreundschaft",
      description:
        "Bei uns sind Gäste keine Nummer. Wir nehmen uns Zeit für Empfehlungen, Fragen und ein gutes Gespräch.",
    },
    {
      title: "Qualität",
      description: "Wir setzen auf ausgewählte italienische Produkte statt auf Kompromisse beim Geschmack.",
    },
    {
      title: "Leidenschaft",
      description: "Unsere Küche lebt von Menschen, die italienische Küche nicht nur kochen, sondern lieben.",
    },
    {
      title: "Nachhaltigkeit",
      description:
        "Wir planen unsere Einkäufe bewusst, um Lebensmittelverschwendung in unserer Küche gering zu halten.",
    },
  ],

  team: [
    {
      name: "Marco Rossi",
      role: "Chefkoch",
      bio: "Verantwortet die Speisekarte und die tägliche Frische in der Küche der Trattoria Bellavista.",
    },
    {
      name: "Alessandro Bianchi",
      role: "Sous Chef",
      bio: "Unterstützt die Küchenleitung und sorgt für gleichbleibende Qualität bei jedem Teller.",
    },
    {
      name: "Luca Romano",
      role: "Restaurantleiter",
      bio: "Kümmert sich um einen reibungslosen Ablauf im Service und ist erster Ansprechpartner für unsere Gäste.",
    },
    {
      name: "Giovanni Ferrari",
      role: "Sommelier",
      bio: "Berät bei der Weinauswahl und stellt die Weinkarte der Trattoria Bellavista zusammen.",
    },
    {
      name: "Sofia Conti",
      role: "Serviceleitung",
      bio: "Koordiniert das Serviceteam und achtet auf einen herzlichen Empfang jedes Gastes.",
    },
  ],

  stats: [
    { value: "20.000+", label: "zufriedene Gäste" },
    { value: "4,9", label: "Sterne Durchschnitt" },
    { value: "120", label: "Sitzplätze" },
    { value: "Seit 2018", label: "in München" },
  ],

  openingHours: [
    { day: "Montag", hours: "17:00–22:00" },
    { day: "Dienstag–Freitag", hours: "12:00–14:30 · 17:00–22:30" },
    { day: "Samstag", hours: "12:00–23:00" },
    { day: "Sonntag", hours: "12:00–21:30" },
  ],

  socialLinks: [
    { label: "Instagram", handle: "@trattoria.bellavista" },
    { label: "Facebook", handle: "Trattoria Bellavista München" },
    { label: "TikTok", handle: "@trattoriabellavista" },
  ],

  navigation: [
    { label: "Start", href: "/" },
    { label: "Speisekarte", href: "/speisekarte" },
    { label: "Galerie", href: "/galerie" },
    { label: "Über uns", href: "/ueber-uns" },
    { label: "Kontakt", href: "/kontakt" },
  ],

  menu: [
    {
      id: "vorspeisen",
      label: "Vorspeisen",
      number: "01",
      intro: "Kleine, sorgfältig zubereitete Auftakte für einen Abend nach italienischer Art.",
      dishes: [
        { name: "Bruschetta Classica", description: "Geröstetes Brot mit Tomaten, Knoblauch, Basilikum und Olivenöl.", price: "8,50 €" },
        { name: "Carpaccio di Manzo", description: "Hauchdünnes Rindercarpaccio mit Rucola, Parmesan und Zitronen-Olivenöl.", price: "13,90 €" },
        { name: "Antipasto Italiano", description: "Auswahl italienischer Wurstsorten, Käse, Oliven und eingelegtem Gemüse.", price: "14,90 €" },
        { name: "Caprese", description: "Büffelmozzarella mit Tomaten, Basilikum und Olivenöl.", price: "10,90 €" },
        { name: "Vitello Tonnato", description: "Zart gegartes Kalbfleisch in cremiger Thunfisch-Kapern-Sauce.", price: "14,90 €" },
        { name: "Focaccia", description: "Ofenfrisches italienisches Fladenbrot mit Rosmarin und Meersalz.", price: "6,50 €" },
      ],
    },
    {
      id: "pasta",
      label: "Pasta",
      number: "02",
      intro: "Täglich frisch hergestellte Pasta nach traditionellen Rezepten verschiedener Regionen Italiens.",
      image: "/images/dish-tagliatelle-tartufo.png",
      dishes: [
        { name: "Spaghetti Carbonara", description: "Guanciale, Eigelb, Pecorino Romano und schwarzer Pfeffer.", price: "14,90 €" },
        { name: "Tagliatelle al Tartufo", description: "Frische Tagliatelle mit Trüffelcreme und Parmesan.", price: "16,90 €", image: "/images/dish-tagliatelle-tartufo.png" },
        { name: "Penne Arrabbiata", description: "Penne mit scharfer Tomatensauce, Knoblauch und Chili.", price: "12,90 €" },
        { name: "Linguine Frutti di Mare", description: "Linguine mit Garnelen, Miesmuscheln und Cherrytomaten in Weißweinsauce.", price: "19,90 €", image: "/images/dish-frutti-di-mare.png" },
        { name: "Lasagne al Forno", description: "Klassische Lasagne mit Rinderragout, Bechamel und Parmesan.", price: "15,90 €" },
        { name: "Ravioli Ricotta e Spinaci", description: "Ravioli gefüllt mit Ricotta und Spinat in Salbeibutter.", price: "14,50 €" },
      ],
    },
    {
      id: "pizza",
      label: "Pizza",
      number: "03",
      intro: "Knusprig gebacken im Steinofen, mit langer Teigreife für einen authentischen Geschmack.",
      image: "/images/dish-pizza-margherita.png",
      dishes: [
        { name: "Margherita", description: "Tomatensauce, Mozzarella, Basilikum.", price: "11,90 €", image: "/images/dish-pizza-margherita.png" },
        { name: "Salami", description: "Tomatensauce, Mozzarella, würzige Salami.", price: "12,90 €" },
        { name: "Prosciutto", description: "Tomatensauce, Mozzarella, Kochschinken.", price: "12,90 €" },
        { name: "Quattro Formaggi", description: "Mozzarella, Gorgonzola, Parmesan, Taleggio.", price: "13,90 €" },
        { name: "Diavola", description: "Tomatensauce, Mozzarella, scharfe Salami.", price: "12,90 €" },
        { name: "Tonno", description: "Tomatensauce, Mozzarella, Thunfisch, rote Zwiebeln.", price: "13,90 €" },
        { name: "Parma", description: "Tomatensauce, Rucola, Parmaschinken, Parmesan.", price: "14,90 €" },
        { name: "Vegetariana", description: "Tomatensauce, Mozzarella, gegrilltes Gemüse der Saison.", price: "12,90 €" },
        { name: "Funghi", description: "Tomatensauce, Mozzarella, frische Champignons.", price: "12,90 €" },
        { name: "Napoli", description: "Tomatensauce, Mozzarella, Sardellen, Kapern, Oliven.", price: "13,90 €" },
      ],
    },
    {
      id: "fleisch",
      label: "Fleisch",
      number: "04",
      intro: "Klassiker der italienischen Küche, gegart nach traditioneller Art.",
      dishes: [
        { name: "Saltimbocca alla Romana", description: "Kalbfleisch mit Parmaschinken und Salbei in Weißweinsauce.", price: "22,90 €" },
        { name: "Filetto di Manzo", description: "Rinderfilet vom Grill mit Rosmarinkartoffeln und Gemüse.", price: "26,90 €" },
        { name: "Pollo alla Griglia", description: "Gegrilltes Hähnchenbrustfilet mit mediterranem Gemüse.", price: "19,90 €" },
      ],
    },
    {
      id: "fisch",
      label: "Fisch",
      number: "05",
      intro: "Ausgewählte Fisch- und Meeresfrüchtegerichte, mediterran zubereitet.",
      dishes: [
        { name: "Salmone alla Griglia", description: "Gegrilltes Lachsfilet mit Zitrone und Kräutern.", price: "24,90 €" },
        { name: "Dorade Mediterranea", description: "Ganze Dorade mit Kräutern, Zitrone und Olivenöl gebacken.", price: "25,90 €" },
        { name: "Gamberoni", description: "Gebratene Riesengarnelen in Knoblauch-Weißwein-Sauce.", price: "23,90 €" },
      ],
    },
    {
      id: "desserts",
      label: "Desserts",
      number: "06",
      intro: "Süße Klassiker aus Italien, hausgemacht bis zum letzten Löffel.",
      dishes: [
        { name: "Tiramisu", description: "Klassisches Tiramisu mit Mascarpone und Kakao.", price: "6,90 €" },
        { name: "Panna Cotta", description: "Panna Cotta mit Beerenkompott.", price: "6,90 €" },
        { name: "Cannoli Siciliani", description: "Knusprige Teigröllchen mit Ricottafüllung.", price: "6,50 €" },
        { name: "Gelato Italiano", description: "Verschiedene Sorten hausgemachtes Eis.", price: "5,90 €" },
        { name: "Affogato", description: 'Vanilleeis "ertränkt" in heißem Espresso.', price: "5,50 €" },
      ],
    },
    {
      id: "getraenke",
      label: "Getränke",
      number: "07",
      intro: "Softdrinks, Kaffeespezialitäten und eine sorgfältig ausgewählte Weinkarte.",
      dishes: [
        { name: "Wasser (still/sprudelnd)", description: "0,75 l", price: "5,50 €" },
        { name: "Cola", description: "0,3 l", price: "3,90 €" },
        { name: "Fanta", description: "0,3 l", price: "3,90 €" },
        { name: "Sprite", description: "0,3 l", price: "3,90 €" },
        { name: "Säfte", description: "Apfel, Orange, Ananas · 0,2 l", price: "4,20 €" },
        { name: "Espresso", description: "", price: "2,60 €" },
        { name: "Cappuccino", description: "", price: "3,40 €" },
        { name: "Latte Macchiato", description: "", price: "3,80 €" },
        { name: "Caffè Crema", description: "", price: "3,30 €" },
        { name: "Chianti Classico", description: "Glas / Flasche", price: "8,50 € / 28,00 €" },
        { name: "Primitivo di Puglia", description: "Glas / Flasche", price: "8,50 € / 25,00 €" },
        { name: "Pinot Grigio", description: "Glas / Flasche", price: "7,50 € / 25,00 €" },
        { name: "Lugana DOC", description: "Glas / Flasche", price: "7,50 € / 25,00 €" },
        { name: "Prosecco", description: "Glas / Flasche", price: "7,00 € / 24,00 €" },
      ],
    },
  ],

  galleryImages: [
    { src: "/images/exterior-facade-night.png", alt: "Fassade der Trattoria Bellavista bei Nacht mit beleuchtetem Schriftzug und Markise" },
    { src: "/images/interior-bar-oven.png", alt: "Innenraum mit Steinofen, Weinregal und gedeckten Tischen" },
    { src: "/images/interior-wine-wall.png", alt: "Gastraum mit Weinregal-Wand und dem Bellavista-Schriftzug" },
    { src: "/images/interior-terrace-seating.png", alt: "Sitzbereich am Abend mit warmem Kerzenlicht" },
    { src: "/images/dish-tagliatelle-tartufo.png", alt: "Tagliatelle al Tartufo mit Rotwein und Caprese im Hintergrund" },
    { src: "/images/dish-pizza-margherita.png", alt: "Pizza Margherita aus dem Steinofen mit Rotwein und Bruschetta" },
    { src: "/images/dish-frutti-di-mare.png", alt: "Tagliatelle Frutti di Mare mit Weißwein und Bruschetta" },
    { src: "/images/menu-book-open.png", alt: "Aufgeschlagene Speisekarte der Trattoria Bellavista" },
    { src: "/images/menu-book-closed.png", alt: "Geschlossene Lederspeisekarte auf einem Tisch mit Dankeskarte" },
  ],

  common: {
    skipLink: "Zum Inhalt springen",
    menuOpenLabel: "Menü öffnen",
    menuCloseLabel: "Menü schließen",
    reserveCta: "Tisch reservieren",
    languageLabel: "Sprache wählen",
    fullMenuLink: "Ganze Speisekarte",
    fullGalleryLink: "Ganze Galerie",
    moreAboutUsLink: "Mehr über uns",
    closeImageLabel: "Bild schließen",
    previousImageLabel: "Vorheriges Bild",
    nextImageLabel: "Nächstes Bild",
    mainNavLabel: "Hauptnavigation",
    mobileNavLabel: "Mobile Hauptnavigation",
  },

  footer: {
    tagline: "Seit 2018 authentische italienische Küche im Herzen von München.",
    navigationTitle: "Navigation",
    hoursTitle: "Öffnungszeiten",
    contactTitle: "Kontakt",
    newsletterTitle: "Newsletter",
    newsletterText: "Neuigkeiten aus der Trattoria — von der Speisekarte bis zu besonderen Abenden.",
    newsletterPlaceholder: "Ihre E-Mail-Adresse",
    newsletterButtonLabel: "Newsletter abonnieren",
    newsletterSuccess:
      "Danke! In einer produktiven Version würden Sie nun eine Bestätigung erhalten. (Demo-Formular ohne echten Versand)",
    reservationLink: "Reservierung",
    impressumLink: "Impressum",
    datenschutzLink: "Datenschutz",
    copyrightSuffix: "Mit Sorgfalt für das Wesentliche.",
    socialAriaSuffix: "(Demo-Website, kein aktiver Link)",
  },

  home: {
    hero: {
      metaLine: "Trattoria Bellavista · München · Italienisches Restaurant",
      headlineLine1: "Italien genießen —",
      headlineLine2: "Bissen für Bissen.",
      subtext:
        "Traditionelle italienische Küche mit frischen Zutaten, hausgemachter Pasta und knuspriger Steinofenpizza — mitten in München.",
      ctaPrimary: "Tisch reservieren",
      ctaSecondary: "Speisekarte ansehen",
    },
    philosophy: { number: "01", eyebrow: "Unsere Philosophie", title: "Was der Trattoria Bellavista wichtig ist." },
    specialties: {
      number: "02",
      eyebrow: "Beliebte Gerichte",
      title: "Unsere Spezialitäten.",
      description:
        "Drei Teller, die zeigen, wofür unsere Küche steht — hausgemacht, mit Sorgfalt und ausgewählten Zutaten.",
      dishes: [
        {
          name: "Tagliatelle al Tartufo",
          description: "Frische Tagliatelle mit Trüffelcreme und Parmesan.",
          price: "16,90 €",
          image: "/images/dish-tagliatelle-tartufo.png",
        },
        {
          name: "Pizza Margherita",
          description: "Tomatensauce, Mozzarella, Basilikum — aus dem Steinofen.",
          price: "11,90 €",
          image: "/images/dish-pizza-margherita.png",
        },
        {
          name: "Linguine Frutti di Mare",
          description: "Linguine mit Garnelen, Miesmuscheln und Cherrytomaten.",
          price: "19,90 €",
          image: "/images/dish-frutti-di-mare.png",
        },
      ],
    },
    menuTeaser: {
      number: "03",
      eyebrow: "Angebot",
      title: "Unsere Speisekarte.",
      description: "Von hausgemachter Pasta bis zur Steinofenpizza — sieben Kapitel voller italienischer Küche.",
      viewLabel: "Ansehen",
    },
    galleryPreview: {
      number: "04",
      eyebrow: "Einblicke",
      title: "Ein Abend bei uns.",
      description: "Steinofen, Weinregal und Kerzenlicht — ein Blick in Küche, Gastraum und Terrasse.",
    },
    aboutTeaser: {
      number: "05",
      eyebrow: "Über uns",
      title: "Seit 2018 mit Leidenschaft für Italien.",
      description:
        "Die Trattoria Bellavista bringt das Lebensgefühl Italiens nach Deutschland. Frische Zutaten, hausgemachte Pasta, knusprige Steinofenpizza und ausgewählte Weine sorgen für ein authentisches kulinarisches Erlebnis. Gäste genießen mediterrane Atmosphäre, herzlichen Service und traditionelle Rezepte aus verschiedenen Regionen Italiens. Unser Team sorgt jeden Tag dafür, dass sich Gäste bei uns wie in einer echten Trattoria fühlen.",
    },
    reservationCta: {
      eyebrow: "Reservierung",
      title: "Zeit für ein gutes Essen — reservieren Sie Ihren Tisch.",
      description:
        "Ob zu zweit oder mit der ganzen Familie — wir freuen uns auf Ihren Besuch in der Trattoria Bellavista.",
      orCallPrefix: "oder anrufen:",
    },
  },

  menuPage: {
    title: "Speisekarte",
    description:
      "Vorspeisen, Pasta, Pizza, Fleisch, Fisch, Desserts und Getränke der Trattoria Bellavista in München — hausgemacht und mit frischen Zutaten.",
    heroTitle: "Von Antipasti bis Dolci.",
    heroDescription: "Alle Gerichte der Trattoria Bellavista auf einen Blick — täglich frisch zubereitet.",
    categoryNavLabel: "Speisekarten-Kategorien",
  },

  galleryPage: {
    title: "Galerie",
    description: "Einblicke in die Trattoria Bellavista in München — Gastraum, Steinofen, Terrasse und unsere Gerichte.",
    heroTitle: "Ein Blick hinter die Türen.",
    heroDescription: "Küche, Gastraum, Terrasse und Teller — Eindrücke aus der Trattoria Bellavista.",
  },

  aboutPage: {
    title: "Über uns",
    heroTitle: "Ein Stück Italien in München.",
    description:
      "Die Geschichte, Küche und das Team der Trattoria Bellavista in München — seit 2018 authentische italienische Gastfreundschaft.",
    heroDescription: "Wofür wir stehen, wie wir arbeiten und wer jeden Tag dafür sorgt, dass sich unsere Gäste wohlfühlen.",
    chapters: [
      {
        number: "01",
        eyebrow: "Unsere Geschichte",
        title: "Seit 2018 in München.",
        paragraphs: [
          "Seit 2018 lädt die Trattoria Bellavista Gäste in der Münchner Innenstadt zu Tisch. Die Trattoria Bellavista bringt das Lebensgefühl Italiens nach Deutschland. Frische Zutaten, hausgemachte Pasta, knusprige Steinofenpizza und ausgewählte Weine sorgen für ein authentisches kulinarisches Erlebnis. Gäste genießen mediterrane Atmosphäre, herzlichen Service und traditionelle Rezepte aus verschiedenen Regionen Italiens.",
          "Aus einem einfachen Gedanken heraus entstanden: dass gutes Essen Menschen zusammenbringt — an einem Tisch, bei einem Glas Wein, in guter Gesellschaft.",
        ],
        imageAlt: "Fassade der Trattoria Bellavista am Abend",
      },
      {
        number: "02",
        eyebrow: "Unsere Küche",
        title: "Handgemacht, Tag für Tag.",
        paragraphs: [
          "Unsere Pasta wird täglich frisch zubereitet, unsere Pizza reift langsam vor dem Backen im Steinofen. Wir verzichten bewusst auf Abkürzungen, weil man den Unterschied schmeckt.",
          "Frisches Gemüse, ausgewählter Käse und italienische Grundprodukte bilden die Basis für jedes Gericht, das unsere Küche verlässt.",
        ],
        imageAlt: "Steinofen und Küche der Trattoria Bellavista",
      },
      {
        number: "03",
        eyebrow: "Bei uns zu Gast",
        title: "Was Sie bei uns erwartet.",
        paragraphs: [
          "Ein herzlicher Empfang, ein Team, das sich Zeit nimmt, und eine Atmosphäre, die an laue Abende in Italien erinnert — mit Kerzenlicht, Olivenzweigen und dem Duft von frisch gebackener Pizza.",
          "Ob spontaner Besuch oder geplanter Abend zu zweit: Wir freuen uns, wenn Sie sich bei uns Zeit nehmen.",
        ],
        imageAlt: "Gedeckte Tische der Trattoria Bellavista am Abend",
      },
    ],
    team: {
      number: "04",
      eyebrow: "Unser Team",
      title: "Die Menschen dahinter.",
      description:
        "Fünf Menschen, die jeden Tag dafür sorgen, dass sich die Trattoria Bellavista wie ein Stück Italien anfühlt.",
    },
  },

  reservationPage: {
    title: "Reservierung",
    description: "Reservieren Sie Ihren Tisch in der Trattoria Bellavista in München — schnell und unkompliziert online anfragen.",
    heroTitle: "Reservieren Sie Ihren Tisch.",
    heroDescription: "Teilen Sie uns Ihren Wunschtermin mit — wir bestätigen Ihre Reservierung so schnell wie möglich.",
    goodToKnow: "Gut zu wissen",
    hoursLabel: "Öffnungszeiten",
    phoneQuestion: "Lieber telefonisch?",
    emailLabel: "Per E-Mail",
    groupNote:
      "Bei Gruppen ab 9 Personen empfehlen wir eine telefonische Abstimmung, damit wir für Sie den passenden Tisch reservieren können.",
    form: {
      name: "Name",
      guests: "Personen",
      guestUnit: "Person",
      guestsUnitPlural: "Personen",
      date: "Datum",
      time: "Uhrzeit",
      phone: "Telefonnummer",
      email: "E-Mail",
      message: "Nachricht (optional)",
      messagePlaceholder: "Allergien, Anlass oder besondere Wünsche",
      privacyPrefix: "Ich habe die",
      privacyLink: "Datenschutzerklärung",
      privacySuffix: "gelesen und stimme der Verarbeitung meiner Daten zu.",
      submit: "Reservierung anfragen",
      submitting: "Wird gesendet …",
      successTitle: "Anfrage erfasst",
      successText:
        "Vielen Dank für Ihre Reservierungsanfrage. Da dies eine Demo-Website ohne angebundenes Buchungssystem ist, wurde keine echte Nachricht versendet — in einer produktiven Version würden Sie hier eine Bestätigung per E-Mail erhalten.",
      successButton: "Neue Anfrage stellen",
      errors: {
        name: "Bitte geben Sie Ihren Namen ein.",
        guests: "Bitte wählen Sie die Anzahl der Personen.",
        date: "Bitte wählen Sie ein Datum.",
        time: "Bitte wählen Sie eine Uhrzeit.",
        phone: "Bitte geben Sie eine gültige Telefonnummer ein.",
        email: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
        privacy: "Bitte stimmen Sie der Datenschutzerklärung zu.",
        message: "Maximal 500 Zeichen.",
      },
    },
  },

  contactPage: {
    title: "Kontakt",
    description: "Kontaktieren Sie die Trattoria Bellavista in München — Adresse, Telefon, E-Mail und Öffnungszeiten.",
    heroTitle: "Wir freuen uns auf Sie.",
    heroDescription: "Ob Frage, Anliegen oder Feedback — schreiben Sie uns oder kommen Sie direkt vorbei.",
    addressLabel: "Adresse",
    phoneLabel: "Telefon",
    emailLabel: "E-Mail",
    hoursLabel: "Öffnungszeiten",
    mapLink: "In Google Maps öffnen",
    form: {
      name: "Name",
      email: "E-Mail",
      subject: "Betreff",
      message: "Nachricht",
      messagePlaceholder: "",
      privacyPrefix: "Ich habe die",
      privacyLink: "Datenschutzerklärung",
      privacySuffix: "gelesen und stimme der Verarbeitung meiner Daten zu.",
      submit: "Nachricht senden",
      submitting: "Wird gesendet …",
      successTitle: "Nachricht erfasst",
      successText:
        "Vielen Dank für Ihre Nachricht. Da dies eine Demo-Website ohne angebundenen Mail-Versand ist, wurde keine echte Nachricht gesendet.",
      successButton: "Weitere Nachricht senden",
      errors: {
        name: "Bitte geben Sie Ihren Namen ein.",
        email: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
        subject: "Bitte geben Sie einen Betreff ein.",
        privacy: "Bitte stimmen Sie der Datenschutzerklärung zu.",
        message: "Ihre Nachricht sollte mindestens 10 Zeichen umfassen.",
      },
    },
  },

  legal: {
    impressum: {
      title: "Impressum",
      description: "Impressum der Trattoria Bellavista.",
      notice:
        "Hinweis: Diese Website ist ein Demo-Projekt mit einem fiktiven Restaurant. Die folgenden Angaben dienen ausschließlich der Veranschaulichung eines vollständigen Website-Aufbaus und ersetzen keine rechtliche Prüfung für einen echten Geschäftsbetrieb.",
      sections: [
        {
          heading: "Angaben gemäß § 5 TMG",
          body: ["Trattoria Bellavista\nLuca Romano (Restaurantleitung)\nVia Roma 18\n80331 München\nDeutschland"],
        },
        { heading: "Kontakt", body: ["Telefon: +49 89 555 33 220\nE-Mail: info@trattoria-bellavista.de"] },
        {
          heading: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
          body: ["Luca Romano\nVia Roma 18, 80331 München"],
        },
        {
          heading: "EU-Streitschlichtung",
          body: [
            "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit. Da es sich bei dieser Website um ein Demo-Projekt ohne echten Geschäftsbetrieb handelt, ist kein aktiver Link zur Plattform hinterlegt. Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
          ],
        },
        {
          heading: "Haftung für Inhalte",
          body: [
            "Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.",
          ],
        },
        {
          heading: "Haftung für Links",
          body: [
            "Diese Website enthält keine Links zu externen Websites Dritter, auf deren Inhalte wir Einfluss hätten. Für die Inhalte verlinkter Seiten (z. B. Google Maps) ist stets der jeweilige Anbieter verantwortlich.",
          ],
        },
        {
          heading: "Urheberrecht",
          body: [
            "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Bilder dieser Demo-Website dienen ausschließlich zu Demonstrationszwecken.",
          ],
        },
      ],
    },
    datenschutz: {
      title: "Datenschutzerklärung",
      description: "Datenschutzerklärung der Trattoria Bellavista.",
      notice:
        "Hinweis: Diese Website ist ein Demo-Projekt mit einem fiktiven Restaurant. Die folgenden Angaben dienen ausschließlich der Veranschaulichung eines vollständigen Website-Aufbaus und ersetzen keine rechtliche Prüfung für einen echten Geschäftsbetrieb.",
      sections: [
        {
          heading: "1. Verantwortlicher",
          body: ["Trattoria Bellavista\nVia Roma 18\n80331 München\nE-Mail: info@trattoria-bellavista.de"],
        },
        {
          heading: "2. Erhebung und Verarbeitung personenbezogener Daten",
          body: [
            "Beim Besuch dieser Website werden durch den Hosting-Anbieter automatisch technische Informationen (z. B. IP-Adresse, Datum und Uhrzeit des Zugriffs) in Server-Logfiles verarbeitet, um den Betrieb der Website sicherzustellen.",
            "Wenn Sie unser Reservierungs- oder Kontaktformular nutzen, verarbeiten wir die von Ihnen freiwillig angegebenen Daten (z. B. Name, E-Mail-Adresse, Telefonnummer, Nachricht) ausschließlich zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.",
            "Hinweis: Bei dieser Demo-Website ist kein echter Formularversand angebunden — es werden keine Formulardaten an einen Server übertragen oder gespeichert.",
          ],
        },
        {
          heading: "3. Newsletter",
          body: [
            "Der Newsletter-Anmeldebereich im Footer dieser Website ist eine simulierte Demo-Funktion. Es findet keine echte Speicherung oder Versendung von E-Mail-Adressen statt.",
          ],
        },
        {
          heading: "4. Cookies",
          body: [
            "Diese Website verwendet keine Marketing- oder Tracking-Cookies. Es werden keine Analyse- oder Werbetools von Drittanbietern eingebunden.",
          ],
        },
        {
          heading: "5. Externe Links",
          body: [
            "Auf der Kontaktseite verlinken wir auf Google Maps, um die Anfahrt zu erleichtern. Beim Anklicken dieses Links verlassen Sie unsere Website; es gilt die Datenschutzerklärung von Google. Die Karte selbst wird nicht eingebettet.",
          ],
        },
        {
          heading: "6. Ihre Rechte",
          body: [
            "Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten sowie ein Recht auf Datenübertragbarkeit und Widerspruch. Wenden Sie sich hierzu an info@trattoria-bellavista.de.",
          ],
        },
      ],
    },
  },

  notFound: {
    eyebrow: "404",
    title: "Dieser Tisch ist leider nicht gedeckt.",
    description:
      "Die gesuchte Seite existiert nicht oder wurde verschoben. Kehren Sie zurück zur Startseite oder werfen Sie einen Blick in unsere Speisekarte.",
    ctaHome: "Zur Startseite",
    ctaMenu: "Speisekarte ansehen",
  },
};
