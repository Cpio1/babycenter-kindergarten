import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Features } from "@/components/sections/Features";
import { DailyLife } from "@/components/sections/DailyLife";
import { Gallery } from "@/components/sections/Gallery";
import { Documents } from "@/components/sections/Documents";
import { CallToAction } from "@/components/sections/CallToAction";
import { Contacts } from "@/components/sections/Contacts";

// Чередование фонов: white → light yellow → white → cream → white → yellow accent → white
export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Features />
      <DailyLife />
      <Gallery />
      <Documents />
      <CallToAction />
      <Contacts />
    </main>
  );
}
