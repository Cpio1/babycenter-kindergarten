"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

/** Логотип передаётся из серверного layout, т.к. проверяет наличие файла на сервере */
export function Header({ logo }: { logo: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Закрываем меню по Esc и при переходе на desktop-ширину
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const media = window.matchMedia("(min-width: 1024px)");
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
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <a href="#home" aria-label="BABY CENTER — на главную" onClick={() => setOpen(false)}>
          {logo}
        </a>

        <nav aria-label="Основное меню" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-[15px] font-semibold text-ink/75 transition-colors duration-200 hover:bg-brand-soft hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#contacts">Связаться</Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-soft text-ink transition-colors hover:bg-brand lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Мобильное меню: плавное раскрытие по высоте */}
      <div
        id="mobile-menu"
        className={cn(
          "grid transition-[grid-template-rows,opacity] duration-300 ease-out lg:hidden",
          open ? "grid-rows-[1fr] opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <nav aria-label="Мобильное меню" className="container-x flex flex-col gap-1 pt-2 pb-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className="rounded-2xl px-4 py-3 text-lg font-bold text-ink transition-colors hover:bg-brand-soft"
              >
                {link.label}
              </a>
            ))}
            <Button
              href="#contacts"
              size="lg"
              className="mt-3 w-full"
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
            >
              Связаться
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
