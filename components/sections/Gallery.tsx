import { gallery, galleryImages } from "@/lib/content";
import { publicFileExists } from "@/lib/files";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Circle, Sparkle } from "@/components/ui/Decorations";
import { GalleryGrid } from "./GalleryGrid";

export function Gallery() {
  // Показываем только фото, которые реально лежат в public/images
  const items = galleryImages.filter((image) => publicFileExists(image.src));

  return (
    <section id="gallery" className="relative overflow-hidden py-20 sm:py-28">
      <Circle className="absolute top-24 -left-10 h-28 w-28 border-[12px] border-sage" />
      <Sparkle className="absolute top-28 right-[14%] h-6 w-6 text-brand" />

      <div className="container-x relative">
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
