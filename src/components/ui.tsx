import type { AnchorHTMLAttributes, ReactNode } from "react";

/* ------------------------------------------------------------------ */
/* Shared primitives — the entire UI kit: Container, PillLink, arrow.  */
/* ------------------------------------------------------------------ */

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      focusable="false"
      className={className}
    >
      <path
        d="M4 12h15M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type ButtonVariant = "primary" | "secondary" | "sun" | "card";
type ButtonSize = "md" | "sm" | "lg";

const VARIANTS: Record<ButtonVariant, string> = {
  primary: "bg-violet text-white hover:bg-violet-deep",
  secondary:
    "border border-ink/25 bg-transparent text-ink hover:border-ink hover:bg-ink hover:text-paper",
  sun: "bg-sun text-ink hover:bg-sun-deep",
  card: "border border-ink/15 bg-card text-ink hover:bg-ink hover:text-paper hover:border-ink",
};

const SIZES: Record<ButtonSize, string> = {
  sm: "gap-2 px-5 py-2.5 text-sm",
  md: "gap-2.5 px-6 py-3 text-[15px]",
  lg: "gap-3 px-7 py-3.5 text-base",
};

type PillLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  arrow?: boolean;
  children: ReactNode;
};

/** Pill CTA. The link text is its accessible name — nothing extra. */
export function PillLink({
  variant = "primary",
  size = "md",
  arrow = true,
  children,
  className = "",
  ...rest
}: PillLinkProps) {
  return (
    <a
      className={`group inline-flex min-h-[44px] items-center justify-center rounded-full font-semibold tracking-[-0.01em] transition-colors duration-150 ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...rest}
    >
      <span>{children}</span>
      {arrow && (
        <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-150 group-hover:translate-x-0.5" />
      )}
    </a>
  );
}
