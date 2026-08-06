import type { Locale } from "@/lib/i18n";
import type { Content } from "./types";
import { en } from "./en";
import { de } from "./de";

const dictionaries: Record<Locale, Content> = { en, de };

export function getContent(locale: Locale): Content {
  return dictionaries[locale];
}

export type { Content, Dish, MenuCategory, TeamMember, GalleryImage, NavItem } from "./types";
