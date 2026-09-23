import { gallery, galleryImages } from "@/lib/content";
import { publicFileExists } from "@/lib/files";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GalleryGrid } from "./GalleryGrid";

export function Gallery() {
  // Проверяем на сервере, какие фото уже добавлены в public/images
  const items = galleryImages.map((image) => ({ ...image, exists: publicFileExists(image.src) }));

  return (
    <section id="gallery" className="bg-cream py-20 sm:py-28">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow={gallery.eyebrow}
            title={gallery.title}
            description={gallery.description}
          />
        </Reveal>

        <GalleryGrid items={items} />
      </div>
    </section>
  );
}
