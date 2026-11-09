import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  children: ReactNode;
  href?: string;
};

const variantClass: Record<Variant, string> = {
  primary:
    "bg-[var(--color-accent)] text-[var(--color-accent-fg)] hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]",
  secondary:
    "bg-transparent text-[var(--color-ink)] border border-[var(--color-border)] hover:bg-[var(--color-surface-muted)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-ink)]",
  ghost:
    "bg-transparent text-[var(--color-ink)] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-ink)]",
};

const baseClass =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-[0.9375rem] font-medium font-[family-name:var(--font-present)] transition-[filter,background-color,color] disabled:opacity-60 disabled:pointer-events-none";

export function Button({
  variant = "primary",
  children,
  className = "",
  href,
  type = "button",
  ...rest
}: ButtonProps) {
  const classes = `${baseClass} ${variantClass[variant]} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
