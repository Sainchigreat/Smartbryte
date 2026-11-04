import type { AnchorHTMLAttributes, ReactNode } from "react";

/* ------------------------------------------------------------------ */
/* Shared primitives                                                   */
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

/** Huddle-style numbered, uppercase wayfinding micro-label. */
export function SectionTag({
  number,
  label,
  className = "",
  tone = "violet",
}: {
  number: string;
  label: string;
  className?: string;
  tone?: "violet" | "paper";
}) {
  const color = tone === "paper" ? "text-paper/80" : "text-violet";
  return (
    <p className={`micro-label flex items-center gap-2.5 ${color} ${className}`}>
      <span
        aria-hidden
        className={`inline-block h-[7px] w-[7px] rounded-full ${
          tone === "paper" ? "bg-sun" : "bg-sun"
        }`}
      />
      <span>{number}</span>
      <span aria-hidden className="h-px w-6 bg-current opacity-40" />
      <span>{label}</span>
    </p>
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

type ButtonVariant = "primary" | "secondary" | "sun" | "card" | "paper";
type ButtonSize = "md" | "sm" | "lg";

const VARIANTS: Record<ButtonVariant, string> = {
  // SmartBryte violet owns every filled action (SuperHi single-chromatic rule)
  primary:
    "bg-violet text-white sticker-violet hover:bg-violet-deep hover:translate-y-[2px] hover:shadow-[0_1px_0_0_var(--color-violet-night)] active:translate-y-[3px] active:shadow-none",
  secondary:
    "border border-ink/25 bg-transparent text-ink hover:border-ink hover:bg-ink hover:text-paper",
  // Sun pill for the dark closing band
  sun: "bg-sun text-ink sticker-sun hover:bg-sun-deep hover:translate-y-[2px] hover:shadow-[0_1px_0_0_rgba(35,32,58,0.9)] active:translate-y-[3px] active:shadow-none",
  // White pill on pastel programme cards
  card: "border border-ink/15 bg-card text-ink hover:bg-ink hover:text-paper hover:border-ink",
  paper: "bg-paper text-ink hover:bg-white",
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

/** Pill CTA with an optional circular directional cue (WonderKids/TriVision). */
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
      className={`group inline-flex min-h-[44px] items-center justify-center rounded-full font-semibold tracking-[-0.01em] transition-all duration-150 ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...rest}
    >
      <span>{children}</span>
      {arrow && (
        <span
          aria-hidden
          className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-current/15 transition-transform duration-150 group-hover:translate-x-0.5"
        >
          <ArrowRight className="h-3.5 w-3.5" />
        </span>
      )}
    </a>
  );
}
