import type { ReactNode } from "react";
import { PROGRAMMES, type Programme } from "../lib/content";
import { Container, SectionTag, PillLink } from "./ui";
import { Starburst, Semicircle, Sparkle, Ring, Triangle } from "./shapes";

const TONES: Record<
  Programme["tone"],
  { bg: string; border: string; deep: string; pill: string; mark: ReactNode }
> = {
  sage: {
    bg: "bg-sage",
    border: "border-sage-deep/25",
    deep: "text-sage-deep",
    pill: "bg-card/75 text-sage-deep",
    mark: <Starburst className="h-9 w-9 text-sage-deep/30" />,
  },
  lavender: {
    bg: "bg-lavender",
    border: "border-lavender-deep/25",
    deep: "text-lavender-deep",
    pill: "bg-card/75 text-lavender-deep",
    mark: <Ring className="h-9 w-9 text-lavender-deep/30" />,
  },
  rose: {
    bg: "bg-rose",
    border: "border-rose-deep/25",
    deep: "text-rose-deep",
    pill: "bg-card/75 text-rose-deep",
    mark: <Triangle className="h-9 w-9 text-rose-deep/30" />,
  },
};

function ProgrammeCard({ p }: { p: Programme }) {
  const t = TONES[p.tone];
  return (
    <article
      className={`flex h-full flex-col rounded-card border ${t.border} ${t.bg} p-7`}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className={`inline-flex items-center rounded-full px-3.5 py-1.5 text-[13px] font-bold tracking-[0.01em] ${t.pill}`}
        >
          {p.ageRange}
        </span>
        <span aria-hidden className="mt-0.5 shrink-0">
          {t.mark}
        </span>
      </div>

      <h3 className="mt-5 text-2xl font-bold tracking-[-0.015em] text-ink">
        {p.name}
      </h3>
      <p className="mt-2 text-[17px] font-semibold leading-snug text-ink">
        {p.headline}
      </p>
      <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
        {p.description}
      </p>

      <div className="my-5 h-px bg-ink/10" />

      <p className="text-sm font-bold text-ink">{p.learnLabel}</p>
      <ul className="mt-3 space-y-2.5">
        {p.learn.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <Sparkle
              className={`mt-[3px] h-3.5 w-3.5 shrink-0 ${t.deep}`}
            />
            <span className="text-[14.5px] leading-snug text-ink/85">{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-7">
        <PillLink
          href="#apply"
          variant="card"
          size="md"
          className="w-full"
          aria-label={`${p.cta} — go to enrolment`}
        >
          {p.cta}
        </PillLink>
      </div>
    </article>
  );
}

export default function Programmes() {
  return (
    <section id="programmes" className="relative overflow-hidden py-20 md:py-28">
      <Starburst className="pointer-events-none absolute -right-8 top-16 hidden h-28 w-28 rotate-12 text-sun md:block" />
      <Semicircle className="pointer-events-none absolute -left-12 bottom-24 hidden h-24 w-48 rotate-12 text-sky lg:block" />

      <Container className="relative">
        <div className="max-w-2xl">
          <SectionTag number="03" label={PROGRAMMES.label} />
          <h2 className="heading mt-5 text-[clamp(1.9rem,3.6vw,2.9rem)] text-ink">
            The right learning experience for every stage of{" "}
            <span className="font-serif font-normal italic tracking-[-0.01em] text-violet">
              growth.
            </span>
          </h2>
          <p className="mt-5 text-ink-soft">{PROGRAMMES.introduction}</p>
        </div>

        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROGRAMMES.items.map((p) => (
            <ProgrammeCard key={p.id} p={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}
