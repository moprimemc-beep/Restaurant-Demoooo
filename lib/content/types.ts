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

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type FormCopy = {
  name: string;
  email: string;
  message: string;
  messagePlaceholder: string;
  privacyPrefix: string;
  privacyLink: string;
  privacySuffix: string;
  submit: string;
  submitting: string;
  successTitle: string;
  successText: string;
  successButton: string;
  errors: {
    name: string;
    email: string;
    privacy: string;
    message: string;
  };
};

export type LegalSection = {
  heading: string;
  body: string[];
};

export type Content = {
  locale: "en" | "de";
  meta: {
    htmlLang: string;
    siteTitleTemplate: string;
    siteDescription: string;
    keywords: string[];
  };

  restaurant: {
    name: string;
    slogan: string;
    foundingYear: number;
    city: string;
    country: string;
    type: string;
    cuisine: string;
    seats: number;
    description: string;
    philosophy: string;
    address: { street: string; zip: string; city: string; country: string };
    phone: { display: string; href: string };
    email: { display: string; href: string };
    mapsQuery: string;
  };

  values: { title: string; description: string }[];
  team: TeamMember[];
  stats: { value: string; label: string }[];
  openingHours: { day: string; hours: string }[];
  socialLinks: { label: string; handle: string }[];
  navigation: NavItem[];
  menu: MenuCategory[];
  galleryImages: GalleryImage[];

  common: {
    skipLink: string;
    menuOpenLabel: string;
    menuCloseLabel: string;
    reserveCta: string;
    languageLabel: string;
    fullMenuLink: string;
    fullGalleryLink: string;
    moreAboutUsLink: string;
    closeImageLabel: string;
    previousImageLabel: string;
    nextImageLabel: string;
    mainNavLabel: string;
    mobileNavLabel: string;
  };

  footer: {
    tagline: string;
    navigationTitle: string;
    hoursTitle: string;
    contactTitle: string;
    newsletterTitle: string;
    newsletterText: string;
    newsletterPlaceholder: string;
    newsletterButtonLabel: string;
    newsletterSuccess: string;
    reservationLink: string;
    impressumLink: string;
    datenschutzLink: string;
    copyrightSuffix: string;
    socialAriaSuffix: string;
  };

  home: {
    hero: {
      metaLine: string;
      headlineLine1: string;
      headlineLine2: string;
      subtext: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
    philosophy: {
      number: string;
      eyebrow: string;
      title: string;
    };
    specialties: {
      number: string;
      eyebrow: string;
      title: string;
      description: string;
      dishes: Dish[];
    };
    menuTeaser: {
      number: string;
      eyebrow: string;
      title: string;
      description: string;
      viewLabel: string;
    };
    galleryPreview: {
      number: string;
      eyebrow: string;
      title: string;
      description: string;
    };
    aboutTeaser: {
      number: string;
      eyebrow: string;
      title: string;
      description: string;
    };
    reservationCta: {
      eyebrow: string;
      title: string;
      description: string;
      orCallPrefix: string;
    };
  };

  menuPage: {
    title: string;
    description: string;
    heroTitle: string;
    heroDescription: string;
    categoryNavLabel: string;
  };

  galleryPage: {
    title: string;
    description: string;
    heroTitle: string;
    heroDescription: string;
  };

  aboutPage: {
    title: string;
    heroTitle: string;
    description: string;
    heroDescription: string;
    chapters: {
      number: string;
      eyebrow: string;
      title: string;
      paragraphs: string[];
      imageAlt: string;
    }[];
    team: {
      number: string;
      eyebrow: string;
      title: string;
      description: string;
    };
  };

  reservationPage: {
    title: string;
    description: string;
    heroTitle: string;
    heroDescription: string;
    goodToKnow: string;
    hoursLabel: string;
    phoneQuestion: string;
    emailLabel: string;
    groupNote: string;
    form: FormCopy & {
      guests: string;
      guestUnit: string;
      guestsUnitPlural: string;
      date: string;
      time: string;
      phone: string;
      errors: FormCopy["errors"] & {
        guests: string;
        date: string;
        time: string;
        phone: string;
      };
    };
  };

  contactPage: {
    title: string;
    description: string;
    heroTitle: string;
    heroDescription: string;
    addressLabel: string;
    phoneLabel: string;
    emailLabel: string;
    hoursLabel: string;
    mapLink: string;
    form: FormCopy & {
      subject: string;
      errors: FormCopy["errors"] & { subject: string };
    };
  };

  legal: {
    impressum: {
      title: string;
      description: string;
      notice: string;
      sections: LegalSection[];
    };
    datenschutz: {
      title: string;
      description: string;
      notice: string;
      sections: LegalSection[];
    };
  };

  notFound: {
    eyebrow: string;
    title: string;
    description: string;
    ctaHome: string;
    ctaMenu: string;
  };
};
