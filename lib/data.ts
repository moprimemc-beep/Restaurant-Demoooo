// Zentrale, fiktive Inhaltsdaten für die Trattoria Bellavista Demo-Website.
// Alle Angaben (Preise, Kontaktdaten, Team) sind frei erfunden für Demonstrationszwecke.

export const restaurant = {
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
  address: {
    street: "Via Roma 18",
    zip: "80331",
    city: "München",
    country: "Deutschland",
    full: "Via Roma 18, 80331 München, Deutschland",
  },
  phone: {
    display: "+49 89 555 33 220",
    href: "tel:+498955533220",
  },
  email: {
    display: "info@trattoria-bellavista.de",
    href: "mailto:info@trattoria-bellavista.de",
  },
  mapsQuery: "Via+Roma+18+80331+München",
} as const;

export const values = [
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
    description:
      "Wir setzen auf ausgewählte italienische Produkte statt auf Kompromisse beim Geschmack.",
  },
  {
    title: "Leidenschaft",
    description:
      "Unsere Küche lebt von Menschen, die italienische Küche nicht nur kochen, sondern lieben.",
  },
  {
    title: "Nachhaltigkeit",
    description:
      "Wir planen unsere Einkäufe bewusst, um Lebensmittelverschwendung in unserer Küche gering zu halten.",
  },
] as const;

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

export const team: TeamMember[] = [
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
];

export const stats = [
  { value: "20.000+", label: "zufriedene Gäste" },
  { value: "4,9", label: "Sterne Durchschnitt" },
  { value: "120", label: "Sitzplätze" },
  { value: "Seit 2018", label: "in München" },
] as const;

export const openingHours = [
  { day: "Montag", hours: "17:00–22:00" },
  { day: "Dienstag–Freitag", hours: "12:00–14:30 · 17:00–22:30" },
  { day: "Samstag", hours: "12:00–23:00" },
  { day: "Sonntag", hours: "12:00–21:30" },
] as const;

export const socialLinks = [
  { label: "Instagram", handle: "@trattoria.bellavista" },
  { label: "Facebook", handle: "Trattoria Bellavista München" },
  { label: "TikTok", handle: "@trattoriabellavista" },
] as const;

export type Dish = {
  name: string;
  description: string;
  price: string;
  image?: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  number: string;
  intro: string;
  image?: string;
  dishes: Dish[];
};

