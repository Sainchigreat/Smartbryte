import { GAINS } from "../lib/content";
import { Container, SectionTag } from "./ui";
import { Starburst, Sparkle } from "./shapes";

export default function Gains() {
  return (
    <section
      id="what-your-child-gains"
      className="relative overflow-hidden bg-wash py-20 md:py-28"
    >
      <Sparkle className="pointer-events-none absolute right-[6%] top-14 hidden h-8 w-8 text-sun-deep md:block" />
      <Container className="relative">
        <div className="max-w-2xl">
          <SectionTag number="04" label={GAINS.label} />
          <h2 className="heading mt-5 text-[clamp(1.9rem,3.6vw,2.9rem)] text-ink">
            We want your child to leave with more than just what they learn in{" "}
            <span className="font-serif font-normal italic tracking-[-0.01em] text-violet">
              class.
            </span>
          </h2>
          <p className="mt-5 text-ink-soft">{GAINS.introduction}</p>
        </div>

        <ol className="mt-12 grid gap-x-12 md:grid-cols-2">
          {GAINS.items.map((item, i) => (
            <li
              key={item.title}
              className={`flex gap-5 border-t border-line-blue py-7 ${
                i === GAINS.items.length - 1 ? "md:col-span-2" : ""
              }`}
            >
              <span
                aria-hidden
                className="font-serif text-4xl italic leading-none text-violet"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <h3 className="text-lg font-semibold tracking-[-0.01em] text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-2xl text-[15.5px] leading-relaxed text-ink-soft">
                  {item.body}
                </p>
              </div>
              {i === GAINS.items.length - 1 && (
                <Starburst
                  className="hidden h-16 w-16 shrink-0 rotate-12 text-sun md:block"
                />
              )}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
