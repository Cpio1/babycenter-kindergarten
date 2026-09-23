import { cn } from "@/lib/cn";

type DecorProps = { className?: string };

/** Мягкая четырёхлучевая звёздочка */
export function Sparkle({ className }: DecorProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={cn("fill-current", className)}>
      <path d="M12 0c.6 5.7 3.1 8.8 12 12-8.9 3.2-11.4 6.3-12 12-.6-5.7-3.1-8.8-12-12C8.9 8.8 11.4 5.7 12 0Z" />
    </svg>
  );
}

/** Минималистичное облачко */
export function Cloud({ className }: DecorProps) {
  return (
    <svg viewBox="0 0 64 32" aria-hidden="true" className={cn("fill-current", className)}>
      <path d="M18 32a12 12 0 0 1-1.6-23.9A16 16 0 0 1 46.7 9 11.5 11.5 0 0 1 52.5 32H18Z" />
    </svg>
  );
}

/** Сетка из точек */
export function DotGrid({ className }: DecorProps) {
  return <div aria-hidden="true" className={cn("bg-dots rounded-3xl", className)} />;
}

/** Круг — заливка или контур задаются классами */
export function Circle({ className }: DecorProps) {
  return <div aria-hidden="true" className={cn("rounded-full", className)} />;
}
