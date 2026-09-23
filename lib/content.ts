/**
 * Тексты и списки для секций лендинга.
 * Всё, что помечено TODO, — нейтральные заглушки: замените их на реальную информацию.
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
  title: string;
  text: string;
  /** Мягкий зелёный акцент для отдельных карточек (по умолчанию — жёлтый) */
  accent?: "green";
};

type FactItem = {
  icon: LucideIcon;
  label: string;
  value: string;
  accent?: "green";
};

/* ---------------------------- HERO ---------------------------- */

export const hero = {
  badge: "Детский сад BABY CENTER",
  titleStart: "Место, где дети",
  titleHighlight: "растут, играют",
  titleEnd: "и открывают мир",
  subtitle: "Забота, развитие и тёплая атмосфера для каждого ребёнка.",
  highlights: ["Забота", "Развитие", "Уют"],
};

/* ---------------------------- О НАС ---------------------------- */

export const about = {
  eyebrow: "О BABY CENTER",
  title: "Место, где каждый ребёнок чувствует себя особенным",
  // TODO: замените абзацы на реальный текст о детском саде
  paragraphs: [
    "BABY CENTER — это пространство, где ребёнок чувствует себя в безопасности и окружён вниманием. Мы создаём комфортную и развивающую среду, в которой хочется играть, узнавать новое и дружить.",
    "Каждый день наполнен тёплым общением, интересными занятиями и заботой о самочувствии детей, чтобы родители были спокойны, а малыши — счастливы.",
  ],
  // Фото для раздела «О нас» (в галерее не используется)
  image: "/images/image1.jpeg",
  imageAlt: "Жизнь в детском саду BABY CENTER",
  values: [
    { icon: HeartHandshake, title: "Забота", text: "Внимание к каждому ребёнку" },
    { icon: Sprout, accent: "green", title: "Развитие", text: "Новые знания через игру" },
    { icon: Sofa, title: "Комфорт", text: "Уютная и спокойная среда" },
  ] satisfies IconItem[],
  facts: [
    { icon: Users, label: "Количество групп", value: "5 групп" },
    { icon: Baby, label: "Возраст детей", value: "2–6 лет", accent: "green" },
    { icon: Languages, label: "Языки обучения", value: "Русский и казахский" },
    { icon: Utensils, label: "Питание", value: "5-разовое питание", accent: "green" },
  ] satisfies FactItem[],
};

/* ------------------------- ПРЕИМУЩЕСТВА ------------------------- */

export const features = {
  eyebrow: "Преимущества",
  title: "Почему выбирают BABY CENTER",
  description: "Мы делаем всё, чтобы каждый день в детском саду был радостным и полезным.",
  items: [
    {
      icon: Fingerprint,
      title: "Индивидуальный подход",
      text: "Учитываем характер, интересы и темп развития каждого ребёнка.",
    },
    {
      icon: BookOpen,
      accent: "green",
      title: "Развивающие занятия",
      text: "Занятия, которые помогают познавать мир с интересом и удовольствием.",
    },
    {
      icon: ShieldCheck,
      title: "Безопасная среда",
      text: "Продуманное пространство, где ребёнок чувствует себя защищённым.",
    },
    {
      icon: HeartHandshake,
      accent: "green",
      title: "Заботливые воспитатели",
      text: "Внимательные взрослые, которые поддерживают и вдохновляют детей.",
    },
    {
      icon: Sparkles,
      title: "Интересный досуг",
      text: "Праздники, игры и творческие активности, которые запоминаются.",
    },
    {
      icon: Sun,
      accent: "green",
      title: "Комфортная атмосфера",
      text: "Тёплая, доброжелательная обстановка, в которой легко и спокойно.",
    },
  ] satisfies IconItem[],
};

/* --------------------------- НАШ ДЕНЬ --------------------------- */

export const daily = {
  eyebrow: "Наш день",
  title: "Каждый день — новые открытия",
  description:
    "День в BABY CENTER складывается из игры, обучения, творчества и прогулок — так дети развиваются гармонично и с радостью.",
  items: [
    {
      icon: Puzzle,
      title: "Игры",
      text: "Сюжетные и подвижные игры учат дружить, договариваться и проявлять себя.",
    },
    {
      icon: GraduationCap,
      title: "Обучение",
      text: "Познавательные занятия в игровой форме развивают речь, внимание и мышление.",
    },
    {
      icon: Palette,
      title: "Творчество",
      text: "Рисование, лепка и музыка помогают выражать эмоции и фантазировать.",
    },
    {
      icon: TreePine,
      title: "Прогулки",
      text: "Свежий воздух, движение и наблюдение за природой каждый день.",
    },
  ] satisfies IconItem[],
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

export const gallery = {
  eyebrow: "Галерея",
  title: "Яркие моменты BABY CENTER",
  description: "Немного из нашей повседневной жизни — игры, праздники и маленькие открытия.",
};

/* -------------------------- ДОКУМЕНТЫ -------------------------- */

export const documents = {
  eyebrow: "Для родителей",
  title: "Документы",
  cardTitle: "Аттестационные документы",
  // TODO: при необходимости уточните описание
  cardText: "Официальные аттестационные документы детского сада BABY CENTER доступны для ознакомления.",
  buttonLabel: "Открыть документы",
};

/* ----------------------------- CTA ----------------------------- */

export const cta = {
  title: "Хотите узнать больше о BABY CENTER?",
  text: "Свяжитесь с нами — мы с радостью ответим на ваши вопросы.",
  buttonLabel: "Связаться с нами",
};
