import { TESTIMONIALS } from "../lib/content";
import { Container, SectionTag } from "./ui";
import { Ring, Starburst, Sparkle } from "./shapes";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <SectionTag number="05" label={TESTIMONIALS.label} className="justify-center" />
          <h2 className="heading mt-5 text-[clamp(1.9rem,3.6vw,2.9rem)] text-ink">
            Hear from parents who have experienced the{" "}
            <span className="font-serif font-normal italic tracking-[-0.01em] text-violet">
              SmartBryte difference.
            </span>
          </h2>
        </div>

        {/* Restrained empty-state panel — the supplied note is the only content */}
        <div className="relative mx-auto mt-10 max-w-2xl overflow-hidden rounded-card border border-dashed border-line bg-card p-10 text-center">
          <Ring className="pointer-events-none absolute -left-5 -top-5 h-16 w-16 text-sky opacity-60" />
          <Starburst className="pointer-events-none absolute -bottom-6 -right-6 h-20 w-20 rotate-12 text-sun opacity-70" />
          <div className="relative">
            <span
              aria-hidden
              className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-wash"
            >
              <Sparkle className="h-6 w-6 text-violet" />
            </span>
            <p className="mx-auto mt-5 max-w-md text-ink-soft">{TESTIMONIALS.note}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
