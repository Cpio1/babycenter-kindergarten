"use client";

import type { ReactNode } from "react";
import { navLinks } from "@/lib/site";
import { useLanguage } from "@/components/i18n/LanguageProvider";

/** Логотип передаётся из серверного layout, т.к. проверяет наличие файла на сервере */
export function Footer({ logo }: { logo: ReactNode }) {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-ink/[0.07] bg-white">
      <div className="container-x flex flex-col gap-10 py-14 md:flex-row md:items-center md:justify-between">
        <div>
          <a href="#home" aria-label={t.header.toHome} className="inline-block">
            {logo}
          </a>
          <p className="mt-4 text-muted">{t.footer.tagline}</p>
        </div>

        <nav aria-label={t.footer.nav}>
          <ul className="flex flex-wrap gap-x-7 gap-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-semibold text-ink/75 transition-colors hover:text-ink hover:underline hover:decoration-leaf hover:decoration-4 hover:underline-offset-8"
                >
                  {t.nav[link.key]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="bg-sage-light">
        <div className="container-x py-6 text-sm text-ink/70">© 2026 BABY CENTER. {t.footer.rights}</div>
      </div>
    </footer>
  );
}
