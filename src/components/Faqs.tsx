import { useState } from "react";
import { FAQS } from "../lib/content";
import { Container, SectionTag } from "./ui";
import { Plus, Starburst } from "./shapes";

export default function Faqs() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faqs" className="relative overflow-hidden bg-wash py-20 md:py-28">
      <Container className="relative grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
        <div className="self-start lg:sticky lg:top-28">
          <SectionTag number="06" label={FAQS.label} />
          <h2 className="heading mt-5 text-[clamp(1.9rem,3.6vw,2.9rem)] text-ink">
            Got questions? We have{" "}
            <span className="font-serif font-normal italic tracking-[-0.01em] text-violet">
              answers.
            </span>
          </h2>
          <Starburst
            className="mt-8 hidden h-20 w-20 rotate-12 text-sun lg:block"
          />
        </div>

        <div className="space-y-3.5">
          {FAQS.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border border-line-blue bg-card"
              >
                <h3>
                  <button
                    type="button"
                    id={`faq-btn-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-[16.5px] font-semibold tracking-[-0.01em] text-ink">
                      {item.q}
                    </span>
                    <span
                      aria-hidden
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-200 ${
                        isOpen
                          ? "rotate-45 border-violet bg-violet text-white"
                          : "border-ink/15 text-ink"
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  aria-hidden={!isOpen}
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-[15.5px] leading-relaxed text-ink-soft">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
