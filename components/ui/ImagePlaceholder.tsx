import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/cn";

type ImagePlaceholderProps = {
  label?: string;
  /** Фон заглушки: кремовый (по умолчанию) или светло-зелёный */
  tone?: "cream" | "green";
  className?: string;
};

const tones = {
  cream: "bg-cream text-ink/45",
  green: "bg-sage-light text-sage-dark/60",
};

/** Placeholder на месте фото, пока файл не добавлен в public */
export function ImagePlaceholder({ label, tone = "cream", className }: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "bg-dots absolute inset-0 flex flex-col items-center justify-center gap-3",
        tones[tone],
        className,
      )}
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-card">
        <ImageIcon className="h-6 w-6" strokeWidth={1.75} />
      </span>
      {label && <span className="px-4 text-center text-xs font-semibold tracking-wide">{label}</span>}
    </div>
  );
}
