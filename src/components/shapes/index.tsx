/**
 * SmartBryte decorative shape library.
 *
 * A small, reusable set of flat geometric "paper-cut" marks inspired by
 * SuperHi + WonderKids. They are pure decoration: always aria-hidden,
 * always behind content (z-0), never over text, faces or controls.
 * Fills use currentColor so each instance is tinted with a token class.
 */
import type { CSSProperties } from "react";

type ShapeProps = {
  className?: string;
  style?: CSSProperties;
};

function starPoints(
  spikes: number,
  outer: number,
  inner: number,
  cx = 50,
  cy = 50,
): string {
  const pts: string[] = [];
  const step = Math.PI / spikes;
  let rot = -Math.PI / 2;
  for (let i = 0; i < spikes; i++) {
    pts.push(`${cx + Math.cos(rot) * outer},${cy + Math.sin(rot) * outer}`);
    rot += step;
    pts.push(`${cx + Math.cos(rot) * inner},${cy + Math.sin(rot) * inner}`);
    rot += step;
  }
  return pts.join(" ");
}

const base = {
  "aria-hidden": true as const,
  focusable: false as const,
};

/** 12-point seal / starburst — the signature WonderKids/TriVision mark. */
export function Starburst({ className, style }: ShapeProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} style={style} {...base}>
      <polygon points={starPoints(12, 50, 38)} fill="currentColor" />
    </svg>
  );
}

/** 4-point sparkle. */
export function Sparkle({ className, style }: ShapeProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} style={style} {...base}>
      <path
        d="M50 0 C55 30 70 45 100 50 C70 55 55 70 50 100 C45 70 30 55 0 50 C30 45 45 30 50 0 Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Flat semicircle. */
export function Semicircle({ className, style }: ShapeProps) {
  return (
    <svg viewBox="0 0 100 50" className={className} style={style} {...base}>
      <path d="M0 50 A50 50 0 0 1 100 50 Z" fill="currentColor" />
    </svg>
  );
}

/** Concentric ring target. */
export function Ring({ className, style }: ShapeProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} style={style} {...base}>
      <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="7" />
      <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="7" />
      <circle cx="50" cy="50" r="13" fill="currentColor" />
    </svg>
  );
}

/** Hand-drawn underline squiggle (place beneath an accent word). */
export function Squiggle({ className, style }: ShapeProps) {
  return (
    <svg
      viewBox="0 0 220 24"
      preserveAspectRatio="none"
      className={className}
      style={style}
      {...base}
    >
      <path
        d="M4 15 C40 5 70 21 105 12 C140 3 170 19 216 9"
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Small dot grid texture. */
export function DotGrid({ className, style }: ShapeProps) {
  const dots = [];
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 6; c++) {
      dots.push(<circle key={`${r}-${c}`} cx={8 + c * 16} cy={8 + r * 16} r="3.4" fill="currentColor" />);
    }
  }
  return (
    <svg viewBox="0 0 100 64" className={className} style={style} {...base}>
      {dots}
    </svg>
  );
}

/** Flat triangle. */
export function Triangle({ className, style }: ShapeProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} style={style} {...base}>
      <polygon points="50,4 96,92 4,92" fill="currentColor" />
    </svg>
  );
}

/** Organic blob (photo backing / corner accent). */
export function Blob({ className, style }: ShapeProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} style={style} {...base}>
      <path
        d="M44.7,-58.9C57.4,-49.3,66.9,-35.9,71.9,-20.9C76.9,-5.9,77.4,10.7,71.6,24.6C65.8,38.5,53.7,49.7,40,57.9C26.3,66.1,11,71.3,-4.9,77.3C-20.8,83.3,-41.6,90.1,-54.9,82.4C-68.2,74.7,-74,52.5,-77.3,32.1C-80.6,11.7,-81.4,-6.9,-75.4,-22.3C-69.4,-37.7,-56.6,-49.9,-42.3,-59.3C-28,-68.7,-12.2,-75.3,2.3,-78.1C16.8,-80.9,32,-70.5,44.7,-58.9Z"
        transform="translate(100 100)"
        fill="currentColor"
      />
    </svg>
  );
}

/** Plus / cross mark. */
export function Plus({ className, style }: ShapeProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} style={style} {...base}>
      <rect x="42" y="6" width="16" height="88" rx="8" fill="currentColor" />
      <rect x="6" y="42" width="88" height="16" rx="8" fill="currentColor" />
    </svg>
  );
}
