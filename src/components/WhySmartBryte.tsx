import { WHY } from "../lib/content";
import { Container, SectionTag } from "./ui";
import { Ring, Sparkle, Triangle, Plus, Starburst, DotGrid } from "./shapes";

const MARKS = [
  { chip: "bg-wash-deep", shape: <Ring className="h-6 w-6 text-violet" /> },
  { chip: "bg-sun/35", shape: <Sparkle className="h-6 w-6 text-sun-deep" /> },
  { chip: "bg-sage", shape: <Triangle className="h-6 w-6 text-sage-deep" /> },
  { chip: "bg-rose", shape: <Plus className="h-6 w-6 text-rose-deep" /> },
  {
    chip: "bg-lavender",
    shape: <Starburst className="h-6 w-6 text-lavender-deep" />,
  },
];

export default function WhySmartBryte() {
  return (
    <section id="why-smartbryte" className="relative overflow-hidden bg-wash py-20 md:py-28">
      <DotGrid className="pointer-events-none absolute right-[4%] top-12 hidden h-16 w-24 text-violet opacity-20 lg:block" />
      <Container className="relative">
        <div className="max-w-2xl">
          <SectionTag number="02" label={WHY.label} />
          <h2 className="heading mt-5 text-[clamp(1.9rem,3.6vw,2.9rem)] text-ink">
            An education that gives your child{" "}
            <span className="font-serif font-normal italic tracking-[-0.01em] text-violet">
              more.
            </span>
          </h2>
          <p className="mt-5 text-ink-soft">{WHY.introduction}</p>
          <p className="mt-4 text-lg font-semibold text-ink">{WHY.leadIn}</p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {WHY.modules.map((m, i) => (
            <article
              key={m.title}
              className="rounded-card border border-line-blue bg-card p-7 transition-transform duration-150 hover:-translate-y-1"
            >
              <span
                aria-hidden
                className={`grid h-12 w-12 place-items-center rounded-2xl ${MARKS[i].chip}`}
              >
                {MARKS[i].shape}
              </span>
              <h3 className="mt-5 text-xl font-semibold tracking-[-0.01em] text-ink">
                {m.title}
              </h3>
              <p className="mt-3 text-[15.5px] leading-relaxed text-ink-soft">
                {m.body}
              </p>
            </article>
          ))}

          {/* Decorative brand tile — completes the grid, no content */}
          <div
            aria-hidden
            className="relative hidden overflow-hidden rounded-card bg-violet lg:block"
          >
            <Starburst className="absolute -right-6 -top-6 h-32 w-32 rotate-12 text-sun" />
            <Ring className="absolute bottom-8 left-8 h-16 w-16 text-sky" />
            <Sparkle className="absolute bottom-10 right-12 h-8 w-8 text-paper" />
            <DotGrid className="absolute left-8 top-10 h-12 w-20 text-paper opacity-40" />
          </div>
        </div>
      </Container>
    </section>
  );
}
