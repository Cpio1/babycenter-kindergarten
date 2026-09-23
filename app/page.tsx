import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Features } from "@/components/sections/Features";
import { DailyLife } from "@/components/sections/DailyLife";
import { Gallery } from "@/components/sections/Gallery";
import { Documents } from "@/components/sections/Documents";
import { CallToAction } from "@/components/sections/CallToAction";
import { Contacts } from "@/components/sections/Contacts";
import { about, galleryImages } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import { publicFileExists } from "@/lib/files";

// Чередование фонов: white → light yellow → white → cream → white → yellow accent → white
export default function HomePage() {
  // Наличие файлов в public проверяем на сервере; секции — клиентские (переключение языка)
  const hasLogo = publicFileExists(siteConfig.logo);
  const hasAboutImage = publicFileExists(about.image);
  // В галерее показываем только фото, которые реально лежат в public/images
  const photos = galleryImages.filter((image) => publicFileExists(image.src));

  return (
    <main>
      <Hero hasLogo={hasLogo} />
      <About hasImage={hasAboutImage} />
      <Features />
      <DailyLife />
      <Gallery items={photos} />
      <Documents />
      <CallToAction />
      <Contacts />
    </main>
  );
}
