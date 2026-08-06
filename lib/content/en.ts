// Central, fictional content for the Trattoria Bellavista demo website (English).
// All details (prices, contact data, team) are invented for demonstration purposes.
import type { Content } from "./types";

export const en: Content = {
  locale: "en",
  meta: {
    htmlLang: "en",
    siteTitleTemplate: "%s — Trattoria Bellavista",
    siteDescription:
      "Trattoria Bellavista brings Italy's way of life to Munich. Fresh ingredients, homemade pasta and crispy stone-oven pizza.",
    keywords: [
      "Italian restaurant Munich",
      "Trattoria Munich",
      "pizza Munich",
      "pasta Munich",
      "Italian food Munich",
      "Trattoria Bellavista",
    ],
  },

  restaurant: {
    name: "Trattoria Bellavista",
    slogan: "The authentic taste of Italy.",
    foundingYear: 2018,
    city: "Munich",
    country: "Germany",
    type: "Italian Restaurant",
    cuisine: "Traditional Italian cooking with a modern touch",
    seats: 120,
    description:
      "Trattoria Bellavista brings Italy's way of life to Germany. Fresh ingredients, homemade pasta, crispy stone-oven pizza and carefully selected wines make for an authentic culinary experience. Guests enjoy a Mediterranean atmosphere, warm service and traditional recipes from across Italy's regions.",
    philosophy:
      "We believe that good food brings people together. That's why we use only fresh ingredients, traditional recipes and high-quality Italian products.",
    address: { street: "Via Roma 18", zip: "80331", city: "Munich", country: "Germany" },
    phone: { display: "+49 89 555 33 220", href: "tel:+498955533220" },
    email: { display: "info@trattoria-bellavista.de", href: "mailto:info@trattoria-bellavista.de" },
    mapsQuery: "Via+Roma+18+80331+Munich",
  },

  values: [
    {
      title: "Fresh Ingredients",
      description: "We source vegetables, herbs and cheese fresh every day and prepare them the same day.",
    },
    {
      title: "Homemade Dishes",
      description:
        "Our pasta is made fresh by hand every day, and our pizza dough rests slowly before it goes into the stone oven.",
    },
    {
      title: "Italian Hospitality",
      description: "To us, guests are never just a number. We take the time for recommendations, questions and good conversation.",
    },
    {
      title: "Quality",
      description: "We rely on selected Italian products rather than compromising on flavour.",
    },
    {
      title: "Passion",
      description: "Our kitchen is powered by people who don't just cook Italian food — they love it.",
    },
    {
      title: "Sustainability",
      description: "We plan our purchasing carefully to keep food waste in our kitchen to a minimum.",
    },
  ],

  team: [
    {
      name: "Marco Rossi",
      role: "Head Chef",
      bio: "Oversees the menu and the daily freshness in the Trattoria Bellavista kitchen.",
    },
    {
      name: "Alessandro Bianchi",
      role: "Sous Chef",
      bio: "Supports the kitchen leadership and ensures consistent quality on every plate.",
    },
    {
      name: "Luca Romano",
      role: "Restaurant Manager",
      bio: "Keeps service running smoothly and is the first point of contact for our guests.",
    },
    {
      name: "Giovanni Ferrari",
      role: "Sommelier",
      bio: "Advises on wine selection and curates the Trattoria Bellavista wine list.",
    },
    {
      name: "Sofia Conti",
      role: "Head of Service",
      bio: "Coordinates the service team and makes sure every guest receives a warm welcome.",
    },
  ],

  stats: [
    { value: "20,000+", label: "happy guests" },
    { value: "4.9", label: "average rating" },
    { value: "120", label: "seats" },
    { value: "Since 2018", label: "in Munich" },
  ],

  openingHours: [
    { day: "Monday", hours: "17:00–22:00" },
    { day: "Tuesday–Friday", hours: "12:00–14:30 · 17:00–22:30" },
    { day: "Saturday", hours: "12:00–23:00" },
    { day: "Sunday", hours: "12:00–21:30" },
  ],

  socialLinks: [
    { label: "Instagram", handle: "@trattoria.bellavista" },
    { label: "Facebook", handle: "Trattoria Bellavista Munich" },
    { label: "TikTok", handle: "@trattoriabellavista" },
  ],

  navigation: [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/speisekarte" },
    { label: "Gallery", href: "/galerie" },
    { label: "About", href: "/ueber-uns" },
    { label: "Contact", href: "/kontakt" },
  ],

  menu: [
    {
      id: "vorspeisen",
      label: "Starters",
      number: "01",
      intro: "Small, carefully prepared beginnings for an evening in Italian style.",
      dishes: [
        { name: "Bruschetta Classica", description: "Toasted bread with tomatoes, garlic, basil and olive oil.", price: "8.50 €" },
        { name: "Carpaccio di Manzo", description: "Wafer-thin beef carpaccio with rocket, Parmesan and lemon-olive oil.", price: "13.90 €" },
        { name: "Antipasto Italiano", description: "A selection of Italian cured meats, cheese, olives and marinated vegetables.", price: "14.90 €" },
        { name: "Caprese", description: "Buffalo mozzarella with tomatoes, basil and olive oil.", price: "10.90 €" },
        { name: "Vitello Tonnato", description: "Delicately cooked veal in a creamy tuna and caper sauce.", price: "14.90 €" },
        { name: "Focaccia", description: "Oven-fresh Italian flatbread with rosemary and sea salt.", price: "6.50 €" },
      ],
    },
    {
      id: "pasta",
      label: "Pasta",
      number: "02",
      intro: "Fresh pasta made daily, following traditional recipes from across Italy's regions.",
      image: "/images/dish-tagliatelle-tartufo.png",
      dishes: [
        { name: "Spaghetti Carbonara", description: "Guanciale, egg yolk, Pecorino Romano and black pepper.", price: "14.90 €" },
        { name: "Tagliatelle al Tartufo", description: "Fresh tagliatelle with truffle cream and Parmesan.", price: "16.90 €", image: "/images/dish-tagliatelle-tartufo.png" },
        { name: "Penne Arrabbiata", description: "Penne with spicy tomato sauce, garlic and chilli.", price: "12.90 €" },
        { name: "Linguine Frutti di Mare", description: "Linguine with prawns, mussels and cherry tomatoes in a white wine sauce.", price: "19.90 €", image: "/images/dish-frutti-di-mare.png" },
        { name: "Lasagne al Forno", description: "Classic lasagne with beef ragù, béchamel and Parmesan.", price: "15.90 €" },
        { name: "Ravioli Ricotta e Spinaci", description: "Ravioli filled with ricotta and spinach in sage butter.", price: "14.50 €" },
      ],
    },
    {
      id: "pizza",
      label: "Pizza",
      number: "03",
      intro: "Baked crisp in the stone oven, with slow-proofed dough for an authentic taste.",
      image: "/images/dish-pizza-margherita.png",
      dishes: [
        { name: "Margherita", description: "Tomato sauce, mozzarella, basil.", price: "11.90 €", image: "/images/dish-pizza-margherita.png" },
        { name: "Salami", description: "Tomato sauce, mozzarella, spicy salami.", price: "12.90 €" },
        { name: "Prosciutto", description: "Tomato sauce, mozzarella, cooked ham.", price: "12.90 €" },
        { name: "Quattro Formaggi", description: "Mozzarella, gorgonzola, Parmesan, taleggio.", price: "13.90 €" },
        { name: "Diavola", description: "Tomato sauce, mozzarella, fiery hot salami.", price: "12.90 €" },
        { name: "Tonno", description: "Tomato sauce, mozzarella, tuna, red onions.", price: "13.90 €" },
        { name: "Parma", description: "Tomato sauce, rocket, Parma ham, Parmesan.", price: "14.90 €" },
        { name: "Vegetariana", description: "Tomato sauce, mozzarella, seasonal grilled vegetables.", price: "12.90 €" },
        { name: "Funghi", description: "Tomato sauce, mozzarella, fresh mushrooms.", price: "12.90 €" },
        { name: "Napoli", description: "Tomato sauce, mozzarella, anchovies, capers, olives.", price: "13.90 €" },
      ],
    },
    {
      id: "fleisch",
      label: "Meat",
      number: "04",
      intro: "Italian classics, prepared the traditional way.",
      dishes: [
        { name: "Saltimbocca alla Romana", description: "Veal with Parma ham and sage in a white wine sauce.", price: "22.90 €" },
        { name: "Filetto di Manzo", description: "Grilled beef fillet with rosemary potatoes and vegetables.", price: "26.90 €" },
        { name: "Pollo alla Griglia", description: "Grilled chicken breast with Mediterranean vegetables.", price: "19.90 €" },
      ],
    },
    {
      id: "fisch",
      label: "Fish",
      number: "05",
      intro: "Selected fish and seafood dishes, prepared Mediterranean style.",
      dishes: [
        { name: "Salmone alla Griglia", description: "Grilled salmon fillet with lemon and herbs.", price: "24.90 €" },
        { name: "Dorade Mediterranea", description: "Whole sea bream baked with herbs, lemon and olive oil.", price: "25.90 €" },
        { name: "Gamberoni", description: "Pan-fried king prawns in a garlic and white wine sauce.", price: "23.90 €" },
      ],
    },
    {
      id: "desserts",
      label: "Desserts",
      number: "06",
      intro: "Sweet Italian classics, homemade down to the last spoonful.",
      dishes: [
        { name: "Tiramisu", description: "Classic tiramisu with mascarpone and cocoa.", price: "6.90 €" },
        { name: "Panna Cotta", description: "Panna cotta with berry compote.", price: "6.90 €" },
        { name: "Cannoli Siciliani", description: "Crisp pastry rolls filled with ricotta.", price: "6.50 €" },
        { name: "Gelato Italiano", description: "A selection of homemade ice cream.", price: "5.90 €" },
        { name: "Affogato", description: 'Vanilla ice cream "drowned" in hot espresso.', price: "5.50 €" },
      ],
    },
    {
      id: "getraenke",
      label: "Drinks",
      number: "07",
      intro: "Soft drinks, coffee specialities and a carefully chosen wine list.",
      dishes: [
        { name: "Water (still/sparkling)", description: "0.75 l", price: "5.50 €" },
        { name: "Cola", description: "0.3 l", price: "3.90 €" },
        { name: "Fanta", description: "0.3 l", price: "3.90 €" },
        { name: "Sprite", description: "0.3 l", price: "3.90 €" },
        { name: "Juices", description: "Apple, orange, pineapple · 0.2 l", price: "4.20 €" },
        { name: "Espresso", description: "", price: "2.60 €" },
        { name: "Cappuccino", description: "", price: "3.40 €" },
        { name: "Latte Macchiato", description: "", price: "3.80 €" },
        { name: "Caffè Crema", description: "", price: "3.30 €" },
        { name: "Chianti Classico", description: "Glass / bottle", price: "8.50 € / 28.00 €" },
        { name: "Primitivo di Puglia", description: "Glass / bottle", price: "8.50 € / 25.00 €" },
        { name: "Pinot Grigio", description: "Glass / bottle", price: "7.50 € / 25.00 €" },
        { name: "Lugana DOC", description: "Glass / bottle", price: "7.50 € / 25.00 €" },
        { name: "Prosecco", description: "Glass / bottle", price: "7.00 € / 24.00 €" },
      ],
    },
  ],

  galleryImages: [
    { src: "/images/exterior-facade-night.png", alt: "Illuminated facade of Trattoria Bellavista at night with awning and sign" },
    { src: "/images/interior-bar-oven.png", alt: "Interior with stone oven, wine shelves and set tables" },
    { src: "/images/interior-wine-wall.png", alt: "Dining room with wine-shelf wall and the Bellavista lettering" },
    { src: "/images/interior-terrace-seating.png", alt: "Seating area in the evening, lit by warm candlelight" },
    { src: "/images/dish-tagliatelle-tartufo.png", alt: "Tagliatelle al Tartufo with red wine and caprese in the background" },
    { src: "/images/dish-pizza-margherita.png", alt: "Pizza Margherita from the stone oven with red wine and bruschetta" },
    { src: "/images/dish-frutti-di-mare.png", alt: "Tagliatelle Frutti di Mare with white wine and bruschetta" },
    { src: "/images/menu-book-open.png", alt: "Open menu of Trattoria Bellavista" },
    { src: "/images/menu-book-closed.png", alt: "Closed leather menu on a table with a thank-you card" },
  ],

  common: {
    skipLink: "Skip to content",
    menuOpenLabel: "Open menu",
    menuCloseLabel: "Close menu",
    reserveCta: "Reserve a table",
    languageLabel: "Choose language",
    fullMenuLink: "Full menu",
    fullGalleryLink: "Full gallery",
    moreAboutUsLink: "More about us",
    closeImageLabel: "Close image",
    previousImageLabel: "Previous image",
    nextImageLabel: "Next image",
    mainNavLabel: "Main navigation",
    mobileNavLabel: "Mobile main navigation",
  },

  footer: {
    tagline: "Since 2018, authentic Italian cooking in the heart of Munich.",
    navigationTitle: "Navigation",
    hoursTitle: "Opening Hours",
    contactTitle: "Contact",
    newsletterTitle: "Newsletter",
    newsletterText: "News from the trattoria — from the menu to special evenings.",
    newsletterPlaceholder: "Your email address",
    newsletterButtonLabel: "Subscribe to newsletter",
    newsletterSuccess: "Thank you! In a live version you'd now receive a confirmation. (Demo form, nothing is actually sent)",
    reservationLink: "Reservation",
    impressumLink: "Legal Notice",
    datenschutzLink: "Privacy Policy",
    copyrightSuffix: "Crafted with care for what matters.",
    socialAriaSuffix: "(demo website, not an active link)",
  },

  home: {
    hero: {
      metaLine: "Trattoria Bellavista · Munich · Italian Restaurant",
      headlineLine1: "Taste Italy —",
      headlineLine2: "one bite at a time.",
      subtext:
        "Traditional Italian cooking with fresh ingredients, homemade pasta and crispy stone-oven pizza — right in the heart of Munich.",
      ctaPrimary: "Reserve a table",
      ctaSecondary: "View menu",
    },
    philosophy: { number: "01", eyebrow: "Our Philosophy", title: "What matters to Trattoria Bellavista." },
    specialties: {
      number: "02",
      eyebrow: "Popular Dishes",
      title: "Our specialties.",
      description: "Three plates that show what our kitchen stands for — homemade, crafted with care and select ingredients.",
      dishes: [
        {
          name: "Tagliatelle al Tartufo",
          description: "Fresh tagliatelle with truffle cream and Parmesan.",
          price: "16.90 €",
          image: "/images/dish-tagliatelle-tartufo.png",
        },
        {
          name: "Pizza Margherita",
          description: "Tomato sauce, mozzarella, basil — straight from the stone oven.",
          price: "11.90 €",
          image: "/images/dish-pizza-margherita.png",
        },
        {
          name: "Linguine Frutti di Mare",
          description: "Linguine with prawns, mussels and cherry tomatoes.",
          price: "19.90 €",
          image: "/images/dish-frutti-di-mare.png",
        },
      ],
    },
    menuTeaser: {
      number: "03",
      eyebrow: "Our Offering",
      title: "Our menu.",
      description: "From homemade pasta to stone-oven pizza — seven chapters of Italian cooking.",
      viewLabel: "View",
    },
    galleryPreview: {
      number: "04",
      eyebrow: "A Look Inside",
      title: "An evening with us.",
      description: "Stone oven, wine shelves and candlelight — a glimpse into our kitchen, dining room and terrace.",
    },
    aboutTeaser: {
      number: "05",
      eyebrow: "About Us",
      title: "Passionate about Italy since 2018.",
      description:
        "Trattoria Bellavista brings Italy's way of life to Germany. Fresh ingredients, homemade pasta, crispy stone-oven pizza and carefully selected wines make for an authentic culinary experience. Guests enjoy a Mediterranean atmosphere, warm service and traditional recipes from across Italy's regions. Our team makes sure every day that guests feel like they've stepped into a real trattoria.",
    },
    reservationCta: {
      eyebrow: "Reservation",
      title: "Time for a good meal — reserve your table.",
      description: "Whether it's just the two of you or the whole family — we look forward to welcoming you to Trattoria Bellavista.",
      orCallPrefix: "or call:",
    },
  },

  menuPage: {
    title: "Menu",
    description:
      "Starters, pasta, pizza, meat, fish, desserts and drinks at Trattoria Bellavista in Munich — homemade with fresh ingredients.",
    heroTitle: "From antipasti to dolci.",
    heroDescription: "Every dish at Trattoria Bellavista at a glance — freshly prepared every day.",
    categoryNavLabel: "Menu categories",
  },

  galleryPage: {
    title: "Gallery",
    description: "A look inside Trattoria Bellavista in Munich — dining room, stone oven, terrace and our dishes.",
    heroTitle: "A look behind the doors.",
    heroDescription: "Kitchen, dining room, terrace and plates — glimpses of Trattoria Bellavista.",
  },

  aboutPage: {
    title: "About Us",
    heroTitle: "A piece of Italy in Munich.",
    description: "The story, kitchen and team behind Trattoria Bellavista in Munich — authentic Italian hospitality since 2018.",
    heroDescription: "What we stand for, how we work, and who makes sure our guests feel at home every day.",
    chapters: [
      {
        number: "01",
        eyebrow: "Our Story",
        title: "In Munich since 2018.",
        paragraphs: [
          "Since 2018, Trattoria Bellavista has been welcoming guests in the heart of Munich. Trattoria Bellavista brings Italy's way of life to Germany. Fresh ingredients, homemade pasta, crispy stone-oven pizza and carefully selected wines make for an authentic culinary experience. Guests enjoy a Mediterranean atmosphere, warm service and traditional recipes from across Italy's regions.",
          "Born from a simple idea: that good food brings people together — around a table, over a glass of wine, in good company.",
        ],
        imageAlt: "Facade of Trattoria Bellavista in the evening",
      },
      {
        number: "02",
        eyebrow: "Our Kitchen",
        title: "Handmade, every single day.",
        paragraphs: [
          "Our pasta is made fresh every day, and our pizza dough rests slowly before it goes into the stone oven. We deliberately skip shortcuts, because you can taste the difference.",
          "Fresh vegetables, select cheeses and authentic Italian staples form the base of every dish that leaves our kitchen.",
        ],
        imageAlt: "Stone oven and kitchen at Trattoria Bellavista",
      },
      {
        number: "03",
        eyebrow: "As Our Guest",
        title: "What to expect when you visit.",
        paragraphs: [
          "A warm welcome, a team that takes its time, and an atmosphere that recalls balmy evenings in Italy — candlelight, olive branches and the scent of freshly baked pizza.",
          "Whether it's a spontaneous visit or a planned evening for two: we're glad whenever you take the time to join us.",
        ],
        imageAlt: "Set tables at Trattoria Bellavista in the evening",
      },
    ],
    team: {
      number: "04",
      eyebrow: "Our Team",
      title: "The people behind it.",
      description: "Five people who make sure, every day, that Trattoria Bellavista feels like a piece of Italy.",
    },
  },

  reservationPage: {
    title: "Reservation",
    description: "Reserve your table at Trattoria Bellavista in Munich — quick and easy, online.",
    heroTitle: "Reserve your table.",
    heroDescription: "Let us know your preferred date — we'll confirm your reservation as quickly as possible.",
    goodToKnow: "Good to know",
    hoursLabel: "Opening hours",
    phoneQuestion: "Prefer to call?",
    emailLabel: "By email",
    groupNote: "For groups of 9 or more, we recommend calling ahead so we can reserve the right table for you.",
    form: {
      name: "Name",
      guests: "Guests",
      guestUnit: "guest",
      guestsUnitPlural: "guests",
      date: "Date",
      time: "Time",
      phone: "Phone number",
      email: "Email",
      message: "Message (optional)",
      messagePlaceholder: "Allergies, occasion or special requests",
      privacyPrefix: "I have read the",
      privacyLink: "privacy policy",
      privacySuffix: "and agree to the processing of my data.",
      submit: "Request reservation",
      submitting: "Sending …",
      successTitle: "Request received",
      successText:
        "Thank you for your reservation request. As this is a demo website without a connected booking system, no message was actually sent — in a live version you would receive a confirmation by email here.",
      successButton: "Send another request",
      errors: {
        name: "Please enter your name.",
        guests: "Please select the number of guests.",
        date: "Please choose a date.",
        time: "Please choose a time.",
        phone: "Please enter a valid phone number.",
        email: "Please enter a valid email address.",
        privacy: "Please agree to the privacy policy.",
        message: "Please keep your message under 500 characters.",
      },
    },
  },

  contactPage: {
    title: "Contact",
    description: "Contact Trattoria Bellavista in Munich — address, phone, email and opening hours.",
    heroTitle: "We look forward to your visit.",
    heroDescription: "Question, request or feedback — write to us or stop by in person.",
    addressLabel: "Address",
    phoneLabel: "Phone",
    emailLabel: "Email",
    hoursLabel: "Opening hours",
    mapLink: "Open in Google Maps",
    form: {
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      messagePlaceholder: "",
      privacyPrefix: "I have read the",
      privacyLink: "privacy policy",
      privacySuffix: "and agree to the processing of my data.",
      submit: "Send message",
      submitting: "Sending …",
      successTitle: "Message received",
      successText: "Thank you for your message. As this is a demo website without connected email delivery, no message was actually sent.",
      successButton: "Send another message",
      errors: {
        name: "Please enter your name.",
        email: "Please enter a valid email address.",
        subject: "Please enter a subject.",
        privacy: "Please agree to the privacy policy.",
        message: "Your message should be at least 10 characters long.",
      },
    },
  },

  legal: {
    impressum: {
      title: "Legal Notice",
      description: "Legal notice for Trattoria Bellavista.",
      notice:
        "Note: This website is a demo project featuring a fictional restaurant. The information below is provided solely to illustrate a complete website build and does not constitute a legally reviewed notice for an actual business.",
      sections: [
        {
          heading: "Information pursuant to Sec. 5 TMG (German Telemedia Act)",
          body: ["Trattoria Bellavista\nLuca Romano (Restaurant Manager)\nVia Roma 18\n80331 Munich\nGermany"],
        },
        { heading: "Contact", body: ["Phone: +49 89 555 33 220\nEmail: info@trattoria-bellavista.de"] },
        {
          heading: "Responsible for content pursuant to Sec. 18(2) MStV",
          body: ["Luca Romano\nVia Roma 18, 80331 Munich"],
        },
        {
          heading: "EU Dispute Resolution",
          body: [
            "The European Commission provides a platform for online dispute resolution (ODR). As this website is a demo project without an actual business operation, no active link to the platform is provided. We are neither obliged nor willing to participate in dispute resolution proceedings before a consumer arbitration board.",
          ],
        },
        {
          heading: "Liability for Content",
          body: [
            "As a service provider, we are responsible for our own content on these pages under general law in accordance with Sec. 7(1) TMG. However, under Sec. 8 to 10 TMG, we as a service provider are not obliged to monitor transmitted or stored third-party information.",
          ],
        },
        {
          heading: "Liability for Links",
          body: [
            "This website contains no links to external third-party websites over whose content we have any influence. The respective provider is always responsible for the content of linked pages (e.g. Google Maps).",
          ],
        },
        {
          heading: "Copyright",
          body: [
            "The content and works created by the site operators on these pages are subject to German copyright law. The images on this demo website are for demonstration purposes only.",
          ],
        },
      ],
    },
    datenschutz: {
      title: "Privacy Policy",
      description: "Privacy policy for Trattoria Bellavista.",
      notice:
        "Note: This website is a demo project featuring a fictional restaurant. The information below is provided solely to illustrate a complete website build and does not constitute a legally reviewed notice for an actual business.",
      sections: [
        {
          heading: "1. Data Controller",
          body: ["Trattoria Bellavista\nVia Roma 18\n80331 Munich\nEmail: info@trattoria-bellavista.de"],
        },
        {
          heading: "2. Collection and Processing of Personal Data",
          body: [
            "When you visit this website, the hosting provider automatically processes technical information (e.g. IP address, date and time of access) in server log files to ensure the website operates correctly.",
            "If you use our reservation or contact form, we process the data you voluntarily provide (e.g. name, email address, phone number, message) solely to handle your request. The legal basis is Art. 6(1)(b) GDPR.",
            "Note: This demo website has no actual form submission connected — no form data is transmitted to or stored on a server.",
          ],
        },
        {
          heading: "3. Newsletter",
          body: [
            "The newsletter sign-up in this website's footer is a simulated demo feature. No email addresses are actually stored or sent to.",
          ],
        },
        {
          heading: "4. Cookies",
          body: ["This website does not use marketing or tracking cookies. No third-party analytics or advertising tools are embedded."],
        },
        {
          heading: "5. External Links",
          body: [
            "On the contact page, we link to Google Maps to make it easier to find us. Clicking this link takes you away from our website; Google's privacy policy then applies. The map itself is not embedded.",
          ],
        },
        {
          heading: "6. Your Rights",
          body: [
            "You have the right at any time to access, rectify, erase and restrict the processing of your personal data, as well as the right to data portability and to object. Please contact info@trattoria-bellavista.de for any such request.",
          ],
        },
      ],
    },
  },

  notFound: {
    eyebrow: "404",
    title: "This table hasn't been set.",
    description: "The page you're looking for doesn't exist or has moved. Head back to the homepage or take a look at our menu.",
    ctaHome: "Back to homepage",
    ctaMenu: "View menu",
  },
};
