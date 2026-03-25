import { en } from "./en";
import { es } from "./es";
export type { Translations } from "./en";

export const translations = { en, es } as const;
export type Lang = keyof typeof translations;

export function getLang(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  return lang === "es" ? "es" : "en";
}

export function useTranslations(lang: Lang) {
  return translations[lang];
}