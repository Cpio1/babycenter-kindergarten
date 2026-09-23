import { about } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SafeImage } from "@/components/ui/SafeImage";
import { Circle, Cloud, Sparkle } from "@/components/ui/Decorations";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Фото */}
        <Reveal className="relative isolate order-2 mx-auto w-full max-w-xl lg:order-1">
          <div className="absolute -inset-4 -z-10 rotate-[-4deg] rounded-[44px] bg-brand-soft sm:-inset-6" />
          <Cloud className="absolute -top-8 right-6 h-10 w-20 text-white drop-shadow-[0_6px_10px_rgb(40_83_122/0.08)]" />
          <Circle className="absolute -right-3 bottom-16 h-14 w-14 bg-brand" />
          <Sparkle className="absolute -bottom-5 left-10 h-7 w-7 text-brand" />

          {/* 👉 Фото о саде: положите файл в public/about.jpg */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] bg-cream shadow-soft">
            <SafeImage src={about.image} alt={about.imageAlt} sizes="(min-width: 1024px) 40vw, 100vw" />
          </div>
        </Reveal>

        {/* Текст */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <SectionHeading eyebrow={about.eyebrow} title={about.title} />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {about.values.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 100}>
                <div className="h-full rounded-3xl border border-ink/[0.06] bg-cream p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-soft">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand">
                    <Icon className="h-5 w-5 text-ink" strokeWidth={2} />
                  </span>
                  <h3 className="mt-4 text-lg font-extrabold text-ink">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
