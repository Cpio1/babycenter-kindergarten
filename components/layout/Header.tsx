"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher";
import { cn } from "@/lib/cn";

/** Логотип передаётся из серверного layout, т.к. проверяет наличие файла на сервере */
export function Header({ logo }: { logo: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Закрываем меню по Esc и при переходе на desktop-ширину (xl — полное меню помещается и на казахском)
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const media = window.matchMedia("(min-width: 1280px)");
    const onMedia = () => media.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    media.addEventListener("change", onMedia);
    return () => {
      window.removeEventListener("keydown", onKey);
      media.removeEventListener("change", onMedia);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        solid
          ? "border-ink/[0.07] bg-white/80 shadow-[0_10px_30px_-24px_rgb(40_83_122/0.35)] backdrop-blur-xl"
          : "border-transparent bg-white",
      )}
    >
      <div className="container-x flex h-20 items-center justify-between gap-3 sm:gap-6">
        <a href="#home" aria-label={t.header.toHome} onClick={() => setOpen(false)}>
          {logo}
        </a>

        <nav aria-label={t.header.mainMenu} className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-[15px] font-semibold text-ink/75 transition-colors duration-200 hover:bg-sage-light hover:text-ink"
            >
              {t.nav[link.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Переключатель языка — доступен и на desktop, и на mobile */}
          <LanguageSwitcher />

          <div className="hidden xl:block">
            <Button href="#contacts">{t.header.contact}</Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.header.closeMenu : t.header.openMenu}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sage-light text-ink transition-colors hover:bg-sage xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Мобильное меню: плавное раскрытие по высоте */}
      <div
        id="mobile-menu"
        className={cn(
          "grid transition-[grid-template-rows,opacity] duration-300 ease-out xl:hidden",
          open ? "grid-rows-[1fr] opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <nav aria-label={t.header.mobileMenu} className="container-x flex flex-col gap-1 pt-2 pb-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className="rounded-2xl px-4 py-3 text-lg font-bold text-ink transition-colors hover:bg-sage-light"
              >
                {t.nav[link.key]}
              </a>
            ))}
            <Button
              href="#contacts"
              size="lg"
              className="mt-3 w-full"
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
            >
              {t.header.contact}
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
