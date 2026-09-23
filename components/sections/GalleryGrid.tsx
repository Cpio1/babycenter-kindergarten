"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryImage } from "@/lib/content";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { cn } from "@/lib/cn";

type Item = GalleryImage & { exists: boolean };

/** Сколько фото показывать до нажатия «Смотреть все фотографии» */
const INITIAL_COUNT = 7;

/**
 * Раскладка «мозаикой» для 12 фото (desktop — 4 колонки, mobile — 2).
 * Первые 7 плиток образуют ровный блок, все 12 — тоже без пустот.
 */
const tileClasses = [
  "col-span-2 row-span-2", // 1 — большая
  "", // 2
  "lg:row-span-2", // 3 — высокая
  "", // 4
  "", // 5
  "lg:col-span-2", // 6 — широкая
  "", // 7
  "col-span-2 lg:col-span-1 lg:row-span-2", // 8
  "lg:col-span-2", // 9
  "", // 10
  "", // 11
  "lg:col-span-2", // 12
];

export function GalleryGrid({ items }: { items: Item[] }) {
  const [showAll, setShowAll] = useState(false);
  const [active, setActive] = useState<number | null>(null);

  const visible = showAll ? items : items.slice(0, INITIAL_COUNT);
  // Для лайтбокса используем только реально существующие фото
  const photos = items.filter((item) => item.exists);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: 1 | -1) => setActive((i) => (i === null ? i : (i + dir + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, step]);

  const current = active !== null ? photos[active] : null;

  return (
    <>
      <div className="mt-14 grid auto-rows-[150px] grid-flow-dense grid-cols-2 gap-3 sm:auto-rows-[210px] sm:gap-4 lg:auto-rows-[230px] lg:grid-cols-4 lg:gap-5">
        {visible.map((item, i) => {
          const tileClass = cn(
            "group relative overflow-hidden rounded-[20px] bg-white sm:rounded-[28px]",
            tileClasses[i % tileClasses.length],
          );

          if (!item.exists) {
            return (
              <div key={item.src} className={tileClass}>
                <ImagePlaceholder label={`public${item.src}`} tone="white" />
              </div>
            );
          }

          return (
            <button
              key={item.src}
              type="button"
              onClick={() => setActive(photos.indexOf(item))}
              aria-label={`Открыть фото: ${item.alt}`}
              className={cn(tileClass, "cursor-zoom-in focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand")}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                style={{ objectPosition: item.position ?? "50% 30%" }}
              />
              <span className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/[0.06]" />
            </button>
          );
        })}
      </div>

      {items.length > INITIAL_COUNT && (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className="group inline-flex h-14 items-center gap-2 rounded-full bg-white px-8 font-bold text-ink shadow-card ring-1 ring-ink/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand hover:ring-brand focus-visible:ring-4 focus-visible:ring-brand/60 focus-visible:outline-none"
          >
            {showAll ? "Свернуть галерею" : "Смотреть все фотографии"}
            <ChevronDown className={cn("h-5 w-5 transition-transform duration-300", showAll && "rotate-180")} />
          </button>
        </div>
      )}

      {/* Лайтбокс */}
      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Просмотр фотографии"
          onClick={close}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/85 p-4 backdrop-blur-sm sm:p-10"
        >
          <div className="relative h-full w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image src={current.src} alt={current.alt} fill sizes="100vw" className="rounded-[20px] object-contain" />
          </div>

          <button
            type="button"
            onClick={close}
            aria-label="Закрыть"
            className="absolute top-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-ink transition hover:bg-brand"
          >
            <X className="h-5 w-5" />
          </button>

          {photos.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label="Предыдущее фото"
                className="absolute left-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-ink transition hover:bg-brand sm:left-6"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label="Следующее фото"
                className="absolute right-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-ink transition hover:bg-brand sm:right-6"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}
