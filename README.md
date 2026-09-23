# Детский сад BABY CENTER — лендинг

Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · lucide-react

## Запуск

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production-сборка
```

## Куда добавлять файлы

| Файл | Куда |
| --- | --- |
| Логотип | `public/logo.png` |
| Фото первого экрана | `public/hero.jpg` |
| Фото «О нас» | `public/about.jpg` |
| Галерея | `public/images/image1.jpg` … `public/images/image12.jpg` |

Пока файла нет, на его месте показывается аккуратный placeholder — сайт не падает.
После добавления фото в dev-режиме достаточно обновить страницу.

## Где менять данные

- `lib/site.ts` — контакты, ссылка на документы (`documentsUrl`), карта (`mapEmbedUrl`), меню.
- `lib/content.ts` — все тексты секций, список фото галереи.
  Для фото галереи можно указать `position` (например `"50% 20%"`), чтобы не обрезать лица.
- `app/globals.css` — фирменные цвета (`@theme`): жёлтый `brand` / `brand-soft`, зелёный `leaf` / `sage` / `sage-light`.
- Какие карточки зелёные — поле `accent: "green"` в `lib/content.ts`.

## Деплой на Vercel

Залейте проект в GitHub и импортируйте репозиторий на vercel.com — настройки по умолчанию подходят.
В `lib/site.ts` укажите реальный домен в `url`.
