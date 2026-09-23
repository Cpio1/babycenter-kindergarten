"use client";

import { daily } from "@/lib/content";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Cloud, Sparkle } from "@/components/ui/Decorations";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export function DailyLife() {
  const { t } = useLanguage();

  return (
    <section id="daily" className="relative py-20 sm:py-28">
      <div className="container-x grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        {/* Заголовок — «прилипает» на desktop */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <SectionHeading eyebrow={t.daily.eyebrow} eyebrowTone="green" title={t.daily.title} description={t.daily.description} />

            <div className="relative mt-10 hidden h-28 lg:block" aria-hidden="true">
              <Cloud className="absolute top-2 left-0 h-12 w-24 text-sage" />
              <Cloud className="absolute top-12 left-28 h-8 w-16 text-brand-soft" />
              <Sparkle className="absolute top-0 left-52 h-6 w-6 text-brand" />
            </div>
          </Reveal>
        </div>

        {/* 4 направления — шахматная раскладка со смещением */}
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
          {daily.items.map(({ icon: Icon }, i) => {
            const { title, text } = t.daily.items[i];
            return (
              <Reveal key={i} delay={i * 100} className={cn(i % 2 === 1 && "sm:translate-y-12")}>
                <article className="group relative h-full overflow-hidden rounded-[28px] border border-ink/[0.07] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-leaf hover:bg-sage-light hover:shadow-card-hover sm:p-8">
                  {/* Большой номер на фоне */}
                  <span
                    aria-hidden="true"
                    className="absolute -top-3 right-4 text-[6.5rem] leading-none font-black text-sage/45 transition-colors duration-300 group-hover:text-brand"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-sage transition-colors duration-300 group-hover:bg-leaf">
                    <Icon className="h-6 w-6 text-ink" strokeWidth={2} />
                  </span>
                  <h3 className="relative mt-10 text-2xl font-extrabold text-ink">{title}</h3>
                  <p className="relative mt-2 leading-relaxed text-muted">{text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
