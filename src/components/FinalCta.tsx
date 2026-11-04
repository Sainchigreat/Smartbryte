import { FINAL_CTA } from "../lib/content";
import { Container, PillLink } from "./ui";
import { Starburst, Semicircle, Ring, DotGrid } from "./shapes";

export default function FinalCta() {
  return (
    <section
      id="apply"
      className="relative overflow-hidden bg-violet-deep py-20 text-paper md:py-28"
    >
      {/* Decorative cut-outs kept to the edges, never over the copy */}
      <Starburst className="pointer-events-none absolute -left-10 top-8 hidden h-40 w-40 rotate-12 text-sun md:block" />
      <Semicircle className="pointer-events-none absolute -right-12 bottom-0 hidden h-28 w-56 -rotate-12 text-sky md:block" />
      <Ring className="pointer-events-none absolute right-[10%] top-12 hidden h-16 w-16 text-paper opacity-20 lg:block" />
      <DotGrid className="pointer-events-none absolute bottom-10 left-[8%] hidden h-14 w-24 text-paper opacity-25 lg:block" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
        <h2 className="display text-[clamp(2.1rem,4.6vw,3.4rem)] text-paper">
          Your child's{" "}
          <span className="font-serif font-normal italic tracking-[-0.01em] text-sun">
            future
          </span>{" "}
          is worth investing in.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-paper/85">
          {FINAL_CTA.supporting1}
        </p>
        <p className="mt-4 text-lg font-semibold text-paper">
          {FINAL_CTA.supporting2}
        </p>
        <div className="mt-9 flex justify-center">
          {/* Non-destructive placeholder: stays on the enrolment section until
              a real application destination is supplied. */}
          <PillLink href="#apply" variant="sun" size="lg">
            {FINAL_CTA.cta}
          </PillLink>
        </div>
        </div>
      </Container>
    </section>
  );
}
