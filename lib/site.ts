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

  // Google Maps Embed (без API key) — интерактивная карта в разделе «Контакты»
  mapEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(
    "Алматы, Алатауский район, микрорайон Акбулак, улица Талдыарал, дом 3",
  )}&output=embed`,
};

// Подписи пунктов меню — в lib/translations.ts → nav
export const navLinks = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "advantages", href: "#features" },
  { key: "gallery", href: "#gallery" },
  { key: "documents", href: "#documents" },
  { key: "contacts", href: "#contacts" },
] as const;

export type ContactType = "address" | "phone" | "instagram" | "schedule";

export type Contact = {
  type: ContactType;
  /**
   * Значение, одинаковое для всех языков. Если не задано — берётся из переводов
   * (адрес: lib/translations.ts → contacts.address). Подписи — contacts.labels.
   */
  value?: string;
  /** Ссылка, например "tel:+77000000000" или "https://instagram.com/..." */
  href?: string;
};

export const contacts: Contact[] = [
  { type: "address" },
  { type: "phone", value: "+7 747 114 73 48", href: "tel:+77471147348" },
  {
    type: "instagram",
    value: "@baby_center_almaty",
    href: "https://instagram.com/baby_center_almaty",
  },
  { type: "schedule", value: "08:00–18:30" },
];
