import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/cn";

type ImagePlaceholderProps = {
  label?: string;
  /** "white" — для размещения на кремовом фоне (например, в галерее) */
  tone?: "cream" | "white";
  className?: string;
};

/** Placeholder на месте фото, пока файл не добавлен в public */
export function ImagePlaceholder({ label, tone = "cream", className }: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "bg-dots absolute inset-0 flex flex-col items-center justify-center gap-3 text-ink/45",
        tone === "white" ? "rounded-[inherit] bg-white ring-1 ring-brand/40 ring-inset" : "bg-cream",
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
