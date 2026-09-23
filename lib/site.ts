/**
 * Основные настройки сайта.
 * Здесь собраны все данные, которые вы будете заменять на реальные:
 * контакты, ссылки, карта, документы.
 */

export const siteConfig = {
  name: "BABY CENTER",
  fullName: "Детский сад BABY CENTER",
  description:
    "Детский сад BABY CENTER — забота, развитие и тёплая атмосфера для каждого ребёнка.",
  // TODO: после деплоя укажите реальный домен, например "https://babycenter.kz"
  url: "https://example.com",

  logo: "/logo.png",

  // TODO: замените "#" на ссылку на документы (Google Drive, PDF и т.п.)
  documentsUrl: "#",

  // TODO: вставьте src из кода встраивания Google Maps / 2GIS / Яндекс Карт.
  // Пока строка пустая, показывается аккуратный placeholder «Карта».
  mapEmbedUrl: "",
};

export const navLinks = [
  { label: "Главная", href: "#home" },
  { label: "О нас", href: "#about" },
  { label: "Преимущества", href: "#features" },
  { label: "Галерея", href: "#gallery" },
  { label: "Документы", href: "#documents" },
  { label: "Контакты", href: "#contacts" },
] as const;

export type ContactType = "address" | "phone" | "instagram" | "schedule";

export type Contact = {
  type: ContactType;
  label: string;
  value: string;
  /** Ссылка, например "tel:+77000000000" или "https://instagram.com/..." */
  href?: string;
};

// TODO: замените value (и добавьте href) на реальные данные
export const contacts: Contact[] = [
  { type: "address", label: "Адрес", value: "Адрес будет добавлен" },
  { type: "phone", label: "Телефон", value: "Телефон будет добавлен" },
  { type: "instagram", label: "Instagram", value: "Instagram будет добавлен" },
  { type: "schedule", label: "Режим работы", value: "Режим работы будет добавлен" },
];
