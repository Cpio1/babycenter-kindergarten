"use client";

import Image from "next/image";
import { ArrowRight, Check, Heart, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Circle, DotGrid, Sparkle } from "@/components/ui/Decorations";
import { Reveal } from "@/components/ui/Reveal";

/** hasLogo — есть ли public/logo.png (проверяется на сервере в app/page.tsx) */
export function Hero({ hasLogo }: { hasLogo: boolean }) {
  const { t } = useLanguage();
  const hero = t.hero;

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Мягкое жёлтое свечение на фоне */}
      <Circle className="pointer-events-none absolute -top-24 -right-32 h-72 w-72 bg-brand-soft/80 blur-3xl sm:-top-40 sm:-right-40 sm:h-[34rem] sm:w-[34rem] sm:bg-brand-soft" />

      <div className="container-x relative grid items-center gap-14 pt-8 pb-20 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:py-16">
        {/* Текст */}
        <Reveal>
          <Eyebrow>{hero.badge}</Eyebrow>

          <h1 className="mt-6 text-[2.6rem] leading-[1.06] font-black tracking-tight text-balance text-ink sm:text-6xl lg:text-[4.1rem] xl:text-[4.5rem]">
            {hero.titleStart} <span className="text-highlight">{hero.titleHighlight}</span> {hero.titleEnd}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">{hero.subtitle}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#about" size="lg" icon={<ArrowRight className="h-5 w-5" />}>
              {hero.primaryButton}
            </Button>
            <Button href="#contacts" size="lg" variant="outline">
              {hero.secondaryButton}
            </Button>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {hero.highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 font-semibold text-ink/80">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sage">
                  <Check className="h-3.5 w-3.5 text-ink" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Фото с декором */}
        <Reveal delay={150} className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <Circle className="absolute -top-6 -right-4 h-32 w-32 bg-sage sm:-top-8 sm:-right-8 sm:h-44 sm:w-44" />
          <Circle className="absolute -bottom-8 -left-6 h-24 w-24 border-[10px] border-brand/80 sm:h-32 sm:w-32" />
          <DotGrid className="absolute -bottom-10 right-10 hidden h-28 w-40 sm:block" />
          <Sparkle className="absolute -left-3 top-10 h-8 w-8 text-leaf sm:-left-10" />
          <Sparkle className="absolute -right-2 bottom-24 h-5 w-5 text-brand sm:-right-8" />

          {/* Главный визуал — логотип BABY CENTER (public/logo.png) на весь блок */}
          <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]">
            {hasLogo && (
              <Image
                src={siteConfig.logo}
                alt={hero.logoAlt}
                fill
                priority
                sizes="(min-width: 1024px) 45vw, (min-width: 640px) 36rem, 100vw"
                className="object-contain drop-shadow-[0_28px_40px_rgb(40_83_122/0.18)]"
              />
            )}
          </div>

          {/* Плавающие карточки */}
          <div className="animate-float-soft absolute -bottom-6 left-4 flex items-center gap-3 rounded-3xl bg-white/95 px-5 py-4 shadow-soft backdrop-blur sm:left-8">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand">
              <Heart className="h-5 w-5 text-ink" strokeWidth={2.25} />
            </span>
            <span className="leading-tight">
              <span className="block font-extrabold text-ink">{hero.cardTitle}</span>
              <span className="text-sm text-muted">{hero.cardText}</span>
            </span>
          </div>

          <div
            className="animate-float-soft absolute top-8 -left-4 hidden items-center gap-2 rounded-full bg-white/95 py-2.5 pr-5 pl-2.5 shadow-soft backdrop-blur sm:flex lg:-left-10"
            style={{ animationDelay: "1.5s" }}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sage">
              <Sparkles className="h-4 w-4 text-ink" />
            </span>
            <span className="text-sm font-bold text-ink">{hero.chip}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
