import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "green" | "outline" | "white";
type Size = "md" | "lg";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
};

const variants: Record<Variant, string> = {
  primary: "bg-brand text-ink shadow-glow hover:bg-[#ffe500] hover:shadow-[0_18px_34px_-14px_rgb(230_200_0/0.95)]",
  green: "bg-sage text-ink shadow-[0_12px_28px_-14px_rgb(143_190_114/0.9)] hover:bg-leaf",
  outline: "bg-white text-ink ring-1 ring-inset ring-ink/15 hover:bg-sage-light hover:ring-leaf",
  white: "bg-white text-ink shadow-card hover:shadow-card-hover",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-6 text-[15px]",
  lg: "h-14 px-8 text-base",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  icon,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full font-bold whitespace-nowrap",
        "transition-all duration-300 ease-out hover:-translate-y-0.5",
        "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/60",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
      {icon && (
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">{icon}</span>
      )}
    </a>
  );
}
