import { HERO, IMAGE_ALT } from "../lib/content";
import { Container, PillLink } from "./ui";
import { Starburst, Ring, Semicircle, DotGrid, Sparkle, Squiggle } from "./shapes";

const STRIP = [
  { src: "/images/hero-junior.jpg", alt: IMAGE_ALT.heroJunior },
  { src: "/images/hero-teen.jpg", alt: IMAGE_ALT.heroTeen },
  { src: "/images/hero-project.jpg", alt: IMAGE_ALT.heroProject },
  { src: "/images/hero-young-adult.jpg", alt: IMAGE_ALT.heroYoungAdult },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Decorative cut-outs — behind content, clipped by the section edge */}
      <Starburst className="pointer-events-none absolute -left-7 top-24 hidden h-24 w-24 rotate-12 text-sun md:block" />
      <Ring className="pointer-events-none absolute right-[5%] top-16 hidden h-16 w-16 text-sky md:block" />
      <Sparkle className="pointer-events-none absolute left-[12%] top-40 hidden h-6 w-6 text-violet md:block" />
      <Semicircle className="pointer-events-none absolute -right-10 bottom-44 hidden h-24 w-48 -rotate-12 text-lavender lg:block" />
      <DotGrid className="pointer-events-none absolute bottom-24 left-[6%] hidden h-16 w-24 text-violet opacity-25 lg:block" />

      <Container className="relative pb-16 pt-14 md:pb-24 md:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="display text-[clamp(2.5rem,6.4vw,4.5rem)] text-ink">
            Turn Your Child Into a{" "}
            <span className="font-serif font-normal italic tracking-[-0.01em] text-violet">
              Future-Ready
            </span>{" "}
            <span className="relative inline-block">
              Genius.
              <Squiggle
                className="absolute left-0 w-full text-sun"
                style={{ bottom: "-0.14em", height: "0.22em" }}
              />
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
            {HERO.supporting}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
            <PillLink href="#programmes" variant="primary" size="lg">
              {HERO.primaryCta}
            </PillLink>
            <PillLink href="#apply" variant="secondary" size="lg" arrow={false}>
              {HERO.secondaryCta}
            </PillLink>
          </div>

          <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink-soft">
            <Sparkle className="h-4 w-4 text-sun-deep" />
            {HERO.ageNote}
          </p>
        </div>

        {/* Curated education photo strip (TriVision hero sequence) */}
        <div className="mt-14 grid grid-cols-2 gap-4 md:mt-16 md:grid-cols-4 md:gap-5 md:pb-6">
          {STRIP.map((img, i) => (
            <figure
              key={img.src}
              className={`overflow-hidden rounded-img border border-line bg-card ${
                i % 2 === 1 ? "md:translate-y-6" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                width={900}
                height={1125}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                className="aspect-[4/5] w-full object-cover"
              />
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