export const menu: MenuCategory[] = [
  {
    id: "vorspeisen",
    label: "Vorspeisen",
    number: "01",
    intro: "Kleine, sorgfältig zubereitete Auftakte für einen Abend nach italienischer Art.",
    dishes: [
      {
        name: "Bruschetta Classica",
        description: "Geröstetes Brot mit Tomaten, Knoblauch, Basilikum und Olivenöl.",
        price: "8,50 €",
      },
      {
        name: "Carpaccio di Manzo",
        description: "Hauchdünnes Rindercarpaccio mit Rucola, Parmesan und Zitronen-Olivenöl.",
        price: "13,90 €",
      },
      {
        name: "Antipasto Italiano",
        description: "Auswahl italienischer Wurstsorten, Käse, Oliven und eingelegtem Gemüse.",
        price: "14,90 €",
      },
      {
        name: "Caprese",
        description: "Büffelmozzarella mit Tomaten, Basilikum und Olivenöl.",
        price: "10,90 €",
      },
      {
        name: "Vitello Tonnato",
        description: "Zart gegartes Kalbfleisch in cremiger Thunfisch-Kapern-Sauce.",
        price: "14,90 €",
      },
      {
        name: "Focaccia",
        description: "Ofenfrisches italienisches Fladenbrot mit Rosmarin und Meersalz.",
        price: "6,50 €",
      },
    ],
  },
  {
    id: "pasta",
    label: "Pasta",
    number: "02",
    intro: "Täglich frisch hergestellte Pasta nach traditionellen Rezepten verschiedener Regionen Italiens.",
    image: "/images/dish-tagliatelle-tartufo.png",
    dishes: [
      {
        name: "Spaghetti Carbonara",
        description: "Guanciale, Eigelb, Pecorino Romano und schwarzer Pfeffer.",
        price: "14,90 €",
      },
      {
        name: "Tagliatelle al Tartufo",
        description: "Frische Tagliatelle mit Trüffelcreme und Parmesan.",
        price: "16,90 €",
        image: "/images/dish-tagliatelle-tartufo.png",
      },
      {
        name: "Penne Arrabbiata",
        description: "Penne mit scharfer Tomatensauce, Knoblauch und Chili.",
        price: "12,90 €",
      },
      {
        name: "Linguine Frutti di Mare",
        description: "Linguine mit Garnelen, Miesmuscheln und Cherrytomaten in Weißweinsauce.",
        price: "19,90 €",
        image: "/images/dish-frutti-di-mare.png",
      },
      {
        name: "Lasagne al Forno",
        description: "Klassische Lasagne mit Rinderragout, Bechamel und Parmesan.",
        price: "15,90 €",
      },
      {
        name: "Ravioli Ricotta e Spinaci",
        description: "Ravioli gefüllt mit Ricotta und Spinat in Salbeibutter.",
        price: "14,50 €",
      },
    ],
  },
  {
    id: "pizza",
    label: "Pizza",
    number: "03",
    intro: "Knusprig gebacken im Steinofen, mit langer Teigreife für einen authentischen Geschmack.",
    image: "/images/dish-pizza-margherita.png",
    dishes: [
      {
        name: "Margherita",
        description: "Tomatensauce, Mozzarella, Basilikum.",
        price: "11,90 €",
        image: "/images/dish-pizza-margherita.png",
      },
      {
        name: "Salami",
        description: "Tomatensauce, Mozzarella, würzige Salami.",
        price: "12,90 €",
      },
      {
        name: "Prosciutto",
        description: "Tomatensauce, Mozzarella, Kochschinken.",
        price: "12,90 €",
      },
      {
        name: "Quattro Formaggi",
        description: "Mozzarella, Gorgonzola, Parmesan, Taleggio.",
        price: "13,90 €",
      },
      {
        name: "Diavola",
        description: "Tomatensauce, Mozzarella, scharfe Salami.",
        price: "12,90 €",
      },
      {
        name: "Tonno",
        description: "Tomatensauce, Mozzarella, Thunfisch, rote Zwiebeln.",
        price: "13,90 €",
      },
      {
        name: "Parma",
        description: "Tomatensauce, Rucola, Parmaschinken, Parmesan.",
        price: "14,90 €",
      },
      {
        name: "Vegetariana",
        description: "Tomatensauce, Mozzarella, gegrilltes Gemüse der Saison.",
        price: "12,90 €",
      },
      {
        name: "Funghi",
        description: "Tomatensauce, Mozzarella, frische Champignons.",
        price: "12,90 €",
      },
      {
        name: "Napoli",
        description: "Tomatensauce, Mozzarella, Sardellen, Kapern, Oliven.",
        price: "13,90 €",
      },
    ],
  },
  {
    id: "fleisch",
    label: "Fleisch",
    number: "04",
    intro: "Klassiker der italienischen Küche, gegart nach traditioneller Art.",
    dishes: [
      {
        name: "Saltimbocca alla Romana",
        description: "Kalbfleisch mit Parmaschinken und Salbei in Weißweinsauce.",
        price: "22,90 €",
      },
      {
        name: "Filetto di Manzo",
        description: "Rinderfilet vom Grill mit Rosmarinkartoffeln und Gemüse.",
        price: "26,90 €",
      },
      {
        name: "Pollo alla Griglia",
        description: "Gegrilltes Hähnchenbrustfilet mit mediterranem Gemüse.",
        price: "19,90 €",
      },
    ],
  },
  {
    id: "fisch",
    label: "Fisch",
    number: "05",
    intro: "Ausgewählte Fisch- und Meeresfrüchtegerichte, mediterran zubereitet.",
    dishes: [
      {
        name: "Salmone alla Griglia",
        description: "Gegrilltes Lachsfilet mit Zitrone und Kräutern.",
        price: "24,90 €",
      },
      {
        name: "Dorade Mediterranea",
        description: "Ganze Dorade mit Kräutern, Zitrone und Olivenöl gebacken.",
        price: "25,90 €",
      },
      {
        name: "Gamberoni",
        description: "Gebratene Riesengarnelen in Knoblauch-Weißwein-Sauce.",
        price: "23,90 €",
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    number: "06",
    intro: "Süße Klassiker aus Italien, hausgemacht bis zum letzten Löffel.",
    dishes: [
      {
        name: "Tiramisu",
        description: "Klassisches Tiramisu mit Mascarpone und Kakao.",
        price: "6,90 €",
      },
      {
        name: "Panna Cotta",
        description: "Panna Cotta mit Beerenkompott.",
        price: "6,90 €",
      },
      {
        name: "Cannoli Siciliani",
        description: "Knusprige Teigröllchen mit Ricottafüllung.",
        price: "6,50 €",
      },
      {
        name: "Gelato Italiano",
        description: "Verschiedene Sorten hausgemachtes Eis.",
        price: "5,90 €",
      },
      {
        name: "Affogato",
        description: "Vanilleeis \"ertränkt\" in heißem Espresso.",
        price: "5,50 €",
      },
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
];

export const galleryImages = [
  { src: "/images/exterior-facade-night.png", alt: "Fassade der Trattoria Bellavista bei Nacht mit beleuchtetem Schriftzug und Markise" },
  { src: "/images/interior-bar-oven.png", alt: "Innenraum mit Steinofen, Weinregal und gedeckten Tischen" },
  { src: "/images/interior-wine-wall.png", alt: "Gastraum mit Weinregal-Wand und dem Bellavista-Schriftzug" },
  { src: "/images/interior-terrace-seating.png", alt: "Sitzbereich am Abend mit warmem Kerzenlicht" },
  { src: "/images/dish-tagliatelle-tartufo.png", alt: "Tagliatelle al Tartufo mit Rotwein und Caprese im Hintergrund" },
  { src: "/images/dish-pizza-margherita.png", alt: "Pizza Margherita aus dem Steinofen mit Rotwein und Bruschetta" },
  { src: "/images/dish-frutti-di-mare.png", alt: "Tagliatelle Frutti di Mare mit Weißwein und Bruschetta" },
  { src: "/images/menu-book-open.png", alt: "Aufgeschlagene Speisekarte der Trattoria Bellavista" },
  { src: "/images/menu-book-closed.png", alt: "Geschlossene Lederspeisekarte auf einem Tisch mit Dankeskarte" },
] as const;

export const navigation = [
  { label: "Start", href: "/" },
  { label: "Speisekarte", href: "/speisekarte" },
  { label: "Galerie", href: "/galerie" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Kontakt", href: "/kontakt" },
] as const;
