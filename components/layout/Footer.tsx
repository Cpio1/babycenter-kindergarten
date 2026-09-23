import { navLinks } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-ink/[0.07] bg-white">
      <div className="container-x flex flex-col gap-10 py-14 md:flex-row md:items-center md:justify-between">
        <div>
          <a href="#home" aria-label="BABY CENTER — на главную" className="inline-block">
            <Logo />
          </a>
          <p className="mt-4 text-muted">Детский сад BABY CENTER</p>
        </div>

        <nav aria-label="Навигация в подвале">
          <ul className="flex flex-wrap gap-x-7 gap-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-semibold text-ink/75 transition-colors hover:text-ink hover:underline hover:decoration-brand hover:decoration-4 hover:underline-offset-8"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-ink/[0.07]">
        <div className="container-x py-6 text-sm text-muted">© 2026 BABY CENTER. Все права защищены.</div>
      </div>
    </footer>
  );
}
