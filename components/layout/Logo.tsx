"use client";

import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { cn } from "@/lib/cn";

type LogoProps = {
  /** Есть ли файл public/logo.png — проверяется на сервере в layout */
  hasLogo: boolean;
  className?: string;
  /** Показывать ли подпись BABY CENTER рядом с логотипом */
  withText?: boolean;
};

/**
 * Логотип BABY CENTER. Файл: public/logo.png.
 * Пока файла нет — показывается аккуратная жёлтая заглушка «BC».
 */
export function Logo({ hasLogo, className, withText = true }: LogoProps) {
  const { t } = useLanguage();

  return (
    <span className={cn("flex items-center gap-3", className)}>
      {hasLogo ? (
        <Image
          src={siteConfig.logo}
          alt={t.logo.alt}
          width={160}
          height={160}
          priority
          className="h-12 w-auto object-contain sm:h-14"
        />
      ) : (
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-lg font-black text-ink sm:h-14 sm:w-14">
          BC
        </span>
      )}

      {withText && (
        <span className="flex flex-col leading-none">
          <span className="text-lg font-black tracking-tight text-ink sm:text-xl">BABY CENTER</span>
          <span className="mt-1 text-xs font-semibold text-muted">{t.logo.subtitle}</span>
        </span>
      )}
    </span>
  );
}
