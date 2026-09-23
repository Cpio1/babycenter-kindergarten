import { ArrowRight } from "lucide-react";
import { cta } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Circle, Cloud, Sparkle } from "@/components/ui/Decorations";
import { Reveal } from "@/components/ui/Reveal";

export function CallToAction() {
  return (
    <section className="px-2 sm:px-4">
      <Reveal>
        <div className="relative overflow-hidden rounded-[32px] bg-brand px-6 py-20 text-center sm:rounded-[48px] sm:py-24">
          {/* Белые декоративные элементы */}
          <Circle className="absolute -top-24 -left-20 h-72 w-72 border-[18px] border-white/35" />
          <Circle className="absolute -right-16 -bottom-24 h-80 w-80 bg-white/25" />
          <Cloud className="absolute top-10 right-[14%] hidden h-10 w-20 text-white/80 sm:block" />
          <Cloud className="absolute bottom-12 left-[10%] hidden h-7 w-14 text-white/60 sm:block" />
          <Sparkle className="absolute top-14 left-[18%] h-6 w-6 text-white" />
          <Sparkle className="absolute right-[22%] bottom-14 h-4 w-4 text-white" />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl leading-[1.12] font-black tracking-tight text-balance text-ink sm:text-5xl">
              {cta.title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-ink/75 sm:text-xl">{cta.text}</p>
            <Button href="#contacts" variant="white" size="lg" className="mt-9" icon={<ArrowRight className="h-5 w-5" />}>
              {cta.buttonLabel}
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
