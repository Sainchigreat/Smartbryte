import { INTRO, IMAGE_ALT } from "../lib/content";
import { Container, SectionTag } from "./ui";
import { Blob, Ring, Sparkle } from "./shapes";

export default function Introduction() {
  return (
    <section id="introduction" className="relative overflow-hidden py-20 md:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionTag number="01" label={INTRO.label} />
          <h2 className="heading mt-5 text-[clamp(1.9rem,3.6vw,2.9rem)] text-ink">
            Education should prepare children for more than{" "}
            <span className="font-serif font-normal italic tracking-[-0.01em] text-violet">
              examinations.
            </span>
          </h2>
          <div className="mt-6 space-y-5 text-ink-soft">
            <p>{INTRO.paragraphs[0]}</p>
            <p className="border-l-[3px] border-sun pl-4 text-lg font-semibold text-ink">
              {INTRO.paragraphs[1]}
            </p>
            <p>{INTRO.paragraphs[2]}</p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <Blob className="pointer-events-none absolute -right-7 -top-9 h-40 w-40 text-sage" />
          <Ring className="pointer-events-none absolute -bottom-7 -left-6 h-20 w-20 text-sun" />
          <Sparkle className="pointer-events-none absolute -top-4 left-10 h-7 w-7 text-violet" />
          <figure className="relative overflow-hidden rounded-card border border-line bg-card">
            <img
              src="/images/intro-guided.jpg"
              alt={IMAGE_ALT.introGuided}
              width={1200}
              height={900}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover"
            />
          </figure>
        </div>
      </Container>
    </section>
  );
}
