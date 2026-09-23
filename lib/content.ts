/**
 * Нетекстовые данные секций: иконки, акценты, фото.
 * Все тексты — в lib/translations.ts (порядок элементов совпадает с порядком здесь).
 */
import {
  Baby,
  BookOpen,
  Fingerprint,
  GraduationCap,
  HeartHandshake,
  Languages,
  Palette,
  Puzzle,
  ShieldCheck,
  Sofa,
  Sparkles,
  Sprout,
  Sun,
  TreePine,
  Users,
  Utensils,
  type LucideIcon,
} from "lucide-react";

type IconItem = {
  icon: LucideIcon;
  /** Мягкий зелёный акцент для отдельных карточек (по умолчанию — жёлтый) */
  accent?: "green";
};

/* ---------------------------- О НАС ---------------------------- */

export const about = {
  // Фото для раздела «О нас» (в галерее не используется)
  image: "/images/image1.jpeg",
  // Тексты: translations → about.values
  values: [{ icon: HeartHandshake }, { icon: Sprout, accent: "green" }, { icon: Sofa }] satisfies IconItem[],
  // Тексты: translations → about.facts
  facts: [
    { icon: Users },
    { icon: Baby, accent: "green" },
    { icon: Languages },
    { icon: Utensils, accent: "green" },
  ] satisfies IconItem[],
};

/* ------------------------- ПРЕИМУЩЕСТВА ------------------------- */

// Тексты: translations → features.items
export const features = {
  items: [
    { icon: Fingerprint },
    { icon: BookOpen, accent: "green" },
    { icon: ShieldCheck },
    { icon: HeartHandshake, accent: "green" },
    { icon: Sparkles },
    { icon: Sun, accent: "green" },
  ] satisfies IconItem[],
};

/* --------------------------- НАШ ДЕНЬ --------------------------- */

// Тексты: translations → daily.items
export const daily = {
  items: [{ icon: Puzzle }, { icon: GraduationCap }, { icon: Palette }, { icon: TreePine }] satisfies IconItem[],
};

/* --------------------------- ГАЛЕРЕЯ --------------------------- */

export type GalleryImage = {
  src: string;
  alt: string;
  /**
   * Какую часть фото держать в кадре при обрезке (CSS object-position).
   * По умолчанию "50% 30%" — чуть выше центра, чтобы не обрезать лица.
   */
  position?: string;
};

// Фото лежат в public/images (image1 — в разделе «О нас», здесь не используется).
// Порядок подобран под раскладку галереи: 1-е — большая плитка.
// position — какую часть кадра держать при обрезке, чтобы не срезать лица.
export const galleryImages: GalleryImage[] = [
  { src: "/images/image2.jpeg", alt: "BABY CENTER", position: "50% 62%" },
  { src: "/images/image6.jpeg", alt: "BABY CENTER", position: "50% 30%" },
  { src: "/images/image3.jpeg", alt: "BABY CENTER", position: "50% 68%" },
  { src: "/images/image5.jpeg", alt: "BABY CENTER", position: "50% 65%" },
  { src: "/images/image4.jpeg", alt: "BABY CENTER", position: "50% 70%" },
];
