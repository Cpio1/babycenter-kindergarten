"use client";

import type { GalleryImage } from "@/lib/content";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Circle, Sparkle } from "@/components/ui/Decorations";
import { GalleryGrid } from "./GalleryGrid";

/** items — только фото, которые есть в public/images (отбираются на сервере в app/page.tsx) */
export function Gallery({ items }: { items: GalleryImage[] }) {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="relative overflow-hidden py-20 sm:py-28">
      <Circle className="absolute top-24 -left-10 h-28 w-28 border-[12px] border-sage" />
      <Sparkle className="absolute top-28 right-[14%] h-6 w-6 text-brand" />

      <div className="container-x relative">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow={t.gallery.eyebrow}
            title={t.gallery.title}
            description={t.gallery.description}
          />
        </Reveal>

        <GalleryGrid items={items} />
      </div>
    </section>
  );
}
