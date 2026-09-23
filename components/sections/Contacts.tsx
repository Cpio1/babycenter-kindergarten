import { Clock, MapPin, Phone, type LucideIcon } from "lucide-react";
import type { ComponentType } from "react";
import { contacts, siteConfig, type ContactType } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

/** Иконка Instagram (в lucide-react брендовых иконок нет) */
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

const icons: Record<ContactType, LucideIcon | ComponentType<{ className?: string }>> = {
  address: MapPin,
  phone: Phone,
  instagram: InstagramIcon,
  schedule: Clock,
};

export function Contacts() {
  return (
    <section id="contacts" className="py-20 sm:py-28">
      <div className="container-x">
        <Reveal>
          <SectionHeading eyebrow="Свяжитесь с нами" title="Контакты" />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          {/* Контактные данные — редактируются в lib/site.ts */}
          <ul className="grid gap-4">
            {contacts.map((contact, i) => {
              const Icon = icons[contact.type];
              const value = contact.href ? (
                <a
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="transition-colors hover:text-ink/70"
                >
                  {contact.value}
                </a>
              ) : (
                contact.value
              );

              return (
                <li key={contact.type}>
                  <Reveal delay={i * 80}>
                    <div className="flex items-center gap-5 rounded-3xl border border-ink/[0.07] bg-white p-5 transition-all duration-300 hover:border-brand/60 hover:shadow-card sm:p-6">
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-soft">
                        <Icon className="h-6 w-6 text-ink" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-muted">{contact.label}</p>
                        <p className="mt-0.5 text-lg font-bold text-ink">{value}</p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ul>

          {/* Карта: вставьте ссылку в lib/site.ts → mapEmbedUrl */}
          <Reveal delay={150} className="h-full">
            <div className="relative h-full min-h-[360px] overflow-hidden rounded-[32px] bg-cream">
              {siteConfig.mapEmbedUrl ? (
                <iframe
                  src={siteConfig.mapEmbedUrl}
                  title="Карта — BABY CENTER"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full border-0"
                />
              ) : (
                <div className="bg-dots absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand shadow-glow">
                    <MapPin className="h-7 w-7 text-ink" />
                  </span>
                  <span className="text-xl font-extrabold text-ink">Карта</span>
                  <span className="text-sm text-muted">Появится после добавления адреса</span>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
