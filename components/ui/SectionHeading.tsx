import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type AccentTone = "yellow" | "green";

type SectionHeadingProps = {
  eyebrow?: string;
  /** Цвет бейджа над заголовком: жёлтый (по умолчанию) или мягкий зелёный */
  eyebrowTone?: AccentTone;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

const eyebrowTones: Record<AccentTone, { badge: string; dot: string }> = {
  yellow: { badge: "bg-brand-soft text-ink", dot: "bg-brand ring-brand/30" },
  green: { badge: "bg-sage-light text-sage-dark", dot: "bg-leaf ring-sage/70" },
};

export function Eyebrow({
  children,
  tone = "yellow",
  className,
}: {
  children: ReactNode;
  tone?: AccentTone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold",
        eyebrowTones[tone].badge,
        className,
      )}
    >
      <span className={cn("h-2 w-2 rounded-full ring-4", eyebrowTones[tone].dot)} />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  eyebrowTone = "yellow",
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <Eyebrow tone={eyebrowTone}>{eyebrow}</Eyebrow>}
      <h2 className="mt-5 text-3xl leading-[1.12] font-extrabold tracking-tight text-balance text-ink sm:text-4xl lg:text-[2.9rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg leading-relaxed text-pretty text-muted">{description}</p>
      )}
    </div>
  );
}
