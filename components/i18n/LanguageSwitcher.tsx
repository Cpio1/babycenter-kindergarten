"use client";

import type { Language } from "@/lib/translations";
import { cn } from "@/lib/cn";
import { useLanguage } from "./LanguageProvider";

const options: { value: Language; label: string }[] = [
  { value: "ru", label: "RU" },
  { value: "kz", label: "KZ" },
];

/** Переключатель RU | KZ: активный язык выделен жёлтым */
export function LanguageSwitcher({ className }: { className?: string }) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.header.language}
      className={cn("flex items-center gap-0.5 rounded-full bg-sage-light p-1 ring-1 ring-sage ring-inset", className)}
    >
      {options.map((option) => {
        const active = option.value === language;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setLanguage(option.value)}
            aria-pressed={active}
            className={cn(
              "h-8 min-w-9 rounded-full px-2.5 text-[13px] font-extrabold tracking-wide transition-all duration-200 sm:h-9 sm:min-w-10 sm:text-sm",
              "focus-visible:ring-4 focus-visible:ring-brand/60 focus-visible:outline-none",
              active ? "bg-brand text-ink shadow-glow" : "text-ink/60 hover:bg-white hover:text-ink",
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
