import Image from "next/image";
import { publicFileExists } from "@/lib/files";
import { cn } from "@/lib/cn";
import { ImagePlaceholder } from "./ImagePlaceholder";

type SafeImageProps = {
  /** Путь от папки public, например "/hero.jpg" */
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  /** CSS object-position — какую часть фото сохранять при обрезке */
  position?: string;
};

/**
 * Серверный компонент: показывает фото через next/image,
 * а если файла в public ещё нет — аккуратный placeholder.
 * Родитель должен иметь position: relative и заданный размер.
 */
export function SafeImage({ src, alt, sizes, priority, className, position = "50% 30%" }: SafeImageProps) {
  if (!publicFileExists(src)) {
    return <ImagePlaceholder label={`public${src}`} className={className} />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={cn("object-cover", className)}
      style={{ objectPosition: position }}
    />
  );
}
