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

  // Аттестационные документы (папка Google Drive)
  documentsUrl: "https://drive.google.com/drive/folders/1w5eXovarENTAzEsQpxvXPwdgDHVeoMdD",

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

export const contacts: Contact[] = [
  {
    type: "address",
    label: "Адрес",
    value: "г. Алматы, Алатауский район, мкр. Акбулак, ул. Талдыарал, д. 3",
  },
  { type: "phone", label: "Телефон", value: "+7 747 114 73 48", href: "tel:+77471147348" },
  {
    type: "instagram",
    label: "Instagram",
    value: "@baby_center_almaty",
    href: "https://instagram.com/baby_center_almaty",
  },
  { type: "schedule", label: "Режим работы", value: "08:00–18:30" },
];
